/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Paycpu` object.
 *
 * @class
 */
export class Paycpu implements Entity {
  /**
   * Constructs a new instance of the `Paycpu` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string [id]
   * @returns `Paycpu` - An instance of the `Paycpu` class.
   */
  public constructor(
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Paycpu` class to a JSON object.
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
   * Creates an instance of the `Paycpu` class.
   *
   * @static
   * @public
   * @param string dacId
   * @returns `Paycpu` An instance of the `Paycpu` class.
   */
  public static create(
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Paycpu {
    const entity = new Paycpu(
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Paycpu {
    return new Paycpu(
      '',
    );
  }
}

