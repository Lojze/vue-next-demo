<template>
  <header>
      <nav>
        <div class='nav-container'>
          <div>
            <input type='checkbox' name='slider'>
            <label class='slide' for='slider'>
              22
            </label>
          </div>
        </div>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'nav-menu'
}
</script>
<style lang='scss'>
.nav-container > div {
  margin: 5px 0;
}
.nav-container > input {
  display: none;
}

.slide {
  padding: 10px;
      position: relative;
}
</style>
