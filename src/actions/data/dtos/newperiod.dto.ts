/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} NewperiodMongoModel
 */
export type NewperiodMongoModel = {
  _id?: MongoDB.ObjectId;
  message?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} NewperiodRawModel
 */
export type NewperiodRawModel = {
  message?: string;
  dac_id?: string;
  [key: string]: unknown;
};

