import { hash } from 'bcryptjs';

import UserRepository from '../repositories/UserRepository';

import User from '../models/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async execute({
    name,
    email,
    password,
  }: IRequest): Promise<User | undefined> {
    const userExists = await this.userRepository.findByEmal(email);

    if (userExists) {
      throw new Error('Email already in use!');
    }

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export default CreateUserService;
