//
//  FFIWraper.m
//  SwiftFFI
//
//  Created by Fernando Fernandes on 28/02/17.
//  Copyright © 2017 backslash-f. All rights reserved.
//

#import "FFIWrapper.h"
#import "SwiftFFI-Swift.h"

@implementation FFIWrapper

+ (NSString *)drawGoalWithWidth:(CGFloat)width
                         height:(CGFloat)height
                       textSize:(CGFloat)textSize
                     strokeSize:(CGFloat)strokeSize
                       progress:(CGFloat)progress {
    
    CGSize size = CGSizeMake(width, height);
    UIImage *goalImage = [StyleKit imageOfGoalWithImageSize:size
                                               goalPercentTextSize:textSize
                                          goalPercentageStrokeSize:strokeSize
                                                      goalProgress:progress];
    
    return [self encodeToBase64String: goalImage];
}

+ (NSString *)encodeToBase64String:(UIImage *)image {
    return [UIImagePNGRepresentation(image) base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
}

@end
