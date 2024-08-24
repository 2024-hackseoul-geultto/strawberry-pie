import { Module } from '@nestjs/common';
import { AppController} from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotingModule } from './voting/voting.module';
// import { VoteEntity } from './vote/vote.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT, 10),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      // entities: [VoteEntity],
      synchronize: true, // 개발 중에만 사용, 프로덕션에서는 끄기
    }),
    VotingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
