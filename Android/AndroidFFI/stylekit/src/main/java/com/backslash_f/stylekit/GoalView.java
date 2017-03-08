package com.backslash_f.stylekit;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
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
                StyleKit.ResizingBehavior.AspectFit,
                1.0f
        );
    }

    public Bitmap image() {
        Bitmap imageOfGoal = Bitmap.createBitmap(getMeasuredWidth(), getMeasuredHeight(), Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(imageOfGoal);
        StyleKit.drawGoal(canvas, getContext(), this.progress);
        return imageOfGoal;
    }

    public Bitmap getBitmap() {
        //Define a bitmap with the same size as the view
        Bitmap returnedBitmap = Bitmap.createBitmap(getWidth(), getHeight(),Bitmap.Config.ARGB_8888);
        //Bind a canvas to it
        Canvas canvas = new Canvas(returnedBitmap);
        //Get the view's background
        Drawable bgDrawable = getBackground();
        if (bgDrawable!=null)
            //has background drawable, then draw it on the canvas
            bgDrawable.draw(canvas);
        else
            //does not have background drawable, then draw white background on the canvas
            canvas.drawColor(Color.WHITE);
        // draw the view on the canvas
        draw(canvas);
        //return the bitmap
        return returnedBitmap;
    }
}
