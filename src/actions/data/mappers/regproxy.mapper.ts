/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:49:22 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Regproxy  } from "../../domain/entities";
import { RegproxyMongoModel, RegproxyRawModel  } from "../dtos/regproxy.dto";

// Mongo Mappers
export class RegproxyMongoMapper
  extends MongoMapper<Regproxy, RegproxyMongoModel>
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

  public toEntity(mongoModel: RegproxyMongoModel): Regproxy {
    const { 
      proxy,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Regproxy.create(
      proxy || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RegproxyRawMapper
  extends MapperImpl<Regproxy, RegproxyRawModel>
{
  public fromEntity(entity: Regproxy): RegproxyRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RegproxyRawModel): Regproxy {
    const { 
      proxy,
      dac_id,
      ...rest
    } = rawModel;

    return Regproxy.create(
      proxy || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

