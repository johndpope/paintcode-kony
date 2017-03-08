//
//  GoalView.swift
//  SwiftFFI
//
//  Created by Fernando Fernandes on 2/28/17.
//  Copyright © 2017 backslash-f. All rights reserved.
//

import UIKit

@IBDesignable class GoalView: UIView {
    
    @IBInspectable var progress: CGFloat = 0 {
        didSet {
            setNeedsDisplay()
        }
    }
    
    // Vector-based.
    override func draw(_ rect: CGRect) {
        StyleKit.drawGoal(
            frame: rect,
            goalProgress: progress
        )
    }
}
