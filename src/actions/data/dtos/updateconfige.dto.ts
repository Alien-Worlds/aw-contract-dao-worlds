/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedAssetMongoModel, ExtendedAssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UpdateconfigeMongoModel
 */
export type UpdateconfigeMongoModel = {
  _id?: MongoDB.ObjectId;
  new_config?: ContrConfigMongoModel;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} ContrConfigMongoModel
 */
export type ContrConfigMongoModel = {
  _id?: MongoDB.ObjectId;
  lockupasset?: ExtendedAssetMongoModel;
  maxvotes?: number;
  numelected?: number;
  periodlength?: number;
  should_pay_via_service_provider?: boolean;
  initial_vote_quorum_percent?: number;
  token_supply_theshold?: MongoDB.Long;
  vote_quorum_percent?: number;
  auth_threshold_high?: number;
  auth_threshold_mid?: number;
  auth_threshold_low?: number;
  lockup_release_time_delay?: number;
  requested_pay_max?: ExtendedAssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UpdateconfigeRawModel
 */
export type UpdateconfigeRawModel = {
  new_config?: ContrConfigRawModel;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} ContrConfigRawModel
 */
export type ContrConfigRawModel = {
  lockupasset?: ExtendedAssetRawModel;
  maxvotes?: number;
  numelected?: number;
  periodlength?: number;
  should_pay_via_service_provider?: boolean;
  initial_vote_quorum_percent?: number;
  token_supply_theshold?: bigint;
  vote_quorum_percent?: number;
  auth_threshold_high?: number;
  auth_threshold_mid?: number;
  auth_threshold_low?: number;
  lockup_release_time_delay?: number;
  requested_pay_max?: ExtendedAssetRawModel;
  [key: string]: unknown;
};

