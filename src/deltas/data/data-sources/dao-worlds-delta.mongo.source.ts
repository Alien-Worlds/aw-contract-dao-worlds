/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { MongoSource, MongoCollectionSource } from '@alien-worlds/aw-storage-mongodb';
import { DaoWorldsDeltaMongoModel } from '../dtos';

/**
 * @class
 */
export class DaoWorldsDeltaMongoSource extends MongoCollectionSource<DaoWorldsDeltaMongoModel> {
  /**
   * @constructor
   * @param {MongoSource} mongoSource
   */
  constructor(mongoSource: MongoSource) {
    super(mongoSource, 'dao.worlds_deltas', {
      indexes: [
        { key: { block_num: 1 }, background: true },
        { key: { code: 1, table: 1 }, background: true },
        { key: { code: 1, scope: 1, table: 1 }, background: true },
        {
          key: {
            block_num: 1,
            data_hash: 1,
            code: 1,
            scope: 1,
            table: 1,
            primary_key: 1,
            payer: 1,
            present: 1,
          },
          unique: true,
          background: true,
        },
      ],
    });
  }
}
