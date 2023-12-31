/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Unregproxy  } from "../../domain/entities";
import { UnregproxyMongoModel, UnregproxyRawModel  } from "../dtos/unregproxy.dto";

// Mongo Mappers
export class UnregproxyMongoMapper
  extends MongoMapper<Unregproxy, UnregproxyMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proxy', { 
      key: 'proxy', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: UnregproxyMongoModel): Unregproxy {
    const { 
      proxy,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Unregproxy.create(
      proxy || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UnregproxyRawMapper
  extends MapperImpl<Unregproxy, UnregproxyRawModel>
{
  public fromEntity(entity: Unregproxy): UnregproxyRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UnregproxyRawModel): Unregproxy {
    const { 
      proxy,
      dac_id,
      ...rest
    } = rawModel;

    return Unregproxy.create(
      proxy || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

