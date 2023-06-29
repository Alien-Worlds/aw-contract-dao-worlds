/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:07 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Votes` object.
 *
 * @class
 */
export class Votes implements Entity {
  /**
   * Constructs a new instance of the `Votes` class.
   *
   * @public
   * @constructor
   * @param string voter
   * @param string proxy
   * @param string[] candidates
   * @param Date voteTimeStamp
   * @param number voteCount
   * @param string [id]
   * @returns `Votes` - An instance of the `Votes` class.
   */
  public constructor(
    public voter: string,
    public proxy: string,
    public candidates: string[],
    public voteTimeStamp: Date,
    public voteCount: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Votes` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      voter: this.voter,
      proxy: this.proxy,
      candidates: this.candidates,
      voteTimeStamp: this.voteTimeStamp,
      voteCount: this.voteCount,
    };
  }

  /**
   * Creates an instance of the `Votes` class.
   *
   * @static
   * @public
   * @returns `Votes` An instance of the `Votes` class.
   */
  public static create(
    voter: string,
    proxy: string,
    candidates: string[],
    voteTimeStamp: Date,
    voteCount: number,
    id?: string,
    rest?: UnknownObject
  ): Votes {
    const entity = new Votes(
      voter,
      proxy,
      candidates,
      voteTimeStamp,
      voteCount,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Votes {
    return new Votes(
      '',
      '',
      [],
      new Date(0),
      0,
    );
  }
}

