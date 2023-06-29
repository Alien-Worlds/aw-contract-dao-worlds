/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:19 GMT
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

