/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:17 GMT
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
  payid?: number;
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
  payid?: number;
  dac_id?: string;
  [key: string]: unknown;
};

