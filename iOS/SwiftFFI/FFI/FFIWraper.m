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
                       progress:(CGFloat)progress {
    
    // Kony requires us to encode the image to Base64 String, so in Kony we can:
    // "form.image2.base64 = imageEncodedToStringBase64".
    return [self encodeToBase64String: [StyleKit imageOfGoalWithImageSize: CGSizeMake(width, height)
                                                             goalProgress: progress]];
}

+ (NSString *)encodeToBase64String:(UIImage *)image {
    return [UIImagePNGRepresentation(image) base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
}

@end
