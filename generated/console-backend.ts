/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/v1/ds0/account": {
    get: operations["ConsoleBackend_GetAccount"];
    put: operations["ConsoleBackend_UpdateAccountDefaultOrganization"];
  };
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
  "/api/v1/onboarding-templates": {
    get: operations["ConsoleBackend_ListOnboardingTemplates"];
  };
  "/api/v1/resend-verification-email": {
    post: operations["ConsoleBackend_ResendVerificationEmail"];
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
    v1Account: {
      default_tenant_id?: string;
      display_name?: string;
      email?: string;
      enabled?: boolean;
      id?: string;
      personal_tenant?: components["schemas"]["v1Organization"];
      picture?: string;
      tenants?: components["schemas"]["v1Organization"][];
      user_id?: string;
    };
    v1Connection: {
      description?: string;
      name?: string;
      provider_id?: string;
    };
    v1Content: {
      description?: string;
      docs_url?: string;
      short_description?: string;
      title?: string;
    };
    v1GetAccountResponse: {
      result?: components["schemas"]["v1Account"];
    };
    v1GetTenantResponse: {
      result?: components["schemas"]["v1Tenant"];
    };
    v1GetUserResponse: {
      result?: components["schemas"]["v1User"];
    };
    v1ListOnboardingTemplatesResponse: {
      results?: components["schemas"]["v1OnboardingTemplate"][];
    };
    v1ListTenantMemberResponse: {
      results?: components["schemas"]["v1TenantMember"][];
    };
    v1OnboardingTemplate: {
      connection?: components["schemas"]["v1Connection"];
      content?: components["schemas"]["v1Content"];
      id?: string;
      manifest?: string;
      policy_instance?: components["schemas"]["v1PolicyInstance"];
    };
    v1Organization: {
      id?: string;
      name?: string;
      personal?: boolean;
    };
    v1PolicyInstance: {
      image?: string;
      name?: string;
    };
    v1ResendVerificationEmailResponse: { [key: string]: unknown };
    v1Tenant: {
      display_name?: string;
      hash?: string;
      id?: string;
      key?: string;
      properties?: { [key: string]: unknown };
    };
    v1TenantMember: {
      /** user display name */
      display_name?: string;
      /** user email */
      email?: string;
      /** account id */
      id?: string;
      /** user id (key) */
      key?: string;
      /** user picture */
      picture?: string;
      /** role in tenant */
      role?: string;
    };
    v1UpdateAccountDefaultOrganizationResponse: {
      result?: components["schemas"]["v1Account"];
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
  ConsoleBackend_GetAccount: {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1GetAccountResponse"];
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
  ConsoleBackend_UpdateAccountDefaultOrganization: {
    parameters: {
      query: {
        default_organization?: string;
      };
    };
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1UpdateAccountDefaultOrganizationResponse"];
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
  ConsoleBackend_ListOnboardingTemplates: {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ListOnboardingTemplatesResponse"];
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
  ConsoleBackend_ResendVerificationEmail: {
    responses: {
      /** A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["v1ResendVerificationEmailResponse"];
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
