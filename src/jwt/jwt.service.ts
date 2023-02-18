import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtModuleOptions } from './jwt.interfaces';
import { CONFIG_OPTIONS } from './jwt.constants';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS)
    private readonly options: JwtModuleOptions,
  ) {}

  async sign(userId: number): Promise<string> {
    return jwt.sign({id: userId}, this.options.privateKey)
  }
  async verify(token: string){
    return jwt.verify(token, this.options.privateKey);
  }
}