/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Unsetbudget  } from "../../domain/entities";
import { UnsetbudgetMongoModel, UnsetbudgetRawModel  } from "../dtos/unsetbudget.dto";

// Mongo Mappers
export class UnsetbudgetMongoMapper
  extends MongoMapper<Unsetbudget, UnsetbudgetMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: UnsetbudgetMongoModel): Unsetbudget {
    const { 
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Unsetbudget.create(
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UnsetbudgetRawMapper
  extends MapperImpl<Unsetbudget, UnsetbudgetRawModel>
{
  public fromEntity(entity: Unsetbudget): UnsetbudgetRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UnsetbudgetRawModel): Unsetbudget {
    const { 
      dac_id,
      ...rest
    } = rawModel;

    return Unsetbudget.create(
      dac_id || '',
      undefined,
      rest
    );
  }
}

