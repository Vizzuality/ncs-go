export const PATHWAYS = [
  {
    id: 'forests',
    title: 'Forests',
    description:
      'Forests include any land that is not considered cropland with tree cover naturally greater than 25%, including tropical rainforests, dry forests, boreal forests, and tree plantations managed for wood products.',
    color: '#61CF77',

    subpaths: [
      {
        id: 'avoided-forest-conversion',
        title: 'Avoided Forest Conversion',
        color: '#BAE870',
        description:
          'Avoided emissions from preventing human conversion of forest to non-forest land uses such as agricultural, urban, or industrial lands.',
      },
      {
        id: 'climate-smart-forestry',
        title: 'Climate Smart Forestry',
        color: '#BAE870',
        description:
          'Avoided emissions and/or increased sequestration in working forests. Potential management activities could include reduced-impact logging practices, deferred harvest (an intentional reduction in forest harvesting intensity, including cessation of logging on some parcels), enhanced forest regeneration in post-harvest stands and other actions. ',
      },
      {
        id: 'forest-plantation-management',
        title: 'Forest Plantation Management',
        color: '#BAE870',
        description:
          'Increased sequestration in forest stands through strategies such as extending rotation length (time between harvest cycles) in even-aged, intensively managed plantations. Some NCS analyses have also considered carbon stored in wood products.',
      },
      {
        id: 'forest-based-agroforestry',
        title: 'Forest-based Agroforestry',
        color: '#BAE870',
        description:
          'Increased carbon storage from adding or protecting trees in crop or Savannas. This could include silvopasture (trees in grazing lands), tree intercropping/alley cropping (trees in rows with annual crops in between), riparian buffers',
      },
      {
        id: 'forest-fire-management',
        title: 'Forest Fire Management',
        color: '#BAE870',
        description:
          'Avoided emissions in fire-prone forests through management practices such as prescribed burning to reduce the risk of high-intensity wildfire or shifting timing of burns to reduce GHG emissions. In wetter forests where fires are less frequent, implementing fire control practices along forest edges to avoid human-caused fires.',
      },
      {
        id: 'avoided-woodfuel-harvest-in-forests',
        title: 'Avoided Woodfuel Harvest in Forests',
        color: '#BAE870',
        description:
          'Avoided emissions due to reduced harvest of wood used as fuel for cooking and heating, primarily through use of more efficient cookstoves.',
      },
      {
        id: 'reforestation',
        title: 'Reforestation',
        color: '#BAE870',
        description:
          'Increased sequestration from restoration of forest cover, that is, transitioning non-forest land uses to forest land uses in places where forests historically occurred.',
      },
    ],
  },
  {
    id: 'croplands',
    title: 'Croplands',
    description:
      'Croplands include any lands managed for annual or perennial crops, including agroforestry systems such as cacao, coffee, and intercropping.',
    color: '#C9A775',

    subpaths: [
      {
        id: 'cropland-based-agroforestry',
        title: 'Cropland-based Agroforestry',
        color: '#F5E2AF',
        description:
          'Increased carbon storage from adding or protecting trees in crop or pasture lands. This could include silvopasture (trees in grazing lands), tree intercropping/alley cropping (trees in rows with annual crops in between), riparian buffers, shelterbelts/windbreaks, and/or farmer-managed natural regeneration (changing management to allow trees to naturally regrow in some areas).',
      },
      {
        id: 'reduce-emissions-in-croplands',
        title: 'Reduce Emissions in Croplands',
        color: '#F5E2AF',
        description:
          'Reduced emissions in agricultural soils by protecting and restoring soil health, conserving water (rice management), and reducing use of fertilizer (nutrient management) ',
      },
      {
        id: 'increase-soil-carbon-in-croplands',
        title: 'Increase Soil Carbon in Croplands',
        color: '#F5E2AF',
        description:
          'Increased sequestration in agricultural soils by protecting and restoring soil health through activities such as Cover Crops, Reduced Tillage, and Biochar',
      },
    ],
  },
  {
    id: 'wetlands',
    title: 'Wetlands',
    description:
      'Wetlands include freshwater ecosystems, such as peatlands and freshwater mineral wetlands, as well as salty coastal ecosystems, such as mangroves, salt marshes, and seagrass meadows.',
    color: '#8BDCFF',

    subpaths: [
      {
        id: 'avoided-coastal-wetland-impacts',
        title: 'Avoided Coastal Wetland Impacts',
        description:
          'Avoided emissions by preventing degradation and/or loss of saltwater wetlands (including mangroves, salt marshes, and seagrass beds) from drainage, dredging, eutrophication, or other anthropogenic disturbances. ',
        color: '#CCECFA',
      },
      {
        id: 'avoided-peatland-conversion',
        title: 'Avoided Peatland Conversion',
        description:
          'Avoided emissions by preventing degradation and/ or loss of freshwater wetlands (primarily peatlands) from peat fires, drainage, dredging, eutrophication from fertilizers, or other anthropogenic disturbances. ',
        color: '#CCECFA',
      },
      {
        id: 'coastal-wetland-restoration',
        title: 'Coastal Wetland Restoration',
        description:
          'Avoided emissions by restoring degraded saltwater wetlands (including mangroves, salt marshes, and seagrass beds) through activities such as rewetting or increasing salinity by reestablishing hydrologic connectivity, as well as increased sequestration by restoring vegetation. ',
        color: '#CCECFA',
      },
      {
        id: 'peatland-restoration',
        title: 'Peatland Restoration',
        description:
          'Avoided emissions from degraded hydric soils by restoring the hydrologic function of drained or converted freshwater wetlands (primarily peatlands) and increased sequestration by restoring vegetation.',
        color: '#CCECFA',
      },
    ],
  },
  {
    id: 'grasslands',
    title: 'Grasslands, Shrublands, and Savannas',
    description:
      'This biome include prairies, steppes, shrublands, tundra, savannas, and other habitats with tree cover less than 25%. This includes grazed and un-grazed lands.',
    color: '#FFB053',

    subpaths: [
      {
        id: 'avoided-grassland-conversion',
        title: 'Avoided Grassland Conversion',
        color: '#FFDB80',
        description:
          'Avoided emissions by preventing conversion of native or managed grasslands and shrublands to cropland. ',
      },
      {
        id: 'grassland-restoration',
        title: 'Grassland Restoration',
        color: '#FFDB80',
        description:
          'Increased sequestration from restoring cropland to grasslands areas with limitations on agricultural production, grassland or shrubland in places where those systems historically occurred.',
      },
      {
        id: 'reduce-emissions-in-grazing-lands',
        title: 'Reduce Emissions in Grazing Lands',
        color: '#FFDB80',
        description:
          'Avoided methane emissions due to reduced enteric fermentation the result of improved livestock breeds and management techniques that increase reproductive performance, animal health, and weight gain, and the associated reduction in total animal numbers needed to supply the same level of meat and milk demand',
      },
      {
        id: 'increase-soil-carbon-in-grazing-lands',
        title: 'Increase Soil Carbon in Grazing Lands',
        color: '#FFDB80',
        description:
          'Additional soil carbon sequestration due to sowing legumes in planted pastures and grazing optimization on rangeland and planted pastures',
      },
      {
        id: 'avoided-woodfuel-harvest-in-savannas',
        title: 'Avoided Woodfuel Harvest in Savannas',
        color: '#FFDB80',
        description:
          'Avoided emissions due to reduced harvest of wood used as fuel for cooking and heating, primarily through use of more efficient cookstoves. ',
      },
      {
        id: 'savannasbased-agroforestry',
        title: 'Savannas-based Agroforestry',
        color: '#FFDB80',
        description:
          'Increased carbon storage from adding or protecting trees in crop or Savannas. This could include silvopasture (trees in grazing lands), tree intercropping/alley cropping (trees in rows with annual crops in between), riparian buffers',
      },
      {
        id: 'avoided-shrubland-conversion',
        title: 'Avoided Shrubland Conversion',
        color: '#FFDB80',
        description:
          'Avoided emissions from preventing human conversion of shrublands to non-forest land uses such as agricultural, urban, or industrial lands. ',
      },
      {
        id: 'savanna-fire-management',
        title: 'Savanna Fire Management',
        color: '#FFDB80',
        description:
          'Avoided emissions in fire-prone savannas through management practices such as prescribed burning to reduce the risk of high-intensity wildfire or shifting timing of burns to reduce GHG emissions. In wetter forests where fires are less frequent, implementing fire control practices along forest edges to avoid human-caused fires.       ',
      },
    ],
  },
];
