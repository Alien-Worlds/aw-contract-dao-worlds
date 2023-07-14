/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:25:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Unregproxy` object.
 *
 * @class
 */
export class Unregproxy implements Entity {
  /**
   * Constructs a new instance of the `Unregproxy` class.
   *
   * @public
   * @constructor
   * @param string proxy
   * @param string dacId
   * @param string [id]
   * @returns `Unregproxy` - An instance of the `Unregproxy` class.
   */
  public constructor(
    public proxy: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Unregproxy` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proxy: this.proxy,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Unregproxy` class.
   *
   * @static
   * @public
   * @param string proxy
   * @param string dacId
   * @returns `Unregproxy` An instance of the `Unregproxy` class.
   */
  public static create(
    proxy: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Unregproxy {
    const entity = new Unregproxy(
      proxy,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Unregproxy {
    return new Unregproxy(
      '',
      '',
    );
  }
}

