/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:25:56 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CandpermsMongoModel
 */
export type CandpermsMongoModel = {
  _id?: MongoDB.ObjectId;
  cand?: string;
  permission?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CandpermsRawModel
 */
export type CandpermsRawModel = {
  cand?: string;
  permission?: string;
  [key: string]: unknown;
};

