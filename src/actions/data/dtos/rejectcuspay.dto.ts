/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:55:59 GMT
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

