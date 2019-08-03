<template>
  <div>
    <DocsHeading label="Le schéma de la console" />

    <p>Travail en cours ici aussi :)</p>

    <div class="docs-section">
      <div>
        La PCB est une plaque qui à elle seule supporte tous les composants !
        La PCB est une plaque qui à elle seule supporte tous les composants !

        La PCB est une plaque qui à elle seule supporte tous les composants !

        C'est juste une plaque avec des fils en cuivres pré-intégrés.
        Cela permet d'avoir un beau rendu de qualité.
        Petits tips, vous voyez souvent les cartes électroniques en vert, et bien on peut mettre les couleurs que l'on veut ! C'est juste pour protéger le cuivre....
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/composants/boutons.jpg', alt: 'lel1'}, 
          {src: 'https://static.retrobox.tech/img/composants/bouton2.jpg', alt: 'lel2'}
        ]"
      />
    </div>
  </div>
</template>
<script>
  import DocsHeading from "~/components/Docs/Heading"
  import DocsImage from "~/components/Docs/Image"
  import DocsImageSlider from "~/components/Docs/ImageSlider"
  export default {
    components: {DocsImageSlider, DocsImage, DocsHeading}
  }
</script>
