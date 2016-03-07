/*
    Copyright (C) 2016 Matteo Nastasi <nastasi@alternativeoutput.it>

    This file is part of recursor.

    png2apng is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Foobar is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
*/

function Recursor(x, y, name) {
    var body = document.getElementsByTagName("body");
    this.cursor = document.createElement("img");
    this.cursor.style.position = "absolute";
    this.cursor.style.pointerEvents = "none";
    this.cursor.src = Recursor.cursors[name].src;
    this.cursor.style.left = this.x = x;
    this.cursor.style.top = this.y = y;
    this.name = name;
    body[0].appendChild(this.cursor);
}

Recursor.cursors = 
    { "cell": { src: "out/24px/plus.png",   dx: 11, dy: 11 },
      "wait": { src: "out/24px/watch.png",  dx: 0, dy: 0 },
      "not-allowed": { src: "out/24px/crossed_circle.png",  dx: 11, dy: 11 },
      "text": { src: "out/24px/xterm.png",  dx: 11, dy: 11 },
      "crosshair": { src: "out/24px/crosshair.png",  dx: 11, dy: 11 },
      "wait": { src: "out/24px/watch.png",  dx: 11, dy: 11 },
      "no-drop": { src: "out/24px/circle.png", dx: 4, dy: 5 },
      "none": { src: "out/24px/none.png",  dx: 1, dy: 1 },
      "copy": { src: "out/24px/copy.png",  dx: 4, dy: 5 },
      "default": { src: "out/24px/left_ptr.png",  dx: 7, dy: 4 },
      "grabbing": { src: "out/24px/grabbing.png", dx: 13, dy: 11 },
      "all-scroll": { src: "out/24px/grabbing.png", dx: 13, dy: 11 },
      "move": { src: "out/24px/grabbing.png",  dx: 13, dy: 11 },
      "pointer": { src: "out/24px/hand2.png", dx: 9, dy: 5 },
      "help": { src: "out/24px/question_arrow.png",  dx: 12, dy: 21 },
      "s-resize": { src: "out/24px/bottom_side.png",  dx: 11, dy: 18 },
      "nw-resize": { src: "out/24px/top_left_corner.png",  dx: 5, dy: 5 },
      "n-resize": { src: "out/24px/top_side.png",  dx: 12, dy: 5 },
      "ns-resize": { src: "out/24px/sb_v_double_arrow.png", dx: 11, dy: 11 },
      "row-resize": { src: "out/24px/sb_v_double_arrow.png",  dx: 11, dy: 11 },
      "ew-resize": { src: "out/24px/sb_h_double_arrow.png",  dx: 11, dy: 11 },
      "col-resize": { src: "out/24px/sb_h_double_arrow.png",  dx: 11, dy: 11 },
      "w-resize": { src: "out/24px/left_side.png",  dx: 7, dy: 13 },
      "e-resize": { src: "out/24px/right_side.png",  dx: 20, dy: 13 },
      "sw-resize": { src: "out/24px/bottom_left_corner.png",  dx: 4, dy: 20 },
      "se-resize": { src: "out/24px/bottom_right_corner.png",  dx: 20, dy: 20 },
      "ne-resize": { src: "out/24px/top_right_corner.png",  dx: 18, dy: 5 },
      "nesw-resize": { src: "out/24px/fd_double_arrow.png",  dx: 11, dy: 11 },
      "nwse-resize": { src: "out/24px/bd_double_arrow.png",  dx: 11, dy: 11 },
      "progress": { src: "out/24px/left_ptr_watch.png",  dx: 5, dy: 4 },
      
      "grab": { src: "out/24px/todo.png",  dx: 0, dy: 0 },
      "vertical-text": { src: "out/24px/todo.png",  dx: 0, dy: 0 },
      "zoom-in": { src: "out/24px/todo.png",  dx: 0, dy: 0 },
      "zoom-out": { src: "out/24px/todo.png",  dx: 0, dy: 0 },
      "context-menu": { src: "out/24px/todo.png",  dx: 0, dy: 0 },
      "alias": { src: "out/24px/todo.png",  dx: 0, dy: 0 },
      
    };

Recursor.prototype = {
    cursor: null,
    x: 0,
    y: 0,
    src: null,
    name: null,

    move: function (x, y) {
        // console.log("xx" + this.name);
        this.x = x;
        this.y = y;
        this.cursor.style.left = this.x + 20 - Recursor.cursors[this.name].dx;
        this.cursor.style.top  = this.y + 20 - Recursor.cursors[this.name].dy;
    },

    img_set(name) {
        console.log("img_set name: " + name);
        this.name = name;
        this.src = Recursor.cursors[name].src;
        this.cursor.src = Recursor.cursors[name].src;
        this.move(this.x, this.y);
    },
    
    img_get() {
        return (this.name);
    },

    src_get() {
        return (this.src);
    }
}
