/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:25:55 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Claimbudget  } from "../../domain/entities";
import { ClaimbudgetMongoModel, ClaimbudgetRawModel  } from "../dtos/claimbudget.dto";

// Mongo Mappers
export class ClaimbudgetMongoMapper
  extends MongoMapper<Claimbudget, ClaimbudgetMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: ClaimbudgetMongoModel): Claimbudget {
    const { 
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Claimbudget.create(
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ClaimbudgetRawMapper
  extends MapperImpl<Claimbudget, ClaimbudgetRawModel>
{
  public fromEntity(entity: Claimbudget): ClaimbudgetRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ClaimbudgetRawModel): Claimbudget {
    const { 
      dac_id,
      ...rest
    } = rawModel;

    return Claimbudget.create(
      dac_id || '',
      undefined,
      rest
    );
  }
}

