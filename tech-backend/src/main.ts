import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(
    `Running in ${process.env.NODE_ENV} mode DB_URL=${process.env.DB_URL}`,
  );
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
  });

  const options = new DocumentBuilder()
    .setTitle('Post API')
    .setVersion('1.0')
    .addTag('posts')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
