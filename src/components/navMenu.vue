<template>
  <header class='masthead'>
  <div class='brand-container'>
    <a href='#'>
      <span class='brand-initials'>Es</span>
      <span class='brand-name'>Elemental Shift</span>
    </a>
  </div>
  <nav>
    <div class='nav-container'>
      <div>
        <input id='slider1' name='slider1' type='checkbox'>
        <label class='slide has-child' for='slider1'>
          <span class='element'>Bg</span>
          <span class='name'>Blog</span>
        </label>
        <div class='child-menu'>
          <a href='#'>Recent</a>
          <a href='#'>Archives</a>
          <a href='#'>Categories</a>
        </div>
      </div>
      <div>
        <a class='slide' href='#'>
          <span class='element'>Po</span>
          <span class='name'>Portfolio</span>
        </a>
      </div>
      <div>
        <input id='slider2' name='slider2' type='checkbox'>
        <label class='slide has-child' for='slider2'>
          <span class='element'>Xp</span>
          <span class='name'>Laboratory</span>
        </label>
        <div class='child-menu'>
          <a href='#'>PHP</a>
          <a href='#'>Javascript</a>
          <a href='#'>Css</a>
          <a href='#'>Ruby</a>
          <a href='#'>Python</a>
          <a href='#'>Design</a>
        </div>
      </div>
      <div>
        <a class='slide' href='#'>
          <span class='element'>Ab</span>
          <span class='name'>About</span>
        </a>
      </div>
      <div>
        <a class='slide' href='#'>
          <span class='element'>C</span>
          <span class='name'>Contact</span>
        </a>
      </div>
    </div>
  </nav>
  <div class='social-container'>
    <span>
      <a class='social-roll github' href='#'></a>
    </span>
    <span>
      <a class='social-roll twitter' href='#'></a>
    </span>
    <span>
      <a class='social-roll linkedin' href='#'></a>
    </span>
    <span>
      <a class='social-roll rss' href='#'></a>
    </span>
  </div>
</header>
</template>

<script>
export default {
  name: 'nav-menu'
}
</script>
<style lang="scss">
@function emCalc($pxWidth) {
  @return $pxWidth / 16 * 1em;
}
@mixin breakpoint($break) {
  @if $break == small {
    @media only screen and (min-width: emCalc(769)) {
      @content;
    }
  }
}
$colors: #8cc63f, #ef3724, #ffa61a, #1ab1ff, #fc1dcf;
a {
  text-decoration: none;
}
nav {
  display: table;
  position: relative;
  table-layout: fixed;
  width: 100%;
  input {
    display: none;
  }
  label {
    margin: 0;
  }
  div.nav-container {
    display: table-row;
    & > div {
      display: table-cell;
    }
    @for $i from 1 through length($colors) {
      & > div:nth-of-type(#{length($colors)}n + #{$i}) {
        & .slide,
        & a {
          border-color: nth($colors, $i);
          &:hover {
            color: darken(nth($colors, $i), 20);
          }
          & ~ .child-menu {
            background-color: lighten(nth($colors, $i), 10);
          }
        }
        & input:checked,
        .slide.active {
          & ~ label {
            color: nth($colors, $i);
          }
        }
      }
    }
  }
  a,
  label {
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }
  .slide {
    padding: 10px 10px;
    font-size: emCalc(16);
    display: block;
    color: #393939;
    border-top: 4px solid transparent;
    position: relative;
    transition-property: border-width, color;
    transition-duration: 0.1s, 0.2s;
    transition-timing-function: ease-in;
    transition-delay: 0.2s, 0s;
    span {
      text-align: left;
      display: block;
    }
    .element {
      font-size: emCalc(20);
      font-weight: 600;
      font-style: normal;
      display: block;
      line-height: 1;
    }
    .name {
      font-size: emCalc(11);
      position: relative;
    }
  }
  .has-child .name:after {
    content: "";
    width: 10px;
    height: 4px;
    background-image: url("http://www.elemental-shift.com/remote-assets/down-arrow.svg");
    display: block;
    position: absolute;
    bottom: -9px;
    left: 1px;
    background-repeat: no-repeat;
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-in;
    transform-origin: 50%, 50%;
  }
  .child-menu {
    display: block;
    position: absolute;
    max-height: 0;
    overflow: hidden;
    background-color: #393939;
    width: 100%;
    top: 65px;
    left: 0;
    z-index: 5000;
    // mouse out timing functions
    transition-property: max-height;
    transition-duration: 0.5s;
    transition-timing-function: ease-in;
    a {
      color: white;
      display: inline-block;
      padding: 15px 30px 15px 10px;
      font-size: emCalc(15);
      text-align: left7;
    }
  }
  input:checked ~ .child-menu {
    max-height: 100px;
    // mouse in time functions
    transition-property: max-height;
    transition-duration: 0.5s;
    transition-timing-function: ease-in;
  }

  input:checked ~ .has-child .name:after {
    transform: rotateX(180deg);
  }
}

nav {
  display: block;
  table-layout: auto;
  div.nav-container {
    display: block;
    & > div {
      display: block;
      margin: 5px 0;
      &:hover .slide {
        border-left-width: 55px;
        transition-delay: 0;
      }
    }
  }
  .slide {
    display: block;
    width: auto;
    border-left: solid 4px #393939;
    border-top: none;
    .element {
      line-height: 1;
    }
  }
  .child-menu {
    display: block;
    position: relative;
    top: 0;
    background-color: transparent !important;
    margin-left: 55px;
    width: auto;
    max-height: 0px;
    overflow: hidden;
    border-top: none;
    a {
      color: #393939;
      display: block;
      padding: 3px 0 3px 10px;
      font-size: emCalc(13);
    }
  }
  input:checked ~ div.child-menu {
    max-height: 120px;
  }
  input:checked ~ .slide {
    border-width: 55px;
  }
}

.masthead {
  font-family: "Open Sans", sans-serif;
  .brand-container {
    padding: 10px;
    background-color: #393939;
    a {
      color: white;
      display: inline-block;
      transition-property: all;
      transition-duration: 0.2s;
      transition-timing-function: ease-in;
      &:hover {
        color: #8cc63f;
      }
    }
  }

  .brand-initials {
    font-size: emCalc(49);
    font-weight: 700;
    font-style: normal;
    display: block;
    line-height: 42px;
  }

  .brand-name {
    font-size: emCalc(13);
    text-indent: 3px;
    display: block;
  }
}
.masthead {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  .brand-container {
    padding: 10px 0 50px 10px;
  }
  a {
    display: block;
  }
}
</style>
