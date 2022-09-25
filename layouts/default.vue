<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          nuxt
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="headerTitle" />
      <v-spacer />
      <v-switch 
        inset
        class="pt-5" 
        style="width:105px" 
        v-model="darkmode"
        prepend-icon="mdi-white-balance-sunny" 
        append-icon="mdi-weather-night"
      >
      </v-switch>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer 
      app
      fixed
    >
      <div>
        <v-icon dense>mdi-copyright</v-icon>{{ footerLabel }}
        <div>
          <a href="#" 
            target="_blank" 
            class="text-decoration-none"
          >
            <v-icon>mdi-facebook</v-icon>
          </a>
          <v-icon>mdi-drag-vertical-variant</v-icon>
          <a href="#" 
            target="_blank" 
            class="text-decoration-none"
          >
            <v-icon>mdi-github</v-icon>
          </a>
          <v-icon>mdi-drag-vertical-variant</v-icon>
          <a href="#" 
            target="_blank" 
            class="text-decoration-none"
          >
            <v-icon>mdi-linkedin</v-icon>
          </a>
        </div>
        <div class="text-caption pt-2">
          Published: September 25, 2022
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
    clipped: true,
    drawer: false,
    darkmode: false,
    items: [
      {
        icon: 'mdi-home',
        title: 'Home',
        to: '/'
      },
      {
        icon: 'mdi-application-brackets-outline',
        title: 'Portfolio',
        to: '/portfolio'
      },
      {
        icon: 'mdi-information-outline',
        title: 'About',
        to: '/about'
      }
    ],
    miniVariant: false,
    right: true,
  }),
  head: () => ({
    title: 'Personal Website',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Personal website, VueJs, NuxtJs'
      }
    ],
  }),
  created() {
    this.$store.dispatch('getStoredState')
    this.darkmode = this.$store.state.darkmode.darkMode
    this.$vuetify.theme.dark = this.$store.state.darkmode.darkMode
  },
  mounted() {
    if (process.browser) {
      this.$gtag('config', 'G-', {
        page_title: this.$metaInfo.title,
        page_path: this.$route.fullPath,
      })
    }
  },
  watch: {
    darkmode(newval, oldval) {
      this.darkmode = newval
      this.switchTheme(newval)
    }
  },
  methods: {
    switchTheme () {
      this.$store.dispatch('changeStoredState', this.darkmode)
      this.$vuetify.theme.dark = this.darkmode
    }
  },
  computed: {
    headerTitle() {
      let title;

      switch(this.$route.name) {
        case 'index':
          title = 'Home'; 
          break;
        case 'portfolio':
          title = 'Portfolio';
          break;
        case 'about':
          title = 'About Me';
          break;
        default:
          title = '404 Not Found';
      }
      return title
    },
    footerLabel() {
      return new Date().getFullYear() + ' - Your Name'
    },
  }
}
</script>
