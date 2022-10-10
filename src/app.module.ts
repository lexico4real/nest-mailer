import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Mailer from './mailer';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Mailer],
})
export class AppModule {}
