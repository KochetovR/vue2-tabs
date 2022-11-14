<template>
    <button 
        type="button"
        class="tab-button"
        :class="`tab-button--${status}`"
        @click="changeTab(tabID, number)"
    >
        <div class="tab-button__icon" 
            :class="`tab-button__icon--${status}`"
        >
            <p v-if="status !== 'completed'">{{number}}</p>
            <img v-else :src='checkImg' alt='tab-icon' />
        </div>
        <span class="tab-button__name">{{tabName}}</span>
    </button>
</template>

<script>
import checkImg from '../../assets/image/check.png'
export default {
    name: 'TabButton',
    props: {
        number: {
            type: String,
            required: true,
        },
        tabName: {
            type: String,
            required: true,
        },
        activeTabName: {
            type: String,
            required: true,
        },
        completedTab: {
            type: String,
            required: true
        },
        tabID: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            checkImg
        }
    },
    computed: {
        status() {
            if(this.activeTabName === this.tabID) {
                return 'active'
            }
            if(this.completedTab > this.number ) {
                return 'completed'
            }
            return 'not-active'
        }
    },
    methods: {
        changeTab(tab, tabNumber) {
            // this.activeTab = tab
            this.$emit('clickOnTab', tab, tabNumber)
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.tab-button {
    display: flex;
    align-items: center;
    margin-right: 24px;
    padding-bottom: 16px;
    background-color: transparent;
    border:none;
    outline: none;
    box-sizing: border-box;
    border-bottom: 2px solid transparent;

    color: $secondary-color;

    &--active {
        border-bottom: 2px solid $active-color;
    }

    &:hover {
        cursor: pointer;
    }

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        margin-right: 8px;
        border-radius: 50%;
        background-color: rgba(65, 90, 218, 0.05);
    }

    &__icon--active p,
    &__icon--active + span  {
        color: $active-color;
    }
    &__icon--completed {
        background-color: $active-color;
    }
}
</style>