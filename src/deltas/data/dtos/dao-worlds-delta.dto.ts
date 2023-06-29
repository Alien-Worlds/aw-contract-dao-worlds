/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:19 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { CandidatesMongoModel } from './candidates.dto';
import { Candidates2MongoModel } from './candidates2.dto';
import { CandpermsMongoModel } from './candperms.dto';
import { Custodians1MongoModel } from './custodians1.dto';
import { DacglobalsMongoModel } from './dacglobals.dto';
import { PendingpayMongoModel } from './pendingpay.dto';
import { ProxiesMongoModel } from './proxies.dto';
import { VotesMongoModel } from './votes.dto';

export type DataDocumentType =
  | CandidatesMongoModel
  | Candidates2MongoModel
  | CandpermsMongoModel
  | Custodians1MongoModel
  | DacglobalsMongoModel
  | PendingpayMongoModel
  | ProxiesMongoModel
  | VotesMongoModel;


export type DaoWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_number?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long,
  present?: boolean;
  block_timestamp?: Date;
};
