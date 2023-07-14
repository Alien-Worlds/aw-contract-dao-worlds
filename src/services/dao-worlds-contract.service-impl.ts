/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:18 GMT
 */

import { 
  CandidatesRawModel,
  Candidates2RawModel,
  CandpermsRawModel,
  Custodians1RawModel,
  DacglobalsRawModel,
  PendingpayRawModel,
  ProxiesRawModel,
  VotesRawModel,
} from '../deltas/data/dtos';
import { 
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

import { DaoWorldsContractService } from './dao-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';

/**
 * A service class for interacting with the dao.worlds smart contract.
 * 
 * @class DaoWorldsContractServiceImpl
 * @extends {EosSmartContractServiceImpl}
 * @implements { DaoWorldsContractService}
*/
export class DaoWorldsContractServiceImpl
  extends EosSmartContractServiceImpl
  implements DaoWorldsContractService 
{
  /**
   * Creates an instance of DaoWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {EosRpcSourceImpl} eosRpcSourceImpl - The EOS RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(eosRpcSourceImpl: EosRpcSourceImpl, serviceUrl: string) {
    super(eosRpcSourceImpl, serviceUrl, 'dao.worlds');
  }

  /**
   * A EosSmartContractServiceImpl for the candidates table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchCandidates (
    options?: GetTableRowsOptions
  ): Promise<Result<CandidatesRawModel[], Error>> {
    const table_key = 'candidate_name';
    const tableRowOptions = {
      ...options,
      code: 'dao.worlds',
      table: 'candidates',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<CandidatesRawModel>(tableRowOptions)
      : await this.getAll<CandidatesRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the candidates2 table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchCandidates2 (
    options?: GetTableRowsOptions
  ): Promise<Result<Candidates2RawModel[], Error>> {
    const table_key = 'candidate_name';
    const tableRowOptions = {
      ...options,
      code: 'dao.worlds',
      table: 'candidates2',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<Candidates2RawModel>(tableRowOptions)
      : await this.getAll<Candidates2RawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the candperms table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchCandperms (
    options?: GetTableRowsOptions
  ): Promise<Result<CandpermsRawModel[], Error>> {
    const table_key = 'cand';
    const tableRowOptions = {
      ...options,
      code: 'dao.worlds',
      table: 'candperms',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<CandpermsRawModel>(tableRowOptions)
      : await this.getAll<CandpermsRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the custodians1 table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchCustodians1 (
    options?: GetTableRowsOptions
  ): Promise<Result<Custodians1RawModel[], Error>> {
    const table_key = 'cust_name';
    const tableRowOptions = {
      ...options,
      code: 'dao.worlds',
      table: 'custodians1',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<Custodians1RawModel>(tableRowOptions)
      : await this.getAll<Custodians1RawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the dacglobals table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchDacglobals (
    options?: GetTableRowsOptions
  ): Promise<Result<DacglobalsRawModel[], Error>> {
    const table_key = '';
    const tableRowOptions = {
      ...options,
      code: 'dao.worlds',
      table: 'dacglobals',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<DacglobalsRawModel>(tableRowOptions)
      : await this.getAll<DacglobalsRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the pendingpay table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchPendingpay (
    options?: GetTableRowsOptions
  ): Promise<Result<PendingpayRawModel[], Error>> {
    const table_key = 'key';
    const tableRowOptions = {
      ...options,
      code: 'dao.worlds',
      table: 'pendingpay',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<PendingpayRawModel>(tableRowOptions)
      : await this.getAll<PendingpayRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the proxies table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchProxies (
    options?: GetTableRowsOptions
  ): Promise<Result<ProxiesRawModel[], Error>> {
    const table_key = 'proxy';
    const tableRowOptions = {
      ...options,
      code: 'dao.worlds',
      table: 'proxies',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<ProxiesRawModel>(tableRowOptions)
      : await this.getAll<ProxiesRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the votes table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchVotes (
    options?: GetTableRowsOptions
  ): Promise<Result<VotesRawModel[], Error>> {
    const table_key = 'voter';
    const tableRowOptions = {
      ...options,
      code: 'dao.worlds',
      table: 'votes',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<VotesRawModel>(tableRowOptions)
      : await this.getAll<VotesRawModel>(table_key, tableRowOptions);
  }
}
