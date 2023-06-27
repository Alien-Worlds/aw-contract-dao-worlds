/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 11:46:36 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Stprofile` object.
 *
 * @class
 */
export class Stprofile implements Entity {
  /**
   * Constructs a new instance of the `Stprofile` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param string profile
   * @param string dacId
   * @param string [id]
   * @returns `Stprofile` - An instance of the `Stprofile` class.
   */
  public constructor(
    public cand: string,
    public profile: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Stprofile` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      cand: this.cand,
      profile: this.profile,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Stprofile` class.
   *
   * @static
   * @public
   * @returns `Stprofile` An instance of the `Stprofile` class.
   */
  public static create(
    cand: string,
    profile: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Stprofile {
    const entity = new Stprofile(
      cand,
      profile,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Stprofile {
    return new Stprofile(
      '',
      '',
      '',
    );
  }
}

