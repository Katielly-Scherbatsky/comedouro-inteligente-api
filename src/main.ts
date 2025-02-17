import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as express from "express";
import { join } from "path";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    })
  );

  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });

  app.use("/uploads", express.static(join(__dirname, "..", "uploads")));

  await app.listen(3001);
}
bootstrap();
