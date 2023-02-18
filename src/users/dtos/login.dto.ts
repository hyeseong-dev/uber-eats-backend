import { Field, InputType, Mutation, ObjectType, OmitType, PickType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dtos/ouput.dto';
import { User } from '../entities/user.entity';

@InputType()
export class LoginInput extends PickType(User, ['email', 'password']){}

@ObjectType()
export class LoginOutput extends MutationOutput {
  @Field(type => String, { nullable: true})
  token?: string;
}