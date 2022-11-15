<template>
    <label class="select-label">
      <span class="select-label__text">{{labelText}}</span>
        <el-select
            v-model="value"
            :multiple="multiSelectType"
            :collapse-tags="multiSelectType"
            :placeholder="placeholder"
            style="width: 345px; --el-color-primary: #415ADA; --el-fill-color: #F4F4FF; --el-text-color-regular: #1D2452; --el-text-color-placeholder: rgba(29, 36, 82, 0.5);"
            :disabled="!options.length"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </label>
</template>

<script>
export default {
    name: 'CustomSelect',
    props: {
        labelText: {
            type: String
        },
        placeholder: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        },
        multiSelectType: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            value: [],
        }
    },
}
</script>

<style lang="scss">
@import '../../assets/scss/variables';
.select-label {
    display: flex;
    flex-direction: column;

    &__text {
        margin-bottom: 4px;
        font-size: 12px;
        font-weight: 600;
        color: $secondary-color;
    }
}

.el-input .el-input__wrapper {
    padding: 5px 16px 5px 8px;
    border-radius: 8px;
}
.el-input__inner::placeholder {
    font-family: 'Inter';
    color: $secondary-color;
}
.el-select-dropdown.is-multiple li.el-select-dropdown__item {
    font-family: 'Inter';
    color: $secondary-color;
}
.el-select-dropdown.is-multiple li.el-select-dropdown__item.selected {
    color: $active-color;
}
.el-select-tags-wrapper .el-tag {
    border-radius: 5px;
}
.el-tag.el-tag--info {
    font-family: 'Inter';
    color: #1D2452;
}
</style>