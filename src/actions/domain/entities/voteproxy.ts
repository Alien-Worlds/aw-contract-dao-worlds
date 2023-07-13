/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Voteproxy` object.
 *
 * @class
 */
export class Voteproxy implements Entity {
  /**
   * Constructs a new instance of the `Voteproxy` class.
   *
   * @public
   * @constructor
   * @param string voter
   * @param string proxy
   * @param string dacId
   * @param string [id]
   * @returns `Voteproxy` - An instance of the `Voteproxy` class.
   */
  public constructor(
    public voter: string,
    public proxy: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Voteproxy` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      voter: this.voter,
      proxy: this.proxy,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Voteproxy` class.
   *
   * @static
   * @public
   * @param string voter
   * @param string proxy
   * @param string dacId
   * @returns `Voteproxy` An instance of the `Voteproxy` class.
   */
  public static create(
    voter: string,
    proxy: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Voteproxy {
    const entity = new Voteproxy(
      voter,
      proxy,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Voteproxy {
    return new Voteproxy(
      '',
      '',
      '',
    );
  }
}

