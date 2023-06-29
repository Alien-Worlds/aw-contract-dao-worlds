/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:19 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Rejectcuspay` object.
 *
 * @class
 */
export class Rejectcuspay implements Entity {
  /**
   * Constructs a new instance of the `Rejectcuspay` class.
   *
   * @public
   * @constructor
   * @param bigint payid
   * @param string dacId
   * @param string [id]
   * @returns `Rejectcuspay` - An instance of the `Rejectcuspay` class.
   */
  public constructor(
    public payid: bigint,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Rejectcuspay` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      payid: this.payid,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Rejectcuspay` class.
   *
   * @static
   * @public
   * @returns `Rejectcuspay` An instance of the `Rejectcuspay` class.
   */
  public static create(
    payid: bigint,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Rejectcuspay {
    const entity = new Rejectcuspay(
      payid,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Rejectcuspay {
    return new Rejectcuspay(
      0n,
      '',
    );
  }
}

