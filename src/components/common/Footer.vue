<template>
  <div class="footer">
    <div class="footer__top-content">
      <div>Atlassian Jira</div>
      <a class="footer__link-content" href="#">Project Management Software</a>
      <div>(v8.13.2#813002-sha1:c495a97)</div>
      <a class="footer__link-content" href="#">О Jira</a>
      <a class="footer__link-content" href="#">Сообщить о проблеме</a>
    </div>
    <div class="footer__bot-content">
      <a class="footer__logo" href="#">.</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
.footer {
  margin-top: 10px;
  border-top: 1px solid $color--borderline;
  height: 110px;
  background-color: $color--background;
  width: 100%;
  color: $color--fonts;
  min-width: 1000px;
  min-height: 110px;
  &__top-content {
    display: flex;
    margin: 20px;
    justify-content: center;
    font-size: 14px;
  }
  &__link-content {
    margin: 0 20px;
    color: $color--fonts;
  }
  &__bot-content {
    display: flex;
    margin: 20px;
    justify-content: center;
  }
  &__logo {
    width: 128px;
    background-color: #5c6a82;
    mask-image: url('../../assets/BotLogo.svg');
    &:hover {
      background-color: #0052cc;
    }
    &:active {
      background-color: #0052cc;
    }
  }
}
</style>