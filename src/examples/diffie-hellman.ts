import { createDiffieHellman } from 'node:crypto'
import forge from 'node-forge'

// Generate Alice's keys...
const alice = createDiffieHellman(1024)
const aliceKey = alice.generateKeys('hex')

// Generate Bob's keys...
const bob = createDiffieHellman(alice.getPrime('hex'), 'hex', alice.getGenerator())
const bobKey = bob.generateKeys('hex')

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey, 'hex')
const bobSecret = bob.computeSecret(aliceKey, 'hex')

const salt = 'salt'
const numIterations = 10
const key1 = forge.pkcs5.pbkdf2(aliceSecret.toString(), salt, numIterations, 16)
const iv = forge.random.getBytesSync(16)

const cipher = forge.cipher.createCipher('AES-CBC', key1)
const someBytes = 'Hello World'
cipher.start({ iv })
cipher.update(forge.util.createBuffer(someBytes))
cipher.finish()
const encrypted = cipher.output
console.log('Encrypted: ', encrypted.toHex())

const key2 = forge.pkcs5.pbkdf2(bobSecret.toString(), salt, numIterations, 16)

const decipher = forge.cipher.createDecipher('AES-CBC', key2)
decipher.start({ iv })
decipher.update(encrypted)
decipher.finish()
console.log('Decrypted: ', decipher.output.toString())
