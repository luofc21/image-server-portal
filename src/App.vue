<template>
  <div class="main">
    <div class="header-img">
      <img alt="" src="./assets/WeChatAvatar.jpg" />
    </div>
    <div class="header-text">
      <div class="glitch">
        欢迎来到luofcmax的图片集
      </div>
    </div>
  </div>
  <!-- <Album /> -->
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  /* background-image: url("./images/DSC_7274.JPG"); */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  overflow: hidden;
}

.header-img {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #FFFFFF;
  transform: translate(-50%, -300px);

}

.header-img img {
  box-shadow: inset 0 0 10px #000;
  padding: 5px;
  opacity: 1;
  transform: rotate(0);
  transition: all ease 1s;
  width: 130px;
  height: 130px;
  border-radius: 100%;
}

.header-img img:hover {
  transform: rotate(360deg);
}

.header-text {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #FFFFFF;
  transform: translate(-50%, -150px);
}

.glitch {
  font-family: 'Ubuntu', sans-serif;
  position: relative;
  color: #5251516f;
  mix-blend-mode: lighten;
  margin: auto;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bold;
}

.glitch:before,
.glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  clip: rect(0, 0, 0, 0);
}

.glitch:before {
  left: -1px;
  text-shadow: 1px 0 #ff3f1a;
}

.glitch:after {
  left: 1px;
  text-shadow: -1px 0 #00a7e0;
}

.glitch:hover:before {
  text-shadow: 4px 0 #ff3f1a;
  animation: glitch-loop-1 .8s infinite ease-in-out alternate-reverse;
}

.glitch:hover:after {
  text-shadow: -5px 0 #00a7e0;
  animation: glitch-loop-2 .8s infinite ease-in-out alternate-reverse;
}

@-webkit-keyframes glitch-loop-1 {
  0% {
    clip: rect(36px, 9999px, 9px, 0)
  }

  25% {
    clip: rect(25px, 9999px, 99px, 0)
  }

  50% {
    clip: rect(50px, 9999px, 102px, 0)
  }

  75% {
    clip: rect(30px, 9999px, 92px, 0)
  }

  100% {
    clip: rect(91px, 9999px, 98px, 0)
  }
}

@keyframes glitch-loop-1 {
  0% {
    clip: rect(36px, 9999px, 9px, 0)
  }

  25% {
    clip: rect(25px, 9999px, 99px, 0)
  }

  50% {
    clip: rect(50px, 9999px, 102px, 0)
  }

  75% {
    clip: rect(30px, 9999px, 92px, 0)
  }

  100% {
    clip: rect(91px, 9999px, 98px, 0)
  }
}

@-webkit-keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0)
  }

  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0)
  }

  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0)
  }

  75% {
    top: 0;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0)
  }

  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0)
  }
}

@keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0)
  }

  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0)
  }

  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0)
  }

  75% {
    top: 0;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0)
  }

  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0)
  }
}
</style>
