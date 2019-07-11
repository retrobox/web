<template>
  <DashboardPage>
    <h2 class="dashboard-page-title">
      Gérer ma console
    </h2>
    <div class="console-mosaic">
      <div class="console-card">
        <div class="console-card-content">
          <div class="console-card-left">
            <div class="console-card-id">
              <span class="console-card-id-pre">#</span><span>TEVM9</span>
            </div>
            <div class="console-card-image">              
              <img
                src="~/assets/images/console.png"
                class="header-title-logo">
            </div>
            <div class="console-card-status">
              <div class="status green"></div>
              <div class="status-text">Online</div>
            </div>
          </div>
          <div class="console-card-right">
            <div class="console-card-fields">
              <div class="console-card-field storage">
                <div class="console-card-field-name">
                  <div class="console-card-field-icon">
                    <Icon value="fas fa-database" />
                  </div>
                  <span>Storage remaining</span>
                </div>
                <div class="console-card-field-value">
                  <span class="data">14</span>
                  <span class="data-after">Gb</span>
                </div>
              </div>
              <div class="console-card-field temp">
                <div class="console-card-field-name">
                  <div class="console-card-field-icon">
                    <Icon value="fas fa-thermometer-half" />
                  </div>
                  <span>CPU temp</span>
                </div>
                <div class="console-card-field-value">
                  <span class="data">36</span>
                  <span class="data-after">°C</span>
                </div>
              </div>
              <div class="console-card-field uptime">
                <div class="console-card-field-name">
                  <div class="console-card-field-icon">
                    <Icon value="fas fa-clock" />
                  </div>
                  <span>Up time</span>
                </div>
                <div class="console-card-field-value">
                  4 Hours and 14 minutes
                </div>
              </div>
              <div class="console-card-field network">
                <div class="console-card-field-name">
                  <div class="console-card-field-icon">
                    <Icon value="fas fa-wifi" />
                  </div>
                  <span>Wifi network</span>
                </div>
                <div class="console-card-field-value">
                  fr-lefuturiste-wifi
                </div>
              </div>
              <div class="console-card-field games">
                <div class="console-card-field-name">
                  <div class="console-card-field-icon">
                    <Icon value="fas fa-gamepad" />
                  </div>
                  <span>Installed games</span>
                </div>
                <div class="console-card-field-value">                
                  <span class="data">14</span>
                </div>
              </div>
            </div>
            <div class="console-card-actions">
              <div class="button console-card-action shutdown">
                <Icon value="far fa-stop-circle" /> Shutdown
              </div>
              <div class="button console-card-action add">
                <Icon value="fas fa-plus-square" /> Add a game
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
      title: "Manage console..."
    }
  }
}
</script>
