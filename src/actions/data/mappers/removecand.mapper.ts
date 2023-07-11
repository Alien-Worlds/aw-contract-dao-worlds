/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 11 Jul 2023 10:01:26 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Removecand  } from "../../domain/entities";
import { RemovecandMongoModel, RemovecandRawModel  } from "../dtos/removecand.dto";

// Mongo Mappers
export class RemovecandMongoMapper
  extends MapperImpl<Removecand, RemovecandMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: RemovecandMongoModel): Removecand {
    const { 
      cand,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Removecand.create(
        cand ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RemovecandRawMapper
  extends MapperImpl<Removecand, RemovecandRawModel>
{
  public fromEntity(entity: Removecand): RemovecandRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RemovecandRawModel): Removecand {
    const { 
      cand,
      dac_id,
      ...rest
    } = rawModel;

    return Removecand.create(
        cand ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

