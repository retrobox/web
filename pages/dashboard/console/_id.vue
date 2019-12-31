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
              <div class="console-card-actions-no-power">
                <div
                  class="button console-card-action token"
                  @click="openTokenModal()">
                  <Icon value="fas fa-key" />
                  <span class="button-text">{{ $t('user-dash.console.token') }}</span>
                </div>
                <div
                  v-if="console.is_online"
                  class="button console-card-action ssh"
                  @click="openTerminalSession()">
                  <Icon value="fas fa-terminal" />
                  <span class="button-text">{{ $t('user-dash.console.terminal') }}</span>
                </div>
              </div>
              <div class="console-card-actions-power no-text">
                <Tooltip :value="$t('user-dash.console.shutdown')">
                  <div
                    v-if="console.is_online"
                    class="button console-card-action shutdown"
                    @click="$modal.show('shutdown')">
                    <Icon
                      v-if="!shutdownLoading"
                      value="fas fa-power-off" />
                    <Icon
                      v-else
                      value="fas fa-sync"
                      spin />
                  </div>
                </Tooltip>
                <Tooltip :value="$t('user-dash.console.reboot')">
                  <div
                    v-if="console.is_online || rebootLoading"
                    class="button console-card-action reboot"
                    @click="$modal.show('reboot')">
                    <Icon
                      :spin="rebootLoading"
                      value="fas fa-sync" />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <client-only>
        <modal
          adaptive
          class="console-token-modal modal"
          height="auto"
          name="tokenModal">
          <div class="modal-container">
            <h3 class="modal-title">
              Token of console #{{ console.id }}
            </h3>
            <div class="modal-content text-center">
              <input 
                v-model="console.token"
                class="token-input"
                type="text" />
            </div>
          </div>
          <div
            class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 cancel-button text-center"
            @click="$modal.hide('tokenModal')"
          >
            {{ $t("close") }}
          </div>
        </modal>
        <modal
          adaptive
          class="modal"
          height="75%"
          width="70%"
          name="terminalSession">
          <div class="p-0">
            <div class="terminal-session-modal-content">
              <div id="terminal"></div>
            </div>
          </div>
          <div
            class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 text-center cancel-button"
            @click="$modal.hide('terminalSession')"
          >
            {{ $t("close") }}
          </div>
        </modal>
        <modal
          adaptive
          class="modal"
          height="auto"
          name="shutdown">
          <div class="p-4">
            <h3 class="mb-6 mt-3">
              {{ $t("user-dash.console.shutdown-confirmation.title") }}
            </h3>
            <p>{{ $t("user-dash.console.shutdown-confirmation.description") }}</p>
            <br />
          </div>
          <div class="flex flex-wrap">
            <div
              class="modal-button"
              @click="$modal.hide('shutdown')"
            >
              {{ $t("cancel") }}
            </div>
            <div
              class="modal-button"
              @click="shutdown()"
            >
              {{ $t("user-dash.console.shutdown") }}
            </div>
          </div>
        </modal>
        <modal
          adaptive
          class="modal"
          height="auto"
          name="reboot">
          <div class="p-4">
            <h3 class="mb-6 mt-3">
              {{ $t("user-dash.console.reboot-confirmation.title") }}
            </h3>
            <p>{{ $t("user-dash.console.reboot-confirmation.description") }}</p>
            <br />
          </div>
          <div class="flex flex-wrap">
            <div
              class="modal-button"
              @click="$modal.hide('reboot')"
            >
              {{ $t("cancel") }}
            </div>
            <div
              class="modal-button"
              @click="reboot()"
            >
              {{ $t("user-dash.console.reboot") }}
            </div>
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
import Tooltip from "../../../components/Tooltip";
import 'xterm/css/xterm.css'

export default {
  middleware: 'authenticated',
  components: {
    Tooltip,
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
    sshSessionStatus: 'asking',
    terminalSession: null,
    terminal: null
  }),
  async asyncData({ app: { apitator }, params }) {
    let res = await apitator.graphQL(
      `query ($id: String!){
          getOneConsole(id: $id) {
            id,
            created_at,
            token
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
      console.log('Console token: ', this.console.token)
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
        Moment.locale(this.$i18n.locale);
        data.up_time = Moment.duration(data.up_time * 1000).humanize();
        this.console = {...this.console, ...data}
      })
    },
    shutdown: function () {
      this.$modal.hide('shutdown');
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
      this.$modal.hide('reboot');
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
      this.socket.off('terminal-ready');
      this.socket.off('terminal-output');
      this.terminal = null
      //this.socket.off('gotty-installed');
      //this.socket.off('ssh-opened');
      this.socket.on('socket-id', (data) => {
        this.webSocketSessionId = data;
        console.log('> SOCKET: Received socket session id: ' + this.webSocketSessionId)
      });
      this.socket.on('console-status', (data) => {
        console.log('Console status update', data);
        console.log(this.console);
        this.console.is_online = data.isOnline;
        if (data.isOnline) {
          this.shutdownLoading = false;
          this.rebootLoading = false;
          this.fetchStatus();
        }
      });
      // this.socket.on('gotty-installed', () => {
      //   console.log('Gotty installed');
      //   this.sshSessionStatus = 'gotty-installed'; //now trying to launch gotty and locatunnel
      // });
      // this.socket.on('ssh-opened', (data) => {
      //   console.log('SSH opened');
      //   console.log(data);
      //   this.sshSessionUrl = data;
      //   this.sshSessionStatus = 'opened';
      // });
    },
    // openSshSession: function () {
    //   this.$modal.show('sshSession');
    //   if (this.sshSessionUrl === '') {
    //     console.log('Open ssh session...');
    //     this.$apitator.graphQL(`
    //       query ($id: String!, $webSessionId: String!){
    //         openConsoleSshSession(id: $id, webSessionId: $webSessionId)
    //       }`, {
    //       id: this.$route.params.id,
    //       webSessionId: this.webSocketSessionId
    //     }, {
    //       withAuth: true
    //     })
    //   }
    // },
    openTerminalSession: function () {
      this.$modal.show('terminalSession')
      let resize = () => {
        this.socket.emit('terminal-resize', {
          consoleId: this.console.id,
          data: {
            cols: this.terminal.cols,
            rows: this.terminal.rows
          }
        })
      }
      if (this.terminal === null) {
        this.socket.emit('open-terminal', {id: this.console.id})
        this.socket.on('terminal-ready', (data) => {
          let fitAddon = new FitAddon()
          this.terminal = new Terminal({
            cursorBlink: true
          });
          this.terminal.loadAddon(fitAddon)
          fitAddon.fit()
          window.addEventListener('resize', () => {
            fitAddon.fit()
          })
          this.terminal.onResize(data => {
            resize()
          })
          resize()
          this.terminal.open(document.getElementById('terminal'));
          this.terminal.focus()
          this.socket.on('terminal-output', data => {
            this.terminal.write(data)
          })
          this.terminal.onData(data => {
            this.socket.emit('terminal-input', { 
              consoleId: this.console.id,
              data
            })
          })
          console.log('Terminal READY')
        })
      } else {
        setTimeout(() => {
          this.terminal.open(document.getElementById('terminal'));
          fitAddon.fit()
          this.terminal.focus()
          resize()
        }, 300)
      }
    },
    openTokenModal: function () {
      this.$modal.show('tokenModal')
    }
  }
}
</script>
