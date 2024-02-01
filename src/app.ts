import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.user.create({
  data: {
    name: "Cleidimar",
    email: "Cleidimarcdsc@gmail.com",
  },
});

export const app = fastify();
