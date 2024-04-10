#!/bin/bash

npx esbuild \
    --bundle src/handler.ts \
    --target=node16 \
    --format=cjs \
    --outfile=.esbuild/index.js

cd terraform

terraform apply
