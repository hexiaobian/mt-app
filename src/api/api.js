import axios from '../axios/axios.js'
export default {
  getSearchList:function(){
    return axios.get("/api/meituan/header/search.json")
  },
  getSearchHotWords() {
    return axios.get("/api/meituan/header/searchHotWords.json")
  },
  getNav() {
    return axios.get("/api/meituan/index/nav.json")
  },
  getProvince() {
    return axios.get("/api/meituan/city/province.json")
  },
  getCity() {
    return axios.get("/api/meituan/city/cityList.json")
  },
  getHotCity() {
    return axios.get("/api/meituan/city/hot.json")
  },
  getHisCity() {
    return axios.get("/api/meituan/city/recents.json")
  },
  getClassify() {
    return axios.get("/api/meituan/list/classify.json")   
  },
  getRegionList(){
    return axios.get("/api/meituan/list/areaList.json")   
  },
  getGoodsList() {
    return axios.get("/api/meituan/list/goodsList.json")
  },
  getRecommendList() {
    return axios.get("/api/meituan/list/recommend.json")
  },
  getPosition() {
    return axios.get("/api/meituan/city/getPosition.json")
  },
  getLogin(params) {
    return axios.get("/api/meituan/login", { params })
  },
  getRegister(params) {
    return axios.get("/api/meituan/register", { params })
  }
  
}