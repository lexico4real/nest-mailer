'use strict';
import MailService from './mail.server';
import MailOptions from './mail.options';
import Credentials from './Credentials';
import IMain from './mail.interface';

export default class Mailer implements IMain {
  catch(error: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
  }) {
    throw new Error(`Method not implemented. ${error}`);
  }

  main = async (
    email: string,
    name: string,
    subject: string,
    description: string,
  ): Promise<any> => {
    let re
    const mailService = new MailService();
    const mailOptions = new MailOptions(
      Credentials.email as string,
      email,
      subject,
      `From: ${name}, \n ${description}`,
    );
    mailService.transporter.sendMail(
      mailOptions,
      async function (error, info): Promise<any> {
        if (error) {
          console.log(error);
          return error;
        }
        const { response } = info;
        console.log('Email sent: ' + response);
        return response;
      },
    );
    console.log({ result });
    return result;
  };
}
