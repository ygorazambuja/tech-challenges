import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { PostController } from './post.controller';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, CommentEntity])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
