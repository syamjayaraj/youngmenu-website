const DEFAULT_CMS_URL = "http://127.0.0.1:1337";

export function getCmsUrl(): string {
  return (process.env.CMS_URL ?? DEFAULT_CMS_URL).replace(/\/+$/, "");
}

export function getCmsApiToken(): string | undefined {
  const token = process.env.CMS_API_TOKEN?.trim();
  return token || undefined;
}

type CmsFetchOptions = {
  searchParams?: Record<string, string | undefined>;
  revalidate?: number | false;
  tags?: string[];
};

export async function cmsFetch<T>(
  path: string,
  options: CmsFetchOptions = {}
): Promise<T | null> {
  const base = getCmsUrl();
  const url = new URL(`${base}${path.startsWith("/") ? path : `/${path}`}`);

  if (options.searchParams) {
    for (const [key, value] of Object.entries(options.searchParams)) {
      if (value !== undefined && value !== "") {
        url.searchParams.set(key, value);
      }
    }
  }

  const headers: HeadersInit = {
    Accept: "application/json",
  };

  const token = getCmsApiToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url.toString(), {
      headers,
      next: {
        revalidate: options.revalidate ?? 60,
        tags: options.tags,
      },
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[cms] request failed", res.status, url.toString(), text);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error("[cms] network error", url.toString(), error);
    return null;
  }
}
