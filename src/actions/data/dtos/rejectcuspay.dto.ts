/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:49:22 GMT
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
  payid?: number;
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
  payid?: number;
  dac_id?: string;
  [key: string]: unknown;
};

