/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/v1/ds0/tenant": {
    get: operations["ConsoleBackend_GetTenant"];
    put: operations["ConsoleBackend_UpdateTenant"];
  };
  "/api/v1/ds0/user": {
    get: operations["ConsoleBackend_GetUser"];
  };
  "/api/v1/list-tenant-members": {
    get: operations["ConsoleBackend_ListTenantMember"];
  };
}

export interface components {
  schemas: {
    protobufAny: {
      "@type"?: string;
    } & { [key: string]: unknown };
    /**
     * @description `NullValue` is a singleton enumeration to represent the null value for the
     * `Value` type union.
     *
     *  The JSON representation for `NullValue` is JSON `null`.
     *
     *  - NULL_VALUE: Null value.
     * @default NULL_VALUE
     */
    protobufNullValue: "NULL_VALUE";
    rpcStatus: {
      /** Format: int32 */
      code?: number;
      details?: components["schemas"]["protobufAny"][];
      message?: string;
    };
    v1GetTenantResponse: {
      result?: components["schemas"]["v1Tenant"];
    };
    v1GetUserResponse: {
      result?: components["schemas"]["v1User"];
    };
    v1ListTenantMemberResponse: {
      results?: components["schemas"]["v1TenantMember"][];
    };
    v1Tenant: {
      display_name?: string;
      hash?: string;
      id?: string;
      key?: string;
      properties?: { [key: string]: unknown };
    };
    v1TenantMember: {
      display_name?: string;
      email?: string;
      id?: string;
      picture?: string;
      role?: string;
    };
    v1UpdateTenantResponse: {
      result?: components["schemas"]["v1Tenant"];
    };
    v1User: {
      display_name?: string;
      email?: string;
      hash?: string;
      id?: string;
      key?: string;
      properties?: { [key: string]: unknown };
    };
  };
}

export interface operations {
  ConsoleBackend_GetTenant: {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1GetTenantResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  ConsoleBackend_UpdateTenant: {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1UpdateTenantResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  ConsoleBackend_GetUser: {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1GetUserResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
  ConsoleBackend_ListTenantMember: {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ListTenantMemberResponse"];
        };
      };
      /** An unexpected error response. */
      default: {
        content: {
          "application/json": components["schemas"]["rpcStatus"];
        };
      };
    };
  };
}

export interface external {}
