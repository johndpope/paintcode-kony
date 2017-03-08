//
//  StyleKit.swift
//  PaintCodeKony
//
//  Created by Fernando Fernandes on 08/03/17.
//  Copyright © 2017 backslash-f. All rights reserved.
//
//  Generated by PaintCode
//  http://www.paintcodeapp.com
//



import UIKit

public class StyleKit : NSObject {

    //// Cache

    private struct Cache {
        static let green: UIColor = UIColor(red: 0.153, green: 0.608, blue: 0.220, alpha: 1.000)
        static let background: UIColor = UIColor(red: 0.933, green: 0.933, blue: 0.933, alpha: 1.000)
        static let white: UIColor = UIColor(red: 1.000, green: 1.000, blue: 1.000, alpha: 1.000)
    }

    //// Colors

    public dynamic class var green: UIColor { return Cache.green }
    public dynamic class var background: UIColor { return Cache.background }
    public dynamic class var white: UIColor { return Cache.white }

    //// Drawing Methods

    public dynamic class func drawGoal(frame: CGRect = CGRect(x: 0, y: -0, width: 140, height: 182), goalProgress: CGFloat = 1) {
        //// General Declarations
        let context = UIGraphicsGetCurrentContext()!
        // This non-generic function dramatically improves compilation times of complex expressions.
        func fastFloor(_ x: CGFloat) -> CGFloat { return floor(x) }


        //// Variable Declarations
        let goalCompleted = goalProgress == 1 ? true : false
        let goalPercentageVisible = goalProgress == 0 ? false : true
        let goalPercentNumber: CGFloat = goalProgress * 100
        let goalPercentText = "\(Int(round(goalPercentNumber)))" + "%"
        let goalResultAngle: CGFloat = -1 * goalProgress * 279


        //// Subframes
        let goalGroup: CGRect = CGRect(x: frame.minX + 8, y: frame.minY + 4.25, width: fastFloor((frame.width - 8) * 0.93939 + 0.5), height: fastFloor((frame.height - 4.25) * 0.97750 + 3.75) - 3.25)


        //// GoalGroup
        //// CircleBackgroundBezier Drawing
        let circleBackgroundBezierPath = UIBezierPath(ovalIn: CGRect(x: goalGroup.minX + fastFloor(goalGroup.width * 0.01613 + 0.5), y: goalGroup.minY + fastFloor(goalGroup.height * 0.23453 - 0.25) + 0.75, width: fastFloor(goalGroup.width * 0.96774 + 0.5) - fastFloor(goalGroup.width * 0.01613 + 0.5), height: fastFloor(goalGroup.height * 0.90791 - 0.25) - fastFloor(goalGroup.height * 0.23453 - 0.25)))
        StyleKit.background.setStroke()
        circleBackgroundBezierPath.lineWidth = 10
        circleBackgroundBezierPath.stroke()


        if (goalPercentageVisible) {
            //// CircleProgressStroke Drawing
            let circleProgressStrokeRect = CGRect(x: goalGroup.minX + fastFloor(goalGroup.width * 0.01613 + 0.5), y: goalGroup.minY + fastFloor(goalGroup.height * 0.23453 - 0.25) + 0.75, width: fastFloor(goalGroup.width * 0.96774 + 0.5) - fastFloor(goalGroup.width * 0.01613 + 0.5), height: fastFloor(goalGroup.height * 0.90791 - 0.25) - fastFloor(goalGroup.height * 0.23453 - 0.25))
            let circleProgressStrokePath = UIBezierPath()
            circleProgressStrokePath.addArc(withCenter: CGPoint.zero, radius: circleProgressStrokeRect.width / 2, startAngle: 133 * CGFloat.pi/180, endAngle: -(goalResultAngle + 227) * CGFloat.pi/180, clockwise: true)

            var circleProgressStrokeTransform = CGAffineTransform(translationX: circleProgressStrokeRect.midX, y: circleProgressStrokeRect.midY)
            circleProgressStrokeTransform = circleProgressStrokeTransform.scaledBy(x: 1, y: circleProgressStrokeRect.height / circleProgressStrokeRect.width)
            circleProgressStrokePath.apply(circleProgressStrokeTransform)

            StyleKit.green.setStroke()
            circleProgressStrokePath.lineWidth = 10
            circleProgressStrokePath.lineCapStyle = .round
            circleProgressStrokePath.stroke()
        }


        //// BaseBezier Drawing
        let baseBezierPath = UIBezierPath()
        baseBezierPath.move(to: CGPoint(x: goalGroup.minX + 0.19361 * goalGroup.width, y: goalGroup.minY + 0.79009 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.84964 * goalGroup.width, y: goalGroup.minY + 0.79009 * goalGroup.height))
        baseBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.90392 * goalGroup.width, y: goalGroup.minY + 0.79696 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.84217 * goalGroup.width, y: goalGroup.minY + 0.79009 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.87464 * goalGroup.width, y: goalGroup.minY + 0.79009 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.90960 * goalGroup.width, y: goalGroup.minY + 0.79795 * goalGroup.height))
        baseBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 1.00000 * goalGroup.width, y: goalGroup.minY + 0.88980 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.96387 * goalGroup.width, y: goalGroup.minY + 0.81200 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 1.00000 * goalGroup.width, y: goalGroup.minY + 0.84871 * goalGroup.height))
        baseBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 1.00000 * goalGroup.width, y: goalGroup.minY + 0.89504 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 1.00000 * goalGroup.width, y: goalGroup.minY + 0.89504 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 1.00000 * goalGroup.width, y: goalGroup.minY + 0.89504 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 1.00000 * goalGroup.width, y: goalGroup.minY + 0.89504 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 1.00000 * goalGroup.width, y: goalGroup.minY + 0.89504 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 1.00000 * goalGroup.width, y: goalGroup.minY + 0.90029 * goalGroup.height))
        baseBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.90960 * goalGroup.width, y: goalGroup.minY + 0.99214 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 1.00000 * goalGroup.width, y: goalGroup.minY + 0.94138 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.96387 * goalGroup.width, y: goalGroup.minY + 0.97808 * goalGroup.height))
        baseBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.77723 * goalGroup.width, y: goalGroup.minY + 1.00000 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.87464 * goalGroup.width, y: goalGroup.minY + 1.00000 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.84217 * goalGroup.width, y: goalGroup.minY + 1.00000 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.15036 * goalGroup.width, y: goalGroup.minY + 1.00000 * goalGroup.height))
        baseBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.09608 * goalGroup.width, y: goalGroup.minY + 0.99313 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.15783 * goalGroup.width, y: goalGroup.minY + 1.00000 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.12536 * goalGroup.width, y: goalGroup.minY + 1.00000 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.09040 * goalGroup.width, y: goalGroup.minY + 0.99214 * goalGroup.height))
        baseBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.00000 * goalGroup.width, y: goalGroup.minY + 0.90029 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.03613 * goalGroup.width, y: goalGroup.minY + 0.97808 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + -0.00000 * goalGroup.width, y: goalGroup.minY + 0.94138 * goalGroup.height))
        baseBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.00000 * goalGroup.width, y: goalGroup.minY + 0.89504 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.00000 * goalGroup.width, y: goalGroup.minY + 0.89504 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.00000 * goalGroup.width, y: goalGroup.minY + 0.89504 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.00000 * goalGroup.width, y: goalGroup.minY + 0.89504 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.00000 * goalGroup.width, y: goalGroup.minY + 0.89504 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.00000 * goalGroup.width, y: goalGroup.minY + 0.88980 * goalGroup.height))
        baseBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.09040 * goalGroup.width, y: goalGroup.minY + 0.79795 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.00000 * goalGroup.width, y: goalGroup.minY + 0.84871 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.03613 * goalGroup.width, y: goalGroup.minY + 0.81200 * goalGroup.height))
        baseBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.22277 * goalGroup.width, y: goalGroup.minY + 0.79009 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.12536 * goalGroup.width, y: goalGroup.minY + 0.79009 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.15783 * goalGroup.width, y: goalGroup.minY + 0.79009 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.15036 * goalGroup.width, y: goalGroup.minY + 0.79009 * goalGroup.height))
        baseBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.19361 * goalGroup.width, y: goalGroup.minY + 0.79009 * goalGroup.height))
        baseBezierPath.close()
        StyleKit.green.setFill()
        baseBezierPath.fill()


        //// GoalPercentageText Drawing
        let goalPercentageTextRect = CGRect(x: goalGroup.minX + fastFloor(goalGroup.width * 0.03226 + 0.5), y: goalGroup.minY + fastFloor(goalGroup.height * 0.83885 - 0.25) + 0.75, width: fastFloor(goalGroup.width * 0.98387 + 0.5) - fastFloor(goalGroup.width * 0.03226 + 0.5), height: fastFloor(goalGroup.height * 0.95396 - 0.25) - fastFloor(goalGroup.height * 0.83885 - 0.25))
        let goalPercentageTextStyle = NSMutableParagraphStyle()
        goalPercentageTextStyle.alignment = .center
        let goalPercentageTextFontAttributes = [NSFontAttributeName: UIFont.systemFont(ofSize: 22), NSForegroundColorAttributeName: StyleKit.white, NSParagraphStyleAttributeName: goalPercentageTextStyle]

        let goalPercentageTextTextHeight: CGFloat = goalPercentText.boundingRect(with: CGSize(width: goalPercentageTextRect.width, height: CGFloat.infinity), options: .usesLineFragmentOrigin, attributes: goalPercentageTextFontAttributes, context: nil).height
        context.saveGState()
        context.clip(to: goalPercentageTextRect)
        goalPercentText.draw(in: CGRect(x: goalPercentageTextRect.minX, y: goalPercentageTextRect.minY + (goalPercentageTextRect.height - goalPercentageTextTextHeight) / 2, width: goalPercentageTextRect.width, height: goalPercentageTextTextHeight), withAttributes: goalPercentageTextFontAttributes)
        context.restoreGState()


        //// GoalIconFlightBezier Drawing
        let goalIconFlightBezierPath = UIBezierPath()
        goalIconFlightBezierPath.move(to: CGPoint(x: goalGroup.minX + 0.63236 * goalGroup.width, y: goalGroup.minY + 0.65849 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.65574 * goalGroup.width, y: goalGroup.minY + 0.64250 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.56633 * goalGroup.width, y: goalGroup.minY + 0.54377 * goalGroup.height))
        goalIconFlightBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.64016 * goalGroup.width, y: goalGroup.minY + 0.46137 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.64414 * goalGroup.width, y: goalGroup.minY + 0.49008 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.65283 * goalGroup.width, y: goalGroup.minY + 0.47005 * goalGroup.height))
        goalIconFlightBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.51965 * goalGroup.width, y: goalGroup.minY + 0.51185 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.62746 * goalGroup.width, y: goalGroup.minY + 0.45271 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.59818 * goalGroup.width, y: goalGroup.minY + 0.45865 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.37525 * goalGroup.width, y: goalGroup.minY + 0.45072 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.35187 * goalGroup.width, y: goalGroup.minY + 0.46671 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.46973 * goalGroup.width, y: goalGroup.minY + 0.54730 * goalGroup.height))
        goalIconFlightBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.37304 * goalGroup.width, y: goalGroup.minY + 0.62567 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.43311 * goalGroup.width, y: goalGroup.minY + 0.57443 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.39724 * goalGroup.width, y: goalGroup.minY + 0.60333 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.32626 * goalGroup.width, y: goalGroup.minY + 0.61207 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.31290 * goalGroup.width, y: goalGroup.minY + 0.62120 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.35140 * goalGroup.width, y: goalGroup.minY + 0.64751 * goalGroup.height))
        goalIconFlightBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.34407 * goalGroup.width, y: goalGroup.minY + 0.66383 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.34415 * goalGroup.width, y: goalGroup.minY + 0.65599 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.34117 * goalGroup.width, y: goalGroup.minY + 0.66183 * goalGroup.height))
        goalIconFlightBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.36792 * goalGroup.width, y: goalGroup.minY + 0.65881 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.34699 * goalGroup.width, y: goalGroup.minY + 0.66581 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.35552 * goalGroup.width, y: goalGroup.minY + 0.66376 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.40641 * goalGroup.width, y: goalGroup.minY + 0.68513 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.41976 * goalGroup.width, y: goalGroup.minY + 0.67600 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.39987 * goalGroup.width, y: goalGroup.minY + 0.64401 * goalGroup.height))
        goalIconFlightBezierPath.addCurve(to: CGPoint(x: goalGroup.minX + 0.51449 * goalGroup.width, y: goalGroup.minY + 0.57790 * goalGroup.height), controlPoint1: CGPoint(x: goalGroup.minX + 0.43254 * goalGroup.width, y: goalGroup.minY + 0.62747 * goalGroup.height), controlPoint2: CGPoint(x: goalGroup.minX + 0.47481 * goalGroup.width, y: goalGroup.minY + 0.60294 * goalGroup.height))
        goalIconFlightBezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.63236 * goalGroup.width, y: goalGroup.minY + 0.65849 * goalGroup.height))
        goalIconFlightBezierPath.close()
        goalIconFlightBezierPath.usesEvenOddFillRule = true
        StyleKit.green.setFill()
        goalIconFlightBezierPath.fill()


        if (goalCompleted) {
            //// StarsGroup
            //// Star3Bezier Drawing
            let star3BezierPath = UIBezierPath()
            star3BezierPath.move(to: CGPoint(x: goalGroup.minX + 0.73790 * goalGroup.width, y: goalGroup.minY + 0.05683 * goalGroup.height))
            star3BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.76249 * goalGroup.width, y: goalGroup.minY + 0.09068 * goalGroup.height))
            star3BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.81748 * goalGroup.width, y: goalGroup.minY + 0.09611 * goalGroup.height))
            star3BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.77769 * goalGroup.width, y: goalGroup.minY + 0.12245 * goalGroup.height))
            star3BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.78708 * goalGroup.width, y: goalGroup.minY + 0.15965 * goalGroup.height))
            star3BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.73790 * goalGroup.width, y: goalGroup.minY + 0.14209 * goalGroup.height))
            star3BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.68872 * goalGroup.width, y: goalGroup.minY + 0.15965 * goalGroup.height))
            star3BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.69812 * goalGroup.width, y: goalGroup.minY + 0.12245 * goalGroup.height))
            star3BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.65833 * goalGroup.width, y: goalGroup.minY + 0.09611 * goalGroup.height))
            star3BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.71331 * goalGroup.width, y: goalGroup.minY + 0.09068 * goalGroup.height))
            star3BezierPath.close()
            StyleKit.green.setFill()
            star3BezierPath.fill()


            //// Star2Bezier Drawing
            let star2BezierPath = UIBezierPath()
            star2BezierPath.move(to: CGPoint(x: goalGroup.minX + 0.49194 * goalGroup.width, y: goalGroup.minY + 0.00000 * goalGroup.height))
            star2BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.52452 * goalGroup.width, y: goalGroup.minY + 0.04713 * goalGroup.height))
            star2BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.59740 * goalGroup.width, y: goalGroup.minY + 0.05468 * goalGroup.height))
            star2BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.54467 * goalGroup.width, y: goalGroup.minY + 0.09136 * goalGroup.height))
            star2BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.55711 * goalGroup.width, y: goalGroup.minY + 0.14316 * goalGroup.height))
            star2BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.49194 * goalGroup.width, y: goalGroup.minY + 0.11871 * goalGroup.height))
            star2BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.42676 * goalGroup.width, y: goalGroup.minY + 0.14316 * goalGroup.height))
            star2BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.43921 * goalGroup.width, y: goalGroup.minY + 0.09136 * goalGroup.height))
            star2BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.38648 * goalGroup.width, y: goalGroup.minY + 0.05468 * goalGroup.height))
            star2BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.45935 * goalGroup.width, y: goalGroup.minY + 0.04713 * goalGroup.height))
            star2BezierPath.close()
            StyleKit.green.setFill()
            star2BezierPath.fill()


            //// Star1Bezier Drawing
            let star1BezierPath = UIBezierPath()
            star1BezierPath.move(to: CGPoint(x: goalGroup.minX + 0.24597 * goalGroup.width, y: goalGroup.minY + 0.05683 * goalGroup.height))
            star1BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.27056 * goalGroup.width, y: goalGroup.minY + 0.09068 * goalGroup.height))
            star1BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.32554 * goalGroup.width, y: goalGroup.minY + 0.09611 * goalGroup.height))
            star1BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.28575 * goalGroup.width, y: goalGroup.minY + 0.12245 * goalGroup.height))
            star1BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.29515 * goalGroup.width, y: goalGroup.minY + 0.15965 * goalGroup.height))
            star1BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.24597 * goalGroup.width, y: goalGroup.minY + 0.14209 * goalGroup.height))
            star1BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.19679 * goalGroup.width, y: goalGroup.minY + 0.15965 * goalGroup.height))
            star1BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.20618 * goalGroup.width, y: goalGroup.minY + 0.12245 * goalGroup.height))
            star1BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.16639 * goalGroup.width, y: goalGroup.minY + 0.09611 * goalGroup.height))
            star1BezierPath.addLine(to: CGPoint(x: goalGroup.minX + 0.22138 * goalGroup.width, y: goalGroup.minY + 0.09068 * goalGroup.height))
            star1BezierPath.close()
            StyleKit.green.setFill()
            star1BezierPath.fill()


        }
    }

    //// Generated Images

    public dynamic class func imageOfGoal(imageSize: CGSize = CGSize(width: 140, height: 182), goalProgress: CGFloat = 1) -> UIImage {
        UIGraphicsBeginImageContextWithOptions(imageSize, false, 0)
            StyleKit.drawGoal(frame: CGRect(x: 0, y: 0, width: imageSize.width, height: imageSize.height), goalProgress: goalProgress)

        let imageOfGoal = UIGraphicsGetImageFromCurrentImageContext()!
        UIGraphicsEndImageContext()

        return imageOfGoal
    }

}
