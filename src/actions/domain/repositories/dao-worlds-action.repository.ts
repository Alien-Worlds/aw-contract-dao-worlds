/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import {
  ContractAction,
  ContractActionModel,
  Repository,
  injectable,
} from '@alien-worlds/aw-core';

import { DataDocumentType } from '../../data/dtos/dao-worlds-action.dto';
import { DataEntityType } from '../entities/dao-worlds-action';

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
