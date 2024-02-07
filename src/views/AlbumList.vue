<template>
  <div class="album-list-wrap">
    <div class="img-wrap" v-for="(item, index) in albumList" :key="`albumList-${index}`" @click="handleAblumClick(item)">
      <el-image :src="item.cover" fit="cover" loading="lazy">
        <div class="image-slot" slot="error">
          <i class="el-icon-picture-outline"></i>
        </div>
        <div class="loading-image-slot" slot="placeholder">
          <i class="el-icon-loading"></i>
        </div>
      </el-image>
      <p class="album-name"><span>“</span>{{ item.name }}<span>”</span></p>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { albums, images } from '@/api/lsky-pro.js'
import { useAlbumStore } from '@/store/index'
const albumStore = useAlbumStore()
const albumList = ref([])
// 获取相册列列表
const getAlbums = async () => {
  const res = await albums({
    page: '',
    order: '',
    keyword: ''
  })
  albumList.value = res.data
  albumStore.setAlbums(res.data)
  albumList.value.forEach(async (item) => {
    const cover = await getAlbumCover(item.id)
    item.cover = cover
  })
}
// 获取相册封面图
const getAlbumCover = async (id) => {
  const res = await images({
    album_id: id
  })
  const links = res.data[0]?.links
  return links?.url || ''
}
// 点击相册
const router = useRouter()
const handleAblumClick = (album) => {
  console.log('handleAblumClick===>', album);
  router.push({
    name: 'AlbumDetail',
    query: {
      id: album.id
    }
  })
}

onMounted(() => {
  getAlbums()
})
</script>
  
<style scoped lang="scss">
.album-list-wrap {
  max-width: 1320px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  .img-wrap {
    width: 320px;
    height: 200px;
    position: relative;

    :deep(.el-image) {
      width: 100%;
      height: 100%;

      .image-slot,
      .loading-image-slot {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: #f5f7fa;
      }

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        opacity: 0.2;
      }

      img {
        transition: all 0.3s ease-out;
      }
    }

    p {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-80%);
      text-align: center;
      color: #fff;
      font-size: 36px;
      font-family: NotoSansHans-Black;
      text-indent: 16px;
      letter-spacing: 16px;
      pointer-events: none; // 取消图片集名字的点击事件

      span {
        font-size: 24px;
      }
    }

    &:hover {
      :deep(.el-image) {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .album-list-wrap {
    .img-wrap {
      width: 400px;
      height: 200px;
    }
  }
}
</style>

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
  top: 25%;
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
  top: 25%;
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
  