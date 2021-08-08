import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/models/user.entity';
import { AuthModule } from './auth/auth.module';
import { DinosaurEntity } from './dinosaurs/models/dinosaur.entity';
import { DinosaursModule } from './dinosaurs/dinosaurs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Redant09',
      database: 'infinitum',
      entities: [UserEntity, DinosaurEntity],
      synchronize: true
    }),
    UsersModule,
    AuthModule,
    DinosaursModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
