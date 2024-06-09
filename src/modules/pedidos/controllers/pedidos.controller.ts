import { Controller, Body, Post, Inject } from '@nestjs/common';
import { PedidoDto } from '../requests';
import { PedidosService } from '../services/pedidos.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('pedidos')
export class PedidosController {
    constructor(private readonly pedidosService: PedidosService,
        @Inject('NOTIFICATION_SERVICE') private readonly client:
        ClientProxy,
    ){}

    @Post()
    async create (@Body() payload: PedidoDto){
        this.client.emit('pedido_creado', payload);
        return this.pedidosService.create(payload);
    }
}
