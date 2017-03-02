//
//  Goal.swift
//  SwiftFFI
//
//  Created by Fernando Fernandes on 2/28/17.
//  Copyright © 2017 backslash-f. All rights reserved.
//

import UIKit

@IBDesignable class Goal: UIView {
    
    @IBInspectable var strokeSize: CGFloat = 7 {
        didSet {
            setNeedsDisplay()
        }
    }
    
    @IBInspectable var textSize: CGFloat = 18 {
        didSet {
            setNeedsDisplay()
        }
    }
    
    @IBInspectable var progress: CGFloat = 0 {
        didSet {
            setNeedsDisplay()
        }
    }
    
    override func draw(_ rect: CGRect) {
        StyleKit.drawGoal(
            frame: rect,
            goalPercentTextSize: textSize,
            goalPercentageStrokeSize: strokeSize,
            goalProgress: progress)
    }
}
