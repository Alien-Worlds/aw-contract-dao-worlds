/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Firecust  } from "../../domain/entities";
import { FirecustMongoModel, FirecustRawModel  } from "../dtos/firecust.dto";

// Mongo Mappers
export class FirecustMongoMapper
  extends MongoMapper<Firecust, FirecustMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cust', { 
      key: 'cust', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: FirecustMongoModel): Firecust {
    const { 
      cust,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Firecust.create(
      cust || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class FirecustRawMapper
  extends MapperImpl<Firecust, FirecustRawModel>
{
  public fromEntity(entity: Firecust): FirecustRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: FirecustRawModel): Firecust {
    const { 
      cust,
      dac_id,
      ...rest
    } = rawModel;

    return Firecust.create(
      cust || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

