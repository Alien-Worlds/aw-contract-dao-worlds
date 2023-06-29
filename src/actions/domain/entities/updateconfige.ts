/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { ExtendedAsset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Updateconfige` object.
 *
 * @class
 */
export class Updateconfige implements Entity {
  /**
   * Constructs a new instance of the `Updateconfige` class.
   *
   * @public
   * @constructor
   * @param ContrConfig newConfig
   * @param string dacId
   * @param string [id]
   * @returns `Updateconfige` - An instance of the `Updateconfige` class.
   */
  public constructor(
    public newConfig: ContrConfig,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Updateconfige` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      newConfig: this.newConfig,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Updateconfige` class.
   *
   * @static
   * @public
   * @returns `Updateconfige` An instance of the `Updateconfige` class.
   */
  public static create(
    newConfig: ContrConfig,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Updateconfige {
    const entity = new Updateconfige(
      newConfig,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Updateconfige {
    return new Updateconfige(
      ContrConfig.getDefault(),
      '',
    );
  }
}

/**
 * Represents a `ContrConfig` object.
 *
 * @class
 */
export class ContrConfig implements Entity {
  /**
   * Constructs a new instance of the `ContrConfig` class.
   *
   * @public
   * @constructor
   * @param ExtendedAsset lockupasset
   * @param number maxvotes
   * @param number numelected
   * @param number periodlength
   * @param boolean shouldPayViaServiceProvider
   * @param number initialVoteQuorumPercent
   * @param bigint tokenSupplyTheshold
   * @param number voteQuorumPercent
   * @param number authThresholdHigh
   * @param number authThresholdMid
   * @param number authThresholdLow
   * @param number lockupReleaseTimeDelay
   * @param ExtendedAsset requestedPayMax
   * @param string [id]
   * @returns `ContrConfig` - An instance of the `ContrConfig` class.
   */
  public constructor(
    public lockupasset: ExtendedAsset,
    public maxvotes: number,
    public numelected: number,
    public periodlength: number,
    public shouldPayViaServiceProvider: boolean,
    public initialVoteQuorumPercent: number,
    public tokenSupplyTheshold: bigint,
    public voteQuorumPercent: number,
    public authThresholdHigh: number,
    public authThresholdMid: number,
    public authThresholdLow: number,
    public lockupReleaseTimeDelay: number,
    public requestedPayMax: ExtendedAsset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `ContrConfig` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      lockupasset: this.lockupasset,
      maxvotes: this.maxvotes,
      numelected: this.numelected,
      periodlength: this.periodlength,
      shouldPayViaServiceProvider: this.shouldPayViaServiceProvider,
      initialVoteQuorumPercent: this.initialVoteQuorumPercent,
      tokenSupplyTheshold: this.tokenSupplyTheshold,
      voteQuorumPercent: this.voteQuorumPercent,
      authThresholdHigh: this.authThresholdHigh,
      authThresholdMid: this.authThresholdMid,
      authThresholdLow: this.authThresholdLow,
      lockupReleaseTimeDelay: this.lockupReleaseTimeDelay,
      requestedPayMax: this.requestedPayMax,
    };
  }

  /**
   * Creates an instance of the `ContrConfig` class.
   *
   * @static
   * @public
   * @returns `ContrConfig` An instance of the `ContrConfig` class.
   */
  public static create(
    lockupasset: ExtendedAsset,
    maxvotes: number,
    numelected: number,
    periodlength: number,
    shouldPayViaServiceProvider: boolean,
    initialVoteQuorumPercent: number,
    tokenSupplyTheshold: bigint,
    voteQuorumPercent: number,
    authThresholdHigh: number,
    authThresholdMid: number,
    authThresholdLow: number,
    lockupReleaseTimeDelay: number,
    requestedPayMax: ExtendedAsset,
    id?: string,
    rest?: UnknownObject
  ): ContrConfig {
    const entity = new ContrConfig(
      lockupasset,
      maxvotes,
      numelected,
      periodlength,
      shouldPayViaServiceProvider,
      initialVoteQuorumPercent,
      tokenSupplyTheshold,
      voteQuorumPercent,
      authThresholdHigh,
      authThresholdMid,
      authThresholdLow,
      lockupReleaseTimeDelay,
      requestedPayMax,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): ContrConfig {
    return new ContrConfig(
      ExtendedAsset.getDefault(),
      0,
      0,
      0,
      false,
      0,
      0n,
      0,
      0,
      0,
      0,
      0,
      ExtendedAsset.getDefault(),
    );
  }
}

