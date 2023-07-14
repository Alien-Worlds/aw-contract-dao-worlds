/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:17 GMT
 */


import { 
  Appointcust,
  Balanceobsv,
  Claimbudget,
  Claimpay,
  Firecand,
  Firecust,
  Flagcandprof,
  Newperiod,
  Nominate,
  Nominatecane,
  Paycpu,
  Regproxy,
  Rejectcuspay,
  Removecand,
  Removecstvte,
  Removecuspay,
  Resigncust,
  Runnewperiod,
  Setbudget,
  Setperm,
  Stakeobsv,
  Stprofile,
  Unregproxy,
  Unsetbudget,
  Updatebio,
  Updateconfige,
  Updatereqpay,
  Votecust,
  Voteproxy,
  Weightobsv,
  Withdrawcane,
} from '../../domain/entities';
import { 
  ContractAction, 
  MapperImpl, 
  parseToBigInt 
} from '@alien-worlds/api-core';

import { AppointcustMongoMapper, AppointcustRawMapper } from "./appointcust.mapper";
import { BalanceobsvMongoMapper, BalanceobsvRawMapper } from "./balanceobsv.mapper";
import { ClaimbudgetMongoMapper, ClaimbudgetRawMapper } from "./claimbudget.mapper";
import { ClaimpayMongoMapper, ClaimpayRawMapper } from "./claimpay.mapper";
import { FirecandMongoMapper, FirecandRawMapper } from "./firecand.mapper";
import { FirecustMongoMapper, FirecustRawMapper } from "./firecust.mapper";
import { FlagcandprofMongoMapper, FlagcandprofRawMapper } from "./flagcandprof.mapper";
import { NewperiodMongoMapper, NewperiodRawMapper } from "./newperiod.mapper";
import { NominateMongoMapper, NominateRawMapper } from "./nominate.mapper";
import { NominatecaneMongoMapper, NominatecaneRawMapper } from "./nominatecane.mapper";
import { PaycpuMongoMapper, PaycpuRawMapper } from "./paycpu.mapper";
import { RegproxyMongoMapper, RegproxyRawMapper } from "./regproxy.mapper";
import { RejectcuspayMongoMapper, RejectcuspayRawMapper } from "./rejectcuspay.mapper";
import { RemovecandMongoMapper, RemovecandRawMapper } from "./removecand.mapper";
import { RemovecstvteMongoMapper, RemovecstvteRawMapper } from "./removecstvte.mapper";
import { RemovecuspayMongoMapper, RemovecuspayRawMapper } from "./removecuspay.mapper";
import { ResigncustMongoMapper, ResigncustRawMapper } from "./resigncust.mapper";
import { RunnewperiodMongoMapper, RunnewperiodRawMapper } from "./runnewperiod.mapper";
import { SetbudgetMongoMapper, SetbudgetRawMapper } from "./setbudget.mapper";
import { SetpermMongoMapper, SetpermRawMapper } from "./setperm.mapper";
import { StakeobsvMongoMapper, StakeobsvRawMapper } from "./stakeobsv.mapper";
import { StprofileMongoMapper, StprofileRawMapper } from "./stprofile.mapper";
import { UnregproxyMongoMapper, UnregproxyRawMapper } from "./unregproxy.mapper";
import { UnsetbudgetMongoMapper, UnsetbudgetRawMapper } from "./unsetbudget.mapper";
import { UpdatebioMongoMapper, UpdatebioRawMapper } from "./updatebio.mapper";
import { UpdateconfigeMongoMapper, UpdateconfigeRawMapper } from "./updateconfige.mapper";
import { UpdatereqpayMongoMapper, UpdatereqpayRawMapper } from "./updatereqpay.mapper";
import { VotecustMongoMapper, VotecustRawMapper } from "./votecust.mapper";
import { VoteproxyMongoMapper, VoteproxyRawMapper } from "./voteproxy.mapper";
import { WeightobsvMongoMapper, WeightobsvRawMapper } from "./weightobsv.mapper";
import { WithdrawcaneMongoMapper, WithdrawcaneRawMapper } from "./withdrawcane.mapper";
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/dao-worlds-action';
import { 
  DaoWorldsActionMongoModel,
  DaoWorldsActionRawModel,
  AppointcustMongoModel,
  AppointcustRawModel,
  BalanceobsvMongoModel,
  BalanceobsvRawModel,
  ClaimbudgetMongoModel,
  ClaimbudgetRawModel,
  ClaimpayMongoModel,
  ClaimpayRawModel,
  FirecandMongoModel,
  FirecandRawModel,
  FirecustMongoModel,
  FirecustRawModel,
  FlagcandprofMongoModel,
  FlagcandprofRawModel,
  NewperiodMongoModel,
  NewperiodRawModel,
  NominateMongoModel,
  NominateRawModel,
  NominatecaneMongoModel,
  NominatecaneRawModel,
  PaycpuMongoModel,
  PaycpuRawModel,
  RegproxyMongoModel,
  RegproxyRawModel,
  RejectcuspayMongoModel,
  RejectcuspayRawModel,
  RemovecandMongoModel,
  RemovecandRawModel,
  RemovecstvteMongoModel,
  RemovecstvteRawModel,
  RemovecuspayMongoModel,
  RemovecuspayRawModel,
  ResigncustMongoModel,
  ResigncustRawModel,
  RunnewperiodMongoModel,
  RunnewperiodRawModel,
  SetbudgetMongoModel,
  SetbudgetRawModel,
  SetpermMongoModel,
  SetpermRawModel,
  StakeobsvMongoModel,
  StakeobsvRawModel,
  StprofileMongoModel,
  StprofileRawModel,
  UnregproxyMongoModel,
  UnregproxyRawModel,
  UnsetbudgetMongoModel,
  UnsetbudgetRawModel,
  UpdatebioMongoModel,
  UpdatebioRawModel,
  UpdateconfigeMongoModel,
  UpdateconfigeRawModel,
  UpdatereqpayMongoModel,
  UpdatereqpayRawModel,
  VotecustMongoModel,
  VotecustRawModel,
  VoteproxyMongoModel,
  VoteproxyRawModel,
  WeightobsvMongoModel,
  WeightobsvRawModel,
  WithdrawcaneMongoModel,
  WithdrawcaneRawModel,
} from '../dtos';
import { DaoWorldsActionName } from '../../domain/enums';

