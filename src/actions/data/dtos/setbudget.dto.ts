/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:50 GMT
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

