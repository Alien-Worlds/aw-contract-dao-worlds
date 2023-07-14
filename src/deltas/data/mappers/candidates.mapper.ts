/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:18 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Candidates  } from "../../domain/entities";
import { CandidatesMongoModel, CandidatesRawModel  } from "../dtos/candidates.dto";

// Mongo Mappers
export class CandidatesMongoMapper
  extends MapperImpl<Candidates, CandidatesMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('candidateName', { 
      key: 'candidate_name', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('requestedpay', { 
      key: 'requestedpay', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('rank', { 
      key: 'rank', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('gapFiller', { 
      key: 'gap_filler', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('totalVotePower', { 
      key: 'total_vote_power', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('isActive', { 
      key: 'is_active', 
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

    this.mappingFromEntity.set('runningWeightTime', { 
      key: 'running_weight_time', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: CandidatesMongoModel): Candidates {
    const { 
      candidate_name,
      requestedpay,
      rank,
      gap_filler,
      total_vote_power,
      is_active,
      number_voters,
      avg_vote_time_stamp,
      running_weight_time,
      _id,
      ...rest
    } = mongoModel;

    return Candidates.create(
      candidate_name || '',
      requestedpay ? new AssetMongoMapper().toEntity(requestedpay) : Asset.getDefault(),
      rank || 0,
      gap_filler || 0,
      total_vote_power || 0,
      is_active || 0,
      number_voters || 0,
      avg_vote_time_stamp || new Date(0),
      running_weight_time || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CandidatesRawMapper
  extends MapperImpl<Candidates, CandidatesRawModel>
{
  public fromEntity(entity: Candidates): CandidatesRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CandidatesRawModel): Candidates {
    const { 
      candidate_name,
      requestedpay,
      rank,
      gap_filler,
      total_vote_power,
      is_active,
      number_voters,
      avg_vote_time_stamp,
      running_weight_time,
      ...rest
    } = rawModel;

    return Candidates.create(
      candidate_name || '',
      requestedpay ? new AssetRawMapper().toEntity(requestedpay) : Asset.getDefault(),
      rank || 0,
      gap_filler || 0,
      total_vote_power || 0,
      is_active || 0,
      number_voters || 0,
      avg_vote_time_stamp || new Date(0),
      running_weight_time || 0,
      undefined,
      rest
    );
  }
}

