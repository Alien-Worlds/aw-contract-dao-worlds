/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 11:46:36 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Custodians1` object.
 *
 * @class
 */
export class Custodians1 implements Entity {
  /**
   * Constructs a new instance of the `Custodians1` class.
   *
   * @public
   * @constructor
   * @param string custName
   * @param Asset requestedpay
   * @param bigint totalVotePower
   * @param bigint rank
   * @param number numberVoters
   * @param Date avgVoteTimeStamp
   * @param string [id]
   * @returns `Custodians1` - An instance of the `Custodians1` class.
   */
  public constructor(
    public custName: string,
    public requestedpay: Asset,
    public totalVotePower: bigint,
    public rank: bigint,
    public numberVoters: number,
    public avgVoteTimeStamp: Date,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Custodians1` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      custName: this.custName,
      requestedpay: this.requestedpay,
      totalVotePower: this.totalVotePower,
      rank: this.rank,
      numberVoters: this.numberVoters,
      avgVoteTimeStamp: this.avgVoteTimeStamp,
    };
  }

  /**
   * Creates an instance of the `Custodians1` class.
   *
   * @static
   * @public
   * @returns `Custodians1` An instance of the `Custodians1` class.
   */
  public static create(
    custName: string,
    requestedpay: Asset,
    totalVotePower: bigint,
    rank: bigint,
    numberVoters: number,
    avgVoteTimeStamp: Date,
    id?: string,
    rest?: UnknownObject
  ): Custodians1 {
    const entity = new Custodians1(
      custName,
      requestedpay,
      totalVotePower,
      rank,
      numberVoters,
      avgVoteTimeStamp,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Custodians1 {
    return new Custodians1(
      '',
      Asset.getDefault(),
      0n,
      0n,
      0,
      new Date(0),
    );
  }
}

