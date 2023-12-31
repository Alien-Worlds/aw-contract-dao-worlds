/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Nominatecane` object.
 *
 * @class
 */
export class Nominatecane implements Entity {
  /**
   * Constructs a new instance of the `Nominatecane` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param Asset requestedpay
   * @param string dacId
   * @param string [id]
   * @returns `Nominatecane` - An instance of the `Nominatecane` class.
   */
  public constructor(
    public cand: string,
    public requestedpay: Asset,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Nominatecane` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      cand: this.cand,
      requestedpay: this.requestedpay,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Nominatecane` class.
   *
   * @static
   * @public
   * @param string cand
   * @param Asset requestedpay
   * @param string dacId
   * @returns `Nominatecane` An instance of the `Nominatecane` class.
   */
  public static create(
    cand: string,
    requestedpay: Asset,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Nominatecane {
    const entity = new Nominatecane(
      cand,
      requestedpay,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Nominatecane {
    return new Nominatecane(
      '',
      Asset.getDefault(),
      '',
    );
  }
}

