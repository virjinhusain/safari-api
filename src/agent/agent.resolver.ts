import { Resolver, Query, Args } from '@nestjs/graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { AgentService } from './agent.service';
import { filter } from 'rxjs';

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
  @Field()
  _id: string;
}

@Resolver((of: any) => Agent)
export class AgentResolver {
  constructor(private agentService: AgentService) {}
  @Query((returns) => [Agent])
  async Agents(
    @Args('show', { type: () => [String], nullable: true }) show: string[],
  ) {
    const data = await this.agentService.findAll();

    if (!show || (show.length === 1 && show[0] === '')) {
      return data;
    }
    const filteredData = data.filter((agent) => {
      return agent.show.some((agentShow) => {
        return show.some((filterShow: string) => {
          return agentShow.toLowerCase().includes(filterShow.toLowerCase());
        });
      });
    });

    return filteredData.map((item) => {
      return {
        _id: item._id,
        ...item.toObject(),
      };
    });
  }
  @Query((returns) => [Agent])
  async getAgents() {
    return await this.agentService.findAll();
  }
}
