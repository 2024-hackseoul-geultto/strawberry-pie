import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotingController } from './voting.controller';
import { VotingService } from './voting.service';
import { Election } from './entities/election.entity';
import { Candidate } from './entities/candidate.entity';
import { Vote } from './entities/vote.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Election, Candidate, Vote, User])],
  controllers: [VotingController],
  providers: [VotingService],
})
export class VotingModule {}
