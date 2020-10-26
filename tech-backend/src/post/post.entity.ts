import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CommentEntity } from './comment.entity';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  message: string;

  @OneToMany(() => CommentEntity, (comment) => comment.post, {
    cascade: true,
  })
  public comments: CommentEntity[];
}
