export const PATHWAYS = [
  {
    id: 'forests',
    title: 'Forests',
    description:
      'Forests include any land that is not considered cropland with tree cover naturally greater than 25%, including tropical rainforests, dry forests, boreal forests, and tree plantations managed for wood products.',
    color: '#60CBA5',
    link: null,

    subpaths: [
      {
        id: 'avoided-forest-conversion',
        title: 'Avoided Forest Conversion',
        color: '#C1ECD2',
        description:
          'Avoided emissions from preventing human conversion of forest to non-forest land uses such as agricultural, urban, or industrial lands.',
      },
      {
        id: 'climate-smart-forestry',
        title: 'Climate Smart Forestry',
        color: '#C1ECD2',
        description:
          'Avoided emissions and/or increased sequestration in working forests. Potential management activities could include reduced-impact logging practices, deferred harvest (an intentional reduction in forest harvesting intensity, including cessation of logging on some parcels), enhanced forest regeneration in post-harvest stands and other actions. ',
      },
      {
        id: 'forest-plantation-management',
        title: 'Forest Plantation Management',
        color: '#C1ECD2',
        description:
          'Increased sequestration in forest stands through strategies such as extending rotation length (time between harvest cycles) in even-aged, intensively managed plantations. Some NCS analyses have also considered carbon stored in wood products.',
      },
      {
        id: 'forest-based-agroforestry',
        title: 'Forest-based Agroforestry',
        color: '#C1ECD2',
        description:
          'Increased carbon storage from adding or protecting trees in crop or savannas. This could include multistrata systems (e.g. shade-grown cacao), tree monocrops (e.g. orchard, rubber), or short rotation coppices.',
      },
      {
        id: 'forest-fire-management',
        title: 'Forest Fire Management',
        color: '#C1ECD2',
        description:
          'Avoided emissions in fire-prone forests through management practices such as prescribed burning to reduce the risk of high-intensity wildfire or shifting timing of burns to reduce GHG emissions. In wetter forests where fires are less frequent, implementing fire control practices along forest edges to avoid human-caused fires.',
      },
      {
        id: 'avoided-woodfuel-harvest-in-forests',
        title: 'Avoided Woodfuel Harvest in Forests',
        color: '#C1ECD2',
        description:
          'Avoided emissions due to reduced harvest of wood used as fuel for cooking and heating, primarily through use of more efficient cookstoves in forests.',
      },
      {
        id: 'reforestation',
        title: 'Reforestation',
        color: '#C1ECD2',
        description:
          'Increased sequestration from restoration of forest cover, that is, transitioning from non-forest land uses to forest land uses in places where forests have historically occurred.',
      },
    ],
  },
  {
    id: 'croplands',
    title: 'Croplands',
    description:
      'Croplands include any lands managed for annual or perennial crops, including agroforestry systems such as cacao, coffee, and intercropping.',
    color: '#F0B884',
    link: null,

    subpaths: [
      {
        id: 'cropland-based-agroforestry',
        title: 'Cropland-based Agroforestry',
        color: '#FBE4C9',
        description:
          'Increased carbon storage from adding or protecting trees in croplands. This could include tree intercropping/alley cropping (trees in rows with annual crops in between), riparian buffers, boundary plantings (shelterbelts, windbreaks), and/or farmer-managed natural regeneration (changing management to allow trees to naturally regrow in some areas).',
      },
      {
        id: 'reduce-emissions-in-croplands',
        title: 'Reduced Emissions in Croplands',
        color: '#FBE4C9',
        description:
          'Reduced emissions in agricultural soils by protecting and restoring soil health, conserving water (rice management), and reducing the use of fertilizer (nutrient management).',
      },
      {
        id: 'increase-soil-carbon-in-croplands',
        title: 'Increased Soil Carbon in Croplands',
        color: '#FBE4C9',
        description:
          'Increased sequestration in agricultural soils by protecting and restoring soil health through activities such as cover crops, reduced tillage, and biochar.',
      },
    ],
  },
  {
    id: 'wetlands',
    title: 'Wetlands',
    description:
      'Wetlands include freshwater ecosystems, such as peatlands and freshwater mineral wetlands, as well as salty coastal ecosystems, such as mangroves, salt marshes, and seagrass meadows.',
    color: '#A2E6EE',
    link: null,

    subpaths: [
      {
        id: 'avoided-coastal-wetland-impacts',
        title: 'Avoided Coastal Wetland Impacts',
        description:
          'Avoided emissions by preventing degradation and/or loss of saltwater wetlands (including mangroves, salt marshes, and seagrass beds) from drainage, dredging, eutrophication, or other anthropogenic disturbances. ',
        color: '#D6F1F3',
      },
      {
        id: 'avoided-peatland-conversion',
        title: 'Avoided Peatland Conversion',
        description:
          'Avoided emissions by preventing degradation and/or loss of peatlands from fire, drainage, dredging, eutrophication from fertilizers, or other anthropogenic disturbances.',
        color: '#D6F1F3',
      },
      {
        id: 'coastal-wetland-restoration',
        title: 'Coastal Wetland Restoration',
        description:
          'Avoided emissions by restoring degraded saltwater wetlands (including mangroves, salt marshes, and seagrass beds) through activities such as rewetting or increasing salinity by reestablishing hydrologic connectivity, as well as increased sequestration by restoring vegetation. ',
        color: '#D6F1F3',
      },
      {
        id: 'peatland-restoration',
        title: 'Peatland Restoration',
        description:
          'Avoided emissions from degraded hydric soils by restoring the hydrologic function of drained or converted freshwater wetlands (primarily peatlands) and increased sequestration by restoring vegetation.',
        color: '#D6F1F3',
      },
    ],
  },
  {
    id: 'grasslands',
    title: 'Grasslands, Shrublands, and Savannas',
    description:
      'This biome includes prairies, steppes, shrublands, tundra, savannas, and other habitats with tree cover less than 25%. This includes grazed and un-grazed lands.',
    color: '#C9EC80',
    link: null,

    subpaths: [
      {
        id: 'avoided-grassland-conversion',
        title: 'Avoided Grassland Conversion',
        color: '#F1FABE',
        description:
          'Avoided emissions by preventing the conversion of native or managed grasslands and shrublands to croplands. ',
      },
      {
        id: 'grassland-restoration',
        title: 'Grassland Restoration',
        color: '#F1FABE',
        description:
          'Increased sequestration from restoring cropland to grassland areas with limitations on agricultural production, in places where grassland or shrubland systems have historically occurred.',
      },
      {
        id: 'reduce-emissions-in-grazing-lands',
        title: 'Reduced Emissions in Grazing Lands',
        color: '#F1FABE',
        description:
          'Avoided methane emissions due to reduced enteric fermentation as the result of improved livestock breeding and management techniques that increase reproductive performance, animal health and weight gain, and the associated reduction in total animal numbers needed to supply the same level of meat and milk demand.',
      },
      {
        id: 'increase-soil-carbon-in-grazing-lands',
        title: 'Increased Soil Carbon in Grazing Lands',
        color: '#F1FABE',
        description:
          'Additional soil carbon sequestration due to sowing legumes in planted pastures and grazing optimization on rangelands and planted pastures',
      },
      {
        id: 'avoided-woodfuel-harvest-in-savannas',
        title: 'Avoided Woodfuel Harvest in Savannas',
        color: '#F1FABE',
        description:
          'Avoided emissions due to reduced harvest of wood used as fuel for cooking and heating, primarily through use of more efficient cookstoves in savannas. ',
      },
      {
        id: 'savannasbased-agroforestry',
        title: 'Savannas-based Agroforestry',
        color: '#F1FABE',
        description:
          'Increased carbon storage from adding or protecting trees in croplands or savannas, including silvopasture (trees in grazing lands).',
      },
      {
        id: 'avoided-shrubland-conversion',
        title: 'Avoided Shrubland Conversion',
        color: '#F1FABE',
        description:
          'Avoided emissions from preventing human conversion of shrublands to non-shrubland land uses such as agricultural, urban, or industrial lands. ',
      },
      {
        id: 'savanna-fire-management',
        title: 'Savanna Fire Management',
        color: '#F1FABE',
        description:
          'Avoided emissions in fire-prone savannas through management practices (such as prescribed burning or shifting timing of burns) to reduce the risk of high-intensity wildfire and reduce GHG emissions. In wetter forests with infrequent fires, practices include implementing fire control practices along forest edges to avoid human-caused fires.',
      },
    ],
  },
];
