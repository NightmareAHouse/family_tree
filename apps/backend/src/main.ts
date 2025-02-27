import {NestFactory} from '@nestjs/core';
import {BackendModule} from './backend.module';

async function bootstrap() {
    const app = await NestFactory.create(BackendModule);

    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });

    await app.listen(3001);
    console.log(`Application is running on: http://localhost:3001`);
}

bootstrap();
