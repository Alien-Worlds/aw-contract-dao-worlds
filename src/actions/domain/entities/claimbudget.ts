/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Claimbudget` object.
 *
 * @class
 */
export class Claimbudget implements Entity {
  /**
   * Constructs a new instance of the `Claimbudget` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string [id]
   * @returns `Claimbudget` - An instance of the `Claimbudget` class.
   */
  public constructor(
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Claimbudget` class to a JSON object.
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
   * Creates an instance of the `Claimbudget` class.
   *
   * @static
   * @public
   * @param string dacId
   * @returns `Claimbudget` An instance of the `Claimbudget` class.
   */
  public static create(
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Claimbudget {
    const entity = new Claimbudget(
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Claimbudget {
    return new Claimbudget(
      '',
    );
  }
}

