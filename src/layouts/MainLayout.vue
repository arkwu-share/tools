<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Useful Tools
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
            <q-item to="/scan" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="camera" />
              </q-item-section>
              <q-item-section>
                Scan
              </q-item-section>
            </q-item>
            <q-item to="/decrypt" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="security" />
              </q-item-section>
              <q-item-section>
                Decrypt
              </q-item-section>
            </q-item>
            <q-item to="/qr" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="qr_code" />
              </q-item-section>
              <q-item-section>
                Qr Code
              </q-item-section>
            </q-item>

        <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'
export default {
  name: 'MainLayout',
  //components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
