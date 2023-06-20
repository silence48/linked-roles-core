import browserEnv from 'browser-env'
const fetch = require('node-fetch')
const { subtle, randomUUID, getRandomValues } = require('node:crypto').webcrypto
// const { randomBytes, createCipheriv } = require('node:crypto')
Object.defineProperty(global, 'crypto', {
    value: { subtle, randomUUID, getRandomValues }
})
Object.defineProperty(global, 'fetch', {
    value: fetch
})
browserEnv(['crypto', 'fetch']);