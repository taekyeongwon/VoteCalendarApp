package com.votecalendarapp

import android.content.Intent
import android.util.Log
import android.widget.Toast
import com.emgram.kr.myapplication2.NativeManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class TestModule(val context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

    override fun getName(): String {
        return "TestModule"
    }

    @ReactMethod
    fun testMethod() {
        val nativeManager = NativeManager()
        nativeManager.openActivity(context)
//        val intent = Intent(context, MainActivity2::class.java)
//        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
//        context.startActivity(intent)
//        Toast.makeText(context, "test", Toast.LENGTH_SHORT).show()
//        Log.d("test", "hi")
    }
}