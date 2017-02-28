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
    @IBOutlet weak var percentageSliderLabel: UILabel!
    
    @IBOutlet weak var textSizeSlider: UISlider!
    @IBOutlet weak var textSizeLabel: UILabel!
    
    @IBOutlet weak var strokeSlider: UISlider!
    @IBOutlet weak var strokeSliderLabel: UILabel!
    
    // MARK: - Lifecycle
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setDefaultValues()
        updateIconGoal()
    }
    
    // MARK: - Actions
    
    @IBAction func percentageSliderTapped() {
        updateIconGoal()
    }
    
    @IBAction func textSizeSliderTapped() {
        updateIconGoal()
    }
    
    @IBAction func strokeSliderTapped() {
        updateIconGoal()
    }

    // MARK: - Helpers
    
    func updateIconGoal() {
        
        updateLabels()
        
        iconGoal.image = SicrediStyleKit.imageOfGoal(
            imageSize: iconGoal.frame.size,
            goalPercentTextSize: CGFloat(textSizeSlider.value),
            goalPercentageStrokeSize: CGFloat(strokeSlider.value),
            goalProgress: CGFloat(percentageSlider.value)
        )
    }
    
    func setDefaultValues() {
        percentageSlider.value = 0
        textSizeSlider.value = 18
        strokeSlider.value = 7
    }
    
    func updateLabels() {
        percentageSliderLabel.text = String(format: "%.2f", percentageSlider.value)
        textSizeLabel.text = String(format: "%.0f", textSizeSlider.value)
        strokeSliderLabel.text = String(format: "%.0f", strokeSlider.value)
    }
}
