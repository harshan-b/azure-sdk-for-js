/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  InboundSecurityRule,
  InboundSecurityRuleOperationsCreateOrUpdateOptionalParams,
  InboundSecurityRuleOperationsCreateOrUpdateResponse
} from "../models";

/** Interface representing a InboundSecurityRuleOperations. */
export interface InboundSecurityRuleOperations {
  /**
   * Creates or updates the specified Network Virtual Appliance Inbound Security Rules.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param ruleCollectionName The name of security rule collection.
   * @param parameters Parameters supplied to the create or update Network Virtual Appliance Inbound
   *                   Security Rules operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    ruleCollectionName: string,
    parameters: InboundSecurityRule,
    options?: InboundSecurityRuleOperationsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<InboundSecurityRuleOperationsCreateOrUpdateResponse>,
      InboundSecurityRuleOperationsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates the specified Network Virtual Appliance Inbound Security Rules.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param ruleCollectionName The name of security rule collection.
   * @param parameters Parameters supplied to the create or update Network Virtual Appliance Inbound
   *                   Security Rules operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    ruleCollectionName: string,
    parameters: InboundSecurityRule,
    options?: InboundSecurityRuleOperationsCreateOrUpdateOptionalParams
  ): Promise<InboundSecurityRuleOperationsCreateOrUpdateResponse>;
}