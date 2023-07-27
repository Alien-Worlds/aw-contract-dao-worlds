/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

