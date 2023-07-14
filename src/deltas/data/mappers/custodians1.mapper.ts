/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:18 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Custodians1  } from "../../domain/entities";
import { Custodians1MongoModel, Custodians1RawModel  } from "../dtos/custodians1.dto";

// Mongo Mappers
export class Custodians1MongoMapper
  extends MapperImpl<Custodians1, Custodians1MongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('custName', { 
      key: 'cust_name', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('requestedpay', { 
      key: 'requestedpay', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('totalVotePower', { 
      key: 'total_vote_power', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('rank', { 
      key: 'rank', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('numberVoters', { 
      key: 'number_voters', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('avgVoteTimeStamp', { 
      key: 'avg_vote_time_stamp', 
      mapper: (value: Date) => value,
    });

  }

  public toEntity(mongoModel: Custodians1MongoModel): Custodians1 {
    const { 
      cust_name,
      requestedpay,
      total_vote_power,
      rank,
      number_voters,
      avg_vote_time_stamp,
      _id,
      ...rest
    } = mongoModel;

    return Custodians1.create(
      cust_name || '',
      requestedpay ? new AssetMongoMapper().toEntity(requestedpay) : Asset.getDefault(),
      total_vote_power || 0,
      rank || 0,
      number_voters || 0,
      avg_vote_time_stamp || new Date(0),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class Custodians1RawMapper
  extends MapperImpl<Custodians1, Custodians1RawModel>
{
  public fromEntity(entity: Custodians1): Custodians1RawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: Custodians1RawModel): Custodians1 {
    const { 
      cust_name,
      requestedpay,
      total_vote_power,
      rank,
      number_voters,
      avg_vote_time_stamp,
      ...rest
    } = rawModel;

    return Custodians1.create(
      cust_name || '',
      requestedpay ? new AssetRawMapper().toEntity(requestedpay) : Asset.getDefault(),
      total_vote_power || 0,
      rank || 0,
      number_voters || 0,
      avg_vote_time_stamp || new Date(0),
      undefined,
      rest
    );
  }
}

