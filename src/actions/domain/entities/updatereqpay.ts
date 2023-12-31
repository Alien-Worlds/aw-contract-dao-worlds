/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 11:27:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Updatereqpay` object.
 *
 * @class
 */
export class Updatereqpay implements Entity {
  /**
   * Constructs a new instance of the `Updatereqpay` class.
   *
   * @public
   * @constructor
   * @param string cand
   * @param Asset requestedpay
   * @param string dacId
   * @param string [id]
   * @returns `Updatereqpay` - An instance of the `Updatereqpay` class.
   */
  public constructor(
    public cand: string,
    public requestedpay: Asset,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Updatereqpay` class to a JSON object.
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
   * Creates an instance of the `Updatereqpay` class.
   *
   * @static
   * @public
   * @param string cand
   * @param Asset requestedpay
   * @param string dacId
   * @returns `Updatereqpay` An instance of the `Updatereqpay` class.
   */
  public static create(
    cand: string,
    requestedpay: Asset,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Updatereqpay {
    const entity = new Updatereqpay(
      cand,
      requestedpay,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Updatereqpay {
    return new Updatereqpay(
      '',
      Asset.getDefault(),
      '',
    );
  }
}

