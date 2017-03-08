package com.backslash_f.stylekit;

import android.content.Context;
import android.graphics.Bitmap;
import android.util.Base64;

import com.konylabs.android.KonyMain;

import java.io.ByteArrayOutputStream;

/**
 * Created by fernandofernandes on 07/03/17.
 */
public class StyleKitFFI {

    public static String drawGoal(float width, float height, float progress) {
        Context context = KonyMain.getAppContext();

        GoalView goalView = new GoalView(context);
        goalView.progress = progress;

        // Kony requires us to encode the image to Base64 String, so in Kony we can:
        // "form.image2.base64 = imageEncodedToStringBase64".
        ByteArrayOutputStream byteArrayOS = new ByteArrayOutputStream();
        goalView.image().compress(Bitmap.CompressFormat.PNG, 100, byteArrayOS);
        return Base64.encodeToString(byteArrayOS.toByteArray(), Base64.DEFAULT);
    }
}