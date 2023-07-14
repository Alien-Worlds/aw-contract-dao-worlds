/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:17 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { AppointcustMongoModel, AppointcustRawModel } from './appointcust.dto';
import { BalanceobsvMongoModel, BalanceobsvRawModel } from './balanceobsv.dto';
import { ClaimbudgetMongoModel, ClaimbudgetRawModel } from './claimbudget.dto';
import { ClaimpayMongoModel, ClaimpayRawModel } from './claimpay.dto';
import { FirecandMongoModel, FirecandRawModel } from './firecand.dto';
import { FirecustMongoModel, FirecustRawModel } from './firecust.dto';
import { FlagcandprofMongoModel, FlagcandprofRawModel } from './flagcandprof.dto';
import { NewperiodMongoModel, NewperiodRawModel } from './newperiod.dto';
import { NominateMongoModel, NominateRawModel } from './nominate.dto';
import { NominatecaneMongoModel, NominatecaneRawModel } from './nominatecane.dto';
import { PaycpuMongoModel, PaycpuRawModel } from './paycpu.dto';
import { RegproxyMongoModel, RegproxyRawModel } from './regproxy.dto';
import { RejectcuspayMongoModel, RejectcuspayRawModel } from './rejectcuspay.dto';
import { RemovecandMongoModel, RemovecandRawModel } from './removecand.dto';
import { RemovecstvteMongoModel, RemovecstvteRawModel } from './removecstvte.dto';
import { RemovecuspayMongoModel, RemovecuspayRawModel } from './removecuspay.dto';
import { ResigncustMongoModel, ResigncustRawModel } from './resigncust.dto';
import { RunnewperiodMongoModel, RunnewperiodRawModel } from './runnewperiod.dto';
import { SetbudgetMongoModel, SetbudgetRawModel } from './setbudget.dto';
import { SetpermMongoModel, SetpermRawModel } from './setperm.dto';
import { StakeobsvMongoModel, StakeobsvRawModel } from './stakeobsv.dto';
import { StprofileMongoModel, StprofileRawModel } from './stprofile.dto';
import { UnregproxyMongoModel, UnregproxyRawModel } from './unregproxy.dto';
import { UnsetbudgetMongoModel, UnsetbudgetRawModel } from './unsetbudget.dto';
import { UpdatebioMongoModel, UpdatebioRawModel } from './updatebio.dto';
import { UpdateconfigeMongoModel, UpdateconfigeRawModel } from './updateconfige.dto';
import { UpdatereqpayMongoModel, UpdatereqpayRawModel } from './updatereqpay.dto';
import { VotecustMongoModel, VotecustRawModel } from './votecust.dto';
import { VoteproxyMongoModel, VoteproxyRawModel } from './voteproxy.dto';
import { WeightobsvMongoModel, WeightobsvRawModel } from './weightobsv.dto';
import { WithdrawcaneMongoModel, WithdrawcaneRawModel } from './withdrawcane.dto';

export type DataDocumentType =
  | AppointcustMongoModel
  | BalanceobsvMongoModel
  | ClaimbudgetMongoModel
  | ClaimpayMongoModel
  | FirecandMongoModel
  | FirecustMongoModel
  | FlagcandprofMongoModel
  | NewperiodMongoModel
  | NominateMongoModel
  | NominatecaneMongoModel
  | PaycpuMongoModel
  | RegproxyMongoModel
  | RejectcuspayMongoModel
  | RemovecandMongoModel
  | RemovecstvteMongoModel
  | RemovecuspayMongoModel
  | ResigncustMongoModel
  | RunnewperiodMongoModel
  | SetbudgetMongoModel
  | SetpermMongoModel
  | StakeobsvMongoModel
  | StprofileMongoModel
  | UnregproxyMongoModel
  | UnsetbudgetMongoModel
  | UpdatebioMongoModel
  | UpdateconfigeMongoModel
  | UpdatereqpayMongoModel
  | VotecustMongoModel
  | VoteproxyMongoModel
  | WeightobsvMongoModel
  | WithdrawcaneMongoModel;

export type DataRawType =
  | AppointcustRawModel
  | BalanceobsvRawModel
  | ClaimbudgetRawModel
  | ClaimpayRawModel
  | FirecandRawModel
  | FirecustRawModel
  | FlagcandprofRawModel
  | NewperiodRawModel
  | NominateRawModel
  | NominatecaneRawModel
  | PaycpuRawModel
  | RegproxyRawModel
  | RejectcuspayRawModel
  | RemovecandRawModel
  | RemovecstvteRawModel
  | RemovecuspayRawModel
  | ResigncustRawModel
  | RunnewperiodRawModel
  | SetbudgetRawModel
  | SetpermRawModel
  | StakeobsvRawModel
  | StprofileRawModel
  | UnregproxyRawModel
  | UnsetbudgetRawModel
  | UpdatebioRawModel
  | UpdateconfigeRawModel
  | UpdatereqpayRawModel
  | VotecustRawModel
  | VoteproxyRawModel
  | WeightobsvRawModel
  | WithdrawcaneRawModel;

export type DaoWorldsActionMongoModel = {
  _id?: MongoDB.ObjectId;
  block_timestamp?: Date;
  block_number?: MongoDB.Long;
  global_sequence?: MongoDB.Long;
  receiver_sequence?: MongoDB.Long;
  trx_id?: string;
  action_hash?: string;
  action?: {
    account: string;
    name: string;
    data: DataDocumentType;
  };
};

export type DaoWorldsActionRawModel = {
  account: string;
  name: string;
  block_timestamp: Date;
  block_number: string;
  global_sequence: string;
  recv_sequence: string;
  transaction_id: string;
  data: DataRawType;
  [key: string]: unknown;
};

