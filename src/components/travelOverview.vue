<template>
  <div class="travtel-overview-wrap">
    <div class="img-wrap" v-for="(item, index) in albumList" :key="`albumList-${index}`">
      <el-image :src="item.cover" fit="cover" lazy>
        <div class="image-slot" slot="error">
          <i class="el-icon-picture-outline"></i>
        </div>
        <div class="loading-image-slot" slot="placeholder">
          <i class="el-icon-loading"></i>
        </div>
      </el-image>
      <p><span>“</span>{{ item.name }}<span>”</span></p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { strategies, albums, images } from '@/api/lsky-pro.js'
const list = [
  {
    src: 'journey/overview/hz.jpg?imageMogr2/auto-orient',
    name: '杭州',
  },
  {
    src: 'journey/overview/nb.jpg?imageMogr2/auto-orient',
    name: '宁波',
  },
  {
    src: 'journey/overview/bj.jpg?imageMogr2/auto-orient',
    name: '北京',
  },
  {
    src: 'journey/overview/sh.jpg?imageMogr2/auto-orient',
    name: '上海',
  },
  {
    src: 'journey/overview/gdgz.jpg?imageMogr2/auto-orient',
    name: '广州',
  }
]
const imgs = []
const albumList = ref([])
// 获取相册列列表
const getAlbums = async () => {
  const res = await albums({
    page: '',
    order: '',
    keyword: ''
  })
  albumList.value = res.data
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

onMounted(() => {
  getAlbums()
})
</script>

<style scoped lang="scss">
.travtel-overview-wrap {
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
  .travtel-overview-wrap {
    .img-wrap {
      width: 400px;
      height: 200px;
    }
  }
}
</style>
