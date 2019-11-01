<template>
  <DashboardPage>
    <h2 class="dashboard-page-title">
      {{ $t('user-dash.console.title') }}
    </h2>
    <div class="console-details">
      <div class="console-card">
        <div class="console-card-content">
          <div class="console-card-left">
            <div class="console-card-id">
              <span class="console-card-id-pre">#</span><span>{{ console.id }}</span>
            </div>
            <div class="console-card-image">
              <img
                :class="{'console-image-offline': !console.is_online }"
                src="~/assets/images/console.png"
                class="header-title-logo">
            </div>
            <div>
              <div
                v-if="loading"
                class="console-card-status">
                <div class="status-text">
                  {{ $t('user-dash.console.connecting') }}
                </div>
              </div>
              <div
                v-if="!loading && console.is_online"
                class="console-card-status">
                <div class="status green"></div>
                <div class="status-text">
                  {{ $t('user-dash.console.status.online') }}
                </div>
              </div>
              <div
                v-if="!loading && !console.is_online"
                class="console-card-status">
                <div class="status red"></div>
                <div class="status-text">
                  {{ $t('user-dash.console.status.offline') }}
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="loading"
            class="console-card-fields-loading">
            <Icon
              value="fas fa-sync"
              spin />
          </div>
          <div
            v-if="!loading"
            class="console-card-right">
            <div class="console-card-fields">
              <div v-if="console.is_online">
                <div class="console-card-field storage">
                  <div class="console-card-field-name">
                    <div class="console-card-field-icon">
                      <Icon value="fas fa-database" />
                    </div>
                    <span>{{ $t('user-dash.console.free-space') }}</span>
                  </div>
                  <div class="console-card-field-value">
                    <span class="data">{{ console.free_disk_space }}</span>
                    <span class="data-after">Gb</span>
                  </div>
                </div>
                <div class="console-card-field temp">
                  <div class="console-card-field-name">
                    <div class="console-card-field-icon">
                      <Icon value="fas fa-thermometer-half" />
                    </div>
                    <span>{{ $t('user-dash.console.cpu-temp') }}</span>
                  </div>
                  <div class="console-card-field-value">
                    <span class="data">{{ console.cpu_temp }}</span>
                    <span class="data-after">°C</span>
                  </div>
                </div>
                <div class="console-card-field uptime">
                  <div class="console-card-field-name">
                    <div class="console-card-field-icon">
                      <Icon value="fas fa-clock" />
                    </div>
                    <span>{{ $t('user-dash.console.uptime') }}</span>
                  </div>
                  <div class="console-card-field-value">
                    {{ console.up_time }}
                  </div>
                </div>
                <div class="console-card-field network">
                  <div class="console-card-field-name">
                    <div class="console-card-field-icon">
                      <Icon value="fas fa-wifi" />
                    </div>
                    <span>{{ $t('user-dash.console.wifi-network') }}</span>
                  </div>
                  <div class="console-card-field-value">
                    {{ console.wifi }}
                  </div>
                </div>
              </div>
              <div class="console-card-field games">
                <div class="console-card-field-name">
                  <div class="console-card-field-icon">
                    <Icon value="fas fa-gamepad" />
                  </div>
                  <span>{{ $t('user-dash.console.installed-games') }}</span>
                </div>
                <div class="console-card-field-value">
                  <span class="data">14</span>
                </div>
              </div>
            </div>
            <div class="console-card-actions">
              <div
                v-if="console.is_online"
                class="button console-card-action ssh"
                @click="openSshSession()">
                <Icon value="fas fa-terminal" />
                {{ $t('user-dash.console.terminal') }}
              </div>
              <div class="console-card-actions-power no-text">
                <div
                  v-if="console.is_online"
                  class="button console-card-action shutdown"
                  @click="shutdown()">
                  <Icon
                    v-if="!shutdownLoading"
                    value="fas fa-power-off" />
                  <Icon
                    v-else
                    value="fas fa-sync"
                    spin />
                </div>
                <div
                  v-if="console.is_online || rebootLoading"
                  class="button console-card-action reboot"
                  @click="reboot()">
                  <Icon
                    :spin="rebootLoading"
                    value="fas fa-sync" />
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
          height="75%"
          width="70%"
          name="sshSession">
          <div class="p-0">
            <!-- <h4 class="mb-3 mt-3">
              SSH Session
            </h4> -->
            <div class="ssh-session-modal-content">
              <!-- {{ sshSessionUrl }} -->
              <iframe
                id="gotty-iframe"
                :src="sshSessionUrl"
                style="width: 100%;height: 70vh" >
              </iframe>
            </div>
          </div>
          <div
            class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 text-center cancel-button"
            @click="$modal.hide('sshSession')"
          >
            {{ $t("close") }}
          </div>
        </modal>
      </client-only>
    </div>
  </DashboardPage>
