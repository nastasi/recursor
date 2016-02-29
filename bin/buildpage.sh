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
