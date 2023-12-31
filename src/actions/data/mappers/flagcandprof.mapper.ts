/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Flagcandprof  } from "../../domain/entities";
import { FlagcandprofMongoModel, FlagcandprofRawModel  } from "../dtos/flagcandprof.dto";

// Mongo Mappers
export class FlagcandprofMongoMapper
  extends MongoMapper<Flagcandprof, FlagcandprofMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('reason', { 
      key: 'reason', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('reporter', { 
      key: 'reporter', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('block', { 
      key: 'block', 
      mapper: (value: boolean) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: FlagcandprofMongoModel): Flagcandprof {
    const { 
      cand,
      reason,
      reporter,
      block,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Flagcandprof.create(
      cand || '',
      reason || '',
      reporter || '',
      block || false,
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class FlagcandprofRawMapper
  extends MapperImpl<Flagcandprof, FlagcandprofRawModel>
{
  public fromEntity(entity: Flagcandprof): FlagcandprofRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: FlagcandprofRawModel): Flagcandprof {
    const { 
      cand,
      reason,
      reporter,
      block,
      dac_id,
      ...rest
    } = rawModel;

    return Flagcandprof.create(
      cand || '',
      reason || '',
      reporter || '',
      block || false,
      dac_id || '',
      undefined,
      rest
    );
  }
}

