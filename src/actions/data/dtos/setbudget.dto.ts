/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

