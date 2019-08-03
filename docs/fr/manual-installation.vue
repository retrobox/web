<template>
  <div>
    <DocsHeading label="Matériels"/>

    <ul>
      <li>Un ordinateur connecté à Internet</li>
      <li>La RetroBox (kit ou non)</li>
      <li>Une carte SD de minimum 4 go (8go recommandé)</li>
      <li>Cable USB micro USB to USB</li>
      <li>Mini HDMI to HDMI</li>
      <li>Chargeur 5V</li>
      <li>Manette (Liste de compatibilité sur le <a
        href="https://github.com/RetroPie/RetroPie-Setup/wiki/Controller-Configuration">wiki retropie</a>))
      </li>
      <li>Un réseau wifi WPA/WEP</li>
    </ul>

    <br>
    <DocsHeading label="Fichiers nécessaires"/>

    <ul>
      <li>RetroPie: <a href="https://retropie.org.uk/download/">Télécharger sur retropie.org.uk</a></li>
      <li>
        Win32Diskimager
        <a href="https://sourceforge.net/projects/win32diskimager/">Télécharger sur sourceforge.net</a>
      </li>
      <li>Ou: <a href="https://etcher.io/">Etcher</a></li>
      <li>
        Putty:
        <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html">
          Télécharger sur www.chiark.greenend.org.uk
        </a>
      </li>
      <li>
        WinSCP:
        <a href="https://winscp.net/eng/download.php](https://winscp.net/eng/download.php">
          Télécharger sur winscp.net</a>
      </li>
    </ul>

    <br>
    <DocsHeading label="Préface"/>

    <ul>
      <li>Soyez patient, cela peut prendre du temps</li>
      <li>Si vous avez le moindre problème contactez nous ! (Sur notre site ou par e-mail : <a
        href="mailto:support@retrobox.tech">support@retrobox.tech</a>)
      </li>
    </ul>

    <br>
    <DocsHeading label="Partie sur l'ordinateur"/>

    <p>
      Graver l'image de RetroPie sur la carte sd avec <a href="https://etcher.io/">Etcher</a> ou win32diskimager, dans
      notre cas nous utiliserons Etcher.
    </p>

    <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_2.png"/>

    <b>Créer deux fichier à la racine de votre carte SD (/boot) :</b>

    <ul>
      <li>
        Créez un fichier <code>ssh</code> (sans extension) pour activer l'interface ssh sans aller dans les menus du
        raspberry pi
      </li>
      <li>
        Créez un fichier <code>wifikeyfile.txt</code> pour se connecter au réseau wifi plus facilement
      </li>
    </ul>

    <br>
    <p>Le contenu du fichier doit ressembler à ceci :</p>

    <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_7.png"/>

    <ul>
      <li>Éjecter la carte sd et insérez là dans votre RetroBox et patientez pour le premier démarrage</li>
    </ul>

    <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_3.png"/>

    <DocsHeading label="Partie sur télévision"/>

    <ul>
      <li>Branchez la RetroBox en HDMI sur un écran, Puis démarré la. (En ayant branché la manette)</li>
      <li>Aller dans le menu RetroPie, puis dans "Wifi"</li>
      <li>Vous avez plusieurs façon de configurer un réseau wifi :</li>
    </ul>

    <div class="flex justify-center md:justify-between flex-wrap w-3/4 m-auto">
      <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_6.png"/>
      <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_4.png"/>
      <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_5.png"/>
    </div>
    <ul>
      <li>
        Avec le fichier <code>wifikeyfile.txt</code> que vous avez créé juste avant, importez le en selectionnant <code>Import wifi
        credentials...</code>.
      </li>
      <li>
        Notez l'adresse ip pour vous connecter plus tard avec Putty.
      </li>
    </ul>

    <br>
    <DocsHeading label="Retour sur l’ordinateur" />

    <ul>
      <li>
        Se connecter en ssh sur l’adresse ip de la RetroBox avec le logiciel Putty, puis, tapez ceci :
        <ul>
          <li><b>En login :</b> pi</li>
          <li><b>En mot de passe :</b> raspberry</li>
          <li><b>Port :</b> 21</li>
        </ul>
      </li>
    </ul>

    <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_11.png" />

    <DocsHeading label="Configuration principale de la RetroBox" />

    <p>Pour pouvoir utiliser l’écran, il vous faut exécuter certaines commandes en SSH:</p>

    <ol>
      <li>
        <DocsCode code="git clone https://github.com/swkim01/waveshare-dtoverlays.git" />
      </li>
      <li>
        <DocsCode code="sudo cp waveshare-dtoverlays/waveshare32b.dtbo /boot/overlays/waveshare32b.dtbo" />
      </li>
      <li>
        <DocsCode code="sudo nano /boot/config.txt" />
      </li>
    </ol>

    <hr>

    <p>Ajoutez :</p>

    <DocsCode
      :code="`
      # CONFIG RETROBOX

      # Enable audio (loads snd_bcm2835)
      dtparam=audio=on
      overscan_scale=1

      dtparam=spi=on
      dtoverlay=waveshare32b

      hdmi_force_hotplug=1
      hdmi_cvt=320 240 60 1 0 0 0
      hdmi_group=2
      hdmi_mode=1
      hdmi_mode=87

      dtoverlay=pwm-2chan,pin=19,func=2,pin2=13,func2=4
      disable_audio_dither=1

      dtoverlay=waveshare32b:rotate=270,speed=35000000,fps=60

      disable_splash=1
      avoid_warnings=1

      arm_freq=1010
      gpu_freq=300
      #lcd_on
      `"
      lang="php" />

    <div class="docs-alert info">
      <i class="icon fas fa-question-circle"></i>
      <p>Faîtes CTRL+C pour copier le code ci-dessus, puis dans putty, faîtes clique droit pour coller</p>
    </div>
    <div class="docs-alert info">
      <i class="icon fas fa-greater-than-equal"></i>
      <p>Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.</p>
    </div>

    <hr>

    <p>Continuer les commandes avec :</p>

    <DocsCode
      stacked
      code="ls /dev/fb" />
    <DocsCode
      stacked
      code="sudo apt-get install cmake" />
    <DocsCode
      stacked
      code="git clone https://github.com/tasanakorn/rpi-fbcp" />
    <DocsCode
      stacked
      code="cd rpi-fbcp" />
    <DocsCode
      stacked
      code="mkdir build" />
    <DocsCode
      :stacked="true"
      code="cd build" />
    <DocsCode
      stacked
      code="cmake .." />
    <DocsCode
      stacked
      code="make" />
    <DocsCode
      stacked
      code="sudo install fbcp /usr/local/bin/fbcp" />
    <DocsCode
      code="sudo nano /etc/rc.local" />

    <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_16.png" />

    <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_14.png" />

    <p>Tout en bas de la page, <b>AVANT</b> "exit 0" rajoutez :</p>

    <code>/usr/local/bin/fbcp &</code>

    <br>

    <div class="docs-alert info">
      <i class="icon fas fa-question-circle"></i>
      <p>Faîtes CTRL+C pour copier le code ci-dessus, puis dans putty, faîtes clique droit pour coller</p>
    </div>

    <div class="docs-alert info">
      <i class="icon fas fa-greater-than-equal"></i>
      <p>Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.</p>
    </div>

    <p>Redémarrez la console en utilisant la commande : <code>sudo reboot</code></p>

    <p>Une fois redémarré, l’écran et le son devrait être fonctionnel, mais pas le joystick et les boutons.</p>
    <br>

    <DocsHeading label="Installation rapide de displaySwitch, du theme et de .bashrc" />

    <ol>
      <li>
        <code>
          sudo wget -N https://raw.githubusercontent.com/retrobox/console-modules/master/installdisplayswitch.sh && \
          sudo chmod +x /home/pi/installdisplayswitch.sh && \
          sudo ./installdisplayswitch.sh
        </code>
      </li>
      <li>
        <code>
          sudo wget -N https://raw.githubusercontent.com/retrobox/console-modules/master/installretroboxtheme.sh && \
          sudo chmod +x /home/pi/installretroboxtheme.sh && \
          sudo ./installretroboxtheme.sh
        </code>
      </li>
      <li>
        <code>
          sudo wget -N https://raw.githubusercontent.com/retrobox/console-modules/master/installbashrc.sh && \
          sudo chmod +x /home/pi/installbashrc.sh && \
          sudo ./installbashrc.sh
        </code>
      </li>
    </ol>

    <DocsHeading label="Configuration des joystick et des boutons" />

    <h3>Installation de "mk_arcade_joystick_rpi"</h3>

    <div class="flex justify-center md:justify-between flex-wrap w-3/4 m-auto">
      <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_17.png" />
      <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_19.png" />
      <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_20.png" />
      <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_24.png" />
      <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_23.png" />
      <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_22.png" />
      <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_21.png" />
    </div>
    <ul>
      <li>Puis redémarrez la console.</li>
      <li>Reconnectez vous sur le PI avec Putty puis exécuter les commandes suivantes :</li>
    </ul>

    <h3>Continuer les commandes avec :</h3>

    <DocsCode
      stacked
      code="sudo git clone --recursive --depth 1 https://github.com/retrobox/console-modules/ /home/pi/console-modules/" />
    <DocsCode
      stacked
      code="sudo cp -r /home/pi/console-modules/inputsDriver/etc/modules /etc/modules" />
    <DocsCode
      stacked
      code="sudo cp -r /home/pi/console-modules/inputsDriver/etc/modprobe.d/mk_arcade_joystick_rpi.conf /etc/modprobe.d/" />
    <DocsCode
      stacked
      code="sudo cp -r /home/pi/console-modules/inputsDriver/opt/retropie/configs/all/emulationstation/es_input.cfg
    /opt/retropie/configs/all/emulationstation//" />
    <DocsCode
      stacked
      code="sudo cp -r -a /home/pi/console-modules/inputsDriver/opt/retropie/configs/all/retroarch/autoconfig/.
    /opt/retropie/configs/all/retroarch/autoconfig/" />
    <DocsCode
      code="sudo cp -r -a /home/pi/console-modules/inputsDriver/opt/retropie/configs/all/retroarch-joypads/.
    /opt/retropie/configs/all/retroarch-joypads/" />

    <h3>Installation de I2C Detect</h3>

    <DocsCode
      code="sudo apt-get install i2c-tools" />

    <b>Puis regardez l’adresse du chip :</b>

    <DocsCode
      code="sudo i2cdetect -y 1" />

    <DocsImage src="https://static.retrobox.tech/img/manual/RetroPie/FR/image_25.png" />

    <p>Vous avez donc une valeur égale à 0x20 (Si tout va bien)</p>

    <p>Le MCP23017 est bien pris en compte !</p>

    <p>
      Votre installation est désormais terminée !
    </p>

    <div class="docs-alert info">
      <i class="icon fas fa-question-circle"></i>
      <p>Vous n’avez plus besoin de manette désormais</p>
    </div>

    <hr>

    <DocsHeading label="Conclusion"/>

    <p>Après avoir réussi l'installation manuelle de RetroPie, vous pouvez désormais suivre ce <nuxt-link to="/docs/installation">manuel</nuxt-link>
      pour installer des jeux, si vous avez des problèmes qui ne sont pas listés contactez nous !</p>

    <br>

  </div>
</template>
<script>
  import DocsHeading from "~/components/Docs/Heading"
  import DocsImage from "~/components/Docs/Image"
  import DocsMarkdown from "~/components/Docs/Markdown"
  import DocsCode from "~/components/Docs/Code"

  export default {
    name: 'FrenchManualInstallation',
    components: {DocsCode, DocsMarkdown, DocsImage, DocsHeading}
  }
</script>
