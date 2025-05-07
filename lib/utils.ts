import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefixes a path with the basePath when in production environment
 */
export function getAssetPath(path: string) {
  // Remove leading slash if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In production, prefix with basePath
  if (process.env.NODE_ENV === 'production') {
    return `/Suubee-Portfolios/${cleanPath}`
  }
  
  // In development, just return the path with a leading slash
  return `/${cleanPath}`
}
