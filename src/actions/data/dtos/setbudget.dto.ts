/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:54:48 GMT
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

