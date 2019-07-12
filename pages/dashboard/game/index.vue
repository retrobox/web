<template>
  <DashboardPage>
    <div class="game-store">
      <div class="game-store-top">
        <button class="game-store-import">
          <Icon value="fas fa-upload" />
          Import a ROM
        </button>
        <div class="game-store-search">
          <input
            v-model="searchInput"
            placeholder="Search for a game..."
            type="text"
            class="game-store-search-input" />
          <button class="game-store-search-button">
            <Icon value="fas fa-search" />
          </button>
        </div>
      </div>
      <div class="game-store-items">    
        <h3 class="game-store-category-title">Vos ROMS téléchargés</h3>

        <div class="game-store-mosaic">
          <div class="game-card">
            <div 
              class="game-card-image" 
              style="background-image: url('https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg?1562875128188')">
            </div>
            <div class="game-card-right">
              <div class="game-card-content">
                <div class="game-card-title">
                  Sonic the hedgehog
                </div>
                <p class="game-card-description">
                  Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium...
                </p>
                <div class="game-card-fields item-fields">
                  <div class="item-field">
                    <div class="item-field-name">
                      <div class="item-field-icon">
                        <Icon value="far fa-calendar" />
                      </div>
                    </div>
                    <div class="item-field-value">
                      <span class="data">1991</span>
                    </div>
                  </div>
                  <div class="item-field">
                    <div class="item-field-name">
                      <div class="item-field-icon">
                        <Icon value="fas fa-gamepad" />
                      </div>
                    </div>
                    <div class="item-field-value">
                      <span class="data">SEGA Master System</span>
                    </div>
                  </div>
                  <div class="item-field">
                    <div class="item-field-name">
                      <div class="item-field-icon">
                        <Icon value="fas fa-tag" />
                      </div>
                    </div>
                    <div class="item-field-value">
                      <span class="data">Platform game, Sonic game</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardPage>
</template>

<script>
import DashboardPage from "~/components/DashboardPage"
import Icon from "~/components/Icon"

export default {
  middleware: 'authenticated',
  components: {
    DashboardPage,
    Icon
  },
  head() {
    return {
      title: "List of games"
    }
  },
  data: () => ({
    searchInput: ''
  })
}
</script>
