import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from './post.entity';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  message: string;

  @ManyToOne(() => PostEntity, (post: PostEntity) => post.comments)
  public post: PostEntity;
}
