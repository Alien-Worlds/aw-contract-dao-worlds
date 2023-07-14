/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:17 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
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
      mapper: (values: AccountWeightDelta[]) => values.map(value => new AccountWeightDeltaMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
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
      account_weight_deltas?.map(value => new AccountWeightDeltaMongoMapper().toEntity(value)) || [],
      dac_id || '',
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
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('weightDelta', { 
      key: 'weight_delta', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('weightDeltaQuorum', { 
      key: 'weight_delta_quorum', 
      mapper: (value: number) => value,
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
      account || '',
      weight_delta || 0,
      weight_delta_quorum || 0,
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
      account_weight_deltas?.map(value => new AccountWeightDeltaRawMapper().toEntity(value)) || [],
      dac_id || '',
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
      account || '',
      weight_delta || 0,
      weight_delta_quorum || 0,
      undefined,
      rest
    );
  }
}

