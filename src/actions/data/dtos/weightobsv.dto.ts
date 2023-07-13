/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} WeightobsvMongoModel
 */
export type WeightobsvMongoModel = {
  _id?: MongoDB.ObjectId;
  account_weight_deltas?: AccountWeightDeltaMongoModel[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AccountWeightDeltaMongoModel
 */
export type AccountWeightDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  weight_delta?: number;
  weight_delta_quorum?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} WeightobsvRawModel
 */
export type WeightobsvRawModel = {
  account_weight_deltas?: AccountWeightDeltaRawModel[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AccountWeightDeltaRawModel
 */
export type AccountWeightDeltaRawModel = {
  account?: string;
  weight_delta?: number;
  weight_delta_quorum?: number;
  [key: string]: unknown;
};

