/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 11:46:35 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Nominatecane  } from "../../domain/entities";
import { NominatecaneMongoModel, NominatecaneRawModel  } from "../dtos/nominatecane.dto";

// Mongo Mappers
export class NominatecaneMongoMapper
  extends MapperImpl<Nominatecane, NominatecaneMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('cand', { 
      key: 'cand', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('requestedpay', { 
      key: 'requestedpay', 
      mapper: (value: Asset) => 
           new AssetMongoMapper().fromEntity(value)
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: NominatecaneMongoModel): Nominatecane {
    const { 
      cand,
      requestedpay,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Nominatecane.create(
        cand ?? '',
        requestedpay 
          ? new AssetMongoMapper().toEntity(requestedpay)
          : Asset.getDefault(),
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class NominatecaneRawMapper
  extends MapperImpl<Nominatecane, NominatecaneRawModel>
{
  public fromEntity(entity: Nominatecane): NominatecaneRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: NominatecaneRawModel): Nominatecane {
    const { 
      cand,
      requestedpay,
      dac_id,
      ...rest
    } = rawModel;

    return Nominatecane.create(
        cand ?? '',
        requestedpay 
          ? new AssetRawMapper().toEntity(requestedpay)
          : Asset.getDefault(),
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

