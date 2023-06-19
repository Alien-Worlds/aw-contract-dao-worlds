/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:50 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} StprofileMongoModel
 */
export type StprofileMongoModel = {
  _id?: MongoDB.ObjectId;
  cand?: string;
  profile?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} StprofileRawModel
 */
export type StprofileRawModel = {
  cand?: string;
  profile?: string;
  dac_id?: string;
  [key: string]: unknown;
};

