<template>
  <div class="socials">
    <ul>
      <li class="facebook">
        <a
          :href="$t('facebook').link"
          :title="$t('facebook').title">
          <Icon value="fab fa-facebook" />
        </a>
      </li>
      <li class="twitter">
        <a
          :href="$t('twitter').link"
          :title="$t('twitter').title">
          <Icon value="fab fa-twitter" />
        </a>
      </li>
      <li class="github">
        <a
          :href="$t('github').link"
          :title="$t('github').title">
          <Icon value="fab fa-github" />
        </a>
      </li>
      <li class="discord">
        <a
          :href="$t('discord').link"
          :title="$t('discord').title">
          <Icon value="fab fa-discord" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "./Icon"

export default {
  name: 'Socials',
  components: {Icon}
}
</script>
