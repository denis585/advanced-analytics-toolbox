"use strict";define(["../util/utils","ng!$q"],function(e,a){return{createCube:function(a,t){var r=t.layout,s=e.validateDimension(r.props.dimensions[0]),n=[{qDef:{qFieldDefs:[s]}}],o=r.props.measures.length;t.rowsLabel=[e.validateMeasure(r.props.measures[0])];for(var i=e.validateMeasure(r.props.measures[0])+" as mea0",l="q$mea0",p="N",u=1;u<o;u++){var q=e.validateMeasure(r.props.measures[u]);if(q.length>0){var d=","+q+" as mea"+u;i+=d,l+=",q$mea"+u,p+="N",t.rowsLabel.push(e.validateMeasure(r.props.measures[u]))}}var f=[{qDef:{qDef:"R.ScriptEvalExStr('"+p+"','library(jsonlite); pca_result<-prcomp(data.frame("+l+"), center = TRUE, scale = TRUE); json<-toJSON(list(summary(pca_result)$importance, summary(pca_result)$rotation)); json;',"+i+")"}},{qDef:{qLabel:"-",qDef:""}},{qDef:{qLabel:"-",qDef:""}},{qDef:{qLabel:"-",qDef:""}},{qDef:{qLabel:"-",qDef:""}}];return t.backendApi.applyPatches([{qPath:"/qHyperCubeDef/qDimensions",qOp:"replace",qValue:JSON.stringify(n)},{qPath:"/qHyperCubeDef/qMeasures",qOp:"replace",qValue:JSON.stringify(f)}],!1),t.patchApplied=!0,null},drawChart:function(t){var r=a.defer(),s=t.layout,n=(e.validateDimension(s.props.dimensions[0]),[{qTop:0,qLeft:0,qWidth:6,qHeight:1}]);return t.backendApi.getData(n).then(function(a){t.layout.qHyperCube.qMeasureInfo;if(0===a[0].qMatrix[0][1].qText.length||"-"==a[0].qMatrix[0][1].qText)e.displayConnectionError(t.extId);else{for(var s=JSON.parse(a[0].qMatrix[0][1].qText),n=s[0],o=s[1],i='<table border="1"><thead><tr><th></th>',l=0;l<n[0].length;l++)i+="<th>PC"+(l+1)+"</th>";i+="</tr></thead><tbody>";var p="";$.each(n,function(e,a){p+="<tr><td>",p+=0==e?"Standard deviation":1==e?"Proportion of Variance":2==e?"Cumulative Proportion":"",p+="</td>",$.each(a,function(e,a){p+="<td>"+a+"</td>"}),p+="</tr>"});var u="";$.each(o,function(e,a){u+="<tr><td>"+t.rowsLabel[e],$.each(a,function(e,a){u+="<td>"+a+"</td>"}),u+="</tr>"});var q="</tbody></table>",d="<h2>Importance of components:</h2>"+i+p+q,f="<h2>Rotation:</h2>"+i+u+q,c=d+f;$(".advanced-analytics-toolsets-"+t.extId).html(c)}return r.resolve()}),r.promise}}});
//# sourceMappingURL=../../maps/analysis/pca.js.map