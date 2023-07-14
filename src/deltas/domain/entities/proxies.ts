/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:49:22 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Proxies` object.
 *
 * @class
 */
export class Proxies implements Entity {
  /**
   * Constructs a new instance of the `Proxies` class.
   *
   * @public
   * @constructor
   * @param string proxy
   * @param number totalWeight
   * @param string [id]
   * @returns `Proxies` - An instance of the `Proxies` class.
   */
  public constructor(
    public proxy: string,
    public totalWeight: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Proxies` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proxy: this.proxy,
      totalWeight: this.totalWeight,
    };
  }

  /**
   * Creates an instance of the `Proxies` class.
   *
   * @static
   * @public
   * @param string proxy
   * @param number totalWeight
   * @returns `Proxies` An instance of the `Proxies` class.
   */
  public static create(
    proxy: string,
    totalWeight: number,
    id?: string,
    rest?: UnknownObject
  ): Proxies {
    const entity = new Proxies(
      proxy,
      totalWeight,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Proxies {
    return new Proxies(
      '',
      0,
    );
  }
}

