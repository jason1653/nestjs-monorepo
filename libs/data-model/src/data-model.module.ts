import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'jason',
      password: 'jason1653',
      database: 'jason',
      entities: ['./domain/*.ts'],
      synchronize: false,
    }),
  ],
})
export class DataModelModule {}
