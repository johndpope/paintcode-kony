//
//  MainViewController.swift
//  SwiftFFI
//
//  Created by Fernando Fernandes on 2/27/17.
//  Copyright © 2017 backslash-f. All rights reserved.
//

import UIKit

class MainViewController: UIViewController {
    
    // MARK: - Properties
    
    @IBOutlet weak var goalView: GoalView!
    @IBOutlet weak var goalImageView: UIImageView!
    @IBOutlet weak var percentageSlider: UISlider!
    @IBOutlet weak var percentageSliderLabel: UILabel!
    
    // MARK: - Lifecycle
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setDefaultValues()
        updateGoalIcons()
    }
    
    // MARK: - Actions
    
    @IBAction func percentageSliderTapped() {
        updateGoalIcons()
    }

    // MARK: - Helpers
    
    func updateGoalIcons() {
        percentageSliderLabel.text = String(format: "%.2f", percentageSlider.value)
        goalView.progress = CGFloat(percentageSlider.value)
        goalImageView.image = goalView.image()
    }
    
    func setDefaultValues() {
        percentageSlider.value = 0
    }
}
