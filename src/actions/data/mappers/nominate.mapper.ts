/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Nominate  } from "../../domain/entities";
import { NominateMongoModel, NominateRawModel  } from "../dtos/nominate.dto";

// Mongo Mappers
export class NominateMongoMapper
  extends MongoMapper<Nominate, NominateMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: NominateMongoModel): Nominate {
    const { 
      cand,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Nominate.create(
      cand || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class NominateRawMapper
  extends MapperImpl<Nominate, NominateRawModel>
{
  public fromEntity(entity: Nominate): NominateRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: NominateRawModel): Nominate {
    const { 
      cand,
      dac_id,
      ...rest
    } = rawModel;

    return Nominate.create(
      cand || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

