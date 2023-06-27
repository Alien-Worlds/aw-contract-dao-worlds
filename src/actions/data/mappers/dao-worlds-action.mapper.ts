/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 11:46:35 GMT
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

import { AppointcustMongoMapper } from "./appointcust.mapper";
import { BalanceobsvMongoMapper } from "./balanceobsv.mapper";
import { ClaimbudgetMongoMapper } from "./claimbudget.mapper";
import { ClaimpayMongoMapper } from "./claimpay.mapper";
import { FirecandMongoMapper } from "./firecand.mapper";
import { FirecustMongoMapper } from "./firecust.mapper";
import { FlagcandprofMongoMapper } from "./flagcandprof.mapper";
import { NewperiodMongoMapper } from "./newperiod.mapper";
import { NominateMongoMapper } from "./nominate.mapper";
import { NominatecaneMongoMapper } from "./nominatecane.mapper";
import { PaycpuMongoMapper } from "./paycpu.mapper";
import { RegproxyMongoMapper } from "./regproxy.mapper";
import { RejectcuspayMongoMapper } from "./rejectcuspay.mapper";
import { RemovecandMongoMapper } from "./removecand.mapper";
import { RemovecstvteMongoMapper } from "./removecstvte.mapper";
import { RemovecuspayMongoMapper } from "./removecuspay.mapper";
import { ResigncustMongoMapper } from "./resigncust.mapper";
import { RunnewperiodMongoMapper } from "./runnewperiod.mapper";
import { SetbudgetMongoMapper } from "./setbudget.mapper";
import { SetpermMongoMapper } from "./setperm.mapper";
import { StakeobsvMongoMapper } from "./stakeobsv.mapper";
import { StprofileMongoMapper } from "./stprofile.mapper";
import { UnregproxyMongoMapper } from "./unregproxy.mapper";
import { UnsetbudgetMongoMapper } from "./unsetbudget.mapper";
import { UpdatebioMongoMapper } from "./updatebio.mapper";
import { UpdateconfigeMongoMapper } from "./updateconfige.mapper";
import { UpdatereqpayMongoMapper } from "./updatereqpay.mapper";
import { VotecustMongoMapper } from "./votecust.mapper";
import { VoteproxyMongoMapper } from "./voteproxy.mapper";
import { WeightobsvMongoMapper } from "./weightobsv.mapper";
import { WithdrawcaneMongoMapper } from "./withdrawcane.mapper";
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/dao-worlds-action';
import { 
  DaoWorldsActionMongoModel,
  AppointcustMongoModel,
  BalanceobsvMongoModel,
  ClaimbudgetMongoModel,
  ClaimpayMongoModel,
  FirecandMongoModel,
  FirecustMongoModel,
  FlagcandprofMongoModel,
  NewperiodMongoModel,
  NominateMongoModel,
  NominatecaneMongoModel,
  PaycpuMongoModel,
  RegproxyMongoModel,
  RejectcuspayMongoModel,
  RemovecandMongoModel,
  RemovecstvteMongoModel,
  RemovecuspayMongoModel,
  ResigncustMongoModel,
  RunnewperiodMongoModel,
  SetbudgetMongoModel,
  SetpermMongoModel,
  StakeobsvMongoModel,
  StprofileMongoModel,
  UnregproxyMongoModel,
  UnsetbudgetMongoModel,
  UpdatebioMongoModel,
  UpdateconfigeMongoModel,
  UpdatereqpayMongoModel,
  VotecustMongoModel,
  VoteproxyMongoModel,
  WeightobsvMongoModel,
  WithdrawcaneMongoModel,
} from '../dtos';
import { DaoWorldsActionName } from '../../domain/enums';

