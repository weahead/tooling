#!/bin/sh

if [ ! -f "${INIT_CWD}/jsconfig.json" ]; then
  echo '{\n  "compilerOptions": {\n    "target": "es6",\n    "module": "commonjs",\n    "resolveJsonModule": true\n  }\n}' >"${INIT_CWD}/jsconfig.json"
fi
