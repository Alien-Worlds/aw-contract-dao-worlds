/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

