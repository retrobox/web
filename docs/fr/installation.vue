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
    <br>
    <DocsHeading label="Première étape: Télécharger l'application" />

    <p>Pour le moment, la dernière version est: 1.00</p>

    <p>Télécharger l'application Retrobox ici : <nuxt-link to="/download">Téléchargement retrobox</nuxt-link></p>

    <DocsImage src="https://static.retrobox.tech/img/app.png" />

    <p>Si vous avez des erreurs, dites-le nous et nous vous aiderons! `(support@retrobox.tech)`</p>

    <br>
    <br>
    <DocsHeading label="L'application, installation de Retropie" />

    <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_3.png" />
    <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_4.png" />

    SCREENSHOT, avec explication
    <br>
    <DocsHeading label="Deuxième étape: ajouter des jeux dans la RetroBox" />

    Pour ajouter des jeux, c'est super simple! Vous avez beaucoup de possibilitées:

    * **I**. Avec l'application, disponible sur Windows, iOS et Android, choisissez simplement votre OS et ajoutez vos propres jeux, avec la liste ou votre propre rom!

    [APP PICTURES GOES HERE]


    *  **II**. Avec windows [Samba] (oui c’est possible, aucun login est requis) :

    <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_10.png" />
    <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_11.png" />

    Pour accéder au serveur SAMBA de la console : Taper `\\RETROPIE` dans la barre de recherche de windows, ou l'adresse IP de la machine.

    Il suffit d'aller dans le dossier roms et faites glisser déposer vos roms!

    *  **III**. Avec WinSCP, connectez-vous simplement sur la console en sftp, et ajoutez vos propres jeux

    Login : pi

    Password : raspberry

    <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_8.png" />
    <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_9.png" />

    * Plus d'informations ici:

    [https://github.com/retropie/retropie-setup/wiki/Transferring-Roms](https://github.com/retropie/retropie-setup/wiki/Transferring-Roms)

    <br><br>
    <DocsHeading label="Yay ! Vous avez réussi à installer RetroPie sur la RetroBox, amusez-vous!" />

    <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_12.png" />
    <DocsImage src="https://static.retrobox.tech/img/getting-started/RetroPie/image_13.png" />

    (Crash bandicoot 3 Warped sur PS1)

    ## Autres

    ASAP

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
