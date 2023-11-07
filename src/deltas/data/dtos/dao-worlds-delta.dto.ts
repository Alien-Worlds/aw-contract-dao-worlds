/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { CandidatesMongoModel, CandidatesRawModel } from './candidates.dto';
import { Candidates2MongoModel, Candidates2RawModel } from './candidates2.dto';
import { CandpermsMongoModel, CandpermsRawModel } from './candperms.dto';
import { Custodians1MongoModel, Custodians1RawModel } from './custodians1.dto';
import { DacglobalsMongoModel, DacglobalsRawModel } from './dacglobals.dto';
import { PendingpayMongoModel, PendingpayRawModel } from './pendingpay.dto';
import { ProxiesMongoModel, ProxiesRawModel } from './proxies.dto';
import { VotesMongoModel, VotesRawModel } from './votes.dto';

export type DataDocumentType =
  | CandidatesMongoModel
  | Candidates2MongoModel
  | CandpermsMongoModel
  | Custodians1MongoModel
  | DacglobalsMongoModel
  | PendingpayMongoModel
  | ProxiesMongoModel
  | VotesMongoModel;

export type DataRawType =
  | CandidatesRawModel
  | Candidates2RawModel
  | CandpermsRawModel
  | Custodians1RawModel
  | DacglobalsRawModel
  | PendingpayRawModel
  | ProxiesRawModel
  | VotesRawModel;

export type DaoWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_num?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long;
  present?: boolean;
  block_timestamp?: Date;
};

export type DaoWorldsDeltaRawModel = {
  block_timestamp: Date;
  block_num: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