// Mongo Mapper
export class DaoWorldsActionMongoMapper
  extends MapperImpl<ContractAction<DataEntityType>, DaoWorldsActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType>
  ): DaoWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case DaoWorldsActionName.Appointcust:
        entityData = new AppointcustMongoMapper().fromEntity(
          entity.data as Appointcust
        );
        break;
      case DaoWorldsActionName.Balanceobsv:
        entityData = new BalanceobsvMongoMapper().fromEntity(
          entity.data as Balanceobsv
        );
        break;
      case DaoWorldsActionName.Claimbudget:
        entityData = new ClaimbudgetMongoMapper().fromEntity(
          entity.data as Claimbudget
        );
        break;
      case DaoWorldsActionName.Claimpay:
        entityData = new ClaimpayMongoMapper().fromEntity(
          entity.data as Claimpay
        );
        break;
      case DaoWorldsActionName.Firecand:
        entityData = new FirecandMongoMapper().fromEntity(
          entity.data as Firecand
        );
        break;
      case DaoWorldsActionName.Firecust:
        entityData = new FirecustMongoMapper().fromEntity(
          entity.data as Firecust
        );
        break;
      case DaoWorldsActionName.Flagcandprof:
        entityData = new FlagcandprofMongoMapper().fromEntity(
          entity.data as Flagcandprof
        );
        break;
      case DaoWorldsActionName.Newperiod:
        entityData = new NewperiodMongoMapper().fromEntity(
          entity.data as Newperiod
        );
        break;
      case DaoWorldsActionName.Nominate:
        entityData = new NominateMongoMapper().fromEntity(
          entity.data as Nominate
        );
        break;
      case DaoWorldsActionName.Nominatecane:
        entityData = new NominatecaneMongoMapper().fromEntity(
          entity.data as Nominatecane
        );
        break;
      case DaoWorldsActionName.Paycpu:
        entityData = new PaycpuMongoMapper().fromEntity(
          entity.data as Paycpu
        );
        break;
      case DaoWorldsActionName.Regproxy:
        entityData = new RegproxyMongoMapper().fromEntity(
          entity.data as Regproxy
        );
        break;
      case DaoWorldsActionName.Rejectcuspay:
        entityData = new RejectcuspayMongoMapper().fromEntity(
          entity.data as Rejectcuspay
        );
        break;
      case DaoWorldsActionName.Removecand:
        entityData = new RemovecandMongoMapper().fromEntity(
          entity.data as Removecand
        );
        break;
      case DaoWorldsActionName.Removecstvte:
        entityData = new RemovecstvteMongoMapper().fromEntity(
          entity.data as Removecstvte
        );
        break;
      case DaoWorldsActionName.Removecuspay:
        entityData = new RemovecuspayMongoMapper().fromEntity(
          entity.data as Removecuspay
        );
        break;
      case DaoWorldsActionName.Resigncust:
        entityData = new ResigncustMongoMapper().fromEntity(
          entity.data as Resigncust
        );
        break;
      case DaoWorldsActionName.Runnewperiod:
        entityData = new RunnewperiodMongoMapper().fromEntity(
          entity.data as Runnewperiod
        );
        break;
      case DaoWorldsActionName.Setbudget:
        entityData = new SetbudgetMongoMapper().fromEntity(
          entity.data as Setbudget
        );
        break;
      case DaoWorldsActionName.Setperm:
        entityData = new SetpermMongoMapper().fromEntity(
          entity.data as Setperm
        );
        break;
      case DaoWorldsActionName.Stakeobsv:
        entityData = new StakeobsvMongoMapper().fromEntity(
          entity.data as Stakeobsv
        );
        break;
      case DaoWorldsActionName.Stprofile:
        entityData = new StprofileMongoMapper().fromEntity(
          entity.data as Stprofile
        );
        break;
      case DaoWorldsActionName.Unregproxy:
        entityData = new UnregproxyMongoMapper().fromEntity(
          entity.data as Unregproxy
        );
        break;
      case DaoWorldsActionName.Unsetbudget:
        entityData = new UnsetbudgetMongoMapper().fromEntity(
          entity.data as Unsetbudget
        );
        break;
      case DaoWorldsActionName.Updatebio:
        entityData = new UpdatebioMongoMapper().fromEntity(
          entity.data as Updatebio
        );
        break;
      case DaoWorldsActionName.Updateconfige:
        entityData = new UpdateconfigeMongoMapper().fromEntity(
          entity.data as Updateconfige
        );
        break;
      case DaoWorldsActionName.Updatereqpay:
        entityData = new UpdatereqpayMongoMapper().fromEntity(
          entity.data as Updatereqpay
        );
        break;
      case DaoWorldsActionName.Votecust:
        entityData = new VotecustMongoMapper().fromEntity(
          entity.data as Votecust
        );
        break;
      case DaoWorldsActionName.Voteproxy:
        entityData = new VoteproxyMongoMapper().fromEntity(
          entity.data as Voteproxy
        );
        break;
      case DaoWorldsActionName.Weightobsv:
        entityData = new WeightobsvMongoMapper().fromEntity(
          entity.data as Weightobsv
        );
        break;
      case DaoWorldsActionName.Withdrawcane:
        entityData = new WithdrawcaneMongoMapper().fromEntity(
          entity.data as Withdrawcane
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };
  }

  public toEntity(
    mongoModel: DaoWorldsActionMongoModel
  ): ContractAction<DataEntityType> {
    let data;
    switch (mongoModel.action.name) {
      case DaoWorldsActionName.Appointcust:
        data = new AppointcustMongoMapper().toEntity(
          mongoModel.action.data as AppointcustMongoModel
        );
        break;
      case DaoWorldsActionName.Balanceobsv:
        data = new BalanceobsvMongoMapper().toEntity(
          mongoModel.action.data as BalanceobsvMongoModel
        );
        break;
      case DaoWorldsActionName.Claimbudget:
        data = new ClaimbudgetMongoMapper().toEntity(
          mongoModel.action.data as ClaimbudgetMongoModel
        );
        break;
      case DaoWorldsActionName.Claimpay:
        data = new ClaimpayMongoMapper().toEntity(
          mongoModel.action.data as ClaimpayMongoModel
        );
        break;
      case DaoWorldsActionName.Firecand:
        data = new FirecandMongoMapper().toEntity(
          mongoModel.action.data as FirecandMongoModel
        );
        break;
      case DaoWorldsActionName.Firecust:
        data = new FirecustMongoMapper().toEntity(
          mongoModel.action.data as FirecustMongoModel
        );
        break;
      case DaoWorldsActionName.Flagcandprof:
        data = new FlagcandprofMongoMapper().toEntity(
          mongoModel.action.data as FlagcandprofMongoModel
        );
        break;
      case DaoWorldsActionName.Newperiod:
        data = new NewperiodMongoMapper().toEntity(
          mongoModel.action.data as NewperiodMongoModel
        );
        break;
      case DaoWorldsActionName.Nominate:
        data = new NominateMongoMapper().toEntity(
          mongoModel.action.data as NominateMongoModel
        );
        break;
      case DaoWorldsActionName.Nominatecane:
        data = new NominatecaneMongoMapper().toEntity(
          mongoModel.action.data as NominatecaneMongoModel
        );
        break;
      case DaoWorldsActionName.Paycpu:
        data = new PaycpuMongoMapper().toEntity(
          mongoModel.action.data as PaycpuMongoModel
        );
        break;
      case DaoWorldsActionName.Regproxy:
        data = new RegproxyMongoMapper().toEntity(
          mongoModel.action.data as RegproxyMongoModel
        );
        break;
      case DaoWorldsActionName.Rejectcuspay:
        data = new RejectcuspayMongoMapper().toEntity(
          mongoModel.action.data as RejectcuspayMongoModel
        );
        break;
      case DaoWorldsActionName.Removecand:
        data = new RemovecandMongoMapper().toEntity(
          mongoModel.action.data as RemovecandMongoModel
        );
        break;
      case DaoWorldsActionName.Removecstvte:
        data = new RemovecstvteMongoMapper().toEntity(
          mongoModel.action.data as RemovecstvteMongoModel
        );
        break;
      case DaoWorldsActionName.Removecuspay:
        data = new RemovecuspayMongoMapper().toEntity(
          mongoModel.action.data as RemovecuspayMongoModel
        );
        break;
      case DaoWorldsActionName.Resigncust:
        data = new ResigncustMongoMapper().toEntity(
          mongoModel.action.data as ResigncustMongoModel
        );
        break;
      case DaoWorldsActionName.Runnewperiod:
        data = new RunnewperiodMongoMapper().toEntity(
          mongoModel.action.data as RunnewperiodMongoModel
        );
        break;
      case DaoWorldsActionName.Setbudget:
        data = new SetbudgetMongoMapper().toEntity(
          mongoModel.action.data as SetbudgetMongoModel
        );
        break;
      case DaoWorldsActionName.Setperm:
        data = new SetpermMongoMapper().toEntity(
          mongoModel.action.data as SetpermMongoModel
        );
        break;
      case DaoWorldsActionName.Stakeobsv:
        data = new StakeobsvMongoMapper().toEntity(
          mongoModel.action.data as StakeobsvMongoModel
        );
        break;
      case DaoWorldsActionName.Stprofile:
        data = new StprofileMongoMapper().toEntity(
          mongoModel.action.data as StprofileMongoModel
        );
        break;
      case DaoWorldsActionName.Unregproxy:
        data = new UnregproxyMongoMapper().toEntity(
          mongoModel.action.data as UnregproxyMongoModel
        );
        break;
      case DaoWorldsActionName.Unsetbudget:
        data = new UnsetbudgetMongoMapper().toEntity(
          mongoModel.action.data as UnsetbudgetMongoModel
        );
        break;
      case DaoWorldsActionName.Updatebio:
        data = new UpdatebioMongoMapper().toEntity(
          mongoModel.action.data as UpdatebioMongoModel
        );
        break;
      case DaoWorldsActionName.Updateconfige:
        data = new UpdateconfigeMongoMapper().toEntity(
          mongoModel.action.data as UpdateconfigeMongoModel
        );
        break;
      case DaoWorldsActionName.Updatereqpay:
        data = new UpdatereqpayMongoMapper().toEntity(
          mongoModel.action.data as UpdatereqpayMongoModel
        );
        break;
      case DaoWorldsActionName.Votecust:
        data = new VotecustMongoMapper().toEntity(
          mongoModel.action.data as VotecustMongoModel
        );
        break;
      case DaoWorldsActionName.Voteproxy:
        data = new VoteproxyMongoMapper().toEntity(
          mongoModel.action.data as VoteproxyMongoModel
        );
        break;
      case DaoWorldsActionName.Weightobsv:
        data = new WeightobsvMongoMapper().toEntity(
          mongoModel.action.data as WeightobsvMongoModel
        );
        break;
      case DaoWorldsActionName.Withdrawcane:
        data = new WithdrawcaneMongoMapper().toEntity(
          mongoModel.action.data as WithdrawcaneMongoModel
        );
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
    );
  }
}

