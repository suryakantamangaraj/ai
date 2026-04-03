const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');
  
  const filePath = path.join(__dirname, '../src/data/tools.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  const tools = JSON.parse(fileData);

  for (const t of tools) {
    await prisma.tool.upsert({
      where: { slug: t.id },
      update: {
        name: t.name,
        description: t.description,
        url: t.url,
        icon: t.icon,
        pricing: t.pricing,
        categories: JSON.stringify(t.categories),
        featured: t.featured,
      },
      create: {
        slug: t.id,
        name: t.name,
        description: t.description,
        url: t.url,
        icon: t.icon,
        pricing: t.pricing,
        categories: JSON.stringify(t.categories),
        featured: t.featured,
      },
    });
  }

  console.log(`Seeded ${tools.length} tools into the database.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
