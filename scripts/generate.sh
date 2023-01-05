#!/bin/bash

curl \
  -o openapi.json \
  -u "${USERNAME}:${READ_WRITE_TOKEN}" \
  -H "Accept: application/vnd.github.v3.raw" \
  https://raw.githubusercontent.com/aserto-dev/openapi-console-backend/${OPENAPI_SHA}/publish/console-backend/openapi.json
yarn openapi-typescript openapi.json --output ./generated/console-backend.ts
