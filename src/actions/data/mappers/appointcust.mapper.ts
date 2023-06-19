/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:50 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Appointcust  } from "../../domain/entities";
import { AppointcustMongoModel, AppointcustRawModel  } from "../dtos/appointcust.dto";

// Mongo Mappers
export class AppointcustMongoMapper
  extends MapperImpl<Appointcust, AppointcustMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cust', { 
      key: 'cust', 
      mapper: (value: string[]) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: AppointcustMongoModel): Appointcust {
    const { 
      cust,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Appointcust.create(
        cust ?? [],
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class AppointcustRawMapper
  extends MapperImpl<Appointcust, AppointcustRawModel>
{
  public fromEntity(entity: Appointcust): AppointcustRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: AppointcustRawModel): Appointcust {
    const { 
      cust,
      dac_id,
      ...rest
    } = rawModel;

    return Appointcust.create(
        cust ?? [],
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

