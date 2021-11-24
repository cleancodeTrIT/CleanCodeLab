import { request } from './request';

export class User {
  constructor(
    private firstName: string,
    private lastName: string,
    private age: number,
    public emailAddress: string
  ) {}

  motivationalMessage() {
    return `Good morning ${this.firstName} ${this.lastName}`;
  }
  birthdayMessage() {
    return `Happy ${this.age} birthday`;
  }
}

export interface Sender {
  send(body: string, to: string);
}

export class EmailClient implements Sender {
  constructor(private url: string) {}

  send(body: string, to: string) {
    return request(this.url, { contents: body, receiver: to });
  }
}

export class TextClient implements Sender {
  constructor() {}

  send(body: string, to: string) {
    console.log(`To: ${to}`);
    console.log(body);
    console.log('end');
  }
}

export function sendMessage(sender: Sender, message: string, to: string) {
  sender.send(message, to);
}

export function sendMotivationalEmail(
  firstName: string,
  lastName: string,
  age: number,
  email: string
) {
  const url = 'email_server.com/api';
  const sender = new EmailClient(url);
  const user = new User(firstName, lastName, age, email);
  const message = user.motivationalMessage();
  sendMessage(sender, message, user.emailAddress);
}
