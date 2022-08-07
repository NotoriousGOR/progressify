/* eslint-disable no-mixed-spaces-and-tabs */
// src/server/db/client.ts
import { PrismaClient } from '@prisma/client';
import { env } from '../../env/server.mjs';

declare global {
  let prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
  	log: ['query'],
  });

if (env.NODE_ENV !== 'production') {
	global.prisma = prisma;
}