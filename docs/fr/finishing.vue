<template>
  <div>
    <DocsHeading label="La finition" />
    <div class="docs-section">
      <div>
        <b>Vous êtes arrivé ici bravo ! </b>
        <br><br>
        <p>
          Maintenant c'est plus simple :p <br>
          Il reste deux trois composants à souder mais votre console sera bientôt prête !
        </p>
        <br>
      </div>
      <DocsImage src="https://static.retrobox.tech/img/docs/others/IMG_0086.jpg"/>
    </div>
    <div class="docs-alert info">
      <i class="icon fas fa-question-circle"></i>
      <p>Pour ce chapitre un tournevis cruciforme vous sera nécessaire !</p>
    </div>
    <!-- JACK -->
    <h3 class="dividing"><DocsHeading label="Le port jack 3.5mm"/></h3>

    <div class="docs-section">
      <div>
        Pour écouter le son de la console sur un casque, rien de mieux qu'un port jack ! Il est simple à souder, mais attention à vos oreilles lors de l'utilisation, le son peut être très fort assez facilement !
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0263.jpg', alt: 'Cliquer pour zoomer'}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0265.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- LED -->
    <h3 class="dividing"><DocsHeading label="La led verte"/></h3>

    <div class="docs-section">
      <div>
        Pour continuer dans l'esprit de faciliter la led doit être soudée. Ne vous trompez pas de sens, la led a un petit met plat qui vous indique dans quel sens la mettre !
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0266.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0267.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- ENCEINTE -->
    <h3 class="dividing"><DocsHeading label="L'enceinte"/></h3>

    <div class="docs-section">
      <div>
        Pour l'enceinte il vous faut couper un peut les fils (ils sont trop long), les dénuder puis les souder sur la PCB, la petite pellicule blanche pourra être enlevée pour ensuite être coléle sur le plexiglass plus tard.
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0270.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0268.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- CHARGE -->
    <h3 class="dividing"><DocsHeading label="Le système de charge"/></h3>

    <div class="docs-section">
      <div>
        Pour alimenter le tout il vous réguler, protéger etc la tension provenant de la batterie ou du port micro USB, ce petit module vert s'occupe de tout ! Il affiche aussi sur 4 leds d'états la charge restante de la batterie. <br> On y retrouve la même technique pour souder que pour l'amplificateur, il vous faut passer des chutes de résistances au travers.
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0287.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0292.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- POTAR -->
    <h3 class="dividing"><DocsHeading label="Le potentiomètre"/></h3>

    <div class="docs-section">
      <div>
        Cette résistance variable de 10k ohm permet de régler le volume de la console simplement en tournant de haut en bas la molette. Il vous faut l'installer à son emplacement, éviter de trop forcer lors de l'installation au risque de le rendre inutilisable.
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0276.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0275.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- BATTERIE -->
    <h3 class="dividing"><DocsHeading label="La batterie et l'acrylique"/></h3>

    <div class="docs-section">
      <div>
        Pour que la batterie tienne d'elle même, il faut utiliser le scotch double face et en mettre sur trois ligne horizontale, coller la batterie à gauche de la plaque d'acrylique (plaque du dessous) avec les fils sortant vers le haut.
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0025.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0027.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0028.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0030.jpg', alt: 'Appuyez juste assez pour coller la batterie'}
        ]"
      />
    </div>
    <!-- BATTERIE2 -->
    <h3 class="dividing"><DocsHeading label="La batterie"/></h3>

    <div class="docs-section">
      <div>
        Pour terminer avec la batterie, vous pouvez souder les bornes + et - de la batterie sur la PCB, ne vous trompez pas de polarité c'est important !
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0012.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0014.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- PLEXI -->
    <h3 class="dividing"><DocsHeading label="Finition finale"/></h3>

    <div class="docs-section">
      <div>
        Avant dernière étape ! Celle ci consiste à mettre les entretoises et les plaques d'acryliques sur la console. Les grande entretoises vont derrière et les petites devant :p Vous pouvez visser (pas trop non plus) avec un tournevis les vis dans les entretoises pour maintenir le tout.
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0034.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0039.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0041.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0043.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0047.jpg', alt: ''}
        ]"
      />
    </div>
    <!-- DRAGONNE -->
    <h3 class="dividing"><DocsHeading label="Dernière étape... la dragonne"/></h3>

    <div class="docs-section">
      <div>
        Et oui pour éviter quelle tombe rien de mieux qu'une dragonne, vous pouvez la mettre a gauche ou à droite autour d'une entretoise ! 
      </div>  
      <DocsImageSlider
        :images="[
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0050.jpg', alt: ''}, 
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0051.jpg', alt: ''},
          {src: 'https://static.retrobox.tech/img/docs/assembly/IMG_0053.jpg', alt: ''}
        ]"
      />
    </div>

    <hr>

    <!-- END -->
    <div class="docs-section">
      <div>
        <b>Votre console est prête ! </b>
        <br><br>
        <p>
          Vérifier quand même si vos soudures ne se touchent pas entre elles... <br>
          L'installation de votre console sera simple et rapide pas de problème sur ça !
        </p>
        <br>
      </div>
      <DocsImage src="https://static.retrobox.tech/img/docs/others/IMG_0123.jpg"/>
    </div>
    <div class="docs-alert info">
      <i class="icon fas fa-question-circle"></i>
      <p>Vous pouvez passer désormais à l'installation de la console !</p>
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
