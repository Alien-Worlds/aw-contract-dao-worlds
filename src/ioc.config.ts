/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/aw-core';
import { 
  MongoConfig,
  MongoQueryBuilders, 
  MongoSource,
} from '@alien-worlds/aw-storage-mongodb';

import { DaoWorldsActionMongoMapper } from './actions/data/mappers';
import { DaoWorldsActionMongoSource } from './actions/data/data-sources';
import { DaoWorldsActionRepository } from './actions/domain/repositories';
import { DaoWorldsContractService } from "./services/dao-worlds-contract.service";
import { DaoWorldsContractServiceImpl } from "./services/dao-worlds-contract.service-impl";
import { DaoWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { DaoWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { DaoWorldsDeltaRepository } from './deltas/domain/repositories';
import { AntelopeRpcSourceImpl } from '@alien-worlds/aw-antelope';

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

  const mapper = new DaoWorldsActionMongoMapper();
  
  const repository = new RepositoryImpl(
    new DaoWorldsActionMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
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

  const mapper = new DaoWorldsDeltaMongoMapper();
  
  const repository = new RepositoryImpl(
    new DaoWorldsDeltaMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<DaoWorldsDeltaRepository>(DaoWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupDaoWorldsContractService = (
  antelopeRpcSourceImpl: AntelopeRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): DaoWorldsContractService => {
  const service = new DaoWorldsContractServiceImpl(
    antelopeRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<DaoWorldsContractService>(DaoWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
