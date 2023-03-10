import { Field, InputType, ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/ouput.dto';
import { User } from '../entities/user.entity';

@InputType()
export class CreateAccountInput extends PickType(User, [
  'email',
  'password',
  'role'
]) {}

@ObjectType()
export class CreateAccountOutput extends PartialType(CoreOutput) {}