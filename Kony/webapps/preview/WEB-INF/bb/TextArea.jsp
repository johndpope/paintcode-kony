<%@page import="com.konylabs.vm.LuaNil"%>
<%@include file="common.jsp"%>

<%
            String name = widget.getWidgetID();
            if(request.getAttribute(WEBConstants.FORM_HEADER_ID) != null)
            {
                name = "app.headers."+request.getAttribute(WEBConstants.FORM_HEADER_ID)+"." + name;
            }
            if(request.getAttribute(WEBConstants.FORM_FOOTER_ID) != null)
            {
                name = "app.footers."+request.getAttribute(WEBConstants.FORM_FOOTER_ID)+"." + name;
            }
            if(request.getAttribute("tabpaneid") != null)
            {
                 name = frmId +"." +request.getAttribute("tabpaneid")+"."+name;
            }
            int rows =3;
            if(widget.map.get(KonyServerWidget.NO_OF_ROWS)!= null)
            {
                rows = JSWAPUtil.getIntValue(widget.map.get(KonyServerWidget.NO_OF_ROWS));
            }
            else if(widget.map.get(constants.NUMBER_OF_VISIBLE_LINES)!= null)
            {
                rows = JSWAPUtil.getIntValue(widget.map.get(constants.NUMBER_OF_VISIBLE_LINES));
            }
            int maxLength=0;            
            if((widget.map.get(KonyServerWidget.LENGTH) != null))
            {                
                maxLength = JSWAPUtil.getIntValue(widget.map.get(KonyServerWidget.LENGTH));                
            }
            else if(widget.map.get(constants.MAXTEXTLENGTH) != null)
            {                 
                 maxLength = JSWAPUtil.getIntValue(widget.map.get(constants.MAXTEXTLENGTH));             
            }
%>
<%if(request.getAttribute("layout")!= null && request.getAttribute("layout").equals("nonpercent"))
    {%>
<textarea name="<%=name%>" id="<%=name%>" konywidgettype="Ktextarea"
          cols="15" rows="<%=rows%>"
          style=" <%=JSWAPUtil.getWidgetStyleInfo(widget, false)%> "
          <%if(widget.map.get(KonyServerWidget.SKIN)!= null){%> class="<%=widget.map.get(KonyServerWidget.SKIN)%>" <%}%> 
          <%=widget.map.get(WEBConstants.ENABLED) %> 
          <%
          if(maxLength > 0)
          {
          %>  
            maxLength = <%=maxLength %>
         <%        
          }
          %>
          ><%=widget.map.get(KonyServerWidget.TEXT)%>          
</textarea>
<% }else { %>
<textarea name="<%=name%>" id="<%=name%>" konywidgettype="Ktextarea"
          cols="15" rows="<%=rows%>"
          style="<%=JSWAPUtil.getWidgetStyleInfo(widget, true)%>"
          <%if(widget.map.get(KonyServerWidget.SKIN)!= null){%> class="<%=widget.map.get(KonyServerWidget.SKIN)%>" <%}%> 
          <%=widget.map.get(WEBConstants.ENABLED) %> 
          <%
          if(maxLength > 0)
          {
          %>  
            maxLength = <%=maxLength %>
         <%        
          }
          %>
          ><%=widget.map.get(KonyServerWidget.TEXT)%>
</textarea>

<%} %>