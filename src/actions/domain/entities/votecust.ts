/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:49:22 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Votecust` object.
 *
 * @class
 */
export class Votecust implements Entity {
  /**
   * Constructs a new instance of the `Votecust` class.
   *
   * @public
   * @constructor
   * @param string voter
   * @param string[] newvotes
   * @param string dacId
   * @param string [id]
   * @returns `Votecust` - An instance of the `Votecust` class.
   */
  public constructor(
    public voter: string,
    public newvotes: string[],
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Votecust` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      voter: this.voter,
      newvotes: this.newvotes,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Votecust` class.
   *
   * @static
   * @public
   * @param string voter
   * @param string[] newvotes
   * @param string dacId
   * @returns `Votecust` An instance of the `Votecust` class.
   */
  public static create(
    voter: string,
    newvotes: string[],
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Votecust {
    const entity = new Votecust(
      voter,
      newvotes,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Votecust {
    return new Votecust(
      '',
      [],
      '',
    );
  }
}

