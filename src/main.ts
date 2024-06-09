import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppClusterService } from './app-cluster.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'cola',
      queueOptions: {
        durable: true
      },
    },
    
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
//bootstrap();

AppClusterService.clusterize(bootstrap);
