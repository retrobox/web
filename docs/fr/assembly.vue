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
    Quelques façon de souder, soyez minutieux ! :

    <DocsImage src="https://static.retrobox.tech/img/assemblage/solderingtips_fr.png" />
    <div class="docs-alert info">
      <i class="icon fas fa-exclamation-triangle"></i>
      <p>Attention, il est nécessaire de suivre l'odre des étapes pour construire correctement votre console !</p>
    </div>
    <!-- PUCES -->
    <h3 class="dividing"><DocsHeading label="Les puces"/></h3>

    <div class="docs-section">
      <div>
        Pour commencer, les puces MCP23017 et LM339 doivent êtres soudées. La première se soude en haut de la pcb côté gauche et l'autre sur le côté droit.
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0200.jpg', alt: 'Cliquer pour zoomer'}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0205.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0209.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0218.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- RESISTANCES -->
    <h3 class="dividing"><DocsHeading label="Les résistances"/></h3>

    <div class="docs-section">
      <div>
        La prochaîne étape consiste à souder toutes les résistances de la console (270 ohm, 150 ohm, 10k ohm). Il n'y a pas d'ordre précis, par contre il faut garder tous les bouts coupés (ce qui est trop long), ils serviront plusieurs fois plus tard.
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0220.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0226.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0229.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0230.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- CONDENSATEURS -->
    <h3 class="dividing"><DocsHeading label="Les condensateurs"/></h3>

    <div class="docs-section">
      <div>
        Il s'agit maintenant de souder les condensateurs chimiques et ceramique de 100µF (les cylindriques noirs) et de 10nF (les verts). Ceux ci servent pour le traitement du son (filtre passe bas). Il y aura tout de même quelques impuretées au niveau du son, c'est normal, la raspberry pi n'est pas doté de carte son. Ce bruit désagréable n'est plus présent lorsque un son est joué.
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0234.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0233.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- AMPLIFICATEUR -->
    <h3 class="dividing"><DocsHeading label="L'amplificateur"/></h3>

    <div class="docs-section">
      <div>
        Certe partie est plus délicate car il faut utiliser les petits bouts coupés des résistances pour pouvoir le souder. Comme indiquer sur l'image il faut passer tous les petits bouts entre la PCB de la consoel et la PCB de l'amplificateur (plaque rouge/verte), pour après les souder. Pour rendre cela plus propre, il faut couper les raccords trop longs. <br> Faites attention à ce qu'il n'y ai pas de jonction entre les points de soudures.
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0237.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0238.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0239.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0241.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- USB -->
    <h3 class="dividing"><DocsHeading label="Le port USB"/></h3>

    <div class="docs-section">
      <div>
        C'est le composant le plus simple à souder ! Poser le au bon endroit, souder et voila ! Pensez à couper les pates à ras bord de la PCB pour laisser place à un bouton qui est juste au dessus de ce port (Attention, cela dépend des versions, valable que pour la version 2.02).
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0242.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0243.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- BOUTONS -->
    <h3 class="dividing"><DocsHeading label="Les boutons"/></h3>

    <div class="docs-section">
      <div>
        Sur la console il y a 10 boutons, ils se trouvent tous sur la face avant de la PCB. Simple à souder, ils suffit juste de les mettre dans les bons trous ! Mais il manque tout de même quelque chose... les capuchons ! <br> Pour cela, passer à l'étape suivante ;p
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0244.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0246.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- CAPS BOUTONS -->
    <h3 class="dividing"><DocsHeading label="Les capuchons des boutons"/></h3>

    <div class="docs-section">
      <div>
        Ceux ci sont très simple à mettre, aucune soudure nécessaire, il suffit juste des les emboîter, une fois cela fait, ils ne bougerons plus et sont fonctionnels à 100% !
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0015.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0018.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0019.jpg', alt: ''}
        ]"
      />
    </div>
    <div class="docs-alert info">
      <i class="icon fas fa-question-circle"></i>
      <p>Attention, à partir d'ici le processus se complexifie... Soyez patient !</p>
    </div>
    <!-- PIN HEADER RPI -->
    <h3 class="dividing"><DocsHeading label="Les 'pin headers' pour la RPI"/></h3>

    <div class="docs-section">
      <div>
        Cette soudure va prendre du temps... Il faut souder plus de 40 petits pin... Mais c'est grâce à cela que la Raspberry pi peut communiquer avec tous les boutons, écrans etc ! Toutes les informations transiterons ici ! <br> N'oubliez pas les deux petits pin juste en dessous à droite à souder !
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0248.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0249.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- Joystick -->
    <h3 class="dividing"><DocsHeading label="Le joystick"/></h3>

    <div class="docs-section">
      <div>
        Le joystick est asser simple à souder il se place à droite de la PCB et se souder simplement par la face arrière de la PCB. Pensez à couper ce qui est trop long pour ne pas gêner la Raspberry qui sera juste au dessus de certain pin du joystick. <br> Ne faîte pas attention à l'écran qui est déjà présent, cela dépend des versions de la console mais dans tous les cas il ne pose pas de problème et sera installé plus tard après le Raspberry.
      </div>
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0284.jpg', alt: 'Le capuchon viendra plus tard dans les finitions !'}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0282.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- RPI -->
    <h3 class="dividing"><DocsHeading label="La Raspberry Pi Zero W"/></h3>

    <div class="docs-section">
      <div>
        Assurer vous avant de ne pas avoir soudé le joystick ! Pour souder celle ci il suffit de la placer dans les pins, elle peut y rentrer que dans un sens. Une fois soudées, couper avec une pince coupante tous les pins trop longs. <br> Ne mettez pas la carte SD de suite au risque de l'abimer.
      </div>
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0005.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0003.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0007.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- ECRAN -->
    <h3 class="dividing"><DocsHeading label="L'écran 3.2 pouces"/></h3>

    <div class="docs-section">
      <div>
        C'est la dernière étape importante avant la finition ! L'écran prend du temps à être soudé car lui comporte beaucoup de pins... De plus il vous faut le coller correctement (droit de préference) pour ensuite le souder. <br> N'appuyer pas trop fort sur la dalle cela risquerait de l'endommager...
      </div>
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0252.jpg', alt: 'Enlevez la pellicule pour pouvoir le coller'},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0255.jpg', alt: 'Appuyez légerement sur la dalle pour bien coller le double face'},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0261.jpg', alt: ''}
        ]"
      />
    </div>
    <div class="docs-alert info">
      <i class="icon fas fa-question-circle"></i>
      <p>Et c'est déjà la fin de ce chapitre, il vous a fallu de la patience et du temps mais vous y êtes parvenu ! Vous pouvez vous féliciter !</p>
    </div>     

    <!-- END TEMPLATE -->
    <!-- Actually version : 2.02 -->
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
