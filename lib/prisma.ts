import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DIRECT_URL ?? process.env.DATABASE_URL;

console.log('[Prisma] Initializing. Connection string defined:', !!connectionString);

if (!connectionString) {
  throw new Error('[Prisma] No DATABASE_URL or DIRECT_URL environment variable found.');
}

let prisma: PrismaClient;

try {
  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  const adapter = new PrismaPg(pool);
  prisma = new PrismaClient({ adapter });
  console.log('[Prisma] Client initialized successfully.');
} catch (err) {
  console.error('[Prisma] Failed to initialize client:', err);
  throw err;
}

declare global {
  var prismaGlobal: undefined | PrismaClient;
}

const prismaInstance = globalThis.prismaGlobal ?? prisma!;

export default prismaInstance;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prismaInstance;
