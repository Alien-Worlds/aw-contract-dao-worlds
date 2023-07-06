/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:54:48 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RejectcuspayMongoModel
 */
export type RejectcuspayMongoModel = {
  _id?: MongoDB.ObjectId;
  payid?: MongoDB.Long;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RejectcuspayRawModel
 */
export type RejectcuspayRawModel = {
  payid?: bigint;
  dac_id?: string;
  [key: string]: unknown;
};

