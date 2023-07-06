/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:54:49 GMT
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

