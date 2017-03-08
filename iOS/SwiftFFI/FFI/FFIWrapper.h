//
//  FFIWrapper.h
//  SwiftFFI
//
//  Created by Fernando Fernandes on 28/02/17.
//  Copyright © 2017 backslash-f. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface FFIWrapper: NSObject

+ (NSString *)drawGoalWithWidth:(CGFloat)width
                         height:(CGFloat)height
                       progress:(CGFloat)progress;

@end
