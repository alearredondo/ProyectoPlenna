import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

const ENV = process.env.NODE_ENV;
console.log('Ambiente de desarrollo: ' + ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot(),
    AppModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '',
      database: 'postgres',
      synchronize: false,
      entities: ['**/*.entity.{.ts,js}'],
    }),
    // TypeOrmModule.forFeature([]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
