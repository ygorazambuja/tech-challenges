import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentEntity } from './post/comment.entity';
import { PostEntity } from './post/post.entity';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'test',
      entities: [PostEntity, CommentEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
