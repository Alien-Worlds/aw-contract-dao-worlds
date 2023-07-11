/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 11 Jul 2023 10:01:27 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { ExtendedAsset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Pendingpay` object.
 *
 * @class
 */
export class Pendingpay implements Entity {
  /**
   * Constructs a new instance of the `Pendingpay` class.
   *
   * @public
   * @constructor
   * @param number key
   * @param string receiver
   * @param ExtendedAsset quantity
   * @param string [id]
   * @returns `Pendingpay` - An instance of the `Pendingpay` class.
   */
  public constructor(
    public key: number,
    public receiver: string,
    public quantity: ExtendedAsset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Pendingpay` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      key: this.key,
      receiver: this.receiver,
      quantity: this.quantity,
    };
  }

  /**
   * Creates an instance of the `Pendingpay` class.
   *
   * @static
   * @public
   * @returns `Pendingpay` An instance of the `Pendingpay` class.
   */
  public static create(
    key: number,
    receiver: string,
    quantity: ExtendedAsset,
    id?: string,
    rest?: UnknownObject
  ): Pendingpay {
    const entity = new Pendingpay(
      key,
      receiver,
      quantity,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Pendingpay {
    return new Pendingpay(
      0,
      '',
      ExtendedAsset.getDefault(),
    );
  }
}

