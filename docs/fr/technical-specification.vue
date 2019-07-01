<template>
  <div>
    <DocsHeading label="Caractéristiques" />

    <ul>
      <li><b>CPU</b> : 1GHz monocœur CPU (BCM2835)</li>
      <li><b>RAM</b> : 512MB RAM</li>
      <li><b>Ecran</b> :  320x240px polychrome + tactile (XPT2046)</li>
      <li><b>Son</b> : enceinte 2W et sortie jack 3.5mm + Mini amplificateur PAM8403</li>
      <li><b>Entrées</b> :  Joystick, start, select, a, b, x, y, l, r</li>
      <li><b>Communication</b> :   1x mini HDMI, 1x micro USB, 1x micro SD, 40 GPIO, sortie composite, support de la caméra</li>
      <li><b>Batterie</b> :   ~6-8h d'autonomie, 3000mAh LiPo batterie, chargée par USB (Consomme environ 450mAh)</li>
      <li><b>Alimentation</b> :  5V 1A max</li>
      <li><b>Dimensions</b> : 177.15x66.53x30 mm (6.96x2.59x1.18″)</li>
    </ul>
    <br>
    <DocsHeading label="Schémas / modèle 3D" />

    <DocsImage src="https://static.retrobox.tech/img/pcb/schematics.png"></DocsImage>

    <DocsImage src="https://static.retrobox.tech/img/pcb/schematics.png"></DocsImage>

    <div class="docs-alert info">
      <i class="icon fas fa-question-circle"></i>
      <p>Les fichiers Eagles ne sont pas disponibles au téléchargements.</p>
    </div>

    <hr>

    <ul>
      <li>Simulation 3D de la console : <a href="https://github.com/retrobox/misc/tree/master/3d">https://github.com/retrobox/misc/tree/master/3d</a></li>
    </ul>

    <div class="docs-alert info">
      <i class="icon fas fa-question-circle"></i>
      <p> Pour ouvrir le fichier STL, vous devez utiliser un logiciel de CAO tel que: Autocad; Design Spark; SolidWorks; Catia</p>
    </div>

    <DocsHeading label="Boîte (Plexiglass & rendu 3d)" />

    <p>
      Il y a beaucoup de possibilitées sur la couleur de la RetroBox, mais nous avons un modèle par défaut:
    </p>

    <ul>
      <li>Rendu 3d: <a href="https://github.com/RetroBox/misc/tree/master/3d">https://github.com/RetroBox/misc/tree/master/3d</a></li>

      <li>Plexiglass version : <a href="https://github.com/RetroBox/misc/tree/master/3d">https://github.com/RetroBox/misc/tree/master/3d</a></li>
    </ul>
    <br>

    <DocsHeading label="Liste des composants" />

    <ComponentsExplorer />

  </div>
</template>
<script>
  import DocsHeading from "../../components/DocsHeading"
  import DocsImage from "../../components/DocsImage"
  import ComponentsExplorer from "../../components/ComponentsExplorer"
  export default {
    name: 'FrenchTechnicalSpecification',
    components: {ComponentsExplorer, DocsImage, DocsHeading}
  }
</script>
