package com.backslash_f.androidffi;

import android.graphics.PointF;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.util.TypedValue;
import android.widget.ImageView;

import com.backslash_f.stylekit.GoalView;
import com.backslash_f.stylekit.StyleKit;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Test image creation.
        GoalView goalView = (GoalView) findViewById(R.id.paintCodeView);
        goalView.progress = 1.0f;

        // In Android we need to provide the size in pixels, not in "points" or "device independent pixels".
        // The fact that Android doesn't support device independent pixels in its drawing API is the
        // reason for the different behaviour of iOS and Android. When using UIKit, the coordinates
        // entered are in Points, so it takes care of display density itself. When generating bitmap
        // in Android the display density needs to be taken into account.
        DisplayMetrics metrics = getApplicationContext().getResources().getDisplayMetrics();
        float widthInPixels =  TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 140f, metrics);
        float heightInPixels =  TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 182f, metrics);


        ImageView imgView = (ImageView) findViewById(R.id.paintCodeImage);
        imgView.setImageBitmap(StyleKit.imageOfResizableGoal(
                getApplicationContext(),
                new PointF(widthInPixels, heightInPixels),
                goalView.progress
        ));
    }
}
