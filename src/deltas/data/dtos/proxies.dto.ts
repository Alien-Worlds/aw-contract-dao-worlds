/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

