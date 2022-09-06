//
//  NativeViewController.swift
//  VoteCalendarApp
//
//  Created by 태경원 on 2022/09/06.
//

import Foundation
import UIKit
class NativeViewController: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
    print("hi")
    swipeRecognizer()
  }
  
  private func swipeRecognizer() {
    let swipeRight = UISwipeGestureRecognizer(target: self, action: #selector(self.respondToSwipeGesture(_:)))
    swipeRight.direction = UISwipeGestureRecognizer.Direction.right
    self.view.addGestureRecognizer(swipeRight)
  }
  
  @objc func respondToSwipeGesture(_ gesture: UIGestureRecognizer) {
    if let swipeGesture = gesture as? UISwipeGestureRecognizer {
      switch swipeGesture.direction {
      case UISwipeGestureRecognizer.Direction.right:
        self.dismiss(animated: true, completion: nil)
      default: break
      }
    }
  }
}
