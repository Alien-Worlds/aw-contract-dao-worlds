/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:54:49 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Candidates` object.
 *
 * @class
 */
export class Candidates implements Entity {
  /**
   * Constructs a new instance of the `Candidates` class.
   *
   * @public
   * @constructor
   * @param string candidateName
   * @param Asset requestedpay
   * @param bigint rank
   * @param bigint gapFiller
   * @param bigint totalVotePower
   * @param number isActive
   * @param number numberVoters
   * @param Date avgVoteTimeStamp
   * @param bigint runningWeightTime
   * @param string [id]
   * @returns `Candidates` - An instance of the `Candidates` class.
   */
  public constructor(
    public candidateName: string,
    public requestedpay: Asset,
    public rank: bigint,
    public gapFiller: bigint,
    public totalVotePower: bigint,
    public isActive: number,
    public numberVoters: number,
    public avgVoteTimeStamp: Date,
    public runningWeightTime: bigint,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Candidates` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      candidateName: this.candidateName,
      requestedpay: this.requestedpay,
      rank: this.rank,
      gapFiller: this.gapFiller,
      totalVotePower: this.totalVotePower,
      isActive: this.isActive,
      numberVoters: this.numberVoters,
      avgVoteTimeStamp: this.avgVoteTimeStamp,
      runningWeightTime: this.runningWeightTime,
    };
  }

  /**
   * Creates an instance of the `Candidates` class.
   *
   * @static
   * @public
   * @returns `Candidates` An instance of the `Candidates` class.
   */
  public static create(
    candidateName: string,
    requestedpay: Asset,
    rank: bigint,
    gapFiller: bigint,
    totalVotePower: bigint,
    isActive: number,
    numberVoters: number,
    avgVoteTimeStamp: Date,
    runningWeightTime: bigint,
    id?: string,
    rest?: UnknownObject
  ): Candidates {
    const entity = new Candidates(
      candidateName,
      requestedpay,
      rank,
      gapFiller,
      totalVotePower,
      isActive,
      numberVoters,
      avgVoteTimeStamp,
      runningWeightTime,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Candidates {
    return new Candidates(
      '',
      Asset.getDefault(),
      0n,
      0n,
      0n,
      0,
      0,
      new Date(0),
      0n,
    );
  }
}

