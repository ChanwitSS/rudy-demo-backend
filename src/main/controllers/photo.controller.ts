import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
// import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { SanitizePipe } from 'src/common/pipe/sanitize.pipe';
import { UploadPhotoDto } from '../dto/photo.dto';
import { PhotoService } from '../services/photo.service';

// @ApiTags('file')
// @ApiBearerAuth()
@Controller('file')
@UseGuards(JwtAuthGuard)
@UsePipes(SanitizePipe)
@UseInterceptors(ClassSerializerInterceptor)
export class PhotoController {
  constructor(private photoService: PhotoService) {}
  //   @Get()
  //   getFile(@Res() res: Response) {
  //     const file = createReadStream(join(process.cwd(), 'package.json'));
  //     file.pipe(res);
  //   }

  @UseInterceptors(FileInterceptor('file'))
  @Post('/upload')
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       id: { type: 'string' },
  //       file: {
  //         type: 'string',
  //         format: 'binary',
  //       },
  //     },
  //   },
  // })
  async upload(
    @Body() dto: UploadPhotoDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.photoService.uploadPhoto(file.buffer);
  }
}
