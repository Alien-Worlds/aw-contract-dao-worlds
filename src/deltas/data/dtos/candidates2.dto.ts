/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:49:22 GMT
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
  rank?: number;
  gap_filler?: number;
  total_vote_power?: number;
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
  rank?: number;
  gap_filler?: number;
  total_vote_power?: number;
  is_active?: number;
  number_voters?: number;
  avg_vote_time_stamp?: Date;
  [key: string]: unknown;
};

