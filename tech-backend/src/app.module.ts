import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'tech-backend',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      synchronize: true,

      migrationsRun: true,
      logging: true,
      migrationsTableName: 'migrations',
      logger: 'file',

      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env' : 'development.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
