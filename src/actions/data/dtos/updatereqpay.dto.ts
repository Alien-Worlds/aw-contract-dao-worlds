/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:50 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UpdatereqpayMongoModel
 */
export type UpdatereqpayMongoModel = {
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
 * @typedef {Object} UpdatereqpayRawModel
 */
export type UpdatereqpayRawModel = {
  cand?: string;
  requestedpay?: AssetRawModel;
  dac_id?: string;
  [key: string]: unknown;
};
