/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Paycpu  } from "../../domain/entities";
import { PaycpuMongoModel, PaycpuRawModel  } from "../dtos/paycpu.dto";

// Mongo Mappers
export class PaycpuMongoMapper
  extends MongoMapper<Paycpu, PaycpuMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: PaycpuMongoModel): Paycpu {
    const { 
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Paycpu.create(
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class PaycpuRawMapper
  extends MapperImpl<Paycpu, PaycpuRawModel>
{
  public fromEntity(entity: Paycpu): PaycpuRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: PaycpuRawModel): Paycpu {
    const { 
      dac_id,
      ...rest
    } = rawModel;

    return Paycpu.create(
      dac_id || '',
      undefined,
      rest
    );
  }
}

