<template>
  <div class="dashboard-page-container">
    <div class="dashboard-page">
      <DashboardNav />
      <div class="dashboard-page-content">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2">
            <div class="account-card">
              <div class="account-card-content">
                <div class="account-card-avatar">
                  <img :src="user.last_avatar" />
                </div>
                <div class="account-card-details">
                  <div class="account-card-item account-card-username">
                    {{ user.last_username }}
                  </div>
                  <div class="account-card-item account-card-email">
                    {{ user.last_email }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="account-actions">
              <a
                class="with-link account-action"
                @click="openDestroyAccount()"
              >
                <Icon value="fas fa-trash" />
                {{ $t("user-dash.destroy") }}
              </a>
              <a
                v-if="user.is_admin"
                class="with-link account-action"
                @click="adminDashboard()"
              >
                <Icon value="fas fa-shield-alt" />
                {{ $t("user-dash.admin-panel") }}
              </a>
              <a 
                class="with-link account-action" 
                @click="logout()">
                <Icon value="fas fa-sign-out-alt" />
                {{ $t("user-dash.disconnect") }}
              </a>
            </div>
          </div>
        </div>
        <!-- <div class="account-consoles">
          <h3 class="dividing mb-4">Vos consoles</h3>
          <div class="consoles-mosaic-container">
            <div 
              v-if="consoles.length === true" 
              class="shop-empty-container">
              <div class="shop-empty-icon">
                <Icon value="fas fa-times-circle" />
              </div>
              <div class="shop-empty-title">
                <h3>Vous n'avez pas de consoles</h3>
              </div>
            </div>
            <div class="consoles-mosaic-content">
              <div class="consoles-item">
                <div class></div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <no-ssr>
      <modal 
        adaptive 
        class="modal" 
        height="auto" 
        name="destroyAccount">
        <div class="p-4">
          <h3 class="mb-6 mt-3">
            {{ $t("user-dash.modal-account-delete-title") }}
          </h3>
          <p>{{ $t("user-dash.modal-account-delete-desc") }}</p>
          <br />
          <input
            id="destroy-confirmation"
            v-model="destroyAccountConfirmation"
            type="checkbox"
          />
          <label for="destroy-confirmation">{{
            $t("user-dash.modal-account-delete-confirm")
          }}</label>
          <br />
          <br />
        </div>
        <div class="flex flex-wrap">
          <div
            class="w-full md:w-1/2 button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 text-center cancel-button"
            @click="$modal.hide('destroyAccount')"
          >
            {{ $t("user-dash.modal-account-delete-cancel") }}
          </div>
          <div
            class="w-full md:w-1/2 button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 text-center cancel-button"
            @click="destroyAccount()"
          >
            {{ $t("user-dash.modal-account-delete-cancel-confirm") }}
          </div>
        </div>
      </modal>
    </no-ssr>
  </div>
</template>

<script>
import DashboardNav from "../../components/DashboardNav";
import Icon from "../../components/Icon";

export default {
  middleware: "authenticated",
  components: {
    DashboardNav,
    Icon
  },
  head() {
    return {
      title: "Your profile"
    };
  },
  data() {
    return {
      user: {},
      orderToView: {},
      consoles: [],
      destroyAccountConfirmation: false
    };
  },
  async asyncData(context) {
    let res = await context.app.apitator
          .graphQL(
            `
            query {
              getOneUser {
                id
                last_username
                last_avatar
                last_email
              }
              getManyConsoles {
                id
              }
            }
          `,
            {},
            { withAuth: true }
          )
    let data = res.data.data;
    return {
      user: data.getOneUser,
      consoles: data.getManyConsoles,
    }
  },
  methods: {
    openDestroyAccount() {
      this.$modal.show("destroyAccount");
    },
    destroyAccount() {
      if (
        this.destroyAccountConfirmation &&
        confirm("Are you *really* sure of what your are doing?")
      ) {
        this.$apitator.get("/dashboard/delete", { withAuth: true }).then(() => {
          this.logout(alert);
        });
      }
    },
    logout(alert = true) {
      this.$cookie.delete("user_token", { domain: this.$env.COOKIE_DOMAIN });
      this.$router.push("/");
      this.$store.commit("SET_AUTH", false);
      if (alert) {
        this.$store.commit("ADD_ALERT", {
          type: "success",
          title: this.$i18n.t("account.logout.success.title"),
          description: this.$i18n.t("account.logout.success.description")
        });
      }
    },
    adminDashboard() {
      this.$store.commit("SET_IS_LOADING", true);
      window.location = this.$env.ADMIN_DASHBOARD_ENDPOINT;
    }
  }
};
</script>
