<template>
  <div>
    <div
      uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
    >
      <nav
        class="uk-navbar-container uk-margin px-6 drop-shadow-xl hover:drop-shadow-2xl"
        uk-navbar
      >
        <div class="nav-overlay uk-navbar-left">
          <a class="uk-navbar-item uk-logo" href="#"
            ><img src="~/assets/img/l.png" alt="" style="height: 3.33rem"
          /></a>

          <ul class="uk-navbar-nav nav__links">
            <li class="uk-active" v-for="(i, k) in links" :key="k">
              <a :href="i.url">{{ i.title }}</a>
            </li>
          </ul>
        </div>

        <div class="nav-overlay uk-navbar-right">
          <a
            class="uk-navbar-toggle"
            uk-search-icon
            uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
            href="#"
          ></a>
          <a
            class="hamburger"
            href="#modal-full"
            uk-toggle="target: #modal-full; animation: uk-animation-fade"
          >
            <div class="space-y-2">
              <div class="w-8 h-0.5 bg-gray-600"></div>
              <div class="w-8 h-0.5 bg-gray-600"></div>
              <div class="w-8 h-0.5 bg-gray-600"></div>
            </div>
          </a>
        </div>
        <div id="modal-full" class="uk-modal-full" uk-modal>
          <div class="uk-modal-dialog">
            <div class="uk-grid-collapse uk-flex-middle" uk-grid>
              <div class="!w-full" uk-height-viewport>
                <button
                  class="uk-modal-close-full uk-close-large !m-8"
                  type="button"
                  uk-close
                ></button>
                <div class="relative !top-24">
                  <a
                    v-for="(i, k) in links"
                    :key="k"
                    :href="i.url"
                    class="!no-underline even:bg-slate-100 p-2 nav-link text-center hover:bg-slate-700 hover:text-white text-lg"
                    >{{ i.title }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>
          <div class="uk-navbar-item uk-width-expand">
            <form class="uk-search uk-search-navbar uk-width-1-1">
              <input
                class="uk-search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
                autofocus
              />
            </form>
          </div>
          <a
            class="uk-navbar-toggle"
            uk-close
            uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
            href="#"
          ></a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'Services', url: '#' },
        { title: 'Blog', url: '#' },
        { title: 'About', url: '#' },
        { title: 'Contact', url: '/' },
        { title: 'Products', url: '/' },
      ],
    }
  },
  mounted() {},
}
</script>

<style scoped>
.nav-link {
  position: relative;
  display: block;
}

.hamburger {
  display: none;
}

@media only screen and (max-width: 768px) {
  .hamburger {
    display: inline-block;
    cursor: pointer;
  }

  .nav__links {
    display: none;
  }
}
</style>
