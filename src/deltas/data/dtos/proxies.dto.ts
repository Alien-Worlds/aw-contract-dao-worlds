/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
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
  total_weight?: number;
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
  total_weight?: number;
  [key: string]: unknown;
};

