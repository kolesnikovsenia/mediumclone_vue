<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-center">Sign Up</h1>
          <p class="text-center">
            <router-link class="text-success" :to="{name: 'login'}"
              >Need an account?</router-link
            >
          </p>
          VALIDATION ERRORS
          <form @submit.prevent="onSubmit">
            <fieldset class="input-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
              />
            </fieldset>
          </form>
          <button class="btn btn-lg btn-success float-end">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvRegister',
}
</script>
