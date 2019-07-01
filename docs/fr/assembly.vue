<template>
  <div>
    <DocsHeading label="Souder les composants" />

    <div class="docs-section">
      <div>
        <b>Quelques tips avant de souder :</b>
        <br><br>
        <p>
          Nous vous conseillons plusieurs vidéos avant de vous lancer pour avoir les bases, seulement dans le cas ou vous
          n'avez jamais touché à un fer à souder.
        </p>
        <br>
        <ul>
          <li>
            <a href="https://learn.adafruit.com/adafruit-guide-excellent-soldering/common-problems">Adafruit Soledring Problems</a>
          </li>
          <li>
            <a href="http://www.instructables.com/id/How-to-solder/">Tuto How To Solder</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=VxMV6wGS3NY/">Vidéo de GreatScott! How to Solder</a>
          </li>
        </ul>
      </div>
      <DocsImage src="https://static.retrobox.tech/img/assemblage/soldering.jpg"/>
    </div>
    <br>
    Voici une image sur la façon de souder :

    <DocsImage src="https://static.retrobox.tech/img/assemblage/solderingtips_fr.png" />

    <h3 class="dividing">**Etape une**</h3>

    <div class="docs-section">
      Pour commencer, souder "nom composant", c'est le plus simple...
      <DocsImage src="https://static.retrobox.tech/img/composants/BATTERY.png" />
    </div>
  </div>
</template>
<script>
  import DocsHeading from "../../components/DocsHeading"
  import DocsImage from "../../components/DocsImage"
  export default {
    components: {DocsImage, DocsHeading}
  }
</script>
