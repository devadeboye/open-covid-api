import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('api');

  // setup swagger
  const config = new DocumentBuilder()
    .setTitle('Open Covid-19 APIs')
    .setDescription(
      'This project contains open APIs with which you can get covid-19 information for supported countries',
    )
    .setVersion('1.0')
    .addTag('covid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
