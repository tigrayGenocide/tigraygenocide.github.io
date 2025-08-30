var config = {
  style: "mapbox://styles/damare/cktt6xnob01fu17nz253bxbej", // 'mapbox://styles/damare/ckpx1xlc30bot17saq0cnrtmr', // style URL
  accessToken:
    "pk.eyJ1IjoiZGFtYXJlIiwiYSI6ImNrcHFmbzFpdzAwOHcybnB2YTg5MHpwczEifQ.A8q1SPeisEpBl_zoUhxSMw", // 'pk.eyJ1IjoiZGFtYXJlIiwiYSI6ImNrcHFmbzFpdzAwOHcybnB2YTg5MHpwczEifQ.A8q1SPeisEpBl_zoUhxSMw',
  showMarkers: true,
  use3dTerrain: true,
  theme: "dark",
  title: "",
  subtitle: "",
  byline: "",
  footer: "",
  chapters: [

    {
      id: "Tig",
      alignment: "right",
      title: "Tigray",
      image:
        "https://cdn.glitch.me/b6251d90-0213-475a-9c62-bc28f3d3118e%2Fthumbnails%2FMekelle.jpg?1634782853037",
      description:
        "Tigray is one of the states making the Federal Democratic Republic of Ethiopia. Tigray is located in the north bordering countries, Eritrea to the north and Sudan to the west. Tigray borders Amhara state to the south and Afar state to the East. Tigray is home of approximately 5 MIllion people. Most people in tigray are farmers.",
      location: {
        center: [38.221, 13.554],
        zoom: 6.5,
        pitch: 45,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "Tigray-region",
          opacity: 0.45
        }
      ],
      onChapterExit: [
        {
          layer: "Tigray-region",
          opacity: 0
        }
      ]
    },

    {
      id: "Axum",
      alignment: "right",
      title: "Axum Marathon",
      image:
        "https://cdn.glitch.me/b6251d90-0213-475a-9c62-bc28f3d3118e%2Fthumbnails%2FAxumTsion.png?1634109345297",
      description:
        'Start at Aksum Obelisk ',
      location: {
        center: [38.719737, 14.1317],
        zoom: 18,
        pitch: 90,
        bearing: 25
      },
      onChapterEnter: [
        {
          layer: "Axum",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "Axum",
          opacity: 0
        }
      ]
    },
    {
      id: "heritage",
      alignment: "right",
      title: "Axumite Heritage Foundation",
      image: "",
      description:
        'AxumHeritage Foundation - add goes here',
      location: {
        center: [38.721611, 14.127042],
        zoom: 19,
        pitch: 180,
        bearing: 10
      },
      onChapterEnter: [
        {
          layer: "dengelat",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "dengelat",
          opacity: 0
        }
      ]
    },
    {
      id: "4 Ensesa",
      alignment: "right",
      title: "4 Ensesa",
      image: "",
      description:
        'Old Church',
      location: {
        center: [38.723784, 14.124790],
        zoom: 19,
        pitch: 85,
        bearing: 10
      },
      onChapterEnter: [
        {
          layer: "mah",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "mah",
          opacity: 0
        }
      ]
    },
    {
      id: "Antica",
      alignment: "right",
      title: "Antica",
      image: "",
      description:
        'Hotel',
      location: {
        center: [38.726402, 14.124239],
        zoom: 19,
        pitch: 85,
        bearing: 5
      },
      onChapterEnter: [
        {
          layer: "irob",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "irob",
          opacity: 0
        }
      ]
    },
    {
      id: "Sabean Hotel",
      alignment: "right",
      title: "Sabean Hotel",
      image: "",
      description:
        'Hotel',
      location: {
        center: [38.731738, 14.124375],
        zoom: 19,
        pitch: 85,
        bearing: 10
      },
      onChapterEnter: [
        {
          layer: "irob",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "irob",
          opacity: 0
        }
      ]
    },
    {
      id: "Atronos",
      alignment: "right",
      title: "Atronos",
      image: "",
      description:
        'AtronosHotel',
      location: {
        center: [38.742564, 14.124781],
        zoom: 18,
        pitch: 85,
        bearing: 10
      },
      onChapterEnter: [
        {
          layer: "hawz",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "hawz",
          opacity: 0
        }
      ]
    },
    {
      id: "Branch",
      alignment: "right",
      title: "Branch",
      image: "",
      description:
        'Branch Here',
      location: {
        center: [38.752745, 14.123699],
        zoom: 17,
        pitch: 75,
        bearing: -50
      },
      onChapterEnter: [
        {
          layer: "Tog",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "Tog",
          opacity: 0
        }
      ]
    },
    {
      id: "Dego",
      alignment: "right",
      title: "Dego",
      image:
        "",
      description:
        'Return from Mahbere Dego exit',
      location: {
        center: [38.757418, 14.124314],
        zoom: 19,
        pitch: 60,
        bearing: -180
      },
      onChapterEnter: [
        {
          layer: "Tog",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "Tog",
          opacity: 0
        }
      ]
    },
     {
      id: "blank",
      alignment: "right",
      title: "",
      
      
      location: {
        center: [38.719737, 14.1317],
        zoom: 18,
        pitch: 90,
        bearing: 25
      },
      onChapterEnter: [
        {
          layer: "Axum",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "Axum",
          opacity: 0
        }
      ]
    }
  ]
};
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        title: "Axum Oblisk",
        description:
          "The Obelisk of Axum (Tigrinya: ሓወልቲ ኣኽሱም) is a 4th-century CE, 24-metre-tall (79-feet) phonolite[2] stele/obelisk, weighing 160 tonnes, in the city of Axum in Ethiopia. It is ornamented with two false doors at the base and features decorations resembling windows on all sides. The obelisk ends in a semi-circular top, which used to be enclosed by metal frames.",
        message: "Axum Hawelti",
        iconSize: [135, 130]
      },
      geometry: {
        type: "Point",
        coordinates: [38.719, 14.132]
      }
    },
    {
      type: "Feature",
      properties: {
        title: "Martyrs Hawelti",
        description: "Martyrs Hawelti",
        message: "Martyrs Hawelti",
        iconSize: [0, 0]
      },
      geometry: {
        type: "Point",
        coordinates: [39.45934, 13.49045]
      }
    },
    {
      type: "Feature",
      properties: {
        title: "Axum Oblisk",
        description: "The Obelisk of Axum",
        message: "Baz",
        iconSize: [0, 0]
      },
      geometry: {
        type: "Point",
        coordinates: [38.719, 14.13]
      }
    },
    {
      type: "Feature",
      properties: {
        title: "Axum Oblisk",
        description: "",
        message: "Baz",
        iconSize: [0, 0]
      },
      geometry: {
        type: "Point",
        coordinates: [38.70711, 14.12704] //14.12704, 38.70711
      }
    },
    
    

    
    {
      type: "Feature",
      properties: {
        title: "Tigray",
        description: "A semi Autonomous State in Northern Ethiopia",
        iconSize: [160, 30]
      },
      geometry: {
        type: "Point",
        coordinates: [38.34777, 13.93533]
      }
    },
    


    

   

    

    
   
    
    
  ]
};
