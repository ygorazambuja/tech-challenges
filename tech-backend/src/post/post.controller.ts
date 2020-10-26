import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCommentDto } from './dto/createComment.dto';
import { CreatePostDto } from './dto/createPost.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return await this.postService.findAll();
  }
  @Post()
  async addPost(
    @Body() createPostDto: CreatePostDto,
    @Res() response: Response,
  ): Promise<Response> {
    try {
      await this.postService.addPost(createPostDto);
      return response.status(HttpStatus.CREATED).send();
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error });
    }
  }

  @Get(':id')
  async getById(@Param('id') param: number) {
    return await this.postService.getById(param);
  }

  @Post(':id/comments')
  async addComment(@Param('id') id: number, @Body() comment: CreateCommentDto) {
    this.postService.addComment(id, comment);
  }
  @Get(':id/comments')
  async getPostComments(@Param('id') id: number) {
    return await this.postService.getCommentsByid(id);
  }
}
