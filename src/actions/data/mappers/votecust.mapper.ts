/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:25:55 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Votecust  } from "../../domain/entities";
import { VotecustMongoModel, VotecustRawModel  } from "../dtos/votecust.dto";

// Mongo Mappers
export class VotecustMongoMapper
  extends MongoMapper<Votecust, VotecustMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('voter', { 
      key: 'voter', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('newvotes', { 
      key: 'newvotes', 
      mapper: (values: string[][]) => values,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: VotecustMongoModel): Votecust {
    const { 
      voter,
      newvotes,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Votecust.create(
      voter || '',
      newvotes || [],
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class VotecustRawMapper
  extends MapperImpl<Votecust, VotecustRawModel>
{
  public fromEntity(entity: Votecust): VotecustRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: VotecustRawModel): Votecust {
    const { 
      voter,
      newvotes,
      dac_id,
      ...rest
    } = rawModel;

    return Votecust.create(
      voter || '',
      newvotes || [],
      dac_id || '',
      undefined,
      rest
    );
  }
}

