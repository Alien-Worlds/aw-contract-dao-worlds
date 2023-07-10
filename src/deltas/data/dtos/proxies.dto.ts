/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 07:42:05 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ProxiesMongoModel
 */
export type ProxiesMongoModel = {
  _id?: MongoDB.ObjectId;
  proxy?: string;
  total_weight?: MongoDB.Long;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ProxiesRawModel
 */
export type ProxiesRawModel = {
  proxy?: string;
  total_weight?: bigint;
  [key: string]: unknown;
};

