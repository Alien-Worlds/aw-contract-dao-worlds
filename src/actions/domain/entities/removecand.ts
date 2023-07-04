/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:00 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Removecand` object.
 *
 * @class
 */
export class Removecand implements Entity {
  /**
   * Constructs a new instance of the `Removecand` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param string dacId
   * @param string [id]
   * @returns `Removecand` - An instance of the `Removecand` class.
   */
  public constructor(
    public cand: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Removecand` class to a JSON object.
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
   * Creates an instance of the `Removecand` class.
   *
   * @static
   * @public
   * @returns `Removecand` An instance of the `Removecand` class.
   */
  public static create(
    cand: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Removecand {
    const entity = new Removecand(
      cand,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Removecand {
    return new Removecand(
      '',
      '',
    );
  }
}

