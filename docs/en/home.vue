<template>
  <div>
    <div class="docs-section">
      <div>

        <h2>Welcome !</h2>

        The RetroBox is a portable, open source console that runs on RetroPie, and allows you to replay all the games of your childhood, with its autonomy of about 7 hours, you will never know how to stop!

        <br>

        <h3>Age requirement</h3>

        According to our estimates a 13 year old child with a little help from an adult may be able to understand, to assemble his console himself. But on average it remains <b>13 and over</b>.
        <br>
        Estimated construction time: between <b>5 hours and 5h30</b>
        <br>
        Construction time varies between people and your abilities.

      </div>

      <DocsImage
        src="https://static.retrobox.tech/img/about/RETROBOX1.png" />
    </div>

    <br>

    <div class="docs-section">
      <div>

        <h3>If you already have these skills to mount a RetroBox, it's more than perfect!</h3>

        <ul>
          <li>
            Some soldering basics (If you have already done some electronic systems)
          </li>
          <li>
            Some knowledge to recognize the basis of the components
          </li>
        </ul>

        <br>

        If you don't have his skills, no problem! You will already learn a lot here, but if you have it you will go much faster!

        <h3>What will you learn with RetroBox?</h3>

        RetroBox exists for people who want to learn the basics of electronics, to make them want to do projects, but with RetroBox you will essentially learn:

        <ul>
          <li>How to solder</li>
          <li>The basis of electronics and the functions of certain components</li>
          <li>Notions in Linux</li>
          <li>How to create your own games</li>
          <li>The existence of certain games ... unknown to the general public</li>
        </ul>

      </div>
      <DocsImage
        src="https://static.retrobox.tech/img/docs/home/pcb_render_top.png" />
    </div>
    <br>

    <h3>Functionalities</h3>

    <ul>
      <li>
        Possibility to install NOOBS or Raspbian, with touch support.
      </li>
      <li>
        Emulate up to 55 consoles with RetroPie
      </li>
      <li>
        Long battery life and fast charging
      </li>
      <li>
        3W amplifier, to have the best sound!
      </li>
      <li>
        Portable, and open-source!
      </li>
      <li>
        Unlimited disk space!
      </li>
      <li>
        An ultra-furnished wiki
      </li>
      <li>
        A staff always at your help
      </li>
    </ul>

    <div class="docs-alert info">
      <i class="icon fas fa-shopping-cart"></i>
      <p>So ? What are you waiting for?</p>
    </div>

  </div>
</template>

<script>
  import DocsImage from "~/components/Docs/Image"
  export default {
    name: 'EnglishHome',
    components: {DocsImage}
  }
</script>
