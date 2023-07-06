/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:08:24 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Stprofile  } from "../../domain/entities";
import { StprofileMongoModel, StprofileRawModel  } from "../dtos/stprofile.dto";

// Mongo Mappers
export class StprofileMongoMapper
  extends MapperImpl<Stprofile, StprofileMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('profile', { 
      key: 'profile', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: StprofileMongoModel): Stprofile {
    const { 
      cand,
      profile,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Stprofile.create(
        cand ?? '',
        profile ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class StprofileRawMapper
  extends MapperImpl<Stprofile, StprofileRawModel>
{
  public fromEntity(entity: Stprofile): StprofileRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StprofileRawModel): Stprofile {
    const { 
      cand,
      profile,
      dac_id,
      ...rest
    } = rawModel;

    return Stprofile.create(
        cand ?? '',
        profile ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

