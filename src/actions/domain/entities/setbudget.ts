/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Setbudget` object.
 *
 * @class
 */
export class Setbudget implements Entity {
  /**
   * Constructs a new instance of the `Setbudget` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param number percentage
   * @param string [id]
   * @returns `Setbudget` - An instance of the `Setbudget` class.
   */
  public constructor(
    public dacId: string,
    public percentage: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Setbudget` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
      percentage: this.percentage,
    };
  }

  /**
   * Creates an instance of the `Setbudget` class.
   *
   * @static
   * @public
   * @param string dacId
   * @param number percentage
   * @returns `Setbudget` An instance of the `Setbudget` class.
   */
  public static create(
    dacId: string,
    percentage: number,
    id?: string,
    rest?: UnknownObject
  ): Setbudget {
    const entity = new Setbudget(
      dacId,
      percentage,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Setbudget {
    return new Setbudget(
      '',
      0,
    );
  }
}

