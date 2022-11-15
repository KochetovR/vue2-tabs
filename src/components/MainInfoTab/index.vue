<template>
   <form class="form">
      
    <Input :labelText="'First Name'" :inputName="'first name'" />
    <Input :labelText="'Last Name'" :inputName="'last name'" :marginRight="0" />

    <Input :labelText="'Email Address'" :inputType="'email'" :inputName="'email'" />
    <Input :labelText="'Phone Number'" :inputType="'tel'" :inputName="'phone number'" :marginRight="0" />

    <Input :labelText="'Position'" :inputName="'position'" :marginBottom="0" />

    <label >
      <span>Available Companies</span>
      <select name="companies" >
        <option multiple v-for="option in options" :key="option" :value="option">{{option}}</option>
      </select>
    </label>
    <!-- <va-select
      class="mb-4"
      label="Multiple select"
      :options="options"
      v-model="valueMultiple"
      multiple
    /> -->
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
        },
        options: ['Precoro', 'Precoro Develop', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        valueSingle: '',
        valueMultiple: '',
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/variables';
.form {
  display: flex;
  flex-wrap: wrap;
  
  padding: 20px 0 30px 24px;
}
.input-wrapper {
    width: 345px;
    font-family: 'Inter';
    &.mr {
      margin-right: 20px;
    }
}
</style>