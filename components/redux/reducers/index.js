import { combineReducers } from 'redux'
import * as Actions from '../actions/index.js'

const curLocale = (state = {}, action) => {
    switch (action.type) {
        case Actions.LOCALE_CHANGE:
            return action.curLocale
        default:
            return state
    }
}

const pageStatus = (state = {}, action) => {
    switch (action.type) {
        case Actions.PAGE_STATUS:
            return action.pageStatus
        default:
            return state
    }
}

const hashChange = (state = {}, action) => {
    switch (action.type) {
        case Actions.HASH_CHANGE:
            return action.hashChange
        default:
            return state
    }
}

const curMenu = (state = {}, action) => {
    switch (action.type) {
        case Actions.CUR_MENU_CHANGE:
            return action.curMenu
        default:
            return state
    }
}

const curTabKey = (state = {}, action) => {
    switch (action.type) {
        case Actions.TAB_KEY_CHANGE:
            return action.curTabKey
        default:
            return state
    }
}

const changePwdStatus = (state = {}, action) => {
    switch (action.type) {
        case Actions.CHANGE_PWD_STATUS:
            return action.changePwdStatus
        default:
            return state
    }
}

const passtipStyle = (state = {}, action) => {
    switch (action.type) {
        case Actions.CHANGE_PWD_STYLE:
            return action.passtipStyle
        default:
            return state
    }
}

const changetabKeys = (state = {}, action) => {
    switch (action.type) {
        case Actions.CHANGE_TAB_KEYS:
            return action.changetabKeys
        default:
            return state
    }
}

const userType = (state = {}, action) => {
    switch (action.type) {
        case Actions.REQUEST_USER_TYPE:
            return action.userType
        default:
            return state
    }
}

const menuList = (state = {}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_MENU:
            return action.menuList
        default:
            return state
    }
}

const vendor = (state = {}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_VENDOR:
            return action.vendor
        default:
            return state
    }
}

const product = (state = {}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_PRODUCT:
            return action.product
        default:
            return state
    }
}

const productStr = (state = {}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_PRODUCTSTR:
            return action.productStr
        default:
            return state
    }
}

const fxoexistState = (state = {}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_FXOEXIT:
            return action.fxoexistState
        default:
            return state
    }
}

const oemId = (state = {}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_COLOREXIT:
            return action.oemId
        default:
            return state
    }
}

const notifyMsg = (state = {}, action) => {
    switch (action.type) {
        case Actions.MSG_PROMPT:
            return action.notifyMsg
        default:
            return state
    }
}

const spinMsg = (state = {}, action) => {
    switch (action.type) {
        case Actions.MSG_PROMPT_SPIN:
            return action.spinMsg
        default:
            return state
    }
}

const progressMsg = (state = {}, action) => {
    switch (action.type) {
        case Actions.MSG_PROGRESS:
            return action.progressMsg
        default:
            return state
    }
}

const uploadStatus = (state = {}, action) => {
    switch (action.type) {
        case Actions.UPLOAD_STATUS:
            return action.uploadStatus
        default:
            return state
    }
}

const maxAcctNum = (state = {}, action) => {
    switch (action.type) {
        case Actions.SET_MAX_ACCT_NUM:
            return action.maxAcctNum
        default:
            return state
    }
}

const applyButtonStatus = (state={}, action) => {
    switch (action.type) {
        case Actions.UPDATE_APPLY_BUTTON:
            return action.applyButtonStatus
        default:
            return state
    }
}

const mainHeight = (state={}, action) => {
    switch (action.type) {
        case Actions.HEIGHT_CHANGE:
            return action.mainHeight
        default:
            return state
    }
}

const enterSave = (state={}, action) => {
    switch (action.type) {
        case Actions.ENTER_SAVING:
            return action.enterSave
        default:
            return state
    }
}

const itemValues = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_ITEM_VALUE:
            return action.itemValues
        default:
            return state
    }
}

const ipvtExist = (state={}, action) => {
    switch (action.type) {
        case Actions.GET_IPVT_EXIST:
            return action.ipvtExist
        default:
            return state
    }
}


const acctStatus = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_ACCT_STATUS:
            return action.acctStatus
        default:
            return state
    }
}

const networkStatus = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_NETWORK_STATUS:
            return action.networkStatus
        default:
            return state
    }
}

const systemUptime = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_SYSTEM_UPTIME:
            return action.systemUptime
        default:
            return state
    }
}

const systemProduct = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_SYSTEM_PRODUCT:
            return action.systemProduct
        default:
            return state
    }
}

const systemPn = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_SYSTEM_PN:
            return action.systemPn
        default:
            return state
    }
}

const storageInfo = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_STORAGE_INFO:
            return action.storageInfo
        default:
            return state
    }
}

const eventItems = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_EVENT_ITEMS:
            return action.eventItems
        default:
            return state
    }
}

const readshowipState = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_READSHOWIP_STATE:
            return action.readshowipState
        default:
            return state
    }
}

const timezoneValues = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_TIMEZONE_VALUES:
            return action.timezoneValues
        default:
            return state
    }
}

const languagesValues = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_LANGUAGES_VALUES:
            return action.languagesValues
        default:
            return state
    }
}

const logcatFile = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_LOGCAT_FILE:
            return action.logcatFile
        default:
            return state
    }
}

const tracelist = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_TRACE_LIST:
            return action.tracelist
        default:
            return state
    }
}

const coredumplist = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_COREDUMP_LIST:
            return action.coredumplist
        default:
            return state
    }
}

const recordlist = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_RECORD_LIST:
            return action.recordlist
        default:
            return state
    }
}

const norrecordinglist = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_NORRECORDINGLIST:
            return action.norrecordinglist
        default:
            return state
    }
}

const blf = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_BLF:
            return action.blf
        default:
            return state
    }
}


const certInfo = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_VERI_CERT:
            return action.certInfo
        default:
            return state
    }
}

const wifiResult = (state={}, action) => {
    switch (action.type) {
        case Actions.REQUEST_GET_WIFI_RESULT:
            return action.wifiResult
        default:
            return state
    }
}

const rootReducer = combineReducers({
    curLocale,
    userType,
    menuList,
    vendor,
    product,
    productStr,
    fxoexistState,
    oemId,
    notifyMsg,
    spinMsg,
    progressMsg,
    uploadStatus,
    maxAcctNum,
    applyButtonStatus,
    mainHeight,
    enterSave,
    itemValues,
    acctStatus,
    networkStatus,
    systemUptime,
    systemProduct,
    systemPn,
    storageInfo,
    eventItems,
    pageStatus,
    hashChange,
    curMenu,
    curTabKey,
    changePwdStatus,
    passtipStyle,
    changetabKeys,
    readshowipState,
    timezoneValues,
    languagesValues,
    logcatFile,
    tracelist,
    coredumplist,
    recordlist,
    norrecordinglist,
    blf,
    ipvtExist,
    certInfo,
    wifiResult
})

export default rootReducer
