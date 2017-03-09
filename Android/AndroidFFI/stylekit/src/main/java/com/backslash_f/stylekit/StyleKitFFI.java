package com.backslash_f.stylekit;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.PointF;
import android.util.Base64;
import android.util.DisplayMetrics;
import android.util.TypedValue;

import com.konylabs.android.KonyMain;

import java.io.ByteArrayOutputStream;

/**
 * Created by fernandofernandes on 07/03/17.
 */
public class StyleKitFFI {

    public static String drawGoal(float width, float height, float progress) {
        Context context = KonyMain.getAppContext();

        // In Android we need to provide the size in pixels, not in "points" or "device independent pixels".
        // The fact that Android doesn't support device independent pixels in its drawing API is the
        // reason for the different behaviour of iOS and Android. When using UIKit, the coordinates
        // entered are in Points, so it takes care of display density itself. When generating bitmap
        // in Android the display density needs to be taken into account.
        DisplayMetrics metrics = context.getResources().getDisplayMetrics();
        float widthInPixels =  TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, width, metrics);
        float heightInPixels =  TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, height, metrics);

        // Kony requires us to encode the image to Base64 String, so in Kony we can:
        // "form.image2.base64 = imageEncodedToStringBase64".
        Bitmap imageOfGoal = StyleKit.imageOfResizableGoal(
                context,
                new PointF(widthInPixels, heightInPixels),
                progress
        );
        ByteArrayOutputStream byteArrayOS = new ByteArrayOutputStream();
        imageOfGoal.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOS);

        return Base64.encodeToString(byteArrayOS.toByteArray(), Base64.DEFAULT);
    }
}