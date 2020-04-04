<template>
  <div>
    <client-only>
      <VueGoodTable
        :columns="columns"
        :rows="rows"
        :search-options="searchOptions"
      >
        <div slot="emptystate">
          {{ $t('components-explorer.empty') }}
        </div>
      </VueGoodTable>
    </client-only>
  </div>
</template>

<script>
  import {VueGoodTable} from 'vue-good-table';
  import Components from '~/docs/components';

  export default {
    name: 'ComponentsExplorer',
    components: {
      VueGoodTable
    },
    data: () => ({
      row: [],
      components: [],
      rows: [],
      columns: [],
      searchOptions: {}
    }),
    beforeMount() {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.row = JSON.parse(JSON.stringify(Components))
        this.rows = this.row.map(c => {
          c.name = c.name[this.$i18n.locale]
          c.label = c.label === false ? '' : c.label
          return c
        })
        this.columns = [
          {
            label: 'Nom',
            field: 'name',
          },
          {
            label: 'Quantité',
            field: 'quantity',
            type: 'number',
          },
          {
            label: 'Label',
            field: 'label',
          }
        ]
        this.searchOptions = {
          enabled: true,
          placeholder: this.$t('components-explorer.search')
        };
      }
    }
  }
</script>

<style src="vue-good-table/dist/vue-good-table.css" />
