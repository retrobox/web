<template>
  <DashboardPage>
    <h2 class="dashboard-page-title">
      {{ $t('user-dash.consoles.title') }}
    </h2>
    <div
      v-if="consoles.length === 0"
      class="shop-empty-container no-top-margin">
      <div class="shop-empty-icon">
        <Icon value="fas fa-times-circle" />
      </div>
      <div class="shop-empty-title">
        <h3>{{ $t('user-dash.consoles.empty') }}</h3>
      </div>
    </div>
    <div
      v-else
      class="console-mosaic">
      <div
        v-for="_console in consoles"
        :key="_console.id"
        class="console-card">
        <div class="console-card-content">
          <div class="console-card-left">
            <div class="console-card-id">
              <span class="console-card-id-pre">#</span><span>{{ _console.id }}</span>
            </div>
            <div class="console-card-image">
              <img
                :class="{'console-image-offline': !_console.is_online }"
                src="~/assets/images/console.png"
                class="header-title-logo">
            </div>
            <div>
              <div
                v-if="_console.is_online"
                class="console-card-status">
                <div class="status green"></div>
                <div class="status-text">
                  {{ $t('user-dash.console.status.online') }}
                </div>
              </div>
              <div
                v-if="!_console.is_online"
                class="console-card-status">
                <div class="status red"></div>
                <div class="status-text">
                  {{ $t('user-dash.console.status.offline') }}
                </div>
              </div>
            </div>
          </div>
          <div class="console-card-right">
            <div class="console-card-description">
              <div class="console-card-fields">
                <div class="console-card-field storage">
                  <div class="console-card-field-name">
                    <div class="console-card-field-icon">
                      <Icon value="fas fa-database" />
                    </div>
                    <span>{{ $t('user-dash.console.storage') }}</span>
                  </div>
                  <div class="console-card-field-value">
                    <span class="data">{{ _console.storage }}</span>
                    <span class="data-after">Gb</span>
                  </div>
                </div>
                <div class="console-card-field color">
                  <div class="console-card-field-name">
                    <div class="console-card-field-icon">
                      <Icon value="fas fa-tint" />
                    </div>
                    <span>{{ $t('user-dash.console.color') }}</span>
                  </div>
                  <div class="console-card-field-value">
                    <span
                      :style="'color:' + _console.color "
                      class="data">{{ _console.color }}</span>
                  </div>
                </div>
                <div class="console-card-field storage">
                  <div class="console-card-field-name">
                    <div class="console-card-field-icon">
                      <Icon value="fas fa-code-branch" />
                    </div>
                    <span>{{ $t('user-dash.console.version') }}</span>
                  </div>
                  <div class="console-card-field-value">
                    <span class="data">{{ _console.version }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="console-card-actions">
              <button
                class="button console-card-action details"
                @click="$router.push(localePath({name: 'dashboard-console-id', params: {id: _console.id}}))">
                <Icon value="fas fa-cog" />
                {{ $t('user-dash.console.manage') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardPage>
</template>

<script>
import DashboardNav from "~/components/DashboardNav"
import Icon from "~/components/Icon"
import Error from "~/components/Error"
import DashboardPage from "../../../components/DashboardPage";

export default {
  middleware: 'authenticated',
  components: {
      DashboardPage,
    DashboardNav,
    Icon,
    Error
  },
  head() {
    return {
      title: "List of consoles"
    }
  },
  data: () => ({
    consoles: []
  }),
  async asyncData({ app: { apitator } }) {
    let res = await apitator.graphQL(`query{
      getManyConsoles{
        id
        color
        storage
        version
        is_online
        created_at
        first_boot_at
      }
    }`, {}, {withAuth: true})
    return {
      consoles: res.data.data.getManyConsoles
    }
  }
}
</script>
