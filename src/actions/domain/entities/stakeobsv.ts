/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:50 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Stakeobsv` object.
 *
 * @class
 */
export class Stakeobsv implements Entity {
  /**
   * Constructs a new instance of the `Stakeobsv` class.
   *
   * @public
   * @constructor
   * @param AccountStakeDelta[] accountStakeDeltas
   * @param string dacId
   * @param string [id]
   * @returns `Stakeobsv` - An instance of the `Stakeobsv` class.
   */
  public constructor(
    public accountStakeDeltas: AccountStakeDelta[],
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Stakeobsv` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      accountStakeDeltas: this.accountStakeDeltas,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Stakeobsv` class.
   *
   * @static
   * @public
   * @returns `Stakeobsv` An instance of the `Stakeobsv` class.
   */
  public static create(
    accountStakeDeltas: AccountStakeDelta[],
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Stakeobsv {
    const entity = new Stakeobsv(
      accountStakeDeltas,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Stakeobsv {
    return new Stakeobsv(
        []
,
      '',
    );
  }
}

/**
 * Represents a `AccountStakeDelta` object.
 *
 * @class
 */
export class AccountStakeDelta implements Entity {
  /**
   * Constructs a new instance of the `AccountStakeDelta` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param Asset stakeDelta
   * @param number unstakeDelay
   * @param string [id]
   * @returns `AccountStakeDelta` - An instance of the `AccountStakeDelta` class.
   */
  public constructor(
    public account: string,
    public stakeDelta: Asset,
    public unstakeDelay: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `AccountStakeDelta` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      stakeDelta: this.stakeDelta,
      unstakeDelay: this.unstakeDelay,
    };
  }

  /**
   * Creates an instance of the `AccountStakeDelta` class.
   *
   * @static
   * @public
   * @returns `AccountStakeDelta` An instance of the `AccountStakeDelta` class.
   */
  public static create(
    account: string,
    stakeDelta: Asset,
    unstakeDelay: number,
    id?: string,
    rest?: UnknownObject
  ): AccountStakeDelta {
    const entity = new AccountStakeDelta(
      account,
      stakeDelta,
      unstakeDelay,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): AccountStakeDelta {
    return new AccountStakeDelta(
      '',
      Asset.getDefault(),
      0,
    );
  }
}
