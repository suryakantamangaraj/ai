# Prompts Gallery Backend

I've successfully migrated the Prompts Gallery data to the backend and created the necessary API endpoints. The system now fetches prompts dynamically from the database instead of relying on the static frontend file.

## What Was Completed

1. **Database Schema Update**: 
   - Added `visibilityStatus` field to the `Prompt` model.
   - Pushed the new schema using Prisma to sync the changes.

2. **Data Migration**:
   - Extracted the static prompt data from `src/data/prompts.ts` into a new `prompts.json` file in the `server/prisma` directory.
   - Updated the Prisma seed script (`seed.ts`) to loop through `prompts.json` and insert them into the database, automatically creating and linking associated `Tags` and the first `PromptVersion` for each prompt.
   - Executed the seed script successfully.

3. **API Implementation**:
   - `GET /api/prompts`: Implemented a listing endpoint with full support for:
     - Filtering: `category`, `type`, and `tags`
     - Searching: `q` query string searches across title, description, and prompt content.
     - Sorting: `sort` query parameter supports `newest`, `popular`, and `alphabetical`.
     - Pagination: `page` and `limit` arguments.
     - Returns only prompts with `visibilityStatus` set to `PUBLIC`.
   - `GET /api/prompts/:slug`: Detail endpoint that retrieves a single prompt by its slug, including author information, associated tags, and past versions.
   - `GET /api/prompts/:id/related`: Fetches up to 4 related prompts based on matching category or shared tags.

## Code Changes

