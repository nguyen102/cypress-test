#!/bin/bash

if [ "${TEST_ENV}" = "AppStream_Enabled" ]
then
  echo "Deploy AppStream Enabled Environment"
else
  echo "Deploy AppStream Disabled Environment"
fi
