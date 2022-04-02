/**
 * Images Data
 */
import im1 from "../../tools/images/vm.jpg";
import im2 from "../../tools/images/tr.png";
import im3 from "../../tools/images/cw.jpg";
import im4 from "../../tools/images/ab.jpg";
import im5 from "../../tools/images/p2.jpg";
import im6 from "../../tools/images/bn.jpg";
import im7 from "../../tools/images/p3.jpg";
import im8 from "../../tools/images/p4.jpg";
import im9 from "../../tools/images/p5.jpg";
import im10 from "../../tools/images/p6.jpg";
import im11 from "../../tools/images/p7.jpg";
import im12 from "../../tools/images/p8.jpg";
import im13 from "../../tools/images/p9.jpg";
import im14 from "../../tools/images/p10.jpg";
import im15 from "../../tools/images/p11.jpg";
import im16 from "../../tools/images/p12.jpg";
import im17 from "../../tools/images/p13.jpg";
import im18 from "../../tools/images/p14.jpg";
import im19 from "../../tools/images/p15.jpg";
import im20 from "../../tools/images/p16.jpg";
import im21 from "../../tools/images/p17.jpg";
import im22 from "../../tools/images/p18.jpg";
import im23 from "../../tools/images/p19.jpg";
import im24 from "../../tools/images/p20.jpg";
import im25 from "../../tools/images/p21.jpg";
import imr from "../../tools/images/p22.jpg";
import default_logo from "../../tools/images/logo-1.jpg";
import basilwizi_office from "../../tools/images/Basilwizi_Binga_Office.jpg";
import action_aid from "../../assets/img/sponsors/action_aid.jpg";
import british_embassy from "../../assets/img/sponsors/british-embassy.jpg";
import eu_logo from "../../assets/img/sponsors/eu_logo.gif";
import firelight from "../../assets/img/sponsors/firelight.jpg";
import hivos_logo from "../../assets/img/sponsors/hivos_logo.jpg";
import knhl from "../../assets/img/sponsors/knhl.png";
import pact from "../../assets/img/sponsors/pact.png";
import un_women from "../../assets/img/sponsors/un_women.png";
import unicef_uk from "../../assets/img/sponsors/unicef_uk.png";

