export const PATHWAYS = [
  {
    id: 'forest',
    title: 'Forest',
    description:
      'Forests include any land that is not considered cropland with tree cover naturally greater than 25%, including tropical rainforests, dry forests, boreal forests, and tree plantations managed for wood products.',
    color: '#60CBA5',
    link: 'https://nature4climate.org/natures-solutions/natures-pathways/',

    subpaths: [
      {
        id: 'avoided-forest-conversion',
        title: 'Avoided Forest Conversion',
        color: '#C1ECD2',
        description:
          'Avoidable emissions from preventing permanent human conversion of forest to non-forest land uses such as agricultural, urban, or industrial lands.',
      },
      {
        id: 'climate-smart-forestry',
        title: 'Climate Smart Forestry',
        color: '#C1ECD2',
        description:
          'Avoided emissions and/or increased sequestration in working forests. Potential management activities could include reduced-impact logging practices, deferred harvest (an intentional reduction in forest harvesting intensity, including cessation of logging on some parcels), enhanced forest regeneration in post-harvest stands and other actions.',
      },
      {
        id: 'reduced-woodfuel-harvest-in-forests',
        title: 'Reduced Woodfuel Harvest in Forests',
        color: '#C1ECD2',
        description:
          'Avoided emissions due to reduced harvest of woodfuel from forest biomes used for cooking and heating, without reducing heating or cooking utility.',
      },
      {
        id: 'reforestation',
        title: 'Reforestation',
        color: '#C1ECD2',
        description:
          'Increased sequestration from restoration of forest cover, that is, transitioning from non-forest (<30% tree cover) to forest (>60% tree cover) in places where forests have historically occurred. Reforestation can occur as a natural process (regeneration) or through tree planting. Croplands and urban areas are not considered reforestation opportunities.',
      },
    ],
  },
  {
    id: 'croplands',
    title: 'Croplands',
    description:
      'Croplands include any lands managed for annual or perennial crops, including agroforestry systems such as cacao, coffee, and intercropping.',
    color: '#F0B884',
    link: 'https://nature4climate.org/natures-solutions/natures-pathways/',

    subpaths: [
      {
        id: 'cropland-based-agroforestry',
        title: 'Cropland-based Agroforestry',
        color: '#FBE4C9',
        description:
          'Additional carbon sequestration in above- and below-ground tree biomass and soil carbon due to integration of trees into croplands at levels that do not reduce crop yields.',
      },
      {
        id: 'reduce-emissions-in-croplands',
        title: 'Reduced Emissions in Croplands',
        color: '#FBE4C9',
        description:
          'Reduced methane emissions from rice cultivation through improved water management practices.',
      },
      {
        id: 'increase-soil-carbon-in-croplands',
        title: 'Increased Soil Carbon in Croplands',
        color: '#FBE4C9',
        description:
          'Increased sequestration in agricultural soils by protecting and restoring soil health through activities such as cover crops, reduced tillage, green manure, and biochar.',
      },
    ],
  },
  {
    id: 'wetlands',
    title: 'Wetlands',
    description:
      'Wetlands include freshwater ecosystems, such as peatlands and freshwater mineral wetlands, as well as salty coastal ecosystems, such as mangroves, salt marshes, and seagrass meadows.',
    color: '#A2E6EE',
    link: 'https://nature4climate.org/natures-solutions/natures-pathways/',

    subpaths: [
      {
        id: 'avoided-coastal-wetland-conversion',
        title: 'Avoided Coastal Wetland Conversion',
        description:
          'Avoided emissions of above-ground biomass and soil carbon due to avoided degradation and/or loss of coastal wetlands (mangroves, tidal marshes, and seagrass meadows).',
        color: '#D6F1F3',
      },
      {
        id: 'avoided-peatland-conversion',
        title: 'Avoided Peatland Conversion',
        description:
          'Avoided emissions of above- and below-ground biomass and soil carbon due to peatland drainage and vegetation loss in tropical, temperate, and boreal peatlands.',
        color: '#D6F1F3',
      },
      {
        id: 'coastal-wetland-restoration',
        title: 'Coastal Wetland Restoration',
        description:
          'Enhanced sequestration in above-ground biomass and soil carbon from restoration activities in coastal wetlands (mangroves, tidal marshes, and seagrass meadows).',
        color: '#D6F1F3',
      },
      {
        id: 'peatland-restoration',
        title: 'Peatland Restoration',
        description:
          'Avoided oxidation of soil carbon (CO2 and CH4) due to soil re-wetting in tropical, temperate, and boreal peatlands.',
        color: '#D6F1F3',
      },
      {
        id: 'improved-peatland-management',
        title: 'Improved Peatland Management',
        description:
          'Improved management of drained peatland soils due to partial rewetting of peatlands converted to arable lands (tropical, emperate, and boreal peatlands).',
        color: '#D6F1F3',
      },
    ],
  },
  {
    id: 'grasslands',
    title: 'Grasslands, Shrublands, and Savanna',
    description:
      'This biome includes prairies, steppes, shrublands, tundra, savannas, and other habitats with tree cover less than 25%. This includes grazed and un-grazed lands.',
    color: '#C9EC80',
    link: 'https://nature4climate.org/natures-solutions/natures-pathways/',

    subpaths: [
      {
        id: 'avoided-grassland-conversion',
        title: 'Avoided Grassland Conversion',
        color: '#F1FABE',
        description:
          'Avoided soil carbon emissions by avoiding the conversion of grasslands (including savannas and shrublands) to cropland.',
      },
      {
        id: 'grassland-restoration',
        title: 'Grassland Restoration',
        color: '#F1FABE',
        description: 'Increased sequestration from restoring degraded grass and shrubland.',
      },
      {
        id: 'reduce-emissions-in-grazing-lands',
        title: 'Reduced Emissions in Grazing Lands',
        color: '#F1FABE',
        description:
          'Avoided methane emissions from cattle enteric fermentation, manure management, and productivity improvements.',
      },
      {
        id: 'increase-soil-carbon-in-grazing-lands',
        title: 'Increased Soil Carbon in Grazing Lands',
        color: '#F1FABE',
        description:
          'Increase soil carbon in managed pastures and grazing lands through stocking density and pasture management.',
      },
      {
        id: 'reduced-woodfuel-harvest-in-forests',
        title: 'Reduced Woodfuel Harvest in Shrublands',
        color: '#F1FABE',
        description:
          'Avoided emissions due to reduced harvest of woodfuel from savanna biomes used for cooking and heating, without reducing heating or cooking utility.',
      },
      {
        id: 'savannabased-agroforestry',
        title: 'Savannas-based Agroforestry',
        color: '#F1FABE',
        description:
          'Increased carbon sequestration in above- and belowground tree biomass and soil carbon due to integration of trees into grazing lands.',
      },
      {
        id: 'avoided-shrubland-conversion',
        title: 'Avoided Shrubland Conversion',
        color: '#F1FABE',
        description:
          'Avoided emissions by preventing the conversion of native or managed shrublands to croplands.',
      },
      {
        id: 'savanna-fire-management',
        title: 'Savanna Fire Management',
        color: '#F1FABE',
        description: 'Avoided emissions from improved fire management in savannas.',
      },
    ],
  },
];
