/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:28:17 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Resigncust` object.
 *
 * @class
 */
export class Resigncust implements Entity {
  /**
   * Constructs a new instance of the `Resigncust` class.
   *
   * @public
   * @constructor
   * @param string cust
   * @param string dacId
   * @param string [id]
   * @returns `Resigncust` - An instance of the `Resigncust` class.
   */
  public constructor(
    public cust: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Resigncust` class to a JSON object.
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
   * Creates an instance of the `Resigncust` class.
   *
   * @static
   * @public
   * @param string cust
   * @param string dacId
   * @returns `Resigncust` An instance of the `Resigncust` class.
   */
  public static create(
    cust: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Resigncust {
    const entity = new Resigncust(
      cust,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Resigncust {
    return new Resigncust(
      '',
      '',
    );
  }
}

