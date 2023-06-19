/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:50 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Firecand  } from "../../domain/entities";
import { FirecandMongoModel, FirecandRawModel  } from "../dtos/firecand.dto";

// Mongo Mappers
export class FirecandMongoMapper
  extends MapperImpl<Firecand, FirecandMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('lockupStake', { 
      key: 'lockupStake', 
      mapper: (value: boolean) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: FirecandMongoModel): Firecand {
    const { 
      cand,
      lockupStake,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Firecand.create(
        cand ?? '',
        lockupStake ?? false,
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class FirecandRawMapper
  extends MapperImpl<Firecand, FirecandRawModel>
{
  public fromEntity(entity: Firecand): FirecandRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: FirecandRawModel): Firecand {
    const { 
      cand,
      lockupStake,
      dac_id,
      ...rest
    } = rawModel;

    return Firecand.create(
        cand ?? '',
        lockupStake ?? false,
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

