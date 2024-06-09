import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('mailer')
export class MailerController {
    
    @EventPattern('pedido_creado')
    async handlePedidoCreado(data: Record<string, unknown>){
        console.log('Pedido Creado', data);
    }
}