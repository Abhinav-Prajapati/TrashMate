import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from '@prisma/client';
import { UserSignInDto } from './dto/user_dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  /**
   * Create a user
   * @param userData Partial<User>
   * @returns Promise<User>
   * **/
  async createUser(userData: Prisma.UserCreateInput): Promise<User> {
    // check if user exist
    const existingUser = await this.prisma.user.findFirst({
      where: {
        user_name: userData.user_name,
      },
    });
    if (existingUser) {
      throw new HttpException('user name alredy taken', HttpStatus.CONFLICT);
    }
    return this.prisma.user.create({
      data: userData,
    });
  }

  /**
   * Get a user UUID by username
   * @param username String
   * @returns Promis<User>
   **/
  async signIn(signInData: UserSignInDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        user_name: signInData.username,
      },
    });

    if (!user || user.password_hash != signInData.password) {
      throw new HttpException(
        'incorect username or password',
        HttpStatus.FORBIDDEN,
      );
    }

    const payload = { sub: user.id, username: user.user_name };
    const token = await this.jwtService.signAsync(payload);
    return { token: token };
  }

  /*
   * Get user profile
   * @return Promis<User>
   * */
  async getUserProfile(id: string) {
    const user = this.prisma.user.findFirst({
      where: { id: id },
    });
    // TODO: add user not found excetptoin
    return user;
  }
}
