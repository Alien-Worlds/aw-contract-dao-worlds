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
  public readonly fetchCandidates = async (
    options?: GetTableRowsOptions
  ): Promise<Result<CandidatesRawModel[], Error>> => {
    return await this.getAll<CandidatesRawModel>('candidate_name', {
      ...options,
      code: 'dao.worlds',
      table: 'candidates',
      table_key: 'candidate_name',
    });
  };

  /**
   * A EosSmartContractServiceImpl for the candidates2 table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public readonly fetchCandidates2 = async (
    options?: GetTableRowsOptions
  ): Promise<Result<Candidates2RawModel[], Error>> => {
    return await this.getAll<Candidates2RawModel>('candidate_name', {
      ...options,
      code: 'dao.worlds',
      table: 'candidates2',
      table_key: 'candidate_name',
    });
  };

  /**
   * A EosSmartContractServiceImpl for the candperms table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public readonly fetchCandperms = async (
    options?: GetTableRowsOptions
  ): Promise<Result<CandpermsRawModel[], Error>> => {
    return await this.getAll<CandpermsRawModel>('candidate_name', {
      ...options,
      code: 'dao.worlds',
      table: 'candperms',
      table_key: 'cand',
    });
  };

  /**
   * A EosSmartContractServiceImpl for the custodians1 table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public readonly fetchCustodians1 = async (
    options?: GetTableRowsOptions
  ): Promise<Result<Custodians1RawModel[], Error>> => {
    return await this.getAll<Custodians1RawModel>('candidate_name', {
      ...options,
      code: 'dao.worlds',
      table: 'custodians1',
      table_key: 'cust_name',
    });
  };

  /**
   * A EosSmartContractServiceImpl for the dacglobals table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public readonly fetchDacglobals = async (
    options?: GetTableRowsOptions
  ): Promise<Result<DacglobalsRawModel[], Error>> => {
    return await this.getAll<DacglobalsRawModel>('candidate_name', {
      ...options,
      code: 'dao.worlds',
      table: 'dacglobals',
      table_key: 'data',
    });
  };

  /**
   * A EosSmartContractServiceImpl for the pendingpay table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public readonly fetchPendingpay = async (
    options?: GetTableRowsOptions
  ): Promise<Result<PendingpayRawModel[], Error>> => {
    return await this.getAll<PendingpayRawModel>('candidate_name', {
      ...options,
      code: 'dao.worlds',
      table: 'pendingpay',
      table_key: 'key',
    });
  };

  /**
   * A EosSmartContractServiceImpl for the proxies table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public readonly fetchProxies = async (
    options?: GetTableRowsOptions
  ): Promise<Result<ProxiesRawModel[], Error>> => {
    return await this.getAll<ProxiesRawModel>('candidate_name', {
      ...options,
      code: 'dao.worlds',
      table: 'proxies',
      table_key: 'proxy',
    });
  };

  /**
   * A EosSmartContractServiceImpl for the votes table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public readonly fetchVotes = async (
    options?: GetTableRowsOptions
  ): Promise<Result<VotesRawModel[], Error>> => {
    return await this.getAll<VotesRawModel>('candidate_name', {
      ...options,
      code: 'dao.worlds',
      table: 'votes',
      table_key: 'voter',
    });
  };

}
