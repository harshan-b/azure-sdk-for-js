/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AvailableGroundStation,
  Enum6,
  AvailableGroundStationsListByCapabilityOptionalParams,
  AvailableGroundStationsGetOptionalParams,
  AvailableGroundStationsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AvailableGroundStations. */
export interface AvailableGroundStations {
  /**
   * Returns list of available ground stations
   * @param capability Ground Station Capability
   * @param options The options parameters.
   */
  listByCapability(
    capability: Enum6,
    options?: AvailableGroundStationsListByCapabilityOptionalParams
  ): PagedAsyncIterableIterator<AvailableGroundStation>;
  /**
   * Gets the specified  available ground station
   * @param groundStationName Ground Station name
   * @param options The options parameters.
   */
  get(
    groundStationName: string,
    options?: AvailableGroundStationsGetOptionalParams
  ): Promise<AvailableGroundStationsGetResponse>;
}