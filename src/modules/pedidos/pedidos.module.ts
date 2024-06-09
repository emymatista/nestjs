import { Module } from '@nestjs/common';
import { PedidosController } from './controllers/pedidos.controller';
import { PedidosService } from './services/pedidos.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "NOTIFICATION_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'cola3',
          queueOptions: {
            durable: true
          },
        },
      }
    ])
  ],
  controllers: [PedidosController],
  providers: [PedidosService]
})
export class PedidosModule {}
