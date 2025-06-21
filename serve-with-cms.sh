#!/bin/bash

echo "Starting Jekyll and Decap CMS local servers..."

# Add Ruby 3.1 to PATH
export PATH="/usr/local/opt/ruby@3.1/bin:$PATH"

# Function to kill background processes on exit
cleanup() {
    echo -e "\nShutting down servers..."
    kill $JEKYLL_PID $DECAP_PID 2>/dev/null
    exit
}

# Set up cleanup on script exit
trap cleanup EXIT INT TERM

# Start Decap CMS local backend server in background
echo "Starting Decap CMS local backend server..."
npx decap-server &
DECAP_PID=$!

# Give the CMS server a moment to start
sleep 2

# Start Jekyll server in background
echo "Starting Jekyll development server..."
bundle exec jekyll serve --livereload &
JEKYLL_PID=$!

echo -e "\n✅ Servers are running:"
echo "   - Jekyll site: http://localhost:4000"
echo "   - Decap CMS: http://localhost:4000/admin/"
echo -e "\nPress Ctrl+C to stop both servers.\n"

# Wait for background processes
wait