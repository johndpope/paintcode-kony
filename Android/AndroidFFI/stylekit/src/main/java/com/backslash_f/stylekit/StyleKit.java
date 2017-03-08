package com.backslash_f.stylekit;

import android.content.Context;
import android.graphics.Paint;
import android.graphics.PointF;
import android.graphics.RectF;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Path;
import android.graphics.Typeface;
import android.text.Layout;
import android.text.StaticLayout;
import android.text.TextPaint;



/**
 * Created by Fernando Fernandes on 08/03/17.
 * Copyright © 2017 backslash-f. All rights reserved.
 *
 * Generated by PaintCode
 * http://www.paintcodeapp.com
 *
 * @author Fernando Fernandes
 */
public class StyleKit {
    // Colors
    static int green = Color.argb(255, 39, 155, 56);
    static int background = Color.argb(255, 238, 238, 238);
    static int white = Color.argb(255, 255, 255, 255);
    
    
    
    
    // Resizing Behavior
    public enum ResizingBehavior {
        AspectFit, //!< The content is proportionally resized to fit into the target rectangle.
        AspectFill, //!< The content is proportionally resized to completely fill the target rectangle.
        Stretch, //!< The content is stretched to match the entire target rectangle.
        Center, //!< The content is centered in the target rectangle, but it is NOT resized.
    }
    
    // Canvas Drawings
    // Tab
    
