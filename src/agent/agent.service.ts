import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Agent, AgentDocument } from './entities/agent.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AgentService {
  constructor(
    @InjectModel(Agent.name) private agentModel: Model<AgentDocument>,
  ) {}

  create(createAgentDto: CreateAgentDto) {
    const createdAgent = new this.agentModel(createAgentDto);
    return createdAgent.save();
  }

  async findAll() {
    return await this.agentModel.find().exec();
  }

  async findOne(id: string) {
    const agent = await this.agentModel.findById(id).exec();
    if (!agent) {
      throw new NotFoundException(`Agent with ID ${id} not found`);
    }
    return agent;
  }

  update(id: string, updateAgentDto: UpdateAgentDto) {
    return this.agentModel.findByIdAndUpdate(id, updateAgentDto).exec();
  }

  async remove(id: string) {
    const deletedAgent = await this.agentModel.findByIdAndDelete(id).exec();
    if (!deletedAgent) {
      throw new NotFoundException(`Agent with ID ${id} not found`);
    }
    return deletedAgent;
  }
}
