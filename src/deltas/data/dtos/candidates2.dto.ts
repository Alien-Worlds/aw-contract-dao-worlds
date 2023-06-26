/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:51 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} Candidates2MongoModel
 */
export type Candidates2MongoModel = {
  _id?: MongoDB.ObjectId;
  candidate_name?: string;
  requestedpay?: AssetMongoModel;
  rank?: MongoDB.Long;
  gap_filler?: MongoDB.Long;
  total_vote_power?: MongoDB.Long;
  is_active?: number;
  number_voters?: number;
  avg_vote_time_stamp?: Date;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} Candidates2RawModel
 */
export type Candidates2RawModel = {
  candidate_name?: string;
  requestedpay?: AssetRawModel;
  rank?: bigint;
  gap_filler?: bigint;
  total_vote_power?: bigint;
  is_active?: number;
  number_voters?: number;
  avg_vote_time_stamp?: Date;
  [key: string]: unknown;
};
