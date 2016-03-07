#!/bin/bash
#   Copyright (C) 2016 Matteo Nastasi <nastasi@alternativeoutput.it>
#
#   This file is part of recursor.
#
#   png2apng is free software: you can redistribute it and/or modify
#   it under the terms of the GNU General Public License as published by
#   the Free Software Foundation, either version 3 of the License, or
#   (at your option) any later version.
#
#   Foobar is distributed in the hope that it will be useful,
#   but WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#   GNU General Public License for more details.
#
#   You should have received a copy of the GNU General Public License
#   along with Foobar.  If not, see <http://www.gnu.org/licenses/>.

attrlist="alias all-scroll auto cell context-menu col-resize copy crosshair default e-resize ew-resize grab grabbing help move n-resize ne-resize nesw-resize ns-resize nw-resize nwse-resize no-drop none not-allowed pointer progress row-resize s-resize se-resize sw-resize text URL vertical-text w-resize wait zoom-in zoom-out initial inherit"

ct=0
for i in $attrlist; do
    if [ $((ct % 4)) -eq 0 ]; then
        echo "<tr>"
    fi 
    echo "<td><div style=\"width: 200px; height: 100px; background-color: #f0e0e0; cursor: $i;\">$i</div></td>"
    if [ $((ct % 4)) -eq 3 ]; then
        echo "</tr>"
    fi 
    ct=$((ct + 1))
done
