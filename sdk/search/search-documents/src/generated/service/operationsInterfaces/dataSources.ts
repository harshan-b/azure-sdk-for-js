/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SearchIndexerDataSource,
  DataSourcesCreateOrUpdateOptionalParams,
  DataSourcesCreateOrUpdateResponse,
  DataSourcesDeleteOptionalParams,
  DataSourcesGetOptionalParams,
  DataSourcesGetResponse,
  DataSourcesListOptionalParams,
  DataSourcesListResponse,
  DataSourcesCreateOptionalParams,
  DataSourcesCreateResponse
} from "../models";

/** Interface representing a DataSources. */
export interface DataSources {
  /**
   * Creates a new datasource or updates a datasource if it already exists.
   * @param dataSourceName The name of the datasource to create or update.
   * @param dataSource The definition of the datasource to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    dataSourceName: string,
    dataSource: SearchIndexerDataSource,
    options?: DataSourcesCreateOrUpdateOptionalParams
  ): Promise<DataSourcesCreateOrUpdateResponse>;
  /**
   * Deletes a datasource.
   * @param dataSourceName The name of the datasource to delete.
   * @param options The options parameters.
   */
  delete(
    dataSourceName: string,
    options?: DataSourcesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieves a datasource definition.
   * @param dataSourceName The name of the datasource to retrieve.
   * @param options The options parameters.
   */
  get(
    dataSourceName: string,
    options?: DataSourcesGetOptionalParams
  ): Promise<DataSourcesGetResponse>;
  /**
   * Lists all datasources available for a search service.
   * @param options The options parameters.
   */
  list(
    options?: DataSourcesListOptionalParams
  ): Promise<DataSourcesListResponse>;
  /**
   * Creates a new datasource.
   * @param dataSource The definition of the datasource to create.
   * @param options The options parameters.
   */
  create(
    dataSource: SearchIndexerDataSource,
    options?: DataSourcesCreateOptionalParams
  ): Promise<DataSourcesCreateResponse>;
}