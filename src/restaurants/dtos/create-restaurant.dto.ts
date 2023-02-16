import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class createRestaurantDto {
  @Field(type => String)  
  name: string;
  @Field(type => Boolean)  
  isVegan: boolean;
  @Field(type => String)  
  address: string;
  @Field(type => String)  
  ownersName: string;
}