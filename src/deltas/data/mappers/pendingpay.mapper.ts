/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:19 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedAsset, ExtendedAssetMongoMapper, ExtendedAssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Pendingpay  } from "../../domain/entities";
import { PendingpayMongoModel, PendingpayRawModel  } from "../dtos/pendingpay.dto";

// Mongo Mappers
export class PendingpayMongoMapper
  extends MapperImpl<Pendingpay, PendingpayMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('receiver', { 
      key: 'receiver', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('quantity', { 
      key: 'quantity', 
      mapper: (value: ExtendedAsset) => 
           new ExtendedAssetMongoMapper().fromEntity(value)
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
        key.toBigInt() ?? 0n,
        receiver ?? '',
        quantity 
          ? new ExtendedAssetMongoMapper().toEntity(quantity)
          : ExtendedAsset.getDefault(),
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
      parseToBigInt(key ?? 0n),
        receiver ?? '',
        quantity 
          ? new ExtendedAssetRawMapper().toEntity(quantity)
          : ExtendedAsset.getDefault(),
      undefined,
      rest
    );
  }
}

