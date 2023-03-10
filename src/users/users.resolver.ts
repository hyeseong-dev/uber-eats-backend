import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { EditProfileInput, EditProfileOutput } from './dtos/edit-profile.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { UserProfileInput, UserProfileOutput } from './dtos/user-profile.dto';
import { User } from './entities/user.entity';
import { UserService } from './users.service';


@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService){}

  @Mutation(returns => CreateAccountOutput)
  async createAccount(@Args('input') createAccountInput: CreateAccountInput
  ): Promise<CreateAccountOutput>{
    try {
      const { ok, error } = await this.userService.createAccount(createAccountInput);
      return { ok, error }
    }catch(error){
      return { error, ok: false }
    }
  }

  @Mutation(returns => LoginOutput)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    try {
      const {ok, error, token} = await this.userService.login(loginInput);
      return {ok, error, token};
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
  @Query(returns => User)
  @UseGuards(AuthGuard)
  async me(@AuthUser() authUser: User) {     
    return authUser;
  }

  @Query(returns => UserProfileOutput)
  @UseGuards(AuthGuard)
  async userProfile(
    @Args() UserProfileInput: UserProfileInput
  ): Promise<UserProfileOutput> {
    try {
      const user = await this.userService.findById(UserProfileInput.userId);
      if (!user) throw Error();
      return { ok: true, user };
      return 
    }catch (error) {
      return { ok: false, error: 'User Not Found'}
    }
  }
  @UseGuards(AuthGuard)
  @Mutation(returns => EditProfileOutput)
  async editProfile(
    @AuthUser() authUser: User,
    @Args('input') editProfileInput: EditProfileInput,
  ): Promise<EditProfileOutput> {
    try {
      await this.userService.editProfile(authUser.id, editProfileInput);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
