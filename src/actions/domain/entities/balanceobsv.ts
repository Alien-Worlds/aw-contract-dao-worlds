/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Balanceobsv` object.
 *
 * @class
 */
export class Balanceobsv implements Entity {
  /**
   * Constructs a new instance of the `Balanceobsv` class.
   *
   * @public
   * @constructor
   * @param AccountBalanceDelta[] accountBalanceDeltas
   * @param string dacId
   * @param string [id]
   * @returns `Balanceobsv` - An instance of the `Balanceobsv` class.
   */
  public constructor(
    public accountBalanceDeltas: AccountBalanceDelta[],
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Balanceobsv` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      accountBalanceDeltas: this.accountBalanceDeltas,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Balanceobsv` class.
   *
   * @static
   * @public
   * @param AccountBalanceDelta[] accountBalanceDeltas
   * @param string dacId
   * @returns `Balanceobsv` An instance of the `Balanceobsv` class.
   */
  public static create(
    accountBalanceDeltas: AccountBalanceDelta[],
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Balanceobsv {
    const entity = new Balanceobsv(
      accountBalanceDeltas,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Balanceobsv {
    return new Balanceobsv(
        []
,
      '',
    );
  }
}

/**
 * Represents a `AccountBalanceDelta` object.
 *
 * @class
 */
export class AccountBalanceDelta implements Entity {
  /**
   * Constructs a new instance of the `AccountBalanceDelta` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param Asset balanceDelta
   * @param string [id]
   * @returns `AccountBalanceDelta` - An instance of the `AccountBalanceDelta` class.
   */
  public constructor(
    public account: string,
    public balanceDelta: Asset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `AccountBalanceDelta` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      balanceDelta: this.balanceDelta,
    };
  }

  /**
   * Creates an instance of the `AccountBalanceDelta` class.
   *
   * @static
   * @public
   * @param string account
   * @param Asset balanceDelta
   * @returns `AccountBalanceDelta` An instance of the `AccountBalanceDelta` class.
   */
  public static create(
    account: string,
    balanceDelta: Asset,
    id?: string,
    rest?: UnknownObject
  ): AccountBalanceDelta {
    const entity = new AccountBalanceDelta(
      account,
      balanceDelta,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): AccountBalanceDelta {
    return new AccountBalanceDelta(
      '',
      Asset.getDefault(),
    );
  }
}

