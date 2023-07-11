/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 11 Jul 2023 10:01:26 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} BalanceobsvMongoModel
 */
export type BalanceobsvMongoModel = {
  _id?: MongoDB.ObjectId;
  account_balance_deltas?: AccountBalanceDeltaMongoModel[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AccountBalanceDeltaMongoModel
 */
export type AccountBalanceDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  balance_delta?: AssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} BalanceobsvRawModel
 */
export type BalanceobsvRawModel = {
  account_balance_deltas?: AccountBalanceDeltaRawModel[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AccountBalanceDeltaRawModel
 */
export type AccountBalanceDeltaRawModel = {
  account?: string;
  balance_delta?: AssetRawModel;
  [key: string]: unknown;
};

