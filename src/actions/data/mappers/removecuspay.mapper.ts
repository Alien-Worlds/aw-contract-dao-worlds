/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Removecuspay  } from "../../domain/entities";
import { RemovecuspayMongoModel, RemovecuspayRawModel  } from "../dtos/removecuspay.dto";

// Mongo Mappers
export class RemovecuspayMongoMapper
  extends MapperImpl<Removecuspay, RemovecuspayMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('payid', { 
      key: 'payid', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: RemovecuspayMongoModel): Removecuspay {
    const { 
      payid,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Removecuspay.create(
      payid || 0,
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RemovecuspayRawMapper
  extends MapperImpl<Removecuspay, RemovecuspayRawModel>
{
  public fromEntity(entity: Removecuspay): RemovecuspayRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RemovecuspayRawModel): Removecuspay {
    const { 
      payid,
      dac_id,
      ...rest
    } = rawModel;

    return Removecuspay.create(
      payid || 0,
      dac_id || '',
      undefined,
      rest
    );
  }
}

