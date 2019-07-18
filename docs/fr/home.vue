<template>
  <div>
    <div class="docs-section">
      <div>

        <h2>Bienvenue !</h2>

        La RetroBox est une console portative, open source qui tourne sur RetroPie, et vous permet de rejouer à tous les jeux de votre enfance, avec son autonomie d'environ 7 heures, vous ne saurez plus vous arrêtez !

        <br>

        <h3>Age requis</h3>

        Selon nos estimations un enfant de 13 ans avec un peu d'aide d'un adulte peut être capable de comprendre, de monter soit même sa console. Mais en moyenne cela reste <b>13 ans et plus</b>.

        Temps de construction estimé : entre <b>5 heures et 5h30</b> Le temps de construction varie entre les personnes

      </div>

      <DocsImage
        src="https://static.retrobox.tech/img/about/RETROBOX1.png" />
    </div>

    <br>

    <div class="docs-section">
      <div>

        <h3>Si vous avez déjà ces compétences pour monter une RetroBox, c'est plus que parfait !</h3>

        <ul>
          <li>
            Quelques bases en soudure (Si vous averz déjà fait quelques systèmes éléctroniques)
          </li>
          <li>
            Quelques connaissances pour reconnaitre la base des composants
          </li>
        </ul>

        <br>

        Si vous n'avez pas ses compétences, pas de problèmes ! Vous apprendrez déjà pas mal de choses ici, mais le si vous les avez vous irez bien plus vite !

        <h3>Qu'apprenez-vous avec Retrobox ?</h3>

        RetroBox existe pour les personnes ayant envie d'apprendre les bases d'électronique, de leur donner envie de faire des projets, mais avec RetroBox vos apprenez essentiellement :

        <ul>
          <li>Comment souder</li>
          <li>La base de l'électronique et les fonctions des composants</li>
          <li>Des notions Linux</li>
          <li>La création de vos propres jeux</li>
          <li>L'existence de certains jeux... inconnue au grand public</li>
        </ul>

      </div>
      <DocsImage
        src="https://static.retrobox.tech/img/docs/home/pcb_render_top.png" />
    </div>
    <br>

    <h3>Fonctionnalitées</h3>

    <ul>
      <li>
        Possibilité d'installer NOOBS ou Raspbian, avec le support tactile.
      </li>
      <li>
        Émulez jusqu'à 55 consoles avec RetroPie
      </li>
      <li>
        Une grande autonomie et chargement rapide
      </li>
      <li>
        Ampli 3W, pour avoir le meilleur son !
      </li>
      <li>
        Portative, et open-source !
      </li>
      <li>
        Espace illimité !
      </li>
      <li>
        Un wiki ultra fourni
      </li>
      <li>
        Un staff toujours à votre aide
      </li>
    </ul>

    <div class="docs-alert info">
      <i class="icon fas fa-shopping-cart"></i>
      <p>Alors ? Qu'attendez vous ?</p>
    </div>

  </div>
</template>

<script>
  import DocsImage from "../../components/DocsImage"
  export default {
    name: 'FrenchHome',
    components: {DocsImage}
  }
</script>
