/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:49:22 GMT
 */


import { 
  Candidates,
  Candidates2,
  Candperms,
  Custodians1,
  Dacglobals,
  Pendingpay,
  Proxies,
  Votes,
} from '../../domain/entities';
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/dao-worlds-delta';
import { DaoWorldsDeltaMongoModel, DaoWorldsDeltaRawModel } from '../dtos';
import { DaoWorldsTableName } from '../../domain/enums';
import { CandidatesMongoMapper, CandidatesRawMapper } from "./candidates.mapper";
import { Candidates2MongoMapper, Candidates2RawMapper } from "./candidates2.mapper";
import { CandpermsMongoMapper, CandpermsRawMapper } from "./candperms.mapper";
import { Custodians1MongoMapper, Custodians1RawMapper } from "./custodians1.mapper";
import { DacglobalsMongoMapper, DacglobalsRawMapper } from "./dacglobals.mapper";
import { PendingpayMongoMapper, PendingpayRawMapper } from "./pendingpay.mapper";
import { ProxiesMongoMapper, ProxiesRawMapper } from "./proxies.mapper";
import { VotesMongoMapper, VotesRawMapper } from "./votes.mapper";

// Mongo Mapper
export class DaoWorldsDeltaMongoMapper
  extends MongoMapper<ContractDelta<DataEntityType>, DaoWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType>
  ): DaoWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case DaoWorldsTableName.Candidates:
        entityData = new CandidatesMongoMapper().fromEntity(
          entity.data as Candidates
        );
        break;
      case DaoWorldsTableName.Candidates2:
        entityData = new Candidates2MongoMapper().fromEntity(
          entity.data as Candidates2
        );
        break;
      case DaoWorldsTableName.Candperms:
        entityData = new CandpermsMongoMapper().fromEntity(
          entity.data as Candperms
        );
        break;
      case DaoWorldsTableName.Custodians1:
        entityData = new Custodians1MongoMapper().fromEntity(
          entity.data as Custodians1
        );
        break;
      case DaoWorldsTableName.Dacglobals:
        entityData = new DacglobalsMongoMapper().fromEntity(
          entity.data as Dacglobals
        );
        break;
      case DaoWorldsTableName.Pendingpay:
        entityData = new PendingpayMongoMapper().fromEntity(
          entity.data as Pendingpay
        );
        break;
      case DaoWorldsTableName.Proxies:
        entityData = new ProxiesMongoMapper().fromEntity(
          entity.data as Proxies
        );
        break;
      case DaoWorldsTableName.Votes:
        entityData = new VotesMongoMapper().fromEntity(
          entity.data as Votes
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };
  }

  public toEntity(
    mongoModel: DaoWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType> {
    let data;
    switch (mongoModel.table) {
      case DaoWorldsTableName.Candidates:
        data = new CandidatesMongoMapper().toEntity(mongoModel.data);
        break;
      case DaoWorldsTableName.Candidates2:
        data = new Candidates2MongoMapper().toEntity(mongoModel.data);
        break;
      case DaoWorldsTableName.Candperms:
        data = new CandpermsMongoMapper().toEntity(mongoModel.data);
        break;
      case DaoWorldsTableName.Custodians1:
        data = new Custodians1MongoMapper().toEntity(mongoModel.data);
        break;
      case DaoWorldsTableName.Dacglobals:
        data = new DacglobalsMongoMapper().toEntity(mongoModel.data);
        break;
      case DaoWorldsTableName.Pendingpay:
        data = new PendingpayMongoMapper().toEntity(mongoModel.data);
        break;
      case DaoWorldsTableName.Proxies:
        data = new ProxiesMongoMapper().toEntity(mongoModel.data);
        break;
      case DaoWorldsTableName.Votes:
        data = new VotesMongoMapper().toEntity(mongoModel.data);
        break;
    }

    const {
      _id,
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}

// Processor Task Mapper
export class DaoWorldsDeltaProcessorTaskMapper extends MapperImpl<
  ContractDelta<DataEntityType, DaoWorldsDeltaRawModel>, 
    DaoWorldsDeltaRawModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType, DaoWorldsDeltaRawModel>
  ): DaoWorldsDeltaRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: DaoWorldsDeltaRawModel
  ): ContractDelta<DataEntityType, DaoWorldsDeltaRawModel> {
    let data;
    switch (rawModel.table) {
      case DaoWorldsTableName.Candidates:
        data = new CandidatesRawMapper().toEntity(rawModel.data);
        break;
      case DaoWorldsTableName.Candidates2:
        data = new Candidates2RawMapper().toEntity(rawModel.data);
        break;
      case DaoWorldsTableName.Candperms:
        data = new CandpermsRawMapper().toEntity(rawModel.data);
        break;
      case DaoWorldsTableName.Custodians1:
        data = new Custodians1RawMapper().toEntity(rawModel.data);
        break;
      case DaoWorldsTableName.Dacglobals:
        data = new DacglobalsRawMapper().toEntity(rawModel.data);
        break;
      case DaoWorldsTableName.Pendingpay:
        data = new PendingpayRawMapper().toEntity(rawModel.data);
        break;
      case DaoWorldsTableName.Proxies:
        data = new ProxiesRawMapper().toEntity(rawModel.data);
        break;
      case DaoWorldsTableName.Votes:
        data = new VotesRawMapper().toEntity(rawModel.data);
        break;
    }

    const {
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = rawModel;

    return new ContractDelta<DataEntityType, DaoWorldsDeltaRawModel>(
      '',
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}