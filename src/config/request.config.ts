/*
 * @Author: your name
 * @Date: 2022-02-25 17:49:09
 * @LastEditTime: 2024-02-04 15:49:10
 * @LastEditors: luofangchao luofangchao@pcitech.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \HJMos_NCC_ECmd_Web\src\config\request.config.ts
 */
export interface Request {
  defaultApiUrl: string
}

const request = {
  defaultApiUrl: 'nec', // 默认接口服务，按项目修改
}

export default request
