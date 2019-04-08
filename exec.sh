#!/usr/bin/env bash
docker build -t angular-glvn2 .
docker run --env-file .env -p 3000:3000 -p 3001:3001 -it angular-glvn2
