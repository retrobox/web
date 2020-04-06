<template>
  <div class="socials">
    <ul>
      <li class="facebook">
        <a
          :href="$env.FACEBOOK_URL"
          :title="$t('facebook.title')">
          <Icon value="fab fa-facebook" />
        </a>
      </li>
      <li class="twitter">
        <a
          :href="$env.TWITTER_URL"
          :title="$t('twitter.title')">
          <Icon value="fab fa-twitter" />
        </a>
      </li>
      <li class="github">
        <a
          :href="$env.GITHUB_URL"
          :title="$t('github.title')">
          <Icon value="fab fa-github" />
        </a>
      </li>
      <li class="discord">
        <a
          :href="$env.DISCORD_URL"
          :title="$t('discord.title')">
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
