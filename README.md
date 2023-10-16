## Deployment

Run this command `without the @latest` and choose **`javascript`** and install any `Netlify Function`

```bash
npx create-remix --template netlify/remix-template
```

##### remix.config.js

```js
future: {
    v2_normalizeFormMethod: true,
    // ...
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_dev: true
}
```

##### Start

```bash
npm run dev
```
