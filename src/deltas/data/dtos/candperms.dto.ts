/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:51 GMT
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

