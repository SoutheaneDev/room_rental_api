import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { get_db_config } from './config/typeorm.config';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
  }), 
  TypeOrmModule.forRootAsync({
    useFactory: async () => {
      return get_db_config().options;
    },
  }), RoomsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
