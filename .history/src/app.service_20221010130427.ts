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
      await this.mailer.main(email, name, subject, description);
      return { sta message: 'Email sent' };
    } catch (error) {
      console.log(error);
    }
  }
}