</template>

<script>
import DashboardPage from "~/components/DashboardPage"
import Icon from "~/components/Icon"
import Moment from "moment"
import io from 'socket.io-client'

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
  },
  data: () => ({
    console: {
      is_online: false
    },
    loading: true,
    shutdownLoading: false,
    rebootLoading: false,
    webSocketSessionId: '',
    socket: null,
    sshSessionUrl: '',
    sshSessionStatus: 'asking'
  }),
  async asyncData({ app: { apitator }, params }) {
    let res = await apitator.graphQL(
      `query ($id: String!){
          getOneConsole(id: $id) {
            id,
            created_at
          }
        }`, {id: params.id}, {withAuth: true})
    return {
      console: res.data.data.getOneConsole
    }
  },
  mounted () {
    if (!this.$isServer) {
      this.fetchStatus()
      this.connectWebSocket()
    }
  },
  methods: {
    fetchStatus() {
      this.loading = true
      this.$apitator.graphQL(`
        query ($id: String!){
          getOneConsole(id: $id, with_status: true) {
            id,
            cpu_temp,
            gpu_temp,
            up_time,
            wifi,
            ip,
            created_at,
            is_online,
            used_disk_space,
            free_disk_space,
            disk_size,
            disk_usage
          }
        }
      `, {
        id: this.$route.params.id
      }, {
        withAuth: true
      }).then(res => {
        this.loading = false
        let data = res.data.data.getOneConsole
        data.up_time = Moment.duration(data.up_time * 1000).humanize()
        this.console = {...this.console, ...data}
        console.log(this.console)
      })
    },
    shutdown: function () {
      if (!this.shutdownLoading) {
        this.shutdownLoading = true
        this.$apitator.graphQL(`
          mutation ($id: String!){
            shutdownConsole(id: $id)
          }`, {
          id: this.$route.params.id
        }, {
          withAuth: true
        }).then(res => {
          this.shutdownLoading = false
        })
      }
    },
    reboot: function () {
      if (!this.rebootLoading) {
        this.rebootLoading = true
        this.$apitator.graphQL(`
          mutation ($id: String!){
            rebootConsole(id: $id)
          }`, {
          id: this.$route.params.id
        }, {
          withAuth: true
        }).then(res => {
          this.rebootLoading = false
        })
      }
    },
    connectWebSocket: function () {
      console.log("WS_ENDPOINT: ", this.$env.WS_ENDPOINT);
      // connect web socket to wait for update on console status
      this.socket = io(this.$env.WS_ENDPOINT, {
        transportOptions: {
          polling: {
            extraHeaders: {
              'authorization': this.$apitator.getAuthorizationToken(),
              'x-client-type': 'web'
            }
          }
        }
      });
      this.socket.on('connect', () => {
        console.log('Connected with socket server')
      });

      this.socket.off('console_status');
      this.socket.off('socket-id');
      this.socket.off('gotty-installed');
      this.socket.off('ssh-opened');
      this.socket.on('socket-id', (data) => {
        this.webSocketSessionId = data;
        console.log('> SOCKET: Received socket session id: ' + this.webSocketSessionId)
      });
      this.socket.on('console_status', (data) => {
        console.log('Console status update', data);
        console.log(this.console);
        this.console.is_online = data.isOnline;
        if (data.isOnline) {
          this.shutdownLoading = false;
          this.rebootLoading = false;
          this.fetchStatus();
        }
      });
      this.socket.on('gotty-installed', () => {
        console.log('Gotty installed');
        this.sshSessionStatus = 'gotty-installed'; //now trying to launch gotty and locatunnel
      });
      this.socket.on('ssh-opened', (data) => {
        console.log('SSH opened');
        console.log(data);
        this.sshSessionUrl = data;
        this.sshSessionStatus = 'opened';
      });
    },
    openSshSession: function () {
      this.$modal.show('sshSession');
      if (this.sshSessionUrl === '') {
        console.log('Open ssh session...');
        this.$apitator.graphQL(`
          query ($id: String!, $webSessionId: String!){
            openConsoleSshSession(id: $id, webSessionId: $webSessionId)
          }`, {
          id: this.$route.params.id,
          webSessionId: this.webSocketSessionId
        }, {
          withAuth: true
        })
      }
    }
  }
}
</script>
