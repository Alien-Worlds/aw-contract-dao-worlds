/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RegproxyMongoModel
 */
export type RegproxyMongoModel = {
  _id?: MongoDB.ObjectId;
  proxy?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RegproxyRawModel
 */
export type RegproxyRawModel = {
  proxy?: string;
  dac_id?: string;
  [key: string]: unknown;
};

