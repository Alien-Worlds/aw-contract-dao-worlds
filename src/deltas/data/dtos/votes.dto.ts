/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

