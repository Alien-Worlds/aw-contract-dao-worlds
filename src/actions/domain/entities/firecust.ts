/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Firecust` object.
 *
 * @class
 */
export class Firecust implements Entity {
  /**
   * Constructs a new instance of the `Firecust` class.
   *
   * @public
   * @constructor
   * @param string cust
   * @param string dacId
   * @param string [id]
   * @returns `Firecust` - An instance of the `Firecust` class.
   */
  public constructor(
    public cust: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Firecust` class to a JSON object.
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
   * Creates an instance of the `Firecust` class.
   *
   * @static
   * @public
   * @param string cust
   * @param string dacId
   * @returns `Firecust` An instance of the `Firecust` class.
   */
  public static create(
    cust: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Firecust {
    const entity = new Firecust(
      cust,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Firecust {
    return new Firecust(
      '',
      '',
    );
  }
}

