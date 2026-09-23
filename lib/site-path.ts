const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

export function sitePath(path: string): string;
export function sitePath(path: string | undefined): string | undefined;
export function sitePath(path: string | undefined): string | undefined {
  if (!path || !basePath || !path.startsWith('/') || path.startsWith('//')) return path;
  if (path === basePath || path.startsWith(basePath + '/')) return path;
  return basePath + path;
}
