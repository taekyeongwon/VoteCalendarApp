//
//  TestModule.swift
//  VoteCalendarApp
//
//  Created by 태경원 on 2022/09/05.
//

import Foundation
import UIKit
import FrameworkTest

@objc(TestModule)
class TestModule: NSObject {
  @objc func testMethod() {
    let nativeCaller = NativeCaller()
    nativeCaller.nativeCall()
  }
}
