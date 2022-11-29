<div align='center'>
    <br/>
    <br/>
    <img src='https://genql.dev/banner.jpg' width='420px'>
    <br/>
    <br/>
    <h3>Type safe Graphql query builder</h3>
    <h4>Write Graphql queries with type validation and auto completion</h4>
    <br/>
    <br/>
</div>

Read the [quick start guide](https://genql.dev/docs) to generate a client locally

🔥 **Features**

-   Type completion
-   Type validation
-   Easily fetch all fields in a type
-   Support subscription
-   Graphql Client built in
-   Works with any client
-   Works in node and the browser

## Example

First generate your client executing

```sh
npm i -D @genql/cli # cli to generate the client code
npm i graphql # runtime dependency
genql --schema ./schema.graphql --output ./generated
```

Then you can use your client as follow

```js
import { createClient, everything } from './generated'
const client = createClient()

client
    .query({
        countries: {
            name: true,
            code: true,
            nestedField: {
                ...everything, // same as __scalar: true
            },
        },
    })
    .then(console.log)
```

The code above will fetch the graphql query below

```graphql
query {
    countries {
        name
        code
        nestedField {
            scalarField1
            scalarField2
        }
    }
}
```

---

## Sponsors

[**Notaku**](https://notaku.so)

[![Notaku](https://notaku.so/github_banner.jpg)](https://notaku.so)

[![Vercel](https://genql.dev/vercel-logo.svg)](https://vercel.com?utm_source=genql)

---

[Licensed under MIT]().
