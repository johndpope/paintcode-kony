package com.backslash_f.stylekit;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.PointF;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.View;

public class GoalView extends View {

    public static float progress;

    public GoalView(Context context) {
        super(context);
    }

    public GoalView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public GoalView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        StyleKit.drawGoal(
                canvas,
                getContext(), new RectF(0, 0, getWidth(), getHeight()),
                1.0f
        );
    }
}
