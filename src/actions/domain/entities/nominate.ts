/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:54:48 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Nominate` object.
 *
 * @class
 */
export class Nominate implements Entity {
  /**
   * Constructs a new instance of the `Nominate` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param string dacId
   * @param string [id]
   * @returns `Nominate` - An instance of the `Nominate` class.
   */
  public constructor(
    public cand: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Nominate` class to a JSON object.
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
   * Creates an instance of the `Nominate` class.
   *
   * @static
   * @public
   * @returns `Nominate` An instance of the `Nominate` class.
   */
  public static create(
    cand: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Nominate {
    const entity = new Nominate(
      cand,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Nominate {
    return new Nominate(
      '',
      '',
    );
  }
}

