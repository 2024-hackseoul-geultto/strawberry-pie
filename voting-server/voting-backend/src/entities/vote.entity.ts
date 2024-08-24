import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryColumn,
  //   PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('vote')
@Index(['voteId'], { unique: true })
export class VoteEntity {
  @Column('int', { comment: '투표 아이디' })
  @PrimaryColumn()
  voteId: number;

  @Column('varchar', { nullable: false, length: 100, comment: '투표 제목' })
  title: string;

  @Column('varchar', { nullable: false, length: 10000, comment: '투표 내용' })
  description: string;

  @Column('timestamptz', {
    nullable: false,
    comment: '투표 진행 기간',
  })
  period: string;

  @Column('int', { comment: '투표 크레딧(제곱 투표시 사용)' })
  credit: number;

  @CreateDateColumn({
    type: 'timestamptz',
    comment: '생성 일시',
  })
  createdAt: Date; // TODO: timestamp number 리턴

  @UpdateDateColumn({
    type: 'timestamptz',
    comment: '수정 일시',
  })
  updatedAt: Date; // TODO: timestamp number 리턴

  @DeleteDateColumn({
    type: 'timestamptz',
    comment: '삭제 일시',
  })
  deletedAt: Date; // TODO: timestamp number 리턴
}
