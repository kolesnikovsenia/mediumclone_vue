<template>
  <ul class="error-massages">
    <li
      class="text-danger fw-bold font-monospace"
      v-for="errorMassage in errorMassages"
      :key="errorMassage"
    >
      {{ errorMassage }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'McvValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMassages() {
			return Object.keys(this.validationErrors).map(name => {
				const massages = this.validationErrors[name].join(', ')
				return `${name} ${massages}`
			})
    },
  },
}
</script>
