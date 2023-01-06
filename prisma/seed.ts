import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
  const adminUser = await db.user.upsert({
    where: { emailAddress: 'admin@example.com' },
    update: {},
    create: {
      emailAddress: 'admin@example.com',
      password: '$2a$10$MPUvEwYg9eOfaFKZgl/oPuN4fgDIGpaU1IWFC6oTqvwDWRyHQUjhy',
      firstName: 'Admin',
      lastName: 'Admin',
      active: true,
      accountType: 'ADMIN',
    },
  });

  const createdUser = await db.user.upsert({
    where: { emailAddress: 'john.batman@example.com' },
    update: {},
    create: {
      emailAddress: 'john.batman@example.com',
      password: '$2a$10$MPUvEwYg9eOfaFKZgl/oPuN4fgDIGpaU1IWFC6oTqvwDWRyHQUjhy',
      firstName: 'John',
      lastName: 'Batzman',
      active: true,
      mailboxes: {
        create: {
          addressLine1: '123 somewhere over there',
          addressLine2: '',
          zipCode: '1622-12',
          city: 'Miami',
          state: 'Fl',
          country: 'United States',
          unitCode: 'mbox-1234',
        },
      },
    },
  });

  const mailbox = await db.mailbox.create({
    data: {
      addressLine1: '123 somewhere over there',
      addressLine2: '',
      zipCode: '1622-12',
      city: 'Miami',
      state: 'Fl',
      country: 'United States',
      unitCode: 'mbox-1234',
      user: {
        connect: { id: createdUser.id },
      },
    },
  });

  const shipment = await db.shipment.create({
    data: {
      user: {
        connect: { id: createdUser.id },
      },
      trackingNumber: 'trk-num-1234',
      source: 'amazon.com',
      totalDue: 404.4,
      createdAt: new Date(),
      mailbox: {
        connect: {
          id: mailbox.id,
        },
      },
      arrivalDate: new Date(),
      shipmentCategory: {
        create: {
          category: 'sample category',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      shippingWeight: 4.04,
      packageType: 'box',
    },
  });

  await db.shipmentDocument.create({
    data: {
      shipment: {
        connect: { id: shipment.id },
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      url: 'http://localhost/documents/not-a-real-file.pdf', // todo: point to a real file
      name: 'invoice-001',
    },
  });

  await db.shipmentStatus.createMany({
    data: [
      {
        shipmentId: shipment.id,
      },
      {
        shipmentId: shipment.id,
        packageStatus: 'RECEIVED_CUSTOMS',
      },
    ],
  });
}

seed().then();
