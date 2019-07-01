<template>
  <div>
    <DocsHeading label="Questions réqurentes" />
    <h3 class="dividing">Comment puis-je quitter un jeu?</h3>

    <p>
      Appuyez simplement sur le joystick et appuyez sur START en même temps!
    </p>

    <h3 class="dividing">Comment puis-je rechercher spécialement un jeu?</h3>

    <p>
      Il suffit de choisir votre console et appuyez sur le bouton de sélection, et c'est parti!
    </p>

    <h3 class="dividing">Comment arrêter correctement la console?</h3>

    <p>Appuyez simplement sur Démarrer et allez dans "Quit" et cliquez sur "Power Off"!</p>

    <div>
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_16.png"/>
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_17.png"/>
    </div>

    <h3 class="dividing">Comment puis-je ajuster les paramètres ?</h3>

    <p>Appuyez simplement sur Démarrer et naviguez avec le joystick pour modifier les paramètres.</p>

    <div>
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_14.png"/>
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_15.png"/>
    </div>
  </div>
</template>
<script>
  import DocsHeading from "../../components/DocsHeading"
  import DocsImage from "../../components/DocsImage"
  export default {
    name: 'FrenchQuestions',
    components: {DocsImage, DocsHeading}
  }
</script>
