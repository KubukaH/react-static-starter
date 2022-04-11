/**
 * Object fro combining Projects Evaluation documents
 */
import p4 from "../../tools/media/pdfs/proj-ev/Project-415-End-of-Project-Evaluation.pdf";
import zvc from "../../tools/media/pdfs/proj-ev/Zambezi_Valley_Child_and_Support_Project_Evaluation_2014.pdf";

const projectEvaluations = [
  {
    id: "project-415",
    item: p4, 
    title: "Project 415 End of Project Evaluation"
  },
  {
    id: "zambezi-valley-child",
    item: zvc,
    title: "Zambezi Valley Child and Support Project Evaluation 2014"
  }
];

const getProjectEvById = (id) => {
  return projectEvaluations.find(proj => proj.id === id);
};

export { projectEvaluations, getProjectEvById };