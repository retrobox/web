export default function (context) {
    context.store.commit('SET_MUST_BE_AUTHENTICATED', false)
    if (context.store.state.isAuthenticated) {
        context.app.apitator.setAuthorizationToken(context.store.state.userToken)
    }
}
