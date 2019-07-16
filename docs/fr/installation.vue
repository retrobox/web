<template>
  <div>

    <DocsHeading label="Après avoir monté votre console"/>

    Si vous voulez tout installer (compétences sur Linux nécessaires)

    <ul>
      <li>
        Si vous voulez installez manuellement recalbox: <nuxt-link to="/docs/manual-installation"></nuxt-link>
      </li>
      <li>
        Si vous voulez installez manuellement retropie: <nuxt-link to="/docs/manual-installation"></nuxt-link>
      </li>
      <li>
        Si vous voulez juste graver l'image sur la carte SD, aucune configuration est nécessaire, suivez juste ce guide...
      </li>
    </ul>

    <p>
      Temps estimé à l'installation ~ 0.3h - 1h
    </p>
    <br>
    <h3>Première étape: Télécharger l'application </h3>

    <p>Pour le moment, la dernière version est: <code>0.02</code></p>

    <p>Télécharger l'application Retrobox <nuxt-link to="/downloads">ici</nuxt-link></p>

    <h3>Deuxième étape: Connexion à l'application </h3>

    <p>Cliquer sur le bouton connecter, une fenêtre souvrira sur votre naviguateur puis connecter vous avec le compte sur lequel vous avez acheter la console.</p>

    <DocsImage src="https://static.retrobox.tech/img/docs/installation/Retrobox_Desktop_App_5TD2Wj5vGw.png" />

    <p>Une fois connecté, l'application identifie automatiquement votre console et synchronise le n° de série enregistré sur le compte sur la console.</p>

    <p>Pour l'instant vous êtes obligé de vous connecter, plus tard il sera falcutif mais vous aurez aucun accès à tous les services que Thingmill propose avec la console.</p>

    <DocsImage src="https://static.retrobox.tech/img/docs/installation/bESX83ll6a.png" />

    <h3>Troisième étape: Choix du périphérique & le wifi </h3>

    <p>Pour commencer assurer vous d'être connecté à un réseau wifi (le même que celui de la console utilise).</p>

    <p>Une fois cela fait, vous pouvez choisir votre périphérique sur lequel vous voulez graver RetroBox OS, faite attention a bien choisir votre périphérique car les actions qui vont suivre sont irréversibles.</p>

    <DocsImage src="https://static.retrobox.tech/img/docs/installation/Retrobox_Desktop_App_t8iNt7ZV2B.png" />

    <p>Cette page vous demande votre réseau wifi, remplissez les champs, sélectionner votre région et le type du réseau (WEP/WPA). Encore une fois, assurez vous que les champs de texte sont exactes sinon la console ne pourrat pas fonctionner correctement.</p>

    <DocsImage src="https://static.retrobox.tech/img/docs/installation/Retrobox_Desktop_App_d6lVhVFnFP.png" />

    <h3>Quatrième étape: Téléchargement de l'image & gravure sur la carte</h3>

    <p>Le téléchargement de l'image peut paraitre long mais il se fait qu'une fait et on parle d'unsystème d'exploitation ! Rassurer vous cela ne prend pas plus de 30min (Sous ADSL).</p>

    <DocsImage src="https://static.retrobox.tech/img/docs/installation/Retrobox_Desktop_App_OtCt3O2Bm0.png" />

    <p>Une fois le  téléchargement effectué, le plus gros de l'installation est fait, il reste seulement la gravure, qui peut prendre 5 à 10 minutes, tout dépend de la vitesse de la carte SD.</p>

    <DocsImage src="https://static.retrobox.tech/img/docs/installation/Retrobox_Desktop_App_SJTNePwVKr.png" />

    <p>L'installation est donc terminée, vous pouvez maintenant ajouter des jeux sur votre console ! Vous retrouvez aussi votre console et tous les paramètres disponibles la concernant dans votre dashboard.</p>

    <DocsImage src="https://static.retrobox.tech/img/docs/installation/Retrobox_Desktop_App_bx5hY2OTGl.png" />

    <br>
    <p>Si vous avez des erreurs, dites-le nous et nous vous aiderons rapidement ! <code>(support@retrobox.tech)</code></p>
    <br>
    <DocsHeading label="Ajouter des jeux dans votre console RetroBox" />

    <p>Pour ajouter des jeux, il existe plusieurs possibilités :</p>
    <br>
    <ol>
      <li>
        <h3>Le dashboard en ligne (<nuxt-link to="dashboard/console">https://retrobox.tech/dashboard/console</nuxt-link>)</h3>
      </li> 
    
      [APP PICTURES GOES HERE]

      <li>
        <h3>Avec windows/mac [Samba] (oui c’est possible, aucun login est requis)</h3>
      </li> 

      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_10.png" />
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_11.png" />

      <p>Pour accéder au serveur SAMBA de la console : Taper <code>\\RETROPIE</code> dans la barre de recherche de windows, ou l'adresse IP de la machine.</p>
      <p>Sur Max OSX, ouvrez un explorateur, selectionner <code>Aller</code> et <code>Se connecter à un serveur</code>, tapez : <code>smb://retropie</code>.</p>

      <p>Il suffit d'aller dans le dossier roms et faites glisser déposer vos roms!</p>
      <br>
      <li>
        <h3>Avec WinSCP</h3>
      </li> 
    </ol> 
    <br>
    <p>Connectez-vous simplement sur la console en sftp, et ajoutez vos propres jeux</p>
    <p>Accéder au chemin de fichier suivant : <code>~/RetroPie/roms/</code></p>
    <ul>
      <li>
        Login : <code>pi</code>
      </li>
      <li>
        Password : <code>raspberry</code>
      </li>
      <li>
        IP : L'ip de votre console sur le réseau local
      </li>
      <li>
        Protocol : <code>SFTP</code> (Port <code>22</code>)
      </li>
    </ul>
    <br>
    <DocsImage
      margin="3/4"
      src="https://static.retrobox.tech/img/getting-started/RetroPie/image_8.png" />
    <DocsImage 
      margin="3/4"
      src="https://static.retrobox.tech/img/getting-started/RetroPie/image_9.png" />

    <ul>
      <li>
        Plus d'informations ici: <a
          href="https://github.com/retropie/retropie-setup/wiki/Transferring-Roms">https://github.com/retropie/retropie-setup/wiki/Transferring-Roms</a>
      </li>
    </ul>
    <br>
    <h4>Yay ! Vous avez réussi à installer RetroPie sur la RetroBox, amusez-vous bien !</h4>

    <div class="flex justify-center md:justify-between flex-wrap w-3/4 m-auto">
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_12.png" />  
      <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_13.png" />
    </div>

    (Crash bandicoot 3 Warped sur PS1)

  </div>
</template>

<script>
  import DocsHeading from "../../components/DocsHeading"
  import DocsImage from "../../components/DocsImage"
  export default {
    name: 'FrenchInstallation',
    components: {DocsImage, DocsHeading}
  }
</script>
