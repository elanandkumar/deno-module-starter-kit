## Deno module starter kit

## Installation
If you have `deno` already installed, no further installation is required. This is the beauty of Deno.
If not, please use `brew install deno` or follow the official documentation to get started with installation of the `deno`.

## Usage
An `example` folder is provided with the source code but code snippet for usage is here.

```TypeScript
import { getRandomQuote } from 'https://raw.githubusercontent.com/elanandkumar/deno-module-starter-kit/VERSION_NUMBER/mod.ts'

const quote = getRandomQuote();

console.log(quote.text, quote.author);
```

To run the code provide in example foler, use following command
```bash
deno run example/app.ts
```

## Test
To run the test, use the following command:

```bash
deno test
```

#### One small tip:
If you want to format your code for deno project, use following command:
```bash
deno fmt **/*.ts
```

## Resources
- [Deno official website](https://deno.land)
- [Deno documentation](https://deno.land/manual)
- [Awesome deno](https://github.com/denolib/awesome-deno)