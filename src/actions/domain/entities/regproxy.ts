/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 12:26:50 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Regproxy` object.
 *
 * @class
 */
export class Regproxy implements Entity {
  /**
   * Constructs a new instance of the `Regproxy` class.
   *
   * @public
   * @constructor
   * @param string proxy
   * @param string dacId
   * @param string [id]
   * @returns `Regproxy` - An instance of the `Regproxy` class.
   */
  public constructor(
    public proxy: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Regproxy` class to a JSON object.
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
   * Creates an instance of the `Regproxy` class.
   *
   * @static
   * @public
   * @returns `Regproxy` An instance of the `Regproxy` class.
   */
  public static create(
    proxy: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Regproxy {
    const entity = new Regproxy(
      proxy,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Regproxy {
    return new Regproxy(
      '',
      '',
    );
  }
}

