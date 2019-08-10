<template>
  <div />
</template>

<script>
  export default {
    middleware: 'authenticated',
    async asyncData(context) {
      let consoles = await (context.app.apitator.graphQL(
        `query {getManyConsoles {id}}`, {}, {withAuth: true}))
      consoles = consoles.data.data.getManyConsoles
      if(consoles.length === 1){
        // have only one console -> redirect to console managing page
        context.redirect(
          context.app.localePath({
            name:'dashboard-console',
            params: {
              id: consoles[0].id
            }
          })
        )
      } else {
        // have no consoles or many -> go to the list
        context.redirect(context.app.localePath('dashboard-console'))
      }
    }
  }
</script>
