#!/bin/bash

# Add Ruby 3.1 to PATH
export PATH="/usr/local/opt/ruby@3.1/bin:$PATH"

# Run Jekyll development server with live reload
bundle exec jekyll serve --livereload