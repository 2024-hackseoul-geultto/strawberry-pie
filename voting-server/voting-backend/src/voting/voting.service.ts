import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ethers } from 'ethers';
import { DataSource, Repository, In } from 'typeorm';
import { VotingContract__factory } from '../../../typechain/factories/singleVoting.sol/VotingContract__factory';
import { RegisterVotersDto } from '../dto/register-voter.dto';
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Election } from './entities/election.entity';
// import { Candidate } from './entities/candidate.entity';
import { VoterEntity } from '../entities/voters.entity';
// import { User } from './entities/user.entity';

const INFURA_URL: string = process.env.INFURA_URL;
const PRIVATE_KEY: string = process.env.PRIVATE_KEY; // 관리자 지갑의 개인키 입력

@Injectable()
export class VotingService {
  @InjectRepository(VoterEntity)
  private readonly voterRepository: Repository<VoterEntity>;
  private provider: ethers.JsonRpcProvider;
  private signer: ethers.Wallet;

  constructor() {
    // 이더리움 네트워크에 연결
    this.provider = new ethers.JsonRpcProvider(INFURA_URL);
    this.signer = new ethers.Wallet(PRIVATE_KEY, this.provider);
  }

  // 임시 지갑 생성
  async _createTemporaryWallet(): Promise<{
    address: string;
    privateKey: string;
  }> {
    const wallet = ethers.Wallet.createRandom();
    return { address: wallet.address, privateKey: wallet.privateKey };
  }

  // 스마트 컨트랙트에 유권자 등록
  private async _registerVoterOnContract(voterAddress: string): Promise<void> {
    const votingFactory = new VotingContract__factory(this.signer);
    try {
      const tx = await votingFactory.registerVoter(voterAddress);
      await tx.wait(); // 트랜잭션 완료 대기
      console.log(`Voter ${voterAddress} registered successfully.`);
    } catch (error) {
      console.error(`Failed to register voter ${voterAddress}:`, error);
    }
  }

  // 유권자 등록 함수
  async registerVoters(registerVotersData: RegisterVotersDto): Promise<void> {
    // 우리 DB에 저장 - TODO: 트랜잭션 걸어야 함 이 함수 내부의 모든 로직에
    for (const voterData of registerVotersData.voters) {
      const voter = new VoterEntity(voterData);
      await this.voterRepository.save(voter);
    }

    const voterEmails = registerVotersData.voters.map((voter) => voter.email);

    const voterIds = await this.voterRepository.find({
      where: { email: In(voterEmails) },
    });

    // 우리 DB에 저장하고 난 다음 우리 DB의 voterId 가져와서 아래 로직 실행 (지갑 생성 + 스마트 컨트랙트에 유권자 등록)
    for (const voterId of voterIds) {
      // 지갑 생성
      const { address, privateKey } = await this._createTemporaryWallet();

      console.log(
        `Voter ${voterId} - Address: ${address}, Private Key: ${privateKey}`,
      );

      // 스마트 컨트랙트에 유권자 등록
      await this._registerVoterOnContract(address);
    }
  }
}

//   // 투표 생성
//   async createQuadraticVote(
//     candidateIds: string[],
//     voterIds: number[],
//   ): Promise<string> {
//     const votingFactory = new VotingContract__factory(this.signer);
//     const votingContract = await votingFactory.deploy(
//       candidateNames,
//       voterAddresses,
//     );
//     await this._registerVoters(voterIds);
//     await votingContract.deployed();
//     // NOTE: 스마트 컨트랙트 주소 반환
//     return votingContract.address;
//   }

//   async vote(
//     electionAddress: string,
//     voterAddress: string,
//     candidateId: number,
//   ) {
//     const electionContract = VotingContract__factory.connect(
//       electionAddress,
//       this.signer,
//     );
//     const tx = await electionContract.vote(candidateId, { from: voterAddress });
//     return await tx.wait();
//   }

//   async endElection(electionAddress: string) {
//     const electionContract = VotingContract__factory.connect(
//       electionAddress,
//       this.signer,
//     );
//     const tx = await electionContract.endElection();
//     return await tx.wait();
//   }

//   async getResults(electionAddress: string) {
//     const electionContract = VotingContract__factory.connect(
//       electionAddress,
//       this.provider,
//     );
//     return await electionContract.getResults();
//   }
// @Injectable()
// export class VotingService {
//   constructor(
//     @InjectRepository(User)
//     private userRepository: Repository<User>,
//     @InjectRepository(Election)
//     private electionRepository: Repository<Election>,
//     @InjectRepository(Candidate)
//     private candidateRepository: Repository<Candidate>,
//     @InjectRepository(Vote)
//     private voteRepository: Repository<Vote>,
//   ) {}

//   // 투표 생성 로직
//   async createElection(
//     title: string,
//     candidateNames: string[],
//     voterEmails: string[],
//   ): Promise<Election> {
//     const election = new Election();
//     election.title = title;
//     election.isActive = true;
//     await this.electionRepository.save(election);

//     // 후보자 등록
//     for (const name of candidateNames) {
//       const candidate = new Candidate();
//       candidate.name = name;
//       candidate.election = election;
//       await this.candidateRepository.save(candidate);
//     }

//     // 유권자 등록
//     for (const email of voterEmails) {
//       const user = await this.userRepository.findOne({ where: { email } });
//       if (user) {
//         const vote = new Vote();
//         vote.voter = user;
//         vote.election = election;
//         await this.voteRepository.save(vote);
//       }
//     }

//     return election;
//   }

//   // 투표 처리 로직
//   async castVote(voterEmail: string, electionId: number, candidateId: number, creditsUsed: number) {
//     const voter = await this.userRepository.findOne({ where: { email: voterEmail } });
//     const election = await this.electionRepository.findOne({ where: { id: electionId, isActive: true } });
//     const candidate = await this.candidateRepository.findOne({ where: { id: candidateId, election } });

//     if (voter && election && candidate) {
//       const voteRecord = await this.voteRepository.findOne({ where: { voter, election } });
//       if (!voteRecord.hasVoted) {
//         candidate.voteCount += 1;
//         voteRecord.hasVoted = true;
//         voteRecord.creditsUsed = creditsUsed;
//         await this.candidateRepository.save(candidate);
//         await this.voteRepository.save(voteRecord);
//         return true;
//       }
//     }
//     return false;
//   }

//   // 투표 종료 로직
//   async endElection(electionId: number) {
//     const election = await this.electionRepository.findOne({ where: { id: electionId } });
//     if (election) {
//       election.isActive = false;
//       election.endedAt = new Date();
//       await this.electionRepository.save(election);
//     }
//   }

//   // 결과 확인 로직
//   async getResults(electionId: number): Promise<Candidate[]> {
//     const election = await this.electionRepository.findOne({ where: { id: electionId, isActive: false } });
//     if (election) {
//       return await this.candidateRepository.find({ where: { election } });
//     }
//     return [];
//   }
// }

// // 투표 생성 (후보자, 유권자)
// async createQuadraticVote(
//   candidateIds: string[],
//   voterIds: string[],
// ): Promise<string> {
//   const votingFactory = new VotingContract__factory(this.signer);
//   = await votingFactory.registerVoter(address voter)
//   const votingContract = await votingFactory.deploy(
//     candidateNames,
//     voterAddresses,
//   );
//   await votingContract.deployed();
//   // NOTE: 스마트 컨트랙트 주소 반환
//   return votingContract.address;
// }
