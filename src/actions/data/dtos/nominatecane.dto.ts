/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:55:59 GMT
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

