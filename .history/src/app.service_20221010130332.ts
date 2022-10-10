import { Injectable } from '@nestjs/common';
// import Credentials from './Credentials';
import Mailer from './mailer';

@Injectable()
export class AppService {
  constructor(private readonly mailer: Mailer) {}
  async sendMessage(
    email: string,
    name: string,
    subject: string,
    description: string,
  ): Promise<any> {
    try {
      return await this.mailer.main(email, name, subject, description);
    } catch (error) {
      console.log(error);
    }
    const result = await this.mailer.main(email, name, subject, description);
    console.log(result);
    return result;
  }
}