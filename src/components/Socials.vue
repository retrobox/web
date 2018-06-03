<template>
    <div class="socials">
        <ul>
            <li>
                <a :href="$t('facebook').link" :title="$t('facebook').title">
                    <icon name="brands/facebook" class="icon"></icon>
                </a>
            </li>
            <li>
                <a :href="$t('twitter').link" :title="$t('twitter').title">
                    <icon name="brands/twitter" class="icon"></icon>
                </a>
            </li>
            <li>
                <a :href="$t('github').link" :title="$t('github').title">
                    <icon name="brands/github" class="icon"></icon>
                </a>
            </li>
            <li>
                <a :href="$t('discord').link" :title="$t('discord').title">
                    <icon name="brands/discord" class="icon"></icon>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Socials',
        data() {
            return {}
        }
    }
</script>