<template>
    <footer class="footer">
        <div class="footer_logo">QQ音乐</div>
        <p class="copyright">Copyright © 1998 - <span id="js_cpright_year">2016</span> Tencent. All Rights Reserved.</p>
        <p id="js_iosinfo" class="copyright">联系电话：0755-86013388 QQ群：55209235</p>
    </footer>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.footer{
    padding: 15px 0;
    display: block;
}
.footer_logo {
    display: block;
    width: 82px;
    height: 24px;
    margin: 0 auto 10px;
    background-image: url(./../../assets/logo_footer.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -9999px;
}
.version_tab a {
    position: relative;
    display: inline-block;
    padding: 0 15px;
    font-size: 14px;
    height: 14px;
    line-height: 14px;
    color: #000;
}
.copyright {
    font-size: 10px;
    text-align: center;
    color: rgba(0,0,0,.5);
}
</style>


