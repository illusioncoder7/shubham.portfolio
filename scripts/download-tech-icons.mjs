#!/usr/bin/env node
/**
 * Download tech stack icons to public/tech-icons/
 * Run: node scripts/download-tech-icons.mjs
 */
import { mkdir, writeFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'tech-icons')

const ICONS = [
  { file: 'solidity.svg', url: 'https://skillicons.dev/icons?i=solidity' },
  { file: 'typescript.svg', url: 'https://skillicons.dev/icons?i=ts' },
  { file: 'javascript.svg', url: 'https://skillicons.dev/icons?i=js' },
  { file: 'python.svg', url: 'https://skillicons.dev/icons?i=python' },
  { file: 'rust.svg', url: 'https://skillicons.dev/icons?i=rust' },
  { file: 'nodejs.svg', url: 'https://skillicons.dev/icons?i=nodejs' },
  { file: 'oracle.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { file: 'java.svg', url: 'https://skillicons.dev/icons?i=java' },
  { file: 'aws.svg', url: 'https://skillicons.dev/icons?i=aws' },
  { file: 'elasticsearch.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
  { file: 'mongodb.svg', url: 'https://skillicons.dev/icons?i=mongodb' },
  { file: 'redis.svg', url: 'https://skillicons.dev/icons?i=redis' },
  { file: 'zk.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { file: 'ethereum.svg', url: 'https://cdn.simpleicons.org/ethereum/627EEA' },
  /* Aleo: download from https://aleo.org/brand/ (aleo-logos.zip), extract SVG/secondary-icon-dark.svg as aleo.svg */
  { file: 'solana.svg', url: 'https://cdn.simpleicons.org/solana/9945FF' },
  { file: 'sodax.svg', url: 'https://www.sodax.com/favicon.svg' },
  { file: 'celo.svg', url: 'https://logotyp.us/file/celo.svg' },
  { file: 'harmony.svg', url: 'https://logotyp.us/file/harmony.svg' },
  { file: 'polygon.svg', url: 'https://cdn.simpleicons.org/polygon/8247E5' },
  { file: 'stacks.svg', url: 'https://logotyp.us/file/stacks.svg' },
  { file: 'android.svg', url: 'https://cdn.simpleicons.org/android/3DDC84' },
]

async function download(url) {
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) throw new Error(`${url} => ${res.status}`)
  return res.text()
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  for (const { file, url } of ICONS) {
    try {
      const body = await download(url)
      const path = join(OUT_DIR, file)
      await writeFile(path, body, 'utf8')
      console.log('OK', file)
    } catch (e) {
      console.error('FAIL', file, e.message)
    }
  }
}

main()
