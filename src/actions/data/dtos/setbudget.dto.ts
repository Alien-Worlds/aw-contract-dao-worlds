/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} SetbudgetMongoModel
 */
export type SetbudgetMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  percentage?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} SetbudgetRawModel
 */
export type SetbudgetRawModel = {
  dac_id?: string;
  percentage?: number;
  [key: string]: unknown;
};

