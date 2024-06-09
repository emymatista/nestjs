import { Module } from '@nestjs/common';
import { MailerService } from './services/mailer.service';

@Module({
  providers: [MailerService]
})
export class MailerModule {}
