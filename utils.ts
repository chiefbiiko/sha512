export interface Hash {
  hashSize: number;
  init(): Hash;
  update(msg?: Uint8Array): Hash;
  digest(msg?: Uint8Array): Uint8Array;
  hash(msg?: Uint8Array): Uint8Array;
  selftest(): boolean;
}

/**
 * Clear an array
 * @param {Uint8Array | Uint16Array | Uint32Array} Array to clear
 */
export function clear(data: Uint8Array | Uint16Array | Uint32Array): void {
  data.fill(0);
}

/**
 * Convert a byte array to hex string
 * @param {Uint8Array} bin The input byte array
 * @param {Boolean} uppercase True for upper case hex numbers
 * @return {String} Hex sting
 */
export function bin2hex(bin: Uint8Array, uppercase: boolean = false): string {
  let hex = uppercase ? '0123456789ABCDEF' : '0123456789abcdef';
  let str = '';
  for (let i = 0, len = bin.length; i < len; i++) {
    str += hex.charAt((bin[i] >>> 4) & 0x0f) + hex.charAt(bin[i] & 0x0f);
    // str += bin[i].toString(16);
  }
  return str;
}

/**
 * Convert a string (UTF-8 encoded) to a byte array
 * @param {String} str UTF-8 encoded string
 * @return {Uint8Array} Byte array
 */
export function str2bin(str: string): Uint8Array {
  str = str.replace(/\r\n/g, '\n');
  let bin = new Uint8Array(str.length * 3), p = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let c = str.charCodeAt(i);
    if (c < 128) {
      bin[p++] = c;
    } else if (c < 2048) {
      bin[p++] = (c >>> 6) | 192;
      bin[p++] = (c & 63) | 128;
    } else {
      bin[p++] = (c >>> 12) | 224;
      bin[p++] = ((c >>> 6) & 63) | 128;
      bin[p++] = (c & 63) | 128;
    }
  }
  return bin.subarray(0, p);
}
