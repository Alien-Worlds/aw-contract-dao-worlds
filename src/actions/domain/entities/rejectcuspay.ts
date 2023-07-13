/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
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
   * @param number payid
   * @param string dacId
   * @param string [id]
   * @returns `Rejectcuspay` - An instance of the `Rejectcuspay` class.
   */
  public constructor(
    public payid: number,
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
   * @param number payid
   * @param string dacId
   * @returns `Rejectcuspay` An instance of the `Rejectcuspay` class.
   */
  public static create(
    payid: number,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Rejectcuspay {
    const entity = new Rejectcuspay(
      payid,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Rejectcuspay {
    return new Rejectcuspay(
      0,
      '',
    );
  }
}

