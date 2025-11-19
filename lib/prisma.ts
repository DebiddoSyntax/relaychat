// import { PrismaClient } from '../prismaGenerate/app/generated/prisma';
// import { withAccelerate } from '@prisma/extension-accelerate';

// const baseClient = new PrismaClient();
// const extendedPrisma = baseClient.$extends(withAccelerate());


// const globalForPrisma = globalThis as unknown as {
//   prisma: typeof extendedPrisma | undefined;
// };


// const prisma = globalForPrisma.prisma ?? extendedPrisma;
// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// export default prisma;


// import { PrismaClient } from '../prismaGenerate/app/generated/prisma';
// import { withAccelerate } from '@prisma/extension-accelerate';

// const globalForPrisma = globalThis as unknown as {
//   prisma: ReturnType<typeof withAccelerate> | undefined;
// };

// // initialize once
// const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient().$extends(withAccelerate());

// // store in global only in dev (for hot reload safety)
// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// export default prisma;
