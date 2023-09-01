import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post()
  create(@Body() createAgentDto: CreateAgentDto) {
    return this.agentService.create(createAgentDto);
  }

  @Get()
  findAll() {
    return this.agentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto) {
    return this.agentService.update(id, updateAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentService.remove(id);
  }

  // @Get('show/test')
  // async test() {
  //   const data = await this.agentService.findAll();
  //   const show = ['INTERDIVE 2023'];
  //   if (!show || show.length === 0) {
  //     // If no filter is provided, return all data
  //     return data;
  //   }
  //   const filteredData = data.filter((agent) => {
  //     return agent.show.some((agentShow) => {
  //       return show.some((filterShow: string) => {
  //         return agentShow.toLowerCase().includes(filterShow.toLowerCase());
  //       });
  //     });
  //   });

  //   return filteredData.map((item) => item.toObject());
  // }
}
