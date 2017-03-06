package com.backslash_f.androidffi;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.View;

import static com.backslash_f.androidffi.StyleKit.*;

/**
 * TODO: document your custom view class.
 */
public class GoalView extends View {

    public GoalView(Context context) {
        super(context);
        init(null, 0);
    }

    public GoalView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(attrs, 0);
    }

    public GoalView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init(attrs, defStyle);
    }

    private void init(AttributeSet attrs, int defStyle) {
        final TypedArray a = getContext().obtainStyledAttributes(attrs, R.styleable.GoalView, defStyle, 0);
        a.recycle();
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        drawGoal(canvas, this.getContext(), new RectF(0, 0, getWidth(), getHeight()), 24f, 7f, 1.0f);
    }
}
