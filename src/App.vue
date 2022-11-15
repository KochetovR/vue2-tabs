<template>
  <div class="container">
    <div class="top-wrapper">
      <h1 class="top-wrapper__title">Invite User</h1>

      <div class="tabs-wrapper">
          <TabButton @clickOnTab="changeTab" :number="'1'" :tabName="'Main Info'" :tabID="'MainInfoTab'" :activeTabName="activeNameComponent" :completedTab="completedTabID" />
          <TabButton @clickOnTab="changeTab" :number="'2'" :tabName="'Available Locations'" :tabID="'LocationsTab'" :activeTabName="activeNameComponent" :completedTab="completedTabID" />
          <TabButton @clickOnTab="changeTab" :number="'3'" :tabName="'Available Documents Custom Fields'" :tabID="'DocumentsTab'" :activeTabName="activeNameComponent" :completedTab="completedTabID" />
          <TabButton @clickOnTab="changeTab" :number="'4'" :tabName="'Roles'" :tabID="'RolesTab'" :activeTabName="activeNameComponent" :completedTab="completedTabID" :style="'margin-right: 0'" />
      </div>

      <button type='button' @click="handleCloseButton" class="button--close">
        <img src="./assets/image/close.png" alt="close icon">
      </button>
    </div>
    <keep-alive>
      <component :is="activeNameComponent"></component>
    </keep-alive>

    <div class="bottom-wrapper">
      <div class="switch-wrapper" v-if="activeNameComponent === 'MainInfoTab'">
        <va-switch v-model="swithValue" color="#415ADA" />
        <span>Active in all companies</span>
        <img src="./assets/image/Info.png" alt="Info icon">
      </div>
      <button type='button' @click="handleNextStep" class="button-next">
        <span>Next Step</span>
      </button>
    </div>
  </div>
  
</template>

<script>
import TabButton from './components/TabButton'
import MainInfoTab from './components/MainInfoTab';
import LocationsTab from './components/LocationsTab';
import DocumentsTab from './components/DocumentsTab';
import RolesTab from './components/RolesTab';

export default {
  name: 'App',
  components: {
    TabButton,
    MainInfoTab,
    LocationsTab,
    DocumentsTab,
    RolesTab
  },
  data() {
    return {
      activeNameComponent: 'MainInfoTab',
      completedTabID: '',
      swithValue: false,
    }
  },
  methods: {
    changeTab(tabName, tabNumber) {
      this.completedTabID = tabNumber
      this.activeNameComponent = tabName
    },
    handleCloseButton() {
      console.log('close');
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/variables';
#app {

}
.container {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    width: 867px;
    // min-height: 466px;
    margin: 57px auto 0;
    background-color: $white-color;
    box-shadow: 0px 8px 16px rgba(54, 62, 113, 0.24);
    border-radius: 16px;

    
}
.top-wrapper {
    position: relative;
    padding: 24px 24px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &__title {
        margin-bottom: 14px;
        font-weight: 600;
        font-size: 24px;
        line-height: 1.33;
    }
}
.tabs-wrapper {
    display: flex;
}

.button--close {
  position: absolute;
  top: 23px;
  right: 27px;
  width: 26px;
  height: 26px;
  padding: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
}

.bottom-wrapper {
  display: flex;
  align-items: baseline;
  padding: 25px 24px 18px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.switch-wrapper {
  display: flex;
  align-items: center;

  & span {
    margin: 0 10px 0 8px;
  }
}

.button-next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 109px;
  height: 40px;
  margin-left: auto;
  border-radius: 20px;

  font-weight: 600;

  background-color: $main-color;
  color: $white-color;
  
}
</style>
