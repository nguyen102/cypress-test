#!/bin/bash

if [ "${CI_NODE_INDEX}" -eq 1 ]
then
  echo "Deploy AppStream Enabled Environment"
  echo "Run AppStream tests"
  yarn run cypress run --spec cypress/integration/short-running.spec.js
else
  echo "Deploy AppStream Disabled Environment"
  echo "Run regular workspace tests"
  yarn run cypress run --spec cypress/integration/long-running.spec.js
fi
