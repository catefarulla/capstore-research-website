import { r2BaseUrl } from "@/lib/constants";

export const defaultSEO = {
  title: "Chronos",
  description:
    "Chronos is a smart watch that helps you stay on top of your health and fitness goals.",
  siteName: "Chronos",
  imageAlt: "Chronos Smart Watch",
} as const;

const ensureProtocol = (url: string) => {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
};

export const getSEOImageUrl = () => `${r2BaseUrl}/og.png`;

export const getCanonicalURL = (pathname: string, baseUrl: string) => {
  try {
    const url = ensureProtocol(baseUrl);
    return new URL(pathname, url).toString();
  } catch {
    // Fallback to a simple string concatenation if URL construction fails
    const safeUrl = ensureProtocol(baseUrl);
    const base = safeUrl.endsWith("/") ? safeUrl.slice(0, -1) : safeUrl;
    const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
    return `${base}${path}`;
  }
};
