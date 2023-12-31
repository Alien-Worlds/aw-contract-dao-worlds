/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Removecstvte` object.
 *
 * @class
 */
export class Removecstvte implements Entity {
  /**
   * Constructs a new instance of the `Removecstvte` class.
   *
   * @public
   * @constructor
   * @param string voter
   * @param string dacId
   * @param string [id]
   * @returns `Removecstvte` - An instance of the `Removecstvte` class.
   */
  public constructor(
    public voter: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Removecstvte` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      voter: this.voter,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Removecstvte` class.
   *
   * @static
   * @public
   * @param string voter
   * @param string dacId
   * @returns `Removecstvte` An instance of the `Removecstvte` class.
   */
  public static create(
    voter: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Removecstvte {
    const entity = new Removecstvte(
      voter,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Removecstvte {
    return new Removecstvte(
      '',
      '',
    );
  }
}

