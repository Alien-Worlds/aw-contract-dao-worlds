/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:00 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RemovecandMongoModel
 */
export type RemovecandMongoModel = {
  _id?: MongoDB.ObjectId;
  cand?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RemovecandRawModel
 */
export type RemovecandRawModel = {
  cand?: string;
  dac_id?: string;
  [key: string]: unknown;
};

