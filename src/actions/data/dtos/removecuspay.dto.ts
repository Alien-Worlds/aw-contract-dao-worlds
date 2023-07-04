/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:00 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RemovecuspayMongoModel
 */
export type RemovecuspayMongoModel = {
  _id?: MongoDB.ObjectId;
  payid?: MongoDB.Long;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RemovecuspayRawModel
 */
export type RemovecuspayRawModel = {
  payid?: bigint;
  dac_id?: string;
  [key: string]: unknown;
};

