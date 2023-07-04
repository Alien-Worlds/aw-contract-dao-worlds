/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:55:59 GMT
 */

import { MongoSource, MongoCollectionSource } from '@alien-worlds/storage-mongodb';
import { DaoWorldsActionMongoModel } from '../dtos';

/**
 * @class
 */
export class DaoWorldsActionMongoSource extends MongoCollectionSource<DaoWorldsActionMongoModel> {
  /**
   * @constructor
   * @param {MongoSource} mongoSource
   */
  constructor(mongoSource: MongoSource) {
    super(mongoSource, 'dao.worlds_actions', {
      indexes: [
        { key: { block_num: 1 }, background: true },
        { key: { 'action.name': 1 }, background: true },
        { key: { 'action.account': 1, 'action.name': 1 }, background: true },
        {
          key: {
            action_hash: 1,
            block_num: 1,
            block_timestamp: 1,
            global_sequence: 1,
            recv_sequence: 1,
            trx_id: 1,
          },
          unique: true,
          background: true,
        },
      ],
    });
  }
}
