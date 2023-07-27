/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { ExtendedAssetMongoModel, ExtendedAssetRawModel } from '@alien-worlds/aw-antelope';

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

