/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} Custodians1MongoModel
 */
export type Custodians1MongoModel = {
  _id?: MongoDB.ObjectId;
  cust_name?: string;
  requestedpay?: AssetMongoModel;
  total_vote_power?: number;
  rank?: number;
  number_voters?: number;
  avg_vote_time_stamp?: Date;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} Custodians1RawModel
 */
export type Custodians1RawModel = {
  cust_name?: string;
  requestedpay?: AssetRawModel;
  total_vote_power?: number;
  rank?: number;
  number_voters?: number;
  avg_vote_time_stamp?: Date;
  [key: string]: unknown;
};

