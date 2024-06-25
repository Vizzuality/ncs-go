import FUNDERS_SVG from 'svgs/users/funders.svg?sprite';
import GOVERMENTS_SVG from 'svgs/users/governments.svg?sprite';
import INDIGENOUS_SVG from 'svgs/users/indigenous.svg?sprite';
import MANAGERS_SVG from 'svgs/users/managers.svg?sprite';
import POLICY_MAKERS_SVG from 'svgs/users/policy-makers.svg?sprite';

export const USERS = [
  {
    id: 'policy-makers',
    name: 'Policymakers, practitioners and technical experts',
    icon: POLICY_MAKERS_SVG,
    description:
      'Naturebase can serve policymakers, practitioners and technical experts on their journey to identify, analyze and make informed decisions on nature and climate planning and implementation.',
  },
  {
    id: 'managers',
    name: 'Project managers',
    icon: MANAGERS_SVG,
    description:
      'It can also help project managers maximise their mitigation outcomes by combining different strategies and providing guidance on how to deliver high-integrity projects that safeguard human rights.',
  },
  {
    id: 'indigenous',
    name: 'Indigenous Peoples and local communities',
    icon: INDIGENOUS_SVG,
    description:
      'For Indigenous Peoples and local communities, it can help attract direct finance for their invaluable work as stewards of nature, and elevate their voices, claims and stories. Naturebase also provides guidance on high-integrity NCS implementation - including a human rights screener - and inspiring case studies that showcase what meaningful engagement, safeguards and leadership looks like.',
  },
  {
    id: 'governments',
    name: 'Governments',
    icon: GOVERMENTS_SVG,
    description:
      'For governments, naturebase works as a guide for better, more comprehensive nature and climate planning and delivery, as well as a tool to attract and direct finance for nature.',
  },
  {
    id: 'funders',
    name: 'Funders',
    icon: FUNDERS_SVG,
    description:
      'Funders, on the other hand, can use naturebase as a first step to identify where and what to invest in, as well as learn more about the many benefits and returns investing in nature can provide.',
  },
];

export const PARTNERS = [
  {
    name: 'The Nature Conservancy',
    logo: '/images/logos/nature_conservancy.jpg',
    link: 'https://www.nature.org/en-us',
  },
  {
    name: 'Nature For Climate',
    logo: '/images/logos/nature_4_climate.png',
    link: 'https://nature4climate.org',
  },
  {
    name: 'Conservation International',
    logo: '/images/logos/conservation_international.png',
    link: 'https://www.conservation.org',
  },
  {
    name: 'Clarke University',
    logo: '/images/logos/clarke_university.png',
    link: 'https://clarke.edu',
  },
  // {
  //   name: 'World Resources Institute',
  //   logo: '/images/logos/world_resources_institute.png',
  //   link: 'https://www.wri.org',
  // },
  {
    name: 'Woodwell Climate Research Center',
    logo: '/images/logos/woodwell_climate_research.png',
    link: 'https://www.woodwellclimate.org',
  },
  // {
  //   name: 'Cornell University',
  //   logo: '/images/logos/cornell_university.png',
  //   link: 'https://www.cornell.edu',
  // },
  { name: 'Slu', logo: '/images/logos/slu.png', link: 'https://www.slu.se' },
  { name: 'Sei', logo: '/images/logos/sei.png', link: 'https://www.sei.org' },
  { name: 'Eth Zurich', logo: '/images/logos/eth.png', link: 'https://ethz.ch/en.html' },
  { name: 'Vizzuality', logo: '/images/logos/vizzuality.png', link: 'https://www.vizzuality.com' },
];

