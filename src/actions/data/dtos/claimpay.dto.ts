/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 11:46:35 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ClaimpayMongoModel
 */
export type ClaimpayMongoModel = {
  _id?: MongoDB.ObjectId;
  payid?: MongoDB.Long;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ClaimpayRawModel
 */
export type ClaimpayRawModel = {
  payid?: bigint;
  dac_id?: string;
  [key: string]: unknown;
};

