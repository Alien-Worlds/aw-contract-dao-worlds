/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:08:24 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Appointcust` object.
 *
 * @class
 */
export class Appointcust implements Entity {
  /**
   * Constructs a new instance of the `Appointcust` class.
   *
   * @public
   * @constructor
   * @param string[] cust
   * @param string dacId
   * @param string [id]
   * @returns `Appointcust` - An instance of the `Appointcust` class.
   */
  public constructor(
    public cust: string[],
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Appointcust` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      cust: this.cust,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Appointcust` class.
   *
   * @static
   * @public
   * @returns `Appointcust` An instance of the `Appointcust` class.
   */
  public static create(
    cust: string[],
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Appointcust {
    const entity = new Appointcust(
      cust,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Appointcust {
    return new Appointcust(
      [],
      '',
    );
  }
}

