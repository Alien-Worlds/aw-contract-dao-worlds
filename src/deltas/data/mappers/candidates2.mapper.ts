/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:08:24 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Candidates2  } from "../../domain/entities";
import { Candidates2MongoModel, Candidates2RawModel  } from "../dtos/candidates2.dto";

// Mongo Mappers
export class Candidates2MongoMapper
  extends MapperImpl<Candidates2, Candidates2MongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('candidateName', { 
      key: 'candidate_name', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('requestedpay', { 
      key: 'requestedpay', 
      mapper: (value: Asset) => 
           new AssetMongoMapper().fromEntity(value)
    });

    this.mappingFromEntity.set('rank', { 
      key: 'rank', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('gapFiller', { 
      key: 'gap_filler', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('totalVotePower', { 
      key: 'total_vote_power', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('isActive', { 
      key: 'is_active', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('numberVoters', { 
      key: 'number_voters', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('avgVoteTimeStamp', { 
      key: 'avg_vote_time_stamp', 
      mapper: (value: Date) => 
        value,
    });

  }

  public toEntity(mongoModel: Candidates2MongoModel): Candidates2 {
    const { 
      candidate_name,
      requestedpay,
      rank,
      gap_filler,
      total_vote_power,
      is_active,
      number_voters,
      avg_vote_time_stamp,
      _id, 
      ...rest
    } = mongoModel;

    return Candidates2.create(
        candidate_name ?? '',
        requestedpay 
          ? new AssetMongoMapper().toEntity(requestedpay)
          : Asset.getDefault(),
        rank.toBigInt() ?? 0n,
        gap_filler.toBigInt() ?? 0n,
        total_vote_power.toBigInt() ?? 0n,
        is_active ?? 0,
        number_voters ?? 0,
        avg_vote_time_stamp ?? new Date(0),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class Candidates2RawMapper
  extends MapperImpl<Candidates2, Candidates2RawModel>
{
  public fromEntity(entity: Candidates2): Candidates2RawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: Candidates2RawModel): Candidates2 {
    const { 
      candidate_name,
      requestedpay,
      rank,
      gap_filler,
      total_vote_power,
      is_active,
      number_voters,
      avg_vote_time_stamp,
      ...rest
    } = rawModel;

    return Candidates2.create(
        candidate_name ?? '',
        requestedpay 
          ? new AssetRawMapper().toEntity(requestedpay)
          : Asset.getDefault(),
      parseToBigInt(rank ?? 0n),
      parseToBigInt(gap_filler ?? 0n),
      parseToBigInt(total_vote_power ?? 0n),
        is_active ?? 0,
        number_voters ?? 0,
        avg_vote_time_stamp ?? new Date(0),
      undefined,
      rest
    );
  }
}

