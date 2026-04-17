// @ts-nocheck
import { PrismaClient } from '@prisma/client'
const fs = require('fs')
const path = require('path')

const toolsJsonPath = path.join(__dirname, 'tools.json')
const tools = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'))

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding Database...")

  // 1. Create a Default Admin User for Authorship
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@aiverse.com' },
    update: {},
    create: {
      email: 'admin@aiverse.com',
      username: 'admin',
      authProvider: 'system',
      providerId: 'system-admin-id',
      role: 'ADMIN',
    },
  })

  // 2. Create foundational Tags & Migrate Tools
  console.log(`Migrating ${tools.length} static tools...`)
  
  for (const t of tools) {
    // Upsert tags for this tool
    const tagConnects = []
    for (const tagName of t.tags) {
      const slug = tagName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      const tag = await prisma.tag.upsert({
        where: { slug },
        update: {},
        create: { slug, name: tagName }
      })
      tagConnects.push({ id: tag.id })
    }

    const toolSlug = t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const screenshotsJson = t.screenshots ? JSON.stringify(t.screenshots) : null

    await prisma.tool.upsert({
      where: { slug: toolSlug },
      update: {
        name: t.name,
        description: t.description,
        longDescription: t.longDescription || '',
        icon: t.icon,
        category: t.category,
        platform: t.platform,
        stars: t.stars,
        forks: t.forks || 0,
        price: t.price,
        website: t.website,
        github: t.github,
        language: t.language,
        isFeatured: t.featured || false,
        screenshots: screenshotsJson,
        tags: {
          connect: tagConnects
        }
      },
      create: {
        slug: toolSlug,
        name: t.name,
        description: t.description,
        longDescription: t.longDescription || '',
        icon: t.icon,
        category: t.category,
        platform: t.platform,
        stars: t.stars,
        forks: t.forks || 0,
        price: t.price,
        website: t.website,
        github: t.github,
        language: t.language,
        authorId: adminUser.id,
        isFeatured: t.featured || false,
        screenshots: screenshotsJson,
        tags: {
          connect: tagConnects
        }
      }
    })
  }

  // 3. Migrate some static prompts to database
  const promptsJsonPath = path.join(__dirname, 'prompts.json')
  const prompts = JSON.parse(fs.readFileSync(promptsJsonPath, 'utf8'))
  console.log(`Migrating ${prompts.length} static prompts...`)

  for (const p of prompts) {
    const promptSlug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    
    // Upsert tags for this prompt
    const tagConnects = []
    for (const tagName of p.tags) {
      const slug = tagName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      const tag = await prisma.tag.upsert({
        where: { slug },
        update: {},
        create: { slug, name: tagName }
      })
      tagConnects.push({ id: tag.id })
    }

    const createdPrompt = await prisma.prompt.upsert({
      where: { slug: promptSlug },
      update: {
        title: p.title,
        description: p.description,
        content: p.prompt,
        category: p.category,
        type: p.type || 'text',
        likes: p.likes,
        visibilityStatus: 'PUBLIC',
        tags: {
          connect: tagConnects
        }
      },
      create: {
        slug: promptSlug,
        title: p.title,
        description: p.description,
        content: p.prompt,
        category: p.category,
        type: p.type || 'text',
        likes: p.likes,
        authorId: adminUser.id,
        visibilityStatus: 'PUBLIC',
        tags: {
          connect: tagConnects
        }
      }
    })

    // Create an initial version if not exists
    const existingVersions = await prisma.promptVersion.findMany({
      where: { promptId: createdPrompt.id }
    })
    
    if (existingVersions.length === 0) {
      await prisma.promptVersion.create({
        data: {
          promptId: createdPrompt.id,
          content: p.prompt,
          versionNumber: 1
        }
      })
    }
  }

  console.log("✅ Seed Data created Successfully.")
}

main()
  .catch((e) => {
    console.error(e)
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

