/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import { 
  ContractDelta, 
  ContractDeltaModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/dao-worlds-delta.dto';
import { DataEntityType } from '../../domain/entities/dao-worlds-delta';

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
