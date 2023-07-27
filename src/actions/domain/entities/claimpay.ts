/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

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
   * @param number payid
   * @param string dacId
   * @param string [id]
   * @returns `Claimpay` - An instance of the `Claimpay` class.
   */
  public constructor(
    public payid: number,
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
   * @param number payid
   * @param string dacId
   * @returns `Claimpay` An instance of the `Claimpay` class.
   */
  public static create(
    payid: number,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Claimpay {
    const entity = new Claimpay(
      payid,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Claimpay {
    return new Claimpay(
      0,
      '',
    );
  }
}

