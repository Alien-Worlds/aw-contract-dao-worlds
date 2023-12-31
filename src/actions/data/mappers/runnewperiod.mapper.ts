/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Runnewperiod  } from "../../domain/entities";
import { RunnewperiodMongoModel, RunnewperiodRawModel  } from "../dtos/runnewperiod.dto";

// Mongo Mappers
export class RunnewperiodMongoMapper
  extends MongoMapper<Runnewperiod, RunnewperiodMongoModel>
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

  public toEntity(mongoModel: RunnewperiodMongoModel): Runnewperiod {
    const { 
      message,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Runnewperiod.create(
      message || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RunnewperiodRawMapper
  extends MapperImpl<Runnewperiod, RunnewperiodRawModel>
{
  public fromEntity(entity: Runnewperiod): RunnewperiodRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RunnewperiodRawModel): Runnewperiod {
    const { 
      message,
      dac_id,
      ...rest
    } = rawModel;

    return Runnewperiod.create(
      message || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

