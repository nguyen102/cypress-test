#!/bin/bash

if [ "${TEST_ENV}" = "AppStream_Enabled" ]
then
  echo "Deploy AppStream Enabled Environment"
  echo "Run AppStream tests"
#  yarn run cypress run --spec cypress/integration/AppStream_Enabled.spec.js
else
  echo "Deploy AppStream Disabled Environment"
  echo "Run regular workspace tests"
#  yarn run cypress run --spec cypress/integration/long-AppStream_Disabled.spec.js
fi
