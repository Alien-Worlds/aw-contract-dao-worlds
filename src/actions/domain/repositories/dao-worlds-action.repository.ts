/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:51 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/dao-worlds-action.dto';
import { DataEntityType } from '../../domain/entities/dao-worlds-action';

/**
 * @description This abstract class represents a repository for `dao.worlds` contract actions.
 */
@injectable()
export abstract class DaoWorldsActionRepository extends Repository<
  ContractAction<DataEntityType, DataDocumentType>,
  ContractActionModel
> {
  public static Token = 'DAO_WORLDS_ACTION_REPOSITORY';
}
