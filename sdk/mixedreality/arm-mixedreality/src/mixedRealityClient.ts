/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  SpatialAnchorsAccountsImpl,
  RemoteRenderingAccountsImpl,
  ObjectAnchorsAccountsImpl
} from "./operations";
import {
  Operations,
  SpatialAnchorsAccounts,
  RemoteRenderingAccounts,
  ObjectAnchorsAccounts
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  MixedRealityClientOptionalParams,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityLocalOptionalParams,
  CheckNameAvailabilityLocalResponse
} from "./models";

export class MixedRealityClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the MixedRealityClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g.
   *                       00000000-0000-0000-0000-000000000000)
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: MixedRealityClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MixedRealityClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-mixedreality/4.1.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-03-01-preview";
    this.operations = new OperationsImpl(this);
    this.spatialAnchorsAccounts = new SpatialAnchorsAccountsImpl(this);
    this.remoteRenderingAccounts = new RemoteRenderingAccountsImpl(this);
    this.objectAnchorsAccounts = new ObjectAnchorsAccountsImpl(this);
  }

  /**
   * Check Name Availability for local uniqueness
   * @param location The location in which uniqueness will be verified.
   * @param checkNameAvailability Check Name Availability Request.
   * @param options The options parameters.
   */
  checkNameAvailabilityLocal(
    location: string,
    checkNameAvailability: CheckNameAvailabilityRequest,
    options?: CheckNameAvailabilityLocalOptionalParams
  ): Promise<CheckNameAvailabilityLocalResponse> {
    return this.sendOperationRequest(
      { location, checkNameAvailability, options },
      checkNameAvailabilityLocalOperationSpec
    );
  }

  operations: Operations;
  spatialAnchorsAccounts: SpatialAnchorsAccounts;
  remoteRenderingAccounts: RemoteRenderingAccounts;
  objectAnchorsAccounts: ObjectAnchorsAccounts;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityLocalOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.MixedReality/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.checkNameAvailability,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
