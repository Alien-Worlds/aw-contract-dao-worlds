/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:08:24 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Weightobsv,  AccountWeightDelta  } from "../../domain/entities";
import { WeightobsvMongoModel, WeightobsvRawModel,  AccountWeightDeltaMongoModel, AccountWeightDeltaRawModel  } from "../dtos/weightobsv.dto";

// Mongo Mappers
export class WeightobsvMongoMapper
  extends MapperImpl<Weightobsv, WeightobsvMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('accountWeightDeltas', { 
      key: 'account_weight_deltas', 
      mapper: (value: AccountWeightDelta[]) => 
        value.map(new AccountWeightDeltaMongoMapper().fromEntity),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: WeightobsvMongoModel): Weightobsv {
    const { 
      account_weight_deltas,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Weightobsv.create(
        account_weight_deltas?.map(new AccountWeightDeltaMongoMapper().toEntity) ?? []
,
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class AccountWeightDeltaMongoMapper
  extends MapperImpl<AccountWeightDelta, AccountWeightDeltaMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('weightDelta', { 
      key: 'weight_delta', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('weightDeltaQuorum', { 
      key: 'weight_delta_quorum', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

  }

  public toEntity(mongoModel: AccountWeightDeltaMongoModel): AccountWeightDelta {
    const { 
      account,
      weight_delta,
      weight_delta_quorum,
      _id, 
      ...rest
    } = mongoModel;

    return AccountWeightDelta.create(
        account ?? '',
        weight_delta.toBigInt() ?? 0n,
        weight_delta_quorum.toBigInt() ?? 0n,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class WeightobsvRawMapper
  extends MapperImpl<Weightobsv, WeightobsvRawModel>
{
  public fromEntity(entity: Weightobsv): WeightobsvRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: WeightobsvRawModel): Weightobsv {
    const { 
      account_weight_deltas,
      dac_id,
      ...rest
    } = rawModel;

    return Weightobsv.create(
        account_weight_deltas?.map(new AccountWeightDeltaRawMapper().toEntity) ?? []
,
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

export class AccountWeightDeltaRawMapper
  extends MapperImpl<AccountWeightDelta, AccountWeightDeltaRawModel>
{
  public fromEntity(entity: AccountWeightDelta): AccountWeightDeltaRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: AccountWeightDeltaRawModel): AccountWeightDelta {
    const { 
      account,
      weight_delta,
      weight_delta_quorum,
      ...rest
    } = rawModel;

    return AccountWeightDelta.create(
        account ?? '',
      parseToBigInt(weight_delta ?? 0n),
      parseToBigInt(weight_delta_quorum ?? 0n),
      undefined,
      rest
    );
  }
}

