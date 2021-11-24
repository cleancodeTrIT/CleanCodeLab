import { request } from './request';

class User {
  private url = 'email_server.com/api';
  constructor(
    private firstName: string,
    private lastName: string,
    private age: number,
    private emailAddress: string
  ) {}

  sendMotivationalEmail() {
    return request(this.url + '/send', {
      email: this.emailAddress,
      body: `Good morning ${this.firstName} ${this.lastName}`,
    });
  }

  sendHappyBirthdayEmail() {
    return request(this.url + '/send', {
      email: this.emailAddress,
      body: `Happy ${this.age} birthday`,
    });
  }
}

export function sendMotivationalEmail(
  firstName: string,
  lastName: string,
  age: number,
  email: string
) {
  const user = new User(firstName, lastName, age, email);
  user.sendMotivationalEmail();
  user.sendHappyBirthdayEmail();
}

// To Do: Be full OOP
// To Do: make request an injectable dependency
