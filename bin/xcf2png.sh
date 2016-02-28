#!/bin/bash
IFS='
'
rm out/24px/*
rm out/32px/*
rm out/48px/*

rm -rf out
for i in 24 32 48; do
    mkdir -p out/${i}px
    mkdir -p out/${i}px_tmp
done

for i in $(ls orig/*.xcf); do
    echo "XXX $i XXX"
    name="$(basename "$i" .xcf)"
    layers="$(xcfinfo "$i" | tail -n +2 | cut -d ' ' -f 5-)"
    for suffix in $layers; do
        code="$(echo "$suffix" | sed 's/^(\([^)]\+\)).*/\1/g')"
        rest="$(echo "$suffix" | sed 's/^(\([^)]\+\))//g')"
        echo "CODE [$code]  REST [${name}${rest}]"
        xcf2png "$i" -C -o "out/${code}_tmp/${name}${rest}.png" "$suffix"
    done
    for code_out in 24px 32px 48px; do
        if [ "$(echo "$layers" | wc -l)" == "3" ]; then
            cp "out/${code_out}_tmp/${name}${rest}.png" "out/${code_out}/${name}.png"
        else
            ../png2apng/png2apng "out/${code_out}/${name}.png" out/${code_out}_tmp/${name}_[0-9]*.png
        fi
    done
done
