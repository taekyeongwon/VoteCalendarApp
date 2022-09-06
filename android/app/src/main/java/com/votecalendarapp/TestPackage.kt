package com.votecalendarapp

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import java.util.*

class TestPackage: ReactPackage {
    override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> {
        val moduleList = ArrayList<NativeModule>()
        moduleList.add(TestModule(p0))
        return moduleList
    }

    override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        //리액트에서 사용할 네이티브용 커스텀 컴포넌트 관련 - https://rannte.tistory.com/entry/reactnativenativeuimanagerandroid
        return Collections.emptyList()
    }
}