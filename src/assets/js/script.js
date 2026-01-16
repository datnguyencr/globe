    // Minimal country dataset with lat/lng centroids and alpha-2 codes
const countries = [
  { name: 'Afghanistan', lat: 34.52813, lng: 69.17233, code: 'AF' }, // Kabul
  { name: 'Albania', lat: 41.3275, lng: 19.8189, code: 'AL' }, // Tirana
  { name: 'Algeria', lat: 36.7538, lng: 3.0588, code: 'DZ' }, // Algiers
  { name: 'Andorra', lat: 42.50779, lng: 1.52109, code: 'AD' }, // Andorra la Vella
  { name: 'Angola', lat: -8.839, lng: 13.2894, code: 'AO' }, // Luanda
  { name: 'Antigua and Barbuda', lat: 17.1274, lng: -61.8468, code: 'AG' }, // Saint John's
  { name: 'Argentina', lat: -34.6037, lng: -58.3816, code: 'AR' }, // Buenos Aires
  { name: 'Armenia', lat: 40.1792, lng: 44.4991, code: 'AM' }, // Yerevan
  { name: 'Australia', lat: -35.2809, lng: 149.13, code: 'AU' }, // Canberra
  { name: 'Austria', lat: 48.2082, lng: 16.3738, code: 'AT' }, // Vienna
  { name: 'Azerbaijan', lat: 40.3777, lng: 49.892, code: 'AZ' }, // Baku
  { name: 'Bahamas', lat: 25.0643, lng: -77.345, code: 'BS' }, // Nassau
  { name: 'Bahrain', lat: 26.2285, lng: 50.5861, code: 'BH' }, // Manama
  { name: 'Bangladesh', lat: 23.8103, lng: 90.4125, code: 'BD' }, // Dhaka
  { name: 'Barbados', lat: 13.1, lng: -59.6167, code: 'BB' }, // Bridgetown
  { name: 'Belarus', lat: 53.9, lng: 27.5667, code: 'BY' }, // Minsk
  { name: 'Belgium', lat: 50.8503, lng: 4.3517, code: 'BE' }, // Brussels
  { name: 'Belize', lat: 17.5046, lng: -88.1962, code: 'BZ' }, // Belmopan
  { name: 'Benin', lat: 6.483, lng: 2.616, code: 'BJ' }, // Porto-Novo
  { name: 'Bhutan', lat: 27.4728, lng: 89.639, code: 'BT' }, // Thimphu
  { name: 'Bolivia', lat: -16.4897, lng: -68.1193, code: 'BO' }, // Sucre
  { name: 'Bosnia and Herzegovina', lat: 43.8486, lng: 18.3564, code: 'BA' }, // Sarajevo
  { name: 'Botswana', lat: -24.6545, lng: 25.9086, code: 'BW' }, // Gaborone
  { name: 'Brazil', lat: -15.7939, lng: -47.8828, code: 'BR' }, // Brasília
  { name: 'Brunei', lat: 4.8903, lng: 114.942, code: 'BN' }, // Bandar Seri Begawan
  { name: 'Bulgaria', lat: 42.6977, lng: 23.3219, code: 'BG' }, // Sofia
  { name: 'Burkina Faso', lat: 12.3657, lng: -1.5333, code: 'BF' }, // Ouagadougou
  { name: 'Burundi', lat: -3.3818, lng: 29.3644, code: 'BI' }, // Gitega
  { name: 'Cabo Verde', lat: 14.9167, lng: -23.5167, code: 'CV' }, // Praia
  { name: 'Cambodia', lat: 11.5625, lng: 104.916, code: 'KH' }, // Phnom Penh
  { name: 'Cameroon', lat: 3.848, lng: 11.5021, code: 'CM' }, // Yaoundé
  { name: 'Canada', lat: 45.4215, lng: -75.6972, code: 'CA' }, // Ottawa
  { name: 'Central African Republic', lat: 4.3947, lng: 18.5582, code: 'CF' }, // Bangui
  { name: 'Chad', lat: 12.1348, lng: 15.0557, code: 'TD' }, // N'Djamena
  { name: 'Chile', lat: -33.4378, lng: -70.6505, code: 'CL' }, // Santiago
  { name: 'China', lat: 39.9042, lng: 116.4074, code: 'CN' }, // Beijing
  { name: 'Colombia', lat: 4.711, lng: -74.0721, code: 'CO' }, // Bogotá
  { name: 'Comoros', lat: -11.7036, lng: 43.2402, code: 'KM' }, // Moroni
  { name: 'Congo (Congo-Brazzaville)', lat: -4.2661, lng: 15.2832, code: 'CG' }, // Brazzaville
  { name: 'Costa Rica', lat: 9.9333, lng: -84.0833, code: 'CR' }, // San José
  { name: 'Croatia', lat: 45.815, lng: 15.9785, code: 'HR' }, // Zagreb
  { name: 'Cuba', lat: 23.1136, lng: -82.3666, code: 'CU' }, // Havana
  { name: 'Cyprus', lat: 35.1667, lng: 33.3667, code: 'CY' }, // Nicosia
  { name: 'Czechia', lat: 50.088, lng: 14.4208, code: 'CZ' }, // Prague
  { name: 'Denmark', lat: 55.6761, lng: 12.5683, code: 'DK' }, // Copenhagen
  { name: 'Djibouti', lat: 11.5721, lng: 43.1456, code: 'DJ' }, // Djibouti
  { name: 'Dominica', lat: 15.3092, lng: -61.3796, code: 'DM' }, // Roseau
  { name: 'Dominican Republic', lat: 18.4861, lng: -69.9312, code: 'DO' }, // Santo Domingo
  { name: 'Ecuador', lat: -0.1807, lng: -78.4678, code: 'EC' }, // Quito
  { name: 'Egypt', lat: 30.0444, lng: 31.2357, code: 'EG' }, // Cairo
  { name: 'El Salvador', lat: 13.6929, lng: -89.2182, code: 'SV' }, // San Salvador
  { name: 'Equatorial Guinea', lat: 3.752, lng: 8.774, code: 'GQ' }, // Malabo
  { name: 'Eritrea', lat: 15.3229, lng: 38.9251, code: 'ER' }, // Asmara
  { name: 'Estonia', lat: 59.437, lng: 24.7536, code: 'EE' }, // Tallinn
  { name: 'Eswatini', lat: -26.3054, lng: 31.1367, code: 'SZ' }, // Mbabane
  { name: 'Ethiopia', lat: 9.03, lng: 38.74, code: 'ET' }, // Addis Ababa
  { name: 'Fiji', lat: -18.1248, lng: 178.4501, code: 'FJ' }, // Suva
  { name: 'Finland', lat: 60.1695, lng: 24.9354, code: 'FI' }, // Helsinki
  { name: 'France', lat: 48.8566, lng: 2.3522, code: 'FR' }, // Paris
  { name: 'Gabon', lat: 0.3857, lng: 9.4583, code: 'GA' }, // Libreville
  { name: 'Gambia', lat: 13.4549, lng: -16.579, code: 'GM' }, // Banjul
  { name: 'Georgia', lat: 41.7151, lng: 44.8271, code: 'GE' }, // Tbilisi
  { name: 'Germany', lat: 52.52, lng: 13.405, code: 'DE' }, // Berlin
  { name: 'Ghana', lat: 5.6037, lng: -0.187, code: 'GH' }, // Accra
  { name: 'Greece', lat: 37.9838, lng: 23.7275, code: 'GR' }, // Athens
  { name: 'Grenada', lat: 12.0561, lng: -61.7486, code: 'GD' }, // St. George's
  { name: 'Guatemala', lat: 14.6349, lng: -90.5069, code: 'GT' }, // Guatemala City
  { name: 'Guinea', lat: 9.5092, lng: -13.7122, code: 'GN' }, // Conakry
  { name: 'Guinea-Bissau', lat: 11.8636, lng: -15.597, code: 'GW' }, // Bissau
  { name: 'Guyana', lat: 6.8013, lng: -58.1551, code: 'GY' }, // Georgetown
  { name: 'Haiti', lat: 18.5425, lng: -72.3389, code: 'HT' }, // Port-au-Prince
  { name: 'Honduras', lat: 14.0818, lng: -87.2068, code: 'HN' }, // Tegucigalpa
  { name: 'Hungary', lat: 47.4979, lng: 19.0402, code: 'HU' }, // Budapest
  { name: 'Iceland', lat: 64.1353, lng: -21.8952, code: 'IS' }, // Reykjavik
  { name: 'India', lat: 28.6139, lng: 77.209, code: 'IN' }, // New Delhi
  { name: 'Indonesia', lat: -6.2088, lng: 106.8456, code: 'ID' }, // Jakarta
  { name: 'Iran', lat: 35.6892, lng: 51.389, code: 'IR' }, // Tehran
  { name: 'Iraq', lat: 33.3152, lng: 44.3661, code: 'IQ' }, // Baghdad
  { name: 'Ireland', lat: 53.3331, lng: -6.2489, code: 'IE' }, // Dublin
  { name: 'Israel', lat: 31.7683, lng: 35.2137, code: 'IL' }, // Jerusalem
  { name: 'Italy', lat: 41.9028, lng: 12.4964, code: 'IT' }, // Rome
  { name: 'Jamaica', lat: 18.0179, lng: -76.8099, code: 'JM' }, // Kingston
  { name: 'Japan', lat: 35.6895, lng: 139.6917, code: 'JP' }, // Tokyo
  { name: 'Jordan', lat: 31.9552, lng: 35.9457, code: 'JO' }, // Amman
  { name: 'Kazakhstan', lat: 51.1605, lng: 71.4704, code: 'KZ' }, // Nur-Sultan
  { name: 'Kenya', lat: -1.2864, lng: 36.8172, code: 'KE' }, // Nairobi
  { name: 'Kiribati', lat: 1.8709, lng: 157.3625, code: 'KI' }, // Tarawa
  { name: 'Kuwait', lat: 29.3759, lng: 47.9774, code: 'KW' }, // Kuwait City
  { name: 'Kyrgyzstan', lat: 42.8746, lng: 74.5698, code: 'KG' }, // Bishkek
  { name: 'Laos', lat: 17.9757, lng: 102.6331, code: 'LA' }, // Vientiane
  { name: 'Latvia', lat: 56.9496, lng: 24.1052, code: 'LV' }, // Riga
  { name: 'Lebanon', lat: 33.8938, lng: 35.5018, code: 'LB' }, // Beirut
  { name: 'Lesotho', lat: -29.3158, lng: 27.4854, code: 'LS' }, // Maseru
  { name: 'Liberia', lat: 6.3005, lng: -10.7969, code: 'LR' }, // Monrovia
  { name: 'Libya', lat: 32.8872, lng: 13.1913, code: 'LY' }, // Tripoli
  { name: 'Liechtenstein', lat: 47.141, lng: 9.5215, code: 'LI' }, // Vaduz
  { name: 'Lithuania', lat: 54.6872, lng: 25.2797, code: 'LT' }, // Vilnius
  { name: 'Luxembourg', lat: 49.6117, lng: 6.13, code: 'LU' }, // Luxembourg City
  { name: 'Madagascar', lat: -18.8792, lng: 47.5079, code: 'MG' }, // Antananarivo
  { name: 'Malawi', lat: -13.9833, lng: 33.7833, code: 'MW' }, // Lilongwe
  { name: 'Malaysia', lat: 3.1478, lng: 101.6953, code: 'MY' }, // Kuala Lumpur
  { name: 'Maldives', lat: 4.1755, lng: 73.5093, code: 'MV' }, // Malé
  { name: 'Mali', lat: 12.6392, lng: -8.0029, code: 'ML' }, // Bamako
  { name: 'Malta', lat: 35.8997, lng: 14.5146, code: 'MT' }, // Valletta
  { name: 'Marshall Islands', lat: 7.1, lng: 171.38, code: 'MH' }, // Majuro
  { name: 'Mauritania', lat: 18.0735, lng: -15.9582, code: 'MR' }, // Nouakchott
  { name: 'Mauritius', lat: -20.1667, lng: 57.5, code: 'MU' }, // Port Louis
  { name: 'Mexico', lat: 19.4326, lng: -99.1332, code: 'MX' }, // Mexico City
  { name: 'Micronesia', lat: 6.9167, lng: 158.15, code: 'FM' }, // Palikir
  { name: 'Moldova', lat: 47.0105, lng: 28.8638, code: 'MD' }, // Chișinău
  { name: 'Monaco', lat: 43.7333, lng: 7.4167, code: 'MC' }, // Monaco
  { name: 'Mongolia', lat: 47.9167, lng: 106.9167, code: 'MN' }, // Ulaanbaatar
  { name: 'Montenegro', lat: 42.441, lng: 19.2625, code: 'ME' }, // Podgorica
  { name: 'Morocco', lat: 34.0209, lng: -6.8416, code: 'MA' }, // Rabat
  { name: 'Mozambique', lat: -25.9653, lng: 32.5892, code: 'MZ' }, // Maputo
  { name: 'Myanmar', lat: 16.8661, lng: 96.1951, code: 'MM' }, // Naypyidaw
  { name: 'Namibia', lat: -22.5597, lng: 17.0832, code: 'NA' }, // Windhoek
  { name: 'Nauru', lat: -0.5477, lng: 166.9209, code: 'NR' }, // Yaren District
  { name: 'Nepal', lat: 27.7172, lng: 85.324, code: 'NP' }, // Kathmandu
  { name: 'Netherlands', lat: 52.3667, lng: 4.8945, code: 'NL' }, // Amsterdam
  { name: 'New Zealand', lat: -41.2865, lng: 174.7762, code: 'NZ' }, // Wellington
  { name: 'Nicaragua', lat: 12.1364, lng: -86.2514, code: 'NI' }, // Managua
  { name: 'Niger', lat: 13.5116, lng: 2.1254, code: 'NE' }, // Niamey
  { name: 'Nigeria', lat: 9.0579, lng: 7.4951, code: 'NG' }, // Abuja
  { name: 'North Korea', lat: 39.0392, lng: 125.7625, code: 'KP' }, // Pyongyang
  { name: 'North Macedonia', lat: 41.9981, lng: 21.4254, code: 'MK' }, // Skopje
  { name: 'Norway', lat: 59.9139, lng: 10.7522, code: 'NO' }, // Oslo
  { name: 'Oman', lat: 23.6139, lng: 58.5922, code: 'OM' }, // Muscat
  { name: 'Pakistan', lat: 33.6844, lng: 73.0479, code: 'PK' }, // Islamabad
  { name: 'Palau', lat: 7.5002, lng: 134.6242, code: 'PW' }, // Ngerulmud
  { name: 'Palestine', lat: 31.9474, lng: 35.2272, code: 'PS' }, // Ramallah
  { name: 'Panama', lat: 8.9824, lng: -79.5199, code: 'PA' }, // Panama City
  { name: 'Papua New Guinea', lat: -9.4438, lng: 147.1803, code: 'PG' }, // Port Moresby
  { name: 'Paraguay', lat: -25.2637, lng: -57.5759, code: 'PY' }, // Asunción
  { name: 'Peru', lat: -12.0464, lng: -77.0428, code: 'PE' }, // Lima
  { name: 'Philippines', lat: 14.5995, lng: 120.9842, code: 'PH' }, // Manila
  { name: 'Poland', lat: 52.2297, lng: 21.0122, code: 'PL' }, // Warsaw
  { name: 'Portugal', lat: 38.7169, lng: -9.139, code: 'PT' }, // Lisbon
  { name: 'Qatar', lat: 25.2854, lng: 51.531, code: 'QA' }, // Doha
  { name: 'Romania', lat: 44.4328, lng: 26.1043, code: 'RO' }, // Bucharest
  { name: 'Russia', lat: 55.7558, lng: 37.6173, code: 'RU' }, // Moscow
  { name: 'Rwanda', lat: -1.9579, lng: 30.1127, code: 'RW' }, // Kigali
  { name: 'Saint Kitts and Nevis', lat: 17.3, lng: -62.7333, code: 'KN' }, // Basseterre
  { name: 'Saint Lucia', lat: 13.9094, lng: -60.9789, code: 'LC' }, // Castries
  { name: 'Saint Vincent and the Grenadines', lat: 13.16, lng: -61.224, code: 'VC' }, // Kingstown
  { name: 'Samoa', lat: -13.8333, lng: -171.7667, code: 'WS' }, // Apia
  { name: 'San Marino', lat: 43.9336, lng: 12.4503, code: 'SM' }, // San Marino
  { name: 'Sao Tome and Principe', lat: 0.3365, lng: 6.7273, code: 'ST' }, // São Tomé
  { name: 'Saudi Arabia', lat: 24.6333, lng: 46.7167, code: 'SA' }, // Riyadh
  { name: 'Senegal', lat: 14.6928, lng: -17.4467, code: 'SN' }, // Dakar
  { name: 'Serbia', lat: 44.8176, lng: 20.4569, code: 'RS' }, // Belgrade
  { name: 'Seychelles', lat: -4.6167, lng: 55.45, code: 'SC' }, // Victoria
  { name: 'Sierra Leone', lat: 8.4844, lng: -13.2344, code: 'SL' }, // Freetown
  { name: 'Singapore', lat: 1.2833, lng: 103.8333, code: 'SG' }, // Singapore
  { name: 'Slovakia', lat: 48.1486, lng: 17.1077, code: 'SK' }, // Bratislava
  { name: 'Slovenia', lat: 46.0569, lng: 14.5058, code: 'SI' }, // Ljubljana
  { name: 'Solomon Islands', lat: -9.4333, lng: 159.95, code: 'SB' }, // Honiara
  { name: 'Somalia', lat: 2.0469, lng: 45.3182, code: 'SO' }, // Mogadishu
  { name: 'South Africa', lat: -25.7479, lng: 28.2293, code: 'ZA' }, // Pretoria
  { name: 'South Korea', lat: 37.5665, lng: 126.978, code: 'KR' }, // Seoul
  { name: 'South Sudan', lat: 4.85, lng: 31.6, code: 'SS' }, // Juba
  { name: 'Spain', lat: 40.4165, lng: -3.7026, code: 'ES' }, // Madrid
  { name: 'Sri Lanka', lat: 6.9271, lng: 79.8612, code: 'LK' }, // Colombo
  { name: 'Sudan', lat: 15.589, lng: 32.5342, code: 'SD' }, // Khartoum
  { name: 'Suriname', lat: 5.852, lng: -55.2038, code: 'SR' }, // Paramaribo
  { name: 'Sweden', lat: 59.3293, lng: 18.0686, code: 'SE' }, // Stockholm
  { name: 'Switzerland', lat: 46.9481, lng: 7.4474, code: 'CH' }, // Bern
  { name: 'Syria', lat: 33.5138, lng: 36.2765, code: 'SY' }, // Damascus
  { name: 'Taiwan', lat: 25.033, lng: 121.5654, code: 'TW' }, // Taipei
  { name: 'Tajikistan', lat: 38.55, lng: 68.773, code: 'TJ' }, // Dushanbe
  { name: 'Tanzania', lat: -6.163, lng: 35.7516, code: 'TZ' }, // Dodoma
  { name: 'Thailand', lat: 13.7563, lng: 100.5018, code: 'TH' }, // Bangkok
  { name: 'Timor-Leste', lat: -8.5569, lng: 125.5603, code: 'TL' }, // Dili
  { name: 'Togo', lat: 6.1319, lng: 1.2228, code: 'TG' }, // Lomé
  { name: 'Tonga', lat: -21.1394, lng: -175.2048, code: 'TO' }, // Nukuʻalofa
  { name: 'Trinidad and Tobago', lat: 10.6549, lng: -61.5019, code: 'TT' }, // Port of Spain
  { name: 'Tunisia', lat: 36.8065, lng: 10.1815, code: 'TN' }, // Tunis
  { name: 'Turkey', lat: 39.9334, lng: 32.8597, code: 'TR' }, // Ankara
  { name: 'Turkmenistan', lat: 37.95, lng: 58.3833, code: 'TM' }, // Ashgabat
  { name: 'Tuvalu', lat: -7.1095, lng: 179.194, code: 'TV' }, // Funafuti
  { name: 'Uganda', lat: 0.3136, lng: 32.5811, code: 'UG' }, // Kampala
  { name: 'Ukraine', lat: 50.4501, lng: 30.5234, code: 'UA' }, // Kyiv
  { name: 'United Arab Emirates', lat: 24.4539, lng: 54.3773, code: 'AE' }, // Abu Dhabi
  { name: 'United Kingdom', lat: 51.5074, lng: -0.1278, code: 'GB' }, // London
  { name: 'United States', lat: 38.9072, lng: -77.0369, code: 'US' }, // Washington, D.C.
  { name: 'Uruguay', lat: -34.9011, lng: -56.1645, code: 'UY' }, // Montevideo
  { name: 'Uzbekistan', lat: 41.3275, lng: 69.22, code: 'UZ' }, // Tashkent
  { name: 'Vanuatu', lat: -17.7333, lng: 168.3167, code: 'VU' }, // Port Vila
  { name: 'Vatican City', lat: 41.9029, lng: 12.4534, code: 'VA' }, // Vatican City
  { name: 'Venezuela', lat: 10.4806, lng: -66.9036, code: 'VE' }, // Caracas
  { name: 'Vietnam', lat: 21.0278, lng: 105.8342, code: 'VN' }, // Hanoi
  { name: 'Yemen', lat: 15.3547, lng: 44.2067, code: 'YE' }, // Sana'a
  { name: 'Zambia', lat: -15.4167, lng: 28.2833, code: 'ZM' }, // Lusaka
  { name: 'Zimbabwe', lat: -17.8292, lng: 31.0522, code: 'ZW' } // Harare
];


    // State for the interactive globe
    let autoRotate = true;
    const world = Globe()(document.getElementById('globeViz'))
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
      .pointsData(countries)
      .pointLat(d => d.lat)
      .pointLng(d => d.lng)
      .pointAltitude(0.01) // Slightly raised
      .pointRadius(0.5) // Slightly larger
      .pointColor(() => 'rgba(255, 0, 0, 0.7)') // Semi-transparent red
      .pointLabel(d => `<div class="flag-label" style="background-image: url('https://flagcdn.com/h80/${d.code.toLowerCase()}.png'); width: 40px; height: 30px; background-size: cover; border-radius: 4px;"></div> ${d.name}`)
      .onPointClick(d => {
         // also handle point click same as polygon if possible, or just focus
         focusOnCountry(d.lat, d.lng);
      });

    // Auto-rotation controls
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.5;

    // Fetch GeoJSON for polygons
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(countriesGeoJson => {
        world.polygonsData(countriesGeoJson.features)
          .polygonAltitude(0.005)
          .polygonCapColor(d => d === world.highlightedCountry ? 'rgba(0, 200, 255, 0.3)' : 'rgba(0,0,0,0)')
          .polygonSideColor(() => 'rgba(0,0,0,0)')
          .polygonStrokeColor(() => '#111')
          .polygonLabel(({ properties: d }) => `
            <div style="background: rgba(0,0,0,0.8); padding: 8px; border-radius: 4px; color: white;">
                <b>${d.NAME}</b> <br />
                Population: ${d.POP_EST ? d.POP_EST.toLocaleString() : 'N/A'}
            </div>
          `)
          .onPolygonHover(hoverD => {
            world.controls().autoRotate = !hoverD && autoRotate; // Pause on hover
            world.polygonCapColor(d => d === hoverD ? 'rgba(0, 200, 255, 0.3)' : 'rgba(0,0,0,0)')
          })
          .onPolygonClick(d => {
            autoRotate = false;
            world.controls().autoRotate = false;
            world.highlightedCountry = d;
            
            // Focus on the clicked country
            // Calculate centroid or use d.bbox if available, or just map point
            // For now, we can approximate or just stop rotation. 
            // Better: find the matching point in our `countries` list to focus if possible, 
            // or compute centroid from polygon geometry (complex).
            // Simplification: Just stop and highlight.
            
            updateStats(d.properties);
          });
      });

    function updateStats(properties) {
        const infoCard = document.getElementById('info-card');
        const { NAME, ISO_A2, POP_EST } = properties;
        
        infoCard.innerHTML = `
            <h2>${NAME}</h2>
            <p><span class="stat-label">Population:</span> <span class="stat-value">${POP_EST ? POP_EST.toLocaleString() : 'Loading...'}</span></p>
            <p><span class="stat-label">Code:</span> <span class="stat-value">${ISO_A2}</span></p>
            <p id="area-stat"><span class="stat-label">Area:</span> <span class="stat-value">Loading...</span></p>
        `;

        // Fetch extra data (Area)
        if (ISO_A2) {
             fetch(`https://restcountries.com/v3.1/alpha/${ISO_A2}`)
                .then(res => res.json())
                .then(data => {
                    const countryData = data[0];
                    if (countryData && countryData.area) {
                        const areaStr = countryData.area.toLocaleString() + ' km²';
                         document.getElementById('area-stat').innerHTML = 
                            `<span class="stat-label">Area:</span> <span class="stat-value">${areaStr}</span>`;
                    }
                })
                .catch(err => {
                    console.error("Error fetching country details:", err);
                    document.getElementById('area-stat').innerHTML = 
                            `<span class="stat-label">Area:</span> <span class="stat-value">N/A</span>`;
                });
        } else {
             document.getElementById('area-stat').innerHTML = 
                            `<span class="stat-label">Area:</span> <span class="stat-value">N/A</span>`;
        }
    }
    
    // Initial call to set size
    // window.addEventListener('resize', () => {
    //   world.width(window.innerWidth).height(window.innerHeight);
    // });
