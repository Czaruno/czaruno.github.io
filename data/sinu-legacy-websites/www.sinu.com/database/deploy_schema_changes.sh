#!/bin/bash

host="$1"
user="$2"
pwd="$3"

mysql -u$user -p$pwd -h$host -f sinu_com <<_EOF_

#Put the scripts to execute here:

quit
_EOF_