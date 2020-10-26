import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/createComment.dto';
import { CreatePostDto } from './dto/createPost.dto';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}

  async findAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }
  async addPost(post: CreatePostDto): Promise<void> {
    await this.postRepository.insert(post);
  }
  async addComment(id: number, comment: CreateCommentDto) {
    const post = await this.postRepository.findOne({
      where: { id: id },
      relations: ['comments'],
    });
    await this.commentRepository.save({
      message: comment.message,
      post: post,
    });
  }
  async getById(postId: number) {
    return this.postRepository.findOne(postId);
  }
  async getCommentsByid(postId: number) {
    return await this.postRepository.findOne(postId, {
      relations: ['comments'],
    });
  }
}
