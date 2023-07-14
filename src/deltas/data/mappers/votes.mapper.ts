/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:25:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Votes  } from "../../domain/entities";
import { VotesMongoModel, VotesRawModel  } from "../dtos/votes.dto";

// Mongo Mappers
export class VotesMongoMapper
  extends MongoMapper<Votes, VotesMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('voter', { 
      key: 'voter', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('proxy', { 
      key: 'proxy', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('candidates', { 
      key: 'candidates', 
      mapper: (values: string[][]) => values,
    });

    this.mappingFromEntity.set('voteTimeStamp', { 
      key: 'vote_time_stamp', 
      mapper: (value: Date) => value,
    });

    this.mappingFromEntity.set('voteCount', { 
      key: 'vote_count', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: VotesMongoModel): Votes {
    const { 
      voter,
      proxy,
      candidates,
      vote_time_stamp,
      vote_count,
      _id,
      ...rest
    } = mongoModel;

    return Votes.create(
      voter || '',
      proxy || '',
      candidates || [],
      vote_time_stamp || new Date(0),
      vote_count || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class VotesRawMapper
  extends MapperImpl<Votes, VotesRawModel>
{
  public fromEntity(entity: Votes): VotesRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: VotesRawModel): Votes {
    const { 
      voter,
      proxy,
      candidates,
      vote_time_stamp,
      vote_count,
      ...rest
    } = rawModel;

    return Votes.create(
      voter || '',
      proxy || '',
      candidates || [],
      vote_time_stamp || new Date(0),
      vote_count || 0,
      undefined,
      rest
    );
  }
}

