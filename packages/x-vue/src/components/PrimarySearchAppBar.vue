<template>
    <v-toolbar app dark color="primary">
        <v-toolbar-title class="headline text-uppercase">
            <span>Redux</span> &nbsp;
            <span class="font-weight-light">middleware example</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field light
                      prepend-inner-icon="search"
                      placeholder="Search..."
                      solo flat
                      class="search"
                      max-height="30"
                      @input="onChanged"
        ></v-text-field>
        <v-img
            :src="require('../assets/logo.png')"
            contain
            height="40"
            max-width="60"
        ></v-img>
    </v-toolbar>
</template>

<script>
  export default {
    methods: {
      onChanged: function(data) {
        this.$emit('changed', data);
      },
    },
  };
</script>

<style>
    .search.v-text-field.v-text-field--solo .v-input__control {
        min-height: 40px;
        margin-bottom: -8px;
    }
</style>
