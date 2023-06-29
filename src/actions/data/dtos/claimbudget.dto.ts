/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:06 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ClaimbudgetMongoModel
 */
export type ClaimbudgetMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ClaimbudgetRawModel
 */
export type ClaimbudgetRawModel = {
  dac_id?: string;
  [key: string]: unknown;
};

