import { Body, Controller, Get, Post } from '@nestjs/common';
import { EtheriumService } from './etherium.service';

@Controller('api')
export class EtheriumController {
    constructor(
        private readonly etheriumService: EtheriumService
    ){}

    @Get('get-value')
    async getValue() {
        return await this.etheriumService.getValueFromNetwork();
    }

    @Post('post-value')
    async postValue(
        @Body() body: any
    ) {
        return await this.etheriumService.postValueToNetwork(body);
    }
}
