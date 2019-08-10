<template>
  <div>
    <DocsHeading label="Le schéma de la console" />

    <div class="docs-section">
      <div>
        Le schéma de la console se divise en plusieurs aprties distinctes, sur cette version on y voit apparaître des blocs logiques. Au centre nous avons le cerveau de la console : le Raspberry Pi Zero W puis autour tous les périphériques qui assurent le bon fonctionnement de la console.
        <br>
        Dans ce chapitre nous étudierons rapidement chaque bloc en décomposant leurs rôles dans la console.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/docs/schematic/schematics.png"/>  
    </div>
    <DocsHeading label="La partie audio" />
    <div class="docs-section">
      <div>
        La partie audio est constitué d'un amplificateur 3W type PAM8403 et d'un filtre passe bas. C'est les deux seules choses activent. La Raspberry Pi ne disposant pas de sortie audio, il faut moduler via un argument dans le <code>config.txt</code>, un signal via un des pins de la Raspberry, certe le son n'est pas de bonne qualité mais c'est la seule solution pour avoir du son (sans parler de carte son externe type USB trop complexe pour l'intégrer dans une console en kit). Malheuresement cette sortie son doit être nettoyé, c'est pour cela que le signal passe dans un filtre passe bas pour atténuer les hautes fréquences (en laissant passer les basses fréquences), ce type de filtre est beaucoup utilisé dans le monde de l'audio car il est simple à mettre en place.
        <br>
        <br>
        Pour que le son soit coupé lorsque on branche un casque, on utilise une prise jack faisant office d'interrupteur, le signal du haut parleur est coupé pour le laisser passer dans la sortie casque.
      </div>
      <DocsImage src="https://static.retrobox.tech/img/docs/schematic/ApplicationFrameHost_IjItGhPWtM.png"/>  
    </div>
    <DocsHeading label="La partie alimentation" />
    <div class="docs-section">
      <div>
        Pour faciliter le montage de la console, nous avons choisi de se baser sur un système autonome pour le recharger/alimentation de la console. Etant donné que la batterie doit être chargé en suivant des courbes de charges particulière avec des impulsions etc, il ne suffit pas de la brancher directement sur l'entrée micro-USB, il faut un système capable de gérer la charge. Mais nous avons un autre problème, la tension nominale de fonctionnement de la Raspberry est de 5V mais la batterie délivre que 3,7v, pour y remédier le système que nous utilisons est équipé d'un convertisseur dit "boost", il découpe le courant pour l'élever à une certaine tension, ici, 5V.
        <br>
        <br>
        La batterie de 3000mAh permet une alimentation de la console constante jusqu'à 6h30 non-stop.      </div>
      <DocsImage src="https://static.retrobox.tech/img/docs/schematic/ApplicationFrameHost_0yka9ao2XR.png"/>  
    </div>
    <DocsHeading label="L'écran" />
    <div class="docs-section">
      <div>
        L'écran choisi est completement autonome, nous nous sommes juste chargé de le connecter correctement à la Raspberry. Le protocole choisi pour transiter les images venant du Raspberry vers l'écran est nommé le "SPI" (<b>S</b>erial <b>P</b>eripheral <b>I</b>nterface). Ce protocole simple d'utilisation nécessite seulement quatres fils pour pouvoir fonctionner, le SCLK (Clock), le MOSI, le MISO, et le SS (falcutatif certaine fois). Il est pratique pour mettre plusieurs systèmes en cascade (voir image). Le SCLK est le signal d'horlage provenant d'un périphérique maître (c'est ce qui cadence la vitesse de l'écran), le MOSI est l'<b>OUT</b>put (la sortie des infos [signal généré par le maître]), le MISO est est l'<b>IN</b>put (l'entrée des infos [signal généré par l'écran]) et le SS "<b>S</b>lave <b>S</b>elect", de traduction "séléction de l'ésclave", il permet de définir l'ésclave lorsque plusieurs systèmes occupent le protocole.
        <br>
        <br>
        Le problème que nous avons rencontré avec ce protocole est la vitesse maximale de transmission des données, elle n'est pas assez élevée pour avoir un minimum de 30 FPS sur un écran de 3.5 pouces, c'est pour cela que la console est dotée d'un écran 3.2 pouces.      
      </div>
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/schematic/ApplicationFrameHost_uDBVyRp3p4.png', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/schematic/spi.png', alt: ''}
        ]"
      />
    </div>
    <DocsHeading label="La gestion des entrées" />
    <div class="docs-section">
      <div>
        La Raspberry ne disposant pas d'assez de I/O (Input/Output [Entrée/Sortie]) nous avons été obligé d'utiliser un extendeur d'Entrée/Sortie : le MCP23017. Cette puce fonctionne via le protocole "I²C", (non similaire au protocole "SPI"), celui ci nécessite seulement deux fils pour fonctionner : le SDA (<b>S</b>erial <b>D</b>ata <b>L</b>ine [Signal d'horloge]) et le SCL (<b>S</b>erial <b>C</b>lock <b>L</b>ine [Signal de données]). Encore une fois, il peut y avoir des équipements branchés en cascade (voir image). Le MCP23017 dispose donc de 14 I/O en plus. Le datasheet est disponible <a href="http://ww1.microchip.com/downloads/en/devicedoc/20001952c.pdf">ici</a>.
        <br>
        <br>
        Les boutons A, B, X, Y, R, L, start et select y sont directement relié, le joystick aussi mais avant cela le signal doit être traité.
      </div>
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/schematic/ApplicationFrameHost_lwFo67uoxx.png', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/schematic/i2c.png', alt: ''}
        ]"
      />
    </div>
    <DocsHeading label="La gestion du joystick" />
    <div class="docs-section">
      <div>
        Le MCP23017 à quand même un gros point noir : c'est qu'il ne gère pas les entrées analogues... Donc pour un joystick c'est assez embarrassant, mais comme la plupart des vieilles consoles ne disposées pas de joystick mais seulement de bouton cela ne pose pas trop de problème de convertir la sortie du joystick en tout ou rien. Et bien c'est ce qu'on à fait ! Nous avons utilisé un <a href="http://www.ti.com/lit/ds/symlink/lm2901.pdf">LM339</a>, qui est un comparateur de tension. Par défaut la sortie du joystick est, lorsqu'il ne bouge pas, de 0V, par contre lorsque par exemple on déplace le joystick vers la droite la tension sera positive et augmentera selon la position donnée. Par contre si on va vers la gauche la tension sera négative et sera comprise entre 0V et 5V. Enfaite pour éclaircir le principe d'un joystick, c'est seulement deux axes (X et Y), et donc pour matérialiser le déplacement par une différence de tension le joystick est basé sur deux potentiomètres. Lorsque le joystick est placé au milieu (en mode défaut), le curseur du joystick est placé au milieu, la tension est nulle. Le potentiomètre fait office de résistance variable qui permet de limiter le courant et donc la tension. Le rôle du LM339 est d'analyser dès qu'une tension est présente sur ses bornes. Donc dès que l'on, ne serait-ce qu'un tout petit peut, pousse vers la droite le joystick, le LM339 détecte donc une tension et met une des ses sorties en HIGH (c'est à dire à 3.3V), sortie qui est connecté sur le MCP23017.
        <br>
        <br>
        Une fois cette tension présente aux bornes du MCP23017, l'information est communiqué à la Raspberry pi.      </div>
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/schematic/ApplicationFrameHost_QDakGlJkJu.png', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/schematic/s-l640.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/schematic/LM339-Internal-Connections.png', alt: 'Schéma interne du LM339'}
        ]"
      />
    </div>
    <div class="docs-alert info">
      <i class="icon fas fa-question-circle"></i>
      <p>Si vous avez encore des interrogations, vous pouvez nous contacter pour que l'on vous aide !</p>
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
