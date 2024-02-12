import { NestFactory } from '@nestjs/core';
<<<<<<< HEAD
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = parseInt(process.env.PORT);
  const server: string = process.env.SERVER;
  await app.listen(port, server);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

=======
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  await app.listen(port);
}
>>>>>>> 8fc40cc (docker)
bootstrap();
