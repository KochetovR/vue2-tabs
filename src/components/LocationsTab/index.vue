<template>
    <el-collapse v-model="activeNames" @change="handleChange"
        style="padding: 24px 24px 42px 24px; --el-collapse-header-height: 52px;"
    >
      <el-collapse-item name="1">
        <template #title>
            <p>Precoro</p>
            <p class="select-count">{{firstCollapseDate.checkedCities.length}} selected</p>
        </template>
        <form class="location-form">
            <CustomSelect :labelText="'Main Location *'" :placeholder="'Location'" :options="firstCollapseDate.optionsSelect" :multiSelectType="false" />

            <div class="cities-wrapper">
                <el-checkbox :indeterminate="firstCollapseDate.isIndeterminate" v-model="firstCollapseDate.checkAll" @change="handleCheckAllChange($event,'first')">Select All Locations</el-checkbox>

                <p class="checkbox-title">Available Locations</p>
                <el-checkbox-group
                    v-model="firstCollapseDate.checkedCities"
                    @change="handleCheckedCitiesChange($event,'first')"
                >
                    <el-checkbox-group v-model="firstCollapseDate.checkedCities" @change="handleCheckedCitiesChange($event,'first')">
                        <el-checkbox v-for="city in firstCollapseDate.cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </el-checkbox-group>

            </div>
        </form>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template #title>
            <p>Precoro Development</p>
            <p class="select-count">{{secondCollapseDate.checkedCities.length}} selected</p>
        </template>
        <form class="location-form">
            <CustomSelect :labelText="'Main Location *'" :placeholder="'Location'" :options="secondCollapseDate.optionsSelect" :multiSelectType="false" />

            <div class="cities-wrapper">
                <el-checkbox :indeterminate="secondCollapseDate.isIndeterminate" v-model="secondCollapseDate.checkAll" @change="handleCheckAllChange($event,'second')">Select All Locations</el-checkbox>

                <p class="checkbox-title">Available Locations</p>
                <el-checkbox-group
                    v-model="secondCollapseDate.checkedCities"
                    @change="handleCheckedCitiesChange($event,'second')"
                >
                    <el-checkbox-group v-model="secondCollapseDate.checkedCities" @change="handleCheckedCitiesChange($event,'second')">
                        <el-checkbox v-for="city in secondCollapseDate.cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </el-checkbox-group>
            </div>
        </form>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template #title>
            <p>Procurement</p>
            <p class="select-count">{{thirdCollapseDate.checkedCities.length}} selected</p>
        </template>
        <form class="location-form">
            <CustomSelect :labelText="'Main Location *'" :placeholder="'Location'" :options="thirdCollapseDate.optionsSelect" :multiSelectType="false" />

            <div class="cities-wrapper">
                <el-checkbox :indeterminate="thirdCollapseDate.isIndeterminate" v-model="thirdCollapseDate.checkAll" @change="handleCheckAllChange($event,'third')">Select All Locations</el-checkbox>

                <p class="checkbox-title">Available Locations</p>
                <el-checkbox-group
                    v-model="thirdCollapseDate.checkedCities"
                    @change="handleCheckedCitiesChange($event,'third')"
                >
                    <el-checkbox-group v-model="thirdCollapseDate.checkedCities" @change="handleCheckedCitiesChange($event,'third')">
                        <el-checkbox v-for="city in thirdCollapseDate.cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </el-checkbox-group>
            </div>
        </form>
      </el-collapse-item>
    </el-collapse>
</template>

