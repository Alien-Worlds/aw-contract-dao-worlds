/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Removecuspay` object.
 *
 * @class
 */
export class Removecuspay implements Entity {
  /**
   * Constructs a new instance of the `Removecuspay` class.
   *
   * @public
   * @constructor
   * @param number payid
   * @param string dacId
   * @param string [id]
   * @returns `Removecuspay` - An instance of the `Removecuspay` class.
   */
  public constructor(
    public payid: number,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Removecuspay` class to a JSON object.
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
   * Creates an instance of the `Removecuspay` class.
   *
   * @static
   * @public
   * @param number payid
   * @param string dacId
   * @returns `Removecuspay` An instance of the `Removecuspay` class.
   */
  public static create(
    payid: number,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Removecuspay {
    const entity = new Removecuspay(
      payid,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Removecuspay {
    return new Removecuspay(
      0,
      '',
    );
  }
}

