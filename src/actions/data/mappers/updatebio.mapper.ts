/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:00 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Updatebio  } from "../../domain/entities";
import { UpdatebioMongoModel, UpdatebioRawModel  } from "../dtos/updatebio.dto";

// Mongo Mappers
export class UpdatebioMongoMapper
  extends MapperImpl<Updatebio, UpdatebioMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('bio', { 
      key: 'bio', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: UpdatebioMongoModel): Updatebio {
    const { 
      cand,
      bio,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Updatebio.create(
        cand ?? '',
        bio ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UpdatebioRawMapper
  extends MapperImpl<Updatebio, UpdatebioRawModel>
{
  public fromEntity(entity: Updatebio): UpdatebioRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UpdatebioRawModel): Updatebio {
    const { 
      cand,
      bio,
      dac_id,
      ...rest
    } = rawModel;

    return Updatebio.create(
        cand ?? '',
        bio ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

