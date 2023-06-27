/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 11:46:36 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Newperiod` object.
 *
 * @class
 */
export class Newperiod implements Entity {
  /**
   * Constructs a new instance of the `Newperiod` class.
   *
   * @public
   * @constructor
   * @param string message
   * @param string dacId
   * @param string [id]
   * @returns `Newperiod` - An instance of the `Newperiod` class.
   */
  public constructor(
    public message: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Newperiod` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      message: this.message,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Newperiod` class.
   *
   * @static
   * @public
   * @returns `Newperiod` An instance of the `Newperiod` class.
   */
  public static create(
    message: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Newperiod {
    const entity = new Newperiod(
      message,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Newperiod {
    return new Newperiod(
      '',
      '',
    );
  }
}

