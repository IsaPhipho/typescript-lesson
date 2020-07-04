import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'isa@gmail.com', 
    password: '123456',
    techs: [
      'ReactJS',
      'React Native',
      { title: 'Node.js', experience: 100 },
    ],
  });

  return response.json({ message: 'Hello World' });
}