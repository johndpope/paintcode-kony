//
//  FFIWrapper.h
//  SwiftFFI
//
//  Created by Fernando Fernandes on 28/02/17.
//  Copyright © 2017 Sicredi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface FFIWrapper: NSObject

+ (UIImage *)drawGoalWithWidth:(CGFloat)width
                        height:(CGFloat)height
                      textSize:(CGFloat)textSize
                    strokeSize:(CGFloat)strokeSize
                      progress:(CGFloat)progress;

@end
