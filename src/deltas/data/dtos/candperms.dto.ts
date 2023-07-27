/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

