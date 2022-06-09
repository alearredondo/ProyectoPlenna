import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: [
      "",
      'null',
      null,
      '*',
      'https://localhost:3000',
      'http://localhost:3000',
      'http://localhost:8080',
    ],
    allowedHeaders: [
      'Authorization',
      'Content-Type',
      'X-Requested-With',
      'Accept',
      'Origin',
      'Access-Control-Allow-Origin',
    ],
  });
  await app.listen(3000);
}
bootstrap();
