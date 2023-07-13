/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} WithdrawcaneMongoModel
 */
export type WithdrawcaneMongoModel = {
  _id?: MongoDB.ObjectId;
  cand?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} WithdrawcaneRawModel
 */
export type WithdrawcaneRawModel = {
  cand?: string;
  dac_id?: string;
  [key: string]: unknown;
};

