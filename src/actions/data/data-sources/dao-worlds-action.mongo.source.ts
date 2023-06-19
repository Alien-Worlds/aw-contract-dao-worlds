/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:50 GMT
 */

import { MongoSource, MongoCollectionSource } from '@alien-worlds/storage-mongodb';
import { DaoWorldsActionMongoModel } from '../mappers';

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
