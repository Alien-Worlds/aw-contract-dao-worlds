/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:50 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Claimpay` object.
 *
 * @class
 */
export class Claimpay implements Entity {
  /**
   * Constructs a new instance of the `Claimpay` class.
   *
   * @public
   * @constructor
   * @param bigint payid
   * @param string dacId
   * @param string [id]
   * @returns `Claimpay` - An instance of the `Claimpay` class.
   */
  public constructor(
    public payid: bigint,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Claimpay` class to a JSON object.
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
   * Creates an instance of the `Claimpay` class.
   *
   * @static
   * @public
   * @returns `Claimpay` An instance of the `Claimpay` class.
   */
  public static create(
    payid: bigint,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Claimpay {
    const entity = new Claimpay(
      payid,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Claimpay {
    return new Claimpay(
      0n,
      '',
    );
  }
}
