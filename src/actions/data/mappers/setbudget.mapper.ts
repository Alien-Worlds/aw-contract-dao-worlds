/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:49:22 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Setbudget  } from "../../domain/entities";
import { SetbudgetMongoModel, SetbudgetRawModel  } from "../dtos/setbudget.dto";

// Mongo Mappers
export class SetbudgetMongoMapper
  extends MongoMapper<Setbudget, SetbudgetMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('percentage', { 
      key: 'percentage', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: SetbudgetMongoModel): Setbudget {
    const { 
      dac_id,
      percentage,
      _id,
      ...rest
    } = mongoModel;

    return Setbudget.create(
      dac_id || '',
      percentage || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class SetbudgetRawMapper
  extends MapperImpl<Setbudget, SetbudgetRawModel>
{
  public fromEntity(entity: Setbudget): SetbudgetRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: SetbudgetRawModel): Setbudget {
    const { 
      dac_id,
      percentage,
      ...rest
    } = rawModel;

    return Setbudget.create(
      dac_id || '',
      percentage || 0,
      undefined,
      rest
    );
  }
}

