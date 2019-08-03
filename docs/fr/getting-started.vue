<template>
  <div>
    <DocsHeading
      label="Achetez une RetroBox"
    />

    Pour commander une RetroBox avec quelques accessoires, dirigez-vous vers <nuxt-link to="/shop">la boutique</nuxt-link>.

    Pendant que vous attendez que votre RetroBox arrive, vous pouvez commencer a regrouper le matériel nécessaire pour le montage de la console et lire le manuel.

    Temps estimé au montage <b>5h ~ 5h30</b>

    <br><br>

    <DocsHeading
      label="Première étape: Ouverture de la boîte et vérification"
    />

    Bienvenue dans le monde de <b>Retrobox</b> !

    Une fois que vous avez reçu votre colis, il est possible que nous avons oublié un composant, (nous sommes humains, mais je vous rassure cela n'arrive pratiquement jamais) si c'est le cas, contactez nous, nous vous réexpidrons le composant manquant gratuitement, contactez nous : <a href="mailto:support@retrobox.tech">support@retrobox.tech</a>

    <DocsImage src="https://static.retrobox.tech/img/box.jpg"/>

    <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/all-composants.jpg" />

    <DocsHeading
      label="Le schéma de la console"
    />

    Voici donc le schéma de votre console, si vous ne comprenez pas grand chose, pas d'inquiétude vous allez tout apprendre en montant votre console !

    Vous trouverez aussi ce diagramme utile :

    <DocsImage src="https://static.retrobox.tech/img/pcb/schematics.png" />

    <DocsHeading
      label="Liste des composants"
    />

    Voici ce que doit contenir votre kit RetroBox :

    <br>
    <br>

    <ComponentsExplorer />
    <br>

    <div class="docs-alert info">
      <i class="icon fas fas fa-forward"></i>
      <p>Si tout est ok, parfait, vous pouvez commencer l'assemblage !</p>
    </div>

    <DocsHeading
      label="Description complète des composants"
    />

    <h3 class="dividing">RetroBox's PCB</h3>

    <div class="docs-section">
      <div>
        La PCB est une plaque qui à elle seule supporte tous les composants !

        C'est juste une plaque avec des fils en cuivres pré-intégrés.
        Cela permet d'avoir un beau rendu de qualité.
        Petits tips, vous voyez souvent les cartes électroniques en vert, et bien on peut mettre les couleurs que l'on veut ! C'est juste pour protéger le cuivre....
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/pcb.png" />
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/pcblayer.png" />
    </div>

    <h3 class="dividing">L'acrylique</h3>

    <div class="docs-section">
      <div>
        Les deux plaques d'acryliques servent de protection pour la console et permet aussi une visibilité sur l'électronique !

      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/acrylique.jpg" />
    </div>

    <h3 class="dividing">Bouton 6x6mm</h3>

    <div class="docs-section">
      <div>
        C'est simplement des boutons, comme pour votre lumière, ils servent pour Start, Select et Restart.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/boutons.jpg" />
    </div>

    <h3 class="dividing">Bouton 12x12mm</h3>

    <div class="docs-section">
      <div>
        C'est les mêmes boutons que les 6x6mm, sauf qu'ils sont plus gros ! Ils servent pour A, B, X, Y.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/bouton2.jpg" />
    </div>

    <h3 class="dividing">Potentiomètre B103</h3>

    <div class="docs-section">
      <div>
        C'est une résistance variable de 10k ohm pour le son, il dissipe le signal par la chaleur lorsque il n'est pas à fond.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/potentiometre.jpg" />
    </div>

    <h3 class="dividing">Mini HDMI vers HDMI</h3>

    <div class="docs-section">
      <div>
        Cela permet de joeur sur grand écrans ! Comme la convention habituel des ports HDMI sont gros, celui de la raspberry pi étant trop petit, nous avons besoin d'un adaptateur, branchez le à votre TV et démarrez la console !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/hdmi.jpg" />
    </div>

    <h3 class="dividing">Dissipateur thermique</h3>

    <div class="docs-section">
      <div>
        Eh oui ça chauffe dans le raspberry Pi ! L'overclock du processeur pour jouer aux jeux plus fluidement, oblige un dissipateur, sinon le processeur partirait en fumer !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/heatsink.jpg" />
    </div>

    <h3 class="dividing">Batterie</h3>

    <div class="docs-section">
      <div>
        Pour avoir la meilleure autonomie (~6 h-7 h), nous vous avons concocté une batterie de 3000 Mah ! Vous ne saurez plus vous arrêter....
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/battery.jpg" />
    </div>

    <h3 class="dividing">Prise jack 3.5mm</h3>

    <div class="docs-section">
      <div>
        Cette prise jack de 3.5mm laisse place à une sortie casque lorsque vous le branché, le son de l'enceinte se coupe automatiquement ! Faites attention à vos oreilles, n'écoutez pas trop fort, le son est trop fort sur le casque.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/jack.jpg" />
    </div>

    <h3 class="dividing">Joystick</h3>

    <div class="docs-section">
      <div>
        Le joystick permet de contrôler la console, comme il est analog, nous avons besoin d'avoir un signal digital, c'est pour cela que le LM339 est là !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/joystick.jpg" />
    </div>

    <h3 class="dividing">LED 3mm</h3>

    <div class="docs-section">
      <div>
        Elle indique lorsque la console est en marche ou pas.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/led.jpg" />
    </div>

    <h3 class="dividing">LM339</h3>

    <div class="docs-section">
      <div>
        La puce LM339 transforme le signal analog du joystick vers un signal digital pour le Raspberry Pi.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/lm339n.jpg" />
    </div>

    <h3 class="dividing">Chargeur 5V</h3>

    <div class="docs-section">
      <div>
        Ce chargeur micro-USB 5v, permet de charger la console a vitesse grand V ! Fonctionne aussi avec les téléphones !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/chargeur.jpg" />
    </div>

    <h3 class="dividing">Condensateur 10nF</h3>

    <div class="docs-section">
      <div>
        Il sert pour le filtre passe-bas de la console, pour avoir un meilleur son !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/condo2.jpg" />
    </div>

    <h3 class="dividing">Condensateur 10µF</h3>

    <div class="docs-section">
      <div>
        Idem que le 10nF !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/condo.jpg" />
    </div>

    <h3 class="dividing">Prise Micro-USB</h3>

    <div class="docs-section">
      <div>
        C'est la même prise que vos téléphones, elle permet de charger la console.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/microusb.jpg" />
    </div>

    <h3 class="dividing">Circuit protecteur et chargeur 5V</h3>

    <div class="docs-section">
      <div>
        Cette petite plaque gère toute la partie puissance de la console, elle indique le statut de la batterie et la protège des courts circuits ou de décharges profondes !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/DD06CVSA.jpg" />
    </div>

    <h3 class="dividing">ISP MCP23017</h3>

    <div class="docs-section">
      <div>
        La puce MCP23017 permet de rajouter des sorties sur le Raspberry Pi, il en rajoute 16 !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/mcp23017.jpg" />
    </div>

    <h3 class="dividing">L'amplificateur PAM8403</h3>

    <div class="docs-section">
      <div>
        C'est un petit amplificateur de classe D de 3W, cela permet d'avoir son puissant pour l'enceinte, ou le casque.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/ampli.jpg" />
    </div>

    <h3 class="dividing">Le micro-ordinateur Raspberry Pi Zero W</h3>

    <div class="docs-section">
      <div>
        Le Raspberry Pi est le cœur de la console, il gère tout, avec ces 1ghz de processeur et 512mb de ram, on peut donc jouer avec RetroPie
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/raspberry.jpg" />
    </div>

    <h3 class="dividing">Résistances</h3>

    <div class="docs-section">
      <div>
        Une résistance en électronique, est utilisé pour réguler l'intensité d'un composant (Comme une LED), elle se mesure en ohms, signe de l'oméga grec. Vous pouvez déterminer la résistance du composant avec un tableau de valeurs.
        <br />

        <b>Il y a trois type de résistances utilisées dans la RetroBox :</b> <br />
        <br />

        <b>Plusieurs résistances de 10k ohms</b> <br />
        Celle ci servent de pull-up pour le joystick, 5V = 1 ; 0V= 0/. La Raspberry compare le courant du pin.<br />

        <b>Le code couleur</b> : Marron, Noir, Orange, or <br />
        <br />

        <b>Plusieurs résistances de 150 ohms</b><br />
        Celle-ci sert au filtre passe-bas, pour avoir un son de meilleur qualité.<br />
        <b>Le code couleur</b> : Marron, Vert, Noir, or <br />
        <br />

        <b>Plusieurs résistances de 270 ohms</b> <br />
        Idem de celle de 150 ohms, deux types de résistances sont utilisées.<br />
        <b>Le code couleur</b> : Rouge, Violet, Marron, Or <br />
        <br />

      </div>
      <DocsImage src="https://www.positron-libre.com/cours/electronique/resistances/images/code-couleur-resistance.png" />
      <DocsImage src="https://static.retrobox.tech/img/composants/ressitance2.jpg" />
    </div>

    <div class="docs-alert info">
      <i class="icon fas fa-angle-double-up"></i>
      <p>
        Petit tips : Pour lire les valeurs d'une résistance, il vous suffit de regarder sur le tableau les couleurs ou d'utiliser des outils en ligne comme celui-ci :
        <a
          href="https://www.digikey.fr/fr/resources/conversion-calculators/conversion-calculator-resistor-color-code-4-band"
          style="color:white">digikey.fr</a>
      </p>
    </div>

    <h3 class="dividing">Bouton 12x12mm à angle droit</h3>

    <div class="docs-section">
      <div>
        Et encore des boutons, cela sont pour les actions L et R de la console. Un peu similaire à des gâchettes.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/gachette.jpg"/>
    </div>

    <h3 class="dividing">Ecran de 3.2 pouces</h3>

    <div class="docs-section">
      <div>
        Ce petit écran de 3.2 pouces fonctionne avec un protocole nommé SPI, ce qui nous limite sur la taille de l'écran, pour avoir des 30 FPS, le 3.5 pouces était cadencé sur du 15 FPS... Injouable....
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/lcd.jpg"/>
    </div>

    <h3 class="dividing">Carte SD</h3>

    <div class="docs-section">
      <div>
        La carte SD pré-integrée de 8 GB suffit pour mettre beaucoup de jeux, assez du moins pour ne pas avoir le temps de tous les essayer....
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/cartesd.jpg" />
    </div>

    <h3 class="dividing">Bouton ON/OFF</h3>

    <div class="docs-section">
      <div>
        Et c'est le dernier boutton, le principal, il gère l'alimentation de la console, ON ou OFF, rien de plus simple !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/onoff.jpg" />
    </div>

    <h3 class="dividing">Entretoises</h3>

    <div class="docs-section">
      <div>
        Les entretoises permettent de séparer le plexiglass de la PCB, ce qui protège la console.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/entretoises.jpg" />
    </div>

    <h3 class="dividing">Enceinte de 1W</h3>

    <div class="docs-section">
      <div>
        Cette petit enceinte de 8 ohm et 1 W, à une puissance équivalente à une Gameboy Advance !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/enceinte.jpg" />
    </div>

    <h3 class="dividing">Port USB type A</h3>

    <div class="docs-section">
      <div>
        Vous voulez jouer entre amis ? Branchez-y vos manettes dessus ! Ou même des clés USB, Ou encore plus fou, vos téléphones pour les recharger !
      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/usb.jpg" />
    </div>

    <h3 class="dividing">Support pour la raspberry pi</h3>

    <div class="docs-section">
      <div>
        Ces petits supports contiennent un ressort qui assure la connexion entre la carte électronique et la Raspberry. Tout ça pour alimenter la Raspberry.

      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/pinheaderspring.jpg" />
    </div>

    <h3 class="dividing">Le double face</h3>

    <div class="docs-section">
      <div>
        Il y a deux types de double faces sur la consoles (dont un de prêt collé), un sert de calle pour l'écran et l'autre pour coller la batterie sur l'acrylique.

      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/scotchs.jpg" />
    </div>

    <h3 class="dividing">La dragonne</h3>

    <div class="docs-section">
      <div>
        Elle n'est pas obligatoire mais elle peut être utile en cas de chute !

      </div>
      <DocsImage src="https://static.retrobox.tech/img/composants/dragonne.jpg" />
    </div>

    <div class="docs-alert info">
      <i class="icon fas fas fa-forward"></i>
      <p>Aaprès avoir faite cette petite présentation des composants de la console, vous allez pouvoir commencer l'assemblage en cliquant sur suivant !</p>
    </div>

  </div>
</template>

<script>
  import DocsImage from "~/components/Docs/Image"
  import ComponentsExplorer from "../../components/ComponentsExplorer"
  import DocsHeading from "~/components/Docs/Heading"
  export default {
    name: 'FrenchGettingStarted',
    components: {DocsHeading, ComponentsExplorer, DocsImage}
  }
</script>
