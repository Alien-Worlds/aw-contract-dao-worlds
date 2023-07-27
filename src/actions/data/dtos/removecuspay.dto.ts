/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

