/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Bot,
  BotsListByResourceGroupOptionalParams,
  BotsListOptionalParams,
  BotsCreateOptionalParams,
  BotsCreateResponse,
  BotsUpdateOptionalParams,
  BotsUpdateResponse,
  BotsDeleteOptionalParams,
  BotsGetOptionalParams,
  BotsGetResponse,
  CheckNameAvailabilityRequestBody,
  BotsGetCheckNameAvailabilityOptionalParams,
  BotsGetCheckNameAvailabilityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Bots. */
export interface Bots {
  /**
   * Returns all the resources of a particular type belonging to a resource group
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: BotsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Bot>;
  /**
   * Returns all the resources of a particular type belonging to a subscription.
   * @param options The options parameters.
   */
  list(options?: BotsListOptionalParams): PagedAsyncIterableIterator<Bot>;
  /**
   * Creates a Bot Service. Bot Service is a resource group wide resource type.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param parameters The parameters to provide for the created bot.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    resourceName: string,
    parameters: Bot,
    options?: BotsCreateOptionalParams
  ): Promise<BotsCreateResponse>;
  /**
   * Updates a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    options?: BotsUpdateOptionalParams
  ): Promise<BotsUpdateResponse>;
  /**
   * Deletes a Bot Service from the resource group.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    options?: BotsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Returns a BotService specified by the parameters.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: BotsGetOptionalParams
  ): Promise<BotsGetResponse>;
  /**
   * Check whether a bot name is available.
   * @param parameters The request body parameters to provide for the check name availability request
   * @param options The options parameters.
   */
  getCheckNameAvailability(
    parameters: CheckNameAvailabilityRequestBody,
    options?: BotsGetCheckNameAvailabilityOptionalParams
  ): Promise<BotsGetCheckNameAvailabilityResponse>;
}