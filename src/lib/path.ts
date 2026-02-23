export function normalizeBase(baseUrl: string): string {
  if (!baseUrl || baseUrl === "/") {
    return "/";
  }
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

export function stripBase(pathname: string, baseUrl: string): string {
  const base = normalizeBase(baseUrl);
  if (base === "/") {
    return pathname || "/";
  }
  if (pathname.startsWith(base)) {
    const next = pathname.slice(base.length);
    return next.length === 0 ? "/" : next;
  }
  return pathname || "/";
}

export function withBase(path: string, baseUrl: string): string {
  if (!path.startsWith("/")) {
    return path;
  }
  const base = normalizeBase(baseUrl);
  if (base === "/") {
    return path;
  }
  return path === "/" ? `${base}/` : `${base}${path}`;
}

