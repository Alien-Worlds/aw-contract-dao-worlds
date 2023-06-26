/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:50 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UpdatebioMongoModel
 */
export type UpdatebioMongoModel = {
  _id?: MongoDB.ObjectId;
  cand?: string;
  bio?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UpdatebioRawModel
 */
export type UpdatebioRawModel = {
  cand?: string;
  bio?: string;
  dac_id?: string;
  [key: string]: unknown;
};
