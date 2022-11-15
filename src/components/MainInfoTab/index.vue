<template>
  <form class="form">
    <Input :labelText="'First Name'" :inputName="'first name'" />
    <Input :labelText="'Last Name'" :inputName="'last name'" :marginRight="0" />

    <Input :labelText="'Email Address'" :inputType="'email'" :inputName="'email'" />
    <Input :labelText="'Phone Number'" :inputType="'tel'" :inputName="'phone number'" :marginRight="0" />
  </form>
</template>

<script>
import Input from '../Input'
export default {
    name: 'MainInfoTab',
    components: {
      Input
    },
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 24px 30px;
}
</style>