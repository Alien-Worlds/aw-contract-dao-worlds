/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Setperm  } from "../../domain/entities";
import { SetpermMongoModel, SetpermRawModel  } from "../dtos/setperm.dto";

// Mongo Mappers
export class SetpermMongoMapper
  extends MongoMapper<Setperm, SetpermMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('permission', { 
      key: 'permission', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: SetpermMongoModel): Setperm {
    const { 
      cand,
      permission,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Setperm.create(
      cand || '',
      permission || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class SetpermRawMapper
  extends MapperImpl<Setperm, SetpermRawModel>
{
  public fromEntity(entity: Setperm): SetpermRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: SetpermRawModel): Setperm {
    const { 
      cand,
      permission,
      dac_id,
      ...rest
    } = rawModel;

    return Setperm.create(
      cand || '',
      permission || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

