<template>
  <div>
    <DocsHeading label="Explication de l'infrastructure de RetroBox" />

    <p>L'infrastructure de RetroBox est assez complexe au niveau du back-end, elle utilise les machines de Thingmill.</p>
    
    <h2>Schéma de l'architecture actuelle :</h2>
    <br>
    <DocsImage src="https://static.retrobox.tech/img/docs/architecture/infras_rb.png" />
    <br>
    <p>Il faut savoir que dans cette infrastructure tout communique ensemble, par exemple quand vous fâite une requête pour achetr une console, l'api, la base de donnée et le serveur web-socket sont utilisés.</p>
    <br>
    <h3>L'api : à quoi sert-elle ?</h3>
    <br>
    <p>L'api est un peut le coeur de notre architecture, au final c'est elle qui guide tout le monde, chaque requête qu'elle reçoit est traitée puis est emmené à sa destination.</p>
    <p>Exemple si vous utilisez notre système de connexion, lorsque que vous cliquez sur <code>Se connecter</code>, une requête est effectué sur notre API.</p>
    <br>   
    <DocsImage src="https://static.retrobox.tech/img/docs/architecture/firefox_WFySI9ILDs.png" />
    <br>
    <h3>Le serveur web-socket, c'est ?</h3>
    <br>
    <p>C'est ce qui fait le lien entre la console et l'api.</p>
    <br>
    <DocsImage src="https://static.retrobox.tech/img/docs/architecture/requete%20console_dash.png" />
    <br>
    <p>Il existe plusieurs routes dans cette application, par exemple la methode GET est utilisée dans le cas ou la commande <code>GET /console/:id</code> est executée, une requête est réalisée sur l'api, le serveur web-socket, puis sur la console pour ensuite transferer la réponse sur le dashboard (Cette commande proviendra essentielement du dashboard).</p>
    <br>
    <h3>Notre surcouche, elle correspond à quoi ?</h3>
    <br>
    <p>C'est interessant de poser la question ;p, enfaite notre OS est basé sur RetroPie lui-même basé sur Emulation Station, de notre côté on vient greffer plusieurs ajouts pour que la console soit fonctionnelle.</p>
    <br>
    <DocsImage src="https://static.retrobox.tech/img/docs/architecture/surcouche%20retrobox.png" />
    <br>
    <p>Par exemple, une grande partie de nos scripts qui décomposent notre surcouche est disponible <a href="https://github.com/retrobox/console-modules">ici</a>. Il faut savoir que ce n'est pas seulement cela qui rend utilisable la console, tous ces scripts sont utiles pour par exemple installer les pilotes pour l'écrans, les boutons etc, mais la communication avec nos services ne pourra se faire ! Pour cela il y a un deuxième <a href="https://github.com/retrobox/overlay">repo</a> qui lui est dedié que pour la communication avec le serveur websocket. Chaque requête provenant du dashboard serat d'abord traitée par l'api, puis le serveur websocket, puis l'overlay qui est installé sur la console.</p>
    <br>
    <h3>Comment le n° de série est attribué sur la console ?</h3>
    <br>
    <p>L'attribution du n° de série est aléatoire, il est composé de 5 caractères, avec 36 possibilités [<code>ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</code>] ce qui fait 36^5 possibilités ! Soit plus de 60 millions de n° de séries, ça nous fait de la marge :p.</p>
    <br>
    <DocsImage src="https://static.retrobox.tech/img/docs/architecture/serialnumber.png" />
    <br>
    <p>L'application desktop est indispensable pour le projet, nous l'utilisons pour :</p>
    <ul>
      <li>
        Attribuer le n° de série sur la console
      </li>
      <li>
        Graver l'image de notre système d'exploitation
      </li>
    </ul>
    <br>
    <p>Les licenses de RetroPie ne nous autorisent pas à vendre la console avec l'OS pré-installé. D'ou la solution alternative de l'application qui vient graver la carte SD après la vente, ce qui rejoute donc aucune plus-value directe sur le prix.</p>
    <br>
    <h4>Une question sur nos modes de fonctionnement ? Contactez nous !</h4>
  </div>
</template>
<script>
  import DocsHeading from "~/components/DocsHeading"
  import DocsImage from "~/components/DocsImage"
  export default {
    components: {DocsImage, DocsHeading}
  }
</script>
