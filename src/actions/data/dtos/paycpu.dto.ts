/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} PaycpuMongoModel
 */
export type PaycpuMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} PaycpuRawModel
 */
export type PaycpuRawModel = {
  dac_id?: string;
  [key: string]: unknown;
};

