/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:49:22 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} FlagcandprofMongoModel
 */
export type FlagcandprofMongoModel = {
  _id?: MongoDB.ObjectId;
  cand?: string;
  reason?: string;
  reporter?: string;
  block?: boolean;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} FlagcandprofRawModel
 */
export type FlagcandprofRawModel = {
  cand?: string;
  reason?: string;
  reporter?: string;
  block?: boolean;
  dac_id?: string;
  [key: string]: unknown;
};

