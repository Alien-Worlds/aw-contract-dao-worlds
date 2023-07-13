/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
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
  payid?: number;
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
  payid?: number;
  dac_id?: string;
  [key: string]: unknown;
};

