<template>
  <div>

    <DocsHeading label="Quelques notions avant de commencer..."/>

    <p>
      Vous avez tout lu, bon travail!
    </p>

    <p>Certains outils et équipements sont nécessaires pour l'assemblage et ils ne sont pas inclus dans le kit.</p>

    <p>Ces outils sont utiles lors de l’assemblage, de la fixation ou de la modification de d'objets électroniques.</p>

    <p>
      Beaucoup d’entre eux sont disponibles dans les supermarchés ou dans certains magasins d’électronique de bricolage
      professionnels tels que Radio Shack, Adafruit, Sparkfun, Amazon, eBay….
    </p>
    <br>

    <DocsHeading label="Les outils nécessaires à l'assemblage"/>

    <h3 class="dividing">Fer à souder</h3>

    <div class="docs-section">
      <div>
        Et oui pour souder, il faut un....... fer à souder ! Un des plus basiques suffit, comme par exemple celui :

        <a
          href="https://www.amazon.fr/Electrique-R%C3%A9gulateur-Temp%C3%A9rature-Diff%C3%A9rents-Dessouder/dp/B072XFQS18/ref=sr_1_9?ie=UTF8&qid=1529872099&sr=8-9&keywords=fer+%C3%A0+souder">
          Kit de fer à souder
        </a><br>

        C'est un kit avec tous les élements nécessaires.

      </div>
      <DocsImage src="https://static.retrobox.tech/img/materials/SOLDERINGIRON.png"/>
    </div>

    <h3 class="dividing">Etain</h3>

    <div class="docs-section">
      <div>
        Pour compléter le fer à souder, il vous faut de l'étain, si vous avez acheté le kit, il y en a déjà de fournit
        dedans.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/materials/TIN.png"/>
    </div>

    <h3 class="dividing">Pince coupante</h3>

    <div class="docs-section">
      <div>
        Pour découper ce qui reste des composants une fois soudés. Cette pince est spécialement prévue pour
        l'éléctronique, elle est fine, précise et pas chère :p
      </div>
      <DocsImage src="https://static.retrobox.tech/img/materials/PLATO.png"/>
    </div>

    <h3 class="dividing">Troisième main</h3>

    <div class="docs-section">
      <div>
        Alors la troisième main n'est pas du tout obliger, seulement pour les apprentis éléctroniciens c'est pratique
        quand la PCB ne bouge pas lorsque l'ont soude dessus...
      </div>
      <DocsImage src="https://static.retrobox.tech/img/materials/THIRDHAND.png"/>
    </div>

    <h3 class="dividing">Tournevis cruciforme</h3>

    <div class="docs-section">
      <div>
        Tout bon maker se doit d'avoir un tournevis cruciforme chez lui ! Il permet de visser le plexiglass et les
        entretoises ensemble.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/materials/SCREWDRIVER.png"/>
    </div>

    <div class="docs-alert info">
      <i class="icon fas fas fa-forward"></i>
      <p>Vous enfin prêt pour l'assemblage !</p>
    </div>

  </div>
</template>
<script>
  import DocsHeading from "../../components/DocsHeading"
  import DocsImage from "../../components/DocsImage"

  export default {
    name: 'FrenchTools',
    components: {DocsImage, DocsHeading}
  }
</script>
