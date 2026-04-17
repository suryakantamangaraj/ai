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
  const devTag = await prisma.tag.upsert({
    where: { slug: 'developer' },
    update: {},
    create: { slug: 'developer', name: 'Developer' }
  })

  const linuxPrompt = await prisma.prompt.upsert({
    where: { slug: 'act-as-linux-terminal' },
    update: {},
    create: {
      slug: 'act-as-linux-terminal',
      title: 'Act as a Linux Terminal',
      description: 'I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show.',
      content: 'I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show...',
      category: 'Technical',
      type: 'code',
      likes: 842,
      authorId: adminUser.id,
      tags: { connect: [{ id: devTag.id }] }
    }
  })

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

