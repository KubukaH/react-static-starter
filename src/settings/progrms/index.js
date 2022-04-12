import * as React from "react";
import cm from "../../tools/images/chioneso_mudenda.jpg";

const tdata = [
  {
    p: "340 farmers trained and engaged  in conservation farming methods to  increase food security by close of project.",
    a: "Seed fairs",
    ch: [
      {
        b: "Seed fairs", m: "", f: "", t: "2,369"
      },
      {
        c: "Open voucher system (GSID )", m: "", f: "", t: "710"
      },
      {
        d: "Conservation Farmers - trainings on basic principles", m: "", f: "", t: "460"
      }
    ]
  },
  {
    p: "Build capacities of 450 community members in community based planning to implement relevant developmental plans to their needs",
    a: "Trained Village Agricultural Production Facilitators, Training on gender mainstreaming, advocacy and protection (these were conducted during in all livelihoods project activities",
    ch: [
      {
        b: "Trained Village Agricultural Production Facilitators", m: "", f: "", t: "4"
      },
      {
        c: "Training on gender mainstreaming, advocacy and protection (these were conducted during in all livelihoods project activities", m: "", f: "", t: "2049"
      }
    ]
  },
  {
    p: "Animal health improved by constructing three spray bays for livestock dipping in the two chiefdoms of Simuchembu and Nenyunga by 2011.",
    a: "Rehabilitated 2 dip tanks, Constructed a holding pen for in Simuchembu",
    ch: [
      {
        b: "Constructed a holding pen for in Simuchembu", m: "", f: "", t: "2400"
      },
      {
        c: "Training of small livestock beneficiaries", m: "", f: "", t: "114"
      },
      {
        d: "Distribution of small livestock", m: "", f: "", t: "114"
      },
      {
        e: "Distribution of vet drugs", m: "", f: "", t: ""
      }
    ]
  },
  {
    p: "Secured educational rights of OVC in Gokwe North (Simuchembu & Nenyunga)",
    a: "3 Secondary Schools were supported with block grants to ensure increased access to education for OVC especially the girl child."
  },
  {
    p: "Households are accessing safe and clean water and pump minders trained and are able to carry out basic borehole maintenance",
    a: "Rehabilitated 14 boreholes (12 in Simuchembu and 2 in Nenyunga Wards), Repaired 1 borehole",
    ch: [
      {
        b: "Rehabilitated 14 boreholes (12 in Simuchembu and 2 in Nenyunga Wards)"
      },
      {
        c: "Repaired 1 borehole"
      },
      {
        d: "Training of builders for the construction of water troughs", m: "0", f: "17", t: "17"
      },
      {
        e: "Pump minders kits and protective clothing", m: "0", f: "2", t: "2"
      },
      {
        f: "Water Point Committee members training", m: "26", f: "48", t: "74"
      },
    ]
  },
  {
    p: "Nutritional needs and incomes for the elderly and the children, especial those affected by HIV and AIDS, enhanced through the provision of better managed community gardens.",
    a: "Established 4 community gardens, Established 50 individual gardens, Adopted 2 community gardens from Christian Care, At least 4 new and 9 old nutrition gardens (NGs) were supported with fencing materials and tools. Established compost heaps for permaculture",
    ch: [
      {
        b: "Established 4 community gardens"
      },
      {
        c: "Established 50 individual gardens"
      },
      {
        d: "Adopted 2 community gardens from Christian Care", m: "80", f: "20", t: "100"
      },
      {
        e: "At least 4 new and 9 old nutrition gardens (NGs) were supported with fencing materials and tools. Established compost heaps for permaculture", m: "31", f: "29", t: "60"
      },
      {
        f: "Training of garden management", m: "112", f: "49", t: "161"
      },
      {
        g: "Training on solar drier utilisation", m: "112", f: "49", t: "161"
      },
      {
        h: "Garden Days", m: "160", f: "90", t: "250"
      },
      {
        i: "Nutrition Education", m: "80", f: "17", t: "97"
      }
    ]
  }
];

