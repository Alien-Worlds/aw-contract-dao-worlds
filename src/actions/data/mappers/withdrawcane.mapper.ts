/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:00 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Withdrawcane  } from "../../domain/entities";
import { WithdrawcaneMongoModel, WithdrawcaneRawModel  } from "../dtos/withdrawcane.dto";

// Mongo Mappers
export class WithdrawcaneMongoMapper
  extends MapperImpl<Withdrawcane, WithdrawcaneMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: WithdrawcaneMongoModel): Withdrawcane {
    const { 
      cand,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Withdrawcane.create(
        cand ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class WithdrawcaneRawMapper
  extends MapperImpl<Withdrawcane, WithdrawcaneRawModel>
{
  public fromEntity(entity: Withdrawcane): WithdrawcaneRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: WithdrawcaneRawModel): Withdrawcane {
    const { 
      cand,
      dac_id,
      ...rest
    } = rawModel;

    return Withdrawcane.create(
        cand ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

