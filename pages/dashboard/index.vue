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
        // console.log(consoles[0].id)
        // console.log(context.app.localePath({
        //     name:'dashboard-console',
        //     params: {
        //       id: consoles[0].id
        //     }
        //   }))
        // have only one console -> redirect to console managing page
        /*
        context.app.localePath({
            name:'dashboard-console',
            params: {
              id: consoles[0].id
            }
          })
        */
        context.redirect(context.app.localePath({name: 'dashboard-console-id', params: {id: consoles[0].id}}))
      } else {
        // have no consoles or many -> go to the list
        context.redirect(context.app.localePath('dashboard-console'))
      }
    }
  }
</script>
