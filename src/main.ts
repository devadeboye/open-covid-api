import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { envConfiguration } from './utils/config/env.configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('api');
  const config = app.get(ConfigService);
  const port = process.env.PORT || config.get(envConfiguration.PORT);

  // setup swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Open Covid-19 APIs')
    .setDescription(
      'This project contains open APIs with which you can get covid-19 information for supported countries',
    )
    .setVersion('1.0')
    .addTag('covid')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port, () => {
    Logger.log(`listening on port ${port}`);
  });
}
bootstrap();
