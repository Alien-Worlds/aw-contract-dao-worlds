/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { ExtendedAsset, ExtendedAssetMongoMapper, ExtendedAssetRawMapper } from '@alien-worlds/aw-antelope';
import { Pendingpay  } from "../../domain/entities";
import { PendingpayMongoModel, PendingpayRawModel  } from "../dtos/pendingpay.dto";

// Mongo Mappers
export class PendingpayMongoMapper
  extends MongoMapper<Pendingpay, PendingpayMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('receiver', { 
      key: 'receiver', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('quantity', { 
      key: 'quantity', 
      mapper: (value: ExtendedAsset) => new ExtendedAssetMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: PendingpayMongoModel): Pendingpay {
    const { 
      key,
      receiver,
      quantity,
      _id,
      ...rest
    } = mongoModel;

    return Pendingpay.create(
      key || 0,
      receiver || '',
      quantity ? new ExtendedAssetMongoMapper().toEntity(quantity) : ExtendedAsset.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class PendingpayRawMapper
  extends MapperImpl<Pendingpay, PendingpayRawModel>
{
  public fromEntity(entity: Pendingpay): PendingpayRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: PendingpayRawModel): Pendingpay {
    const { 
      key,
      receiver,
      quantity,
      ...rest
    } = rawModel;

    return Pendingpay.create(
      key || 0,
      receiver || '',
      quantity ? new ExtendedAssetRawMapper().toEntity(quantity) : ExtendedAsset.getDefault(),
      undefined,
      rest
    );
  }
}

