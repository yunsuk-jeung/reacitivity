#!/bin/bash

PROJECT_FOLDER="./"
find $PROJECT_FOLDER -name "*.csproj" -exec sed -i '' 's/net8.0/net9.0/g' {} \;
echo "Target framework updated to net9.0"

