/**
 * Object for combining other-documents-pdfs
 */
import sp10 from "../../tools/media/pdfs/strategic/Basilwizi_Strategic_Plan_2010_2015_Final.pdf";
import zzb from "../../tools/media/pdfs/strategic/Zyeelelo_Zyaampandamunsaka_Bill_of_rights.pdf";

const otherDocuments = [
  {
    id: "2010-2015-strategic-plan",
    item: sp10,
    title: "Basilwizi Strategic Plan 2010-2015"
  },
  {
    id: "bill-of-rights-tonga",
    item: zzb,
    title: "Zyeelelo Zyaampandamunsaka (Bill of rights)"
  }
];

const getOtherDocumentById = (id) => {
  return otherDocuments.find(doc => doc.id === id);
};

export { otherDocuments, getOtherDocumentById };
