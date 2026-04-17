import { PrismaClient } from '@prisma/client'

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

  // 2. Create foundational Tags
  const aiTag = await prisma.tag.upsert({
    where: { slug: 'ai' },
    update: {},
    create: { slug: 'ai', name: 'AI' }
  })
  
  const devTag = await prisma.tag.upsert({
    where: { slug: 'developer' },
    update: {},
    create: { slug: 'developer', name: 'Developer' }
  })

  // 3. Migrate some static tools to database
  const cursorTool = await prisma.tool.upsert({
    where: { slug: 'cursor' },
    update: {},
    create: {
      slug: 'cursor',
      name: 'Cursor',
      description: 'The AI-first code editor. Build software faster with AI.',
      longDescription: 'Cursor is an AI-first code editor built from the ground up to make developers incredibly productive...',
      icon: '⚡',
      category: 'devtools',
      platform: 'macOS',
      stars: 4250,
      price: 'Free',
      authorId: adminUser.id,
      tags: { connect: [{ id: aiTag.id }, { id: devTag.id }] }
    }
  })

  // 4. Migrate some static prompts to database
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
  console.log("Gradual Migration Strategy: API Routes Should Be Created Next to Point to These DB Models Before Frontend Removes Static Arrays!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
