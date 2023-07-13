/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Withdrawcane` object.
 *
 * @class
 */
export class Withdrawcane implements Entity {
  /**
   * Constructs a new instance of the `Withdrawcane` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param string dacId
   * @param string [id]
   * @returns `Withdrawcane` - An instance of the `Withdrawcane` class.
   */
  public constructor(
    public cand: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Withdrawcane` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      cand: this.cand,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Withdrawcane` class.
   *
   * @static
   * @public
   * @param string cand
   * @param string dacId
   * @returns `Withdrawcane` An instance of the `Withdrawcane` class.
   */
  public static create(
    cand: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Withdrawcane {
    const entity = new Withdrawcane(
      cand,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Withdrawcane {
    return new Withdrawcane(
      '',
      '',
    );
  }
}

