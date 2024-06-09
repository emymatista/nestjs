import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PedidosModule } from './modules/pedidos/pedidos.module';
import { MailerController } from './modules/mailer/controllers/mailer.controller';
import { MailerService } from './modules/mailer/services/mailer.service';
import { MailerModule } from './modules/mailer/mailer.module';
import { StudentService } from './modules/student/services/student.service';
import { StudentController } from './modules/student/controllers/student.controller';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config'
import configuration from './config/configuration';
import { StudentSchema } from './modules/student/schema/student.schema';



@Module({
  imports: [AuthModule, 
    MailerModule, 
    PedidosModule,

    /*
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const options: MongooseModuleOptions = {
          uri: configService.get('database.url'),
        };
        return options;
      },
      inject: [ConfigService],
    }),

    MongooseModule.forFeature([{name: 'Student', schema: StudentSchema}])
    */
    
  ],
  controllers: [AppController, MailerController],
  providers: [AppService, MailerService],
})
export class AppModule {}
