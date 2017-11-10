export default {
	hotKeysObject : {
		special_key : '',
		special_url : '',
		hotKeys : []
	},//搜索热词
	currentKeyWord:'',//当前搜索关键词
	recordList :[],//历史记录
    dom:'',//音乐播放元素
    musicPlace:-1,//当前播放位置
    musicList:[],//音乐列表
    playState:false,//播放按钮状态
    currentTime:0,//音乐播放进度
    duration:0,//音乐长度
    listState:false,//播放列表状态
    isLoadingShow:false,//是否显示loading
    isShowPlayInfo:false,//是否显示播放详情页
    isShowPlayer:false//是否显示播放器页
}