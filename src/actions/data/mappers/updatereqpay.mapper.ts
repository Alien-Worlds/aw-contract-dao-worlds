/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:17 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Updatereqpay  } from "../../domain/entities";
import { UpdatereqpayMongoModel, UpdatereqpayRawModel  } from "../dtos/updatereqpay.dto";

// Mongo Mappers
export class UpdatereqpayMongoMapper
  extends MapperImpl<Updatereqpay, UpdatereqpayMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('requestedpay', { 
      key: 'requestedpay', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: UpdatereqpayMongoModel): Updatereqpay {
    const { 
      cand,
      requestedpay,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Updatereqpay.create(
      cand || '',
      requestedpay ? new AssetMongoMapper().toEntity(requestedpay) : Asset.getDefault(),
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UpdatereqpayRawMapper
  extends MapperImpl<Updatereqpay, UpdatereqpayRawModel>
{
  public fromEntity(entity: Updatereqpay): UpdatereqpayRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UpdatereqpayRawModel): Updatereqpay {
    const { 
      cand,
      requestedpay,
      dac_id,
      ...rest
    } = rawModel;

    return Updatereqpay.create(
      cand || '',
      requestedpay ? new AssetRawMapper().toEntity(requestedpay) : Asset.getDefault(),
      dac_id || '',
      undefined,
      rest
    );
  }
}

