/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Newperiod  } from "../../domain/entities";
import { NewperiodMongoModel, NewperiodRawModel  } from "../dtos/newperiod.dto";

// Mongo Mappers
export class NewperiodMongoMapper
  extends MongoMapper<Newperiod, NewperiodMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('message', { 
      key: 'message', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: NewperiodMongoModel): Newperiod {
    const { 
      message,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Newperiod.create(
      message || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class NewperiodRawMapper
  extends MapperImpl<Newperiod, NewperiodRawModel>
{
  public fromEntity(entity: Newperiod): NewperiodRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: NewperiodRawModel): Newperiod {
    const { 
      message,
      dac_id,
      ...rest
    } = rawModel;

    return Newperiod.create(
      message || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

