/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Proxies  } from "../../domain/entities";
import { ProxiesMongoModel, ProxiesRawModel  } from "../dtos/proxies.dto";

// Mongo Mappers
export class ProxiesMongoMapper
  extends MongoMapper<Proxies, ProxiesMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proxy', { 
      key: 'proxy', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('totalWeight', { 
      key: 'total_weight', 
      mapper: (value: number) => value,
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
      proxy || '',
      total_weight || 0,
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
      proxy || '',
      total_weight || 0,
      undefined,
      rest
    );
  }
}

