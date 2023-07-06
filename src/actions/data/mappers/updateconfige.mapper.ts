/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:08:24 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedAsset, ExtendedAssetMongoMapper, ExtendedAssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Updateconfige,  ContrConfig  } from "../../domain/entities";
import { UpdateconfigeMongoModel, UpdateconfigeRawModel,  ContrConfigMongoModel, ContrConfigRawModel  } from "../dtos/updateconfige.dto";

// Mongo Mappers
export class UpdateconfigeMongoMapper
  extends MapperImpl<Updateconfige, UpdateconfigeMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('newConfig', { 
      key: 'new_config', 
      mapper:          new ContrConfigMongoMapper().fromEntity,    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: UpdateconfigeMongoModel): Updateconfige {
    const { 
      new_config,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Updateconfige.create(
        new_config
          ? new ContrConfigMongoMapper().toEntity(new_config)
          : ContrConfig.getDefault(),
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class ContrConfigMongoMapper
  extends MapperImpl<ContrConfig, ContrConfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('lockupasset', { 
      key: 'lockupasset', 
      mapper: (value: ExtendedAsset) => 
           new ExtendedAssetMongoMapper().fromEntity(value)
    });

    this.mappingFromEntity.set('maxvotes', { 
      key: 'maxvotes', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('numelected', { 
      key: 'numelected', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('periodlength', { 
      key: 'periodlength', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('shouldPayViaServiceProvider', { 
      key: 'should_pay_via_service_provider', 
      mapper: (value: boolean) => 
        value,
    });

    this.mappingFromEntity.set('initialVoteQuorumPercent', { 
      key: 'initial_vote_quorum_percent', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('tokenSupplyTheshold', { 
      key: 'token_supply_theshold', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('voteQuorumPercent', { 
      key: 'vote_quorum_percent', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('authThresholdHigh', { 
      key: 'auth_threshold_high', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('authThresholdMid', { 
      key: 'auth_threshold_mid', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('authThresholdLow', { 
      key: 'auth_threshold_low', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('lockupReleaseTimeDelay', { 
      key: 'lockup_release_time_delay', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('requestedPayMax', { 
      key: 'requested_pay_max', 
      mapper: (value: ExtendedAsset) => 
           new ExtendedAssetMongoMapper().fromEntity(value)
    });

  }

  public toEntity(mongoModel: ContrConfigMongoModel): ContrConfig {
    const { 
      lockupasset,
      maxvotes,
      numelected,
      periodlength,
      should_pay_via_service_provider,
      initial_vote_quorum_percent,
      token_supply_theshold,
      vote_quorum_percent,
      auth_threshold_high,
      auth_threshold_mid,
      auth_threshold_low,
      lockup_release_time_delay,
      requested_pay_max,
      _id, 
      ...rest
    } = mongoModel;

    return ContrConfig.create(
        lockupasset 
          ? new ExtendedAssetMongoMapper().toEntity(lockupasset)
          : ExtendedAsset.getDefault(),
        maxvotes ?? 0,
        numelected ?? 0,
        periodlength ?? 0,
        should_pay_via_service_provider ?? false,
        initial_vote_quorum_percent ?? 0,
        token_supply_theshold.toBigInt() ?? 0n,
        vote_quorum_percent ?? 0,
        auth_threshold_high ?? 0,
        auth_threshold_mid ?? 0,
        auth_threshold_low ?? 0,
        lockup_release_time_delay ?? 0,
        requested_pay_max 
          ? new ExtendedAssetMongoMapper().toEntity(requested_pay_max)
          : ExtendedAsset.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UpdateconfigeRawMapper
  extends MapperImpl<Updateconfige, UpdateconfigeRawModel>
{
  public fromEntity(entity: Updateconfige): UpdateconfigeRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UpdateconfigeRawModel): Updateconfige {
    const { 
      new_config,
      dac_id,
      ...rest
    } = rawModel;

    return Updateconfige.create(
        new_config
          ? new ContrConfigRawMapper().toEntity(new_config)
          : ContrConfig.getDefault(),
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

export class ContrConfigRawMapper
  extends MapperImpl<ContrConfig, ContrConfigRawModel>
{
  public fromEntity(entity: ContrConfig): ContrConfigRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ContrConfigRawModel): ContrConfig {
    const { 
      lockupasset,
      maxvotes,
      numelected,
      periodlength,
      should_pay_via_service_provider,
      initial_vote_quorum_percent,
      token_supply_theshold,
      vote_quorum_percent,
      auth_threshold_high,
      auth_threshold_mid,
      auth_threshold_low,
      lockup_release_time_delay,
      requested_pay_max,
      ...rest
    } = rawModel;

    return ContrConfig.create(
        lockupasset 
          ? new ExtendedAssetRawMapper().toEntity(lockupasset)
          : ExtendedAsset.getDefault(),
        maxvotes ?? 0,
        numelected ?? 0,
        periodlength ?? 0,
        should_pay_via_service_provider ?? false,
        initial_vote_quorum_percent ?? 0,
      parseToBigInt(token_supply_theshold ?? 0n),
        vote_quorum_percent ?? 0,
        auth_threshold_high ?? 0,
        auth_threshold_mid ?? 0,
        auth_threshold_low ?? 0,
        lockup_release_time_delay ?? 0,
        requested_pay_max 
          ? new ExtendedAssetRawMapper().toEntity(requested_pay_max)
          : ExtendedAsset.getDefault(),
      undefined,
      rest
    );
  }
}

