/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Candperms` object.
 *
 * @class
 */
export class Candperms implements Entity {
  /**
   * Constructs a new instance of the `Candperms` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param string permission
   * @param string [id]
   * @returns `Candperms` - An instance of the `Candperms` class.
   */
  public constructor(
    public cand: string,
    public permission: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Candperms` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      cand: this.cand,
      permission: this.permission,
    };
  }

  /**
   * Creates an instance of the `Candperms` class.
   *
   * @static
   * @public
   * @param string cand
   * @param string permission
   * @returns `Candperms` An instance of the `Candperms` class.
   */
  public static create(
    cand: string,
    permission: string,
    id?: string,
    rest?: UnknownObject
  ): Candperms {
    const entity = new Candperms(
      cand,
      permission,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Candperms {
    return new Candperms(
      '',
      '',
    );
  }
}

