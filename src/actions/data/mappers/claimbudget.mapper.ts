/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Claimbudget  } from "../../domain/entities";
import { ClaimbudgetMongoModel, ClaimbudgetRawModel  } from "../dtos/claimbudget.dto";

// Mongo Mappers
export class ClaimbudgetMongoMapper
  extends MapperImpl<Claimbudget, ClaimbudgetMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: ClaimbudgetMongoModel): Claimbudget {
    const { 
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Claimbudget.create(
        dac_id ?? '',
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
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

