import forge from 'node-forge'
import log from '../log'

const key = forge.random.getBytesSync(32)
const iv = forge.random.getBytesSync(32)

const cipher = forge.cipher.createCipher('AES-CBC', key)
const someBytes = 'My name is David!'
cipher.start({ iv })
cipher.update(forge.util.createBuffer(someBytes))
cipher.finish()
const encrypted = cipher.output
// outputs encrypted hex
log('Encrypted: ', encrypted.toHex())

// decrypt some bytes using CBC mode
// (other modes include: CFB, OFB, CTR, and GCM)
const decipher = forge.cipher.createDecipher('AES-CBC', key)
decipher.start({ iv })
decipher.update(encrypted)
decipher.finish() // check 'result' for true/false
// outputs decrypted hex
log('Decrypted: ', decipher.output.toString())
