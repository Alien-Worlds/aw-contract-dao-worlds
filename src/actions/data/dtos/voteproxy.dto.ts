/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:25:55 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} VoteproxyMongoModel
 */
export type VoteproxyMongoModel = {
  _id?: MongoDB.ObjectId;
  voter?: string;
  proxy?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} VoteproxyRawModel
 */
export type VoteproxyRawModel = {
  voter?: string;
  proxy?: string;
  dac_id?: string;
  [key: string]: unknown;
};

