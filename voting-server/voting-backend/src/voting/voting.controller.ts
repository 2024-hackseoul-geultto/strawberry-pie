import {
  Controller,
  //   Get,
  //   Put,
  Post,
  //   Delete,
  //   Param,
  Body, UseInterceptors,
  //   Res,
  //   Req,
  //   Query,
  //   HttpCode,
} from '@nestjs/common';
import { MasterOnly } from '../lib/decorators';
import { VotingService } from './voting.service';
import { RegisterVotersDto } from '../dto/register-voter.dto';
import { HttpServiceInterceptor } from '../http-service.interceptor';

@Controller('voting')
export class VotingController {
  constructor(private readonly votingService: VotingService) {}

  /**
   * 투표자(유권자) 등록
   *
   * @param voteId - 투표 아이디
   * @param voters - 투표자 목록
   * @param voters.name
   * @param voters.email
   */
  @MasterOnly()
  @UseInterceptors(HttpServiceInterceptor)
  @Post('register-voters')
  async registerVoters(
    // @User() userInfo: UserInfo, // 투표 생성자의 authInfo를 검증해야 함
    @Body() body: RegisterVotersDto,
  ): Promise<void> {
    return this.votingService.registerVoters(body);
  }
}

// @Serialize(GetUserResponseDto)
// @Get('me')
// async getUserMe(@User() userInfo: UserInfo): Promise<GetUserResponseDto> {
//   return this.usersService.getUserMe(userInfo);
// }

// @Public()
// @Get('email-duplicate-check')
// async emailDuplicateCheck(
//   @Query() query: EmailDuplicateCheckDto,
// ): Promise<boolean> {
//   return this.usersService.emailDuplicateCheck(query.email);
// }
