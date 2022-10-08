<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link
        class="navbar-brand text-success fs-2 fw-bold"
        :to="{name: home}"
      >
        MediumClone
      </router-link>
      <ul class="nav navbar-nav d-flex flex-row gap-1 align-items-center">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{name: 'home'}"
            exact
            active-class="active"
          >
            <i class="fa-sharp fa-solid fa-house"></i>&nbsp; Home &nbsp;
          </router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'createArticle'}"
              active-class="active"
            >
              <i class="fa-sharp fa-solid fa-newspaper"></i> &nbsp; New
              Article&nbsp;
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'settings'}"
              active-class="active"
            >
              <i class="fa-sharp fa-solid fa-gear p-0"></i> &nbsp;
              Settings&nbsp;
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'userProfile', params: {slug: currentUser.username}}"
              active-class="active"
              ><img
                class="rounded-circle w-25 h-25"
                :src="currentUser.image"
              />&nbsp;
              {{ currentUser.username }}
            </router-link>
          </li>
        </template>
        <template v-if="isAnonymous">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'login'}"
              active-class="active"
            >
              Sing In &nbsp;
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'register'}"
              active-class="active"
            >
              Sing Up &nbsp;<i class="fa-solid fa-arrow-right-to-bracket"></i>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import {getterTypes} from '@/store/modules/auth'
import {mapGetters} from 'vuex'

export default {
  name: 'McvTopBar',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
}
</script>
