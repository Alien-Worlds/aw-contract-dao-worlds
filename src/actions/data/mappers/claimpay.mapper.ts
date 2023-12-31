/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Claimpay  } from "../../domain/entities";
import { ClaimpayMongoModel, ClaimpayRawModel  } from "../dtos/claimpay.dto";

// Mongo Mappers
export class ClaimpayMongoMapper
  extends MongoMapper<Claimpay, ClaimpayMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('payid', { 
      key: 'payid', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: ClaimpayMongoModel): Claimpay {
    const { 
      payid,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Claimpay.create(
      payid || 0,
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ClaimpayRawMapper
  extends MapperImpl<Claimpay, ClaimpayRawModel>
{
  public fromEntity(entity: Claimpay): ClaimpayRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ClaimpayRawModel): Claimpay {
    const { 
      payid,
      dac_id,
      ...rest
    } = rawModel;

    return Claimpay.create(
      payid || 0,
      dac_id || '',
      undefined,
      rest
    );
  }
}

