/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RemovecstvteMongoModel
 */
export type RemovecstvteMongoModel = {
  _id?: MongoDB.ObjectId;
  voter?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RemovecstvteRawModel
 */
export type RemovecstvteRawModel = {
  voter?: string;
  dac_id?: string;
  [key: string]: unknown;
};

