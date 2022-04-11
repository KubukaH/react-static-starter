/**
 * Object to convert Newsletter PDFs
 */
import mar12 from "../../tools/media/pdfs/newsletters/March_2012.pdf";
import sep14 from "../../tools/media/pdfs/newsletters/Sept_2014.pdf";
import oct14 from "../../tools/media/pdfs/newsletters/Oct_2014.pdf";
import jan15 from "../../tools/media/pdfs/newsletters/Jan_2015.pdf";
import feb15 from "../../tools/media/pdfs/newsletters/Feb_2015.pdf";
import mar15 from "../../tools/media/pdfs/newsletters/March_2015.pdf";
import apr15 from "../../tools/media/pdfs/newsletters/April_2015.pdf";

const NEWSLETTERS = [
  {
    id: "march-2012",
    item: mar12,
    title: "Twaabane Times: March 2012 issue"
  },
  {
    id: "sept-2014",
    item: sep14,
    title: "Twaabane Times: September 2014 issue"
  },
  {
    id: "oct-2014",
    item: oct14,
    title: "Twaabane Times: October 2014 issue"
  },
  {
    id: "jan-2015",
    item: jan15,
    title: "Twaabane Times: January 2015 issue"
  },
  {
    id: "feb-2015",
    item: feb15,
    title: "Twaabane Times: February 2015 issue"
  },
  {
    id: "march-15",
    item: mar15,
    title: "Twaabane Times: March 2015 issue"
  },
  {
    id: "april-2015",
    item: apr15,
    title: "Twaabane Times: April 2015 issue"
  },
];

const getNewsLetterById = (id) => {
  return NEWSLETTERS.find(nwl => nwl.id === id);
};

export { NEWSLETTERS, getNewsLetterById };