<template>
  <div class="header-cont">
    <div class="left">
      <h1>
        <router-link to="/">{{ t(`sitename`) }}</router-link>
      </h1>
    </div>
    <div class="right flex-center">
      <div class="lang gap">
        <span
          class="item"
          :class="{ active: locale === 'zh-cn' }"
          @click="changeLanquage('zh-cn')"
          >简体中文</span
        >
        /
        <span
          class="item"
          :class="{ active: locale === 'en' }"
          @click="changeLanquage('en')"
          >EN</span
        >
      </div>
      <div class="gap">
        <router-link to="/personal/message">
          <el-icon><message /></el-icon>
        </router-link>
      </div>
      <el-dropdown trigger="click">
        <div class="flex-center cursor">
          这是用户名
          <el-icon><caret-bottom /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu
            ><el-dropdown-item>{{ t(`personalCenter`) }} </el-dropdown-item
            ><el-dropdown-item>{{
              t(`logout`)
            }}</el-dropdown-item></el-dropdown-menu
          >
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
const { locale, t } = useI18n();

// 语言切换45
function changeLanquage(lang) {
  locale.value = lang;
  localStorage.setItem("locale", lang);
}
</script>