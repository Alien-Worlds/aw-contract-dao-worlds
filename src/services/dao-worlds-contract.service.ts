/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:00 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/api-core';

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

export abstract class DaoWorldsContractService extends SmartContractService {
  public static Token = 'DAO_WORLDS_CONTRACT_SERVICE';

  public abstract fetchCandidates(
    options?: GetTableRowsOptions
  ): Promise<Result<CandidatesRawModel[], Error>>;
  public abstract fetchCandidates2(
    options?: GetTableRowsOptions
  ): Promise<Result<Candidates2RawModel[], Error>>;
  public abstract fetchCandperms(
    options?: GetTableRowsOptions
  ): Promise<Result<CandpermsRawModel[], Error>>;
  public abstract fetchCustodians1(
    options?: GetTableRowsOptions
  ): Promise<Result<Custodians1RawModel[], Error>>;
  public abstract fetchDacglobals(
    options?: GetTableRowsOptions
  ): Promise<Result<DacglobalsRawModel[], Error>>;
  public abstract fetchPendingpay(
    options?: GetTableRowsOptions
  ): Promise<Result<PendingpayRawModel[], Error>>;
  public abstract fetchProxies(
    options?: GetTableRowsOptions
  ): Promise<Result<ProxiesRawModel[], Error>>;
  public abstract fetchVotes(
    options?: GetTableRowsOptions
  ): Promise<Result<VotesRawModel[], Error>>;
}
