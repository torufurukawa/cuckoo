# cuckoo

Cuckoo is a collection of Twitter post-click experience examples.
I want to make it resuable library in the future.

## Requirement

- Node v10.13.0
- npm 6.4.1

This project assumes you deploy the static site to Netlify.
Create an account and a project.

## Setup

Set your Netlify URL base, such as https://whatever.netlify.com to the environment variable `CUCKOO_HOST`.

And run

```
npm install
```

## Development

- `npm start` ......... build and run local server
- `npm run release` ... deploy as production
