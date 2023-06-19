/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:51 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Proxies  } from "../../domain/entities";
import { ProxiesMongoModel, ProxiesRawModel  } from "../dtos/proxies.dto";

// Mongo Mappers
export class ProxiesMongoMapper
  extends MapperImpl<Proxies, ProxiesMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proxy', { 
      key: 'proxy', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('totalWeight', { 
      key: 'total_weight', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

  }

  public toEntity(mongoModel: ProxiesMongoModel): Proxies {
    const { 
      proxy,
      total_weight,
      _id, 
      ...rest
    } = mongoModel;

    return Proxies.create(
        proxy ?? '',
        total_weight.toBigInt() ?? 0n,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ProxiesRawMapper
  extends MapperImpl<Proxies, ProxiesRawModel>
{
  public fromEntity(entity: Proxies): ProxiesRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ProxiesRawModel): Proxies {
    const { 
      proxy,
      total_weight,
      ...rest
    } = rawModel;

    return Proxies.create(
        proxy ?? '',
      parseToBigInt(total_weight ?? 0n),
      undefined,
      rest
    );
  }
}

