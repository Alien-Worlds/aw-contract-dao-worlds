/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Unsetbudget` object.
 *
 * @class
 */
export class Unsetbudget implements Entity {
  /**
   * Constructs a new instance of the `Unsetbudget` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string [id]
   * @returns `Unsetbudget` - An instance of the `Unsetbudget` class.
   */
  public constructor(
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Unsetbudget` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Unsetbudget` class.
   *
   * @static
   * @public
   * @returns `Unsetbudget` An instance of the `Unsetbudget` class.
   */
  public static create(
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Unsetbudget {
    const entity = new Unsetbudget(
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Unsetbudget {
    return new Unsetbudget(
      '',
    );
  }
}

