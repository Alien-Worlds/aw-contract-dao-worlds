/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Weightobsv` object.
 *
 * @class
 */
export class Weightobsv implements Entity {
  /**
   * Constructs a new instance of the `Weightobsv` class.
   *
   * @public
   * @constructor
   * @param AccountWeightDelta[] accountWeightDeltas
   * @param string dacId
   * @param string [id]
   * @returns `Weightobsv` - An instance of the `Weightobsv` class.
   */
  public constructor(
    public accountWeightDeltas: AccountWeightDelta[],
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Weightobsv` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      accountWeightDeltas: this.accountWeightDeltas,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Weightobsv` class.
   *
   * @static
   * @public
   * @param AccountWeightDelta[] accountWeightDeltas
   * @param string dacId
   * @returns `Weightobsv` An instance of the `Weightobsv` class.
   */
  public static create(
    accountWeightDeltas: AccountWeightDelta[],
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Weightobsv {
    const entity = new Weightobsv(
      accountWeightDeltas,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Weightobsv {
    return new Weightobsv(
        []
,
      '',
    );
  }
}

/**
 * Represents a `AccountWeightDelta` object.
 *
 * @class
 */
export class AccountWeightDelta implements Entity {
  /**
   * Constructs a new instance of the `AccountWeightDelta` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param number weightDelta
   * @param number weightDeltaQuorum
   * @param string [id]
   * @returns `AccountWeightDelta` - An instance of the `AccountWeightDelta` class.
   */
  public constructor(
    public account: string,
    public weightDelta: number,
    public weightDeltaQuorum: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `AccountWeightDelta` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      weightDelta: this.weightDelta,
      weightDeltaQuorum: this.weightDeltaQuorum,
    };
  }

  /**
   * Creates an instance of the `AccountWeightDelta` class.
   *
   * @static
   * @public
   * @param string account
   * @param number weightDelta
   * @param number weightDeltaQuorum
   * @returns `AccountWeightDelta` An instance of the `AccountWeightDelta` class.
   */
  public static create(
    account: string,
    weightDelta: number,
    weightDeltaQuorum: number,
    id?: string,
    rest?: UnknownObject
  ): AccountWeightDelta {
    const entity = new AccountWeightDelta(
      account,
      weightDelta,
      weightDeltaQuorum,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): AccountWeightDelta {
    return new AccountWeightDelta(
      '',
      0,
      0,
    );
  }
}

