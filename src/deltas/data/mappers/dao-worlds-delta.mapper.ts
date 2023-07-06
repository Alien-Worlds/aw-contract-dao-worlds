/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:08:24 GMT
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
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/dao-worlds-delta';
import { DaoWorldsDeltaMongoModel } from '../dtos';
import { DaoWorldsTableName } from '../../domain/enums';
import { CandidatesMongoMapper } from "./candidates.mapper";
import { Candidates2MongoMapper } from "./candidates2.mapper";
import { CandpermsMongoMapper } from "./candperms.mapper";
import { Custodians1MongoMapper } from "./custodians1.mapper";
import { DacglobalsMongoMapper } from "./dacglobals.mapper";
import { PendingpayMongoMapper } from "./pendingpay.mapper";
import { ProxiesMongoMapper } from "./proxies.mapper";
import { VotesMongoMapper } from "./votes.mapper";

export class DaoWorldsDeltaMongoMapper
  extends MapperImpl<ContractDelta<DataEntityType, DaoWorldsDeltaMongoModel>, DaoWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType, DaoWorldsDeltaMongoModel>
  ): DaoWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case DaoWorldsTableName.Candidates:
        entityData = new CandidatesMongoMapper().fromEntity(entity.delta as Candidates);
        break;
      case DaoWorldsTableName.Candidates2:
        entityData = new Candidates2MongoMapper().fromEntity(entity.delta as Candidates2);
        break;
      case DaoWorldsTableName.Candperms:
        entityData = new CandpermsMongoMapper().fromEntity(entity.delta as Candperms);
        break;
      case DaoWorldsTableName.Custodians1:
        entityData = new Custodians1MongoMapper().fromEntity(entity.delta as Custodians1);
        break;
      case DaoWorldsTableName.Dacglobals:
        entityData = new DacglobalsMongoMapper().fromEntity(entity.delta as Dacglobals);
        break;
      case DaoWorldsTableName.Pendingpay:
        entityData = new PendingpayMongoMapper().fromEntity(entity.delta as Pendingpay);
        break;
      case DaoWorldsTableName.Proxies:
        entityData = new ProxiesMongoMapper().fromEntity(entity.delta as Proxies);
        break;
      case DaoWorldsTableName.Votes:
        entityData = new VotesMongoMapper().fromEntity(entity.delta as Votes);
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data_hash: entity.deltaHash,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };
  }

  public toEntity(
    mongoModel: DaoWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType, DaoWorldsDeltaMongoModel> {
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
      data_hash,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType, DaoWorldsDeltaMongoModel>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data_hash,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}