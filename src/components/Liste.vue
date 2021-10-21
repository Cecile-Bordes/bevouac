<template>
    <section class="section">
        <div class="section__inner container">
            <article :key="index" v-for="(entreprise, index) in entreprise" class="section__bevouac">
                <h2 class="title title--level1">{{ entreprise.name }}</h2>
                <h3 class="title title--level2">potentiel d'embauche : {{ entreprise.stars }}</h3>
                <p>{{ entreprise.address }}</p>
            </article>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Liste',
  data() {
        return{
            entreprise: null
        }
  },
  mounted(){
    axios
    .get('https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?departments=13,75&latitude=43.282&longitude=5.405&rome_codes_keyword_search=informatique&page=1&page_size=10&',
        {
          headers: {
            'Authorization' : 'Bearer qTY7NSGrTewaWpOMInvg-ke775c' //token à changer au bout de 30mn
          },
        })
    .then(reponse => {
      console.log(reponse);
      this.entreprise = reponse.data.companies;
    })
  },
  methods: {
  },
  components: {
  }
}
</script>

 <style scoped></style>