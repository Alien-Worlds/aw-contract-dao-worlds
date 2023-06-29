/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Claimpay  } from "../../domain/entities";
import { ClaimpayMongoModel, ClaimpayRawModel  } from "../dtos/claimpay.dto";

// Mongo Mappers
export class ClaimpayMongoMapper
  extends MapperImpl<Claimpay, ClaimpayMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('payid', { 
      key: 'payid', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
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
        payid.toBigInt() ?? 0n,
        dac_id ?? '',
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
      parseToBigInt(payid ?? 0n),
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

