import { Column } from 'typeorm';

export abstract class Maskable {
  @Column({ select: false, insert: false, update: false })
  shouldMask: boolean;
}