export class DaoWorldsActionMongoMapper
  extends MapperImpl<ContractAction<DataEntityType, DaoWorldsActionMongoModel>, DaoWorldsActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType, DaoWorldsActionMongoModel>
  ): DaoWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case DaoWorldsActionName.Appointcust:
        entityData = new AppointcustMongoMapper().fromEntity(entity.data as Appointcust);
        break;
      case DaoWorldsActionName.Balanceobsv:
        entityData = new BalanceobsvMongoMapper().fromEntity(entity.data as Balanceobsv);
        break;
      case DaoWorldsActionName.Claimbudget:
        entityData = new ClaimbudgetMongoMapper().fromEntity(entity.data as Claimbudget);
        break;
      case DaoWorldsActionName.Claimpay:
        entityData = new ClaimpayMongoMapper().fromEntity(entity.data as Claimpay);
        break;
      case DaoWorldsActionName.Firecand:
        entityData = new FirecandMongoMapper().fromEntity(entity.data as Firecand);
        break;
      case DaoWorldsActionName.Firecust:
        entityData = new FirecustMongoMapper().fromEntity(entity.data as Firecust);
        break;
      case DaoWorldsActionName.Flagcandprof:
        entityData = new FlagcandprofMongoMapper().fromEntity(entity.data as Flagcandprof);
        break;
      case DaoWorldsActionName.Newperiod:
        entityData = new NewperiodMongoMapper().fromEntity(entity.data as Newperiod);
        break;
      case DaoWorldsActionName.Nominate:
        entityData = new NominateMongoMapper().fromEntity(entity.data as Nominate);
        break;
      case DaoWorldsActionName.Nominatecane:
        entityData = new NominatecaneMongoMapper().fromEntity(entity.data as Nominatecane);
        break;
      case DaoWorldsActionName.Paycpu:
        entityData = new PaycpuMongoMapper().fromEntity(entity.data as Paycpu);
        break;
      case DaoWorldsActionName.Regproxy:
        entityData = new RegproxyMongoMapper().fromEntity(entity.data as Regproxy);
        break;
      case DaoWorldsActionName.Rejectcuspay:
        entityData = new RejectcuspayMongoMapper().fromEntity(entity.data as Rejectcuspay);
        break;
      case DaoWorldsActionName.Removecand:
        entityData = new RemovecandMongoMapper().fromEntity(entity.data as Removecand);
        break;
      case DaoWorldsActionName.Removecstvte:
        entityData = new RemovecstvteMongoMapper().fromEntity(entity.data as Removecstvte);
        break;
      case DaoWorldsActionName.Removecuspay:
        entityData = new RemovecuspayMongoMapper().fromEntity(entity.data as Removecuspay);
        break;
      case DaoWorldsActionName.Resigncust:
        entityData = new ResigncustMongoMapper().fromEntity(entity.data as Resigncust);
        break;
      case DaoWorldsActionName.Runnewperiod:
        entityData = new RunnewperiodMongoMapper().fromEntity(entity.data as Runnewperiod);
        break;
      case DaoWorldsActionName.Setbudget:
        entityData = new SetbudgetMongoMapper().fromEntity(entity.data as Setbudget);
        break;
      case DaoWorldsActionName.Setperm:
        entityData = new SetpermMongoMapper().fromEntity(entity.data as Setperm);
        break;
      case DaoWorldsActionName.Stakeobsv:
        entityData = new StakeobsvMongoMapper().fromEntity(entity.data as Stakeobsv);
        break;
      case DaoWorldsActionName.Stprofile:
        entityData = new StprofileMongoMapper().fromEntity(entity.data as Stprofile);
        break;
      case DaoWorldsActionName.Unregproxy:
        entityData = new UnregproxyMongoMapper().fromEntity(entity.data as Unregproxy);
        break;
      case DaoWorldsActionName.Unsetbudget:
        entityData = new UnsetbudgetMongoMapper().fromEntity(entity.data as Unsetbudget);
        break;
      case DaoWorldsActionName.Updatebio:
        entityData = new UpdatebioMongoMapper().fromEntity(entity.data as Updatebio);
        break;
      case DaoWorldsActionName.Updateconfige:
        entityData = new UpdateconfigeMongoMapper().fromEntity(entity.data as Updateconfige);
        break;
      case DaoWorldsActionName.Updatereqpay:
        entityData = new UpdatereqpayMongoMapper().fromEntity(entity.data as Updatereqpay);
        break;
      case DaoWorldsActionName.Votecust:
        entityData = new VotecustMongoMapper().fromEntity(entity.data as Votecust);
        break;
      case DaoWorldsActionName.Voteproxy:
        entityData = new VoteproxyMongoMapper().fromEntity(entity.data as Voteproxy);
        break;
      case DaoWorldsActionName.Weightobsv:
        entityData = new WeightobsvMongoMapper().fromEntity(entity.data as Weightobsv);
        break;
      case DaoWorldsActionName.Withdrawcane:
        entityData = new WithdrawcaneMongoMapper().fromEntity(entity.data as Withdrawcane);
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action_hash: entity.actionHash,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };
  }

  public toEntity(
    mongoModel: DaoWorldsActionMongoModel
  ): ContractAction<DataEntityType, DaoWorldsActionMongoModel> {
    let data;
    switch (mongoModel.action.name) {
      case DaoWorldsActionName.Appointcust:
        data = new AppointcustMongoMapper().toEntity(mongoModel.action.data as AppointcustMongoModel);
        break;
      case DaoWorldsActionName.Balanceobsv:
        data = new BalanceobsvMongoMapper().toEntity(mongoModel.action.data as BalanceobsvMongoModel);
        break;
      case DaoWorldsActionName.Claimbudget:
        data = new ClaimbudgetMongoMapper().toEntity(mongoModel.action.data as ClaimbudgetMongoModel);
        break;
      case DaoWorldsActionName.Claimpay:
        data = new ClaimpayMongoMapper().toEntity(mongoModel.action.data as ClaimpayMongoModel);
        break;
      case DaoWorldsActionName.Firecand:
        data = new FirecandMongoMapper().toEntity(mongoModel.action.data as FirecandMongoModel);
        break;
      case DaoWorldsActionName.Firecust:
        data = new FirecustMongoMapper().toEntity(mongoModel.action.data as FirecustMongoModel);
        break;
      case DaoWorldsActionName.Flagcandprof:
        data = new FlagcandprofMongoMapper().toEntity(mongoModel.action.data as FlagcandprofMongoModel);
        break;
      case DaoWorldsActionName.Newperiod:
        data = new NewperiodMongoMapper().toEntity(mongoModel.action.data as NewperiodMongoModel);
        break;
      case DaoWorldsActionName.Nominate:
        data = new NominateMongoMapper().toEntity(mongoModel.action.data as NominateMongoModel);
        break;
      case DaoWorldsActionName.Nominatecane:
        data = new NominatecaneMongoMapper().toEntity(mongoModel.action.data as NominatecaneMongoModel);
        break;
      case DaoWorldsActionName.Paycpu:
        data = new PaycpuMongoMapper().toEntity(mongoModel.action.data as PaycpuMongoModel);
        break;
      case DaoWorldsActionName.Regproxy:
        data = new RegproxyMongoMapper().toEntity(mongoModel.action.data as RegproxyMongoModel);
        break;
      case DaoWorldsActionName.Rejectcuspay:
        data = new RejectcuspayMongoMapper().toEntity(mongoModel.action.data as RejectcuspayMongoModel);
        break;
      case DaoWorldsActionName.Removecand:
        data = new RemovecandMongoMapper().toEntity(mongoModel.action.data as RemovecandMongoModel);
        break;
      case DaoWorldsActionName.Removecstvte:
        data = new RemovecstvteMongoMapper().toEntity(mongoModel.action.data as RemovecstvteMongoModel);
        break;
      case DaoWorldsActionName.Removecuspay:
        data = new RemovecuspayMongoMapper().toEntity(mongoModel.action.data as RemovecuspayMongoModel);
        break;
      case DaoWorldsActionName.Resigncust:
        data = new ResigncustMongoMapper().toEntity(mongoModel.action.data as ResigncustMongoModel);
        break;
      case DaoWorldsActionName.Runnewperiod:
        data = new RunnewperiodMongoMapper().toEntity(mongoModel.action.data as RunnewperiodMongoModel);
        break;
      case DaoWorldsActionName.Setbudget:
        data = new SetbudgetMongoMapper().toEntity(mongoModel.action.data as SetbudgetMongoModel);
        break;
      case DaoWorldsActionName.Setperm:
        data = new SetpermMongoMapper().toEntity(mongoModel.action.data as SetpermMongoModel);
        break;
      case DaoWorldsActionName.Stakeobsv:
        data = new StakeobsvMongoMapper().toEntity(mongoModel.action.data as StakeobsvMongoModel);
        break;
      case DaoWorldsActionName.Stprofile:
        data = new StprofileMongoMapper().toEntity(mongoModel.action.data as StprofileMongoModel);
        break;
      case DaoWorldsActionName.Unregproxy:
        data = new UnregproxyMongoMapper().toEntity(mongoModel.action.data as UnregproxyMongoModel);
        break;
      case DaoWorldsActionName.Unsetbudget:
        data = new UnsetbudgetMongoMapper().toEntity(mongoModel.action.data as UnsetbudgetMongoModel);
        break;
      case DaoWorldsActionName.Updatebio:
        data = new UpdatebioMongoMapper().toEntity(mongoModel.action.data as UpdatebioMongoModel);
        break;
      case DaoWorldsActionName.Updateconfige:
        data = new UpdateconfigeMongoMapper().toEntity(mongoModel.action.data as UpdateconfigeMongoModel);
        break;
      case DaoWorldsActionName.Updatereqpay:
        data = new UpdatereqpayMongoMapper().toEntity(mongoModel.action.data as UpdatereqpayMongoModel);
        break;
      case DaoWorldsActionName.Votecust:
        data = new VotecustMongoMapper().toEntity(mongoModel.action.data as VotecustMongoModel);
        break;
      case DaoWorldsActionName.Voteproxy:
        data = new VoteproxyMongoMapper().toEntity(mongoModel.action.data as VoteproxyMongoModel);
        break;
      case DaoWorldsActionName.Weightobsv:
        data = new WeightobsvMongoMapper().toEntity(mongoModel.action.data as WeightobsvMongoModel);
        break;
      case DaoWorldsActionName.Withdrawcane:
        data = new WithdrawcaneMongoMapper().toEntity(mongoModel.action.data as WithdrawcaneMongoModel);
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action_hash,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType, DaoWorldsActionMongoModel>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
      action_hash
    );
  }
}
