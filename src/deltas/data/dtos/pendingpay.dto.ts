/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:51 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedAssetMongoModel, ExtendedAssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} PendingpayMongoModel
 */
export type PendingpayMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: MongoDB.Long;
  receiver?: string;
  quantity?: ExtendedAssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} PendingpayRawModel
 */
export type PendingpayRawModel = {
  key?: bigint;
  receiver?: string;
  quantity?: ExtendedAssetRawModel;
  [key: string]: unknown;
};

