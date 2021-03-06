import  * as types from './types';
export default {
    sendAudio({commit,state},obj){//添加音乐播放元素
        commit(types.SENDAUDIO,obj)
    },
    sendMusic({commit,state},obj){//添加音乐
        commit(types.SENDMUSIC,obj)
    },
    set_currentKeyWord({commit,state},obj){
        commit(types.CURRENTKEYWORD,obj)
    },
    set_recordList({commit,state},obj){
        commit(types.RECORDLIST,obj)
    },
    playAudio({commit,state}){
        commit(types.PLAYAUDIO)
    },
    loopPlayback({commit,state}){//循环播放
        commit(types.LOOPPLAYBACK)
    },
    play({commit,state}){//播放音乐
        if(state.musicList.length!=0){
        if (state.playState==false){
            state.dom.play();
            commit(types.PLAY)
        }else {
            state.dom.pause();
            commit(types.PAUSE)
            }
        }
    },
    nextMusic({commit,state}){//播放下一曲
        state.musicList.length!=0?commit(types.LOOPPLAYBACK):false;
    },
    prevMusic({commit,state}){//播放上一曲
        state.musicList.length!=0?commit(types.PREVSONG):false;
    },
    getcurrentTime({state}){
        state.currentTime=state.dom.currentTime
    },
    getDuration({state}){
        state.duration=state.dom.duration;
    },
    closeListState({commit,state}){
        commit(types.CLOSELISTSTATE)
    },
    openListState({commit,state}){
        commit(types.OPENLISTSTATE)
    },
    selectMusic({commit,state},index){
        commit(types.SELECTMUSIC,index)
    },
    delMusic({commit,state},index){
        commit(types.DELMUSIC,index)
    },
    showLoading({commit,state}){//显示loading
        commit(types.SHOWLOADING)
    },
    hidLoading({commit,state}){//隐藏loading
        commit(types.HIDLOADING)
    },
    showPlayInfo({commit}){
        commit(types.SHOWPLAYINFO)
    },
    hidPlayInfo({commit}){
        commit(types.HIDPLAYINFO)
    },
    setCurrentTime({commit,state},time){
        if(state.musicPlace!=-1){
            commit(types.SETCURRENTTIME,time)
        }
    }
}