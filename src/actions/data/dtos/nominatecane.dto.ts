/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} NominatecaneMongoModel
 */
export type NominatecaneMongoModel = {
  _id?: MongoDB.ObjectId;
  cand?: string;
  requestedpay?: AssetMongoModel;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} NominatecaneRawModel
 */
export type NominatecaneRawModel = {
  cand?: string;
  requestedpay?: AssetRawModel;
  dac_id?: string;
  [key: string]: unknown;
};

