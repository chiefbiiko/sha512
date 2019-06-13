# sha512

[![Travis](http://img.shields.io/travis/chiefbiiko/sha512.svg?style=flat)](http://travis-ci.org/chiefbiiko/sha512) [![AppVeyor](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/sha512?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/sha512)

SHA2-512 for [`deno`](https://deno.land).

## Usage

``` ts
import { sha512 } from "https://denopkg.com/chiefbiiko/sha512/mod.ts";

console.log('SHA2-512 of ""', sha512(""))
```

## API

#### `new SHA512()`

Creates a new SHA2-512 instance.

#### `SHA512#init(): SHA512`

Initializes a hash instance.

#### `SHA512#update(msg?: string | Uint8Array, inputEncoding?: string): SHA512`

Updates a hash with additional data. `inputEncoding` can be one of `"utf8"`, `"hex"`, or `"base64"`.

#### `SHA512#digest(outputEncoding?: string): string | Uint8Array`

Get a hash digest. `outputEncoding` can be one of `"utf8"`, `"hex"`, or `"base64"`. If it is omitted a `Uint8Array` is returned.

#### `sha512(msg: string | Uint8Array, inputEncoding?: string, outputEncoding?: string): string | Uint8Array`

Convenience function for hashing singular data.

## License

[MIT](./LICENSE)
