<template>
    <label class="label" :style="{marginRight: marginRight+'px', marginBottom: marginBottom+'px'}">
        <span class="label__value">{{labelText}}</span>
        <input :type='inputType' :name="inputName" class="label__input">
    </label>
</template>

<script>
export default {
    name: 'Input',
    props: {
        labelText: {
            type: String,
        },
        inputType: {
            type: String,
            default: 'text'
        },
        inputName: {
            type: String
        },
        marginBottom: {
            type: Number,
            default: 20
        },
        marginRight: {
            type: Number,
            default: 20
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.label {
    display: flex;
    flex-direction: column;
    
    &__value {
        margin-bottom: 4px;
        font-size: 12px;
        font-weight: 600;
        color: $secondary-color;
    }
    &__input {
        box-sizing: border-box;
        width: 345px;
        padding: 9px 0 9px 8px;
        border-radius: 8px;
        border: 1px solid rgba(29, 36, 82, 0.1);
        font-size: 16px;
        font-weight: 500;
        color: $main-color;

        &:focus {
            outline: none;
            border: 1px solid $active-color;
        }
    }
}
</style>