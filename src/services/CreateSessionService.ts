import { compare } from 'bcryptjs';

import UserRepository from '../repositories/UserRepository';

import User from '../models/User';

interface IRequest {
  email: string;
  password: string;
}

class CreateSessionService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async execute({
    email,
    password,
  }: IRequest): Promise<User | undefined> {
    const user = await this.userRepository.findByEmal(email);

    if (!user) {
      throw new Error('Sorry email/password incorrect');
    }

    const passwordIsValid = await compare(password, user.password);

    if (!passwordIsValid) {
      throw new Error('Sorry email/password incorrect');
    }

    return user;
  }
}

export default CreateSessionService;
