import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
      new ValidationPipe({
          whitelist: true, // retire les propriétés non attendues
          forbidNonWhitelisted: true, // bloque si props non prévues
          transform: true, // transforme les payloads en instances des DTOs
      }),
  );
  
  const config = app.get(ConfigService);
  const port = config.get<number>('app.port') ?? 3000;
  await app.listen( port );
}
bootstrap();
