import envConfig from "@/common/env-config";

type GraphQLResponse<T> = {
  data: T;
  errors?: { message: string }[];
};

export const graphqlRequestBuilder =
  (endpoint: string) =>
  async <T>(
    query: string,
    variables: Record<string, string | number> = {},
    tags?: string[]
  ): Promise<T> => {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
      next: { tags },
    });

    if (!res.ok) {
      throw new Error(`Network error: ${res.status} ${res.statusText}`);
    }

    const json: GraphQLResponse<T> = await res.json();

    if (json.errors) {
      throw new Error(
        `GraphQL error: ${json.errors.map((e) => e.message).join(", ")}`
      );
    }

    return json.data;
  };

export const hashnodeRequest = graphqlRequestBuilder(
  "https://gql.hashnode.com/"
);
export const cmsRequest = graphqlRequestBuilder(envConfig.CMS_ENDPOINT);
