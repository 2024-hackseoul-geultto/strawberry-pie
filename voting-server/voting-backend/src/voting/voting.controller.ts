import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { VotingService } from './voting.service';
import { CreateElectionDto } from './dto/create-election.dto';
import { CastVoteDto } from './dto/cast-vote.dto';

@Controller('voting')
export class VotingController {
  constructor(private readonly votingService: VotingService) {}

  @Post('create-election')
  async createElection(@Body() createElectionDto: CreateElectionDto) {
    return await this.votingService.createElection(
      createElectionDto.title,
      createElectionDto.candidates,
      createElectionDto.voters,
    );
  }

  @Post('cast-vote/:electionId')
  async castVote(
    @Param('electionId') electionId: number,
    @Body() castVoteDto: CastVoteDto,
  ) {
    return await this.votingService.castVote(
      castVoteDto.voterEmail,
      electionId,
      castVoteDto.candidateId,
      castVoteDto.creditsUsed,
    );
  }

  @Post('end-election/:electionId')
  async endElection(@Param('electionId') electionId: number) {
    return await this.votingService.endElection(electionId);
  }

  @Get('results/:electionId')
  async getResults(@Param('electionId') electionId: number) {
    return await this.votingService.getResults(electionId);
  }
}

// @Controller('vote')
// export class VoteController {
//     constructor(private readonly voteService: VoteService) {}

// @Post()
// async postCreateProposal(
//   @Body() postProposalDto: PostCreateProposalRequestDto,
// ): Promise<PostCreateProposalResponseDto> {
//   const response = await this.voteService.createProposal(
//     postProposalDto,
//   );

//   return response;
// }

// }
