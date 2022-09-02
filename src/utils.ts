import { existsSync } from 'fs'

/**
 * Check if a path exists
 */
export function pathExists(p: string) {
  return existsSync(p)
}
