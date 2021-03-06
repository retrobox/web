<template>
  <DashboardPage>
    <div class="flex flex-wrap">
      <div class="w-full pr-0 md:w-1/2 md:pr-4 lg:pr-6">
        <div class="account-card">
          <div class="account-card-content">
            <div class="account-card-avatar">
              <img
                :src="user.last_avatar"
                alt="avatar" />
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
        <div class="account-actions mt-6 md:m-0">
          <button
            class="with-link account-action"
            @click="openDestroyAccount()">
            <Icon value="fas fa-trash" />
            {{ $t("user-dash.destroy.title") }}
          </button>
          <button
            v-if="user.is_admin"
            class="with-link account-action"
            @click="adminDashboard()"
          >
            <Icon value="fas fa-shield-alt" />
            {{ $t("user-dash.admin-panel") }}
          </button>
          <button
            class="with-link account-action"
            @click="logout()">
            <Icon value="fas fa-sign-out-alt" />
            {{ $t("user-dash.logout") }}
          </button>
        </div>
      </div>
    </div>
    <div class="mt-6 pt-3">
      <h3 class="dividing mb-4">
        {{ $t("user-dash.shipping-details.title") }}
      </h3>
    </div>
    <ShippingDetailsForm
      ref="shippingDetailsForm"
      @saved="shippingDetailsSaved()" />
    <div class="flex items-center justify-end">
      <button
        class="button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="saveShippingDetails()"
      >
        <Icon
          v-if="saving"
          value="fas fa-sync"
          spin />
        {{ $t("save") }}
      </button>
    </div>
    <Modal
      ref="destroyAccountConfirmationModal"
      :primary-label="$t('user-dash.destroy.confirmation.action')"
      width="large"
      focus="secondary"
      closing="secondary"
      @primary="destroyAccount()">
      <h3 class="mb-6 mt-3">
        {{ $t("user-dash.destroy.confirmation.title") }}
      </h3>
      <p>{{ $t("user-dash.destroy.confirmation.description") }}</p>
      <br />
      <input
        id="destroy-confirmation"
        v-model="destroyAccountConfirmation"
        type="checkbox"
      />
      <label for="destroy-confirmation">
        {{ $t("user-dash.destroy.confirmation.checkbox") }}
      </label>
      <br />
      <br />
    </Modal>
  </DashboardPage>
</template>

<script>
import Icon from "~/components/Icon";
import DashboardPage from "~/components/DashboardPage";
import ShippingDetailsForm from "~/components/ShippingDetailsForm";
import Modal from "~/components/Modal";

export default {
  middleware: "authenticated",
  components: {
    Icon,
    DashboardPage,
    ShippingDetailsForm,
    Modal
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
      destroyAccountConfirmation: false,
      saving: false
    };
  },
  async asyncData(context) {
    let res = await context.app.apitator.graphQL(
      `query {
        getOneUser {
          id
          last_username
          last_avatar
          last_email
          is_admin
        }
        getManyConsoles {
          id
        }
      }`, {}, { withAuth: true }
    );
    let data = res.data.data;
    return {
      user: data.getOneUser,
      consoles: data.getManyConsoles
    };
  },
  methods: {
    openDestroyAccount() {
      this.destroyAccountConfirmation = false
      this.$refs.destroyAccountConfirmationModal.show()
    },
    destroyAccount() {
      if (
        this.destroyAccountConfirmation &&
        confirm(this.$i18n.t("user-dash.destroy.last-confirmation"))
      ) {
        this.$apitator.get("/dashboard/delete", { withAuth: true }).then(() => {
          this.$refs.destroyAccountConfirmationModal.hide()
          this.logout(alert);
        });
      }
    },
    logout(alert = true) {
      this.$cookie.delete("user_token", { domain: this.$env.COOKIE_DOMAIN });
      this.$router.push(this.localePath('index'));
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
    },
    saveShippingDetails() {
      this.$refs.shippingDetailsForm.save()
      this.saving = true
    },
    shippingDetailsSaved() {
      this.saving = false
      this.$store.commit("ADD_ALERT", {
        type: "success",
        title: "Shipping details saved",
        description: "All your shipping details are now saved"
      });
    }
  }
};
</script>
