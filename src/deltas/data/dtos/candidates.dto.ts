/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:19 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CandidatesMongoModel
 */
export type CandidatesMongoModel = {
  _id?: MongoDB.ObjectId;
  candidate_name?: string;
  requestedpay?: AssetMongoModel;
  rank?: MongoDB.Long;
  gap_filler?: MongoDB.Long;
  total_vote_power?: MongoDB.Long;
  is_active?: number;
  number_voters?: number;
  avg_vote_time_stamp?: Date;
  running_weight_time?: MongoDB.Long;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CandidatesRawModel
 */
export type CandidatesRawModel = {
  candidate_name?: string;
  requestedpay?: AssetRawModel;
  rank?: bigint;
  gap_filler?: bigint;
  total_vote_power?: bigint;
  is_active?: number;
  number_voters?: number;
  avg_vote_time_stamp?: Date;
  running_weight_time?: bigint;
  [key: string]: unknown;
};

