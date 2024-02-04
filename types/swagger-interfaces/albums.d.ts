/**
 * @name     获取相册列表 (lsky-pro)
 * @base     /api/v1
 * @path     /albums
 * @method   GET
 * @savePath types/swagger-interfaces
 * @update   2024/2/4 16:40:40
 */

declare namespace albums {
  interface Params {
    Page?: string
    Order?: string
    Keyword?: string
  }

}
