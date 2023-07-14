/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:18 GMT
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
   * @param number rank
   * @param number gapFiller
   * @param number totalVotePower
   * @param number isActive
   * @param number numberVoters
   * @param Date avgVoteTimeStamp
   * @param number runningWeightTime
   * @param string [id]
   * @returns `Candidates` - An instance of the `Candidates` class.
   */
  public constructor(
    public candidateName: string,
    public requestedpay: Asset,
    public rank: number,
    public gapFiller: number,
    public totalVotePower: number,
    public isActive: number,
    public numberVoters: number,
    public avgVoteTimeStamp: Date,
    public runningWeightTime: number,
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
   * @param string candidateName
   * @param Asset requestedpay
   * @param number rank
   * @param number gapFiller
   * @param number totalVotePower
   * @param number isActive
   * @param number numberVoters
   * @param Date avgVoteTimeStamp
   * @param number runningWeightTime
   * @returns `Candidates` An instance of the `Candidates` class.
   */
  public static create(
    candidateName: string,
    requestedpay: Asset,
    rank: number,
    gapFiller: number,
    totalVotePower: number,
    isActive: number,
    numberVoters: number,
    avgVoteTimeStamp: Date,
    runningWeightTime: number,
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
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Candidates {
    return new Candidates(
      '',
      Asset.getDefault(),
      0,
      0,
      0,
      0,
      0,
      new Date(0),
      0,
    );
  }
}

