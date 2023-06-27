/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 11:46:36 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Flagcandprof` object.
 *
 * @class
 */
export class Flagcandprof implements Entity {
  /**
   * Constructs a new instance of the `Flagcandprof` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param string reason
   * @param string reporter
   * @param boolean block
   * @param string dacId
   * @param string [id]
   * @returns `Flagcandprof` - An instance of the `Flagcandprof` class.
   */
  public constructor(
    public cand: string,
    public reason: string,
    public reporter: string,
    public block: boolean,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Flagcandprof` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      cand: this.cand,
      reason: this.reason,
      reporter: this.reporter,
      block: this.block,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Flagcandprof` class.
   *
   * @static
   * @public
   * @returns `Flagcandprof` An instance of the `Flagcandprof` class.
   */
  public static create(
    cand: string,
    reason: string,
    reporter: string,
    block: boolean,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Flagcandprof {
    const entity = new Flagcandprof(
      cand,
      reason,
      reporter,
      block,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Flagcandprof {
    return new Flagcandprof(
      '',
      '',
      '',
      false,
      '',
    );
  }
}

