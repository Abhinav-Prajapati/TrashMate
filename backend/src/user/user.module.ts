import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { constants } from './constants';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: constants.jwt_key,
      signOptions: {
        expiresIn: constants.token_expire_time,
      },
    }),
  ],
  providers: [PrismaService, AuthGuard],
  exports: [PrismaService, AuthGuard],
})
export class UserModule { }
