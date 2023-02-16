import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(type => String)
  name: string;
  
  @Field(type => Boolean)
  isVegan?: boolean;
  
  @Field(type => String)
  address?: String;

  @Field(type => String)
  ownersName?: String;
}
