import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from './college.entity';

@Entity()
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College, (college) => college.collegePlacements)
  college: College;

  @Column('int')
  year: number;

  @Column('int', { nullable: true })
  highest_placement: number;

  @Column('int', { nullable: true })
  average_placement: number;

  @Column('int', { nullable: true })
  median_placement: number;

  @Column('float', { nullable: true })
  placement_rate: number;
}
