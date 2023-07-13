/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:27:47 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Runnewperiod` object.
 *
 * @class
 */
export class Runnewperiod implements Entity {
  /**
   * Constructs a new instance of the `Runnewperiod` class.
   *
   * @public
   * @constructor
   * @param string message
   * @param string dacId
   * @param string [id]
   * @returns `Runnewperiod` - An instance of the `Runnewperiod` class.
   */
  public constructor(
    public message: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Runnewperiod` class to a JSON object.
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
   * Creates an instance of the `Runnewperiod` class.
   *
   * @static
   * @public
   * @param string message
   * @param string dacId
   * @returns `Runnewperiod` An instance of the `Runnewperiod` class.
   */
  public static create(
    message: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Runnewperiod {
    const entity = new Runnewperiod(
      message,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Runnewperiod {
    return new Runnewperiod(
      '',
      '',
    );
  }
}

