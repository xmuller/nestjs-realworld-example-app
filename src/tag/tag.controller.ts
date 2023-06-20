import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { ITagsRO } from './tag.interface';
import { TagService } from './tag.service';
import { MikroORM } from '@mikro-orm/mysql';

@ApiBearerAuth()
@ApiTags('tags')
@Controller('tags')
export class TagController {

  constructor(
    private readonly mikroOrm: MikroORM,
    private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<ITagsRO> {
    return this.tagService.findAll();
  }
}
