/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:25:55 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} AppointcustMongoModel
 */
export type AppointcustMongoModel = {
  _id?: MongoDB.ObjectId;
  cust?: string[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} AppointcustRawModel
 */
export type AppointcustRawModel = {
  cust?: string[];
  dac_id?: string;
  [key: string]: unknown;
};