```diff:schema.prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id              String         @id @default(uuid())
  username        String?        @unique
  email           String         @unique
  avatar          String?
  authProvider    String
  providerId      String         @unique
  role            String         @default("USER") // Admin, User
  createdAt       DateTime       @default(now())
  updatedAt       DateTime       @updatedAt

  auditLogs          AuditLog[]
  refreshTokens      RefreshToken[]
  
  // New Relations
  tools              Tool[]
  toolReviews        ToolReview[]
  toolReviewVotes    ToolReviewVote[]
  toolSubmissions    ToolSubmission[]
  toolRequests       ToolRequest[]

  prompts            Prompt[]
  promptLikes        PromptLike[]
  promptSaves        PromptSave[]
  promptRuns         PromptRun[]
  promptReports      PromptReport[]

  collections        Collection[]
  subscriptions      Subscription[]
  chatConversations  ChatConversation[]
  notifications      Notification[]
  moderationFlags    ModerationFlag[]
  savedLearningItems SavedLearningItem[]
}

model Tag {
  id        String   @id @default(uuid())
  slug      String   @unique
  name      String
  
  tools     Tool[]
  prompts   Prompt[]
}

model Tool {
  id               String   @id @default(uuid())
  slug             String   @unique
  name             String
  description      String
  longDescription  String?  @default("")
  icon             String?
  category         String
  platform         String?
  stars            Int      @default(0)
  forks            Int      @default(0)
  price            String?
  website          String?
  github           String?
  language         String?
  authorId         String
  
  // New Admin & Media Fields
  isFeatured       Boolean  @default(false)
  approvalStatus   String   @default("APPROVED") // PENDING, APPROVED, REJECTED
  visibilityStatus String   @default("PUBLIC")   // PUBLIC, PRIVATE
  screenshots      String?  // JSON string representing an array of URLs
  averageRating    Float    @default(0)
  reviewCount      Int      @default(0)

  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  author          User     @relation(fields: [authorId], references: [id])
  tags            Tag[]
  reviews         ToolReview[]

  @@index([slug])
  @@index([category])
  @@index([stars])
  @@index([createdAt])
  @@index([authorId])
}

model ToolReview {
  id        String   @id @default(uuid())
  toolId    String
  userId    String
  rating    Int
  content   String
  status    String   @default("APPROVED") // PENDING, APPROVED, REJECTED
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  tool      Tool     @relation(fields: [toolId], references: [id], onDelete: Cascade)
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  votes     ToolReviewVote[]
}

model ToolReviewVote {
  id        String   @id @default(uuid())
  reviewId  String
  userId    String
  isHelpful Boolean
  createdAt DateTime @default(now())

  review    ToolReview @relation(fields: [reviewId], references: [id], onDelete: Cascade)
  user      User       @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model ToolSubmission {
  id        String   @id @default(uuid())
  userId    String
  status    String   @default("PENDING") // PENDING, APPROVED, REJECTED
  toolData  String   // JSON string in SQLite
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model ToolRequest {
  id          String   @id @default(uuid())
  userId      String
  title       String
  description String
  status      String   @default("OPEN")
  createdAt   DateTime @default(now())

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Prompt {
  id          String   @id @default(uuid())
  slug        String   @unique
  title       String
  description String
  content     String
  category    String
  type        String   @default("text") // text, image, code
  likes       Int      @default(0)
  authorId    String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  author      User     @relation(fields: [authorId], references: [id])
  tags        Tag[]
  versions    PromptVersion[]
  promptLikes PromptLike[]
  promptSaves PromptSave[]
  promptRuns  PromptRun[]
  reports     PromptReport[]

  @@index([slug])
  @@index([category])
  @@index([likes])
  @@index([createdAt])
  @@index([authorId])
}

model PromptVersion {
  id            String   @id @default(uuid())
  promptId      String
  content       String
  versionNumber Int
  createdAt     DateTime @default(now())

  prompt        Prompt   @relation(fields: [promptId], references: [id], onDelete: Cascade)
}

model PromptLike {
  id        String   @id @default(uuid())
  promptId  String
  userId    String
  createdAt DateTime @default(now())

  prompt    Prompt   @relation(fields: [promptId], references: [id], onDelete: Cascade)
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model PromptSave {
  id        String   @id @default(uuid())
  promptId  String
  userId    String
  createdAt DateTime @default(now())

  prompt    Prompt   @relation(fields: [promptId], references: [id], onDelete: Cascade)
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model PromptRun {
  id             String   @id @default(uuid())
  promptId       String
  userId         String
  inputVariables String?  // JSON string
  output         String
  createdAt      DateTime @default(now())

  prompt         Prompt   @relation(fields: [promptId], references: [id], onDelete: Cascade)
  user           User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model PromptReport {
  id        String   @id @default(uuid())
  promptId  String
  userId    String
  reason    String
  createdAt DateTime @default(now())

  prompt    Prompt   @relation(fields: [promptId], references: [id], onDelete: Cascade)
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Collection {
  id          String   @id @default(uuid())
  slug        String   @unique
  userId      String
  name        String
  description String?
  isPublic    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  items       CollectionItem[]
}

model CollectionItem {
  id           String   @id @default(uuid())
  collectionId String
  itemType     String   // TOOL or PROMPT
  itemId       String   // ID of the tool or prompt
  addedAt      DateTime @default(now())

  collection   Collection @relation(fields: [collectionId], references: [id], onDelete: Cascade)
}

model LearningTopic {
  id        String   @id @default(uuid())
  slug      String   @unique
  title     String
  content   String
  parentId  String?
  position  Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  parent    LearningTopic?  @relation("TopicToTopic", fields: [parentId], references: [id])
  children  LearningTopic[] @relation("TopicToTopic")
}

model SavedLearningItem {
  id        String   @id @default(uuid())
  userId    String
  topicId   String
  savedAt   DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Subscription {
  id               String   @id @default(uuid())
  userId           String
  planType         String   // free, pro, enterprise
  status           String   // active, canceled, past_due
  currentPeriodEnd DateTime
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  user             User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model ChatConversation {
  id        String   @id @default(uuid())
  userId    String
  title     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  messages  ChatMessage[]
}

model ChatMessage {
  id             String   @id @default(uuid())
  conversationId String
  role           String   // system, user, assistant
  content        String
  createdAt      DateTime @default(now())

  conversation   ChatConversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)
}

model Notification {
  id        String   @id @default(uuid())
  userId    String
  type      String
  content   String
  link      String?
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model ModerationFlag {
  id              String   @id @default(uuid())
  entityType      String   // TOOL, PROMPT, USER, REVIEW
  entityId        String
  flaggedByUserId String
  reason          String
  status          String   @default("PENDING") // PENDING, RESOLVED, DISMISSED
  createdAt       DateTime @default(now())

  flaggedByUser   User     @relation(fields: [flaggedByUserId], references: [id], onDelete: Cascade)
}

model AuditLog {
  id        String   @id @default(uuid())
  userId    String
  event     String
  ip        String?
  userAgent String?
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
}

model RefreshToken {
  id        String   @id @default(uuid())
  token     String   @unique
  userId    String
  expiresAt DateTime
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
}
===
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id              String         @id @default(uuid())
  username        String?        @unique
  email           String         @unique
  avatar          String?
  authProvider    String
  providerId      String         @unique
  role            String         @default("USER") // Admin, User
  createdAt       DateTime       @default(now())
  updatedAt       DateTime       @updatedAt

  auditLogs          AuditLog[]
  refreshTokens      RefreshToken[]
  
  // New Relations
  tools              Tool[]
  toolReviews        ToolReview[]
  toolReviewVotes    ToolReviewVote[]
  toolSubmissions    ToolSubmission[]
  toolRequests       ToolRequest[]

  prompts            Prompt[]
  promptLikes        PromptLike[]
  promptSaves        PromptSave[]
  promptRuns         PromptRun[]
  promptReports      PromptReport[]

  collections        Collection[]
  subscriptions      Subscription[]
  chatConversations  ChatConversation[]
  notifications      Notification[]
  moderationFlags    ModerationFlag[]
  savedLearningItems SavedLearningItem[]
}

model Tag {
  id        String   @id @default(uuid())
  slug      String   @unique
  name      String
  
  tools     Tool[]
  prompts   Prompt[]
}

model Tool {
  id               String   @id @default(uuid())
  slug             String   @unique
  name             String
  description      String
  longDescription  String?  @default("")
  icon             String?
  category         String
  platform         String?
  stars            Int      @default(0)
  forks            Int      @default(0)
  price            String?
  website          String?
  github           String?
  language         String?
  authorId         String
  
  // New Admin & Media Fields
  isFeatured       Boolean  @default(false)
  approvalStatus   String   @default("APPROVED") // PENDING, APPROVED, REJECTED
  visibilityStatus String   @default("PUBLIC")   // PUBLIC, PRIVATE
  screenshots      String?  // JSON string representing an array of URLs
  averageRating    Float    @default(0)
  reviewCount      Int      @default(0)

  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  author          User     @relation(fields: [authorId], references: [id])
  tags            Tag[]
  reviews         ToolReview[]

  @@index([slug])
  @@index([category])
  @@index([stars])
  @@index([createdAt])
  @@index([authorId])
}

model ToolReview {
  id        String   @id @default(uuid())
  toolId    String
  userId    String
  rating    Int
  content   String
  status    String   @default("APPROVED") // PENDING, APPROVED, REJECTED
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  tool      Tool     @relation(fields: [toolId], references: [id], onDelete: Cascade)
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  votes     ToolReviewVote[]
}

model ToolReviewVote {
  id        String   @id @default(uuid())
  reviewId  String
  userId    String
  isHelpful Boolean
  createdAt DateTime @default(now())

  review    ToolReview @relation(fields: [reviewId], references: [id], onDelete: Cascade)
  user      User       @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model ToolSubmission {
  id        String   @id @default(uuid())
  userId    String
  status    String   @default("PENDING") // PENDING, APPROVED, REJECTED
  toolData  String   // JSON string in SQLite
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model ToolRequest {
  id          String   @id @default(uuid())
  userId      String
  title       String
  description String
  status      String   @default("OPEN")
  createdAt   DateTime @default(now())

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Prompt {
  id               String   @id @default(uuid())
  slug             String   @unique
  title            String
  description      String
  content          String
  category         String
  type             String   @default("text") // text, image, code
  likes            Int      @default(0)
  authorId         String
  visibilityStatus String   @default("PUBLIC") // PUBLIC, PRIVATE, DRAFT
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  author      User     @relation(fields: [authorId], references: [id])
  tags        Tag[]
  versions    PromptVersion[]
  promptLikes PromptLike[]
  promptSaves PromptSave[]
  promptRuns  PromptRun[]
  reports     PromptReport[]

  @@index([slug])
  @@index([category])
  @@index([likes])
  @@index([createdAt])
  @@index([authorId])
}

model PromptVersion {
  id            String   @id @default(uuid())
  promptId      String
  content       String
  versionNumber Int
  createdAt     DateTime @default(now())

  prompt        Prompt   @relation(fields: [promptId], references: [id], onDelete: Cascade)
}

model PromptLike {
  id        String   @id @default(uuid())
  promptId  String
  userId    String
  createdAt DateTime @default(now())

  prompt    Prompt   @relation(fields: [promptId], references: [id], onDelete: Cascade)
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model PromptSave {
  id        String   @id @default(uuid())
  promptId  String
  userId    String
  createdAt DateTime @default(now())

  prompt    Prompt   @relation(fields: [promptId], references: [id], onDelete: Cascade)
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model PromptRun {
  id             String   @id @default(uuid())
  promptId       String
  userId         String
  inputVariables String?  // JSON string
  output         String
  createdAt      DateTime @default(now())

  prompt         Prompt   @relation(fields: [promptId], references: [id], onDelete: Cascade)
  user           User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model PromptReport {
  id        String   @id @default(uuid())
  promptId  String
  userId    String
  reason    String
  createdAt DateTime @default(now())

  prompt    Prompt   @relation(fields: [promptId], references: [id], onDelete: Cascade)
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Collection {
  id          String   @id @default(uuid())
  slug        String   @unique
  userId      String
  name        String
  description String?
  isPublic    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  items       CollectionItem[]
}

model CollectionItem {
  id           String   @id @default(uuid())
  collectionId String
  itemType     String   // TOOL or PROMPT
  itemId       String   // ID of the tool or prompt
  addedAt      DateTime @default(now())

  collection   Collection @relation(fields: [collectionId], references: [id], onDelete: Cascade)
}

model LearningTopic {
  id        String   @id @default(uuid())
  slug      String   @unique
  title     String
  content   String
  parentId  String?
  position  Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  parent    LearningTopic?  @relation("TopicToTopic", fields: [parentId], references: [id])
  children  LearningTopic[] @relation("TopicToTopic")
}

model SavedLearningItem {
  id        String   @id @default(uuid())
  userId    String
  topicId   String
  savedAt   DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Subscription {
  id               String   @id @default(uuid())
  userId           String
  planType         String   // free, pro, enterprise
  status           String   // active, canceled, past_due
  currentPeriodEnd DateTime
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  user             User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model ChatConversation {
  id        String   @id @default(uuid())
  userId    String
  title     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  messages  ChatMessage[]
}

model ChatMessage {
  id             String   @id @default(uuid())
  conversationId String
  role           String   // system, user, assistant
  content        String
  createdAt      DateTime @default(now())

  conversation   ChatConversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)
}

model Notification {
  id        String   @id @default(uuid())
  userId    String
  type      String
  content   String
  link      String?
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model ModerationFlag {
  id              String   @id @default(uuid())
  entityType      String   // TOOL, PROMPT, USER, REVIEW
  entityId        String
  flaggedByUserId String
  reason          String
  status          String   @default("PENDING") // PENDING, RESOLVED, DISMISSED
  createdAt       DateTime @default(now())

  flaggedByUser   User     @relation(fields: [flaggedByUserId], references: [id], onDelete: Cascade)
}

model AuditLog {
  id        String   @id @default(uuid())
  userId    String
  event     String
  ip        String?
  userAgent String?
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
}

model RefreshToken {
  id        String   @id @default(uuid())
  token     String   @unique
  userId    String
  expiresAt DateTime
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
}
```
```diff:seed.ts
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

===
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

```
```diff:prompt.controller.ts
===
import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const getPrompts = async (req: Request, res: Response) => {
  try {
    const { category, type, tags, q, sort, page = '1', limit = '12' } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    // Build the query where clause
    const where: any = {
      visibilityStatus: 'PUBLIC'
    };

    if (category) {
      where.category = String(category);
    }

    if (type) {
      where.type = String(type);
    }

    if (tags) {
      const tagsArray = String(tags).split(',').map(t => t.trim());
      where.tags = {
        some: {
          slug: { in: tagsArray }
        }
      };
    }

    if (q) {
      const searchString = String(q);
      where.OR = [
        { title: { contains: searchString } },
        { description: { contains: searchString } },
        { content: { contains: searchString } }
      ];
    }

    // Build sort
    let orderBy: any = { createdAt: 'desc' }; // Default to newest
    if (sort === 'popular') {
      orderBy = { likes: 'desc' };
    } else if (sort === 'alphabetical') {
      orderBy = { title: 'asc' };
    }

    const [prompts, total] = await Promise.all([
      prisma.prompt.findMany({
        where,
        skip,
        take: limitNum,
        orderBy,
        include: {
          author: {
            select: { id: true, username: true, avatar: true }
          },
          tags: true
        }
      }),
      prisma.prompt.count({ where })
    ]);

    return res.status(200).json({
      prompts,
      meta: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    console.error('Error fetching prompts:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getPromptBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const prompt = await prisma.prompt.findUnique({
      where: { slug },
      include: {
        author: {
          select: { id: true, username: true, avatar: true }
        },
        tags: true,
        versions: {
          orderBy: { versionNumber: 'desc' },
          take: 5
        }
      }
    });

    if (!prompt) {
      return res.status(404).json({ error: 'Prompt not found' });
    }

    // If we want to strictly only allow PUBLIC prompts to be viewed without auth
    if (prompt.visibilityStatus !== 'PUBLIC') {
      return res.status(403).json({ error: 'This prompt is not public' });
    }

    return res.status(200).json(prompt);
  } catch (error) {
    console.error('Error fetching prompt by slug:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRelatedPrompts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { limit = '4' } = req.query;

    const limitNum = parseInt(limit as string, 10);

    const prompt = await prisma.prompt.findUnique({
      where: { id },
      include: { tags: true }
    });

    if (!prompt) {
      return res.status(404).json({ error: 'Prompt not found' });
    }

    const tagIds = prompt.tags.map(t => t.id);

    // Find prompts with matching category or tags, excluding current
    const relatedPrompts = await prisma.prompt.findMany({
      where: {
        id: { not: id },
        visibilityStatus: 'PUBLIC',
        OR: [
          { category: prompt.category },
          { tags: { some: { id: { in: tagIds } } } }
        ]
      },
      take: limitNum,
      orderBy: { likes: 'desc' }, // Order related by popularity or could be random
      include: {
        author: {
          select: { id: true, username: true, avatar: true }
        },
        tags: true
      }
    });

    return res.status(200).json(relatedPrompts);
  } catch (error) {
    console.error('Error fetching related prompts:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
```
```diff:prompt.routes.ts
===
import { Router } from 'express';
import { getPrompts, getPromptBySlug, getRelatedPrompts } from '../controllers/prompt.controller';

const router = Router();

// Public routes
router.get('/', getPrompts);
router.get('/:slug', getPromptBySlug);
router.get('/:id/related', getRelatedPrompts);

export default router;
```
```diff:index.ts
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import passport from './config/passport';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import toolRoutes from './routes/tool.routes';
import reviewRoutes from './routes/review.routes';
import communityRoutes from './routes/community.routes';
import adminRoutes from './routes/admin.routes';
import { generalRateLimiter } from './middlewares/rateLimiter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Middlewares
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Apply general rate limits to all non-auth API routes
app.use('/api', generalRateLimiter);

// Routes
app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tools', toolRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', reviewRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
===
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import passport from './config/passport';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import toolRoutes from './routes/tool.routes';
import reviewRoutes from './routes/review.routes';
import communityRoutes from './routes/community.routes';
import adminRoutes from './routes/admin.routes';
import promptRoutes from './routes/prompt.routes';
import { generalRateLimiter } from './middlewares/rateLimiter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Middlewares
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Apply general rate limits to all non-auth API routes
app.use('/api', generalRateLimiter);

// Routes
app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tools', toolRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/prompts', promptRoutes);
app.use('/api', reviewRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## Verification

The endpoints have been verified using HTTP requests directly on the running development server and are returning data securely mapped from the database. Next steps would be to update the frontend components (e.g. the Prompts listing page) to fetch data from `/api/prompts` instead of using the local static array.
