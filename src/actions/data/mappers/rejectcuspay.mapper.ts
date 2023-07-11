/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 11 Jul 2023 10:01:26 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Rejectcuspay  } from "../../domain/entities";
import { RejectcuspayMongoModel, RejectcuspayRawModel  } from "../dtos/rejectcuspay.dto";

// Mongo Mappers
export class RejectcuspayMongoMapper
  extends MapperImpl<Rejectcuspay, RejectcuspayMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('payid', { 
      key: 'payid', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: RejectcuspayMongoModel): Rejectcuspay {
    const { 
      payid,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Rejectcuspay.create(
        payid ?? 0,
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RejectcuspayRawMapper
  extends MapperImpl<Rejectcuspay, RejectcuspayRawModel>
{
  public fromEntity(entity: Rejectcuspay): RejectcuspayRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RejectcuspayRawModel): Rejectcuspay {
    const { 
      payid,
      dac_id,
      ...rest
    } = rawModel;

    return Rejectcuspay.create(
        payid ?? 0,
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

