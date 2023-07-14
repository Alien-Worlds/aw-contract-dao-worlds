/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:18 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} VotesMongoModel
 */
export type VotesMongoModel = {
  _id?: MongoDB.ObjectId;
  voter?: string;
  proxy?: string;
  candidates?: string[];
  vote_time_stamp?: Date;
  vote_count?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} VotesRawModel
 */
export type VotesRawModel = {
  voter?: string;
  proxy?: string;
  candidates?: string[];
  vote_time_stamp?: Date;
  vote_count?: number;
  [key: string]: unknown;
};

