import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  @Query(returns => [Restaurant])
  restaurants(@Args('veganOnly') veganonly: string): Restaurant[]{  
    return [];
  }
  @Mutation(returns => Boolean)
  createRestaurant(@Args('createRestaurantInput') createRestaurantInput:createRestaurantDto) : boolean{
    console.log(createRestaurantInput);
    
    return true;
  }
}
