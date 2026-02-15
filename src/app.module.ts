import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { get_db_config } from './config/get_db_config';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
  }), 
  TypeOrmModule.forRootAsync({
    useFactory: async () => ({
      ...get_db_config().options,
      retryAttempts: 5,          
      retryDelay: 3000,          
    }),
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
