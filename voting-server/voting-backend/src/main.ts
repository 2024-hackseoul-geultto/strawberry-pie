import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configs } from './config/configuration';


async function bootstrap() {
  const port = process.env.SERVER_PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: configs.appOrigin.split(','),
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();