const ProgrammesData = [
  {
    id: "participatory-local-governance-and-public-accountability-project",
    dat: 
      <>
      <div>
        The Participatory Local Governance and Public Accountability Project (LOGPAP) seeks to ensure that women and youths are able to lead socio-economic change and promote non-ethnically aligned cohesion in Hwange district. The project recognizes the role of women, as mothers and first line opinion makers, and the youths, as future leaders, in shaping a progressive and cohesive society.<br/><br/>
        The project seeks that citizens, particularly marginalized women and youth, in poor rural communities in Hwange, are empowered to participate in decision making structures, participatory planning and budgeting and inclusion of community generated priorities into Schools and RDC budgets.
        <h3>Goals</h3>
        The LOGPAP project seeks to achieve the following goals:
        <ul>
          <li>
            To ensure the effective participation of women and youths in influencing pro-poor participatory budgeting in Hwange Rural District.
          </li>
          <li>
            To promote evidence based advocacy on Service delivery through the capacitation of Basilwizi and key partners on documentation.
          </li>
          <li>
            To build the capacity of community based leadership structures in budget tracking and monitoring for improved delivery of services.
          </li>
          <li>
            To promote engagement between communities and policy makers ensuring consideration of community priorities in planning, budgeting and decision making processes.
          </li>
        </ul>
        <h3>Target Group</h3>
        The LOGPAP project will specifically target Chiefs, Ward Development Committees (WARDCO), Village Development Committees (VIDCOs) and Village heads in the five wards of Mabale, Simangani, Mbizha, Mabale, Sidinda and Mashala. The project will also target five ward based gender officers as well as five youth coordinators/officers under respective government line ministries. Finally the project targets at least three organized women's groups (21 youths). These groups shall be the prime targets for trainings.
      </div>
      </>,
    imgDsc: "Participants at an Inception and sensitisation meeting held at Mashala Primary School, in Mashala ward."
  },
  {
    id: "local-rights",
    dat:
      <div>
        The Zambezi Valley Local Rights Project and the Child Sponsorship Project are both local rights projects funded by ActionAid. Both projects encourage community participation in development initiatives through strategic utilisation of various communication strategies. Community participation has been a constant theme in Basilwizi and remains central to the projects as a means to seek sustainability and equity, particularly for the people living in poverty. Involving local people in the planning of projects can increase their commitment to the project, and also helps capacitate local communities to be able to speak for themselves for better ways of solving their problems. The projects are mainly centred on capacitating the communities to be able to speak for themselves and engage office or duty bearers for improved service delivery.<br/><br/>

        The projects have three main focuses activities. Namely, Empowerment activities aimed at capacity building of people living in poverty to speak up and speak out about their human rights; Advocacy work & Campaigns activities mainly focusing on lobby and advocacy activities and specific or targeted campaigns, engaging duty bearers, service providers or policy makers;and Solidarity activities focusing on building strong networks or alliances with other similar organisations in order to effectively influence policies of duty bearers,  policy makers or decision makers.
        <h3>Goal</h3>
        The main goal for the projects is to combat poverty and socio-economic inequalities affecting development through the promotion of transparency and accountability of local and central governments and corporates so that service delivery can be improved. Accountability is a Constitutional Right of citizens which should be respected at all levels hence it is within citizen’s rights to demand it (accountability) in the delivery of quality public services, also given that they are tax payers. The project also sees transparency and accountability as essential in ensuring inclusive and sustainable development at local and national levels.
        <h3>Approach and target group</h3>
        The Project takes its point of departure from a Human Rights Based Approach to development, utilising people-centred methodologies, engagements, beneficiary participation and capacity-building as means of empowering the marginalized people to claim their rights and to demand accountability and public services from duty bearers. The target groups for the projects are local development institutions, lobby groups, Communal Areas Management Programme for Indigenous Resources (CAMPFIRE) committees, Tonga Language and Culture Committee (TOLACCO), Rural District Councils, School Development Committees (SDCs), Village and Ward Development Committees, traditional chiefs, churches, leaders and community members, youths and children.The major characteristic of the project is that it works with the existing leadership and community development structures rather than creating new or parallel ones. 

        <h3>Achievements</h3>
        Below are a few examples of successes within the two projects so far.
        <ul>
          <li>
            Developed partnerships with 5 Teachers’ Colleges (United College of Education, Bondolfi, Morgenster, Mkoba and Hillside)
          </li>
          <li>
            The project has increased confidence of people in the communities. This was seen during the Participatory planning and budgeting meeting in Gokwe North when one lady (Mejury Dube) stood up and revealed that she ended school at grade 7 but is now able to stand in front of people articulating issues for the best of her community.
          </li>
          <li>
            United College of Education started Tonga lessons in September 2014
          </li>
          <li>
            Lupane State University incorporated ChiTonga National Anthem after students from the operation areas advocated for it
          </li>
        </ul>
      </div>,
    imgDsc: "Luunga Ward Councillor 'Saina Muntanga' emphasising a Point During Message Collection Training at Luunga Primary school."
  },
  {
    id: "women-economic-empowerment-project",
    dat:
      <div>
        The purpose of the project is to enhance business management skills to women and strengthen their economic base as individuals and collective group. The project is being carried out in colaboration with the women's empowerment organisation Zubo and it is aiming to enhance women’s economic empowerment through increased access and sale of fish in Siachilaba ward in Binga. Formal fishing business is dominated by males a situation that excludes women. The project aims to enable women to attain organised fish sales and kapenta processing that would in turn boost women’s income as individuals and as a collective group. This will equip women with relevant skills and knowledge in business management; enhance women’s visibility in the public space and strengthen their voices in decision making processes at household and community levels.

        <h3>Goal</h3>
        The Women Empowerment Project aims to contribute to the general empowerment of women through economic empowerment approaches.

        <h3>Target Group</h3>
        The main targets are rural women regardless of their religious, cultural, ethnical and academic background. It targets mainly the rural and vulnerable women and children of the Zambezi valley. However for a start the project began with three wards of Binga District and these are Kariangwe, Sikalenge and Siachilaba wards.  

        <h3>Achievements</h3>
        <ul>
          <li>
            Positive change of mindset by local leadership has enhanced women’s participation in the project.
          </li>
          <li>
            Reduced stereotyping and stigmatization by women and collective voices fighting for children's rights realised in some villages.
          </li>
          <li>
            To a certain extent, men are changing mindset towards women and girl children and some men are supporting girl children to attend school.
          </li>
          <li>
            Women voice emerging in the discussions at workshops.
          </li>
          <li>
            Women are confidently managing their own businesses at the fish market and there is now a collective voice by women in articulating fish market problems.
          </li>
          <li>
            A few women managed to build their single roomed houses of asbestos and cement out of the benefits from the revolving fund.
          </li>
        </ul>
        <h3>Ongoing activities</h3>
        There is a new project that will upscale the Siachilaba fish market revolving fund project where fishing rig equipment shall be procured after the conduction of a feasibility study on markets, supplies and value chain analysis. On top of selling dry fish and kapenta these fish traders will again trade on fresh fish as freezers, cooler boxes and a truck shall be procured. This therefore means that more concentration in the new project shall be put on the fish traders in Siachilaba ward and the forums shall be catered for by the profits from the fish market. In short this is the angle that the project is taking.
        <h4>More on the Project...</h4>
        <a href="http://www.zubo.org" rel="noreferer noopener" target="__blank" >http://www.zubo.org</a>
      </div>,
  },
  {
    id: "language-and-culture-project",
    dat:
      <div>
        Basilwizi works with the Language and Culture Project to make education accessible to disadvantaged individuals and to promote the culture and languages of marginalized communities in the Zambezi Valley.

        <h3>Goal</h3>
        <ul>
          <li>To promote culture and the teaching of indigenous language in the Zambezi valley.</li>
          <li>To provide educational opportunities for the orphans and vulnerable children, to improve their quality of life and promote positive self development and growth.</li>
        </ul>
        
        <h3>Target Group</h3>
        School Heads, SDCs, TOLACCO, MOESAC, Teachers, Chiefs,  Councilors, community.

        <h3>Achievements</h3>
        <ul>
          <li>Awareness raising in order to generate widespread support for the promotion of indigenous languages and culture.</li>
          <li>Policy dialogue meetings with ministry of education officials – aggressive engagement of policy implementers in the valley to enforce teaching of the language.</li>
          <li>Lobby and advocacy training workshops for TOLACCO members to empower them to lobby for the exclusive teaching of the Tonga language in the Zambezi valley alongside English.</li>
          <li>Cultural support through restoration of the norms, beliefs and values using cultural festivals that brings participants from across the lake.
        Inter-schools competitions where children will use drama and poetry to campaign against cultural barriers that limit women and female youths in accessing education.</li>
          <li>Support TOLACO and Ministry of Education Officials in monitoring the quality of teaching of ChiTonga in Schools.</li>
          <li>
            Networking and information sharing between the Zambia and Zimbabwe Tonga for cultural exchanges and to share teaching resources.
            One of the beneficiaries of the Secondary Education Support Programmes is chioneso mudenda. 
            <br/>
            <img src={cm} alt="Chioneso" style={{ float: "left", margin: "12px" }} />
            Chioneso Mudenda, Form 4, of Tyunga Secondary School pictured here with guardian – grandmother, Ms Margaret Mudenda (61), at their homestead.
            The grandmother had these words to say, <i>“Chioneso could have been married by now had it not been the fees rescue she got from well-wishers through Basilwizi. I am happy now she is no longer being chased away by school authorities for non payment of fees. Her school attendance has improved”.</i>
          </li>
        </ul>
        <br/>
        <p>
        <b>NB:</b> However, the project does not have funding. It has been relying on budget lines from other programmes for all the notable achievements which could have been double this.</p>
      </div>
  },
  {
    id: "tonga-online-project",
    dat:
      <div>
        Tonga Online is a project under the Education and Culture Support Programme in Basilwizi, which was established after a merger between Basilwizi and Tonga Online Project. The ICT department promotes the use of Open Source Software (OSS) and has chosen the Ubuntu software, based on Linux operating systems and developed by Marck Shuttleworth as an easier, more affordable way, for particularly emerging economies to become computer literate. In addition, the ICT department provides technical support to sixteen (16) Information and Technology Centres in primary and secondary schools in Zimbabwe including 1 basic School in Zambia.<br/><br/>
        This is what one community member had to say about this project, ‘We see the Tonga Online project as vital to the transformation of the Zambezi Valley and the local communities should take advantage of the potential of new information and communication technologies and develop their skills, through the established ITCs, to exploit the services effectively’.

        <h3>Aproach and target group</h3>
        Access to and usage of modern ICT is envisaged to overcome effects of the prevalent remote and marginalised situation. The establishment of more points of access and relevant capacity building should counter poverty and lack of (means of) education and employment. The establishment of local area networks of communication amongst communities should empower them by improved access to information and communication. Improved service delivery by local government through capacity building and participatory development planning should provide for more transparency and accountability.<br/><br/>

        Key target group of the project are about 100 facilitators in charge of 8 existing and two ITCs in Binga district, people who are managing these facilities and/or using them for educational purposes.  Therefore the project is reaching out to cover all ten Secondary schools in Binga district.  Furthermore it is addressing some selected Primary (Feeder) Schools like Siachilaba, Siansundu and Binga. This beneficiary group encompasses a total of 8.027 pupils and about 300 teachers. For some activities, Sinazongwe Basic School and Maliko group on the Zambian shore of Lake Kariba are also participating.The wider communities of Binga, Siansundu, Siachilaba, Manjolo, Tinde, Pashu, Kariyangwe, Siabuwa and Lusulu, where ITCs are established, are direct and indirect beneficiaries and taking on responsibility by ownership of the relevant ITCs via their School Development Committees.<br/><br/>

        Special attention will be given to:
        <ul>
          <li>Girls, Children, Women / women groups like the basket weaving women associations</li>
          <li>People living with HIV/AIDS</li>
          <li>Migrant workers and the Tonga diaspora living abroad via the website www.mulonga.net</li>
          <li>Elderly people via the living memory collection of stories and sound samples</li>
        </ul>

        <h3>Achievements/Successes</h3>
        Key activities that were carried out in Sinazongwe, Zambia were Board Establishment for the ITC and Radio Station, Maintenance Workshop, E-Learning Workshop and Business Planning workshop for Women of Sinazongwe. Completion of the Solar Installation in Siabuwa and Public Access Point (PAP) and Local Area Network (LAN) were established. Work for Preparations for the Wireless Area Network (WLAN) was done through collecting a lot of GPS Data from the places that are part of the 8 of the pilot Nodes in Binga.Thanks to the support of ADA and AZFA and in close collaboration with Binga Rural District Council the Tonga Online Project established the Public Access Point at the Binga Library. The PAP will continue to provide trainings to the people in the Zambezi Valley. Establishment of the PAP at the Binga Community Library is the biggest achievement for the Basilwizi Tonga Online Project. Internet to the PAP was shared from the G3 Modem. 
      </div>
  },
  {
    id: "integrated-information-creation-access-and-sharing",
    imgDsc: "Citizen journalist Purity Munkuli reading a newspaper at a training in Saba ward.",
    dat:
      <div>
        The INCREASH project aims at enhancing community led information creation, access and sharing using various media tools including, but not limited to, ICTs, press, radio and peer interactions. Through this project Basilwizi seeks to enhance freedom of expression, association and the right to information. Basilwizi believes that development or lack thereof is mainly a result of limited access to information that ultimately inhibits freedom of expression and democratic participation of communities in the Zambezi valley. Therefore, enhanced information access, creation and sharing are keys to citizen’s participation in the democratic governance of the country. Through this project, Basilwizi works to ensure that the residents of the Zambezi valley are informed of both their rights and obligations as citizens of Zimbabwe for them to be able to contribute meaningfully to their own development.
        <h3>Goal</h3>

        The overall goal of the project is topromote community participation, freedom of expression and access to information in Binga and Sinazongwe districts of the Zambezi Valley. The project will contribute to an informed, interactive and engaged Zambezi Valley community.

        <h3>Approach and Target group</h3>

        The project will work for increased and sustained information access, generation and sharing, informed decision making among community leaders, improved knowledge of constitutional rights and obligations of the citizens, enhanced visibility of the Zambezi valley in national media and increased self-esteem among the Zambezi Valley communities. This will be achieved through sensitization meetings, workshops about resident’s rights and the constitution, trainings of citizen journalists, the establishment of a community radio station committee in Binga, review and follow up visit at the radio station in Sinazongwe in Zambia, publication of newsletters about activities in the Zambezi valley, establishing of media clubs, weekly distribution of newspapers to media clubs, promotion of teaching Tonga in schools and the education of Tonga speaking teachers.Capacitating the people of the Zambezi valley and working to share skills with and among the residents will also contribute towards enabling the communities to actively participate in socio-economic and political processes.<br/><br/>

        The number of people directly benefiting from this project is 3000 youths, men and women reached through training and active involvement in information gathering, sharing and access.18 traditional leaders and 30 church leaders shall also be targeted by the project. The INCREASH project is enforcing positive discrimination on women participation supplemented by gender awareness raising campaigns to ensure women appreciate the need for equal access to basic media rights.The total number of beneficiaries from this project will be about 150,000 in Binga and Sinazongwe.
      </div>
  },
  {
    id: "integrated-aquaculture-agriculture-project",
    imgDsc: "The fishpond in the village Siabuwa in Binga District",
    dat:
      <div>
        The Integrated Aquaculture Agriculture project is funded by European Union and the implementing partners are Basilwizi, World Vision and Aquaculture Zimbabwe. The partners in the project share areas of operation and Basilwizi is covering Hwange and Binga districts. In Hwange the project is working with capture fisheries and in Binga district both capture fisheries and aquaculture will be implemented. Ten fishponds will be excavated in Binga under the aquaculture component of the project.

        <h3>Goal</h3>
        To improve food security of vulnerable households by creating an environment that is conducive to reducing the dependency on humanitarian assistance and sustainably increases their resilience to shocks.

        <h3>Thematic areas:</h3>
        <ul>
          <li>Improved household income through fish sales and internal saving and lending</li>
          <li>Improved food production and dietary diversity of vulnerable households increased through fisheries and aquaculture activities.</li>
          <li>Improved community management in community resources.</li>
          <li>Improve government institution to support communities in sustainable fish and water resources management.</li>
          <li>Improved coordination and information exchange between small scale fishers and government institutions to positively influence policy.</li>
        </ul>
        
        <h3>Approach and Targetgroup</h3>
        Basilwizi is training government stakeholders relevant to the thematic areas above and these will later train members in the communities in Binga and Hwange. The project is also working closely with local leaders like chiefs, councillors and village heads for sustainability of the project. The programme is targeting women, men, fishermen, traders, people living with HIV& Aids, disabled, young and old people. In Binga district 125 households will directly benefit from fishponds and agriculture improvements and1280 households will benefit from the capture fisheries. In Hwange the project is targeting 60 fishermen and 15 traders.

        <h3>Achievements</h3>
        Several fishing cooperatives have already been formed in Binga and Hwange and Basilwizi is experiencing a lot interest in the project from the local communities. The fishing cooperatives in Binga are to be handed over a refrigerated truck to be able to transport fresh fish from the many fishing villages to a central store house in Binga centre and then from there on to the bigger cities of Zimbabwe to earn a higher profit. Together with the wider local communities fishermen in three different areas have managed to mobilise people to build fully functional fishponds. Basilwizi has provided a minimum of materials for the fishponds and already two of the fishponds are seeing fish growing and swimming in their ponds. In addition to providing the communities with fish the fishponds also provide fields in the surrounding areas with manure and water for irrigation.
      </div>
  },
  {
    id: "protracted-relief-projects-binga-and-gokwe-north",
    dat:
      <div>
        The Basilwizi Livelihoods project is currently implementing the Protracted Relief Programme Phase II (PRP II) in Binga and Gokwe North in partnership with Save the Children Zimbabwe and Concern Worldwide (CWW) respectively. The purpose of PRP is to ‘Prevent destitution and protect and promote the livelihoods of the poorest and most vulnerable’.

        <h3>Progress towards outputs and results of the project</h3>
        There have been important positive changes in the lives of the people in general as a result of the PRP II interventions in Gokwe North and Binga. So far, most significant changes recorded show changes on diet, in agronomic practice, in income and in social status for vulnerable and poor people. In general, household food security and nutrition have been enhanced through sustainable and improved productivity as a result of the programme. During the reporting period from January to December, the summarised progress against the milestones is shown in tabular form below.
        <table style={{ width: "100%", fontSize: "11px" }}>
          <thead>
            <tr>
              <th rowSpan={2}>
                Project outputs
              </th>
              <th rowSpan={2}>
                Activity
              </th>
              <th colSpan={3}>
                This Period
              </th>
            </tr>
            <tr>
              <th>M</th>
              <th>F</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              tdata.map((d) => (
                <tr key={d.p}>
                  <td>
                    {d.p}
                  </td>
                  <td>
                    {d.a}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <h3>Achievements/Successes</h3>
        <ul>
          <li>The seed fairs have improved cash circulation within the communities and promoted local seed varieties.</li>
          <li>As a result of block grants, there is a reduction in the number of pupils who drop out from school due to lack of school fees and other educational needs.</li>
          <li>As a result of the revolving loan scheme for vet drugs and dipping facilities, incidences of parasites and diseases cases and death rate have been reduced.</li>
          <li>As a result of the established CBPM structures, there is a marked change in community participation and total involvement when carrying out activities such as dip tank and borehole rehabilitation, block grants and vet drug distribution and that is a commendable work done which might lead to project sustainability.</li>
          <li>access to clean water</li>
          <li>Improved access to clean and safe water for both household and animals.</li>
          <li>The community is also making more effective use of available water resources, for example, communities have established individual gardens as a result of increased water availability.</li>
          <li>A further benefit and impact of the programme is that it has increased awareness of the importance of correct borehole construction techniques, thereby helping ensure that newly drilled boreholes should require less rehabilitation in the future.</li>
        </ul>
      </div>
  },
  {
    id: "self-help-groups",
    imgDsc: "Self Help Groups members meeting for a workshop.",
    dat:
      <div>
        The Self Help Group project started in 2012 and is operating in the wards of Sinansengwe, Sinampande, Nagangala and Nabusenga in the Zambezi Valley. The project uses rights based approach which views poverty as the denial of basic rights. The idea is that every human being has a great potential within herself. This hidden potential can be unleashed if the right environment is provided. As an individual, the poor are voiceless, powerless and vulnerable. By bringing them together as a homogenous collective, they have tremendous strength. This project seeks to bring women together in Self Help Groups to empower them and to build their capacity on skills like business management, communication, leadership and savings, loans and common fund management. Another aim of the Self Help Groups is that they come together to form Cluster Level Associations. From several Cluster Level Associations a “People’s Institution” is to be formed.The People’s Institution will be able to challenge the unjust systems and structures of society and larger issues affecting the community can be taken up and solved. Linkages are to be established with other development players and service providers and the hope is that the people involved will realise their rights and privileges and demand that their dues are met. 

        <h3>Goals</h3>
        <ul>
          <li>
            To create a strengthened enabling environment for the socio-economic vulnerable women in the Self-help Groups, through raising their level of income and living standards.
          </li>
          <li>
            To facilitate individual and community based economic benefit
          </li>
          <li>
            To strengthen the capacity of poor women, to organise themselves, to participate in decision making processes and influence policy at various levels.
          </li>
        </ul>
        <h3>Approach and target group</h3>
        The practice of this project is a “Community Development” approach. The members of a community are organized to form Self Help Groups. The entire community plays a role in selecting the households among them using criteria that they develop together with a Basilwizi facilitator. 15 to 20 members from the same socio-economic background form a Self Help Group. Using this approach the community members create ownership from the beginning of the project and the Self Help Groups become a familiar project for the whole community.<br/><br/>

        Meeting together each week and a weekly saving by the members are two of the most important aspects in the process. Meeting the other members once a week gives each member an opportunity to form a new identity. The women who have thus far been voiceless and powerless leading to a sense of hopelessness, soon realize that they are no more alone. They start seeing a new meaning and purpose to life. They start sharing their problems in the group and social issues are discussed. A new relationship of trust and togetherness develops and the process of “Social development” is among the valuable outputs from Self Help Groups. The project targets around 1000 women in the wards of Sinansengwe, Sinampande, Nagangala and Nabusenga in the Zambezi Valley and the aim is to create 70 Self Help Groups. Other beneficiaries of the project are community members, local leaders and council members in the wards.

        <h3>Achievements</h3>
        <ul>
          <li>
            The project has managed to form 71 Self Help Groups and thereby reaching the target of 70 groups within the district.
          </li>
          <li>
            One Cluster level Association was formed in Sinansengwe ward.
          </li>
          <li>
            Women have grasped the concept of the Self Help Groups and they are now economically empowered as most of them managed to fulfil their economic goals through venturing into individual businesses.
          </li>
          <li>
            Their social capital has increased as the women are helping one another in their daily lives and in times of need.
          </li>
        </ul>
        <div
          style={{
            backgroundColor: "#55554fbe",
            border: "2px solid #a0a465",
            borderRadius: "12px",
            overflow: "hidden",
            color: "ghostwhite",
            padding: "0px 8px 8px 8px"
          }}
        >
          <h4>A success story</h4>
          <span style={{ fontFamily: "Lucida Calligraphy", textAlign: "justify" }} >
            Olivia Muleya is a mother of one child, married and she lives in Muzinda village in Sinansengwe ward. She joined the Self Help Group in her area in April 2013 from the inception of the project. Before Olivia joined the group she was living in poverty with her husband who was not working and therefore they had no source of income for the household. <br/><br/> After being capacitated with business and management skills she realised she was not making use of her talents as a hair dresser. Olivia then borrowed 50 dollars from the group, bought hair chemicals and started a home salon where people could get their hair done. Every fortnight she would make a profit of 45 dollars.She continued with business and now she has paid back her loan and bought herself a new wardrobe, a new kitchen unit and four pots for the kitchen, three chickens, four kitchen chairs and a table.<br/><br/> The family is now living a better life and Olivia is appealing for other women to join Self Help Groups.
          </span>
        </div>
      </div>
  },
  {
    id: "health-HIV-and-AIDS-programme",
    imgDsc: "Farmer and active community member,Titus Munsaka, is explaining how he works with HIV and AIDS through Basilwizi's Home Based Care Programme in Tyunga, Binga District.",
    dat:
      <div>
        Under the HIV and AIDS programme, Basilwizi is implementing two projects. The National Action Plan for Orphans and Vulnerable Children (NAP for OVC) is being implemented in Binga in partnership with Save the Children Zimbabwe.<br/><br/>

        The title of the first project is: Enhanced Health/Protection and Care for Orphaned and Vulnerable Children in the Zambezi Valley. The major thrust of this project is to lobby and advocate for change of cultural practices that influence the spread of HIV and AIDS. On the other hand the project is seeking to promote those cultural practices that help fight HIV and AIDS as well as the care and support for those affected. The project strives to promote positive behavioural change strategies in the context of culture and it is targeting traditional and church leaders, children and other community leaders.<br/><br/>

        In Hwange District, Musuna Village, Basilwizi is also implementing an HIV and AIDS project for OVC programme targeting children and their families with funding from the Firelight Foundation. The project not only strives to promote positive behaviour change strategies in the context of culture but also provides support to targeted beneficiaries in the form of livelihood projects so that they realise improved incomes and more secure tenure resulting in improved livelihoods.
        
        <h3>Achievements/Successes</h3>

        The National Action Plan for Orphans and Vulnerable Children (NAP for OVC) Handbook, which was translated from English Language into ChiTonga Language, was distributed to key frontline service providers and/or duty-bearers such as Child Home-Based Care givers,Child Protection Committees (CPCs), Church and Traditional Leaders. The handbook, which was  published through the efforts of our partner organisation, Save the Children Zimbabwe, explains the roles of NAP for OVC and its structures.

        <h3>National Action Plan</h3>

        Lumvwanano Mugande nearly lost in terms of education had it  been the NAP for OVC project. She was born with a deformed face. For fear of shame and disparaging remarks from the community,her parents decided to hide from the sight of other children in Nsenga village. The CPC members visited Lumvwanano’s parents frequently and provided counselling sessions, which resulted in the parents sending their child to school to learn like others. She is now in grade six.  “This girl is very intelligent and she doesn’t forget what she would have learnt. She is also very cheerful” says Mvwano’s teacher at Nsenga Hill Primary School. 
      </div>
  }
];

const getProgramById = (id) => {
  return ProgrammesData.find(pd => pd.id === id);
};

export { ProgrammesData, getProgramById };