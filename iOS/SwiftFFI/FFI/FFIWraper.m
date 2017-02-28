//
//  FFIWraper.m
//  SwiftFFI
//
//  Created by Fernando Fernandes on 28/02/17.
//  Copyright © 2017 Sicredi. All rights reserved.
//

#import "FFIWrapper.h"
#import "SwiftFFI-Swift.h"

@implementation FFIWrapper

+ (UIImage *)drawGoalWithWidth:(CGFloat)width
                        height:(CGFloat)height
                      textSize:(CGFloat)textSize
                    strokeSize:(CGFloat)strokeSize
                      progress:(CGFloat)progress {
    
    CGSize size = CGSizeMake(width, height);
    return [SicrediStyleKit imageOfGoalWithImageSize:size
                                 goalPercentTextSize:textSize
                            goalPercentageStrokeSize:strokeSize
                                        goalProgress:progress];
}

@end
