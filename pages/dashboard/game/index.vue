<template>
  <DashboardPage>
    <div class="game-store">
      <div class="game-store-top">
        <button
          class="game-store-import"
          @click="$modal.show('importRomModal')">
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
    <client-only>      
      <modal 
        adaptive 
        class="modal" 
        height="auto" 
        name="importRomModal">
        <div class="p-4">
          <h3 class="mb-6 mt-3">
            Import a ROM
          </h3>
          <div
            v-if="loading"
            class="loading-container">
            <div class="loading">
              <Icon
                value="fas fa-sync"
                spin />
            </div>
          </div>
          <div v-else>
            <br />
            <input
              id="romInput"
              ref="romInput"
              accept=".zip,.n64,.nes,.bin" 
              type="file"
              @change="handleRomUpload" />
            <br />
            <br />
          </div>
        </div>
        <div class="">
          <div
            class="w-full button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 text-center cancel-button"
            @click="$modal.hide('importRomModal')"
          >
            Close
          </div>
        </div>
      </modal>
    </client-only>
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
    searchInput: '',
    uploadedRom: null,
    loading: false
  }),
  methods: {
    handleRomUpload: function () {
      this.uploadedRom = this.$refs.romInput.files[0]
      let formData = new FormData();
      formData.append('file', this.uploadedRom)
      this.loading = true
      this.$apitator.post('/dashboard/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withAuth: true
      }).then(() => {
        this.loading = false
      })
    }
  }
}
</script>
