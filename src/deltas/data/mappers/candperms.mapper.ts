/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:00 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Candperms  } from "../../domain/entities";
import { CandpermsMongoModel, CandpermsRawModel  } from "../dtos/candperms.dto";

// Mongo Mappers
export class CandpermsMongoMapper
  extends MapperImpl<Candperms, CandpermsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('permission', { 
      key: 'permission', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: CandpermsMongoModel): Candperms {
    const { 
      cand,
      permission,
      _id, 
      ...rest
    } = mongoModel;

    return Candperms.create(
        cand ?? '',
        permission ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CandpermsRawMapper
  extends MapperImpl<Candperms, CandpermsRawModel>
{
  public fromEntity(entity: Candperms): CandpermsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CandpermsRawModel): Candperms {
    const { 
      cand,
      permission,
      ...rest
    } = rawModel;

    return Candperms.create(
        cand ?? '',
        permission ?? '',
      undefined,
      rest
    );
  }
}

