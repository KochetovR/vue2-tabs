<template>
   <form class="form">
    <Input :labelText="'First Name'" :inputName="'first name'" />
    <Input :labelText="'Last Name'" :inputName="'last name'" :marginRight="0" />

    <Input :labelText="'Email Address'" :inputType="'email'" :inputName="'email'" />
    <Input :labelText="'Phone Number'" :inputType="'tel'" :inputName="'phone number'" :marginRight="0" />

    <Input :labelText="'Position'" :inputName="'position'" :marginBottom="0" />
    <CustomSelect :labelText="'Available Companies'" :placeholder="'Companies'" :options="options" />
  </form>
</template>

<script>
import Input from '../Input'
import CustomSelect from '../CustomSelect'
export default {
    name: 'MainInfoTab',
    components: {
      Input,
      CustomSelect
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
          desc: '',
          
        },
        value2: [],
        options: [
          {
            value: 'Precoro',
            label: 'Precoro',
          },
          {
            value: 'Precoro Develop',
            label: 'Precoro Develop',
          },
          {
            value: 'Option3',
            label: 'Option3',
          },
          {
            value: 'Option4',
            label: 'Option4',
          },
          {
            value: 'Option5',
            label: 'Option5',
          },
        ],
        valueSingle: '',
        valueMultiple: '',
        switch: false
      }
    },
    watch: {
      switchValue(e) {
        console.log(e, 'in tab1');
        this.switch = e
        return this.switch
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