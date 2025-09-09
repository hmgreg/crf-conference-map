// data.js

// Mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFwcHltb25kYXkiLCJhIjoiY21kZXpjNGx2MDhmOTJrb3Bja2ViMW5qcyJ9.rrWtPNbSr1AXBiGQl8AY6A';

const conferences = [
  {
    name: "National Center for Business Register",
    country: "Tunis, Tunisia 2025",
    address: "Street 8722 1, Olympic City, Tunis, Tunisia",
    website: "https://www.registre-entreprises.tn/rne-public/#/",
    coords: [10.1846, 36.8008]
  },
  {
    name: "",
    country: "Doha, Qatar 2024",
    address: "",
    website: "",
    coords: []
  },
  {
    name: "Malta Business Registry",
    country: "Malta 2023",
    address: "Malta Business Registry, AM Business Centre, Triq il-Labour, Zejtun",
    website: "https://mbr.mt/",
    coords: [14.5336, 35.8541]
  },
  {
    name: "Ministry of Economic Development",
    country: "Maldives 2022",
    address: "1st Floor H Pamelia, Boduthakurufaanu Magu, Male, Maldives",
    website: "http://www.trade.gov.mv",
    coords: [73.5093, 4.1755]
  },
  {
    name: "Uganda Registration Services Bureau",
    country: "Uganda Virtual Conference 2021",
    address: "Uganda Registration Services Bureau, Plot 5 George Street, Georgian House, P.O. Box 6848, Kampala, Uganda",
    website: "http://www.ursb.go.ug",
    coords: [32.5825, 0.3136]
  },
  {
    name: "Central Register of Republic of North Macedonia",
    country: "North Macedonia 2019",
    address: "Kuzman Josifovski Pitu 1, 1000 Skopje, Republic of North Macedonia",
    website: "http://www.crm.com.mk/DS/default.aspx",
    coords: [21.4254, 41.9981]
  },
  {
    name: "Companies and Intellectual Property Authority (CIPA)",
    country: "Botswana 2018",
    address: "Plot 181, Gaborone",
    website: "http://www.cipa.co.bw/home",
    coords: [25.9088, -24.6581]
  },
  {
    name: "Companies Registry",
    country: "Hong Kong 2017",
    address: "Companies Registry, 14/F Queensway Government Offices, 66 Queensway, Hong Kong",
    website: "https://www.cr.gov.hk/en/home/index.htm",
    coords: [114.171, 22.2783]
  },
  {
    name: "",
    country: "Cardiff, Wales 2016",
    address: "",
    website: "",
    coords: []
  },
  {
    name: "Competitiveness Office of Abu Dhabi (COAD)",
    country: "Abu Dhabi, United Emirates 2015",
    address: "Al Falah Building - Al Falah St - Al Danah - Zone 1 - Abu Dhabi - United Arab Emirates",
    website: "http://www.added.gov.ae",
    coords: [54.3384408, 24.4755862]
  },
  {
    name: "Rio de Janeiro Trade Board",
    country: "Rio de Janeiro, Brazil 2014",
    address: "",
    website: "",
    coords: []
  },
  {
    name: "Companies Office",
    country: "Auckland, New Zealand 2013",
    address: "Companies Office, MBIE, Private Bag 92061, Victoria St West, Auckland 1142, New Zealand",
    website: "http://www.business.govt.nz/companies/",
    coords: [174.7633, -36.8485]
  },
  {
    name: "Ministry of Corporate Affairs",
    country: "New Dehli, India 2012",
    address: "5th Floor, Room 508 A-Wing, Shastri Bhawan, Dr Rajendra Prasad Rd, New Delhi 110001, India",
    website: "https://www.mca.gov.in/",
    coords: [77.215, 28.6164]
  },
  {
    name: "Accounting & Corporate Regulatory Authority",
    country: "Singapore 2011",
    address: "55 Newton Road, #03-02 Revenue House, Singapore 307987",
    website: "https://www.acra.gov.sg/home/",
    coords: [103.8447, 1.3143]
  },
  {
    name: "Corporate and Business Registration Department",
    country: "Mauritius 2010",
    address: "Companies Division (Head Office), One Cathedral Square, Jules Koenig Street, Port-Louis, Mauritius",
    website: "http://companies.govmu.org/English/Pages/default.aspx",
    coords: [57.5012, -20.1609]
  },
  {
    name: "Companies and Intellectual Property Commission (CIPC)",
    country: "Cape Town, South Africa 2009",
    address: "The dti Campus, Block F, 77 Meintjies Street, Sunnyside, Pretoria, South Africa",
    website: "http://www.cipc.co.za/za/",
    coords: [28.2293, -25.7482]
  },
  {
    name: "Corporations Canada",
    country: "Vancouver, Canada 2008",
    address: "365 Laurier Ave W, Ottawa, ON, K1A 1L1, Canada",
    website: "https://www.ic.gc.ca/eic/site/cd-dgc.nsf/eng/home",
    coords: [-75.697084, 45.419401]
  },
  {
    name: "Accounting & Corporate Regulatory Authority",
    country: "Malaysia and Singapore 2007",
    address: "55 Newton Road, #03-02 Revenue House, Singapore 307987",
    website: "https://www.acra.gov.sg/home/",
    coords: [103.8447, 1.3143]
  },
  {
    name: "Companies Registry",
    country: "Hong Kong 2006",
    address: "Companies Registry, 14/F Queensway Government Offices, 66 Queensway, Hong Kong",
    website: "https://www.cr.gov.hk/en/home/index.htm",
    coords: [114.171, 22.2783]
  },
  {
    name: "Australian Registry Business Services",
    country: "Melbourne, Australia 2005",
    address: "Level 24, 120 Collins St, Melbourne",
    website: "https://register.business.gov.au/",
    coords: [144.9632, -37.8142]
  },
  {
    name: "Companies Office",
    country: "Auckland, New Zealand 2003",
    address: "Companies Office, MBIE, Private Bag 92061, Victoria St West, Auckland 1142, New Zealand",
    website: "http://www.business.govt.nz/companies/",
    coords: [174.7633, -36.8485]
  }
];