export const FAQS = [
  {
    question: 'What are Natural Climate Solutions?',
    answer:
      '<p>Natural Climate Solutions (NCS) are actions to <b>protect, better manage</b> and <b>restore</b> nature to reduce greenhouse gas emissions and store carbon. Science shows that— if deployed alongside other rapid decarbonization efforts such as cutting out fossil-fuel use and accelerating renewable energy—nature can help us avoid the worst impacts of climate change and deliver a third of the emission reductions needed by 2030.</p>',
  },
  {
    question: 'How are Natural Climate Solutions different from Nature-based solutions?',
    answer:
      'Natural Climate Solutions (NCS) are a subset of Nature-based solutions (NbS) that are focused on climate mitigation benefits. We have continued to use the term NCS to denote the specific accounting framework we have developed but encourage substituting the term NbS, or simply “nature,” as useful and appropriate for the audience.',
  },
  {
    question: 'What features are currently available?',
    answer:
      '<div><p>Naturebase will continue to evolve with new features and additional datasets. The current beta version includes accurate data for 18 out of 25 Natural Climate Solutions pathways and activities, including:</p><br/> <div><li>Reforestation</li><li>Avoided Forest Conversion</li> <li>Reduced Impact Logging for Climate Mitigation (RIL-C)</li><li>Reduced Woodfuel Harvest in Forests (RWF)</li><li>Reduced Woodfuel Harvest in Savannas (RWS)</li><li>Savanna burning</li><li>Increased Soil Carbon in Grazing Lands</li><li>Feed Management and Additives</li><li>Grassland Restoration (GrR)</li><li>Silvopasture</li><li>Trees in Croplands</li><li>Rice Cultivation</li><li>Cover Crops</li><li>Biochar</li><li>Reduced Tillage</li><li>Mangrove Protection</li><li>Mangrove Restoration</li><li>Peatland Restoration (PeR)</li></div><br/><p>Additional data on mitigation potential for avoided shrubland conversion (ASC), avoided grassland conversion (AGC), avoided peatland drainage (APC), seagrass protection, saltmarsh protection, seagrass restoration, and saltmarsh restoration will be released soon. Whilst all pathway data available now is accurate to the indicated level of certainty, global and national totals for mitigation potential may increase as new pathways are included.</p></div>',
  },
  {
    question: 'How is naturebase different from other platforms?',
    answer:
      'While many existing platforms serve the purpose of monitoring and reporting of progress around different natural ecosystems, such as the tracking of deforestation rates, naturebase focuses on identifying opportunities to protect, restore and sustainably manage nature to reduce the impacts of climate change. Our platform offers the largest database of peer-reviewed science on Natural Climate Solutions, combined with additional resources such as co-benefits, policies, and financing. It also includes all identified activities for Natural Climate Solutions at the global, national and subnational levels.',
  },
  {
    question:
      'How is naturebase inclusive of diverse voices and ensuring the tool aligns with the rights of Indigenous Peoples and local communities?',
    answer:
      '<div><p>Indigenous Peoples and local communities (IP&LCs) steward a quarter of the world’s lands and 80% of the world’s biodiversity. We recognize that IP&LCs are the true stewards of lands and waters – and have been deploying Natural Climate Solutions since time immemorial. Naturebase intends to both respect and support these communities in their own pursuit of informed and self-determined climate and land use decision-making. </p><br/><p>The platform includes the <a href="https://humanrights.naturebase.org" target="_blank">NCS Human Rights Toolset</a>, which was specially designed to help screen existing and proposed projects for ongoing or potential future risks to human rights and agency.  Beyond that, sensitive data such as land tenure, as well as those uploaded onto the platform will not be publicly shared, conforming with principles of Free, Prior, and Informed Consent (FPIC).</p></div>',
  },
  {
    question: 'Who is building this platform?',
    answer:
      '<div><p>Naturebase is supported by the <a href="https://www.nature4climate.org" target="_blank">Nature4Climate</a> coalition and developed by global experts at The Nature Conservancy, Conservation International, the World Resources Institute,  the Global Mangrove Alliance and the Clean Cooking Alliance, with contributions from numerous other organizations across the environmental sector. As a free online tool that is built upon public transparent, open source, peer-reviewed science and designed to serve the movement, naturebase does not intend to promote specific brands nor include any for-profit features.</p></div>',
  },
  {
    question: 'Who is funding naturebase?',
    answer:
      'In 2020, the Bezos Earth Fund pledged a $10 billion fund over a decade to fight the impact of climate change. The Nature Conservancy received a portion of this gift to dramatically expand the scientific tools needed to take Natural Climate Solutions to scale, across the globe. The funding is also focused on building equitable solutions that benefit communities impacted by climate change by engaging diverse community stakeholders, indigenous leadership, and others.',
  },
  {
    question: 'Which data sources does naturebase use?',
    answer:
      'The specific methodology and input data used to calculate the mitigation potential will vary among pathways, but all adhere to the core principles of Natural Climate Solutions. Each spatial datasets presented here estimate the mitigation potential of Natural Climate Solution activities derived from original geospatial analysis using the latest satellite and peer-reviewed datasets of current land systems, varied geospatial data, and carbon emissions/sequestration estimates informed by a review of peer-reviewed publications. For more information see our data download section.',
  },
  {
    question: 'How recent is the data and how often is it updated?',
    answer:
      'The pathway data represents the latest and most accurate estimations of the mitigation potential associated with each dataset. These estimations may be subject to updates, influenced by advancements in global scientific knowledge, changes in emissions factors or available global extent data, and will differ for each dataset.',
  },
  {
    question: 'How do we express climate mitigation potential ?',
    answer:
      'Climate mitigation potential will either be expressed as increased sequestration for restoration pathways (usually expressed in units of metric tons of carbon dioxide equivalent sequestered per year), avoided loss based on historic conversion (usually expressed in units of metric tons of carbon dioxide equivalent per hectare) for the protect pathways, or the increased sequestration or reduced emissions due to a combination for improved management practices for the manage pathways.',
  },
  {
    question: 'What is the baseline that’s being assumed for the pathway data?',
    answer:
      'The baseline used for each pathway is dependent on each specific dataset. Accounting horizons will be standardized for each pathway for the years 2035 and 2050. All data assumptions and caveats are indicated in the individual methodology sections and will vary per dataset. For more information on the pathways, consult the data download section.',
  },
];
