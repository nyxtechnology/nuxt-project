<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        NUXT PROJECT
      </h1>
      <h2 class="subtitle">
        {{ $t('description') }}
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api'
import Logo from '~/components/Logo.vue'

export default {
  name: 'Home',
  components: {
    Logo
  },
  setup () {
    onMounted(() => {
      console.log('called in onMounted')
    })
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.title, .subtitle {
  color: $primary-color;
}

.links {
  padding-top: 15px;
}
</style>
