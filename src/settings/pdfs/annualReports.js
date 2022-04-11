/**
 * Objects or Annual Reports
 */
import ar1 from "../../tools/media/pdfs/annual_repots/2014_Annual_Progress_report.pdf";
import ar2 from "../../tools/media/pdfs/annual_repots/Annexes_for_1st_quarter_report_2011.xls";
import ar3 from "../../tools/media/pdfs/annual_repots/Basilwizi_2015_Annual_Report.pdf";
import ar4 from "../../tools/media/pdfs/annual_repots/BASILWIZI_ANNUAL_PROGRESS_REPORT_2010.pdf";
import ar5 from "../../tools/media/pdfs/annual_repots/BASILWIZI_ANNUAL_PROGRESS_REPORT_FOR_2012.pdf";
import ar6 from "../../tools/media/pdfs/annual_repots/Basilwizi_Partners_annual_report_2011.pdf";
import ar7 from "../../tools/media/pdfs/annual_repots/First_quarter_report_2011.pdf";
import ar8 from "../../tools/media/pdfs/annual_repots/Semi_Annual_Report_2011.pdf";

const ANNUALreports = [
  {
    id: "2014-annual-progress-report",
    item: ar1,
    title: "2014 Annual Progress report"
  },
  {
    id: "annexes-for-1st-quarter-report-2011",
    item: ar2,
    title: "Annexes for 1st quarter report 2011"
  },
  {
    id: "basilwizi-2015-bnnual-report",
    item: ar3,
    title: "Basilwizi 2015 Annual Report"
  },
  {
    id: "basilwizi-annual-progress-report-2010",
    item: ar4,
    title: "BASILWIZI ANNUAL PROGRESS REPORT 2010"
  },
  {
    id: "basilwizi-annual-progress-report-2012",
    item: ar5,
    title: "BASILWIZI ANNUAL PROGRESS REPORT FOR 2012"
  },
  {
    id: "basilwizi-partners-annual-report-2011",
    item: ar6,
    title: "Basilwizi Partners annual report 2011"
  },
  {
    id: "first-quarter-report-2011",
    item: ar7,
    title: "First quarter report 2011"
  },
  {
    id: "semi-annual-report-2011",
    item: ar8,
    title: "Semi Annual Report 2011"
  },
];

const getAnnualReportById = (id) => {
  return ANNUALreports.find(ar => ar.id === id);
};

export { ANNUALreports, getAnnualReportById };