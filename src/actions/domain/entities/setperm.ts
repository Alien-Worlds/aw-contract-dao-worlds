/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 11:59:25 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Setperm` object.
 *
 * @class
 */
export class Setperm implements Entity {
  /**
   * Constructs a new instance of the `Setperm` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param string permission
   * @param string dacId
   * @param string [id]
   * @returns `Setperm` - An instance of the `Setperm` class.
   */
  public constructor(
    public cand: string,
    public permission: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Setperm` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      cand: this.cand,
      permission: this.permission,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Setperm` class.
   *
   * @static
   * @public
   * @returns `Setperm` An instance of the `Setperm` class.
   */
  public static create(
    cand: string,
    permission: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Setperm {
    const entity = new Setperm(
      cand,
      permission,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Setperm {
    return new Setperm(
      '',
      '',
      '',
    );
  }
}

