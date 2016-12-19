/* global module */
module.exports = (
`/**
 * Multi-line comment
 */

.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  display: block;
  color: #333;
}

.selector-a,
.selector-b {
  padding: 10px !important;
  top: calc(calc(1em * 2) / 3);
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width >= 60em) {

  .selector {
    transform: translate(1, 1) scale(3);
  }
}

@media (min-orientation: portrait), projection and (color) {

  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, arial, sans-serif;
  }
}

@media screen and screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {

  .selector {
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        #fff 25px,
        rgba(255, 255, 255, 1) 50px
      );
    box-shadow:
      0 1px 1px #000,
      0 1px 0 #fff,
      2px 2px 1px 1px #ccc inset;
    height: 10rem;
    margin: 10px;
    margin-bottom: 5px;
  }

  .selector::after {
    background-image: url("x.svg");
    content: "→";
  }
}

`);
