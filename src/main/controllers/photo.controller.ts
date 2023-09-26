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
import { diskStorage } from 'multer';
import { extname } from 'path';
// import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { SanitizePipe } from 'src/common/pipe/sanitize.pipe';
import { UploadPhotoDto } from '../dto/photo.dto';
import { PhotoService } from '../services/photo.service';

// @ApiTags('file')
// @ApiBearerAuth()
@Controller('photo')
@UseGuards(JwtAuthGuard)
// @UsePipes(SanitizePipe)
@UseInterceptors(ClassSerializerInterceptor)
export class PhotoController {
  constructor(private photoService: PhotoService) {}
  //   @Get()
  //   getFile(@Res() res: Response) {
  //     const file = createReadStream(join(process.cwd(), 'package.json'));
  //     file.pipe(res);
  //   }

  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public',
        filename: (req, file, cb) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  @Post('/upload')
  async upload(
    // @Body() dto: UploadPhotoDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(file);
    return file;
  }
}
