import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChirrupModule } from './chirrup/chirrup.module';
import { MongooseModule, Schema } from '@nestjs/mongoose';
//for setup env file variables
//env is in gitignore
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { User, UserSchema } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({

  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get("Mongodb_PATH")
      }),
      inject: [ConfigService]
    }),

    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ]),

    ChirrupModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // UserService
  ],
})
export class AppModule { }
