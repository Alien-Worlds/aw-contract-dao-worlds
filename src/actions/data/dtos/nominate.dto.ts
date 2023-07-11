/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 11 Jul 2023 10:01:26 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} NominateMongoModel
 */
export type NominateMongoModel = {
  _id?: MongoDB.ObjectId;
  cand?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} NominateRawModel
 */
export type NominateRawModel = {
  cand?: string;
  dac_id?: string;
  [key: string]: unknown;
};

