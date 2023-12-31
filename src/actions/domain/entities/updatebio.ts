/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Updatebio` object.
 *
 * @class
 */
export class Updatebio implements Entity {
  /**
   * Constructs a new instance of the `Updatebio` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param string bio
   * @param string dacId
   * @param string [id]
   * @returns `Updatebio` - An instance of the `Updatebio` class.
   */
  public constructor(
    public cand: string,
    public bio: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Updatebio` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      cand: this.cand,
      bio: this.bio,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Updatebio` class.
   *
   * @static
   * @public
   * @param string cand
   * @param string bio
   * @param string dacId
   * @returns `Updatebio` An instance of the `Updatebio` class.
   */
  public static create(
    cand: string,
    bio: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Updatebio {
    const entity = new Updatebio(
      cand,
      bio,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Updatebio {
    return new Updatebio(
      '',
      '',
      '',
    );
  }
}

