#!/usr/bin/env bash
npm install -g dwtest-release-tools
npm install -g autorest
cd $3
README=$1/$2/resource-manager/readme.md
track2-codegen-automation-for-sdk-generation-pipeline --task=generateCode --use=@autorest/typescript@6.0.0-beta.14 --readme=$README
if [ $? != 0 ]; then
  exit 1
fi