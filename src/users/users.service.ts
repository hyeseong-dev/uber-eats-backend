import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>
  ){}

  async createAccount({email, password, role}: CreateAccountInput){
    try{
      const exists = await this.users.findOne({where: {email}});
      if(exists)return 
      const user = await this.users.create({email, password, role})
      await this.users.save(user)
      return true;
    }catch (e){
      return
    }
  }
}