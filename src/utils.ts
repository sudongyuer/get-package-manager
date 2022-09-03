import { existsSync } from 'fs'
import child_process from 'child_process'
import { resolve } from 'path'

export const SEMVER_REGEX = /^\d+.\d+.\d+$/

export type PM = 'npm' | 'yarn' | 'pnpm'
/**
 * Check if a path exists
 */
export function pathExists(p: string) {
  return existsSync(p)
}

export async function exec_async(...commands: string[]): Promise<string> {
  const command_string = commands.join(' ')

  return new Promise((resolve, reject) => {
    child_process.exec(command_string, (error, stdout, stderr) => {
      if (error) return reject(error)
      if (stderr) return reject(stderr.trim())

      resolve(stdout.trim())
    })
  })
}

/**
* Check if a global pm is available
*/
export function hasGlobalInstallation(pm: PM, cache: Map<any, any>): Promise<boolean> {
  const key = `has_global_${pm}`
  if (cache.has(key))
    return Promise.resolve(cache.get(key))

  return exec_async(pm, '--version')
    .then((stdout) => {
      return SEMVER_REGEX.test(stdout)
    })
    .then((value) => {
      cache.set(key, value)
      return value
    })
}

export function getTypeofLockFile(cwd = '.', cache: Map<any, any>): Promise<PM | null> {
  const key = `lockfile_${cwd}`
  if (cache.has(key))
    return Promise.resolve(cache.get(key))

  return Promise.all([
    pathExists(resolve(cwd, 'yarn.lock')),
    pathExists(resolve(cwd, 'package-lock.json')),
    pathExists(resolve(cwd, 'pnpm-lock.yaml')),
  ]).then(([isYarn, isNpm, isPnpm]) => {
    let value: PM | null = null

    if (isYarn)
      value = 'yarn'

    else if (isPnpm)
      value = 'pnpm'

    else if (isNpm)
      value = 'npm'

    cache.set(key, value)
    return value
  })
}

export async function getPackManagerVersion(pm: PM = 'npm') {
  return exec_async(pm || 'npm', '--version').then(stdout => stdout)
}

export function clearCache(cache: Map<any, any>) {
  return cache.clear()
}
