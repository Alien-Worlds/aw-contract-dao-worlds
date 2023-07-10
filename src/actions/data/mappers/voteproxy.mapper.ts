/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 07:42:05 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Voteproxy  } from "../../domain/entities";
import { VoteproxyMongoModel, VoteproxyRawModel  } from "../dtos/voteproxy.dto";

// Mongo Mappers
export class VoteproxyMongoMapper
  extends MapperImpl<Voteproxy, VoteproxyMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('voter', { 
      key: 'voter', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('proxy', { 
      key: 'proxy', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: VoteproxyMongoModel): Voteproxy {
    const { 
      voter,
      proxy,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Voteproxy.create(
        voter ?? '',
        proxy ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class VoteproxyRawMapper
  extends MapperImpl<Voteproxy, VoteproxyRawModel>
{
  public fromEntity(entity: Voteproxy): VoteproxyRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: VoteproxyRawModel): Voteproxy {
    const { 
      voter,
      proxy,
      dac_id,
      ...rest
    } = rawModel;

    return Voteproxy.create(
        voter ?? '',
        proxy ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

