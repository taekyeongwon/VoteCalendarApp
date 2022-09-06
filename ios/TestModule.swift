//
//  TestModule.swift
//  VoteCalendarApp
//
//  Created by 태경원 on 2022/09/05.
//

import Foundation
import UIKit

@objc(TestModule)
class TestModule: NSObject {
  @objc func testMethod() {
    DispatchQueue.main.async {
      guard let viewController: UIViewController
      = UIApplication.shared.delegate?.window??.rootViewController
      else { return }
//      let sheet = UIAlertController(title: "테스트", message: "hi", preferredStyle: .alert)
//      sheet.addAction(UIAlertAction(title: "ok", style: .default))
//      viewController.present(sheet, animated: true)
      
//      if let secondView =  viewController.storyboard?.instantiateViewController(withIdentifier: "testView") {
//        viewController.present(secondView, animated: true)
//      }
      
      let storyboard: UIStoryboard? = UIStoryboard(name: "NativeScreen", bundle: Bundle(for: NativeViewController.self))
      guard let vc = storyboard?.instantiateViewController(withIdentifier: "testView") else { return }
      vc.modalPresentationStyle = .fullScreen
      viewController.present(vc, animated: true)
//      viewController.present(NativeViewController(), animated: true)
    }
    
  }
}
