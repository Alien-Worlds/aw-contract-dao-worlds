/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:54:48 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UnregproxyMongoModel
 */
export type UnregproxyMongoModel = {
  _id?: MongoDB.ObjectId;
  proxy?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UnregproxyRawModel
 */
export type UnregproxyRawModel = {
  proxy?: string;
  dac_id?: string;
  [key: string]: unknown;
};

