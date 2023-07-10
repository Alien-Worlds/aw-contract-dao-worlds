/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 07:42:05 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RunnewperiodMongoModel
 */
export type RunnewperiodMongoModel = {
  _id?: MongoDB.ObjectId;
  message?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RunnewperiodRawModel
 */
export type RunnewperiodRawModel = {
  message?: string;
  dac_id?: string;
  [key: string]: unknown;
};

