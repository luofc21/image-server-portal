// import _ from 'lodash'
// import Cookies from 'js-cookie'
// import { fetchLineAndStation, fetchCurrentUser } from '@/api/basic-data.js'
// import store from '../store'
// import { ElMessage } from 'element-plus'
// const TokenKey = 'mosToken'

export function getToken() {
  // return Cookies.get(TokenKey)
  return import.meta.env.VITE_API_TOKEN
}

// export function getUserInfo() {
//   return Cookies.get('mosUserName')
// }

// export async function getCurrentUser() {
//   if (store.state.settings.orgType) {
//     return
//   }
//   const res = await fetchCurrentUser()
//   store.commit('settings/setClientCurrentUser', res)
//   store.commit('settings/setClientCurrentStation', {
//     stationCode: res.orgCode || '',
//     stationName: res.orgName || ''
//   })
//   store.commit('settings/setOrgType', res.orgType),
//   store.commit('settings/setUserResources', res.resources)
//   localStorage.setItem('currentUser', JSON.stringify(res))
//   localStorage.setItem(
//     'currentStation',
//     JSON.stringify({
//       stationCode: res.orgCode || '',
//       stationName: res.orgName || '',
//       orgType: res.orgType
//     })
//   )
//   if (!res.orgCode && !res.orgType) {
//     ElMessage.warning('当前用户的站点信息有误，请联系管理员')
//   }
//   await getCurrentLine(res.orgType, res.orgCode)
// }

// export async function getCurrentLine(orgType, orgCode) {
//   const allLine = await fetchLineAndStation()
//   let currentLine
//   if (orgType === 2) {
//     currentLine = allLine.find((line) => line.lineNo === orgCode)
//   } else {
//     allLine.map((item) => {
//       const filterStation = item.stations.filter((station) => {
//         return station.stationCode === store.state.settings.clientCurrentStation.stationCode
//       })
//       if (filterStation.length > 0) {
//         currentLine = item
//         store.commit('settings/setClientCurrentStation', {
//           stationId: filterStation[0].dpLocationId
//         })
//       }
//     })
//   }
//   store.commit('settings/setCurrentLine', currentLine)
// }

// export function getTreeDataWithPermission(treeData) {
//   const permissionList = store.state.settings.resources
//   if (!permissionList || permissionList.length === 0) {
//     getCurrentUser()
//   }
//   const newTreeData = []
//   const oldTreeData = _.cloneDeep(treeData)
//   oldTreeData.forEach(element => {
//     if (permissionList.includes(element.permission)) {
//       newTreeData.push(element)
//     }
//   });
//   console.log('newTreeData with permission: ', newTreeData);
//   return newTreeData
// }

// export function getRouteWithPermission(routeList) {
//   const permissionList = store.state.settings.resources
//   const filterRoute = (route) => {
//     if (route.children && route.children.length !== 0) {
//       route.children = filterRoute(route.children)
//     }
//     route.filter((r) => !(r.meta &&r.meta.permission && permissionList.indexOf(r.meta.permission) === -1))
//     return route
//   }
//   const routeWithPermission = filterRoute(routeList)
//   console.log('routeWithPermission: ', routeWithPermission);
//   return routeWithPermission
// }