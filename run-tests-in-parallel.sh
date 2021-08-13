#!/bin/bash

if [ "${TEST_ENV}" = "AppStream_Enabled" ]
then
  echo "Run AppStream tests"
  yarn run cypress run --spec cypress/integration/AppStream_Enabled.spec.js
  return $?
else
  echo "Run regular workspace tests"
  yarn run cypress run --spec cypress/integration/AppStream_Disabled.spec.js
  return $?
fi
