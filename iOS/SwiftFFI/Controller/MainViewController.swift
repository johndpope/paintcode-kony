//
//  MainViewController.swift
//  SwiftFFI
//
//  Created by Fernando Fernandes on 2/27/17.
//  Copyright © 2017 Sicredi. All rights reserved.
//

import UIKit

class MainViewController: UIViewController {
    
    // MARK: - Properties
    
    @IBOutlet weak var iconGoal: UIImageView!
    @IBOutlet weak var percentageSlider: UISlider!
    
    // MARK: - Lifecycle
    
    override func viewDidLoad() {
        super.viewDidLoad()
        updateIconGoal()
    }
    
    // MARK: - Actions
    
    @IBAction func percentageSliderTapped(_ sender: UISlider) {
        updateIconGoal()
    }
    
    func updateIconGoal() {
        iconGoal.image = SicrediStyleKit.imageOfGoal(
            imageSize: iconGoal.frame.size,
            goalPercentTextSize: 18,
            goalProgress: CGFloat(percentageSlider.value)
        )
    }
}
