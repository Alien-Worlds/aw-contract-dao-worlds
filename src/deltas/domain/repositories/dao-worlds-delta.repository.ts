/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import {
  ContractDelta,
  ContractDeltaModel,
  Repository,
  injectable,
} from '@alien-worlds/aw-core';

import { DataDocumentType } from '../../data/dtos/dao-worlds-delta.dto';
import { DataEntityType } from '../entities/dao-worlds-delta';

/**
 * @description This abstract class represents a repository for `dao.worlds` contract deltas.
 */
@injectable()
export abstract class DaoWorldsDeltaRepository extends Repository<
  ContractDelta<DataEntityType, DataDocumentType>,
  ContractDeltaModel
> {
  public static Token = 'DAO_WORLDS_DELTA_REPOSITORY';
}
