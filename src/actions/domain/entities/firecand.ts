/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:00 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Firecand` object.
 *
 * @class
 */
export class Firecand implements Entity {
  /**
   * Constructs a new instance of the `Firecand` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param boolean lockupStake
   * @param string dacId
   * @param string [id]
   * @returns `Firecand` - An instance of the `Firecand` class.
   */
  public constructor(
    public cand: string,
    public lockupStake: boolean,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Firecand` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      cand: this.cand,
      lockupStake: this.lockupStake,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Firecand` class.
   *
   * @static
   * @public
   * @returns `Firecand` An instance of the `Firecand` class.
   */
  public static create(
    cand: string,
    lockupStake: boolean,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Firecand {
    const entity = new Firecand(
      cand,
      lockupStake,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Firecand {
    return new Firecand(
      '',
      false,
      '',
    );
  }
}

