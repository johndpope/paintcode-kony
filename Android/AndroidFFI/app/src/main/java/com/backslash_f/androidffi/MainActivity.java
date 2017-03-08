package com.backslash_f.androidffi;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;

import com.backslash_f.stylekit.GoalView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Test image creation.
        GoalView goalView = (GoalView) findViewById(R.id.paintCodeView);
        goalView.progress = 1.0f;

        ImageView img = (ImageView) findViewById(R.id.paintCodeImage);
        img.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
        img.setImageBitmap(goalView.getBitmap());
    }
}
