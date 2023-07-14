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
 * @typedef {Object} StakeobsvMongoModel
 */
export type StakeobsvMongoModel = {
  _id?: MongoDB.ObjectId;
  account_stake_deltas?: AccountStakeDeltaMongoModel[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AccountStakeDeltaMongoModel
 */
export type AccountStakeDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  stake_delta?: AssetMongoModel;
  unstake_delay?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} StakeobsvRawModel
 */
export type StakeobsvRawModel = {
  account_stake_deltas?: AccountStakeDeltaRawModel[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AccountStakeDeltaRawModel
 */
export type AccountStakeDeltaRawModel = {
  account?: string;
  stake_delta?: AssetRawModel;
  unstake_delay?: number;
  [key: string]: unknown;
};

