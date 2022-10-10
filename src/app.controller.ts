import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async sendMessage(
    @Body('email') email: string,
    @Body('name') name: string,
    @Body('subject') subject: string,
    @Body('description') description: string,
  ): Promise<any> {
    return await this.appService.sendMessage(email, name, subject, description);
  }
}
