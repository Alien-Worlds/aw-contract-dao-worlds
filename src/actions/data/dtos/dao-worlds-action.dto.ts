/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:00 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { AppointcustMongoModel } from './appointcust.dto';
import { BalanceobsvMongoModel } from './balanceobsv.dto';
import { ClaimbudgetMongoModel } from './claimbudget.dto';
import { ClaimpayMongoModel } from './claimpay.dto';
import { FirecandMongoModel } from './firecand.dto';
import { FirecustMongoModel } from './firecust.dto';
import { FlagcandprofMongoModel } from './flagcandprof.dto';
import { NewperiodMongoModel } from './newperiod.dto';
import { NominateMongoModel } from './nominate.dto';
import { NominatecaneMongoModel } from './nominatecane.dto';
import { PaycpuMongoModel } from './paycpu.dto';
import { RegproxyMongoModel } from './regproxy.dto';
import { RejectcuspayMongoModel } from './rejectcuspay.dto';
import { RemovecandMongoModel } from './removecand.dto';
import { RemovecstvteMongoModel } from './removecstvte.dto';
import { RemovecuspayMongoModel } from './removecuspay.dto';
import { ResigncustMongoModel } from './resigncust.dto';
import { RunnewperiodMongoModel } from './runnewperiod.dto';
import { SetbudgetMongoModel } from './setbudget.dto';
import { SetpermMongoModel } from './setperm.dto';
import { StakeobsvMongoModel } from './stakeobsv.dto';
import { StprofileMongoModel } from './stprofile.dto';
import { UnregproxyMongoModel } from './unregproxy.dto';
import { UnsetbudgetMongoModel } from './unsetbudget.dto';
import { UpdatebioMongoModel } from './updatebio.dto';
import { UpdateconfigeMongoModel } from './updateconfige.dto';
import { UpdatereqpayMongoModel } from './updatereqpay.dto';
import { VotecustMongoModel } from './votecust.dto';
import { VoteproxyMongoModel } from './voteproxy.dto';
import { WeightobsvMongoModel } from './weightobsv.dto';
import { WithdrawcaneMongoModel } from './withdrawcane.dto';

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