// Processor Task Mapper
export class DaoWorldsActionProcessorTaskMapper extends MapperImpl<
  ContractAction<DataEntityType, DaoWorldsActionRawModel>,
  DaoWorldsActionRawModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType, DaoWorldsActionRawModel>
  ): DaoWorldsActionRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: DaoWorldsActionRawModel
  ): ContractAction<DataEntityType, DaoWorldsActionRawModel> {
    let data;
    switch (rawModel.name) {
      case DaoWorldsActionName.Appointcust:
        data = new AppointcustRawMapper().toEntity(
          rawModel.data as AppointcustRawModel
        );
        break;
      case DaoWorldsActionName.Balanceobsv:
        data = new BalanceobsvRawMapper().toEntity(
          rawModel.data as BalanceobsvRawModel
        );
        break;
      case DaoWorldsActionName.Claimbudget:
        data = new ClaimbudgetRawMapper().toEntity(
          rawModel.data as ClaimbudgetRawModel
        );
        break;
      case DaoWorldsActionName.Claimpay:
        data = new ClaimpayRawMapper().toEntity(
          rawModel.data as ClaimpayRawModel
        );
        break;
      case DaoWorldsActionName.Firecand:
        data = new FirecandRawMapper().toEntity(
          rawModel.data as FirecandRawModel
        );
        break;
      case DaoWorldsActionName.Firecust:
        data = new FirecustRawMapper().toEntity(
          rawModel.data as FirecustRawModel
        );
        break;
      case DaoWorldsActionName.Flagcandprof:
        data = new FlagcandprofRawMapper().toEntity(
          rawModel.data as FlagcandprofRawModel
        );
        break;
      case DaoWorldsActionName.Newperiod:
        data = new NewperiodRawMapper().toEntity(
          rawModel.data as NewperiodRawModel
        );
        break;
      case DaoWorldsActionName.Nominate:
        data = new NominateRawMapper().toEntity(
          rawModel.data as NominateRawModel
        );
        break;
      case DaoWorldsActionName.Nominatecane:
        data = new NominatecaneRawMapper().toEntity(
          rawModel.data as NominatecaneRawModel
        );
        break;
      case DaoWorldsActionName.Paycpu:
        data = new PaycpuRawMapper().toEntity(
          rawModel.data as PaycpuRawModel
        );
        break;
      case DaoWorldsActionName.Regproxy:
        data = new RegproxyRawMapper().toEntity(
          rawModel.data as RegproxyRawModel
        );
        break;
      case DaoWorldsActionName.Rejectcuspay:
        data = new RejectcuspayRawMapper().toEntity(
          rawModel.data as RejectcuspayRawModel
        );
        break;
      case DaoWorldsActionName.Removecand:
        data = new RemovecandRawMapper().toEntity(
          rawModel.data as RemovecandRawModel
        );
        break;
      case DaoWorldsActionName.Removecstvte:
        data = new RemovecstvteRawMapper().toEntity(
          rawModel.data as RemovecstvteRawModel
        );
        break;
      case DaoWorldsActionName.Removecuspay:
        data = new RemovecuspayRawMapper().toEntity(
          rawModel.data as RemovecuspayRawModel
        );
        break;
      case DaoWorldsActionName.Resigncust:
        data = new ResigncustRawMapper().toEntity(
          rawModel.data as ResigncustRawModel
        );
        break;
      case DaoWorldsActionName.Runnewperiod:
        data = new RunnewperiodRawMapper().toEntity(
          rawModel.data as RunnewperiodRawModel
        );
        break;
      case DaoWorldsActionName.Setbudget:
        data = new SetbudgetRawMapper().toEntity(
          rawModel.data as SetbudgetRawModel
        );
        break;
      case DaoWorldsActionName.Setperm:
        data = new SetpermRawMapper().toEntity(
          rawModel.data as SetpermRawModel
        );
        break;
      case DaoWorldsActionName.Stakeobsv:
        data = new StakeobsvRawMapper().toEntity(
          rawModel.data as StakeobsvRawModel
        );
        break;
      case DaoWorldsActionName.Stprofile:
        data = new StprofileRawMapper().toEntity(
          rawModel.data as StprofileRawModel
        );
        break;
      case DaoWorldsActionName.Unregproxy:
        data = new UnregproxyRawMapper().toEntity(
          rawModel.data as UnregproxyRawModel
        );
        break;
      case DaoWorldsActionName.Unsetbudget:
        data = new UnsetbudgetRawMapper().toEntity(
          rawModel.data as UnsetbudgetRawModel
        );
        break;
      case DaoWorldsActionName.Updatebio:
        data = new UpdatebioRawMapper().toEntity(
          rawModel.data as UpdatebioRawModel
        );
        break;
      case DaoWorldsActionName.Updateconfige:
        data = new UpdateconfigeRawMapper().toEntity(
          rawModel.data as UpdateconfigeRawModel
        );
        break;
      case DaoWorldsActionName.Updatereqpay:
        data = new UpdatereqpayRawMapper().toEntity(
          rawModel.data as UpdatereqpayRawModel
        );
        break;
      case DaoWorldsActionName.Votecust:
        data = new VotecustRawMapper().toEntity(
          rawModel.data as VotecustRawModel
        );
        break;
      case DaoWorldsActionName.Voteproxy:
        data = new VoteproxyRawMapper().toEntity(
          rawModel.data as VoteproxyRawModel
        );
        break;
      case DaoWorldsActionName.Weightobsv:
        data = new WeightobsvRawMapper().toEntity(
          rawModel.data as WeightobsvRawModel
        );
        break;
      case DaoWorldsActionName.Withdrawcane:
        data = new WithdrawcaneRawMapper().toEntity(
          rawModel.data as WithdrawcaneRawModel
        );
        break;
    }

    const {
      account,
      name,
      block_timestamp,
      block_number,
      global_sequence,
      recv_sequence,
      transaction_id,
    } = rawModel;

    return new ContractAction<DataEntityType, DaoWorldsActionRawModel>(
      '',
      block_timestamp,
      parseToBigInt(block_number),
      account,
      name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      transaction_id,
      data
    );
  }
}
