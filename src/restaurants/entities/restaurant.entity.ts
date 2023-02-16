import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(type => Number)
  id: number;
  
  @Column()
  @Field(type => String)
  name: string;
  
  @Field(type => Boolean)
  @Column()
  isVegan?: boolean;
  
  @Field(type => String)
  @Column()
  address: String;

  @Field(type => String)
  @Column()
  ownersName: string;

  @Field(type => String)
  @Column()
  categoryName: string;
}
