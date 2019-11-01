<template>
  <div>
    <DocsHeading label="Questions réqurentes" />
    <h3 class="dividing">Comment puis-je quitter un jeu?</h3>

    <p>
      Appuyez simplement sur le joystick (oui le joystick possède un bouton) et appuyez sur Start en même temps !
    </p>

    <h3 class="dividing">Comment puis-je rechercher spécialement un jeu?</h3>

    <p>
      Il suffit de choisir votre console et appuyez sur le bouton de sélection, et c'est parti !
    </p>

    <h3 class="dividing">Comment arrêter correctement la console?</h3>

    <p>Appuyez simplement sur Start et allez dans "Quit" et cliquez sur "Power Off" !</p>

    <div class="flex justify-center md:justify-between flex-wrap w-3/4 m-auto">
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_16.png"/>
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_17.png"/>
    </div>

    <h3 class="dividing">Comment puis-je ajuster les paramètres ?</h3>

    <p>Appuyez simplement sur Start et naviguez avec le joystick pour modifier les paramètres.</p>

    <div class="flex justify-center md:justify-between flex-wrap w-3/4 m-auto">
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_14.png"/>
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_15.png"/>
    </div>

    <h3 class="dividing">Comment changer le joystick de ma console ?</h3>

    <p>Je viens d'acheter un joystick et je sais pas comment le remplacer ? Il suffit de tirer doucement sur le joystick de votre console (pas trop non plus) et il va se retirer. Vous pouvez donc le remplacer.</p>

    <div class="flex justify-center md:justify-between flex-wrap w-3/4 m-auto">
      <DocsImage src="https://static.retrobox.tech/img/composants/joystick.jpg"/>
    </div>

    <h3 class="dividing">Comment changer de carte SD sur ma console ?</h3>

    <p>Je n'avais plus d'espace sur la précedente carte SD ? Il ya deux solutions pour cela :</p>
    <br>
    <ul>
      <li>Vous pouvez utiliser un logiciel (comme Win32 Disk imager) pour clone votre ancienne carte SD et dans ce cas-là vous pourrez garder toutes vos anciennes données</li>
      <li>Ou vous pouvez réinstaller de zéro votre console, pour cela je vous invite à lire la documentation dans l'onglet installation</li>
    </ul>

  </div>
</template>
<script>
  import DocsHeading from "~/components/Docs/Heading"
  import DocsImage from "~/components/Docs/Image"
  export default {
    name: 'FrenchQuestions',
    components: {DocsImage, DocsHeading}
  }
</script>
