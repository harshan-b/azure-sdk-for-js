/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ClustersGetOptionalParams,
  ClustersGetResponse,
  Cluster,
  ClustersCreateOrUpdateOptionalParams,
  ClustersCreateOrUpdateResponse,
  ClusterUpdateParameters,
  ClustersUpdateOptionalParams,
  ClustersUpdateResponse,
  ClustersDeleteOptionalParams,
  ClustersListByResourceGroupOptionalParams,
  ClustersListByResourceGroupResponse,
  ClustersListOptionalParams,
  ClustersListResponse,
  ClustersListUpgradableVersionsOptionalParams,
  ClustersListUpgradableVersionsResponse
} from "../models";

/** Interface representing a Clusters. */
export interface Clusters {
  /**
   * Get a Service Fabric cluster resource created or in the process of being created in the specified
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams
  ): Promise<ClustersGetResponse>;
  /**
   * Create or update a Service Fabric cluster resource with the specified name.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The cluster resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    parameters: Cluster,
    options?: ClustersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ClustersCreateOrUpdateResponse>,
      ClustersCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a Service Fabric cluster resource with the specified name.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The cluster resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: Cluster,
    options?: ClustersCreateOrUpdateOptionalParams
  ): Promise<ClustersCreateOrUpdateResponse>;
  /**
   * Update the configuration of a Service Fabric cluster resource with the specified name.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The parameters which contains the property value and property name which used to
   *                   update the cluster configuration.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterUpdateParameters,
    options?: ClustersUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ClustersUpdateResponse>,
      ClustersUpdateResponse
    >
  >;
  /**
   * Update the configuration of a Service Fabric cluster resource with the specified name.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param parameters The parameters which contains the property value and property name which used to
   *                   update the cluster configuration.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterUpdateParameters,
    options?: ClustersUpdateOptionalParams
  ): Promise<ClustersUpdateResponse>;
  /**
   * Delete a Service Fabric cluster resource with the specified name.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets all Service Fabric cluster resources created or in the process of being created in the resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ClustersListByResourceGroupOptionalParams
  ): Promise<ClustersListByResourceGroupResponse>;
  /**
   * Gets all Service Fabric cluster resources created or in the process of being created in the
   * subscription.
   * @param options The options parameters.
   */
  list(options?: ClustersListOptionalParams): Promise<ClustersListResponse>;
  /**
   * If a target is not provided, it will get the minimum and maximum versions available from the current
   * cluster version. If a target is given, it will provide the required path to get from the current
   * cluster version to the target version.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster resource.
   * @param options The options parameters.
   */
  listUpgradableVersions(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersListUpgradableVersionsOptionalParams
  ): Promise<ClustersListUpgradableVersionsResponse>;
}