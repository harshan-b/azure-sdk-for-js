/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  TdeCertificate,
  ManagedInstanceTdeCertificatesCreateOptionalParams
} from "../models";

/** Interface representing a ManagedInstanceTdeCertificates. */
export interface ManagedInstanceTdeCertificates {
  /**
   * Creates a TDE certificate for a given server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested TDE certificate to be created or updated.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    managedInstanceName: string,
    parameters: TdeCertificate,
    options?: ManagedInstanceTdeCertificatesCreateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Creates a TDE certificate for a given server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested TDE certificate to be created or updated.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    parameters: TdeCertificate,
    options?: ManagedInstanceTdeCertificatesCreateOptionalParams
  ): Promise<void>;
}