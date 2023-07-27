/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/aw-antelope';

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
  rank?: number;
  gap_filler?: number;
  total_vote_power?: number;
  is_active?: number;
  number_voters?: number;
  avg_vote_time_stamp?: Date;
  running_weight_time?: number;
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
  rank?: number;
  gap_filler?: number;
  total_vote_power?: number;
  is_active?: number;
  number_voters?: number;
  avg_vote_time_stamp?: Date;
  running_weight_time?: number;
  [key: string]: unknown;
};

