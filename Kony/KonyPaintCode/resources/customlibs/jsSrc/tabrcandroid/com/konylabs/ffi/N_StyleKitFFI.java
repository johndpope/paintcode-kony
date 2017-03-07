package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.backslash_f.stylekit.StyleKitFFI;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_StyleKitFFI extends JSLibrary {

 
 
	public static final String drawGoal = "drawGoal";
 
	String[] methods = { drawGoal };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[0];
 return libs;
 }



	public N_StyleKitFFI(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen != 5){ return new Object[] {new Double(100),"Invalid Params"}; }
 Double width0 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 width0 = (Double)params[0];
 }
 Double height0 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 height0 = (Double)params[1];
 }
 Double textSize0 = null;
 if(params[2] != null && params[2] != LuaNil.nil) {
 textSize0 = (Double)params[2];
 }
 Double strokeSize0 = null;
 if(params[3] != null && params[3] != LuaNil.nil) {
 strokeSize0 = (Double)params[3];
 }
 Double progress0 = null;
 if(params[4] != null && params[4] != LuaNil.nil) {
 progress0 = (Double)params[4];
 }
 ret = this.drawGoal( width0, height0, textSize0, strokeSize0, progress0 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "StyleKitFFI";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] drawGoal( Double inputKey0, Double inputKey1, Double inputKey2, Double inputKey3, Double inputKey4 ){
 
		Object[] ret = null;
 java.lang.String val = com.backslash_f.stylekit.StyleKitFFI.drawGoal( inputKey0.floatValue() , inputKey1.floatValue() , inputKey2.floatValue() , inputKey3.floatValue() , inputKey4.floatValue() );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
};
