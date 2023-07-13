/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
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
  key?: number;
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
  key?: number;
  receiver?: string;
  quantity?: ExtendedAssetRawModel;
  [key: string]: unknown;
};

