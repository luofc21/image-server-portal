<template>
    <div class="album-detail">
        <div class="album-detail__header">
            <div class="album-detail__header__goback">
                <el-icon @click="handleGoback()">
                    <ArrowLeftBold />
                </el-icon>
            </div>
            <div class="album-detail__header__title">
                <span class="name">{{ albumName }}</span>
                <span class="divider">/</span>
                <span class="count">{{ imageList.length }}张</span>
            </div>
        </div>
        <div class="album-detail__content">
            <div class="img-wrap" v-for="(item, index) in imageList" :key="`imageList-${index}`">
                <el-image :src="item.links.url" :preview-src-list="imageList" fit="cover" :initial-index="index"
                    class="album-detail__content__image" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { images } from '@/api/lsky-pro.js'
import { ArrowLeftBold } from '@element-plus/icons-vue'
const route = useRoute()
const router = useRouter()

// 图片集名称
const albumName = ref('')
// 获取图片列表
const imageList = ref([])
const getImageList = async (id) => {
    const res = await images({
        album_id: id
    })
    imageList.value = res.data
}

// 返回主页
const handleGoback = () => {
    router.go(-1)
}

onMounted(() => {
    const { id, name } = route.query
    albumName.value = name
    console.log('route.params===>', id);
    if (!!id) {
        getImageList(id)
    }
})
</script>

<style lang="scss" scoped>
.album-detail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.album-detail__header {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .album-detail__header__goback {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .album-detail__header__title {
        font-size: 24px;

        .divider {
            margin: 0 10px;
        }
    }
}

.album-detail__content {
    width: 100%;
    height: calc(100% - 64px);
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
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
</style>