/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:51 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/api-core';
import { MongoConfig, MongoSource } from '@alien-worlds/storage-mongodb';

import { DaoWorldsActionMongoMapper } from './actions/data/mappers';
import { DaoWorldsActionMongoSource } from './actions/data/data-sources';
import { DaoWorldsActionRepository } from './actions/domain/repositories';
import { DaoWorldsContractService } from "./services/dao-worlds-contract.service";
import { DaoWorldsContractServiceImpl } from "./services/dao-worlds-contract.service-impl";
import { DaoWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { DaoWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { DaoWorldsDeltaRepository } from './deltas/domain/repositories';
import { EosRpcSourceImpl } from '@alien-worlds/eos';

export const setupDaoWorldsActionRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<DaoWorldsActionRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }
  const repository = new RepositoryImpl(
    new DaoWorldsActionMongoSource(mongoSource),
    new DaoWorldsActionMongoMapper(),
    null
  );

  if (container) {
    container
      .bind<DaoWorldsActionRepository>(DaoWorldsActionRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupDaoWorldsDeltaRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<DaoWorldsDeltaRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }
  const repository = new RepositoryImpl(
    new DaoWorldsDeltaMongoSource(mongoSource),
    new DaoWorldsDeltaMongoMapper(),
    null
  );

  if (container) {
    container
      .bind<DaoWorldsDeltaRepository>(DaoWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupDaoWorldsContractService = (
  eosRpcSourceImpl: EosRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): DaoWorldsContractService => {
  const service = new DaoWorldsContractServiceImpl(
    eosRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<DaoWorldsContractService>(DaoWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};