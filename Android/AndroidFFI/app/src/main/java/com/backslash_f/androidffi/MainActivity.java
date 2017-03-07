package com.backslash_f.androidffi;

import android.graphics.PointF;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;

import com.backslash_f.stylekit.StyleKit;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Test PaintCode image creation.
        ImageView img = (ImageView) findViewById(R.id.paintCodeImage);
        img.setImageBitmap(StyleKit.imageOfGoal(
                this.getApplicationContext(),
                new PointF(310f, 400f),
                36f,
                14f,
                0.38f
        ));
    }
}
