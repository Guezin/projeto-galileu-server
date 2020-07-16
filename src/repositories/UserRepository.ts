import { getRepository, Repository } from 'typeorm';

import User from '../models/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class UserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({ name, email, password }: IRequest): Promise<User> {
    const user = this.ormRepository.create({ name, email, password });

    await this.ormRepository.save(user);

    return user;
  }

  public async findByEmal(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });

    return user;
  }
}

export default UserRepository;
