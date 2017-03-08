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
            resizing: .aspectFit,
            goalProgress: progress
        )
    }
    
    // Pixel-based.
    func image() -> UIImage {
        
        let size: CGSize = CGSize(width: frame.size.width, height: frame.size.height)
        
        UIGraphicsBeginImageContextWithOptions(size, false, 0)
        StyleKit.drawGoal(
            frame: CGRect(origin: CGPoint.zero, size: size),
            resizing: .aspectFit,
            goalProgress: progress
        )
        
        let imageOfGoal = UIGraphicsGetImageFromCurrentImageContext()!
        UIGraphicsEndImageContext()
        
        return imageOfGoal
    }
}