<script>
import CustomSelect from '../CustomSelect';
const cityOptions = ['Berlin', 'Poland Office', 'Venice Office', 'Mexico', 'USA Office', 'Ukraine Kiyv Lukivska 7 Main Office', 'Canada'];
export default {
    name: 'LocationsTab',
    components: {
        CustomSelect
    },
    data() {
        return {
            activeNames: ['1'],
            firstCollapseDate: {
                optionsSelect: [
                    {
                        value: 'Main Precoro US',
                        label: 'Main Precoro US',
                    },
                    {
                        value: 'Option2',
                        label: 'Option2',
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
                checkAll: false,
                isIndeterminate: true,
                cities: cityOptions,
                checkedCities:[]
            },
            secondCollapseDate: {
                optionsSelect: [
                    {
                        value: 'Main Precoro US',
                        label: 'Main Precoro US',
                    },
                    {
                        value: 'Option2',
                        label: 'Option2',
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
                checkAll: false,
                isIndeterminate: true,
                cities: cityOptions,
                checkedCities:[]
            },
            thirdCollapseDate: {
                optionsSelect: [
                    {
                        value: 'Main Precoro US',
                        label: 'Main Precoro US',
                    },
                    {
                        value: 'Option2',
                        label: 'Option2',
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
                checkAll: false,
                isIndeterminate: true,
                cities: cityOptions,
                checkedCities:[]
            },
        }
    },
    methods: {
        handleChange (val) {
            console.log(val)
        },
        handleCheckAllChange(val, teg) {
            console.log(teg, 'teg');
            if(teg === 'first') {
                this.firstCollapseDate.checkedCities = val ? cityOptions : [];
                this.firstCollapseDate.isIndeterminate = false;
                return
            }
            if(teg === 'second') {
                this.secondCollapseDate.checkedCities = val ? cityOptions : [];
                this.secondCollapseDate.isIndeterminate = false;
                return
            }
            if(teg === 'third') {
                this.thirdCollapseDate.checkedCities = val ? cityOptions : [];
                this.thirdCollapseDate.isIndeterminate = false;
                return
            }
            
        },
        handleCheckedCitiesChange(value, teg) {
            if(teg === 'first') {
                let checkedCount = value.length;
                this.firstCollapseDate.checkAll = checkedCount === this.firstCollapseDate.cities.length;
                this.firstCollapseDate.isIndeterminate = checkedCount > 0 && checkedCount < this.firstCollapseDate.cities.length;
                return
            }
            if(teg === 'second') {
                let checkedCount = value.length;
                this.secondCollapseDate.checkAll = checkedCount === this.secondCollapseDate.cities.length;
                this.secondCollapseDate.isIndeterminate = checkedCount > 0 && checkedCount < this.secondCollapseDate.cities.length;
                return
            }
            if(teg === 'third') {
                let checkedCount = value.length;
                this.thirdCollapseDate.checkAll = checkedCount === this.thirdCollapseDate.cities.length;
                this.thirdCollapseDate.isIndeterminate = checkedCount > 0 && checkedCount < this.thirdCollapseDate.cities.length;
                return
            }
        }
    },
}
</script>

<style lang="scss">
@import '../../assets/scss/variables';
.location-form {
  display: flex;
  flex-direction: column;

  & input.el-input__inner {
        font-size: 16px;
    }
}

.el-collapse-item {
    position: relative;
}
.select-count {
    position: absolute;
    top: 0;
    left: 692px;
    font-size: 16px;
    color: $secondary-color;
}
div.el-collapse-item__header {
    border-bottom: 2px solid #DDDEE5;
    font-family: 'Inter';
    font-size: 18px;
    font-weight: 600;
    color: $main-color;
}
div.el-collapse-item__wrap{
    border-bottom: 2px solid #DDDEE5;
}
.el-icon {
    transform: rotate(90deg);
}
i.el-collapse-item__arrow.is-active {
    transform: rotate(270deg);
}

.cities-wrapper {
    margin-top: 20px;
}
.checkbox-title {
    margin-top: 16px;
    margin-bottom: 10px;
    font-size: 16px;
    opacity: 0.6;
}
span.el-checkbox__label {
    font-size: 16px;
    color: $main-color;
}

.el-checkbox__input.is-indeterminate span.el-checkbox__inner {
    background-color: $white-color;
    border: 1px solid rgba(29, 36, 82, 0.1);
    border-radius: 4px;
}
.el-checkbox__input.is-checked span.el-checkbox__inner {
    background-color: $active-color;
    border-color: $active-color;
    border-radius: 4px;
}
span.el-checkbox__inner{
    border: 1px solid rgba(29, 36, 82, 0.1);
    border-radius: 4px;
}
.el-checkbox__input.is-checked+span.el-checkbox__label {
    color: $main-color;
}
</style>