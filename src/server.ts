import fastify from "fastify"
import cors from '@fastify/cors'
import prisma from "./lib/prisma";
import { appRoutes } from "./lib/route";

const app = fastify();

app.register(cors)
app.register(appRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log('Rodando legal!')
})