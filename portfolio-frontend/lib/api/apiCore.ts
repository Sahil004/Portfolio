type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type ApiOptions = {
  method?: Method;
  body?: Record<string, unknown>;
  headers?: HeadersInit;
  cache?: RequestCache;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export async function apiClient<T>(
  endpoint: string,
  options: ApiOptions = {},
): Promise<T> {
  const { method = "GET", body, headers = {} } = options;

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        ...(body instanceof FormData
          ? {}
          : { "Content-Type": "application/json" }),
        ...headers,
      },
      body:
        method !== "GET" && body
          ? body instanceof FormData
            ? body
            : JSON.stringify(body)
          : undefined,
    });

    const contentType = res.headers.get("content-type");

    const data = contentType?.includes("application/json")
      ? await res.json()
      : await res.text();

    if (!res.ok) {
      throw {
        status: res.status,
        message: data?.detail || data?.message || "Something went wrong",
        data,
      };
    }

    return data as T;
  } catch (error: unknown) {
    const apiError = error as {
      status?: number;
      message?: string;
      data?: unknown;
    };

    console.error("API Error:", error);

    throw {
      status: apiError.status || 500,
      message: apiError.message || "Unexpected error",
      data: apiError.data || null,
    };
  }
}