const IMAGES = [
  {
    id: "basilwizi-board-and-staff",
    title: "Basilwizi Trust- Secretariat, Board memebers, advisory council and other staff members",
    img: im1,
    author: "Basilwizi Trust",
    featured: true
  },
  {
    id: "basilwizi-community-borehole",
    title: "Borehole drilled in community",
    img: im3,
    author: "Basilwizi Trust"
  },
  {
    id: "basilwizi-self-help-groups",
    title: "Self Help Groups members meeting for a workshop.",
    img: im4,
    author: "Basilwizi Trust"
  },
  {
    id: "basilwizi-participants-at-an-inception",
    title: "Participants at an Inception and sensitisation meeting. Held at Mashala Primary School, in Mashala ward.",
    img: im5,
    author: "Basilwizi Trust"
  },
  {
    id: "basilwizi-ngoma-buntibe-ceremony",
    title: "Ngoma Buntibe ceremony at a local community",
    img: im6,
    author: "Basilwizi Trust"
  },
  {
    id: "basilwizi-the-fishpond",
    title:"The fishpond in the village Siabuwa in Binga District.",
    img: im17,
    author: "Basilwizi Trust",
    featured: true,
  },
  {
    id: "basilwizi-berita-sibanda",
    title:"Berita Sibanda (to the right in the picture) - Nzovunde Fishpond Beneficiaries Committee",
    img: im7,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-frank-mudimba-talking-to-volunteers",
    title:"Director of Basilwizi, Frank Mudimba, talking to volunteers by the fishpond in Siabuwa, Binga District.",
    img: im8,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-frank-mudimba-engaging-in-discussion",
    title:"Director of Basilwizi Frank Mudimba engaging in the discussion at the community reflection meeting in Nenyunga.",
    img: im9,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-international-day-of-the-african-child",
    title:"International day of the African child",
    img: im10,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-chairman-of-jutana-kwesu-union",
    title:"Chairman of Kujatana Kwesu Union, Kenias Chigwagwa (in the red shirt), at a fishermen discussion forum in Binga.",
    img: im11,
    author: "Basilwizi Trust",
    featured: true
  },
  {
    id: "basilwizi-fishermen-work-together",
    title:"Fishermen work together for better conditions",
    img: im12,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-mother-of-five",
    title:"Mother of five builds school classrooms",
    img: im13,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-woorks-with-the-lcp",
    title:"Basilwizi works with the Language and Culture Project ",
    img: im14,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-christmas-cheer-for-basilwizi-workforce",
    title:"Christmas Cheer for Basilwizi workforce",
    img: im15,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-citizen-journalist-purity-munkuli",
    title:"Citizen journalist Purity Munkuli reading a newspaper at a training in Saba ward.",
    img: im16,
    author: "Basilwizi Trust",
    featured: true
  },
  {
    id: "basilwizi-prp-binga-and-gokwe-nutrition-garden-1",
    title:"Protracted Relief Projects Binga and Gokwe North - nutrition garden",
    img: im18,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-prp-binga-and-gokwe-nutrition-garden-2",
    title:"Protracted Relief Projects - Binga and Gokwe North - nutrition garden",
    img: im19,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-prp-binga-and-gokwe-nutrition-garden-3",
    title:"Protracted Relief Projects - Binga and Gokwe North - more nutrition gardens",
    img: im20,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-prp-binga-and-gokwe-produce-from-gardens",
    title:"Protracted Relief Projects - Binga and Gokwe North - showing off produce from gardens",
    img: im21,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-titus-munsaka-farmer",
    title:"Titus Munsaka, Farmer and active community member.",
    img: im23,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-prp-binga-and-gokwe-dry-planting",
    title:"Protracted Relief Projects - Binga and Gokwe North - Dry planting",
    img: im22,
    author: "Basilwizi Trust",
    featured: true
  },
  {
    id: "basilwizi-hiv-aids-orphan",
    title:"HI/AIDS Orphaned and less privileged child",
    img: im24,
    author: "Basilwizi Trust",
  },
  {
    id: "basilwizi-luunga-ward-councilor-saina-muntanga",
    title: "Luunga Ward Councillor - Saina Muntanga - emphasising a Point During Message Collection Training at Luunga Primary school reduced size",
    img: im25,
    author: "Basilwizi"
  },
  {
    id: "basilwizi-teacher-training",
    title: "Teacher training efforts for Tonga Language development",
    img: im2,
    author: "Basilwizi Trust"
  },
  {
    id: "community-radio-is-the-way-forward",
    title: "Community Radio is the way Forward",
    img: imr,
    author: "Basilwizi Trust"
  },
  {
    id: "basilwizi-trust-offices-in-binga-center",
    title:"Basilwizi Trust Offices in Binga",
    img: basilwizi_office,
    author: "Basilwizi Trust",
    featured: true
  },
  {
    id: "basilwizi-sponsor-and-partner-actionaid",
    title: "Action Aid",
    img: action_aid,
    author: "Action Aid",
    type: "logo"
  },
  {
    id: "basilwizi-sponsor-and-partner-british-embassy",
    title: "British Embassy",
    img: british_embassy,
    author: "The British Embassy",
    type: "logo"
  },
  {
    id: "basilwizi-sponsor-and-partner-eu",
    title: "The European Union",
    img: eu_logo,
    author: "The Uropean Union",
    type: "logo"
  },
  {
    id: "basilwizi-sponsor-and-partner-firelight",
    title: "Firelight",
    img: firelight,
    author: "FireLight",
    type: "logo"
  },
  {
    id: "basilwizi-sponsor-and-partner-hivos",
    title: "Hivos",
    img: hivos_logo,
    author: "Hivos",
    type: "logo"
  },
  {
    id: "basilwizi-sponsor-and-partner-knhl",
    title: "Kindernorthilfe",
    img: knhl,
    author: "KNHL",
    type: "logo"
  },
  {
    id: "basilwizi-sponsor-and-partner-pact",
    title: "Pact Org",
    img: pact,
    author: "Pact",
    type: "logo"
  },
  {
    id: "basilwizi-sponsor-and-partner-un-women",
    title: "The UN Women",
    img: un_women,
    author: "The UN Women",
    type: "logo"
  },
  {
    id: "basilwizi-sponsor-and-partner-unicef-uk",
    title: "UNICEF UK",
    img: unicef_uk,
    author: "UNICEF",
    type: "logo"
  },
  {
    id: "basilwizi-sponsor-and-partner-default",
    title: "Default Basilwizi Logo",
    img: default_logo,
    author: "Basilwizi Default Logo",
    type: "logo"
  },
];

function getImageById(id){
  return IMAGES.find(image => image.id === id)
};

export { IMAGES, getImageById };
