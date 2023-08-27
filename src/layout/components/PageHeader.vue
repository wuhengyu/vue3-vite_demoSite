<template>
  <!-- <div>这是通用头部组件</div> -->
  <div id="header-cont">
    <div id="left">
      <h1>
        <router-link to="">权限管理系统</router-link>
      </h1>
    </div>
    <div class="right flex-center">
      <div id="lang gap">
        <span id="item actice">简体中文</span>
        <span id="item">EN</span>
      </div>
      <div id="gap cursor">
        <router-link to="/personal/message">
          <el-icon><message /></el-icon>
        </router-link>
      </div>
      <el-dropdown trigger="click">
        <div id="flex-center cursor">
          这里是用户名
          <el-icon>
            <caret-bottom />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.header-cont {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  a {
    color: inherit;
    text-decoration: none;
  }
  h1 {
    margin: 0;
    font-size: 20px;
  }
  .gap {
    margin-left: 20px;
  }
  #right {
    #lang {
      font-size: 14px;
      #item {
        cursor: pointer;
        &.actice {
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
  .el-dropdown {
    color: inherit;
  }
}
</style>