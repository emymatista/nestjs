import { Injectable } from '@nestjs/common';
import { PedidoDto } from '../requests';

@Injectable()
export class PedidosService {
    pedidos = [];

    create(pedido: PedidoDto){
        this.pedidos.push(pedido);
        return pedido;
    }
}