    private static class CacheForGoal {
        private static Paint paint = new Paint();
        private static RectF goalGroup = new RectF();
        private static RectF circleBackgroundBezierRect = new RectF();
        private static Path circleBackgroundBezierPath = new Path();
        private static RectF circleProgressStrokeRect = new RectF();
        private static Path circleProgressStrokePath = new Path();
        private static RectF baseBezierRect = new RectF();
        private static Path baseBezierPath = new Path();
        private static RectF goalPercentageTextRect = new RectF();
        private static TextPaint goalPercentageTextTextPaint = new TextPaint();
        private static PaintCodeStaticLayout goalPercentageTextStaticLayout = new PaintCodeStaticLayout();
        private static RectF goalIconFlightBezierRect = new RectF();
        private static Path goalIconFlightBezierPath = new Path();
        private static RectF starsGroup = new RectF();
        private static RectF star3BezierRect = new RectF();
        private static Path star3BezierPath = new Path();
        private static RectF star2BezierRect = new RectF();
        private static Path star2BezierPath = new Path();
        private static RectF star1BezierRect = new RectF();
        private static Path star1BezierPath = new Path();
    }
    
    
    public static void drawGoal(Canvas canvas, Context context, RectF frame, float goalProgress) {
        // General Declarations
        Paint paint = CacheForGoal.paint;
        
        // Local Variables
        boolean goalPercentageVisible = goalProgress == 0f ? false : true;
        float goalResultAngle = -1f * goalProgress * 279f;
        boolean goalCompleted = goalProgress == 1f ? true : false;
        float goalPercentNumber = goalProgress * 100f;
        String goalPercentText = String.valueOf((float) Math.round(goalPercentNumber)) + "%";
        
        // GoalGroup
        {
            RectF goalGroup = CacheForGoal.goalGroup;
            goalGroup.set(frame.left + 8f,
                frame.top + 4.25f,
                frame.left + 8f + (float) Math.floor((frame.width() - 8f) * 0.93939f + 0.5f),
                frame.top + 4.25f + (float) Math.floor((frame.height() - 4.25f) * 0.9775f - 0.25f) + 0.75f);
            
            // CircleBackgroundBezier
            RectF circleBackgroundBezierRect = CacheForGoal.circleBackgroundBezierRect;
            circleBackgroundBezierRect.set(goalGroup.left + (float) Math.floor(goalGroup.width() * 0.01613f + 0.5f) + 0f,
                goalGroup.top + (float) Math.floor(goalGroup.height() * 0.23453f - 0.25f) + 0.75f,
                goalGroup.left + (float) Math.floor(goalGroup.width() * 0.96774f + 0.5f) + 0f,
                goalGroup.top + (float) Math.floor(goalGroup.height() * 0.90791f - 0.25f) + 0.75f);
            Path circleBackgroundBezierPath = CacheForGoal.circleBackgroundBezierPath;
            circleBackgroundBezierPath.reset();
            circleBackgroundBezierPath.addOval(circleBackgroundBezierRect, Path.Direction.CW);
            
            paint.reset();
            paint.setFlags(Paint.ANTI_ALIAS_FLAG);
            paint.setStrokeWidth(7f);
            paint.setStrokeMiter(10f);
            canvas.save();
            paint.setStyle(Paint.Style.STROKE);
            paint.setColor(StyleKit.background);
            canvas.drawPath(circleBackgroundBezierPath, paint);
            canvas.restore();
            
            // CircleProgressStroke
            if (goalPercentageVisible) {
                RectF circleProgressStrokeRect = CacheForGoal.circleProgressStrokeRect;
                circleProgressStrokeRect.set(goalGroup.left + (float) Math.floor(goalGroup.width() * 0.01613f + 0.5f) + 0f,
                    goalGroup.top + (float) Math.floor(goalGroup.height() * 0.23453f - 0.25f) + 0.75f,
                    goalGroup.left + (float) Math.floor(goalGroup.width() * 0.96774f + 0.5f) + 0f,
                    goalGroup.top + (float) Math.floor(goalGroup.height() * 0.90791f - 0.25f) + 0.75f);
                Path circleProgressStrokePath = CacheForGoal.circleProgressStrokePath;
                circleProgressStrokePath.reset();
                circleProgressStrokePath.addArc(circleProgressStrokeRect, 133f, -(goalResultAngle + 227f) - 133f + (-(goalResultAngle + 227f) < 133f ? 360f * (float) Math.ceil((133f + (goalResultAngle + 227f)) / 360f) : 0f));
                
                paint.reset();
                paint.setFlags(Paint.ANTI_ALIAS_FLAG);
                paint.setStrokeWidth(10f);
                paint.setStrokeCap(Paint.Cap.ROUND);
                paint.setStrokeMiter(10f);
                canvas.save();
                paint.setStyle(Paint.Style.STROKE);
                paint.setColor(StyleKit.green);
                canvas.drawPath(circleProgressStrokePath, paint);
                canvas.restore();
            }
            
            // BaseBezier
            RectF baseBezierRect = CacheForGoal.baseBezierRect;
            baseBezierRect.set(goalGroup.left,
                goalGroup.top + (float) Math.floor(goalGroup.height() * 0.79009f + 0.22f) + 0.28f,
                goalGroup.left + (float) Math.floor(goalGroup.width() + 0.5f),
                goalGroup.top + (float) Math.floor(goalGroup.height() * 1f - 0.25f) + 0.75f);
            Path baseBezierPath = CacheForGoal.baseBezierPath;
            baseBezierPath.reset();
            baseBezierPath.moveTo(goalGroup.left + goalGroup.width() * 0.19361f, goalGroup.top + goalGroup.height() * 0.79009f);
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.84964f, goalGroup.top + goalGroup.height() * 0.79009f);
            baseBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.84217f, goalGroup.top + goalGroup.height() * 0.79009f, goalGroup.left + goalGroup.width() * 0.87464f, goalGroup.top + goalGroup.height() * 0.79009f, goalGroup.left + goalGroup.width() * 0.90392f, goalGroup.top + goalGroup.height() * 0.79696f);
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.9096f, goalGroup.top + goalGroup.height() * 0.79795f);
            baseBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.96387f, goalGroup.top + goalGroup.height() * 0.812f, goalGroup.left + goalGroup.width() * 1f, goalGroup.top + goalGroup.height() * 0.84871f, goalGroup.left + goalGroup.width() * 1f, goalGroup.top + goalGroup.height() * 0.8898f);
            baseBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 1f, goalGroup.top + goalGroup.height() * 0.89504f, goalGroup.left + goalGroup.width() * 1f, goalGroup.top + goalGroup.height() * 0.89504f, goalGroup.left + goalGroup.width() * 1f, goalGroup.top + goalGroup.height() * 0.89504f);
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 1f, goalGroup.top + goalGroup.height() * 0.89504f);
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 1f, goalGroup.top + goalGroup.height() * 0.89504f);
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 1f, goalGroup.top + goalGroup.height() * 0.90029f);
            baseBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 1f, goalGroup.top + goalGroup.height() * 0.94138f, goalGroup.left + goalGroup.width() * 0.96387f, goalGroup.top + goalGroup.height() * 0.97808f, goalGroup.left + goalGroup.width() * 0.9096f, goalGroup.top + goalGroup.height() * 0.99214f);
            baseBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.87464f, goalGroup.top + goalGroup.height(), goalGroup.left + goalGroup.width() * 0.84217f, goalGroup.top + goalGroup.height(), goalGroup.left + goalGroup.width() * 0.77723f, goalGroup.top + goalGroup.height());
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.15036f, goalGroup.top + goalGroup.height());
            baseBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.15783f, goalGroup.top + goalGroup.height(), goalGroup.left + goalGroup.width() * 0.12536f, goalGroup.top + goalGroup.height(), goalGroup.left + goalGroup.width() * 0.09608f, goalGroup.top + goalGroup.height() * 0.99313f);
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.0904f, goalGroup.top + goalGroup.height() * 0.99214f);
            baseBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.03613f, goalGroup.top + goalGroup.height() * 0.97808f, goalGroup.left + goalGroup.width() * -0f, goalGroup.top + goalGroup.height() * 0.94138f, goalGroup.left, goalGroup.top + goalGroup.height() * 0.90029f);
            baseBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0f, goalGroup.top + goalGroup.height() * 0.89504f, goalGroup.left + goalGroup.width() * 0f, goalGroup.top + goalGroup.height() * 0.89504f, goalGroup.left + goalGroup.width() * 0f, goalGroup.top + goalGroup.height() * 0.89504f);
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0f, goalGroup.top + goalGroup.height() * 0.89504f);
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0f, goalGroup.top + goalGroup.height() * 0.89504f);
            baseBezierPath.lineTo(goalGroup.left, goalGroup.top + goalGroup.height() * 0.8898f);
            baseBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0f, goalGroup.top + goalGroup.height() * 0.84871f, goalGroup.left + goalGroup.width() * 0.03613f, goalGroup.top + goalGroup.height() * 0.812f, goalGroup.left + goalGroup.width() * 0.0904f, goalGroup.top + goalGroup.height() * 0.79795f);
            baseBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.12536f, goalGroup.top + goalGroup.height() * 0.79009f, goalGroup.left + goalGroup.width() * 0.15783f, goalGroup.top + goalGroup.height() * 0.79009f, goalGroup.left + goalGroup.width() * 0.22277f, goalGroup.top + goalGroup.height() * 0.79009f);
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.15036f, goalGroup.top + goalGroup.height() * 0.79009f);
            baseBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.19361f, goalGroup.top + goalGroup.height() * 0.79009f);
            baseBezierPath.close();
            
            paint.reset();
            paint.setFlags(Paint.ANTI_ALIAS_FLAG);
            paint.setStyle(Paint.Style.FILL);
            paint.setColor(StyleKit.green);
            canvas.drawPath(baseBezierPath, paint);
            
            // GoalPercentageText
            RectF goalPercentageTextRect = CacheForGoal.goalPercentageTextRect;
            goalPercentageTextRect.set(goalGroup.left + (float) Math.floor(goalGroup.width() * 0.03226f + 0.5f) + 0f,
                goalGroup.top + (float) Math.floor(goalGroup.height() * 0.83885f - 0.25f) + 0.75f,
                goalGroup.left + (float) Math.floor(goalGroup.width() * 0.98387f + 0.5f) + 0f,
                goalGroup.top + (float) Math.floor(goalGroup.height() * 0.95396f - 0.25f) + 0.75f);
            TextPaint goalPercentageTextTextPaint = CacheForGoal.goalPercentageTextTextPaint;
            goalPercentageTextTextPaint.reset();
            goalPercentageTextTextPaint.setColor(StyleKit.white);
            goalPercentageTextTextPaint.setTypeface(Typeface.create((String) null, Typeface.NORMAL));
            goalPercentageTextTextPaint.setTextSize(22f);

            // Fix for a PaintCode issue. Will be fixed in the next version.
            goalPercentageTextTextPaint.setFlags(Paint.ANTI_ALIAS_FLAG);

            StaticLayout goalPercentageTextStaticLayout = CacheForGoal.goalPercentageTextStaticLayout.get((int) goalPercentageTextRect.width(), Layout.Alignment.ALIGN_CENTER, goalPercentText, goalPercentageTextTextPaint);
            canvas.save();
            canvas.clipRect(goalPercentageTextRect);
            canvas.translate(goalPercentageTextRect.left, goalPercentageTextRect.top + (goalPercentageTextRect.height() - goalPercentageTextStaticLayout.getHeight()) / 2f);
            goalPercentageTextStaticLayout.draw(canvas);
            canvas.restore();
            
            // GoalIconFlightBezier
            RectF goalIconFlightBezierRect = CacheForGoal.goalIconFlightBezierRect;
            goalIconFlightBezierRect.set(goalGroup.left + (float) Math.floor(goalGroup.width() * 0.3129f - 0.3f) + 0.8f,
                goalGroup.top + (float) Math.floor(goalGroup.height() * 0.45072f + 0.19f) + 0.31f,
                goalGroup.left + (float) Math.floor(goalGroup.width() * 0.65574f + 0.19f) + 0.31f,
                goalGroup.top + (float) Math.floor(goalGroup.height() * 0.68513f + 0.46f) + 0.04f);
            Path goalIconFlightBezierPath = CacheForGoal.goalIconFlightBezierPath;
            goalIconFlightBezierPath.reset();
            goalIconFlightBezierPath.moveTo(goalGroup.left + goalGroup.width() * 0.63236f, goalGroup.top + goalGroup.height() * 0.65849f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.65574f, goalGroup.top + goalGroup.height() * 0.6425f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.56633f, goalGroup.top + goalGroup.height() * 0.54377f);
            goalIconFlightBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.64414f, goalGroup.top + goalGroup.height() * 0.49008f, goalGroup.left + goalGroup.width() * 0.65283f, goalGroup.top + goalGroup.height() * 0.47005f, goalGroup.left + goalGroup.width() * 0.64016f, goalGroup.top + goalGroup.height() * 0.46137f);
            goalIconFlightBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.62746f, goalGroup.top + goalGroup.height() * 0.45271f, goalGroup.left + goalGroup.width() * 0.59818f, goalGroup.top + goalGroup.height() * 0.45865f, goalGroup.left + goalGroup.width() * 0.51965f, goalGroup.top + goalGroup.height() * 0.51185f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.37525f, goalGroup.top + goalGroup.height() * 0.45072f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.35187f, goalGroup.top + goalGroup.height() * 0.46671f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.46973f, goalGroup.top + goalGroup.height() * 0.5473f);
            goalIconFlightBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.43311f, goalGroup.top + goalGroup.height() * 0.57443f, goalGroup.left + goalGroup.width() * 0.39724f, goalGroup.top + goalGroup.height() * 0.60333f, goalGroup.left + goalGroup.width() * 0.37304f, goalGroup.top + goalGroup.height() * 0.62567f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.32626f, goalGroup.top + goalGroup.height() * 0.61207f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.3129f, goalGroup.top + goalGroup.height() * 0.6212f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.3514f, goalGroup.top + goalGroup.height() * 0.64751f);
            goalIconFlightBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.34415f, goalGroup.top + goalGroup.height() * 0.65599f, goalGroup.left + goalGroup.width() * 0.34117f, goalGroup.top + goalGroup.height() * 0.66183f, goalGroup.left + goalGroup.width() * 0.34407f, goalGroup.top + goalGroup.height() * 0.66383f);
            goalIconFlightBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.34699f, goalGroup.top + goalGroup.height() * 0.66581f, goalGroup.left + goalGroup.width() * 0.35552f, goalGroup.top + goalGroup.height() * 0.66376f, goalGroup.left + goalGroup.width() * 0.36792f, goalGroup.top + goalGroup.height() * 0.65881f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.40641f, goalGroup.top + goalGroup.height() * 0.68513f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.41976f, goalGroup.top + goalGroup.height() * 0.676f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.39987f, goalGroup.top + goalGroup.height() * 0.64401f);
            goalIconFlightBezierPath.cubicTo(goalGroup.left + goalGroup.width() * 0.43254f, goalGroup.top + goalGroup.height() * 0.62747f, goalGroup.left + goalGroup.width() * 0.47481f, goalGroup.top + goalGroup.height() * 0.60294f, goalGroup.left + goalGroup.width() * 0.51449f, goalGroup.top + goalGroup.height() * 0.5779f);
            goalIconFlightBezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.63236f, goalGroup.top + goalGroup.height() * 0.65849f);
            goalIconFlightBezierPath.close();
            
            paint.reset();
            paint.setFlags(Paint.ANTI_ALIAS_FLAG);
            goalIconFlightBezierPath.setFillType(Path.FillType.EVEN_ODD);
            paint.setStyle(Paint.Style.FILL);
            paint.setColor(StyleKit.green);
            canvas.drawPath(goalIconFlightBezierPath, paint);
            
            // StarsGroup
            if (goalCompleted) {
                RectF starsGroup = CacheForGoal.starsGroup;
                starsGroup.set(goalGroup.left + (float) Math.floor(goalGroup.width() * 0.1623f + 0.37f) + 0.13f,
                    goalGroup.top,
                    goalGroup.left + (float) Math.floor(goalGroup.width() * 0.82157f - 0.38f) + 0.88f,
                    goalGroup.top + (float) Math.floor(goalGroup.height() * 0.1705f - 0.13f) + 0.63f);
                
                // Star3Bezier
                RectF star3BezierRect = CacheForGoal.star3BezierRect;
                star3BezierRect.set(goalGroup.left + (float) Math.floor(goalGroup.width() * 0.65423f + 0.37f) + 0.13f,
                    goalGroup.top + (float) Math.floor(goalGroup.height() * 0.05683f - 0.38f) + 0.88f,
                    goalGroup.left + (float) Math.floor(goalGroup.width() * 0.82157f - 0.38f) + 0.88f,
                    goalGroup.top + (float) Math.floor(goalGroup.height() * 0.1705f - 0.13f) + 0.63f);
                Path star3BezierPath = CacheForGoal.star3BezierPath;
                star3BezierPath.reset();
                star3BezierPath.moveTo(goalGroup.left + goalGroup.width() * 0.7379f, goalGroup.top + goalGroup.height() * 0.05683f);
                star3BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.76249f, goalGroup.top + goalGroup.height() * 0.09068f);
                star3BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.81748f, goalGroup.top + goalGroup.height() * 0.09611f);
                star3BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.77769f, goalGroup.top + goalGroup.height() * 0.12245f);
                star3BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.78708f, goalGroup.top + goalGroup.height() * 0.15965f);
                star3BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.7379f, goalGroup.top + goalGroup.height() * 0.14209f);
                star3BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.68872f, goalGroup.top + goalGroup.height() * 0.15965f);
                star3BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.69812f, goalGroup.top + goalGroup.height() * 0.12245f);
                star3BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.65833f, goalGroup.top + goalGroup.height() * 0.09611f);
                star3BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.71331f, goalGroup.top + goalGroup.height() * 0.09068f);
                star3BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.7379f, goalGroup.top + goalGroup.height() * 0.05683f);
                star3BezierPath.close();
                
                paint.reset();
                paint.setFlags(Paint.ANTI_ALIAS_FLAG);
                paint.setStyle(Paint.Style.FILL);
                paint.setColor(StyleKit.green);
                canvas.drawPath(star3BezierPath, paint);
                
                // Star2Bezier
                RectF star2BezierRect = CacheForGoal.star2BezierRect;
                star2BezierRect.set(goalGroup.left + (float) Math.floor(goalGroup.width() * 0.38105f + 0.25f) + 0.25f,
                    goalGroup.top,
                    goalGroup.left + (float) Math.floor(goalGroup.width() * 0.60282f - 0.25f) + 0.75f,
                    goalGroup.top + (float) Math.floor(goalGroup.height() * 0.15827f) + 0.5f);
                Path star2BezierPath = CacheForGoal.star2BezierPath;
                star2BezierPath.reset();
                star2BezierPath.moveTo(goalGroup.left + goalGroup.width() * 0.49194f, goalGroup.top);
                star2BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.52452f, goalGroup.top + goalGroup.height() * 0.04713f);
                star2BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.5974f, goalGroup.top + goalGroup.height() * 0.05468f);
                star2BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.54467f, goalGroup.top + goalGroup.height() * 0.09136f);
                star2BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.55711f, goalGroup.top + goalGroup.height() * 0.14316f);
                star2BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.49194f, goalGroup.top + goalGroup.height() * 0.11871f);
                star2BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.42676f, goalGroup.top + goalGroup.height() * 0.14316f);
                star2BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.43921f, goalGroup.top + goalGroup.height() * 0.09136f);
                star2BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.38648f, goalGroup.top + goalGroup.height() * 0.05468f);
                star2BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.45935f, goalGroup.top + goalGroup.height() * 0.04713f);
                star2BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.49194f, goalGroup.top);
                star2BezierPath.close();
                
                paint.reset();
                paint.setFlags(Paint.ANTI_ALIAS_FLAG);
                paint.setStyle(Paint.Style.FILL);
                paint.setColor(StyleKit.green);
                canvas.drawPath(star2BezierPath, paint);
                
                // Star1Bezier
                RectF star1BezierRect = CacheForGoal.star1BezierRect;
                star1BezierRect.set(goalGroup.left + (float) Math.floor(goalGroup.width() * 0.1623f + 0.37f) + 0.13f,
                    goalGroup.top + (float) Math.floor(goalGroup.height() * 0.05683f - 0.38f) + 0.88f,
                    goalGroup.left + (float) Math.floor(goalGroup.width() * 0.32964f - 0.38f) + 0.88f,
                    goalGroup.top + (float) Math.floor(goalGroup.height() * 0.1705f - 0.13f) + 0.63f);
                Path star1BezierPath = CacheForGoal.star1BezierPath;
                star1BezierPath.reset();
                star1BezierPath.moveTo(goalGroup.left + goalGroup.width() * 0.24597f, goalGroup.top + goalGroup.height() * 0.05683f);
                star1BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.27056f, goalGroup.top + goalGroup.height() * 0.09068f);
                star1BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.32554f, goalGroup.top + goalGroup.height() * 0.09611f);
                star1BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.28575f, goalGroup.top + goalGroup.height() * 0.12245f);
                star1BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.29515f, goalGroup.top + goalGroup.height() * 0.15965f);
                star1BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.24597f, goalGroup.top + goalGroup.height() * 0.14209f);
                star1BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.19679f, goalGroup.top + goalGroup.height() * 0.15965f);
                star1BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.20618f, goalGroup.top + goalGroup.height() * 0.12245f);
                star1BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.16639f, goalGroup.top + goalGroup.height() * 0.09611f);
                star1BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.22138f, goalGroup.top + goalGroup.height() * 0.09068f);
                star1BezierPath.lineTo(goalGroup.left + goalGroup.width() * 0.24597f, goalGroup.top + goalGroup.height() * 0.05683f);
                star1BezierPath.close();
                
                paint.reset();
                paint.setFlags(Paint.ANTI_ALIAS_FLAG);
                paint.setStyle(Paint.Style.FILL);
                paint.setColor(StyleKit.green);
                canvas.drawPath(star1BezierPath, paint);
            }
        }
    }
    
    
    // Canvas Images
    // Tab
    
    public static Bitmap imageOfGoal(Context context, PointF imageSize, float goalProgress) {
        Bitmap imageOfGoal = Bitmap.createBitmap((int) imageSize.x, (int) imageSize.y, Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(imageOfGoal);
        StyleKit.drawGoal(canvas, context, new RectF(0f, 0f, imageSize.x, imageSize.y), goalProgress);
        
        return imageOfGoal;
    }
    
    
    // Resizing Behavior
    public static void resizingBehaviorApply(ResizingBehavior behavior, RectF rect, RectF target, RectF result) {
        if (rect.equals(target) || target == null) {
            result.set(rect);
            return;
        }
        
        if (behavior == ResizingBehavior.Stretch) {
            result.set(target);
            return;
        }
        
        float xRatio = Math.abs(target.width() / rect.width());
        float yRatio = Math.abs(target.height() / rect.height());
        float scale = 0f;
        
        switch (behavior) {
            case AspectFit: {
                scale = Math.min(xRatio, yRatio);
                break;
            }
            case AspectFill: {
                scale = Math.max(xRatio, yRatio);
                break;
            }
            case Center: {
                scale = 1f;
                break;
            }
        }
        
        float newWidth = Math.abs(rect.width() * scale);
        float newHeight = Math.abs(rect.height() * scale);
        result.set(target.centerX() - newWidth / 2,
            target.centerY() - newHeight / 2,
            target.centerX() + newWidth / 2,
            target.centerY() + newHeight / 2);
    }
    
    
}

class PaintCodeStaticLayout {
    private StaticLayout layout;
    private int width;
    private Layout.Alignment alignment;
    private CharSequence source;
    private TextPaint paint;
    
    StaticLayout get(int width, Layout.Alignment alignment, CharSequence source, TextPaint paint) {
        if (this.layout == null || this.width != width || this.alignment != alignment || !this.source.equals(source) || !this.paint.equals(paint)) {
            this.width = width;
            this.alignment = alignment;
            this.source = source;
            this.paint = paint;
            this.layout = new StaticLayout(source, paint, width, alignment, 1, 0, false);
        }
        return this.layout;
    }
}
