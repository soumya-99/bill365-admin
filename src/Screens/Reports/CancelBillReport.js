import React from "react";
import { reportHeaders } from "../../Assets/Data/TemplateConstants";
import { useLocation } from "react-router-dom";
import ReportTemplate from "./ReportTemplate";

function CancelBillReport() {
    const locationpath = useLocation();
  var template =
    locationpath.pathname.split("/")[
      locationpath.pathname.split("/").length - 1
    ];
  var templateData = reportHeaders[template];
  return (
    <ReportTemplate
      templateData={templateData}
      template={template}
      _url={"/admin/cancel_report"}
    />
  
    
  )
}

export default CancelBillReport
