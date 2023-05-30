import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UserRepository } from './repositories/user.repository';
import { PrismaUserRepository } from './repositories/prisma/prisma.user.repository';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    PrismaService,
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class AppModule {}
