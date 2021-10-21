<template>
  <div id="app">
    <header role="banner" aria-label="Entête de page" class="header">
        <picture class="header__logo">
            <img loading="lazy" 
                  srcset="@/assets/img/LogoBevouacBLEU.png, @/assets/img/LogoBevouacBLEU.png 2x" 
                  src="@/assets/img/LogoBevouacBLEU.png" alt="Logo Bevouac" width="155" height="50" />
        </picture>
    </header>
    <main role="main" aria-label="Contenu principal" class="main__content">
        <h1 class="title">Test Bevouac : Entreprises établie à Marseille ou à Paris et recrutant en "informatique"</h1>
        <liste></liste>
    </main>
    <footer role="contentinfo"></footer>
  </div>
</template>

<script>
import Liste from './components/Liste.vue'

export default {
  name: 'App',
  components: {
      'liste' : Liste
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style></style>
