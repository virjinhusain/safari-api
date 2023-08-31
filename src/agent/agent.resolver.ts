import { Resolver, Query, Args } from '@nestjs/graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { AgentService } from './agent.service';

@ObjectType('Agent')
class Agent {
  @Field()
  tagRegion: string;
  @Field()
  travelAgent: string;
  @Field((type) => [String], { nullable: true })
  contactPerson: string;
  @Field((type) => [String], { nullable: true })
  email: string;
  @Field((type) => [String], { nullable: true })
  phoneNumber: string;
  @Field((type) => [String], { nullable: true })
  show: string;
  @Field((type) => [String], { nullable: true })
  website: string;
  @Field((type) => [String], { nullable: true })
  link: string;
  @Field()
  publishedResort: string;
  @Field()
  salesBySafari: string;
  @Field()
  safariProduct: string;
  @Field()
  sales2022: string;
  @Field()
  sales2023: string;
  @Field()
  notes: string;
  @Field()
  followUp: string;
}

@Resolver((of) => Agent)
export class AgentResolver {
  constructor(private agentService: AgentService) {}
  @Query((returns) => [Agent])
  async getAgents() {
    return await this.agentService.findAll();
  }
}
