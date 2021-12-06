/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  WorkspacePurgeBody,
  WorkspacePurgePurgeOptionalParams,
  WorkspacePurgePurgeResponse,
  WorkspacePurgeGetPurgeStatusOptionalParams,
  WorkspacePurgeGetPurgeStatusResponse
} from "../models";

/** Interface representing a WorkspacePurge. */
export interface WorkspacePurge {
  /**
   * Purges data in an Log Analytics workspace by a set of user-defined filters.
   *
   * In order to manage system resources, purge requests are throttled at 50 requests per hour. You
   * should batch the execution of purge requests by sending a single command whose predicate includes
   * all user identities that require purging. Use the in operator to specify multiple identities. You
   * should run the query prior to using for a purge request to verify that the results are expected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param body Describes the body of a request to purge data in a single table of an Log Analytics
   *             Workspace
   * @param options The options parameters.
   */
  purge(
    resourceGroupName: string,
    workspaceName: string,
    body: WorkspacePurgeBody,
    options?: WorkspacePurgePurgeOptionalParams
  ): Promise<WorkspacePurgePurgeResponse>;
  /**
   * Gets status of an ongoing purge operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param purgeId In a purge status request, this is the Id of the operation the status of which is
   *                returned.
   * @param options The options parameters.
   */
  getPurgeStatus(
    resourceGroupName: string,
    workspaceName: string,
    purgeId: string,
    options?: WorkspacePurgeGetPurgeStatusOptionalParams
  ): Promise<WorkspacePurgeGetPurgeStatusResponse>;
}