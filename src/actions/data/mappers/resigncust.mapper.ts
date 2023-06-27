/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 11:46:35 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Resigncust  } from "../../domain/entities";
import { ResigncustMongoModel, ResigncustRawModel  } from "../dtos/resigncust.dto";

// Mongo Mappers
export class ResigncustMongoMapper
  extends MapperImpl<Resigncust, ResigncustMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cust', { 
      key: 'cust', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: ResigncustMongoModel): Resigncust {
    const { 
      cust,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Resigncust.create(
        cust ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ResigncustRawMapper
  extends MapperImpl<Resigncust, ResigncustRawModel>
{
  public fromEntity(entity: Resigncust): ResigncustRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ResigncustRawModel): Resigncust {
    const { 
      cust,
      dac_id,
      ...rest
    } = rawModel;

    return Resigncust.create(
        cust ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

