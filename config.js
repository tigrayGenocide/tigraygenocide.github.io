var config = {
    style: 'mapbox://styles/damare/cktt6xnob01fu17nz253bxbej',// 'mapbox://styles/damare/ckpx1xlc30bot17saq0cnrtmr', // style URL
    accessToken: 'pk.eyJ1IjoiZGFtYXJlIiwiYSI6ImNrcHFmbzFpdzAwOHcybnB2YTg5MHpwczEifQ.A8q1SPeisEpBl_zoUhxSMw', // 'pk.eyJ1IjoiZGFtYXJlIiwiYSI6ImNrcHFmbzFpdzAwOHcybnB2YTg5MHpwczEifQ.A8q1SPeisEpBl_zoUhxSMw',
    showMarkers: false,
    use3dTerrain: true,
    theme: 'dark',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
		{
            id: 'afri',
            alignment: 'center',
            title: '365 days of Tigray Genocide',
            image: 'https://assets.teenvogue.com/photos/6111ad88ddd7f5da88f1f17b/16:9/w_2560%2Cc_limit/GettyImages-1230073031.jpg',
            description:  'November 4 marks 5 years since the onset of War on Tigray. During this period, Tigray has experienced massacres, chemical warfare, vandalized hospitals, looted universities, destroyed churches and mosques; humanitarian aid blockages, man-made famine, and weaponized rape (yes — intentional, systematic rape). <br><b><a href="https://www.teenvogue.com/story/tigray-ethiopia-genocide"><b>Read More from Teen Vogue Blog</a>',
            location: {
                center: [23.38605, 7.03153],
                zoom: 2.5,
                pitch: 60,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'african-prob',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'african-prob',
                    opacity: 0
                }
            ]
        },
        {
			
            id: 'Eth',
            alignment: 'right',
            title: 'Ethiopia',
            image: '',
            description: 'Ethiopia is home to many nations and nationalities of several ethnicities and languages. In 2018, Prime Minister Hailemariam Desalegn resigned after protests and youth movement, mostly from the Oromo Region. Abiy Ahmed was selected and transitionally assigned to act as prime minister of Ethiopia. Soon after taking office, Ahmed made drastic reforms, restructured the government bodies and marginalized the Tigray Region and its ruling party. He made secret agreements with the long-time dicatator of neighboring Eritrea which afffect border towns of Badme and its surroundings without consulting the inhabitants at the border in the northern most semi-self adminstrative state of Tigray and their leaders. He recieved Nobel Peace Prize for what was advertised as &#39normalization of relations or a peace deal with Eritrea&#39. He then postponed the 2020 national election against the constitution of the Federal Demoratic Republic of Ethiopia. To the contrary the Tigray Regional Government held its own regional election in September 2020 in accordance with the constitution. This gave Abiy a pretext to wage war on people of Tigray while the Nobel Prize served him as camoflage of a peace maker. Today Ethiopia is continues waging war against its own people in Tigray.',
            location: {
                center: [39.10104773958426, 8.66821575259674],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'Ethi-Border',
                    opacity: 0.45
                }
            ],
            onChapterExit: [
                {
                    layer: 'Ethi-Border',
                    opacity: 0
                }
            ]
        },
        {
			
            id: 'Tig',
            alignment: 'right',
            title: 'Tigray',
            image: 'https://cdn.glitch.me/b6251d90-0213-475a-9c62-bc28f3d3118e%2Fthumbnails%2FMekelle.jpg?1634782853037',
            description: 'Tigray is one of the states making the Federal Democratic Republic of Ethiopia. Tigray is located in the north bordering countries, Eritrea to the north and Sudan to the west. Tigray borders Amhara state to the south and Afar state to the East. Tigray is home of 5.XX MIllion people. Most people in tigray are farmers.',
            location: {
                center: [38.221, 13.554],
                zoom: 6.5,
                pitch: 45,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'Tigray-region',
                    opacity: 0.45
                }
            ],
            onChapterExit: [
                {
                    layer: 'Tigray-region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Dan',
            alignment: 'right',
            title: 'Dansha',
            image: '',
            description: 'Dansheha is a town in Western Tigray close to Tigray-Amhara border. Dansheha has a significant importance as Abiy used it to justify this war by claiming that TPLF took over the Northern Command of the Army and his actions are merely "Law Enforcement". However, both TPLF and the People of Tigray dis agree as the seige to to withhold resources to Tigray has been happening for more than 2 years at that time and hate speech and resenment towards Tigrayans was hitting an all time high in cities and regions of Ethiopia.',
            location: {
                center: [36.97378463447054, 13.564568278168379], 
                zoom: 18,
                pitch: 75,
                bearing: -25
            },
            onChapterEnter: [
                {
                    layer: 'northern',
                    opacity: 1
                }
            ],
            onChapterExit: [
              {
                    layer: 'northern',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Mai',
            alignment: 'right',
            title: 'Mai Kadra Massacre',
            image: '',
            description: '“We have managed to collect plenty of incredible facts from the relatives, eyewitnesses, and testimonies on the ground to reflect exactly what happened in Mai Kadra on November 09, 2020. We have also identified by name many of the massacred.  What happened in Mai Kadra is a horrific and senseless massacre of ethnic Tigrayans. The evidence we have collected so far from survivors who fled to Sudan shows that civilian Tigrayans were stabbed and hacked to death with machetes and axes by the Amhara militias and the Fano rebel group. For example, Mr. Tesfay Mitiku (60), Mr. Aregay Weldu (82), Mr. Mehari Niguse (47), Mr. Birhane Gebrehiwet Gebremedhin (28), Mr. Haftu (80) with his wife are some of the Tigrayan civilians stabbed and hacked to death with machetes and axes. These are some of the untold sides of the stories of real victims the Amnesty report did not include.” <br> <font color = red> <b> 9 November, 2020 </br><b> <a href="https://www.tghat.com/2021/01/12/the-mai-kadra-massacre/">Read More from TGHAT</a>',
            location: {
                center: [36.56, 14.070], 
                zoom: 16,
                pitch: 71,
                bearing: -70
            },
            onChapterEnter: [
                {
                    layer: 'maiKadra',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'maiKadra',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Humera',
            alignment: 'right',
            title: 'Humera Ethnic Cleansing',
            image: '',
            description: 'The ghostly outlines of limbs emerge through the mist along the Setit River in eastern Sudan. As the river&#39;s path narrows, the drifting bodies become wedged on the silty clay bank and their forms appear more clearly; men, women, teenagers and even children.The marks of torture are easily visible on some, their arms held tightly behind their backs.On a trip to Wad El Hilou, a Sudanese town near the border with Ethiopia, a CNN team counted three bodies in one day. Witnesses and local authorities in Sudan confirmed that in the days after the team&#39;s departure, 11 more bodies arrived downstream.<br>Evidence indicates the dead are Tigrayans. Witnesses on the ground say the bodies tell a dark story of mass detentions and mass executions across the border in Humera, a town in Ethiopia&#39;s Tigray region.<br>CNN has spoken with dozens of witnesses collecting the bodies in Sudan, as well as international and local forensic experts and people trapped and hiding in Humera, to reveal what appears to be a new phase of ethnic cleansing in Ethiopia&#39;s war.<br> <font color = red><b> November 2020 and Early 2021</br><br><div style="left: 0; width: 80%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://fave.api.cnn.io/v1/fav/?customer=cnn&amp;env=prod&amp;video=world/2021/09/09/ethiopia-tigray-bodies-recovered-sudan-river-elbagir-pkg-intl-lead-vpx.cnn" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media;"></iframe></div><br><b><a href="https://edition.cnn.com/2021/09/05/africa/ethiopia-tigray-humera-sudan-bodies-cmd-intl/index.html">Read More from CNN</a>',
            location: {
                center: [36.60951380543528, 14.28658756302266],  
                zoom: 17,
                pitch: 80,
                bearing: 70
            },
            onChapterEnter: [
                {
                    layer: 'ethno',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'ethno',
                    opacity: 0
                }
            ]
        },
        
        {
            id: 'Axum',
            alignment: 'right',
            title: 'Axum Massacre',
            image: 'https://cdn.glitch.me/b6251d90-0213-475a-9c62-bc28f3d3118e%2Fthumbnails%2FAxumTsion.png?1634109345297',
            description: '“Eritrean troops fighting in Ethiopias Tigray state systematically killed hundreds of unarmed civilians in the northern city of Axum on 28-29 November 2020, opening fire in the streets and conducting house-to-house raids in a massacre that may amount to a crime against humanity, Amnesty International said today in a new report. <br> Amnesty International spoke to 41 survivors and witnesses – including in-person interviews with recently arrived refugees in eastern Sudan and phone interviews with people in Axum – as well as 20 others with knowledge of the events. They consistently described extrajudicial executions, indiscriminate shelling and widespread looting after Ethiopian and Eritrean troops led an offensive to take control of the city amid the conflict with the Tigray Peoples Liberation Front (TPLF) in mid-November. <br> Satellite imagery analysis by the organizations Crisis Evidence Lab corroborates reports of indiscriminate shelling and mass looting, as well as identifies signs of new mass burials near two of the city’s churches. <br> <b><font color = red>The evidence is compelling and points to a chilling conclusion. </font color> </b> Ethiopian and Eritrean troops carried out multiple war crimes in their offensive to take control of Axum. Above and beyond that, Eritrean troops went on a rampage and systematically killed hundreds of civilians in cold blood, which appears to constitute crimes against humanity,” said Deprose Muchena, Amnesty Internationals Director for East and Southern Africa.” <br> <font color = red> <b> 28-29 November, 2020 </b><br><b><a href="https://www.amnesty.org/en/latest/press-release/2021/02/ethiopia-eritrean-troops-massacre-of-hundreds-of-axum-civilians-may-amount-to-crime-against-humanity/">Read More from Amnesty International report</a> ',
            location: {
                center: [38.719, 14.132],
                zoom: 16,
                pitch: 80,
                bearing: 75
            },
            onChapterEnter: [
                {
                    layer: 'Axum',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Axum',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Dengelat',
            alignment: 'right',
            title: 'Dangelat Massacre',
            image: '',
			description: '<b><font color = red>&#34;Ethiopia &#39;will be digging up mass graves for a decade&#39;: inside Tigray&#39;s dirty war&#34; </font color> </b> <br>&#34;They had arrived on foot in late November&#34;, he said, as the priest and his family were sharing injera flatbread and lentils to celebrate a Christian Orthodox holiday in the village of Dengelat in Tigray, the northernmost region of Ethiopia. &#34;You speak like us in Tigrinya. You are Eritreans. We are brothers. Come in and eat with us,&#34; Abraha recalled telling six soldiers. But instead they took six men, aged between 15 and 46, to the banks of the nearby river, tied their hands behind their backs and shot them in the head. &#34;They killed unarmed human beings whom they have not seen killing others. In total, local church officials and members of the Inter-Religious Council of Tigray estimate that at least 164 civilians were killed in Dengelat over two days in late November. These are just a few of the thousands that diplomats and aid workers say have died since early November…&#34; <br> <font color = red><b>  November, 2020 </b><br><div style="left: 0; width: 80%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://fave.api.cnn.io/v1/fav/?customer=cnn&env=prod&video=world/2021/02/27/ethiopia-tigray-massacre-church-dengelat-lon-orig.cnn" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media;"></iframe></div> <br><b><a href="https://edition.cnn.com/2021/02/26/africa/ethiopia-tigray-dengelat-massacre-intl/index.ml ">CNN Reports</a><br><b><a href="https://www.ft.com/content/23021d09-5dac-4ff5-b2a9-6b040ffdc6db">Read More from Financial Times</a> ',
            location: {
                center: [39.653708820921146, 14.235740962141307],
                zoom: 16,
                pitch: 80,
                bearing: -140
            },
            onChapterEnter: [
                {
                    layer: 'dengelat',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dengelat',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Mahbere',
            alignment: 'right',
            title: 'Mahbere Dego',
            image: '',
            description: 'Earlier this year, Bellingcat worked with Newsy and BBC Africa Eye to geolocate five videos showing the execution of civilians by people in military uniform near Mahbere Dego, a town in Ethiopia’s Tigray region.<br>That joint investigation concluded that the massacre likely took place some time in January 2021. The soldiers in the video were speaking Amharic, Ethiopia’s administrative language and the native tongue of the Amhara people. At least one military uniform seen in the videos also displayed the markings of the Ethiopian flag. <br>On 16 June 2021, new footage surfaced on social media showing soldiers executing civilians at a cliff edge. Analysis of this new footage shows that it is part of the same massacre on which we reported previously.<br>Further details can also be gleaned from the new footage. A patch on the arm of a soldier seen carrying out executions in the footage bears the same colours and markings of the Ethiopian flag as seen in the initial videos. The person who appears to be recording the video also states the name of the military unit to which he claims to belong.<br><div style="left: 0; width: 80%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/-fXBuoJxZ5Y?rel=0" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe></div> <br><b><a href="https://www.bellingcat.com/news/2021/06/24/tigray-conflict-videos-provide-new-details-of-mahbere-dego-massacre/">Read More from Bellingcat</a>',
            location: {
                center: [39.01707608378601, 13.724632750068526],
                zoom: 14,
                pitch: 85,
                bearing: 10
            },
            onChapterEnter: [
                {
                    layer: 'mah',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'mah',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Irob',
            alignment: 'right',
            title: 'Irob Extinction',
            image: '',
            description: '&#34;Tiny ethnic group fears extinction as Tigray war enters 6th month.<br>The Irob, who mostly live in Ethiopia&#39;s northeastern corner bordering Eritrea, face an existential crisis in addition to humanitarian suffering caused by ongoing conflict, activists say.&#34;<br>&#34;Teklay Hailay* has been so worried since November 4 that he has had trouble sleeping....What has garnered less attention, however, is the plight of Teklay&#39;s ethnic kin: the Irob, a minority group with their own distinct language who live among the much larger Tigrayan population in the embattled region. Numbering about 60,000, of whom an estimated 35,000 live in semi-arid mountainous areas in Tigray&#39;s northeastern corner bordering Eritrea, the Irob now face an existential crisis in addition to the humanitarian suffering caused by the ongoing conflict, activists say.&#34;<br><b><a href="https://www.aljazeera.com/news/2021/5/4/tiny-ethnic-group-fears-extinction-as-tigray-war-enters-6th-month ">Read More from Aljazeera</a>',
            location: {
                center: [39.54062994474864, 14.560779238648442],
                zoom: 17,
                pitch: 75,
                bearing: -90
            },
            onChapterEnter: [
                {
                    layer: 'irob',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'irob',
                    opacity: 0
                }
            ]
        },
		{
            id: 'Hawzein',
            alignment: 'right',
            title: 'Hawzein Massacre',
            image: '',
            description: '&#34;Residents Dig Mass Graves to Bury Tigray War Victims&#34;<br>On the outskirts of Hawzen, Ethiopia, rocks and dirt cover the bodies of war victims in shallow graves.Some graves hold dozens of bodies, some only a few. About 200 people are believed to be buried in and around the town after more than seven months of war.<br>As sand blows over the field outside her house on the edge of town, Letay Girmay, 50, says she helped bury bodies and hopes they can soon be moved to a churchyard.&#34;<br><iframe src="https://www.voanews.com/embed/player/0/6117105.html?type=video" frameborder="0" scrolling="no" width="450" height="256" allowfullscreen></iframe></br><b><a href="https://www.voanews.com/a/africa_residents-dig-mass-graves-bury-tigray-war-victims/6206799.html">Read More from Voice of America</a>',
            location: {
                center: [39.43123510827546, 13.978662043176419],
                zoom: 17,
                pitch: 85,
                bearing: 168
            },
            onChapterEnter: [
                {
                    layer: 'hawz',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hawz',
                    opacity: 0
                }
            ]
        },
		{
            id: 'Togoga',
            alignment: 'right',
            title: 'Togoga Market Massacre',
            image: '',
            description: '&#34;Residents Dig Mass Graves to Bury Tigray War Victims&#34;<br>On the outskirts of Hawzen, Ethiopia, rocks and dirt cover the bodies of war victims in shallow graves.Some graves hold dozens of bodies, some only a few. About 200 people are believed to be buried in and around the town after more than seven months of war.<br>As sand blows over the field outside her house on the edge of town, Letay Girmay, 50, says she helped bury bodies and hopes they can soon be moved to a churchyard.&#34;<br><b><a href="https://apnews.com/article/africa-ethiopia-massacres-health-coronavirus-pandemic-0dce4ecf3fcc4027a35a7a3d8d234765">Read More from AP news</a>',
            location: {
                center: [39.406884811742415, 13.553375008296692],
                zoom: 16,
                pitch: 75,
                bearing: 100
            },
            onChapterEnter: [
                {
                    layer: 'Tog',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Tog',
                    opacity: 0
                }
            ]
        },
		{
            id: 'School',
            alignment: 'right',
            title: 'Destruction of Schools in Tigray (War Crimes)',
            image: 'https://media.globalcitizen.org/thumbnails/93/00/93006fa0-da5a-4467-835d-383f48468c6b/ethiopia-tigray-refugees-humanitarian-crisis-unhcr-003.jpg__1600x900_q85_crop_subsampling-2.jpg',
            description: '&#34;Children in Tigray have remained out-of-school <font color=red>since the beginning of the pandemic in March 2020</font>, and as a result of the ongoing violence, school infrastructure has not only been destroyed and looted, but it has also been <font color=red>exploited by all sides</font> throughout the conflict.<br><br>3. Key Things to Know About the Education Crisis in Ethiopia’s North<br>1. Children have been out of school since March 2020.<br>2. An estimated <font color=red>1.4 million children</font> in affected regions have missed out on education.<br>3. Ethiopia’s Ministry of Education<font color=red> estimates that 7,000 schools </font>have been damaged.&#34;<br> <b><a href="https://www.globalcitizen.org/en/content/tigray-conflict-schools-closed-education-ethiopia/">Read More from Global Citizen</a>',
            location: {
                center: [38.221, 13.554],
                zoom: 15,
                pitch: 75,
                bearing: 100.00
            },
            onChapterEnter: [
                {
                    layer: 'Tog',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Tog',
                    opacity: 0
                }
            ]
        },
		{
            id: 'Hospital',
            alignment: 'right',
            title: 'Destruction of Hospitals in Tigray (War Crimes)',
            image: 'https://www.doctorswithoutborders.org/sites/default/files/styles/crop_freeform/public/210312_Tigray_Attacks_1920x1080_v01.jpg?itok=iUbnaeOi',
            description: '&#34;ADDIS ABABA/NEW YORK, March 15, 2021—Health facilities across Ethiopia&#39;s Tigray region have been looted, vandalized, and destroyed in a deliberate and widespread attack on health care, the international medical humanitarian organization Doctors Without Borders/Médecins Sans Frontières (MSF) said today, sharing the findings of an assessment by MSF teams.<br>One-fifth of the health facilities visited by MSF teams were occupied by soldiers. In some instances this was temporary; in others, the armed occupation continues. In Mugulat, in eastern Tigray, Eritrean soldiers are still using the health facility as their base. The hospital in Abiy Addi in central Tigray, which serves a population of half a million people, was occupied by Ethiopian forces until early March.&#34;<br> <b><a href="https://www.doctorswithoutborders.org/what-we-do/news-stories/news/widespread-destruction-health-facilities-ethiopias-tigray-region">Read More from MSF Doctors Without Borders</a>',
            location: {
                center: [39.00174592463885, 13.622946032164744],
                zoom: 14,
                pitch: 43.50,
                bearing: 2
            },
            onChapterEnter: [
                {
                    layer: 'Tog',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Tog',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Negash',
            alignment: 'right',
            title: 'Destruction of Cultural and religious Heritage',
            image: 'https://cdn.glitch.me/b6251d90-0213-475a-9c62-bc28f3d3118e%2Fthumbnails%2FEthiopia%20tigray%20nejashi%20mosque%20supplied.jpg?1634112009209',
            description: 'Hajj Siraj Mohammed has spent five decades managing the famed al-Nejashi Mosque in northern Ethiopia&#34;s Tigray region.<br>But when war broke out last year, the mosque in Negash became a target as Ethiopian and Eritrean soldiers marched on the town on their way to the capital Mekele.<br>Siraj was cowering in a washroom during the attack and heard the worst.<br>&#34;Not only us, but Muslims all over the world are shocked that this happened,&#34; the frail 78-year-old told AFP. &#34;It is not only our heritage but rather the world’s heritage. It is the second Mecca.&#34;<br><b><a href="https://www.africanews.com/2021/04/30/heritage-sites-under-siege-in-ethiopia-s-tigray-war//">Read More from Africa News</a>',
            location: {
                center: [39.59865, 13.87564],
                zoom: 15,
                pitch: 80,
                bearing: -70
            },
            onChapterEnter: [
                {
                    layer: 'Herit',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Herit',
                    opacity: 0
                }
            ]
        },
      {
            id: 'Bomb',
            alignment: 'right',
            title: 'Mekelle Bombings 18/10/2021',
            image: 'https://cdn.glitch.me/b6251d90-0213-475a-9c62-bc28f3d3118e%2Fthumbnails%2FMekeleBombing.jpeg?1636024595016',
            description: 'Ethiopian forces hit the Tigrayan capital of Mekele with air strikes on Monday, humanitarian officials and diplomats told AFP, in a new phase of the nearly year-long war in the country&#39;s north.<br><b><font color=red>At least three people were killed and others injured, a hospital official told AFP.</font></b><br>&#34;So far, many casualties are coming to Ayder. The deaths have reached three,&#34; Dr Hayelom Kebede, research director at Ayder Referral Hospital in Mekele, told AFP <br><b><a href="https://www.africanews.com/2021/10/18/ethiopia-air-strikes-hit-tigray-capital-mekele//">Read More from Africa News</a><br><b>Second round of bombings Mekele 20/10/2021</b><br><font color=red>The attack came two days after Ethiopia&#39;s air force confirmed airstrikes in Mekelle that a witness said killed three children.</font></b> The air force said communications towers and equipment were attacked. Mekele hadn&#39;t seen fighting since June, when Tigray forces retook much of the region in a dramatic turn in the war.<br>The airstrikes have caused fresh panic in a city under siege, where doctors and others have described running out of medicines and other basic needs. <br><b><a href="https://www.pbs.org/newshour/world/new-airstrikes-hit-capital-of-ethiopias-tigray-region">Read More from PBS</a></b><br><b>Third round of bombings Mekelle 22/10/2021<br></b>Ethiopian military airstrikes on Friday forced a United Nations humanitarian flight to abandon its landing in the capital of the country&#39;s Tigray region, and a government spokesman said authorities were aware of the inbound flight.<b><font color = red> It appeared to be a sharp escalation in intimidation tactics authorities have used against aid workers amid the intensifying, year-long Tigray war.</font></b><br><b><a href="https://www.washingtonpost.com/world/new-airstrikes-hit-capital-of-ethiopias-tigray-region/2021/10/22/0acde54e-331e-11ec-8036-7db255bff176_story.html">Read More from Africa News</a>',
            location: {
                center: [39.45934, 13.49045],
                zoom: 18,
                pitch: 85,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'Bomb',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Bomb',
                    opacity: 0
                }
            ]
        },
	{
            id: 'Abuse',
            alignment: 'right',
            title: 'Concentration camps and Hate speech',
            image: 'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/09/tigrayan-refugee-girl-0924211.jpg',
            description: '&#34;Thousands of ethnic Tigrayans are being put into &#34;concentration camps,&#34; tortured and brutally killed in Ethiopia as part of an ethnic purge, a report from The Telegraph says.<br>The violence is the latest development in a 10-month-long conflict in east Africa between the Ethiopian military and rebels in the Tigray region of the country.<br>...occupying ethnic Amhara forces from the neighboring region, who still controlled the city of Humera in the region, decided to &#34;exterminate&#34; and<br>&#34;cleanse&#34; all Tigrayans in the area,...<b><font color=red>The forces have taken thousands of Tigrayan men, women, and children to makeshift concentration camps, cut off prisoners&#39; limbs, mutilated bodies, and dumped them in mass graves.&#34;</font></b><br><b><a href="https://www.telegraph.co.uk/world-news/2021/09/05/ethiopias-tigrayans-rounded-mutilated-dismembered-civil-war/">Read More from The Telegraph</a><br><b><a href="https://www.bbc.com/news/world-africa-59151370">Read More from BBC</a> <br><b><a href="https://www.salon.com/2021/09/25/eyewitness-accounts-video-confirm-reports-of-tigrayan-children-held-in-concentration-camp/">Read More Tigray Children in Concentration Camps from Salon</a>',
            location: {
                center: [38.76109485586552, 9.01714862972645],
                zoom: 18,
                pitch: 85,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'Abuse',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Abuse',
                    opacity: 0
                }
            ]
        }
      
		
    ]
};
const geojson = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
					'title': 'Axum Oblisk',
					'description': 'The Obelisk of Axum (Tigrinya: ሓወልቲ ኣኽሱም) is a 4th-century CE, 24-metre-tall (79-feet) phonolite[2] stele/obelisk, weighing 160 tonnes, in the city of Axum in Ethiopia. It is ornamented with two false doors at the base and features decorations resembling windows on all sides. The obelisk ends in a semi-circular top, which used to be enclosed by metal frames.',
                    'message': 'Axum Hawelti',
                    'iconSize': [135, 130]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [38.719, 14.132]
                }
            },
            {
                'type': 'Feature',
                'properties': {
					'title': 'Axum Oblisk',
					'description': 'The Obelisk of Axum',
                    'message': 'Martyrs Hawelti',
                    'iconSize': [0, 0]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [39.45934, 13.49045]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'title': 'Axum Oblisk',
					'description': 'The Obelisk of Axum',
					'message': 'Baz',
                    'iconSize': [0, 0]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [38.719, 14.130]
                }
            },
			{
                'type': 'Feature',
                'properties': {
                    'title': 'Axum Oblisk',
					'description': 'Dungur (or Dungur Addi Kilte) is the ruins of a substantial mansion in Aksum, Ethiopia, the former capital city of the Kingdom of Aksum. The ruins are in the western part of Aksum, across the road from the Gudit stelae field. Dungur is known locally and popularly as the Palace of the Queen of Sheba (i.e. the Palace of Makeda in Ethiopia).',
					'message': 'Baz',
                    'iconSize': [0,0]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [38.70711, 14.12704] //14.12704, 38.70711

                }
            },
      {
                'type': 'Feature',
                'properties': {
                    'title': 'Mai Kadra',
					'description': 'Mai Kadra is a small town in Western Tigray where Tigrayan and Amhara ethnicities live and work the fields. Majority of this population is of Tigrayan ethnicity. <br><b><a href="https://www.tghat.com/2021/03/15/debunking-the-myth-of-an-attack-on-the-north-command-as-a-factor-that-led-to-the-ongoing-genocidal-war-on-tigray/">Read More on "Debunking Law Enforcement Operation"</a>',
					'iconSize': [80, 65]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [36.56, 14.070]
					
                }
            },
      {
                'type': 'Feature',
                'properties': {
                    'title': 'Attack on Heritage',
					'description': 'Attack on civilians at Mosque',
					'message': 'Baz',
                    'iconSize': [160, 100]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [39.59865, 13.87564],
					
                }
            },
          
			{
                'type': 'Feature',
                'properties': {
                    'title': 'Eritrea',
					'description': 'Eritrea- Ethiopia Border',
					'iconSize': [160, 30]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [36.97641, 14.56824],
					
                }
            },
			{
                'type': 'Feature',
                'properties': {
                    'title': 'Tigray',
					'description': 'A semi Autonomous State in Northern Ethiopia',
					'iconSize': [160, 30]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [38.34777, 13.93533],
					
                }
            },
			{
                'type': 'Feature',
                'properties': {
                    'title': 'Sudan',
					'description': 'Sudan- Ethiopia Border',
					'iconSize': [160, 30]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [36.37587, 14.08097],
					
                }
            },
			{
                'type': 'Feature',
                'properties': {
                    'title': 'Amhara, Ethiopia',
					'description': '',
					'iconSize': [160, 30]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [37.75352, 13.24597],
					
                }
            },
      {
                'type': 'Feature',
                'properties': {
                    'title': 'Northen Command',
					'description': '"...the Amhara Special Forces who had already stationed in the border between Amhara and southern Tigray region took the opportunity to intervene in the fire exchange without being initiated by the ENDF northern command. The Amhara Special Forces leaders then phoned Abiy from Bahirdar for the ‘go ahead with the plan’ response—they did get it immediately. Then further reinforcements that arrived from both Eritrea and the Ethiopian side started the full-blown genocidal war we see today." <br><b><a href="https://www.tghat.com/2021/03/15/debunking-the-myth-of-an-attack-on-the-north-command-as-a-factor-that-led-to-the-ongoing-genocidal-war-on-tigray/">Read More on "Debunking Law Enforcement Operation"</a>',
					'iconSize': [80, 55]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [36.97378463447054, 13.564568278168379],
					
                }
            },
      
	  {
                'type': 'Feature',
                'properties': {
                    'title': 'Humera',
					'description': 'Mai Kadra is a small town in Western Tigray where Tigrayan and Amhara ethnicities live and work the fields. Majority of this population is of Tigrayan ethnicity. <br><b><a href="https://www.tghat.com/2021/03/15/debunking-the-myth-of-an-attack-on-the-north-command-as-a-factor-that-led-to-the-ongoing-genocidal-war-on-tigray/">Read More on "Debunking Law Enforcement Operation"</a>',
					'iconSize': [80, 65]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [36.60951380543528, 14.28658756302266],
					
                }
            },
        
    
	{
                'type': 'Feature',
                'properties': {
                    'title': 'Dengelat',
					'description': 'Mai Kadra is a small town in Western Tigray where Tigrayan and Amhara ethnicities live and work the fields. Majority of this population is of Tigrayan ethnicity. <br><b><a href="https://www.tghat.com/2021/03/15/debunking-the-myth-of-an-attack-on-the-north-command-as-a-factor-that-led-to-the-ongoing-genocidal-war-on-tigray/">Read More on "Debunking Law Enforcement Operation"</a>',
					'iconSize': [80, 65]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [39.653708820921146, 14.235740962141307],
					
                }
            },
        
    
	{
                'type': 'Feature',
                'properties': {
                    'title': 'Mahbere',
					'description': 'Mai Kadra is a small town in Western Tigray where Tigrayan and Amhara ethnicities live and work the fields. Majority of this population is of Tigrayan ethnicity. <br><b><a href="https://www.tghat.com/2021/03/15/debunking-the-myth-of-an-attack-on-the-north-command-as-a-factor-that-led-to-the-ongoing-genocidal-war-on-tigray/">Read More on "Debunking Law Enforcement Operation"</a>',
					'iconSize': [80, 65]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [39.01707608378601, 13.724632750068526],
					
                }
            },
        
    
	{
                'type': 'Feature',
                'properties': {
                    'title': 'Irob',
					'description': 'Mai Kadra is a small town in Western Tigray where Tigrayan and Amhara ethnicities live and work the fields. Majority of this population is of Tigrayan ethnicity. <br><b><a href="https://www.tghat.com/2021/03/15/debunking-the-myth-of-an-attack-on-the-north-command-as-a-factor-that-led-to-the-ongoing-genocidal-war-on-tigray/">Read More on "Debunking Law Enforcement Operation"</a>',
					'iconSize': [80, 65]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [39.62284780580524, 14.539440815357633],
					
                }
            },
        
    
	{
                'type': 'Feature',
                'properties': {
                    'title': 'Hawzein',
					'description': 'Mai Kadra is a small town in Western Tigray where Tigrayan and Amhara ethnicities live and work the fields. Majority of this population is of Tigrayan ethnicity. <br><b><a href="https://www.tghat.com/2021/03/15/debunking-the-myth-of-an-attack-on-the-north-command-as-a-factor-that-led-to-the-ongoing-genocidal-war-on-tigray/">Read More on "Debunking Law Enforcement Operation"</a>',
					'iconSize': [80, 65]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [39.43123510827546, 13.978662043176419],
					
                }
            },
  {
                'type': 'Feature',
                'properties': {
                    'title': 'Hawelti',
					'description': 'Mai Kadra is a small town in Western Tigray where Tigrayan and Amhara ethnicities live and work the fields. Majority of this population is of Tigrayan ethnicity. <br><b><a href="https://www.tghat.com/2021/03/15/debunking-the-myth-of-an-attack-on-the-north-command-as-a-factor-that-led-to-the-ongoing-genocidal-war-on-tigray/">Read More on "Debunking Law Enforcement Operation"</a>',
					'iconSize': [155, 150]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [39.45934, 13.49045],
					
                }
            },
        
    
	{
                'type': 'Feature',
                'properties': {
                    'title': 'Togoga',
					'description': 'Mai Kadra is a small town in Western Tigray where Tigrayan and Amhara ethnicities live and work the fields. Majority of this population is of Tigrayan ethnicity. <br><b><a href="https://www.tghat.com/2021/03/15/debunking-the-myth-of-an-attack-on-the-north-command-as-a-factor-that-led-to-the-ongoing-genocidal-war-on-tigray/">Read More on "Debunking Law Enforcement Operation"</a>',
					'iconSize': [80, 65]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [39.406884811742415, 13.553375008296692],
					
                }
            },
    {
                'type': 'Feature',
                'properties': {
                    'title': 'Addis',
					'description': 'Mai Kadra is a small town in Western Tigray where Tigrayan and Amhara ethnicities live and work the fields. Majority of this population is of Tigrayan ethnicity. <br><b><a href="https://www.tghat.com/2021/03/15/debunking-the-myth-of-an-attack-on-the-north-command-as-a-factor-that-led-to-the-ongoing-genocidal-war-on-tigray/">Read More on "Debunking Law Enforcement Operation"</a>',
					'iconSize': [80, 65]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [38.76109485586552, 9.01714862972645],
					
                }
            }
          
        ]
    };

