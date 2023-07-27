/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

