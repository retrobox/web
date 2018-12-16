"use strict";
exports.default = function (process) {
  return {
    docsEndpoint: process.env.DOCS_ENDPOINT,
    apiEndpoint: process.env.API_ENDPOINT,
    adminDashboardEndpoint: process.env.ADMIN_DASHBOARD_ENDPOINT,
    userDashboardEndpoint: process.env.USER_DASHBOARD_ENDPOINT,
    cookieDomain: process.env.COOKIE_DOMAIN,
    stripePublic: process.env.STRIPE_PUBLIC
  }
};
