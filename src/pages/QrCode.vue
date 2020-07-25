<template>
  <q-page class="col">
    <div class="q-pa-md items-start q-gutter-md">
      <q-card class="bg-standard">
        <q-card-actions>
          <q-btn color="primary" flat @click="load">Load from clipboard</q-btn>
        </q-card-actions>
        <q-btn-toggle
          v-model="level"
          no-caps
          toggle-color="purple"
          color="white"
          text-color="black"
          :options="[
          {label: 'Low', value: 'L'},
          {label: 'Medium', value: 'M'},
          {label: 'Quartile', value: 'Q'},
          {label: 'High', value: 'H'}
        ]"
        />
        <q-separator />
        <q-card-section>
          <qrcode-vue :value="value" :size="size" :level="level"></qrcode-vue>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-input v-model="value" filled autogrow />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  name: "PageIndex",
  data() {
    return {
      value: "Hello World...",
      size: 250,
      level: "M",
    };
  },
  components: {
    QrcodeVue,
  },
  methods: {
    load() {
      let _this = this;
      navigator.clipboard.readText().then((value) => {
        console.log("value in clipboard is " + value);
        _this.value = value;
      });
    },
  },
};
</script>
