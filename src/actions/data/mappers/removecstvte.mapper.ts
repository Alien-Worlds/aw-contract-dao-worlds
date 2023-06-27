/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 11:46:35 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Removecstvte  } from "../../domain/entities";
import { RemovecstvteMongoModel, RemovecstvteRawModel  } from "../dtos/removecstvte.dto";

// Mongo Mappers
export class RemovecstvteMongoMapper
  extends MapperImpl<Removecstvte, RemovecstvteMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('voter', { 
      key: 'voter', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: RemovecstvteMongoModel): Removecstvte {
    const { 
      voter,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Removecstvte.create(
        voter ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RemovecstvteRawMapper
  extends MapperImpl<Removecstvte, RemovecstvteRawModel>
{
  public fromEntity(entity: Removecstvte): RemovecstvteRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RemovecstvteRawModel): Removecstvte {
    const { 
      voter,
      dac_id,
      ...rest
    } = rawModel;

    return Removecstvte.create(
        voter ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

