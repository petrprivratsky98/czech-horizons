// World capitals for globe — one dot per country
// Praha has home: true (highlighted orange), all others are regular dots
export const CAPITALS = [
  { lat: 50.08, lng: 14.42, home: true }, // Praha

  // EUROPE
  { lat: 52.52, lng: 13.41 }, // Berlín
  { lat: 48.86, lng: 2.35 },  // Paříž
  { lat: 40.42, lng: -3.70 }, // Madrid
  { lat: 41.90, lng: 12.49 }, // Řím
  { lat: 48.21, lng: 16.37 }, // Vídeň
  { lat: 52.23, lng: 21.01 }, // Varšava
  { lat: 47.50, lng: 19.04 }, // Budapešť
  { lat: 52.37, lng: 4.90 },  // Amsterdam
  { lat: 59.33, lng: 18.07 }, // Stockholm
  { lat: 38.72, lng: -9.14 }, // Lisabon
  { lat: 37.98, lng: 23.73 }, // Athény
  { lat: 55.68, lng: 12.57 }, // Kodaň
  { lat: 53.33, lng: -6.25 }, // Dublin
  { lat: 48.15, lng: 17.11 }, // Bratislava
  { lat: 46.05, lng: 14.50 }, // Ljubljana
  { lat: 45.81, lng: 15.98 }, // Záhřeb
  { lat: 44.43, lng: 26.10 }, // Bukurešť
  { lat: 60.17, lng: 24.94 }, // Helsinki
  { lat: 59.91, lng: 10.75 }, // Oslo
  { lat: 59.44, lng: 24.75 }, // Tallinn
  { lat: 54.69, lng: 25.28 }, // Vilnius
  { lat: 56.95, lng: 24.11 }, // Riga
  { lat: 44.80, lng: 20.46 }, // Bělehrad
  { lat: 42.70, lng: 23.32 }, // Sofie
  { lat: 41.99, lng: 21.43 }, // Skopje
  { lat: 39.93, lng: 32.86 }, // Ankara
  { lat: 64.13, lng: -21.82 }, // Reykjavík
  { lat: 46.95, lng: 7.44 },  // Bern
  { lat: 50.85, lng: 4.35 },  // Brusel
  { lat: 49.61, lng: 6.13 },  // Lucemburk
  { lat: 35.17, lng: 33.38 }, // Nikósie
  { lat: 55.75, lng: 37.62 }, // Moskva
  { lat: 50.45, lng: 30.52 }, // Kyjev
  { lat: 53.90, lng: 27.57 }, // Minsk
  { lat: 43.85, lng: 18.36 }, // Sarajevo
  { lat: 42.44, lng: 19.26 }, // Podgorica
  { lat: 47.01, lng: 28.86 }, // Chișinău
  { lat: 41.33, lng: 19.82 }, // Tirana
  { lat: 35.90, lng: 14.51 }, // Valletta

  // AMERICAS — North
  { lat: 38.91, lng: -77.04 }, // Washington DC
  { lat: 45.42, lng: -75.69 }, // Ottawa
  { lat: 19.43, lng: -99.13 }, // Mexico City
  { lat: 23.13, lng: -82.38 }, // Havana
  { lat: 18.48, lng: -69.90 }, // Santo Domingo
  { lat: 18.54, lng: -72.34 }, // Port-au-Prince
  { lat: 17.25, lng: -88.77 }, // Belmopan
  { lat: 14.63, lng: -90.51 }, // Guatemala City
  { lat: 13.69, lng: -89.19 }, // San Salvador
  { lat: 14.10, lng: -87.22 }, // Tegucigalpa
  { lat: 12.15, lng: -86.29 }, // Managua
  { lat: 9.93, lng: -84.08 },  // San José
  { lat: 8.99, lng: -79.52 },  // Panama City
  { lat: 18.00, lng: -76.79 }, // Kingston
  { lat: 10.65, lng: -61.52 }, // Port of Spain

  // AMERICAS — South
  { lat: -34.60, lng: -58.38 }, // Buenos Aires
  { lat: -15.78, lng: -47.93 }, // Brasília
  { lat: -33.45, lng: -70.67 }, // Santiago
  { lat: 4.71, lng: -74.07 },  // Bogotá
  { lat: -12.05, lng: -77.04 }, // Lima
  { lat: 10.48, lng: -66.88 }, // Caracas
  { lat: -25.29, lng: -57.65 }, // Asunción
  { lat: -34.90, lng: -56.19 }, // Montevideo
  { lat: -16.50, lng: -68.15 }, // La Paz
  { lat: -0.23, lng: -78.52 }, // Quito
  { lat: 6.80, lng: -58.16 },  // Georgetown
  { lat: 5.85, lng: -55.20 },  // Paramaribo

  // AFRICA
  { lat: 36.74, lng: 3.06 },   // Alžír
  { lat: -8.84, lng: 13.23 },  // Luanda
  { lat: 6.37, lng: 2.42 },    // Porto-Novo
  { lat: -24.65, lng: 25.91 }, // Gaborone
  { lat: 12.37, lng: -1.53 },  // Ouagadougou
  { lat: -3.38, lng: 29.36 },  // Gitega
  { lat: 3.87, lng: 11.52 },   // Yaoundé
  { lat: 4.36, lng: 18.56 },   // Bangui
  { lat: 12.10, lng: 15.04 },  // N'Djamena
  { lat: -4.27, lng: 15.28 },  // Brazzaville
  { lat: -4.32, lng: 15.32 },  // Kinshasa
  { lat: 11.59, lng: 43.15 },  // Džibutsko
  { lat: 30.06, lng: 31.25 },  // Káhira
  { lat: 15.34, lng: 38.93 },  // Asmara
  { lat: 9.03, lng: 38.74 },   // Addis Abeba
  { lat: 0.39, lng: 9.45 },    // Libreville
  { lat: 13.45, lng: -16.57 }, // Banjul
  { lat: 5.56, lng: -0.20 },   // Accra
  { lat: 9.56, lng: -13.68 },  // Conakry
  { lat: 11.86, lng: -15.60 }, // Bissau
  { lat: 6.82, lng: -5.28 },   // Yamoussoukro
  { lat: -1.29, lng: 36.82 },  // Nairobi
  { lat: -29.32, lng: 27.48 }, // Maseru
  { lat: 6.30, lng: -10.80 },  // Monrovia
  { lat: 32.90, lng: 13.18 },  // Tripolis
  { lat: -18.91, lng: 47.54 }, // Antananarivo
  { lat: -13.97, lng: 33.79 }, // Lilongwe
  { lat: 12.65, lng: -8.00 },  // Bamako
  { lat: 18.08, lng: -15.97 }, // Nouakchott
  { lat: 34.02, lng: -6.84 },  // Rabat
  { lat: -25.97, lng: 32.59 }, // Maputo
  { lat: -22.56, lng: 17.08 }, // Windhoek
  { lat: 13.52, lng: 2.12 },   // Niamey
  { lat: 9.07, lng: 7.40 },    // Abuja
  { lat: -1.95, lng: 30.06 },  // Kigali
  { lat: 14.71, lng: -17.47 }, // Dakar
  { lat: 8.49, lng: -13.23 },  // Freetown
  { lat: 2.05, lng: 45.34 },   // Mogadišo
  { lat: -25.75, lng: 28.19 }, // Pretoria
  { lat: 4.85, lng: 31.60 },   // Juba
  { lat: 15.55, lng: 32.53 },  // Chartúm
  { lat: -26.32, lng: 31.14 }, // Mbabane
  { lat: -6.17, lng: 35.74 },  // Dodoma
  { lat: 6.14, lng: 1.22 },    // Lomé
  { lat: 36.82, lng: 10.17 },  // Tunis
  { lat: 0.32, lng: 32.57 },   // Kampala
  { lat: -15.41, lng: 28.28 }, // Lusaka
  { lat: -17.83, lng: 31.05 }, // Harare

  // MIDDLE EAST
  { lat: 33.34, lng: 44.40 },  // Bagdád
  { lat: 31.77, lng: 35.22 },  // Jeruzalém
  { lat: 31.95, lng: 35.93 },  // Ammán
  { lat: 33.89, lng: 35.50 },  // Bejrút
  { lat: 33.51, lng: 36.29 },  // Damašek
  { lat: 24.69, lng: 46.72 },  // Rijád
  { lat: 24.47, lng: 54.37 },  // Abú Zabí
  { lat: 29.37, lng: 47.97 },  // Kuwait City
  { lat: 25.29, lng: 51.52 },  // Dauhá
  { lat: 26.21, lng: 50.59 },  // Manáma
  { lat: 23.61, lng: 58.59 },  // Maskat
  { lat: 15.35, lng: 44.21 },  // Saná
  { lat: 35.69, lng: 51.39 },  // Teherán

  // CENTRAL ASIA
  { lat: 34.53, lng: 69.17 },  // Kábul
  { lat: 40.18, lng: 44.51 },  // Jerevan
  { lat: 40.41, lng: 49.87 },  // Baku
  { lat: 38.56, lng: 68.77 },  // Dušanbe
  { lat: 37.95, lng: 58.38 },  // Ašchabad
  { lat: 41.30, lng: 69.24 },  // Taškent
  { lat: 42.87, lng: 74.59 },  // Biškek
  { lat: 51.18, lng: 71.45 },  // Astana
  { lat: 41.69, lng: 44.83 },  // Tbilisi

  // SOUTH ASIA
  { lat: 28.63, lng: 77.22 },  // Nové Dillí
  { lat: 33.72, lng: 73.06 },  // Islámábád
  { lat: 23.72, lng: 90.41 },  // Dháka
  { lat: 27.71, lng: 85.31 },  // Káthmándú
  { lat: 27.47, lng: 89.64 },  // Thimphu
  { lat: 6.92, lng: 79.86 },   // Kolombo

  // SOUTHEAST ASIA
  { lat: 11.56, lng: 104.92 }, // Phnom Penh
  { lat: 17.97, lng: 102.60 }, // Vientiane
  { lat: 19.75, lng: 96.11 },  // Naypyidaw
  { lat: 13.75, lng: 100.50 }, // Bangkok
  { lat: 3.14, lng: 101.69 },  // Kuala Lumpur
  { lat: 1.29, lng: 103.85 },  // Singapur
  { lat: -6.21, lng: 106.85 }, // Jakarta
  { lat: 14.60, lng: 121.00 }, // Manila
  { lat: 21.03, lng: 105.85 }, // Hanoj
  { lat: -8.56, lng: 125.57 }, // Dili
  { lat: 4.94, lng: 114.94 },  // Bandar Seri Begawan

  // EAST ASIA
  { lat: 39.91, lng: 116.39 }, // Peking
  { lat: 37.57, lng: 126.98 }, // Soul
  { lat: 35.68, lng: 139.69 }, // Tokio
  { lat: 39.02, lng: 125.75 }, // Pchjongjang
  { lat: 47.90, lng: 106.91 }, // Ulánbátar

  // OCEANIA
  { lat: -35.28, lng: 149.13 }, // Canberra
  { lat: -41.29, lng: 174.78 }, // Wellington
  { lat: -9.44, lng: 147.18 },  // Port Moresby
  { lat: -18.14, lng: 178.44 }, // Suva
  { lat: -17.73, lng: 168.32 }, // Port Vila
]
