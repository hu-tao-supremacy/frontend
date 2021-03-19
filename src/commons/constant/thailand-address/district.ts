const districts = [
  {
    DISTRICT_ID: 1001,
    DISTRICT_TH_NAME: "เขตพระนคร",
    DISTRICT_ENG_NAME: "Khet Phra Nakhon",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10200
  },
  {
    DISTRICT_ID: 1002,
    DISTRICT_TH_NAME: "เขตดุสิต",
    DISTRICT_ENG_NAME: "Khet Dusit",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10300
  },
  {
    DISTRICT_ID: 1003,
    DISTRICT_TH_NAME: "เขตหนองจอก",
    DISTRICT_ENG_NAME: "Khet Nong Chok",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10530
  },
  {
    DISTRICT_ID: 1004,
    DISTRICT_TH_NAME: "เขตบางรัก",
    DISTRICT_ENG_NAME: "Khet Bang Rak",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10500
  },
  {
    DISTRICT_ID: 1005,
    DISTRICT_TH_NAME: "เขตบางเขน",
    DISTRICT_ENG_NAME: "Khet Bang Khen",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10220
  },
  {
    DISTRICT_ID: 1006,
    DISTRICT_TH_NAME: "เขตบางกะปิ",
    DISTRICT_ENG_NAME: "Khet Bang Kapi",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10240
  },
  {
    DISTRICT_ID: 1007,
    DISTRICT_TH_NAME: "เขตปทุมวัน",
    DISTRICT_ENG_NAME: "Khet Pathum Wan",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10330
  },
  {
    DISTRICT_ID: 1008,
    DISTRICT_TH_NAME: "เขตป้อมปราบศัตรูพ่าย",
    DISTRICT_ENG_NAME: "Khet Pom Prap Sattru Phai",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10100
  },
  {
    DISTRICT_ID: 1009,
    DISTRICT_TH_NAME: "เขตพระโขนง",
    DISTRICT_ENG_NAME: "Khet Phra Khanong",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10260
  },
  {
    DISTRICT_ID: 1010,
    DISTRICT_TH_NAME: "เขตมีนบุรี",
    DISTRICT_ENG_NAME: "Khet Min Buri",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10510
  },
  {
    DISTRICT_ID: 1011,
    DISTRICT_TH_NAME: "เขตลาดกระบัง",
    DISTRICT_ENG_NAME: "Khet Lat Krabang",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10520
  },
  {
    DISTRICT_ID: 1012,
    DISTRICT_TH_NAME: "เขตยานนาวา",
    DISTRICT_ENG_NAME: "Khet Yan Nawa",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10120
  },
  {
    DISTRICT_ID: 1013,
    DISTRICT_TH_NAME: "เขตสัมพันธวงศ์",
    DISTRICT_ENG_NAME: "Khet Samphanthawong",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10100
  },
  {
    DISTRICT_ID: 1014,
    DISTRICT_TH_NAME: "เขตพญาไท",
    DISTRICT_ENG_NAME: "Khet Phaya Thai",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10400
  },
  {
    DISTRICT_ID: 1015,
    DISTRICT_TH_NAME: "เขตธนบุรี",
    DISTRICT_ENG_NAME: "Khet Thon Buri",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10600
  },
  {
    DISTRICT_ID: 1016,
    DISTRICT_TH_NAME: "เขตบางกอกใหญ่",
    DISTRICT_ENG_NAME: "Khet Bangkok Yai",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10600
  },
  {
    DISTRICT_ID: 1017,
    DISTRICT_TH_NAME: "เขตห้วยขวาง",
    DISTRICT_ENG_NAME: "Khet Huai Khwang",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10310
  },
  {
    DISTRICT_ID: 1018,
    DISTRICT_TH_NAME: "เขตคลองสาน",
    DISTRICT_ENG_NAME: "Khet Khlong San",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10600
  },
  {
    DISTRICT_ID: 1019,
    DISTRICT_TH_NAME: "เขตตลิ่งชัน",
    DISTRICT_ENG_NAME: "Khet Taling Chan",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10170
  },
  {
    DISTRICT_ID: 1020,
    DISTRICT_TH_NAME: "เขตบางกอกน้อย",
    DISTRICT_ENG_NAME: "Khet Bangkok Noi",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10700
  },
  {
    DISTRICT_ID: 1021,
    DISTRICT_TH_NAME: "เขตบางขุนเทียน",
    DISTRICT_ENG_NAME: "Khet Bang Khun Thian",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10150
  },
  {
    DISTRICT_ID: 1022,
    DISTRICT_TH_NAME: "เขตภาษีเจริญ",
    DISTRICT_ENG_NAME: "Khet Phasi Charoen",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10160
  },
  {
    DISTRICT_ID: 1023,
    DISTRICT_TH_NAME: "เขตหนองแขม",
    DISTRICT_ENG_NAME: "Khet Nong Khaem",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10160
  },
  {
    DISTRICT_ID: 1024,
    DISTRICT_TH_NAME: "เขตราษฎร์บูรณะ",
    DISTRICT_ENG_NAME: "Khet Rat Burana",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10140
  },
  {
    DISTRICT_ID: 1025,
    DISTRICT_TH_NAME: "เขตบางพลัด",
    DISTRICT_ENG_NAME: "Khet Bang Phlat",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10700
  },
  {
    DISTRICT_ID: 1026,
    DISTRICT_TH_NAME: "เขตดินแดง",
    DISTRICT_ENG_NAME: "Khet Din Daeng",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10400
  },
  {
    DISTRICT_ID: 1027,
    DISTRICT_TH_NAME: "เขตบึงกุ่ม",
    DISTRICT_ENG_NAME: "Khet Bueng Kum",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10240
  },
  {
    DISTRICT_ID: 1028,
    DISTRICT_TH_NAME: "เขตสาทร",
    DISTRICT_ENG_NAME: "Khet Sathon",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10120
  },
  {
    DISTRICT_ID: 1029,
    DISTRICT_TH_NAME: "เขตบางซื่อ",
    DISTRICT_ENG_NAME: "Khet Bang Sue",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10800
  },
  {
    DISTRICT_ID: 1030,
    DISTRICT_TH_NAME: "เขตจตุจักร",
    DISTRICT_ENG_NAME: "Khet Chatuchak",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10900
  },
  {
    DISTRICT_ID: 1031,
    DISTRICT_TH_NAME: "เขตบางคอแหลม",
    DISTRICT_ENG_NAME: "Khet Bang Kho Laem",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10120
  },
  {
    DISTRICT_ID: 1032,
    DISTRICT_TH_NAME: "เขตประเวศ",
    DISTRICT_ENG_NAME: "Khet Prawet",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10250
  },
  {
    DISTRICT_ID: 1033,
    DISTRICT_TH_NAME: "เขตคลองเตย",
    DISTRICT_ENG_NAME: "Khet Khlong Toei",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10110
  },
  {
    DISTRICT_ID: 1034,
    DISTRICT_TH_NAME: "เขตสวนหลวง",
    DISTRICT_ENG_NAME: "Khet Suan Luang",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10250
  },
  {
    DISTRICT_ID: 1035,
    DISTRICT_TH_NAME: "เขตจอมทอง",
    DISTRICT_ENG_NAME: "Khet Chom Thong",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10150
  },
  {
    DISTRICT_ID: 1036,
    DISTRICT_TH_NAME: "เขตดอนเมือง",
    DISTRICT_ENG_NAME: "Khet Don Mueang",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10210
  },
  {
    DISTRICT_ID: 1037,
    DISTRICT_TH_NAME: "เขตราชเทวี",
    DISTRICT_ENG_NAME: "Khet Ratchathewi",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10400
  },
  {
    DISTRICT_ID: 1038,
    DISTRICT_TH_NAME: "เขตลาดพร้าว",
    DISTRICT_ENG_NAME: "Khet Lat Phrao",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10230
  },
  {
    DISTRICT_ID: 1039,
    DISTRICT_TH_NAME: "เขตวัฒนา",
    DISTRICT_ENG_NAME: "Khet Vadhana",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10110
  },
  {
    DISTRICT_ID: 1040,
    DISTRICT_TH_NAME: "เขตบางแค",
    DISTRICT_ENG_NAME: "Khet Bang Khae",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10160
  },
  {
    DISTRICT_ID: 1041,
    DISTRICT_TH_NAME: "เขตหลักสี่",
    DISTRICT_ENG_NAME: "Khet Lak Si",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10210
  },
  {
    DISTRICT_ID: 1042,
    DISTRICT_TH_NAME: "เขตสายไหม",
    DISTRICT_ENG_NAME: "Khet Sai Mai",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10220
  },
  {
    DISTRICT_ID: 1043,
    DISTRICT_TH_NAME: "เขตคันนายาว",
    DISTRICT_ENG_NAME: "Khet Khan Na Yao",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10230
  },
  {
    DISTRICT_ID: 1044,
    DISTRICT_TH_NAME: "เขตสะพานสูง",
    DISTRICT_ENG_NAME: "Khet Saphan Sung",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10250
  },
  {
    DISTRICT_ID: 1045,
    DISTRICT_TH_NAME: "เขตวังทองหลาง",
    DISTRICT_ENG_NAME: "Khet Wang Thonglang",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10310
  },
  {
    DISTRICT_ID: 1046,
    DISTRICT_TH_NAME: "เขตคลองสามวา",
    DISTRICT_ENG_NAME: "Khet Khlong Sam Wa",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10510
  },
  {
    DISTRICT_ID: 1047,
    DISTRICT_TH_NAME: "เขตบางนา",
    DISTRICT_ENG_NAME: "Khet Bang Na",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10260
  },
  {
    DISTRICT_ID: 1048,
    DISTRICT_TH_NAME: "เขตทวีวัฒนา",
    DISTRICT_ENG_NAME: "Khet Thawi Watthana",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10170
  },
  {
    DISTRICT_ID: 1049,
    DISTRICT_TH_NAME: "เขตทุ่งครุ",
    DISTRICT_ENG_NAME: "Khet Thung Khru",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10140
  },
  {
    DISTRICT_ID: 1050,
    DISTRICT_TH_NAME: "เขตบางบอน",
    DISTRICT_ENG_NAME: "Khet Bang Bon",
    PROVINCE_ID: 10,
    GEO_ID: 1,
    ZIPCODE: 10150
  },
  {
    DISTRICT_ID: 1101,
    DISTRICT_TH_NAME: "อำเภอเมืองสมุทรปราการ",
    DISTRICT_ENG_NAME: "Amphoe Mueang Samut Prakan",
    PROVINCE_ID: 11,
    GEO_ID: 1,
    ZIPCODE: 10280
  },
  {
    DISTRICT_ID: 1102,
    DISTRICT_TH_NAME: "อำเภอบางบ่อ",
    DISTRICT_ENG_NAME: "Amphoe Bang Bo",
    PROVINCE_ID: 11,
    GEO_ID: 1,
    ZIPCODE: 10560
  },
  {
    DISTRICT_ID: 1103,
    DISTRICT_TH_NAME: "อำเภอบางพลี",
    DISTRICT_ENG_NAME: "Amphoe Bang Phli",
    PROVINCE_ID: 11,
    GEO_ID: 1,
    ZIPCODE: 10540
  },
  {
    DISTRICT_ID: 1104,
    DISTRICT_TH_NAME: "อำเภอพระประแดง",
    DISTRICT_ENG_NAME: "Amphoe Phra Pradaeng",
    PROVINCE_ID: 11,
    GEO_ID: 1,
    ZIPCODE: 10130
  },
  {
    DISTRICT_ID: 1105,
    DISTRICT_TH_NAME: "อำเภอพระสมุทรเจดีย์",
    DISTRICT_ENG_NAME: "Amphoe Phra Samut Chedi",
    PROVINCE_ID: 11,
    GEO_ID: 1,
    ZIPCODE: 10290
  },
  {
    DISTRICT_ID: 1106,
    DISTRICT_TH_NAME: "อำเภอบางเสาธง",
    DISTRICT_ENG_NAME: "Amphoe Bang Sao Thong",
    PROVINCE_ID: 11,
    GEO_ID: 1,
    ZIPCODE: 10570
  },
  {
    DISTRICT_ID: 1201,
    DISTRICT_TH_NAME: "อำเภอเมืองนนทบุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Nonthaburi",
    PROVINCE_ID: 12,
    GEO_ID: 1,
    ZIPCODE: 11000
  },
  {
    DISTRICT_ID: 1202,
    DISTRICT_TH_NAME: "อำเภอบางกรวย",
    DISTRICT_ENG_NAME: "Amphoe Bang Kruai",
    PROVINCE_ID: 12,
    GEO_ID: 1,
    ZIPCODE: 11130
  },
  {
    DISTRICT_ID: 1203,
    DISTRICT_TH_NAME: "อำเภอบางใหญ่",
    DISTRICT_ENG_NAME: "Amphoe Bang Yai",
    PROVINCE_ID: 12,
    GEO_ID: 1,
    ZIPCODE: 11140
  },
  {
    DISTRICT_ID: 1204,
    DISTRICT_TH_NAME: "อำเภอบางบัวทอง",
    DISTRICT_ENG_NAME: "Amphoe Bang Bua Thong",
    PROVINCE_ID: 12,
    GEO_ID: 1,
    ZIPCODE: 11110
  },
  {
    DISTRICT_ID: 1205,
    DISTRICT_TH_NAME: "อำเภอไทรน้อย",
    DISTRICT_ENG_NAME: "Amphoe Sai Noi",
    PROVINCE_ID: 12,
    GEO_ID: 1,
    ZIPCODE: 11150
  },
  {
    DISTRICT_ID: 1206,
    DISTRICT_TH_NAME: "อำเภอปากเกร็ด",
    DISTRICT_ENG_NAME: "Amphoe Pak Kret",
    PROVINCE_ID: 12,
    GEO_ID: 1,
    ZIPCODE: 11120
  },
  {
    DISTRICT_ID: 1301,
    DISTRICT_TH_NAME: "อำเภอเมืองปทุมธานี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Pathum Thani",
    PROVINCE_ID: 13,
    GEO_ID: 1,
    ZIPCODE: 12000
  },
  {
    DISTRICT_ID: 1302,
    DISTRICT_TH_NAME: "อำเภอคลองหลวง",
    DISTRICT_ENG_NAME: "Amphoe Khlong Luang",
    PROVINCE_ID: 13,
    GEO_ID: 1,
    ZIPCODE: 12120
  },
  {
    DISTRICT_ID: 1303,
    DISTRICT_TH_NAME: "อำเภอธัญบุรี",
    DISTRICT_ENG_NAME: "Amphoe Thanyaburi",
    PROVINCE_ID: 13,
    GEO_ID: 1,
    ZIPCODE: 12130
  },
  {
    DISTRICT_ID: 1304,
    DISTRICT_TH_NAME: "อำเภอหนองเสือ",
    DISTRICT_ENG_NAME: "Amphoe Nong Suea",
    PROVINCE_ID: 13,
    GEO_ID: 1,
    ZIPCODE: 12170
  },
  {
    DISTRICT_ID: 1305,
    DISTRICT_TH_NAME: "อำเภอลาดหลุมแก้ว",
    DISTRICT_ENG_NAME: "Amphoe Lat Lum Kaeo",
    PROVINCE_ID: 13,
    GEO_ID: 1,
    ZIPCODE: 12140
  },
  {
    DISTRICT_ID: 1306,
    DISTRICT_TH_NAME: "อำเภอลำลูกกา",
    DISTRICT_ENG_NAME: "Amphoe Lam Luk Ka",
    PROVINCE_ID: 13,
    GEO_ID: 1,
    ZIPCODE: 12150
  },
  {
    DISTRICT_ID: 1307,
    DISTRICT_TH_NAME: "อำเภอสามโคก",
    DISTRICT_ENG_NAME: "Amphoe Sam Khok",
    PROVINCE_ID: 13,
    GEO_ID: 1,
    ZIPCODE: 12160
  },
  {
    DISTRICT_ID: 1401,
    DISTRICT_TH_NAME: "อำเภอพระนครศรีอยุธยา",
    DISTRICT_ENG_NAME: "Amphoe Phra Nakhon Si Ayutthaya",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13000
  },
  {
    DISTRICT_ID: 1402,
    DISTRICT_TH_NAME: "อำเภอท่าเรือ",
    DISTRICT_ENG_NAME: "Amphoe Tha Ruea",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 18270
  },
  {
    DISTRICT_ID: 1403,
    DISTRICT_TH_NAME: "อำเภอนครหลวง",
    DISTRICT_ENG_NAME: "Amphoe Nakhon Luang",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13260
  },
  {
    DISTRICT_ID: 1404,
    DISTRICT_TH_NAME: "อำเภอบางไทร",
    DISTRICT_ENG_NAME: "Amphoe Bang Sai",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13290
  },
  {
    DISTRICT_ID: 1405,
    DISTRICT_TH_NAME: "อำเภอบางบาล",
    DISTRICT_ENG_NAME: "Amphoe Bang Ban",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13250
  },
  {
    DISTRICT_ID: 1406,
    DISTRICT_TH_NAME: "อำเภอบางปะอิน",
    DISTRICT_ENG_NAME: "Amphoe Bang Pa-in",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13180
  },
  {
    DISTRICT_ID: 1407,
    DISTRICT_TH_NAME: "อำเภอบางปะหัน",
    DISTRICT_ENG_NAME: "Amphoe Bang Pahan",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13220
  },
  {
    DISTRICT_ID: 1408,
    DISTRICT_TH_NAME: "อำเภอผักไห่",
    DISTRICT_ENG_NAME: "Amphoe Phak Hai",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13280
  },
  {
    DISTRICT_ID: 1409,
    DISTRICT_TH_NAME: "อำเภอภาชี",
    DISTRICT_ENG_NAME: "Amphoe Phachi",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13140
  },
  {
    DISTRICT_ID: 1410,
    DISTRICT_TH_NAME: "อำเภอลาดบัวหลวง",
    DISTRICT_ENG_NAME: "Amphoe Lat Bua Luang",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13230
  },
  {
    DISTRICT_ID: 1411,
    DISTRICT_TH_NAME: "อำเภอวังน้อย",
    DISTRICT_ENG_NAME: "Amphoe Wang Noi",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13170
  },
  {
    DISTRICT_ID: 1412,
    DISTRICT_TH_NAME: "อำเภอเสนา",
    DISTRICT_ENG_NAME: "Amphoe Sena",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13110
  },
  {
    DISTRICT_ID: 1413,
    DISTRICT_TH_NAME: "อำเภอบางซ้าย",
    DISTRICT_ENG_NAME: "Amphoe Bang Sai",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13270
  },
  {
    DISTRICT_ID: 1414,
    DISTRICT_TH_NAME: "อำเภออุทัย",
    DISTRICT_ENG_NAME: "Amphoe Uthai",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13210
  },
  {
    DISTRICT_ID: 1415,
    DISTRICT_TH_NAME: "อำเภอมหาราช",
    DISTRICT_ENG_NAME: "Amphoe Maha Rat",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13150
  },
  {
    DISTRICT_ID: 1416,
    DISTRICT_TH_NAME: "อำเภอบ้านแพรก",
    DISTRICT_ENG_NAME: "Amphoe Ban Phraek",
    PROVINCE_ID: 14,
    GEO_ID: 1,
    ZIPCODE: 13240
  },
  {
    DISTRICT_ID: 1501,
    DISTRICT_TH_NAME: "อำเภอเมืองอ่างทอง",
    DISTRICT_ENG_NAME: "Amphoe Mueang Ang Thong",
    PROVINCE_ID: 15,
    GEO_ID: 1,
    ZIPCODE: 14000
  },
  {
    DISTRICT_ID: 1502,
    DISTRICT_TH_NAME: "อำเภอไชโย",
    DISTRICT_ENG_NAME: "Amphoe Chaiyo",
    PROVINCE_ID: 15,
    GEO_ID: 1,
    ZIPCODE: 14140
  },
  {
    DISTRICT_ID: 1503,
    DISTRICT_TH_NAME: "อำเภอป่าโมก",
    DISTRICT_ENG_NAME: "Amphoe Pa Mok",
    PROVINCE_ID: 15,
    GEO_ID: 1,
    ZIPCODE: 14130
  },
  {
    DISTRICT_ID: 1504,
    DISTRICT_TH_NAME: "อำเภอโพธิ์ทอง",
    DISTRICT_ENG_NAME: "Amphoe Pho Thong",
    PROVINCE_ID: 15,
    GEO_ID: 1,
    ZIPCODE: 14120
  },
  {
    DISTRICT_ID: 1505,
    DISTRICT_TH_NAME: "อำเภอแสวงหา",
    DISTRICT_ENG_NAME: "Amphoe Sawaeng Ha",
    PROVINCE_ID: 15,
    GEO_ID: 1,
    ZIPCODE: 14150
  },
  {
    DISTRICT_ID: 1506,
    DISTRICT_TH_NAME: "อำเภอวิเศษชัยชาญ",
    DISTRICT_ENG_NAME: "Amphoe Wiset Chai Chan",
    PROVINCE_ID: 15,
    GEO_ID: 1,
    ZIPCODE: 14110
  },
  {
    DISTRICT_ID: 1507,
    DISTRICT_TH_NAME: "อำเภอสามโก้",
    DISTRICT_ENG_NAME: "Amphoe Samko",
    PROVINCE_ID: 15,
    GEO_ID: 1,
    ZIPCODE: 14160
  },
  {
    DISTRICT_ID: 1601,
    DISTRICT_TH_NAME: "อำเภอเมืองลพบุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Lop Buri",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 15210
  },
  {
    DISTRICT_ID: 1602,
    DISTRICT_TH_NAME: "อำเภอพัฒนานิคม",
    DISTRICT_ENG_NAME: "Amphoe Phatthana Nikhom",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 18220
  },
  {
    DISTRICT_ID: 1603,
    DISTRICT_TH_NAME: "อำเภอโคกสำโรง",
    DISTRICT_ENG_NAME: "Amphoe Khok Samrong",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 15120
  },
  {
    DISTRICT_ID: 1604,
    DISTRICT_TH_NAME: "อำเภอชัยบาดาล",
    DISTRICT_ENG_NAME: "Amphoe Chai Badan",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 15230
  },
  {
    DISTRICT_ID: 1605,
    DISTRICT_TH_NAME: "อำเภอท่าวุ้ง",
    DISTRICT_ENG_NAME: "Amphoe Tha Wung",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 15180
  },
  {
    DISTRICT_ID: 1606,
    DISTRICT_TH_NAME: "อำเภอบ้านหมี่",
    DISTRICT_ENG_NAME: "Amphoe Ban Mi",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 15180
  },
  {
    DISTRICT_ID: 1607,
    DISTRICT_TH_NAME: "อำเภอท่าหลวง",
    DISTRICT_ENG_NAME: "Amphoe Tha Luang",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 15230
  },
  {
    DISTRICT_ID: 1608,
    DISTRICT_TH_NAME: "อำเภอสระโบสถ์",
    DISTRICT_ENG_NAME: "Amphoe Sa Bot",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 15240
  },
  {
    DISTRICT_ID: 1609,
    DISTRICT_TH_NAME: "อำเภอโคกเจริญ",
    DISTRICT_ENG_NAME: "Amphoe Khok Charoen",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 15250
  },
  {
    DISTRICT_ID: 1610,
    DISTRICT_TH_NAME: "อำเภอลำสนธิ",
    DISTRICT_ENG_NAME: "Amphoe Lam Sonthi",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 15190
  },
  {
    DISTRICT_ID: 1611,
    DISTRICT_TH_NAME: "อำเภอหนองม่วง",
    DISTRICT_ENG_NAME: "Amphoe Nong Muang",
    PROVINCE_ID: 16,
    GEO_ID: 1,
    ZIPCODE: 15170
  },
  {
    DISTRICT_ID: 1701,
    DISTRICT_TH_NAME: "อำเภอเมืองสิงห์บุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Sing Buri",
    PROVINCE_ID: 17,
    GEO_ID: 1,
    ZIPCODE: 16000
  },
  {
    DISTRICT_ID: 1702,
    DISTRICT_TH_NAME: "อำเภอบางระจัน",
    DISTRICT_ENG_NAME: "Amphoe Bang Rachan",
    PROVINCE_ID: 17,
    GEO_ID: 1,
    ZIPCODE: 16130
  },
  {
    DISTRICT_ID: 1703,
    DISTRICT_TH_NAME: "อำเภอค่ายบางระจัน",
    DISTRICT_ENG_NAME: "Amphoe Khai Bang Rachan",
    PROVINCE_ID: 17,
    GEO_ID: 1,
    ZIPCODE: 16150
  },
  {
    DISTRICT_ID: 1704,
    DISTRICT_TH_NAME: "อำเภอพรหมบุรี",
    DISTRICT_ENG_NAME: "Amphoe Phrom Buri",
    PROVINCE_ID: 17,
    GEO_ID: 1,
    ZIPCODE: 16160
  },
  {
    DISTRICT_ID: 1705,
    DISTRICT_TH_NAME: "อำเภอท่าช้าง",
    DISTRICT_ENG_NAME: "Amphoe Tha Chang",
    PROVINCE_ID: 17,
    GEO_ID: 1,
    ZIPCODE: 16140
  },
  {
    DISTRICT_ID: 1706,
    DISTRICT_TH_NAME: "อำเภออินทร์บุรี",
    DISTRICT_ENG_NAME: "Amphoe In Buri",
    PROVINCE_ID: 17,
    GEO_ID: 1,
    ZIPCODE: 16110
  },
  {
    DISTRICT_ID: 1801,
    DISTRICT_TH_NAME: "อำเภอเมืองชัยนาท",
    DISTRICT_ENG_NAME: "Amphoe Mueang Chai Nat",
    PROVINCE_ID: 18,
    GEO_ID: 1,
    ZIPCODE: 17000
  },
  {
    DISTRICT_ID: 1802,
    DISTRICT_TH_NAME: "อำเภอมโนรมย์",
    DISTRICT_ENG_NAME: "Amphoe Manorom",
    PROVINCE_ID: 18,
    GEO_ID: 1,
    ZIPCODE: 17170
  },
  {
    DISTRICT_ID: 1803,
    DISTRICT_TH_NAME: "อำเภอวัดสิงห์",
    DISTRICT_ENG_NAME: "Amphoe Wat Sing",
    PROVINCE_ID: 18,
    GEO_ID: 1,
    ZIPCODE: 17120
  },
  {
    DISTRICT_ID: 1804,
    DISTRICT_TH_NAME: "อำเภอสรรพยา",
    DISTRICT_ENG_NAME: "Amphoe Sapphaya",
    PROVINCE_ID: 18,
    GEO_ID: 1,
    ZIPCODE: 17150
  },
  {
    DISTRICT_ID: 1805,
    DISTRICT_TH_NAME: "อำเภอสรรคบุรี",
    DISTRICT_ENG_NAME: "Amphoe Sankhaburi",
    PROVINCE_ID: 18,
    GEO_ID: 1,
    ZIPCODE: 17140
  },
  {
    DISTRICT_ID: 1806,
    DISTRICT_TH_NAME: "อำเภอหันคา",
    DISTRICT_ENG_NAME: "Amphoe Hankha",
    PROVINCE_ID: 18,
    GEO_ID: 1,
    ZIPCODE: 17160
  },
  {
    DISTRICT_ID: 1807,
    DISTRICT_TH_NAME: "อำเภอหนองมะโมง",
    DISTRICT_ENG_NAME: "Amphoe Nong Mamong",
    PROVINCE_ID: 18,
    GEO_ID: 1,
    ZIPCODE: 17120
  },
  {
    DISTRICT_ID: 1808,
    DISTRICT_TH_NAME: "อำเภอเนินขาม",
    DISTRICT_ENG_NAME: "Amphoe Noen Kham",
    PROVINCE_ID: 18,
    GEO_ID: 1,
    ZIPCODE: 17130
  },
  {
    DISTRICT_ID: 1901,
    DISTRICT_TH_NAME: "อำเภอเมืองสระบุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Saraburi",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18000
  },
  {
    DISTRICT_ID: 1902,
    DISTRICT_TH_NAME: "อำเภอแก่งคอย",
    DISTRICT_ENG_NAME: "Amphoe Kaeng Khoi",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18260
  },
  {
    DISTRICT_ID: 1903,
    DISTRICT_TH_NAME: "อำเภอหนองแค",
    DISTRICT_ENG_NAME: "Amphoe Nong Khae",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18250
  },
  {
    DISTRICT_ID: 1904,
    DISTRICT_TH_NAME: "อำเภอวิหารแดง",
    DISTRICT_ENG_NAME: "Amphoe Wihan Daeng",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18150
  },
  {
    DISTRICT_ID: 1905,
    DISTRICT_TH_NAME: "อำเภอหนองแซง",
    DISTRICT_ENG_NAME: "Amphoe Nong Saeng",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18170
  },
  {
    DISTRICT_ID: 1906,
    DISTRICT_TH_NAME: "อำเภอบ้านหมอ",
    DISTRICT_ENG_NAME: "Amphoe Ban Mo",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18270
  },
  {
    DISTRICT_ID: 1907,
    DISTRICT_TH_NAME: "อำเภอดอนพุด",
    DISTRICT_ENG_NAME: "Amphoe Don Phut",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18210
  },
  {
    DISTRICT_ID: 1908,
    DISTRICT_TH_NAME: "อำเภอหนองโดน",
    DISTRICT_ENG_NAME: "Amphoe Nong Don",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18190
  },
  {
    DISTRICT_ID: 1909,
    DISTRICT_TH_NAME: "อำเภอพระพุทธบาท",
    DISTRICT_ENG_NAME: "Amphoe Phra Phutthabat",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18120
  },
  {
    DISTRICT_ID: 1910,
    DISTRICT_TH_NAME: "อำเภอเสาไห้",
    DISTRICT_ENG_NAME: "Amphoe Sao Hai",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18160
  },
  {
    DISTRICT_ID: 1911,
    DISTRICT_TH_NAME: "อำเภอมวกเหล็ก",
    DISTRICT_ENG_NAME: "Amphoe Muak Lek",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 30130
  },
  {
    DISTRICT_ID: 1912,
    DISTRICT_TH_NAME: "อำเภอวังม่วง",
    DISTRICT_ENG_NAME: "Amphoe Wang Muang",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18220
  },
  {
    DISTRICT_ID: 1913,
    DISTRICT_TH_NAME: "อำเภอเฉลิมพระเกียรติ",
    DISTRICT_ENG_NAME: "Amphoe Chaloem Phra Kiat",
    PROVINCE_ID: 19,
    GEO_ID: 1,
    ZIPCODE: 18240
  },
  {
    DISTRICT_ID: 2001,
    DISTRICT_TH_NAME: "อำเภอเมืองชลบุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Chon Buri",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20130
  },
  {
    DISTRICT_ID: 2002,
    DISTRICT_TH_NAME: "อำเภอบ้านบึง",
    DISTRICT_ENG_NAME: "Amphoe Ban Bueng",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20220
  },
  {
    DISTRICT_ID: 2003,
    DISTRICT_TH_NAME: "อำเภอหนองใหญ่",
    DISTRICT_ENG_NAME: "Amphoe Nong Yai",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20190
  },
  {
    DISTRICT_ID: 2004,
    DISTRICT_TH_NAME: "อำเภอบางละมุง",
    DISTRICT_ENG_NAME: "Amphoe Bang Lamung",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20150
  },
  {
    DISTRICT_ID: 2005,
    DISTRICT_TH_NAME: "อำเภอพานทอง",
    DISTRICT_ENG_NAME: "Amphoe Phan Thong",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20160
  },
  {
    DISTRICT_ID: 2006,
    DISTRICT_TH_NAME: "อำเภอพนัสนิคม",
    DISTRICT_ENG_NAME: "Amphoe Phanat Nikhom",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20140
  },
  {
    DISTRICT_ID: 2007,
    DISTRICT_TH_NAME: "อำเภอศรีราชา",
    DISTRICT_ENG_NAME: "Amphoe Si Racha",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20230
  },
  {
    DISTRICT_ID: 2008,
    DISTRICT_TH_NAME: "อำเภอเกาะสีชัง",
    DISTRICT_ENG_NAME: "Amphoe Ko Sichang",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20120
  },
  {
    DISTRICT_ID: 2009,
    DISTRICT_TH_NAME: "อำเภอสัตหีบ",
    DISTRICT_ENG_NAME: "Amphoe Sattahip",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20250
  },
  {
    DISTRICT_ID: 2010,
    DISTRICT_TH_NAME: "อำเภอบ่อทอง",
    DISTRICT_ENG_NAME: "Amphoe Bo Thong",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20270
  },
  {
    DISTRICT_ID: 2011,
    DISTRICT_TH_NAME: "อำเภอเกาะจันทร์",
    DISTRICT_ENG_NAME: "Amphoe Ko Chan",
    PROVINCE_ID: 20,
    GEO_ID: 2,
    ZIPCODE: 20240
  },
  {
    DISTRICT_ID: 2101,
    DISTRICT_TH_NAME: "อำเภอเมืองระยอง",
    DISTRICT_ENG_NAME: "Amphoe Mueang Rayong",
    PROVINCE_ID: 21,
    GEO_ID: 2,
    ZIPCODE: 21160
  },
  {
    DISTRICT_ID: 2102,
    DISTRICT_TH_NAME: "อำเภอบ้านฉาง",
    DISTRICT_ENG_NAME: "Amphoe Ban Chang",
    PROVINCE_ID: 21,
    GEO_ID: 2,
    ZIPCODE: 21130
  },
  {
    DISTRICT_ID: 2103,
    DISTRICT_TH_NAME: "อำเภอแกลง",
    DISTRICT_ENG_NAME: "Amphoe Klaeng",
    PROVINCE_ID: 21,
    GEO_ID: 2,
    ZIPCODE: 22160
  },
  {
    DISTRICT_ID: 2104,
    DISTRICT_TH_NAME: "อำเภอวังจันทร์",
    DISTRICT_ENG_NAME: "Amphoe Wang Chan",
    PROVINCE_ID: 21,
    GEO_ID: 2,
    ZIPCODE: 21210
  },
  {
    DISTRICT_ID: 2105,
    DISTRICT_TH_NAME: "อำเภอบ้านค่าย",
    DISTRICT_ENG_NAME: "Amphoe Ban Khai",
    PROVINCE_ID: 21,
    GEO_ID: 2,
    ZIPCODE: 21120
  },
  {
    DISTRICT_ID: 2106,
    DISTRICT_TH_NAME: "อำเภอปลวกแดง",
    DISTRICT_ENG_NAME: "Amphoe Pluak Daeng",
    PROVINCE_ID: 21,
    GEO_ID: 2,
    ZIPCODE: 21140
  },
  {
    DISTRICT_ID: 2107,
    DISTRICT_TH_NAME: "อำเภอเขาชะเมา",
    DISTRICT_ENG_NAME: "Amphoe Khao Chamao",
    PROVINCE_ID: 21,
    GEO_ID: 2,
    ZIPCODE: 21110
  },
  {
    DISTRICT_ID: 2108,
    DISTRICT_TH_NAME: "อำเภอนิคมพัฒนา",
    DISTRICT_ENG_NAME: "Amphoe Nikhom Phatthana",
    PROVINCE_ID: 21,
    GEO_ID: 2,
    ZIPCODE: 21180
  },
  {
    DISTRICT_ID: 2201,
    DISTRICT_TH_NAME: "อำเภอเมืองจันทบุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Chanthaburi",
    PROVINCE_ID: 22,
    GEO_ID: 2,
    ZIPCODE: 22000
  },
  {
    DISTRICT_ID: 2202,
    DISTRICT_TH_NAME: "อำเภอขลุง",
    DISTRICT_ENG_NAME: "Amphoe Khlung",
    PROVINCE_ID: 22,
    GEO_ID: 2,
    ZIPCODE: 22150
  },
  {
    DISTRICT_ID: 2203,
    DISTRICT_TH_NAME: "อำเภอท่าใหม่",
    DISTRICT_ENG_NAME: "Amphoe Tha Mai",
    PROVINCE_ID: 22,
    GEO_ID: 2,
    ZIPCODE: 22170
  },
  {
    DISTRICT_ID: 2204,
    DISTRICT_TH_NAME: "อำเภอโป่งน้ำร้อน",
    DISTRICT_ENG_NAME: "Amphoe Pong Nam Ron",
    PROVINCE_ID: 22,
    GEO_ID: 2,
    ZIPCODE: 22140
  },
  {
    DISTRICT_ID: 2205,
    DISTRICT_TH_NAME: "อำเภอมะขาม",
    DISTRICT_ENG_NAME: "Amphoe Makham",
    PROVINCE_ID: 22,
    GEO_ID: 2,
    ZIPCODE: 22150
  },
  {
    DISTRICT_ID: 2206,
    DISTRICT_TH_NAME: "อำเภอแหลมสิงห์",
    DISTRICT_ENG_NAME: "Amphoe Laem Sing",
    PROVINCE_ID: 22,
    GEO_ID: 2,
    ZIPCODE: 22190
  },
  {
    DISTRICT_ID: 2207,
    DISTRICT_TH_NAME: "อำเภอสอยดาว",
    DISTRICT_ENG_NAME: "Amphoe Soi Dao",
    PROVINCE_ID: 22,
    GEO_ID: 2,
    ZIPCODE: 22180
  },
  {
    DISTRICT_ID: 2208,
    DISTRICT_TH_NAME: "อำเภอแก่งหางแมว",
    DISTRICT_ENG_NAME: "Amphoe Kaeng Hang Maeo",
    PROVINCE_ID: 22,
    GEO_ID: 2,
    ZIPCODE: 22160
  },
  {
    DISTRICT_ID: 2209,
    DISTRICT_TH_NAME: "อำเภอนายายอาม",
    DISTRICT_ENG_NAME: "Amphoe Na Yai Am",
    PROVINCE_ID: 22,
    GEO_ID: 2,
    ZIPCODE: 22170
  },
  {
    DISTRICT_ID: 2210,
    DISTRICT_TH_NAME: "อำเภอเขาคิชฌกูฏ",
    DISTRICT_ENG_NAME: "Amphoe Khao Khitchakut",
    PROVINCE_ID: 22,
    GEO_ID: 2,
    ZIPCODE: 22210
  },
  {
    DISTRICT_ID: 2301,
    DISTRICT_TH_NAME: "อำเภอเมืองตราด",
    DISTRICT_ENG_NAME: "Amphoe Mueang Trat",
    PROVINCE_ID: 23,
    GEO_ID: 2,
    ZIPCODE: 23000
  },
  {
    DISTRICT_ID: 2302,
    DISTRICT_TH_NAME: "อำเภอคลองใหญ่",
    DISTRICT_ENG_NAME: "Amphoe Khlong Yai",
    PROVINCE_ID: 23,
    GEO_ID: 2,
    ZIPCODE: 23110
  },
  {
    DISTRICT_ID: 2303,
    DISTRICT_TH_NAME: "อำเภอเขาสมิง",
    DISTRICT_ENG_NAME: "Amphoe Khao Saming",
    PROVINCE_ID: 23,
    GEO_ID: 2,
    ZIPCODE: 23150
  },
  {
    DISTRICT_ID: 2304,
    DISTRICT_TH_NAME: "อำเภอบ่อไร่",
    DISTRICT_ENG_NAME: "Amphoe Bo Rai",
    PROVINCE_ID: 23,
    GEO_ID: 2,
    ZIPCODE: 23140
  },
  {
    DISTRICT_ID: 2305,
    DISTRICT_TH_NAME: "อำเภอแหลมงอบ",
    DISTRICT_ENG_NAME: "Amphoe Laem Ngop",
    PROVINCE_ID: 23,
    GEO_ID: 2,
    ZIPCODE: 23120
  },
  {
    DISTRICT_ID: 2306,
    DISTRICT_TH_NAME: "อำเภอเกาะกูด",
    DISTRICT_ENG_NAME: "Amphoe Ko Kut",
    PROVINCE_ID: 23,
    GEO_ID: 2,
    ZIPCODE: 23120
  },
  {
    DISTRICT_ID: 2307,
    DISTRICT_TH_NAME: "อำเภอเกาะช้าง",
    DISTRICT_ENG_NAME: "Amphoe Ko Chang",
    PROVINCE_ID: 23,
    GEO_ID: 2,
    ZIPCODE: 23170
  },
  {
    DISTRICT_ID: 2401,
    DISTRICT_TH_NAME: "อำเภอเมืองฉะเชิงเทรา",
    DISTRICT_ENG_NAME: "Amphoe Mueang Chachoengsao",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24000
  },
  {
    DISTRICT_ID: 2402,
    DISTRICT_TH_NAME: "อำเภอบางคล้า",
    DISTRICT_ENG_NAME: "Amphoe Bang Khla",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24110
  },
  {
    DISTRICT_ID: 2403,
    DISTRICT_TH_NAME: "อำเภอบางน้ำเปรี้ยว",
    DISTRICT_ENG_NAME: "Amphoe Bang Nam Priao",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24170
  },
  {
    DISTRICT_ID: 2404,
    DISTRICT_TH_NAME: "อำเภอบางปะกง",
    DISTRICT_ENG_NAME: "Amphoe Bang Pakong",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24180
  },
  {
    DISTRICT_ID: 2405,
    DISTRICT_TH_NAME: "อำเภอบ้านโพธิ์",
    DISTRICT_ENG_NAME: "Amphoe Ban Pho",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24140
  },
  {
    DISTRICT_ID: 2406,
    DISTRICT_TH_NAME: "อำเภอพนมสารคาม",
    DISTRICT_ENG_NAME: "Amphoe Phanom Sarakham",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24120
  },
  {
    DISTRICT_ID: 2407,
    DISTRICT_TH_NAME: "อำเภอราชสาส์น",
    DISTRICT_ENG_NAME: "Amphoe Ratchasan",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24120
  },
  {
    DISTRICT_ID: 2408,
    DISTRICT_TH_NAME: "อำเภอสนามชัยเขต",
    DISTRICT_ENG_NAME: "Amphoe Sanam Chai Khet",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24160
  },
  {
    DISTRICT_ID: 2409,
    DISTRICT_TH_NAME: "อำเภอแปลงยาว",
    DISTRICT_ENG_NAME: "Amphoe Plaeng Yao",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24190
  },
  {
    DISTRICT_ID: 2410,
    DISTRICT_TH_NAME: "อำเภอท่าตะเกียบ",
    DISTRICT_ENG_NAME: "Amphoe Tha Takiap",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24160
  },
  {
    DISTRICT_ID: 2411,
    DISTRICT_TH_NAME: "อำเภอคลองเขื่อน",
    DISTRICT_ENG_NAME: "Amphoe Khlong Khuean",
    PROVINCE_ID: 24,
    GEO_ID: 2,
    ZIPCODE: 24110
  },
  {
    DISTRICT_ID: 2501,
    DISTRICT_TH_NAME: "อำเภอเมืองปราจีนบุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Prachin Buri",
    PROVINCE_ID: 25,
    GEO_ID: 2,
    ZIPCODE: 25230
  },
  {
    DISTRICT_ID: 2502,
    DISTRICT_TH_NAME: "อำเภอกบินทร์บุรี",
    DISTRICT_ENG_NAME: "Amphoe Kabin Buri",
    PROVINCE_ID: 25,
    GEO_ID: 2,
    ZIPCODE: 25240
  },
  {
    DISTRICT_ID: 2503,
    DISTRICT_TH_NAME: "อำเภอนาดี",
    DISTRICT_ENG_NAME: "Amphoe Na Di",
    PROVINCE_ID: 25,
    GEO_ID: 2,
    ZIPCODE: 25220
  },
  {
    DISTRICT_ID: 2506,
    DISTRICT_TH_NAME: "อำเภอบ้านสร้าง",
    DISTRICT_ENG_NAME: "Amphoe Ban Sang",
    PROVINCE_ID: 25,
    GEO_ID: 2,
    ZIPCODE: 25150
  },
  {
    DISTRICT_ID: 2507,
    DISTRICT_TH_NAME: "อำเภอประจันตคาม",
    DISTRICT_ENG_NAME: "Amphoe Prachantakham",
    PROVINCE_ID: 25,
    GEO_ID: 2,
    ZIPCODE: 25130
  },
  {
    DISTRICT_ID: 2508,
    DISTRICT_TH_NAME: "อำเภอศรีมหาโพธิ",
    DISTRICT_ENG_NAME: "Amphoe Si Maha Phot",
    PROVINCE_ID: 25,
    GEO_ID: 2,
    ZIPCODE: 25140
  },
  {
    DISTRICT_ID: 2509,
    DISTRICT_TH_NAME: "อำเภอศรีมโหสถ",
    DISTRICT_ENG_NAME: "Amphoe Si Mahosot",
    PROVINCE_ID: 25,
    GEO_ID: 2,
    ZIPCODE: 25190
  },
  {
    DISTRICT_ID: 2601,
    DISTRICT_TH_NAME: "อำเภอเมืองนครนายก",
    DISTRICT_ENG_NAME: "Amphoe Mueang Nakhon Nayok",
    PROVINCE_ID: 26,
    GEO_ID: 1,
    ZIPCODE: 26000
  },
  {
    DISTRICT_ID: 2602,
    DISTRICT_TH_NAME: "อำเภอปากพลี",
    DISTRICT_ENG_NAME: "Amphoe Pak Phli",
    PROVINCE_ID: 26,
    GEO_ID: 1,
    ZIPCODE: 26130
  },
  {
    DISTRICT_ID: 2603,
    DISTRICT_TH_NAME: "อำเภอบ้านนา",
    DISTRICT_ENG_NAME: "Amphoe Ban Na",
    PROVINCE_ID: 26,
    GEO_ID: 1,
    ZIPCODE: 26110
  },
  {
    DISTRICT_ID: 2604,
    DISTRICT_TH_NAME: "อำเภอองครักษ์",
    DISTRICT_ENG_NAME: "Amphoe Ongkharak",
    PROVINCE_ID: 26,
    GEO_ID: 1,
    ZIPCODE: 26120
  },
  {
    DISTRICT_ID: 2701,
    DISTRICT_TH_NAME: "อำเภอเมืองสระแก้ว",
    DISTRICT_ENG_NAME: "Amphoe Mueang Sa Kaeo",
    PROVINCE_ID: 27,
    GEO_ID: 2,
    ZIPCODE: 27000
  },
  {
    DISTRICT_ID: 2702,
    DISTRICT_TH_NAME: "อำเภอคลองหาด",
    DISTRICT_ENG_NAME: "Amphoe Khlong Hat",
    PROVINCE_ID: 27,
    GEO_ID: 2,
    ZIPCODE: 27260
  },
  {
    DISTRICT_ID: 2703,
    DISTRICT_TH_NAME: "อำเภอตาพระยา",
    DISTRICT_ENG_NAME: "Amphoe Ta Phraya",
    PROVINCE_ID: 27,
    GEO_ID: 2,
    ZIPCODE: 27180
  },
  {
    DISTRICT_ID: 2704,
    DISTRICT_TH_NAME: "อำเภอวังน้ำเย็น",
    DISTRICT_ENG_NAME: "Amphoe Wang Nam Yen",
    PROVINCE_ID: 27,
    GEO_ID: 2,
    ZIPCODE: 27210
  },
  {
    DISTRICT_ID: 2705,
    DISTRICT_TH_NAME: "อำเภอวัฒนานคร",
    DISTRICT_ENG_NAME: "Amphoe Watthana Nakhon",
    PROVINCE_ID: 27,
    GEO_ID: 2,
    ZIPCODE: 27160
  },
  {
    DISTRICT_ID: 2706,
    DISTRICT_TH_NAME: "อำเภออรัญประเทศ",
    DISTRICT_ENG_NAME: "Amphoe Aranyaprathet",
    PROVINCE_ID: 27,
    GEO_ID: 2,
    ZIPCODE: 27120
  },
  {
    DISTRICT_ID: 2707,
    DISTRICT_TH_NAME: "อำเภอเขาฉกรรจ์",
    DISTRICT_ENG_NAME: "Amphoe Khao Chakan",
    PROVINCE_ID: 27,
    GEO_ID: 2,
    ZIPCODE: 27000
  },
  {
    DISTRICT_ID: 2708,
    DISTRICT_TH_NAME: "อำเภอโคกสูง",
    DISTRICT_ENG_NAME: "Amphoe Khok Sung",
    PROVINCE_ID: 27,
    GEO_ID: 2,
    ZIPCODE: 27120
  },
  {
    DISTRICT_ID: 2709,
    DISTRICT_TH_NAME: "อำเภอวังสมบูรณ์",
    DISTRICT_ENG_NAME: "Amphoe Wang Sombun",
    PROVINCE_ID: 27,
    GEO_ID: 2,
    ZIPCODE: 27250
  },
  {
    DISTRICT_ID: 3001,
    DISTRICT_TH_NAME: "อำเภอเมืองนครราชสีมา",
    DISTRICT_ENG_NAME: "Amphoe Mueang Nakhon Ratchasima",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30310
  },
  {
    DISTRICT_ID: 3002,
    DISTRICT_TH_NAME: "อำเภอครบุรี",
    DISTRICT_ENG_NAME: "Amphoe Khon Buri",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30250
  },
  {
    DISTRICT_ID: 3003,
    DISTRICT_TH_NAME: "อำเภอเสิงสาง",
    DISTRICT_ENG_NAME: "Amphoe Soeng Sang",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30330
  },
  {
    DISTRICT_ID: 3004,
    DISTRICT_TH_NAME: "อำเภอคง",
    DISTRICT_ENG_NAME: "Amphoe Khong",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30260
  },
  {
    DISTRICT_ID: 3005,
    DISTRICT_TH_NAME: "อำเภอบ้านเหลื่อม",
    DISTRICT_ENG_NAME: "Amphoe Ban Lueam",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30350
  },
  {
    DISTRICT_ID: 3006,
    DISTRICT_TH_NAME: "อำเภอจักราช",
    DISTRICT_ENG_NAME: "Amphoe Chakkarat",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30230
  },
  {
    DISTRICT_ID: 3007,
    DISTRICT_TH_NAME: "อำเภอโชคชัย",
    DISTRICT_ENG_NAME: "Amphoe Chok Chai",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30190
  },
  {
    DISTRICT_ID: 3008,
    DISTRICT_TH_NAME: "อำเภอด่านขุนทด",
    DISTRICT_ENG_NAME: "Amphoe Dan Khun Thot",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 36220
  },
  {
    DISTRICT_ID: 3009,
    DISTRICT_TH_NAME: "อำเภอโนนไทย",
    DISTRICT_ENG_NAME: "Amphoe Non Thai",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30220
  },
  {
    DISTRICT_ID: 3010,
    DISTRICT_TH_NAME: "อำเภอโนนสูง",
    DISTRICT_ENG_NAME: "Amphoe Non Sung",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30420
  },
  {
    DISTRICT_ID: 3011,
    DISTRICT_TH_NAME: "อำเภอขามสะแกแสง",
    DISTRICT_ENG_NAME: "Amphoe Kham Sakaesaeng",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30290
  },
  {
    DISTRICT_ID: 3012,
    DISTRICT_TH_NAME: "อำเภอบัวใหญ่",
    DISTRICT_ENG_NAME: "Amphoe Bua Yai",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30120
  },
  {
    DISTRICT_ID: 3013,
    DISTRICT_TH_NAME: "อำเภอประทาย",
    DISTRICT_ENG_NAME: "Amphoe Prathai",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30180
  },
  {
    DISTRICT_ID: 3014,
    DISTRICT_TH_NAME: "อำเภอปักธงชัย",
    DISTRICT_ENG_NAME: "Amphoe Pak Thong Chai",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30150
  },
  {
    DISTRICT_ID: 3015,
    DISTRICT_TH_NAME: "อำเภอพิมาย",
    DISTRICT_ENG_NAME: "Amphoe Phimai",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30110
  },
  {
    DISTRICT_ID: 3016,
    DISTRICT_TH_NAME: "อำเภอห้วยแถลง",
    DISTRICT_ENG_NAME: "Amphoe Huai Thalaeng",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30240
  },
  {
    DISTRICT_ID: 3017,
    DISTRICT_TH_NAME: "อำเภอชุมพวง",
    DISTRICT_ENG_NAME: "Amphoe Chum Phuang",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30270
  },
  {
    DISTRICT_ID: 3018,
    DISTRICT_TH_NAME: "อำเภอสูงเนิน",
    DISTRICT_ENG_NAME: "Amphoe Sung Noen",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30380
  },
  {
    DISTRICT_ID: 3019,
    DISTRICT_TH_NAME: "อำเภอขามทะเลสอ",
    DISTRICT_ENG_NAME: "Amphoe Kham Thale So",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30280
  },
  {
    DISTRICT_ID: 3020,
    DISTRICT_TH_NAME: "อำเภอสีคิ้ว",
    DISTRICT_ENG_NAME: "Amphoe Sikhio",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30340
  },
  {
    DISTRICT_ID: 3021,
    DISTRICT_TH_NAME: "อำเภอปากช่อง",
    DISTRICT_ENG_NAME: "Amphoe Pak Chong",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30320
  },
  {
    DISTRICT_ID: 3022,
    DISTRICT_TH_NAME: "อำเภอหนองบุญมาก",
    DISTRICT_ENG_NAME: "Amphoe Nong Bunmak",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30410
  },
  {
    DISTRICT_ID: 3023,
    DISTRICT_TH_NAME: "อำเภอแก้งสนามนาง",
    DISTRICT_ENG_NAME: "Amphoe Kaeng Sanam Nang",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30440
  },
  {
    DISTRICT_ID: 3024,
    DISTRICT_TH_NAME: "อำเภอโนนแดง",
    DISTRICT_ENG_NAME: "Amphoe Non Daeng",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30360
  },
  {
    DISTRICT_ID: 3025,
    DISTRICT_TH_NAME: "อำเภอวังน้ำเขียว",
    DISTRICT_ENG_NAME: "Amphoe Wang Nam Khiao",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30370
  },
  {
    DISTRICT_ID: 3026,
    DISTRICT_TH_NAME: "อำเภอเทพารักษ์",
    DISTRICT_ENG_NAME: "Amphoe Thepharak",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30210
  },
  {
    DISTRICT_ID: 3027,
    DISTRICT_TH_NAME: "อำเภอเมืองยาง",
    DISTRICT_ENG_NAME: "Amphoe Mueang Yang",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30270
  },
  {
    DISTRICT_ID: 3028,
    DISTRICT_TH_NAME: "อำเภอพระทองคำ",
    DISTRICT_ENG_NAME: "Amphoe Phra Thong Kham",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30220
  },
  {
    DISTRICT_ID: 3029,
    DISTRICT_TH_NAME: "อำเภอลำทะเมนชัย",
    DISTRICT_ENG_NAME: "Amphoe Lam Thamenchai",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30270
  },
  {
    DISTRICT_ID: 3030,
    DISTRICT_TH_NAME: "อำเภอบัวลาย",
    DISTRICT_ENG_NAME: "Amphoe Bua Lai",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30120
  },
  {
    DISTRICT_ID: 3031,
    DISTRICT_TH_NAME: "อำเภอสีดา",
    DISTRICT_ENG_NAME: "Amphoe Sida",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30430
  },
  {
    DISTRICT_ID: 3032,
    DISTRICT_TH_NAME: "อำเภอเฉลิมพระเกียรติ",
    DISTRICT_ENG_NAME: "Amphoe Chaloem Phra Kiat",
    PROVINCE_ID: 30,
    GEO_ID: 3,
    ZIPCODE: 30230
  },
  {
    DISTRICT_ID: 3101,
    DISTRICT_TH_NAME: "อำเภอเมืองบุรีรัมย์",
    DISTRICT_ENG_NAME: "Amphoe Mueang Buri Ram",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31000
  },
  {
    DISTRICT_ID: 3102,
    DISTRICT_TH_NAME: "อำเภอคูเมือง",
    DISTRICT_ENG_NAME: "Amphoe Khu Mueang",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31190
  },
  {
    DISTRICT_ID: 3103,
    DISTRICT_TH_NAME: "อำเภอกระสัง",
    DISTRICT_ENG_NAME: "Amphoe Krasang",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31160
  },
  {
    DISTRICT_ID: 3104,
    DISTRICT_TH_NAME: "อำเภอนางรอง",
    DISTRICT_ENG_NAME: "Amphoe Nang Rong",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31110
  },
  {
    DISTRICT_ID: 3105,
    DISTRICT_TH_NAME: "อำเภอหนองกี่",
    DISTRICT_ENG_NAME: "Amphoe Nong Ki",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31210
  },
  {
    DISTRICT_ID: 3106,
    DISTRICT_TH_NAME: "อำเภอละหานทราย",
    DISTRICT_ENG_NAME: "Amphoe Lahan Sai",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31170
  },
  {
    DISTRICT_ID: 3107,
    DISTRICT_TH_NAME: "อำเภอประโคนชัย",
    DISTRICT_ENG_NAME: "Amphoe Prakhon Chai",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31140
  },
  {
    DISTRICT_ID: 3108,
    DISTRICT_TH_NAME: "อำเภอบ้านกรวด",
    DISTRICT_ENG_NAME: "Amphoe Ban Kruat",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31180
  },
  {
    DISTRICT_ID: 3109,
    DISTRICT_TH_NAME: "อำเภอพุทไธสง",
    DISTRICT_ENG_NAME: "Amphoe Phutthaisong",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31120
  },
  {
    DISTRICT_ID: 3110,
    DISTRICT_TH_NAME: "อำเภอลำปลายมาศ",
    DISTRICT_ENG_NAME: "Amphoe Lam Plai Mat",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31130
  },
  {
    DISTRICT_ID: 3111,
    DISTRICT_TH_NAME: "อำเภอสตึก",
    DISTRICT_ENG_NAME: "Amphoe Satuek",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31150
  },
  {
    DISTRICT_ID: 3112,
    DISTRICT_TH_NAME: "อำเภอปะคำ",
    DISTRICT_ENG_NAME: "Amphoe Pakham",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31220
  },
  {
    DISTRICT_ID: 3113,
    DISTRICT_TH_NAME: "อำเภอนาโพธิ์",
    DISTRICT_ENG_NAME: "Amphoe Na Pho",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31230
  },
  {
    DISTRICT_ID: 3114,
    DISTRICT_TH_NAME: "อำเภอหนองหงส์",
    DISTRICT_ENG_NAME: "Amphoe Nong Hong",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31240
  },
  {
    DISTRICT_ID: 3115,
    DISTRICT_TH_NAME: "อำเภอพลับพลาชัย",
    DISTRICT_ENG_NAME: "Amphoe Phlapphla Chai",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31250
  },
  {
    DISTRICT_ID: 3116,
    DISTRICT_TH_NAME: "อำเภอห้วยราช",
    DISTRICT_ENG_NAME: "Amphoe Huai Rat",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31000
  },
  {
    DISTRICT_ID: 3117,
    DISTRICT_TH_NAME: "อำเภอโนนสุวรรณ",
    DISTRICT_ENG_NAME: "Amphoe Non Suwan",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31110
  },
  {
    DISTRICT_ID: 3118,
    DISTRICT_TH_NAME: "อำเภอชำนิ",
    DISTRICT_ENG_NAME: "Amphoe Chamni",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31110
  },
  {
    DISTRICT_ID: 3119,
    DISTRICT_TH_NAME: "อำเภอบ้านใหม่ไชยพจน์",
    DISTRICT_ENG_NAME: "Amphoe Ban Mai Chaiyaphot",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31120
  },
  {
    DISTRICT_ID: 3120,
    DISTRICT_TH_NAME: "อำเภอโนนดินแดง",
    DISTRICT_ENG_NAME: "Amphoe Non Din Daeng",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31260
  },
  {
    DISTRICT_ID: 3121,
    DISTRICT_TH_NAME: "อำเภอบ้านด่าน",
    DISTRICT_ENG_NAME: "Amphoe Ban Dan",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31000
  },
  {
    DISTRICT_ID: 3122,
    DISTRICT_TH_NAME: "อำเภอแคนดง",
    DISTRICT_ENG_NAME: "Amphoe Khaen Dong",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31150
  },
  {
    DISTRICT_ID: 3123,
    DISTRICT_TH_NAME: "อำเภอเฉลิมพระเกียรติ",
    DISTRICT_ENG_NAME: "Amphoe Chaloem Phra Kiat",
    PROVINCE_ID: 31,
    GEO_ID: 3,
    ZIPCODE: 31170
  },
  {
    DISTRICT_ID: 3201,
    DISTRICT_TH_NAME: "อำเภอเมืองสุรินทร์",
    DISTRICT_ENG_NAME: "Amphoe Mueang Surin",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32000
  },
  {
    DISTRICT_ID: 3202,
    DISTRICT_TH_NAME: "อำเภอชุมพลบุรี",
    DISTRICT_ENG_NAME: "Amphoe Chumphon Buri",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32190
  },
  {
    DISTRICT_ID: 3203,
    DISTRICT_TH_NAME: "อำเภอท่าตูม",
    DISTRICT_ENG_NAME: "Amphoe Tha Tum",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32120
  },
  {
    DISTRICT_ID: 3204,
    DISTRICT_TH_NAME: "อำเภอจอมพระ",
    DISTRICT_ENG_NAME: "Amphoe Chom Phra",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32180
  },
  {
    DISTRICT_ID: 3205,
    DISTRICT_TH_NAME: "อำเภอปราสาท",
    DISTRICT_ENG_NAME: "Amphoe Prasat",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32140
  },
  {
    DISTRICT_ID: 3206,
    DISTRICT_TH_NAME: "อำเภอกาบเชิง",
    DISTRICT_ENG_NAME: "Amphoe Kap Choeng",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32210
  },
  {
    DISTRICT_ID: 3207,
    DISTRICT_TH_NAME: "อำเภอรัตนบุรี",
    DISTRICT_ENG_NAME: "Amphoe Rattanaburi",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32130
  },
  {
    DISTRICT_ID: 3208,
    DISTRICT_TH_NAME: "อำเภอสนม",
    DISTRICT_ENG_NAME: "Amphoe Sanom",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32160
  },
  {
    DISTRICT_ID: 3209,
    DISTRICT_TH_NAME: "อำเภอศีขรภูมิ",
    DISTRICT_ENG_NAME: "Amphoe Sikhoraphum",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32110
  },
  {
    DISTRICT_ID: 3210,
    DISTRICT_TH_NAME: "อำเภอสังขะ",
    DISTRICT_ENG_NAME: "Amphoe Sangkha",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32150
  },
  {
    DISTRICT_ID: 3211,
    DISTRICT_TH_NAME: "อำเภอลำดวน",
    DISTRICT_ENG_NAME: "Amphoe Lamduan",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32220
  },
  {
    DISTRICT_ID: 3212,
    DISTRICT_TH_NAME: "อำเภอสำโรงทาบ",
    DISTRICT_ENG_NAME: "Amphoe Samrong Thap",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32170
  },
  {
    DISTRICT_ID: 3213,
    DISTRICT_TH_NAME: "อำเภอบัวเชด",
    DISTRICT_ENG_NAME: "Amphoe Buachet",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32230
  },
  {
    DISTRICT_ID: 3214,
    DISTRICT_TH_NAME: "อำเภอพนมดงรัก",
    DISTRICT_ENG_NAME: "Amphoe Phanom Dong Rak",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32140
  },
  {
    DISTRICT_ID: 3215,
    DISTRICT_TH_NAME: "อำเภอศรีณรงค์",
    DISTRICT_ENG_NAME: "Amphoe Si Narong",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32150
  },
  {
    DISTRICT_ID: 3216,
    DISTRICT_TH_NAME: "อำเภอเขวาสินรินทร์",
    DISTRICT_ENG_NAME: "Amphoe Khwao Sinrin",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32000
  },
  {
    DISTRICT_ID: 3217,
    DISTRICT_TH_NAME: "อำเภอโนนนารายณ์",
    DISTRICT_ENG_NAME: "Amphoe Non Narai",
    PROVINCE_ID: 32,
    GEO_ID: 3,
    ZIPCODE: 32130
  },
  {
    DISTRICT_ID: 3301,
    DISTRICT_TH_NAME: "อำเภอเมืองศรีสะเกษ",
    DISTRICT_ENG_NAME: "Amphoe Mueang Si Sa Ket",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33000
  },
  {
    DISTRICT_ID: 3302,
    DISTRICT_TH_NAME: "อำเภอยางชุมน้อย",
    DISTRICT_ENG_NAME: "Amphoe Yang Chum Noi",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33190
  },
  {
    DISTRICT_ID: 3303,
    DISTRICT_TH_NAME: "อำเภอกันทรารมย์",
    DISTRICT_ENG_NAME: "Amphoe Kanthararom",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33130
  },
  {
    DISTRICT_ID: 3304,
    DISTRICT_TH_NAME: "อำเภอกันทรลักษ์",
    DISTRICT_ENG_NAME: "Amphoe Kantharalak",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33110
  },
  {
    DISTRICT_ID: 3305,
    DISTRICT_TH_NAME: "อำเภอขุขันธ์",
    DISTRICT_ENG_NAME: "Amphoe Khukhan",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33140
  },
  {
    DISTRICT_ID: 3306,
    DISTRICT_TH_NAME: "อำเภอไพรบึง",
    DISTRICT_ENG_NAME: "Amphoe Phrai Bueng",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33180
  },
  {
    DISTRICT_ID: 3307,
    DISTRICT_TH_NAME: "อำเภอปรางค์กู่",
    DISTRICT_ENG_NAME: "Amphoe Prang Ku",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33170
  },
  {
    DISTRICT_ID: 3308,
    DISTRICT_TH_NAME: "อำเภอขุนหาญ",
    DISTRICT_ENG_NAME: "Amphoe Khun Han",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33150
  },
  {
    DISTRICT_ID: 3309,
    DISTRICT_TH_NAME: "อำเภอราษีไศล",
    DISTRICT_ENG_NAME: "Amphoe Rasi Salai",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33160
  },
  {
    DISTRICT_ID: 3310,
    DISTRICT_TH_NAME: "อำเภออุทุมพรพิสัย",
    DISTRICT_ENG_NAME: "Amphoe Uthumphon Phisai",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33120
  },
  {
    DISTRICT_ID: 3311,
    DISTRICT_TH_NAME: "อำเภอบึงบูรพ์",
    DISTRICT_ENG_NAME: "Amphoe Bueng Bun",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33220
  },
  {
    DISTRICT_ID: 3312,
    DISTRICT_TH_NAME: "อำเภอห้วยทับทัน",
    DISTRICT_ENG_NAME: "Amphoe Huai Thap Than",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33210
  },
  {
    DISTRICT_ID: 3313,
    DISTRICT_TH_NAME: "อำเภอโนนคูณ",
    DISTRICT_ENG_NAME: "Amphoe Non Khun",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33250
  },
  {
    DISTRICT_ID: 3314,
    DISTRICT_TH_NAME: "อำเภอศรีรัตนะ",
    DISTRICT_ENG_NAME: "Amphoe Si Rattana",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33240
  },
  {
    DISTRICT_ID: 3315,
    DISTRICT_TH_NAME: "อำเภอน้ำเกลี้ยง",
    DISTRICT_ENG_NAME: "Amphoe Nam Kliang",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33130
  },
  {
    DISTRICT_ID: 3316,
    DISTRICT_TH_NAME: "อำเภอวังหิน",
    DISTRICT_ENG_NAME: "Amphoe Wang Hin",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33270
  },
  {
    DISTRICT_ID: 3317,
    DISTRICT_TH_NAME: "อำเภอภูสิงห์",
    DISTRICT_ENG_NAME: "Amphoe Phu Sing",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33140
  },
  {
    DISTRICT_ID: 3318,
    DISTRICT_TH_NAME: "อำเภอเมืองจันทร์",
    DISTRICT_ENG_NAME: "Amphoe Mueang Chan",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33120
  },
  {
    DISTRICT_ID: 3319,
    DISTRICT_TH_NAME: "อำเภอเบญจลักษ์",
    DISTRICT_ENG_NAME: "Amphoe Benchalak",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33110
  },
  {
    DISTRICT_ID: 3320,
    DISTRICT_TH_NAME: "อำเภอพยุห์",
    DISTRICT_ENG_NAME: "Amphoe Phayu",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33230
  },
  {
    DISTRICT_ID: 3321,
    DISTRICT_TH_NAME: "อำเภอโพธิ์ศรีสุวรรณ",
    DISTRICT_ENG_NAME: "Amphoe Pho Si Suwan",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33120
  },
  {
    DISTRICT_ID: 3322,
    DISTRICT_TH_NAME: "อำเภอศิลาลาด",
    DISTRICT_ENG_NAME: "Amphoe Sila Lat",
    PROVINCE_ID: 33,
    GEO_ID: 3,
    ZIPCODE: 33160
  },
  {
    DISTRICT_ID: 3401,
    DISTRICT_TH_NAME: "อำเภอเมืองอุบลราชธานี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Ubon Ratchathani",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34000
  },
  {
    DISTRICT_ID: 3402,
    DISTRICT_TH_NAME: "อำเภอศรีเมืองใหม่",
    DISTRICT_ENG_NAME: "Amphoe Si Mueang Mai",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34250
  },
  {
    DISTRICT_ID: 3403,
    DISTRICT_TH_NAME: "อำเภอโขงเจียม",
    DISTRICT_ENG_NAME: "Amphoe Khong Chiam",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34220
  },
  {
    DISTRICT_ID: 3404,
    DISTRICT_TH_NAME: "อำเภอเขื่องใน",
    DISTRICT_ENG_NAME: "Amphoe Khueang Nai",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34320
  },
  {
    DISTRICT_ID: 3405,
    DISTRICT_TH_NAME: "อำเภอเขมราฐ",
    DISTRICT_ENG_NAME: "Amphoe Khemarat",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34170
  },
  {
    DISTRICT_ID: 3407,
    DISTRICT_TH_NAME: "อำเภอเดชอุดม",
    DISTRICT_ENG_NAME: "Amphoe Det Udom",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34160
  },
  {
    DISTRICT_ID: 3408,
    DISTRICT_TH_NAME: "อำเภอนาจะหลวย",
    DISTRICT_ENG_NAME: "Amphoe Na Chaluai",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34280
  },
  {
    DISTRICT_ID: 3409,
    DISTRICT_TH_NAME: "อำเภอน้ำยืน",
    DISTRICT_ENG_NAME: "Amphoe Nam Yuen",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34260
  },
  {
    DISTRICT_ID: 3410,
    DISTRICT_TH_NAME: "อำเภอบุณฑริก",
    DISTRICT_ENG_NAME: "Amphoe Buntharik",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34230
  },
  {
    DISTRICT_ID: 3411,
    DISTRICT_TH_NAME: "อำเภอตระการพืชผล",
    DISTRICT_ENG_NAME: "Amphoe Trakan Phuet Phon",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34130
  },
  {
    DISTRICT_ID: 3412,
    DISTRICT_TH_NAME: "อำเภอกุดข้าวปุ้น",
    DISTRICT_ENG_NAME: "Amphoe Kut Khaopun",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34270
  },
  {
    DISTRICT_ID: 3414,
    DISTRICT_TH_NAME: "อำเภอม่วงสามสิบ",
    DISTRICT_ENG_NAME: "Amphoe Muang Sam Sip",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34140
  },
  {
    DISTRICT_ID: 3415,
    DISTRICT_TH_NAME: "อำเภอวารินชำราบ",
    DISTRICT_ENG_NAME: "Amphoe Warin Chamrap",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34310
  },
  {
    DISTRICT_ID: 3419,
    DISTRICT_TH_NAME: "อำเภอพิบูลมังสาหาร",
    DISTRICT_ENG_NAME: "Amphoe Phibun Mangsahan",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34110
  },
  {
    DISTRICT_ID: 3420,
    DISTRICT_TH_NAME: "อำเภอตาลสุม",
    DISTRICT_ENG_NAME: "Amphoe Tan Sum",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34330
  },
  {
    DISTRICT_ID: 3421,
    DISTRICT_TH_NAME: "อำเภอโพธิ์ไทร",
    DISTRICT_ENG_NAME: "Amphoe Pho Sai",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34340
  },
  {
    DISTRICT_ID: 3422,
    DISTRICT_TH_NAME: "อำเภอสำโรง",
    DISTRICT_ENG_NAME: "Amphoe Samrong",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34360
  },
  {
    DISTRICT_ID: 3424,
    DISTRICT_TH_NAME: "อำเภอดอนมดแดง",
    DISTRICT_ENG_NAME: "Amphoe Don Mot Daeng",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34000
  },
  {
    DISTRICT_ID: 3425,
    DISTRICT_TH_NAME: "อำเภอสิรินธร",
    DISTRICT_ENG_NAME: "Amphoe Sirindhorn",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34350
  },
  {
    DISTRICT_ID: 3426,
    DISTRICT_TH_NAME: "อำเภอทุ่งศรีอุดม",
    DISTRICT_ENG_NAME: "Amphoe Thung Si Udom",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34160
  },
  {
    DISTRICT_ID: 3429,
    DISTRICT_TH_NAME: "อำเภอนาเยีย",
    DISTRICT_ENG_NAME: "Amphoe Na Yia",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34160
  },
  {
    DISTRICT_ID: 3430,
    DISTRICT_TH_NAME: "อำเภอนาตาล",
    DISTRICT_ENG_NAME: "Amphoe Na Tan",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34170
  },
  {
    DISTRICT_ID: 3431,
    DISTRICT_TH_NAME: "อำเภอเหล่าเสือโก้ก",
    DISTRICT_ENG_NAME: "Fang Kham",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34000
  },
  {
    DISTRICT_ID: 3432,
    DISTRICT_TH_NAME: "อำเภอสว่างวีระวงศ์",
    DISTRICT_ENG_NAME: "Amphoe Sawang Wirawong",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34190
  },
  {
    DISTRICT_ID: 3433,
    DISTRICT_TH_NAME: "อำเภอน้ำขุ่น",
    DISTRICT_ENG_NAME: "Amphoe Nam Khun",
    PROVINCE_ID: 34,
    GEO_ID: 3,
    ZIPCODE: 34260
  },
  {
    DISTRICT_ID: 3501,
    DISTRICT_TH_NAME: "อำเภอเมืองยโสธร",
    DISTRICT_ENG_NAME: "Amphoe Mueang Yasothon",
    PROVINCE_ID: 35,
    GEO_ID: 3,
    ZIPCODE: 35000
  },
  {
    DISTRICT_ID: 3502,
    DISTRICT_TH_NAME: "อำเภอทรายมูล",
    DISTRICT_ENG_NAME: "Amphoe Sai Mun",
    PROVINCE_ID: 35,
    GEO_ID: 3,
    ZIPCODE: 35170
  },
  {
    DISTRICT_ID: 3503,
    DISTRICT_TH_NAME: "อำเภอกุดชุม",
    DISTRICT_ENG_NAME: "Amphoe Kut Chum",
    PROVINCE_ID: 35,
    GEO_ID: 3,
    ZIPCODE: 35140
  },
  {
    DISTRICT_ID: 3504,
    DISTRICT_TH_NAME: "อำเภอคำเขื่อนแก้ว",
    DISTRICT_ENG_NAME: "Amphoe Kham Khuean Kaeo",
    PROVINCE_ID: 35,
    GEO_ID: 3,
    ZIPCODE: 35180
  },
  {
    DISTRICT_ID: 3505,
    DISTRICT_TH_NAME: "อำเภอป่าติ้ว",
    DISTRICT_ENG_NAME: "Amphoe Pa Tio",
    PROVINCE_ID: 35,
    GEO_ID: 3,
    ZIPCODE: 35150
  },
  {
    DISTRICT_ID: 3506,
    DISTRICT_TH_NAME: "อำเภอมหาชนะชัย",
    DISTRICT_ENG_NAME: "Amphoe Maha Chana Chai",
    PROVINCE_ID: 35,
    GEO_ID: 3,
    ZIPCODE: 35130
  },
  {
    DISTRICT_ID: 3507,
    DISTRICT_TH_NAME: "อำเภอค้อวัง",
    DISTRICT_ENG_NAME: "Amphoe Kho Wang",
    PROVINCE_ID: 35,
    GEO_ID: 3,
    ZIPCODE: 35160
  },
  {
    DISTRICT_ID: 3508,
    DISTRICT_TH_NAME: "อำเภอเลิงนกทา",
    DISTRICT_ENG_NAME: "Amphoe Loeng Nok Tha",
    PROVINCE_ID: 35,
    GEO_ID: 3,
    ZIPCODE: 35120
  },
  {
    DISTRICT_ID: 3509,
    DISTRICT_TH_NAME: "อำเภอไทยเจริญ",
    DISTRICT_ENG_NAME: "Amphoe Thai Charoen",
    PROVINCE_ID: 35,
    GEO_ID: 3,
    ZIPCODE: 35120
  },
  {
    DISTRICT_ID: 3601,
    DISTRICT_TH_NAME: "อำเภอเมืองชัยภูมิ",
    DISTRICT_ENG_NAME: "Amphoe Mueang Chaiyaphum",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36240
  },
  {
    DISTRICT_ID: 3602,
    DISTRICT_TH_NAME: "อำเภอบ้านเขว้า",
    DISTRICT_ENG_NAME: "Amphoe Ban Khwao",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36170
  },
  {
    DISTRICT_ID: 3603,
    DISTRICT_TH_NAME: "อำเภอคอนสวรรค์",
    DISTRICT_ENG_NAME: "Amphoe Khon Sawan",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36140
  },
  {
    DISTRICT_ID: 3604,
    DISTRICT_TH_NAME: "อำเภอเกษตรสมบูรณ์",
    DISTRICT_ENG_NAME: "Amphoe Kaset Sombun",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36120
  },
  {
    DISTRICT_ID: 3605,
    DISTRICT_TH_NAME: "อำเภอหนองบัวแดง",
    DISTRICT_ENG_NAME: "Amphoe Nong Bua Daeng",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36210
  },
  {
    DISTRICT_ID: 3606,
    DISTRICT_TH_NAME: "อำเภอจัตุรัส",
    DISTRICT_ENG_NAME: "Amphoe Chatturat",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36220
  },
  {
    DISTRICT_ID: 3607,
    DISTRICT_TH_NAME: "อำเภอบำเหน็จณรงค์",
    DISTRICT_ENG_NAME: "Amphoe Bamnet Narong",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36220
  },
  {
    DISTRICT_ID: 3608,
    DISTRICT_TH_NAME: "อำเภอหนองบัวระเหว",
    DISTRICT_ENG_NAME: "Amphoe Nong Bua Rawe",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36250
  },
  {
    DISTRICT_ID: 3609,
    DISTRICT_TH_NAME: "อำเภอเทพสถิต",
    DISTRICT_ENG_NAME: "Amphoe Thep Sathit",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36230
  },
  {
    DISTRICT_ID: 3610,
    DISTRICT_TH_NAME: "อำเภอภูเขียว",
    DISTRICT_ENG_NAME: "Amphoe Phu Khiao",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36110
  },
  {
    DISTRICT_ID: 3611,
    DISTRICT_TH_NAME: "อำเภอบ้านแท่น",
    DISTRICT_ENG_NAME: "Amphoe Ban Thaen",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36190
  },
  {
    DISTRICT_ID: 3612,
    DISTRICT_TH_NAME: "อำเภอแก้งคร้อ",
    DISTRICT_ENG_NAME: "Amphoe Kaeng Khro",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36150
  },
  {
    DISTRICT_ID: 3613,
    DISTRICT_TH_NAME: "อำเภอคอนสาร",
    DISTRICT_ENG_NAME: "Amphoe Khon San",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36180
  },
  {
    DISTRICT_ID: 3614,
    DISTRICT_TH_NAME: "อำเภอภักดีชุมพล",
    DISTRICT_ENG_NAME: "Amphoe Phakdi Chumphon",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36260
  },
  {
    DISTRICT_ID: 3615,
    DISTRICT_TH_NAME: "อำเภอเนินสง่า",
    DISTRICT_ENG_NAME: "Amphoe Noen Sa-nga",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36130
  },
  {
    DISTRICT_ID: 3616,
    DISTRICT_TH_NAME: "อำเภอซับใหญ่",
    DISTRICT_ENG_NAME: "Amphoe Sap Yai",
    PROVINCE_ID: 36,
    GEO_ID: 3,
    ZIPCODE: 36130
  },
  {
    DISTRICT_ID: 3701,
    DISTRICT_TH_NAME: "อำเภอเมืองอำนาจเจริญ",
    DISTRICT_ENG_NAME: "Amphoe Mueang Amnat Charoen",
    PROVINCE_ID: 37,
    GEO_ID: 3,
    ZIPCODE: 37000
  },
  {
    DISTRICT_ID: 3702,
    DISTRICT_TH_NAME: "อำเภอชานุมาน",
    DISTRICT_ENG_NAME: "Amphoe Chanuman",
    PROVINCE_ID: 37,
    GEO_ID: 3,
    ZIPCODE: 37210
  },
  {
    DISTRICT_ID: 3703,
    DISTRICT_TH_NAME: "อำเภอปทุมราชวงศา",
    DISTRICT_ENG_NAME: "Amphoe Pathum Ratchawongsa",
    PROVINCE_ID: 37,
    GEO_ID: 3,
    ZIPCODE: 37110
  },
  {
    DISTRICT_ID: 3704,
    DISTRICT_TH_NAME: "อำเภอพนา",
    DISTRICT_ENG_NAME: "Amphoe Phana",
    PROVINCE_ID: 37,
    GEO_ID: 3,
    ZIPCODE: 37180
  },
  {
    DISTRICT_ID: 3705,
    DISTRICT_TH_NAME: "อำเภอเสนางคนิคม",
    DISTRICT_ENG_NAME: "Amphoe Senangkhanikhom",
    PROVINCE_ID: 37,
    GEO_ID: 3,
    ZIPCODE: 37290
  },
  {
    DISTRICT_ID: 3706,
    DISTRICT_TH_NAME: "อำเภอหัวตะพาน",
    DISTRICT_ENG_NAME: "Amphoe Hua Taphan",
    PROVINCE_ID: 37,
    GEO_ID: 3,
    ZIPCODE: 37240
  },
  {
    DISTRICT_ID: 3707,
    DISTRICT_TH_NAME: "อำเภอลืออำนาจ",
    DISTRICT_ENG_NAME: "Amphoe Lue Amnat",
    PROVINCE_ID: 37,
    GEO_ID: 3,
    ZIPCODE: 37120
  },
  {
    DISTRICT_ID: 3801,
    DISTRICT_TH_NAME: "อำเภอเมืองบึงกาฬ",
    DISTRICT_ENG_NAME: "Amphoe Mueang Bueng Kan",
    PROVINCE_ID: 38,
    GEO_ID: 3,
    ZIPCODE: 38000
  },
  {
    DISTRICT_ID: 3802,
    DISTRICT_TH_NAME: "อำเภอพรเจริญ",
    DISTRICT_ENG_NAME: "Amphoe Phon Charoen",
    PROVINCE_ID: 38,
    GEO_ID: 3,
    ZIPCODE: 38180
  },
  {
    DISTRICT_ID: 3803,
    DISTRICT_TH_NAME: "อำเภอโซ่พิสัย",
    DISTRICT_ENG_NAME: "Amphoe So Phisai",
    PROVINCE_ID: 38,
    GEO_ID: 3,
    ZIPCODE: 38170
  },
  {
    DISTRICT_ID: 3804,
    DISTRICT_TH_NAME: "อำเภอเซกา",
    DISTRICT_ENG_NAME: "Amphoe Seka",
    PROVINCE_ID: 38,
    GEO_ID: 3,
    ZIPCODE: 38150
  },
  {
    DISTRICT_ID: 3805,
    DISTRICT_TH_NAME: "อำเภอปากคาด",
    DISTRICT_ENG_NAME: "Amphoe Pak Khat",
    PROVINCE_ID: 38,
    GEO_ID: 3,
    ZIPCODE: 38190
  },
  {
    DISTRICT_ID: 3806,
    DISTRICT_TH_NAME: "อำเภอบึงโขงหลง",
    DISTRICT_ENG_NAME: "Amphoe Bueng Khong Long",
    PROVINCE_ID: 38,
    GEO_ID: 3,
    ZIPCODE: 38220
  },
  {
    DISTRICT_ID: 3807,
    DISTRICT_TH_NAME: "อำเภอศรีวิไล",
    DISTRICT_ENG_NAME: "Amphoe Si Wilai",
    PROVINCE_ID: 38,
    GEO_ID: 3,
    ZIPCODE: 38210
  },
  {
    DISTRICT_ID: 3808,
    DISTRICT_TH_NAME: "อำเภอบุ่งคล้า",
    DISTRICT_ENG_NAME: "Amphoe Bung Khla",
    PROVINCE_ID: 38,
    GEO_ID: 3,
    ZIPCODE: 38000
  },
  {
    DISTRICT_ID: 3901,
    DISTRICT_TH_NAME: "อำเภอเมืองหนองบัวลำภู",
    DISTRICT_ENG_NAME: "Amphoe Mueang Nong Bua Lam Phu",
    PROVINCE_ID: 39,
    GEO_ID: 3,
    ZIPCODE: 39000
  },
  {
    DISTRICT_ID: 3902,
    DISTRICT_TH_NAME: "อำเภอนากลาง",
    DISTRICT_ENG_NAME: "Amphoe Na Klang",
    PROVINCE_ID: 39,
    GEO_ID: 3,
    ZIPCODE: 39350
  },
  {
    DISTRICT_ID: 3903,
    DISTRICT_TH_NAME: "อำเภอโนนสัง",
    DISTRICT_ENG_NAME: "Amphoe Non Sang",
    PROVINCE_ID: 39,
    GEO_ID: 3,
    ZIPCODE: 39140
  },
  {
    DISTRICT_ID: 3904,
    DISTRICT_TH_NAME: "อำเภอศรีบุญเรือง",
    DISTRICT_ENG_NAME: "Amphoe Si Bun Rueang",
    PROVINCE_ID: 39,
    GEO_ID: 3,
    ZIPCODE: 39180
  },
  {
    DISTRICT_ID: 3905,
    DISTRICT_TH_NAME: "อำเภอสุวรรณคูหา",
    DISTRICT_ENG_NAME: "Amphoe Suwannakhuha",
    PROVINCE_ID: 39,
    GEO_ID: 3,
    ZIPCODE: 39270
  },
  {
    DISTRICT_ID: 3906,
    DISTRICT_TH_NAME: "อำเภอนาวัง",
    DISTRICT_ENG_NAME: "Amphoe Na Wang",
    PROVINCE_ID: 39,
    GEO_ID: 3,
    ZIPCODE: 39170
  },
  {
    DISTRICT_ID: 4001,
    DISTRICT_TH_NAME: "อำเภอเมืองขอนแก่น",
    DISTRICT_ENG_NAME: "Amphoe Mueang Khon Kaen",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40260
  },
  {
    DISTRICT_ID: 4002,
    DISTRICT_TH_NAME: "อำเภอบ้านฝาง",
    DISTRICT_ENG_NAME: "Amphoe Ban Fang",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40270
  },
  {
    DISTRICT_ID: 4003,
    DISTRICT_TH_NAME: "อำเภอพระยืน",
    DISTRICT_ENG_NAME: "Amphoe Phra Yuen",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40320
  },
  {
    DISTRICT_ID: 4004,
    DISTRICT_TH_NAME: "อำเภอหนองเรือ",
    DISTRICT_ENG_NAME: "Amphoe Nong Ruea",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40240
  },
  {
    DISTRICT_ID: 4005,
    DISTRICT_TH_NAME: "อำเภอชุมแพ",
    DISTRICT_ENG_NAME: "Amphoe Chum Phae",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40290
  },
  {
    DISTRICT_ID: 4006,
    DISTRICT_TH_NAME: "อำเภอสีชมพู",
    DISTRICT_ENG_NAME: "Amphoe Si Chomphu",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40220
  },
  {
    DISTRICT_ID: 4007,
    DISTRICT_TH_NAME: "อำเภอน้ำพอง",
    DISTRICT_ENG_NAME: "Amphoe Nam Phong",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40310
  },
  {
    DISTRICT_ID: 4008,
    DISTRICT_TH_NAME: "อำเภออุบลรัตน์",
    DISTRICT_ENG_NAME: "Amphoe Ubolratana",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40250
  },
  {
    DISTRICT_ID: 4009,
    DISTRICT_TH_NAME: "อำเภอกระนวน",
    DISTRICT_ENG_NAME: "Amphoe Kranuan",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40170
  },
  {
    DISTRICT_ID: 4010,
    DISTRICT_TH_NAME: "อำเภอบ้านไผ่",
    DISTRICT_ENG_NAME: "Amphoe Ban Phai",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40110
  },
  {
    DISTRICT_ID: 4011,
    DISTRICT_TH_NAME: "อำเภอเปือยน้อย",
    DISTRICT_ENG_NAME: "Amphoe Pueai Noi",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40340
  },
  {
    DISTRICT_ID: 4012,
    DISTRICT_TH_NAME: "อำเภอพล",
    DISTRICT_ENG_NAME: "Amphoe Phon",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40120
  },
  {
    DISTRICT_ID: 4013,
    DISTRICT_TH_NAME: "อำเภอแวงใหญ่",
    DISTRICT_ENG_NAME: "Amphoe Waeng Yai",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40330
  },
  {
    DISTRICT_ID: 4014,
    DISTRICT_TH_NAME: "อำเภอแวงน้อย",
    DISTRICT_ENG_NAME: "Amphoe Waeng Noi",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40230
  },
  {
    DISTRICT_ID: 4015,
    DISTRICT_TH_NAME: "อำเภอหนองสองห้อง",
    DISTRICT_ENG_NAME: "Amphoe Nong Song Hong",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40190
  },
  {
    DISTRICT_ID: 4016,
    DISTRICT_TH_NAME: "อำเภอภูเวียง",
    DISTRICT_ENG_NAME: "Amphoe Phu Wiang",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40150
  },
  {
    DISTRICT_ID: 4017,
    DISTRICT_TH_NAME: "อำเภอมัญจาคีรี",
    DISTRICT_ENG_NAME: "Amphoe Mancha Khiri",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40160
  },
  {
    DISTRICT_ID: 4018,
    DISTRICT_TH_NAME: "อำเภอชนบท",
    DISTRICT_ENG_NAME: "Amphoe Chonnabot",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40180
  },
  {
    DISTRICT_ID: 4019,
    DISTRICT_TH_NAME: "อำเภอเขาสวนกวาง",
    DISTRICT_ENG_NAME: "Amphoe Khao Suan Kwang",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40280
  },
  {
    DISTRICT_ID: 4020,
    DISTRICT_TH_NAME: "อำเภอภูผาม่าน",
    DISTRICT_ENG_NAME: "Amphoe Phu Pha Man",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40350
  },
  {
    DISTRICT_ID: 4021,
    DISTRICT_TH_NAME: "อำเภอซำสูง",
    DISTRICT_ENG_NAME: "Amphoe Sam Sung",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40170
  },
  {
    DISTRICT_ID: 4022,
    DISTRICT_TH_NAME: "อำเภอโคกโพธิ์ไชย",
    DISTRICT_ENG_NAME: "Amphoe Khok Pho Chai",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40160
  },
  {
    DISTRICT_ID: 4023,
    DISTRICT_TH_NAME: "อำเภอหนองนาคำ",
    DISTRICT_ENG_NAME: "Amphoe Nong Na Kham",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40150
  },
  {
    DISTRICT_ID: 4024,
    DISTRICT_TH_NAME: "อำเภอบ้านแฮด",
    DISTRICT_ENG_NAME: "Amphoe Ban Haet",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40110
  },
  {
    DISTRICT_ID: 4025,
    DISTRICT_TH_NAME: "อำเภอโนนศิลา",
    DISTRICT_ENG_NAME: "Amphoe Non Sila",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40110
  },
  {
    DISTRICT_ID: 4026,
    DISTRICT_TH_NAME: "อำเภอเวียงเก่า",
    DISTRICT_ENG_NAME: "Amphoe Wiang Kao",
    PROVINCE_ID: 40,
    GEO_ID: 3,
    ZIPCODE: 40150
  },
  {
    DISTRICT_ID: 4101,
    DISTRICT_TH_NAME: "อำเภอเมืองอุดรธานี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Udon Thani",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41330
  },
  {
    DISTRICT_ID: 4102,
    DISTRICT_TH_NAME: "อำเภอกุดจับ",
    DISTRICT_ENG_NAME: "Amphoe Kut Chap",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41250
  },
  {
    DISTRICT_ID: 4103,
    DISTRICT_TH_NAME: "อำเภอหนองวัวซอ",
    DISTRICT_ENG_NAME: "Amphoe Nong Wua So",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41360
  },
  {
    DISTRICT_ID: 4104,
    DISTRICT_TH_NAME: "อำเภอกุมภวาปี",
    DISTRICT_ENG_NAME: "Amphoe Kumphawapi",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41370
  },
  {
    DISTRICT_ID: 4105,
    DISTRICT_TH_NAME: "อำเภอโนนสะอาด",
    DISTRICT_ENG_NAME: "Amphoe Non Sa-at",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41240
  },
  {
    DISTRICT_ID: 4106,
    DISTRICT_TH_NAME: "อำเภอหนองหาน",
    DISTRICT_ENG_NAME: "Amphoe Nong Han",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41320
  },
  {
    DISTRICT_ID: 4107,
    DISTRICT_TH_NAME: "อำเภอทุ่งฝน",
    DISTRICT_ENG_NAME: "Amphoe Thung Fon",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41310
  },
  {
    DISTRICT_ID: 4108,
    DISTRICT_TH_NAME: "อำเภอไชยวาน",
    DISTRICT_ENG_NAME: "Amphoe Chai Wan",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41290
  },
  {
    DISTRICT_ID: 4109,
    DISTRICT_TH_NAME: "อำเภอศรีธาตุ",
    DISTRICT_ENG_NAME: "Amphoe Si That",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41230
  },
  {
    DISTRICT_ID: 4110,
    DISTRICT_TH_NAME: "อำเภอวังสามหมอ",
    DISTRICT_ENG_NAME: "Amphoe Wang Sam Mo",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41280
  },
  {
    DISTRICT_ID: 4111,
    DISTRICT_TH_NAME: "อำเภอบ้านดุง",
    DISTRICT_ENG_NAME: "Amphoe Ban Dung",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41190
  },
  {
    DISTRICT_ID: 4117,
    DISTRICT_TH_NAME: "อำเภอบ้านผือ",
    DISTRICT_ENG_NAME: "Amphoe Ban Phue",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41160
  },
  {
    DISTRICT_ID: 4118,
    DISTRICT_TH_NAME: "อำเภอน้ำโสม",
    DISTRICT_ENG_NAME: "Amphoe Nam Som",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41210
  },
  {
    DISTRICT_ID: 4119,
    DISTRICT_TH_NAME: "อำเภอเพ็ญ",
    DISTRICT_ENG_NAME: "Amphoe Phen",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41150
  },
  {
    DISTRICT_ID: 4120,
    DISTRICT_TH_NAME: "อำเภอสร้างคอม",
    DISTRICT_ENG_NAME: "Amphoe Sang Khom",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41260
  },
  {
    DISTRICT_ID: 4121,
    DISTRICT_TH_NAME: "อำเภอหนองแสง",
    DISTRICT_ENG_NAME: "Amphoe Nong Saeng",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41340
  },
  {
    DISTRICT_ID: 4122,
    DISTRICT_TH_NAME: "อำเภอนายูง",
    DISTRICT_ENG_NAME: "Amphoe Na Yung",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41380
  },
  {
    DISTRICT_ID: 4123,
    DISTRICT_TH_NAME: "อำเภอพิบูลย์รักษ์",
    DISTRICT_ENG_NAME: "Amphoe Phibun Rak",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41130
  },
  {
    DISTRICT_ID: 4124,
    DISTRICT_TH_NAME: "อำเภอกู่แก้ว",
    DISTRICT_ENG_NAME: "Amphoe Ku Kaeo",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41130
  },
  {
    DISTRICT_ID: 4125,
    DISTRICT_TH_NAME: "อำเภอประจักษ์ศิลปาคม",
    DISTRICT_ENG_NAME: "Amphoe Prachak Sinlapakhom",
    PROVINCE_ID: 41,
    GEO_ID: 3,
    ZIPCODE: 41110
  },
  {
    DISTRICT_ID: 4201,
    DISTRICT_TH_NAME: "อำเภอเมืองเลย",
    DISTRICT_ENG_NAME: "Amphoe Mueang Loei",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42100
  },
  {
    DISTRICT_ID: 4202,
    DISTRICT_TH_NAME: "อำเภอนาด้วง",
    DISTRICT_ENG_NAME: "Amphoe Na Duang",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42210
  },
  {
    DISTRICT_ID: 4203,
    DISTRICT_TH_NAME: "อำเภอเชียงคาน",
    DISTRICT_ENG_NAME: "Amphoe Chiang Khan",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42110
  },
  {
    DISTRICT_ID: 4204,
    DISTRICT_TH_NAME: "อำเภอปากชม",
    DISTRICT_ENG_NAME: "Amphoe Pak Chom",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42150
  },
  {
    DISTRICT_ID: 4205,
    DISTRICT_TH_NAME: "อำเภอด่านซ้าย",
    DISTRICT_ENG_NAME: "Amphoe Dan Sai",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42120
  },
  {
    DISTRICT_ID: 4206,
    DISTRICT_TH_NAME: "อำเภอนาแห้ว",
    DISTRICT_ENG_NAME: "Amphoe Na Haeo",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42170
  },
  {
    DISTRICT_ID: 4207,
    DISTRICT_TH_NAME: "อำเภอภูเรือ",
    DISTRICT_ENG_NAME: "Amphoe Phu Ruea",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42160
  },
  {
    DISTRICT_ID: 4208,
    DISTRICT_TH_NAME: "อำเภอท่าลี่",
    DISTRICT_ENG_NAME: "Amphoe Tha Li",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42140
  },
  {
    DISTRICT_ID: 4209,
    DISTRICT_TH_NAME: "อำเภอวังสะพุง",
    DISTRICT_ENG_NAME: "Amphoe Wang Saphung",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42130
  },
  {
    DISTRICT_ID: 4210,
    DISTRICT_TH_NAME: "อำเภอภูกระดึง",
    DISTRICT_ENG_NAME: "Amphoe Phu Kradueng",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42180
  },
  {
    DISTRICT_ID: 4211,
    DISTRICT_TH_NAME: "อำเภอภูหลวง",
    DISTRICT_ENG_NAME: "Amphoe Phu Luang",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42230
  },
  {
    DISTRICT_ID: 4212,
    DISTRICT_TH_NAME: "อำเภอผาขาว",
    DISTRICT_ENG_NAME: "Amphoe Pha Khao",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42240
  },
  {
    DISTRICT_ID: 4213,
    DISTRICT_TH_NAME: "อำเภอเอราวัณ",
    DISTRICT_ENG_NAME: "Amphoe Erawan",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42220
  },
  {
    DISTRICT_ID: 4214,
    DISTRICT_TH_NAME: "อำเภอหนองหิน",
    DISTRICT_ENG_NAME: "Amphoe Nong Hin",
    PROVINCE_ID: 42,
    GEO_ID: 3,
    ZIPCODE: 42190
  },
  {
    DISTRICT_ID: 4301,
    DISTRICT_TH_NAME: "อำเภอเมืองหนองคาย",
    DISTRICT_ENG_NAME: "Amphoe Mueang Nong Khai",
    PROVINCE_ID: 43,
    GEO_ID: 3,
    ZIPCODE: 43100
  },
  {
    DISTRICT_ID: 4302,
    DISTRICT_TH_NAME: "อำเภอท่าบ่อ",
    DISTRICT_ENG_NAME: "Amphoe Tha Bo",
    PROVINCE_ID: 43,
    GEO_ID: 3,
    ZIPCODE: 43110
  },
  {
    DISTRICT_ID: 4305,
    DISTRICT_TH_NAME: "อำเภอโพนพิสัย",
    DISTRICT_ENG_NAME: "Amphoe Phon Phisai",
    PROVINCE_ID: 43,
    GEO_ID: 3,
    ZIPCODE: 43120
  },
  {
    DISTRICT_ID: 4307,
    DISTRICT_TH_NAME: "อำเภอศรีเชียงใหม่",
    DISTRICT_ENG_NAME: "Amphoe Si Chiang Mai",
    PROVINCE_ID: 43,
    GEO_ID: 3,
    ZIPCODE: 43130
  },
  {
    DISTRICT_ID: 4308,
    DISTRICT_TH_NAME: "อำเภอสังคม",
    DISTRICT_ENG_NAME: "Amphoe Sangkhom",
    PROVINCE_ID: 43,
    GEO_ID: 3,
    ZIPCODE: 43160
  },
  {
    DISTRICT_ID: 4314,
    DISTRICT_TH_NAME: "อำเภอสระใคร",
    DISTRICT_ENG_NAME: "Amphoe Sakhrai",
    PROVINCE_ID: 43,
    GEO_ID: 3,
    ZIPCODE: 43100
  },
  {
    DISTRICT_ID: 4315,
    DISTRICT_TH_NAME: "อำเภอเฝ้าไร่",
    DISTRICT_ENG_NAME: "Amphoe Fao Rai",
    PROVINCE_ID: 43,
    GEO_ID: 3,
    ZIPCODE: 43120
  },
  {
    DISTRICT_ID: 4316,
    DISTRICT_TH_NAME: "อำเภอรัตนวาปี",
    DISTRICT_ENG_NAME: "Amphoe Rattanawapi",
    PROVINCE_ID: 43,
    GEO_ID: 3,
    ZIPCODE: 43120
  },
  {
    DISTRICT_ID: 4317,
    DISTRICT_TH_NAME: "อำเภอโพธิ์ตาก",
    DISTRICT_ENG_NAME: "Amphoe Pho Tak",
    PROVINCE_ID: 43,
    GEO_ID: 3,
    ZIPCODE: 43130
  },
  {
    DISTRICT_ID: 4401,
    DISTRICT_TH_NAME: "อำเภอเมืองมหาสารคาม",
    DISTRICT_ENG_NAME: "Amphoe Mueang Maha Sarakham",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44000
  },
  {
    DISTRICT_ID: 4402,
    DISTRICT_TH_NAME: "อำเภอแกดำ",
    DISTRICT_ENG_NAME: "Amphoe Kae Dam",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44190
  },
  {
    DISTRICT_ID: 4403,
    DISTRICT_TH_NAME: "อำเภอโกสุมพิสัย",
    DISTRICT_ENG_NAME: "Amphoe Kosum Phisai",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44140
  },
  {
    DISTRICT_ID: 4404,
    DISTRICT_TH_NAME: "อำเภอกันทรวิชัย",
    DISTRICT_ENG_NAME: "Amphoe Kantharawichai",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44150
  },
  {
    DISTRICT_ID: 4405,
    DISTRICT_TH_NAME: "อำเภอเชียงยืน",
    DISTRICT_ENG_NAME: "Amphoe Chiang Yuen",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44160
  },
  {
    DISTRICT_ID: 4406,
    DISTRICT_TH_NAME: "อำเภอบรบือ",
    DISTRICT_ENG_NAME: "Amphoe Borabue",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44130
  },
  {
    DISTRICT_ID: 4407,
    DISTRICT_TH_NAME: "อำเภอนาเชือก",
    DISTRICT_ENG_NAME: "Amphoe Na Chueak",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44170
  },
  {
    DISTRICT_ID: 4408,
    DISTRICT_TH_NAME: "อำเภอพยัคฆภูมิพิสัย",
    DISTRICT_ENG_NAME: "Amphoe Phayakkhaphum Phisai",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44110
  },
  {
    DISTRICT_ID: 4409,
    DISTRICT_TH_NAME: "อำเภอวาปีปทุม",
    DISTRICT_ENG_NAME: "Amphoe Wapi Pathum",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44120
  },
  {
    DISTRICT_ID: 4410,
    DISTRICT_TH_NAME: "อำเภอนาดูน",
    DISTRICT_ENG_NAME: "Amphoe Na Dun",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44180
  },
  {
    DISTRICT_ID: 4411,
    DISTRICT_TH_NAME: "อำเภอยางสีสุราช",
    DISTRICT_ENG_NAME: "Amphoe Yang Si Surat",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44210
  },
  {
    DISTRICT_ID: 4412,
    DISTRICT_TH_NAME: "อำเภอกุดรัง",
    DISTRICT_ENG_NAME: "Amphoe Kut Rang",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44130
  },
  {
    DISTRICT_ID: 4413,
    DISTRICT_TH_NAME: "อำเภอชื่นชม",
    DISTRICT_ENG_NAME: "Amphoe Chuen Chom",
    PROVINCE_ID: 44,
    GEO_ID: 3,
    ZIPCODE: 44160
  },
  {
    DISTRICT_ID: 4501,
    DISTRICT_TH_NAME: "อำเภอเมืองร้อยเอ็ด",
    DISTRICT_ENG_NAME: "Amphoe Mueang Roi Et",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45000
  },
  {
    DISTRICT_ID: 4502,
    DISTRICT_TH_NAME: "อำเภอเกษตรวิสัย",
    DISTRICT_ENG_NAME: "Amphoe Kaset Wisai",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45150
  },
  {
    DISTRICT_ID: 4503,
    DISTRICT_TH_NAME: "อำเภอปทุมรัตต์",
    DISTRICT_ENG_NAME: "Amphoe Pathum Rat",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45190
  },
  {
    DISTRICT_ID: 4504,
    DISTRICT_TH_NAME: "อำเภอจตุรพักตรพิมาน",
    DISTRICT_ENG_NAME: "Amphoe Chaturaphak Phiman",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45180
  },
  {
    DISTRICT_ID: 4505,
    DISTRICT_TH_NAME: "อำเภอธวัชบุรี",
    DISTRICT_ENG_NAME: "Amphoe Thawat Buri",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45170
  },
  {
    DISTRICT_ID: 4506,
    DISTRICT_TH_NAME: "อำเภอพนมไพร",
    DISTRICT_ENG_NAME: "Amphoe Phanom Phrai",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45140
  },
  {
    DISTRICT_ID: 4507,
    DISTRICT_TH_NAME: "อำเภอโพนทอง",
    DISTRICT_ENG_NAME: "Amphoe Phon Thong",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45110
  },
  {
    DISTRICT_ID: 4508,
    DISTRICT_TH_NAME: "อำเภอโพธิ์ชัย",
    DISTRICT_ENG_NAME: "Amphoe Pho Chai",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45230
  },
  {
    DISTRICT_ID: 4509,
    DISTRICT_TH_NAME: "อำเภอหนองพอก",
    DISTRICT_ENG_NAME: "Amphoe Nong Phok",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45210
  },
  {
    DISTRICT_ID: 4510,
    DISTRICT_TH_NAME: "อำเภอเสลภูมิ",
    DISTRICT_ENG_NAME: "Amphoe Selaphum",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45120
  },
  {
    DISTRICT_ID: 4511,
    DISTRICT_TH_NAME: "อำเภอสุวรรณภูมิ",
    DISTRICT_ENG_NAME: "Amphoe Suwannaphum",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45130
  },
  {
    DISTRICT_ID: 4512,
    DISTRICT_TH_NAME: "อำเภอเมืองสรวง",
    DISTRICT_ENG_NAME: "Amphoe Mueang Suang",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45220
  },
  {
    DISTRICT_ID: 4513,
    DISTRICT_TH_NAME: "อำเภอโพนทราย",
    DISTRICT_ENG_NAME: "Amphoe Phon Sai",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45240
  },
  {
    DISTRICT_ID: 4514,
    DISTRICT_TH_NAME: "อำเภออาจสามารถ",
    DISTRICT_ENG_NAME: "Amphoe At Samat",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45160
  },
  {
    DISTRICT_ID: 4515,
    DISTRICT_TH_NAME: "อำเภอเมยวดี",
    DISTRICT_ENG_NAME: "Amphoe Moei Wadi",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45250
  },
  {
    DISTRICT_ID: 4516,
    DISTRICT_TH_NAME: "อำเภอศรีสมเด็จ",
    DISTRICT_ENG_NAME: "Amphoe Si Somdet",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45280
  },
  {
    DISTRICT_ID: 4517,
    DISTRICT_TH_NAME: "อำเภอจังหาร",
    DISTRICT_ENG_NAME: "Amphoe Changhan",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45000
  },
  {
    DISTRICT_ID: 4518,
    DISTRICT_TH_NAME: "อำเภอเชียงขวัญ",
    DISTRICT_ENG_NAME: "Amphoe Chiang Khwan",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45170
  },
  {
    DISTRICT_ID: 4519,
    DISTRICT_TH_NAME: "อำเภอหนองฮี",
    DISTRICT_ENG_NAME: "Amphoe Nong Hi",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45140
  },
  {
    DISTRICT_ID: 4520,
    DISTRICT_TH_NAME: "อำเภอทุ่งเขาหลวง",
    DISTRICT_ENG_NAME: "Amphoe Thung Khao Luang",
    PROVINCE_ID: 45,
    GEO_ID: 3,
    ZIPCODE: 45170
  },
  {
    DISTRICT_ID: 4601,
    DISTRICT_TH_NAME: "อำเภอเมืองกาฬสินธุ์",
    DISTRICT_ENG_NAME: "Amphoe Mueang Kalasin",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46000
  },
  {
    DISTRICT_ID: 4602,
    DISTRICT_TH_NAME: "อำเภอนามน",
    DISTRICT_ENG_NAME: "Amphoe Na Mon",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46230
  },
  {
    DISTRICT_ID: 4603,
    DISTRICT_TH_NAME: "อำเภอกมลาไสย",
    DISTRICT_ENG_NAME: "Amphoe Kamalasai",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46130
  },
  {
    DISTRICT_ID: 4604,
    DISTRICT_TH_NAME: "อำเภอร่องคำ",
    DISTRICT_ENG_NAME: "Amphoe Rong Kham",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46210
  },
  {
    DISTRICT_ID: 4605,
    DISTRICT_TH_NAME: "อำเภอกุฉินารายณ์",
    DISTRICT_ENG_NAME: "Amphoe Kuchinarai",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46110
  },
  {
    DISTRICT_ID: 4606,
    DISTRICT_TH_NAME: "อำเภอเขาวง",
    DISTRICT_ENG_NAME: "Amphoe Khao Wong",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46160
  },
  {
    DISTRICT_ID: 4607,
    DISTRICT_TH_NAME: "อำเภอยางตลาด",
    DISTRICT_ENG_NAME: "Amphoe Yang Talat",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46120
  },
  {
    DISTRICT_ID: 4608,
    DISTRICT_TH_NAME: "อำเภอห้วยเม็ก",
    DISTRICT_ENG_NAME: "Amphoe Huai Mek",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46170
  },
  {
    DISTRICT_ID: 4609,
    DISTRICT_TH_NAME: "อำเภอสหัสขันธ์",
    DISTRICT_ENG_NAME: "Amphoe Sahatsakhan",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46140
  },
  {
    DISTRICT_ID: 4610,
    DISTRICT_TH_NAME: "อำเภอคำม่วง",
    DISTRICT_ENG_NAME: "Amphoe Kham Muang",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46180
  },
  {
    DISTRICT_ID: 4611,
    DISTRICT_TH_NAME: "อำเภอท่าคันโท",
    DISTRICT_ENG_NAME: "Amphoe Tha Khantho",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46190
  },
  {
    DISTRICT_ID: 4612,
    DISTRICT_TH_NAME: "อำเภอหนองกุงศรี",
    DISTRICT_ENG_NAME: "Amphoe Nong Kung Si",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46220
  },
  {
    DISTRICT_ID: 4613,
    DISTRICT_TH_NAME: "อำเภอสมเด็จ",
    DISTRICT_ENG_NAME: "Amphoe Somdet",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46150
  },
  {
    DISTRICT_ID: 4614,
    DISTRICT_TH_NAME: "อำเภอห้วยผึ้ง",
    DISTRICT_ENG_NAME: "Amphoe Huai Phueng",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46240
  },
  {
    DISTRICT_ID: 4615,
    DISTRICT_TH_NAME: "อำเภอสามชัย",
    DISTRICT_ENG_NAME: "Amphoe Sam Chai",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46180
  },
  {
    DISTRICT_ID: 4616,
    DISTRICT_TH_NAME: "อำเภอนาคู",
    DISTRICT_ENG_NAME: "Amphoe Na Khu",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46160
  },
  {
    DISTRICT_ID: 4617,
    DISTRICT_TH_NAME: "อำเภอดอนจาน",
    DISTRICT_ENG_NAME: "Amphoe Don Chan",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46000
  },
  {
    DISTRICT_ID: 4618,
    DISTRICT_TH_NAME: "อำเภอฆ้องชัย",
    DISTRICT_ENG_NAME: "Amphoe Khong Chai",
    PROVINCE_ID: 46,
    GEO_ID: 3,
    ZIPCODE: 46130
  },
  {
    DISTRICT_ID: 4701,
    DISTRICT_TH_NAME: "อำเภอเมืองสกลนคร",
    DISTRICT_ENG_NAME: "Amphoe Mueang Sakon Nakhon",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47230
  },
  {
    DISTRICT_ID: 4702,
    DISTRICT_TH_NAME: "อำเภอกุสุมาลย์",
    DISTRICT_ENG_NAME: "Amphoe Kusuman",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47230
  },
  {
    DISTRICT_ID: 4703,
    DISTRICT_TH_NAME: "อำเภอกุดบาก",
    DISTRICT_ENG_NAME: "Amphoe Kut Bak",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47180
  },
  {
    DISTRICT_ID: 4704,
    DISTRICT_TH_NAME: "อำเภอพรรณานิคม",
    DISTRICT_ENG_NAME: "Amphoe Phanna Nikhom",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47220
  },
  {
    DISTRICT_ID: 4705,
    DISTRICT_TH_NAME: "อำเภอพังโคน",
    DISTRICT_ENG_NAME: "Amphoe Phang Khon",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47160
  },
  {
    DISTRICT_ID: 4706,
    DISTRICT_TH_NAME: "อำเภอวาริชภูมิ",
    DISTRICT_ENG_NAME: "Amphoe Waritchaphum",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47150
  },
  {
    DISTRICT_ID: 4707,
    DISTRICT_TH_NAME: "อำเภอนิคมน้ำอูน",
    DISTRICT_ENG_NAME: "Amphoe Nikhom Nam Un",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47270
  },
  {
    DISTRICT_ID: 4708,
    DISTRICT_TH_NAME: "อำเภอวานรนิวาส",
    DISTRICT_ENG_NAME: "Amphoe Wanon Niwat",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47120
  },
  {
    DISTRICT_ID: 4709,
    DISTRICT_TH_NAME: "อำเภอคำตากล้า",
    DISTRICT_ENG_NAME: "Amphoe Kham Ta Kla",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47250
  },
  {
    DISTRICT_ID: 4710,
    DISTRICT_TH_NAME: "อำเภอบ้านม่วง",
    DISTRICT_ENG_NAME: "Amphoe Ban Muang",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47140
  },
  {
    DISTRICT_ID: 4711,
    DISTRICT_TH_NAME: "อำเภออากาศอำนวย",
    DISTRICT_ENG_NAME: "Amphoe Akat Amnuai",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47170
  },
  {
    DISTRICT_ID: 4712,
    DISTRICT_TH_NAME: "อำเภอสว่างแดนดิน",
    DISTRICT_ENG_NAME: "Amphoe Sawang Daen Din",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47240
  },
  {
    DISTRICT_ID: 4713,
    DISTRICT_TH_NAME: "อำเภอส่องดาว",
    DISTRICT_ENG_NAME: "Amphoe Song Dao",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47190
  },
  {
    DISTRICT_ID: 4714,
    DISTRICT_TH_NAME: "อำเภอเต่างอย",
    DISTRICT_ENG_NAME: "Amphoe Tao Ngoi",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47260
  },
  {
    DISTRICT_ID: 4715,
    DISTRICT_TH_NAME: "อำเภอโคกศรีสุพรรณ",
    DISTRICT_ENG_NAME: "Amphoe Khok Si Suphan",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47280
  },
  {
    DISTRICT_ID: 4716,
    DISTRICT_TH_NAME: "อำเภอเจริญศิลป์",
    DISTRICT_ENG_NAME: "Amphoe Charoen Sin",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47290
  },
  {
    DISTRICT_ID: 4717,
    DISTRICT_TH_NAME: "อำเภอโพนนาแก้ว",
    DISTRICT_ENG_NAME: "Amphoe Phon Na Kaeo",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47230
  },
  {
    DISTRICT_ID: 4718,
    DISTRICT_TH_NAME: "อำเภอภูพาน",
    DISTRICT_ENG_NAME: "Amphoe Phu Phan",
    PROVINCE_ID: 47,
    GEO_ID: 3,
    ZIPCODE: 47180
  },
  {
    DISTRICT_ID: 4801,
    DISTRICT_TH_NAME: "อำเภอเมืองนครพนม",
    DISTRICT_ENG_NAME: "Amphoe Mueang Nakhon Phanom",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48000
  },
  {
    DISTRICT_ID: 4802,
    DISTRICT_TH_NAME: "อำเภอปลาปาก",
    DISTRICT_ENG_NAME: "Amphoe Pla Pak",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48160
  },
  {
    DISTRICT_ID: 4803,
    DISTRICT_TH_NAME: "อำเภอท่าอุเทน",
    DISTRICT_ENG_NAME: "Amphoe Tha Uthen",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48120
  },
  {
    DISTRICT_ID: 4804,
    DISTRICT_TH_NAME: "อำเภอบ้านแพง",
    DISTRICT_ENG_NAME: "Amphoe Ban Phaeng",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48140
  },
  {
    DISTRICT_ID: 4805,
    DISTRICT_TH_NAME: "อำเภอธาตุพนม",
    DISTRICT_ENG_NAME: "Amphoe That Phanom",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48110
  },
  {
    DISTRICT_ID: 4806,
    DISTRICT_TH_NAME: "อำเภอเรณูนคร",
    DISTRICT_ENG_NAME: "Amphoe Renu Nakhon",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48170
  },
  {
    DISTRICT_ID: 4807,
    DISTRICT_TH_NAME: "อำเภอนาแก",
    DISTRICT_ENG_NAME: "Amphoe Na Kae",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48130
  },
  {
    DISTRICT_ID: 4808,
    DISTRICT_TH_NAME: "อำเภอศรีสงคราม",
    DISTRICT_ENG_NAME: "Amphoe Si Songkhram",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48150
  },
  {
    DISTRICT_ID: 4809,
    DISTRICT_TH_NAME: "อำเภอนาหว้า",
    DISTRICT_ENG_NAME: "Amphoe Na Wa",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48180
  },
  {
    DISTRICT_ID: 4810,
    DISTRICT_TH_NAME: "อำเภอโพนสวรรค์",
    DISTRICT_ENG_NAME: "Amphoe Phon Sawan",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48190
  },
  {
    DISTRICT_ID: 4811,
    DISTRICT_TH_NAME: "อำเภอนาทม",
    DISTRICT_ENG_NAME: "Amphoe Na Thom",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48140
  },
  {
    DISTRICT_ID: 4812,
    DISTRICT_TH_NAME: "อำเภอวังยาง",
    DISTRICT_ENG_NAME: "Amphoe Wang Yang",
    PROVINCE_ID: 48,
    GEO_ID: 3,
    ZIPCODE: 48130
  },
  {
    DISTRICT_ID: 4901,
    DISTRICT_TH_NAME: "อำเภอเมืองมุกดาหาร",
    DISTRICT_ENG_NAME: "Amphoe Mueang Mukdahan",
    PROVINCE_ID: 49,
    GEO_ID: 3,
    ZIPCODE: 49000
  },
  {
    DISTRICT_ID: 4902,
    DISTRICT_TH_NAME: "อำเภอนิคมคำสร้อย",
    DISTRICT_ENG_NAME: "Amphoe Nikhom Kham Soi",
    PROVINCE_ID: 49,
    GEO_ID: 3,
    ZIPCODE: 49130
  },
  {
    DISTRICT_ID: 4903,
    DISTRICT_TH_NAME: "อำเภอดอนตาล",
    DISTRICT_ENG_NAME: "Amphoe Don Tan",
    PROVINCE_ID: 49,
    GEO_ID: 3,
    ZIPCODE: 49120
  },
  {
    DISTRICT_ID: 4904,
    DISTRICT_TH_NAME: "อำเภอดงหลวง",
    DISTRICT_ENG_NAME: "Amphoe Dong Luang",
    PROVINCE_ID: 49,
    GEO_ID: 3,
    ZIPCODE: 49140
  },
  {
    DISTRICT_ID: 4905,
    DISTRICT_TH_NAME: "อำเภอคำชะอี",
    DISTRICT_ENG_NAME: "Amphoe Khamcha-i",
    PROVINCE_ID: 49,
    GEO_ID: 3,
    ZIPCODE: 49110
  },
  {
    DISTRICT_ID: 4906,
    DISTRICT_TH_NAME: "อำเภอหว้านใหญ่",
    DISTRICT_ENG_NAME: "Amphoe Wan Yai",
    PROVINCE_ID: 49,
    GEO_ID: 3,
    ZIPCODE: 49150
  },
  {
    DISTRICT_ID: 4907,
    DISTRICT_TH_NAME: "อำเภอหนองสูง",
    DISTRICT_ENG_NAME: "Amphoe Nong Sung",
    PROVINCE_ID: 49,
    GEO_ID: 3,
    ZIPCODE: 49160
  },
  {
    DISTRICT_ID: 5001,
    DISTRICT_TH_NAME: "อำเภอเมืองเชียงใหม่",
    DISTRICT_ENG_NAME: "Amphoe Mueang Chiang Mai",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50300
  },
  {
    DISTRICT_ID: 5002,
    DISTRICT_TH_NAME: "อำเภอจอมทอง",
    DISTRICT_ENG_NAME: "Amphoe Chom Thong",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50240
  },
  {
    DISTRICT_ID: 5003,
    DISTRICT_TH_NAME: "อำเภอแม่แจ่ม",
    DISTRICT_ENG_NAME: "Amphoe Mae Chaem",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50270
  },
  {
    DISTRICT_ID: 5004,
    DISTRICT_TH_NAME: "อำเภอเชียงดาว",
    DISTRICT_ENG_NAME: "Amphoe Chiang Dao",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50170
  },
  {
    DISTRICT_ID: 5005,
    DISTRICT_TH_NAME: "อำเภอดอยสะเก็ด",
    DISTRICT_ENG_NAME: "Amphoe Doi Saket",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50220
  },
  {
    DISTRICT_ID: 5006,
    DISTRICT_TH_NAME: "อำเภอแม่แตง",
    DISTRICT_ENG_NAME: "Amphoe Mae Taeng",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50330
  },
  {
    DISTRICT_ID: 5007,
    DISTRICT_TH_NAME: "อำเภอแม่ริม",
    DISTRICT_ENG_NAME: "Amphoe Mae Rim",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50330
  },
  {
    DISTRICT_ID: 5008,
    DISTRICT_TH_NAME: "อำเภอสะเมิง",
    DISTRICT_ENG_NAME: "Amphoe Samoeng",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50250
  },
  {
    DISTRICT_ID: 5009,
    DISTRICT_TH_NAME: "อำเภอฝาง",
    DISTRICT_ENG_NAME: "Amphoe Fang",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50320
  },
  {
    DISTRICT_ID: 5010,
    DISTRICT_TH_NAME: "อำเภอแม่อาย",
    DISTRICT_ENG_NAME: "Amphoe Mae Ai",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50280
  },
  {
    DISTRICT_ID: 5011,
    DISTRICT_TH_NAME: "อำเภอพร้าว",
    DISTRICT_ENG_NAME: "Amphoe Phrao",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50190
  },
  {
    DISTRICT_ID: 5012,
    DISTRICT_TH_NAME: "อำเภอสันป่าตอง",
    DISTRICT_ENG_NAME: "Amphoe San Pa Tong",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50120
  },
  {
    DISTRICT_ID: 5013,
    DISTRICT_TH_NAME: "อำเภอสันกำแพง",
    DISTRICT_ENG_NAME: "Amphoe San Kamphaeng",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50130
  },
  {
    DISTRICT_ID: 5014,
    DISTRICT_TH_NAME: "อำเภอสันทราย",
    DISTRICT_ENG_NAME: "Amphoe San Sai",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50290
  },
  {
    DISTRICT_ID: 5015,
    DISTRICT_TH_NAME: "อำเภอหางดง",
    DISTRICT_ENG_NAME: "Amphoe Hang Dong",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50340
  },
  {
    DISTRICT_ID: 5016,
    DISTRICT_TH_NAME: "อำเภอฮอด",
    DISTRICT_ENG_NAME: "Amphoe Hot",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50240
  },
  {
    DISTRICT_ID: 5017,
    DISTRICT_TH_NAME: "อำเภอดอยเต่า",
    DISTRICT_ENG_NAME: "Amphoe Doi Tao",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50260
  },
  {
    DISTRICT_ID: 5018,
    DISTRICT_TH_NAME: "อำเภออมก๋อย",
    DISTRICT_ENG_NAME: "Amphoe Omkoi",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50310
  },
  {
    DISTRICT_ID: 5019,
    DISTRICT_TH_NAME: "อำเภอสารภี",
    DISTRICT_ENG_NAME: "Amphoe Saraphi",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50140
  },
  {
    DISTRICT_ID: 5020,
    DISTRICT_TH_NAME: "อำเภอเวียงแหง",
    DISTRICT_ENG_NAME: "Amphoe Wiang Haeng",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50350
  },
  {
    DISTRICT_ID: 5021,
    DISTRICT_TH_NAME: "อำเภอไชยปราการ",
    DISTRICT_ENG_NAME: "Amphoe Chai Prakan",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50320
  },
  {
    DISTRICT_ID: 5022,
    DISTRICT_TH_NAME: "อำเภอแม่วาง",
    DISTRICT_ENG_NAME: "Amphoe Mae Wang",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50360
  },
  {
    DISTRICT_ID: 5023,
    DISTRICT_TH_NAME: "อำเภอแม่ออน",
    DISTRICT_ENG_NAME: "Amphoe Mae On",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50130
  },
  {
    DISTRICT_ID: 5024,
    DISTRICT_TH_NAME: "อำเภอดอยหล่อ",
    DISTRICT_ENG_NAME: "Amphoe Doi Lo",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 50160
  },
  {
    DISTRICT_ID: 5025,
    DISTRICT_TH_NAME: "อำเภอกัลยาณิวัฒนา",
    DISTRICT_ENG_NAME: "Amphoe Galayani Vadhana",
    PROVINCE_ID: 50,
    GEO_ID: 4,
    ZIPCODE: 58130
  },
  {
    DISTRICT_ID: 5101,
    DISTRICT_TH_NAME: "อำเภอเมืองลำพูน",
    DISTRICT_ENG_NAME: "Amphoe Mueang Lamphun",
    PROVINCE_ID: 51,
    GEO_ID: 4,
    ZIPCODE: 51150
  },
  {
    DISTRICT_ID: 5102,
    DISTRICT_TH_NAME: "อำเภอแม่ทา",
    DISTRICT_ENG_NAME: "Amphoe Mae Tha",
    PROVINCE_ID: 51,
    GEO_ID: 4,
    ZIPCODE: 51170
  },
  {
    DISTRICT_ID: 5103,
    DISTRICT_TH_NAME: "อำเภอบ้านโฮ่ง",
    DISTRICT_ENG_NAME: "Amphoe Ban Hong",
    PROVINCE_ID: 51,
    GEO_ID: 4,
    ZIPCODE: 51130
  },
  {
    DISTRICT_ID: 5104,
    DISTRICT_TH_NAME: "อำเภอลี้",
    DISTRICT_ENG_NAME: "Amphoe Li",
    PROVINCE_ID: 51,
    GEO_ID: 4,
    ZIPCODE: 51110
  },
  {
    DISTRICT_ID: 5105,
    DISTRICT_TH_NAME: "อำเภอทุ่งหัวช้าง",
    DISTRICT_ENG_NAME: "Amphoe Thung Hua Chang",
    PROVINCE_ID: 51,
    GEO_ID: 4,
    ZIPCODE: 51160
  },
  {
    DISTRICT_ID: 5106,
    DISTRICT_TH_NAME: "อำเภอป่าซาง",
    DISTRICT_ENG_NAME: "Amphoe Pa Sang",
    PROVINCE_ID: 51,
    GEO_ID: 4,
    ZIPCODE: 51120
  },
  {
    DISTRICT_ID: 5107,
    DISTRICT_TH_NAME: "อำเภอบ้านธิ",
    DISTRICT_ENG_NAME: "Amphoe Ban Thi",
    PROVINCE_ID: 51,
    GEO_ID: 4,
    ZIPCODE: 51180
  },
  {
    DISTRICT_ID: 5108,
    DISTRICT_TH_NAME: "อำเภอเวียงหนองล่อง",
    DISTRICT_ENG_NAME: "Amphoe Wiang Nong Long",
    PROVINCE_ID: 51,
    GEO_ID: 4,
    ZIPCODE: 51120
  },
  {
    DISTRICT_ID: 5201,
    DISTRICT_TH_NAME: "อำเภอเมืองลำปาง",
    DISTRICT_ENG_NAME: "Amphoe Mueang Lampang",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52100
  },
  {
    DISTRICT_ID: 5202,
    DISTRICT_TH_NAME: "อำเภอแม่เมาะ",
    DISTRICT_ENG_NAME: "Amphoe Mae Mo",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52220
  },
  {
    DISTRICT_ID: 5203,
    DISTRICT_TH_NAME: "อำเภอเกาะคา",
    DISTRICT_ENG_NAME: "Amphoe Ko Kha",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52130
  },
  {
    DISTRICT_ID: 5204,
    DISTRICT_TH_NAME: "อำเภอเสริมงาม",
    DISTRICT_ENG_NAME: "Amphoe Soem Ngam",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52210
  },
  {
    DISTRICT_ID: 5205,
    DISTRICT_TH_NAME: "อำเภองาว",
    DISTRICT_ENG_NAME: "Amphoe Ngao",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52110
  },
  {
    DISTRICT_ID: 5206,
    DISTRICT_TH_NAME: "อำเภอแจ้ห่ม",
    DISTRICT_ENG_NAME: "Amphoe Chae Hom",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52120
  },
  {
    DISTRICT_ID: 5207,
    DISTRICT_TH_NAME: "อำเภอวังเหนือ",
    DISTRICT_ENG_NAME: "Amphoe Wang Nuea",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52140
  },
  {
    DISTRICT_ID: 5208,
    DISTRICT_TH_NAME: "อำเภอเถิน",
    DISTRICT_ENG_NAME: "Amphoe Thoen",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52230
  },
  {
    DISTRICT_ID: 5209,
    DISTRICT_TH_NAME: "อำเภอแม่พริก",
    DISTRICT_ENG_NAME: "Amphoe Mae Phrik",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52230
  },
  {
    DISTRICT_ID: 5210,
    DISTRICT_TH_NAME: "อำเภอแม่ทะ",
    DISTRICT_ENG_NAME: "Amphoe Mae Tha",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52150
  },
  {
    DISTRICT_ID: 5211,
    DISTRICT_TH_NAME: "อำเภอสบปราบ",
    DISTRICT_ENG_NAME: "Amphoe Sop Prap",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52170
  },
  {
    DISTRICT_ID: 5212,
    DISTRICT_TH_NAME: "อำเภอห้างฉัตร",
    DISTRICT_ENG_NAME: "Amphoe Hang Chat",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52190
  },
  {
    DISTRICT_ID: 5213,
    DISTRICT_TH_NAME: "อำเภอเมืองปาน",
    DISTRICT_ENG_NAME: "Amphoe Mueang Pan",
    PROVINCE_ID: 52,
    GEO_ID: 4,
    ZIPCODE: 52240
  },
  {
    DISTRICT_ID: 5301,
    DISTRICT_TH_NAME: "อำเภอเมืองอุตรดิตถ์",
    DISTRICT_ENG_NAME: "Amphoe Mueang Uttaradit",
    PROVINCE_ID: 53,
    GEO_ID: 4,
    ZIPCODE: 53170
  },
  {
    DISTRICT_ID: 5302,
    DISTRICT_TH_NAME: "อำเภอตรอน",
    DISTRICT_ENG_NAME: "Amphoe Tron",
    PROVINCE_ID: 53,
    GEO_ID: 4,
    ZIPCODE: 53140
  },
  {
    DISTRICT_ID: 5303,
    DISTRICT_TH_NAME: "อำเภอท่าปลา",
    DISTRICT_ENG_NAME: "Amphoe Tha Pla",
    PROVINCE_ID: 53,
    GEO_ID: 4,
    ZIPCODE: 53190
  },
  {
    DISTRICT_ID: 5304,
    DISTRICT_TH_NAME: "อำเภอน้ำปาด",
    DISTRICT_ENG_NAME: "Amphoe Nam Pat",
    PROVINCE_ID: 53,
    GEO_ID: 4,
    ZIPCODE: 53110
  },
  {
    DISTRICT_ID: 5305,
    DISTRICT_TH_NAME: "อำเภอฟากท่า",
    DISTRICT_ENG_NAME: "Amphoe Fak Tha",
    PROVINCE_ID: 53,
    GEO_ID: 4,
    ZIPCODE: 53160
  },
  {
    DISTRICT_ID: 5306,
    DISTRICT_TH_NAME: "อำเภอบ้านโคก",
    DISTRICT_ENG_NAME: "Amphoe Ban Khok",
    PROVINCE_ID: 53,
    GEO_ID: 4,
    ZIPCODE: 53180
  },
  {
    DISTRICT_ID: 5307,
    DISTRICT_TH_NAME: "อำเภอพิชัย",
    DISTRICT_ENG_NAME: "Amphoe Phichai",
    PROVINCE_ID: 53,
    GEO_ID: 4,
    ZIPCODE: 53220
  },
  {
    DISTRICT_ID: 5308,
    DISTRICT_TH_NAME: "อำเภอลับแล",
    DISTRICT_ENG_NAME: "Amphoe Laplae",
    PROVINCE_ID: 53,
    GEO_ID: 4,
    ZIPCODE: 53210
  },
  {
    DISTRICT_ID: 5309,
    DISTRICT_TH_NAME: "อำเภอทองแสนขัน",
    DISTRICT_ENG_NAME: "Amphoe Thong Saen Khan",
    PROVINCE_ID: 53,
    GEO_ID: 4,
    ZIPCODE: 53230
  },
  {
    DISTRICT_ID: 5401,
    DISTRICT_TH_NAME: "อำเภอเมืองแพร่",
    DISTRICT_ENG_NAME: "Amphoe Mueang Phrae",
    PROVINCE_ID: 54,
    GEO_ID: 4,
    ZIPCODE: 54000
  },
  {
    DISTRICT_ID: 5402,
    DISTRICT_TH_NAME: "อำเภอร้องกวาง",
    DISTRICT_ENG_NAME: "Amphoe Rong Kwang",
    PROVINCE_ID: 54,
    GEO_ID: 4,
    ZIPCODE: 54140
  },
  {
    DISTRICT_ID: 5403,
    DISTRICT_TH_NAME: "อำเภอลอง",
    DISTRICT_ENG_NAME: "Amphoe Long",
    PROVINCE_ID: 54,
    GEO_ID: 4,
    ZIPCODE: 54150
  },
  {
    DISTRICT_ID: 5404,
    DISTRICT_TH_NAME: "อำเภอสูงเม่น",
    DISTRICT_ENG_NAME: "Amphoe Sung Men",
    PROVINCE_ID: 54,
    GEO_ID: 4,
    ZIPCODE: 54130
  },
  {
    DISTRICT_ID: 5405,
    DISTRICT_TH_NAME: "อำเภอเด่นชัย",
    DISTRICT_ENG_NAME: "Amphoe Den Chai",
    PROVINCE_ID: 54,
    GEO_ID: 4,
    ZIPCODE: 54110
  },
  {
    DISTRICT_ID: 5406,
    DISTRICT_TH_NAME: "อำเภอสอง",
    DISTRICT_ENG_NAME: "Amphoe Song",
    PROVINCE_ID: 54,
    GEO_ID: 4,
    ZIPCODE: 54120
  },
  {
    DISTRICT_ID: 5407,
    DISTRICT_TH_NAME: "อำเภอวังชิ้น",
    DISTRICT_ENG_NAME: "Amphoe Wang Chin",
    PROVINCE_ID: 54,
    GEO_ID: 4,
    ZIPCODE: 54160
  },
  {
    DISTRICT_ID: 5408,
    DISTRICT_TH_NAME: "อำเภอหนองม่วงไข่",
    DISTRICT_ENG_NAME: "Amphoe Nong Muang Khai",
    PROVINCE_ID: 54,
    GEO_ID: 4,
    ZIPCODE: 54170
  },
  {
    DISTRICT_ID: 5501,
    DISTRICT_TH_NAME: "อำเภอเมืองน่าน",
    DISTRICT_ENG_NAME: "Amphoe Mueang Nan",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55000
  },
  {
    DISTRICT_ID: 5502,
    DISTRICT_TH_NAME: "อำเภอแม่จริม",
    DISTRICT_ENG_NAME: "Amphoe Mae Charim",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55170
  },
  {
    DISTRICT_ID: 5503,
    DISTRICT_TH_NAME: "อำเภอบ้านหลวง",
    DISTRICT_ENG_NAME: "Amphoe Ban Luang",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55190
  },
  {
    DISTRICT_ID: 5504,
    DISTRICT_TH_NAME: "อำเภอนาน้อย",
    DISTRICT_ENG_NAME: "Amphoe Na Noi",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55150
  },
  {
    DISTRICT_ID: 5505,
    DISTRICT_TH_NAME: "อำเภอปัว",
    DISTRICT_ENG_NAME: "Amphoe Pua",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55120
  },
  {
    DISTRICT_ID: 5506,
    DISTRICT_TH_NAME: "อำเภอท่าวังผา",
    DISTRICT_ENG_NAME: "Amphoe Tha Wang Pha",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55140
  },
  {
    DISTRICT_ID: 5507,
    DISTRICT_TH_NAME: "อำเภอเวียงสา",
    DISTRICT_ENG_NAME: "Amphoe Wiang Sa",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55110
  },
  {
    DISTRICT_ID: 5508,
    DISTRICT_TH_NAME: "อำเภอทุ่งช้าง",
    DISTRICT_ENG_NAME: "Amphoe Thung Chang",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55130
  },
  {
    DISTRICT_ID: 5509,
    DISTRICT_TH_NAME: "อำเภอเชียงกลาง",
    DISTRICT_ENG_NAME: "Amphoe Chiang Klang",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55160
  },
  {
    DISTRICT_ID: 5510,
    DISTRICT_TH_NAME: "อำเภอนาหมื่น",
    DISTRICT_ENG_NAME: "Amphoe Na Muen",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55180
  },
  {
    DISTRICT_ID: 5511,
    DISTRICT_TH_NAME: "อำเภอสันติสุข",
    DISTRICT_ENG_NAME: "Amphoe Santi Suk",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55210
  },
  {
    DISTRICT_ID: 5512,
    DISTRICT_TH_NAME: "อำเภอบ่อเกลือ",
    DISTRICT_ENG_NAME: "Amphoe Bo Kluea",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55220
  },
  {
    DISTRICT_ID: 5513,
    DISTRICT_TH_NAME: "อำเภอสองแคว",
    DISTRICT_ENG_NAME: "Amphoe Song Khwae",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55160
  },
  {
    DISTRICT_ID: 5514,
    DISTRICT_TH_NAME: "อำเภอภูเพียง",
    DISTRICT_ENG_NAME: "Amphoe Phu Phiang",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55000
  },
  {
    DISTRICT_ID: 5515,
    DISTRICT_TH_NAME: "อำเภอเฉลิมพระเกียรติ",
    DISTRICT_ENG_NAME: "Amphoe Chaloem Phra Kiat",
    PROVINCE_ID: 55,
    GEO_ID: 4,
    ZIPCODE: 55220
  },
  {
    DISTRICT_ID: 5601,
    DISTRICT_TH_NAME: "อำเภอเมืองพะเยา",
    DISTRICT_ENG_NAME: "Amphoe Mueang Phayao",
    PROVINCE_ID: 56,
    GEO_ID: 4,
    ZIPCODE: 56000
  },
  {
    DISTRICT_ID: 5602,
    DISTRICT_TH_NAME: "อำเภอจุน",
    DISTRICT_ENG_NAME: "Amphoe Chun",
    PROVINCE_ID: 56,
    GEO_ID: 4,
    ZIPCODE: 56150
  },
  {
    DISTRICT_ID: 5603,
    DISTRICT_TH_NAME: "อำเภอเชียงคำ",
    DISTRICT_ENG_NAME: "Amphoe Chiang Kham",
    PROVINCE_ID: 56,
    GEO_ID: 4,
    ZIPCODE: 56110
  },
  {
    DISTRICT_ID: 5604,
    DISTRICT_TH_NAME: "อำเภอเชียงม่วน",
    DISTRICT_ENG_NAME: "Amphoe Chiang Muan",
    PROVINCE_ID: 56,
    GEO_ID: 4,
    ZIPCODE: 56160
  },
  {
    DISTRICT_ID: 5605,
    DISTRICT_TH_NAME: "อำเภอดอกคำใต้",
    DISTRICT_ENG_NAME: "Amphoe Dok Khamtai",
    PROVINCE_ID: 56,
    GEO_ID: 4,
    ZIPCODE: 56120
  },
  {
    DISTRICT_ID: 5606,
    DISTRICT_TH_NAME: "อำเภอปง",
    DISTRICT_ENG_NAME: "Amphoe Pong",
    PROVINCE_ID: 56,
    GEO_ID: 4,
    ZIPCODE: 56140
  },
  {
    DISTRICT_ID: 5607,
    DISTRICT_TH_NAME: "อำเภอแม่ใจ",
    DISTRICT_ENG_NAME: "Amphoe Mae Chai",
    PROVINCE_ID: 56,
    GEO_ID: 4,
    ZIPCODE: 56130
  },
  {
    DISTRICT_ID: 5608,
    DISTRICT_TH_NAME: "อำเภอภูซาง",
    DISTRICT_ENG_NAME: "Amphoe Phu Sang",
    PROVINCE_ID: 56,
    GEO_ID: 4,
    ZIPCODE: 56110
  },
  {
    DISTRICT_ID: 5609,
    DISTRICT_TH_NAME: "อำเภอภูกามยาว",
    DISTRICT_ENG_NAME: "Amphoe Phu Kamyao",
    PROVINCE_ID: 56,
    GEO_ID: 4,
    ZIPCODE: 56000
  },
  {
    DISTRICT_ID: 5701,
    DISTRICT_TH_NAME: "อำเภอเมืองเชียงราย",
    DISTRICT_ENG_NAME: "Amphoe Mueang Chiang Rai",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57100
  },
  {
    DISTRICT_ID: 5702,
    DISTRICT_TH_NAME: "อำเภอเวียงชัย",
    DISTRICT_ENG_NAME: "Amphoe Wiang Chai",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57210
  },
  {
    DISTRICT_ID: 5703,
    DISTRICT_TH_NAME: "อำเภอเชียงของ",
    DISTRICT_ENG_NAME: "Amphoe Chiang Khong",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57140
  },
  {
    DISTRICT_ID: 5704,
    DISTRICT_TH_NAME: "อำเภอเทิง",
    DISTRICT_ENG_NAME: "Amphoe Thoeng",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57230
  },
  {
    DISTRICT_ID: 5705,
    DISTRICT_TH_NAME: "อำเภอพาน",
    DISTRICT_ENG_NAME: "Amphoe Phan",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57280
  },
  {
    DISTRICT_ID: 5706,
    DISTRICT_TH_NAME: "อำเภอป่าแดด",
    DISTRICT_ENG_NAME: "Amphoe Pa Daet",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57190
  },
  {
    DISTRICT_ID: 5707,
    DISTRICT_TH_NAME: "อำเภอแม่จัน",
    DISTRICT_ENG_NAME: "Amphoe Mae Chan",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57270
  },
  {
    DISTRICT_ID: 5708,
    DISTRICT_TH_NAME: "อำเภอเชียงแสน",
    DISTRICT_ENG_NAME: "Amphoe Chiang Saen",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57150
  },
  {
    DISTRICT_ID: 5709,
    DISTRICT_TH_NAME: "อำเภอแม่สาย",
    DISTRICT_ENG_NAME: "Amphoe Mae Sai",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57220
  },
  {
    DISTRICT_ID: 5710,
    DISTRICT_TH_NAME: "อำเภอแม่สรวย",
    DISTRICT_ENG_NAME: "Amphoe Mae Suai",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57180
  },
  {
    DISTRICT_ID: 5711,
    DISTRICT_TH_NAME: "อำเภอเวียงป่าเป้า",
    DISTRICT_ENG_NAME: "Amphoe Wiang Pa Pao",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57260
  },
  {
    DISTRICT_ID: 5712,
    DISTRICT_TH_NAME: "อำเภอพญาเม็งราย",
    DISTRICT_ENG_NAME: "Amphoe Phaya Mengrai",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57290
  },
  {
    DISTRICT_ID: 5713,
    DISTRICT_TH_NAME: "อำเภอเวียงแก่น",
    DISTRICT_ENG_NAME: "Amphoe Wiang Kaen",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57310
  },
  {
    DISTRICT_ID: 5714,
    DISTRICT_TH_NAME: "อำเภอขุนตาล",
    DISTRICT_ENG_NAME: "Amphoe Khun Tan",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57340
  },
  {
    DISTRICT_ID: 5715,
    DISTRICT_TH_NAME: "อำเภอแม่ฟ้าหลวง",
    DISTRICT_ENG_NAME: "Amphoe Mae Fa Luang",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57240
  },
  {
    DISTRICT_ID: 5716,
    DISTRICT_TH_NAME: "อำเภอแม่ลาว",
    DISTRICT_ENG_NAME: "Amphoe Mae Lao",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57250
  },
  {
    DISTRICT_ID: 5717,
    DISTRICT_TH_NAME: "อำเภอเวียงเชียงรุ้ง",
    DISTRICT_ENG_NAME: "Amphoe Wiang Chiang Rung",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57210
  },
  {
    DISTRICT_ID: 5718,
    DISTRICT_TH_NAME: "อำเภอดอยหลวง",
    DISTRICT_ENG_NAME: "Amphoe Doi Luang",
    PROVINCE_ID: 57,
    GEO_ID: 4,
    ZIPCODE: 57110
  },
  {
    DISTRICT_ID: 5801,
    DISTRICT_TH_NAME: "อำเภอเมืองแม่ฮ่องสอน",
    DISTRICT_ENG_NAME: "Amphoe Mueang Mae Hong Son",
    PROVINCE_ID: 58,
    GEO_ID: 4,
    ZIPCODE: 58000
  },
  {
    DISTRICT_ID: 5802,
    DISTRICT_TH_NAME: "อำเภอขุนยวม",
    DISTRICT_ENG_NAME: "Amphoe Khun Yuam",
    PROVINCE_ID: 58,
    GEO_ID: 4,
    ZIPCODE: 58140
  },
  {
    DISTRICT_ID: 5803,
    DISTRICT_TH_NAME: "อำเภอปาย",
    DISTRICT_ENG_NAME: "Amphoe Pai",
    PROVINCE_ID: 58,
    GEO_ID: 4,
    ZIPCODE: 58130
  },
  {
    DISTRICT_ID: 5804,
    DISTRICT_TH_NAME: "อำเภอแม่สะเรียง",
    DISTRICT_ENG_NAME: "Amphoe Mae Sariang",
    PROVINCE_ID: 58,
    GEO_ID: 4,
    ZIPCODE: 58110
  },
  {
    DISTRICT_ID: 5805,
    DISTRICT_TH_NAME: "อำเภอแม่ลาน้อย",
    DISTRICT_ENG_NAME: "Amphoe Mae La Noi",
    PROVINCE_ID: 58,
    GEO_ID: 4,
    ZIPCODE: 58120
  },
  {
    DISTRICT_ID: 5806,
    DISTRICT_TH_NAME: "อำเภอสบเมย",
    DISTRICT_ENG_NAME: "Amphoe Sop Moei",
    PROVINCE_ID: 58,
    GEO_ID: 4,
    ZIPCODE: 58110
  },
  {
    DISTRICT_ID: 5807,
    DISTRICT_TH_NAME: "อำเภอปางมะผ้า",
    DISTRICT_ENG_NAME: "Amphoe Pang Mapha",
    PROVINCE_ID: 58,
    GEO_ID: 4,
    ZIPCODE: 58150
  },
  {
    DISTRICT_ID: 6001,
    DISTRICT_TH_NAME: "อำเภอเมืองนครสวรรค์",
    DISTRICT_ENG_NAME: "Amphoe Mueang Nakhon Sawan",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60240
  },
  {
    DISTRICT_ID: 6002,
    DISTRICT_TH_NAME: "อำเภอโกรกพระ",
    DISTRICT_ENG_NAME: "Amphoe Krok Phra",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60170
  },
  {
    DISTRICT_ID: 6003,
    DISTRICT_TH_NAME: "อำเภอชุมแสง",
    DISTRICT_ENG_NAME: "Amphoe Chum Saeng",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60250
  },
  {
    DISTRICT_ID: 6004,
    DISTRICT_TH_NAME: "อำเภอหนองบัว",
    DISTRICT_ENG_NAME: "Amphoe Nong Bua",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60110
  },
  {
    DISTRICT_ID: 6005,
    DISTRICT_TH_NAME: "อำเภอบรรพตพิสัย",
    DISTRICT_ENG_NAME: "Amphoe Banphot Phisai",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60180
  },
  {
    DISTRICT_ID: 6006,
    DISTRICT_TH_NAME: "อำเภอเก้าเลี้ยว",
    DISTRICT_ENG_NAME: "Amphoe Kao Liao",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60230
  },
  {
    DISTRICT_ID: 6007,
    DISTRICT_TH_NAME: "อำเภอตาคลี",
    DISTRICT_ENG_NAME: "Amphoe Takhli",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60260
  },
  {
    DISTRICT_ID: 6008,
    DISTRICT_TH_NAME: "อำเภอท่าตะโก",
    DISTRICT_ENG_NAME: "Amphoe Tha Tako",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60160
  },
  {
    DISTRICT_ID: 6009,
    DISTRICT_TH_NAME: "อำเภอไพศาลี",
    DISTRICT_ENG_NAME: "Amphoe Phaisali",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60220
  },
  {
    DISTRICT_ID: 6010,
    DISTRICT_TH_NAME: "อำเภอพยุหะคีรี",
    DISTRICT_ENG_NAME: "Amphoe Phayuha Khiri",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60130
  },
  {
    DISTRICT_ID: 6011,
    DISTRICT_TH_NAME: "อำเภอลาดยาว",
    DISTRICT_ENG_NAME: "Amphoe Lat Yao",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60150
  },
  {
    DISTRICT_ID: 6012,
    DISTRICT_TH_NAME: "อำเภอตากฟ้า",
    DISTRICT_ENG_NAME: "Amphoe Tak Fa",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60190
  },
  {
    DISTRICT_ID: 6013,
    DISTRICT_TH_NAME: "อำเภอแม่วงก์",
    DISTRICT_ENG_NAME: "Amphoe Mae Wong",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60150
  },
  {
    DISTRICT_ID: 6014,
    DISTRICT_TH_NAME: "อำเภอแม่เปิน",
    DISTRICT_ENG_NAME: "Amphoe Mae Poen",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60150
  },
  {
    DISTRICT_ID: 6015,
    DISTRICT_TH_NAME: "อำเภอชุมตาบง",
    DISTRICT_ENG_NAME: "Amphoe Chum Ta Bong",
    PROVINCE_ID: 60,
    GEO_ID: 1,
    ZIPCODE: 60150
  },
  {
    DISTRICT_ID: 6101,
    DISTRICT_TH_NAME: "อำเภอเมืองอุทัยธานี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Uthai Thani",
    PROVINCE_ID: 61,
    GEO_ID: 1,
    ZIPCODE: 61000
  },
  {
    DISTRICT_ID: 6102,
    DISTRICT_TH_NAME: "อำเภอทัพทัน",
    DISTRICT_ENG_NAME: "Amphoe Thap Than",
    PROVINCE_ID: 61,
    GEO_ID: 1,
    ZIPCODE: 61120
  },
  {
    DISTRICT_ID: 6103,
    DISTRICT_TH_NAME: "อำเภอสว่างอารมณ์",
    DISTRICT_ENG_NAME: "Amphoe Sawang Arom",
    PROVINCE_ID: 61,
    GEO_ID: 1,
    ZIPCODE: 61150
  },
  {
    DISTRICT_ID: 6104,
    DISTRICT_TH_NAME: "อำเภอหนองฉาง",
    DISTRICT_ENG_NAME: "Amphoe Nong Chang",
    PROVINCE_ID: 61,
    GEO_ID: 1,
    ZIPCODE: 61170
  },
  {
    DISTRICT_ID: 6105,
    DISTRICT_TH_NAME: "อำเภอหนองขาหย่าง",
    DISTRICT_ENG_NAME: "Amphoe Nong Khayang",
    PROVINCE_ID: 61,
    GEO_ID: 1,
    ZIPCODE: 61130
  },
  {
    DISTRICT_ID: 6106,
    DISTRICT_TH_NAME: "อำเภอบ้านไร่",
    DISTRICT_ENG_NAME: "Amphoe Ban Rai",
    PROVINCE_ID: 61,
    GEO_ID: 1,
    ZIPCODE: 61180
  },
  {
    DISTRICT_ID: 6107,
    DISTRICT_TH_NAME: "อำเภอลานสัก",
    DISTRICT_ENG_NAME: "Amphoe Lan Sak",
    PROVINCE_ID: 61,
    GEO_ID: 1,
    ZIPCODE: 61160
  },
  {
    DISTRICT_ID: 6108,
    DISTRICT_TH_NAME: "อำเภอห้วยคต",
    DISTRICT_ENG_NAME: "Amphoe Huai Khot",
    PROVINCE_ID: 61,
    GEO_ID: 1,
    ZIPCODE: 61170
  },
  {
    DISTRICT_ID: 6201,
    DISTRICT_TH_NAME: "อำเภอเมืองกำแพงเพชร",
    DISTRICT_ENG_NAME: "Amphoe Mueang Kamphaeng Phet",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62160
  },
  {
    DISTRICT_ID: 6202,
    DISTRICT_TH_NAME: "อำเภอไทรงาม",
    DISTRICT_ENG_NAME: "Amphoe Sai Ngam",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62150
  },
  {
    DISTRICT_ID: 6203,
    DISTRICT_TH_NAME: "อำเภอคลองลาน",
    DISTRICT_ENG_NAME: "Amphoe Khlong Lan",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62180
  },
  {
    DISTRICT_ID: 6204,
    DISTRICT_TH_NAME: "อำเภอขาณุวรลักษบุรี",
    DISTRICT_ENG_NAME: "Amphoe Khanu Woralaksaburi",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62140
  },
  {
    DISTRICT_ID: 6205,
    DISTRICT_TH_NAME: "อำเภอคลองขลุง",
    DISTRICT_ENG_NAME: "Amphoe Khlong Khlung",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62120
  },
  {
    DISTRICT_ID: 6206,
    DISTRICT_TH_NAME: "อำเภอพรานกระต่าย",
    DISTRICT_ENG_NAME: "Amphoe Phran Kratai",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62110
  },
  {
    DISTRICT_ID: 6207,
    DISTRICT_TH_NAME: "อำเภอลานกระบือ",
    DISTRICT_ENG_NAME: "Amphoe Lan Krabue",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62170
  },
  {
    DISTRICT_ID: 6208,
    DISTRICT_TH_NAME: "อำเภอทรายทองวัฒนา",
    DISTRICT_ENG_NAME: "Amphoe Sai Thong Watthana",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62190
  },
  {
    DISTRICT_ID: 6209,
    DISTRICT_TH_NAME: "อำเภอปางศิลาทอง",
    DISTRICT_ENG_NAME: "Amphoe Pang Sila Thong",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62120
  },
  {
    DISTRICT_ID: 6210,
    DISTRICT_TH_NAME: "อำเภอบึงสามัคคี",
    DISTRICT_ENG_NAME: "Amphoe Bueng Samakkhi",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62210
  },
  {
    DISTRICT_ID: 6211,
    DISTRICT_TH_NAME: "อำเภอโกสัมพีนคร",
    DISTRICT_ENG_NAME: "Amphoe Kosamphi Nakhon",
    PROVINCE_ID: 62,
    GEO_ID: 1,
    ZIPCODE: 62000
  },
  {
    DISTRICT_ID: 6301,
    DISTRICT_TH_NAME: "อำเภอเมืองตาก",
    DISTRICT_ENG_NAME: "Amphoe Mueang Tak",
    PROVINCE_ID: 63,
    GEO_ID: 5,
    ZIPCODE: 63000
  },
  {
    DISTRICT_ID: 6302,
    DISTRICT_TH_NAME: "อำเภอบ้านตาก",
    DISTRICT_ENG_NAME: "Amphoe Ban Tak",
    PROVINCE_ID: 63,
    GEO_ID: 5,
    ZIPCODE: 63120
  },
  {
    DISTRICT_ID: 6303,
    DISTRICT_TH_NAME: "อำเภอสามเงา",
    DISTRICT_ENG_NAME: "Amphoe Sam Ngao",
    PROVINCE_ID: 63,
    GEO_ID: 5,
    ZIPCODE: 63130
  },
  {
    DISTRICT_ID: 6304,
    DISTRICT_TH_NAME: "อำเภอแม่ระมาด",
    DISTRICT_ENG_NAME: "Amphoe Mae Ramat",
    PROVINCE_ID: 63,
    GEO_ID: 5,
    ZIPCODE: 63140
  },
  {
    DISTRICT_ID: 6305,
    DISTRICT_TH_NAME: "อำเภอท่าสองยาง",
    DISTRICT_ENG_NAME: "Amphoe Tha Song Yang",
    PROVINCE_ID: 63,
    GEO_ID: 5,
    ZIPCODE: 63150
  },
  {
    DISTRICT_ID: 6306,
    DISTRICT_TH_NAME: "อำเภอแม่สอด",
    DISTRICT_ENG_NAME: "Amphoe Mae Sot",
    PROVINCE_ID: 63,
    GEO_ID: 5,
    ZIPCODE: 63110
  },
  {
    DISTRICT_ID: 6307,
    DISTRICT_TH_NAME: "อำเภอพบพระ",
    DISTRICT_ENG_NAME: "Amphoe Phop Phra",
    PROVINCE_ID: 63,
    GEO_ID: 5,
    ZIPCODE: 63160
  },
  {
    DISTRICT_ID: 6308,
    DISTRICT_TH_NAME: "อำเภออุ้มผาง",
    DISTRICT_ENG_NAME: "Amphoe Umphang",
    PROVINCE_ID: 63,
    GEO_ID: 5,
    ZIPCODE: 63170
  },
  {
    DISTRICT_ID: 6309,
    DISTRICT_TH_NAME: "อำเภอวังเจ้า",
    DISTRICT_ENG_NAME: "Amphoe Wang Chao",
    PROVINCE_ID: 63,
    GEO_ID: 5,
    ZIPCODE: 63180
  },
  {
    DISTRICT_ID: 6401,
    DISTRICT_TH_NAME: "อำเภอเมืองสุโขทัย",
    DISTRICT_ENG_NAME: "Amphoe Mueang Sukhothai",
    PROVINCE_ID: 64,
    GEO_ID: 1,
    ZIPCODE: 64220
  },
  {
    DISTRICT_ID: 6402,
    DISTRICT_TH_NAME: "อำเภอบ้านด่านลานหอย",
    DISTRICT_ENG_NAME: "Amphoe Ban Dan Lan Hoi",
    PROVINCE_ID: 64,
    GEO_ID: 1,
    ZIPCODE: 64140
  },
  {
    DISTRICT_ID: 6403,
    DISTRICT_TH_NAME: "อำเภอคีรีมาศ",
    DISTRICT_ENG_NAME: "Amphoe Khiri Mat",
    PROVINCE_ID: 64,
    GEO_ID: 1,
    ZIPCODE: 64160
  },
  {
    DISTRICT_ID: 6404,
    DISTRICT_TH_NAME: "อำเภอกงไกรลาศ",
    DISTRICT_ENG_NAME: "Amphoe Kong Krailat",
    PROVINCE_ID: 64,
    GEO_ID: 1,
    ZIPCODE: 64170
  },
  {
    DISTRICT_ID: 6405,
    DISTRICT_TH_NAME: "อำเภอศรีสัชนาลัย",
    DISTRICT_ENG_NAME: "Amphoe Si Satchanalai",
    PROVINCE_ID: 64,
    GEO_ID: 1,
    ZIPCODE: 64190
  },
  {
    DISTRICT_ID: 6406,
    DISTRICT_TH_NAME: "อำเภอศรีสำโรง",
    DISTRICT_ENG_NAME: "Amphoe Si Samrong",
    PROVINCE_ID: 64,
    GEO_ID: 1,
    ZIPCODE: 64120
  },
  {
    DISTRICT_ID: 6407,
    DISTRICT_TH_NAME: "อำเภอสวรรคโลก",
    DISTRICT_ENG_NAME: "Amphoe Sawankhalok",
    PROVINCE_ID: 64,
    GEO_ID: 1,
    ZIPCODE: 64110
  },
  {
    DISTRICT_ID: 6408,
    DISTRICT_TH_NAME: "อำเภอศรีนคร",
    DISTRICT_ENG_NAME: "Amphoe Si Nakhon",
    PROVINCE_ID: 64,
    GEO_ID: 1,
    ZIPCODE: 64180
  },
  {
    DISTRICT_ID: 6409,
    DISTRICT_TH_NAME: "อำเภอทุ่งเสลี่ยม",
    DISTRICT_ENG_NAME: "Amphoe Thung Saliam",
    PROVINCE_ID: 64,
    GEO_ID: 1,
    ZIPCODE: 64230
  },
  {
    DISTRICT_ID: 6501,
    DISTRICT_TH_NAME: "อำเภอเมืองพิษณุโลก",
    DISTRICT_ENG_NAME: "Amphoe Mueang Phitsanulok",
    PROVINCE_ID: 65,
    GEO_ID: 1,
    ZIPCODE: 65230
  },
  {
    DISTRICT_ID: 6502,
    DISTRICT_TH_NAME: "อำเภอนครไทย",
    DISTRICT_ENG_NAME: "Amphoe Nakhon Thai",
    PROVINCE_ID: 65,
    GEO_ID: 1,
    ZIPCODE: 65120
  },
  {
    DISTRICT_ID: 6503,
    DISTRICT_TH_NAME: "อำเภอชาติตระการ",
    DISTRICT_ENG_NAME: "Amphoe Chat Trakan",
    PROVINCE_ID: 65,
    GEO_ID: 1,
    ZIPCODE: 65170
  },
  {
    DISTRICT_ID: 6504,
    DISTRICT_TH_NAME: "อำเภอบางระกำ",
    DISTRICT_ENG_NAME: "Amphoe Bang Rakam",
    PROVINCE_ID: 65,
    GEO_ID: 1,
    ZIPCODE: 65240
  },
  {
    DISTRICT_ID: 6505,
    DISTRICT_TH_NAME: "อำเภอบางกระทุ่ม",
    DISTRICT_ENG_NAME: "Amphoe Bang Krathum",
    PROVINCE_ID: 65,
    GEO_ID: 1,
    ZIPCODE: 65210
  },
  {
    DISTRICT_ID: 6506,
    DISTRICT_TH_NAME: "อำเภอพรหมพิราม",
    DISTRICT_ENG_NAME: "Amphoe Phrom Phiram",
    PROVINCE_ID: 65,
    GEO_ID: 1,
    ZIPCODE: 65180
  },
  {
    DISTRICT_ID: 6507,
    DISTRICT_TH_NAME: "อำเภอวัดโบสถ์",
    DISTRICT_ENG_NAME: "Amphoe Wat Bot",
    PROVINCE_ID: 65,
    GEO_ID: 1,
    ZIPCODE: 65160
  },
  {
    DISTRICT_ID: 6508,
    DISTRICT_TH_NAME: "อำเภอวังทอง",
    DISTRICT_ENG_NAME: "Amphoe Wang Thong",
    PROVINCE_ID: 65,
    GEO_ID: 1,
    ZIPCODE: 65220
  },
  {
    DISTRICT_ID: 6509,
    DISTRICT_TH_NAME: "อำเภอเนินมะปราง",
    DISTRICT_ENG_NAME: "Amphoe Noen Maprang",
    PROVINCE_ID: 65,
    GEO_ID: 1,
    ZIPCODE: 65190
  },
  {
    DISTRICT_ID: 6601,
    DISTRICT_TH_NAME: "อำเภอเมืองพิจิตร",
    DISTRICT_ENG_NAME: "Amphoe Mueang Phichit",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66170
  },
  {
    DISTRICT_ID: 6602,
    DISTRICT_TH_NAME: "อำเภอวังทรายพูน",
    DISTRICT_ENG_NAME: "Amphoe Wang Sai Phun",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66180
  },
  {
    DISTRICT_ID: 6603,
    DISTRICT_TH_NAME: "อำเภอโพธิ์ประทับช้าง",
    DISTRICT_ENG_NAME: "Amphoe Pho Prathap Chang",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66190
  },
  {
    DISTRICT_ID: 6604,
    DISTRICT_TH_NAME: "อำเภอตะพานหิน",
    DISTRICT_ENG_NAME: "Amphoe Taphan Hin",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66150
  },
  {
    DISTRICT_ID: 6605,
    DISTRICT_TH_NAME: "อำเภอบางมูลนาก",
    DISTRICT_ENG_NAME: "Amphoe Bang Mun Nak",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66210
  },
  {
    DISTRICT_ID: 6606,
    DISTRICT_TH_NAME: "อำเภอโพทะเล",
    DISTRICT_ENG_NAME: "Amphoe Pho Thale",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66130
  },
  {
    DISTRICT_ID: 6607,
    DISTRICT_TH_NAME: "อำเภอสามง่าม",
    DISTRICT_ENG_NAME: "Amphoe Sam Ngam",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66220
  },
  {
    DISTRICT_ID: 6608,
    DISTRICT_TH_NAME: "อำเภอทับคล้อ",
    DISTRICT_ENG_NAME: "Amphoe Thap Khlo",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66230
  },
  {
    DISTRICT_ID: 6609,
    DISTRICT_TH_NAME: "อำเภอสากเหล็ก",
    DISTRICT_ENG_NAME: "Amphoe Sak Lek",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66160
  },
  {
    DISTRICT_ID: 6610,
    DISTRICT_TH_NAME: "อำเภอบึงนาราง",
    DISTRICT_ENG_NAME: "Amphoe Bueng Na Rang",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66130
  },
  {
    DISTRICT_ID: 6611,
    DISTRICT_TH_NAME: "อำเภอดงเจริญ",
    DISTRICT_ENG_NAME: "Amphoe Dong Charoen",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66210
  },
  {
    DISTRICT_ID: 6612,
    DISTRICT_TH_NAME: "อำเภอวชิรบารมี",
    DISTRICT_ENG_NAME: "Amphoe Wachirabarami",
    PROVINCE_ID: 66,
    GEO_ID: 1,
    ZIPCODE: 66220
  },
  {
    DISTRICT_ID: 6701,
    DISTRICT_TH_NAME: "อำเภอเมืองเพชรบูรณ์",
    DISTRICT_ENG_NAME: "Amphoe Mueang Phetchabun",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67250
  },
  {
    DISTRICT_ID: 6702,
    DISTRICT_TH_NAME: "อำเภอชนแดน",
    DISTRICT_ENG_NAME: "Amphoe Chon Daen",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67190
  },
  {
    DISTRICT_ID: 6703,
    DISTRICT_TH_NAME: "อำเภอหล่มสัก",
    DISTRICT_ENG_NAME: "Amphoe Lom Sak",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67110
  },
  {
    DISTRICT_ID: 6704,
    DISTRICT_TH_NAME: "อำเภอหล่มเก่า",
    DISTRICT_ENG_NAME: "Amphoe Lom Kao",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67120
  },
  {
    DISTRICT_ID: 6705,
    DISTRICT_TH_NAME: "อำเภอวิเชียรบุรี",
    DISTRICT_ENG_NAME: "Amphoe Wichian Buri",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67180
  },
  {
    DISTRICT_ID: 6706,
    DISTRICT_TH_NAME: "อำเภอศรีเทพ",
    DISTRICT_ENG_NAME: "Amphoe Si Thep",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67170
  },
  {
    DISTRICT_ID: 6707,
    DISTRICT_TH_NAME: "อำเภอหนองไผ่",
    DISTRICT_ENG_NAME: "Amphoe Nong Phai",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67220
  },
  {
    DISTRICT_ID: 6708,
    DISTRICT_TH_NAME: "อำเภอบึงสามพัน",
    DISTRICT_ENG_NAME: "Amphoe Bueng Sam Phan",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67230
  },
  {
    DISTRICT_ID: 6709,
    DISTRICT_TH_NAME: "อำเภอน้ำหนาว",
    DISTRICT_ENG_NAME: "Amphoe Nam Nao",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67260
  },
  {
    DISTRICT_ID: 6710,
    DISTRICT_TH_NAME: "อำเภอวังโป่ง",
    DISTRICT_ENG_NAME: "Amphoe Wang Pong",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67240
  },
  {
    DISTRICT_ID: 6711,
    DISTRICT_TH_NAME: "อำเภอเขาค้อ",
    DISTRICT_ENG_NAME: "Amphoe Khao Kho",
    PROVINCE_ID: 67,
    GEO_ID: 1,
    ZIPCODE: 67280
  },
  {
    DISTRICT_ID: 7001,
    DISTRICT_TH_NAME: "อำเภอเมืองราชบุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Ratchaburi",
    PROVINCE_ID: 70,
    GEO_ID: 5,
    ZIPCODE: 70000
  },
  {
    DISTRICT_ID: 7002,
    DISTRICT_TH_NAME: "อำเภอจอมบึง",
    DISTRICT_ENG_NAME: "Amphoe Chom Bueng",
    PROVINCE_ID: 70,
    GEO_ID: 5,
    ZIPCODE: 70150
  },
  {
    DISTRICT_ID: 7003,
    DISTRICT_TH_NAME: "อำเภอสวนผึ้ง",
    DISTRICT_ENG_NAME: "Amphoe Suan Phueng",
    PROVINCE_ID: 70,
    GEO_ID: 5,
    ZIPCODE: 70180
  },
  {
    DISTRICT_ID: 7004,
    DISTRICT_TH_NAME: "อำเภอดำเนินสะดวก",
    DISTRICT_ENG_NAME: "Amphoe Damnoen Saduak",
    PROVINCE_ID: 70,
    GEO_ID: 5,
    ZIPCODE: 70210
  },
  {
    DISTRICT_ID: 7005,
    DISTRICT_TH_NAME: "อำเภอบ้านโป่ง",
    DISTRICT_ENG_NAME: "Amphoe Ban Pong",
    PROVINCE_ID: 70,
    GEO_ID: 5,
    ZIPCODE: 70190
  },
  {
    DISTRICT_ID: 7006,
    DISTRICT_TH_NAME: "อำเภอบางแพ",
    DISTRICT_ENG_NAME: "Amphoe Bang Phae",
    PROVINCE_ID: 70,
    GEO_ID: 5,
    ZIPCODE: 70160
  },
  {
    DISTRICT_ID: 7007,
    DISTRICT_TH_NAME: "อำเภอโพธาราม",
    DISTRICT_ENG_NAME: "Amphoe Photharam",
    PROVINCE_ID: 70,
    GEO_ID: 5,
    ZIPCODE: 70120
  },
  {
    DISTRICT_ID: 7008,
    DISTRICT_TH_NAME: "อำเภอปากท่อ",
    DISTRICT_ENG_NAME: "Amphoe Pak Tho",
    PROVINCE_ID: 70,
    GEO_ID: 5,
    ZIPCODE: 70140
  },
  {
    DISTRICT_ID: 7009,
    DISTRICT_TH_NAME: "อำเภอวัดเพลง",
    DISTRICT_ENG_NAME: "Amphoe Wat Phleng",
    PROVINCE_ID: 70,
    GEO_ID: 5,
    ZIPCODE: 70170
  },
  {
    DISTRICT_ID: 7010,
    DISTRICT_TH_NAME: "อำเภอบ้านคา",
    DISTRICT_ENG_NAME: "Amphoe Ban Kha",
    PROVINCE_ID: 70,
    GEO_ID: 5,
    ZIPCODE: 70180
  },
  {
    DISTRICT_ID: 7101,
    DISTRICT_TH_NAME: "อำเภอเมืองกาญจนบุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Kanchanaburi",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71190
  },
  {
    DISTRICT_ID: 7102,
    DISTRICT_TH_NAME: "อำเภอไทรโยค",
    DISTRICT_ENG_NAME: "Amphoe Sai Yok",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71150
  },
  {
    DISTRICT_ID: 7103,
    DISTRICT_TH_NAME: "อำเภอบ่อพลอย",
    DISTRICT_ENG_NAME: "Amphoe Bo Phloi",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71220
  },
  {
    DISTRICT_ID: 7104,
    DISTRICT_TH_NAME: "อำเภอศรีสวัสดิ์",
    DISTRICT_ENG_NAME: "Amphoe Si Sawat",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71250
  },
  {
    DISTRICT_ID: 7105,
    DISTRICT_TH_NAME: "อำเภอท่ามะกา",
    DISTRICT_ENG_NAME: "Amphoe Tha Maka",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71130
  },
  {
    DISTRICT_ID: 7106,
    DISTRICT_TH_NAME: "อำเภอท่าม่วง",
    DISTRICT_ENG_NAME: "Amphoe Tha Muang",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71130
  },
  {
    DISTRICT_ID: 7107,
    DISTRICT_TH_NAME: "อำเภอทองผาภูมิ",
    DISTRICT_ENG_NAME: "Amphoe Thong Pha Phum",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71180
  },
  {
    DISTRICT_ID: 7108,
    DISTRICT_TH_NAME: "อำเภอสังขละบุรี",
    DISTRICT_ENG_NAME: "Amphoe Sangkhla Buri",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71240
  },
  {
    DISTRICT_ID: 7109,
    DISTRICT_TH_NAME: "อำเภอพนมทวน",
    DISTRICT_ENG_NAME: "Amphoe Phanom Thuan",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71170
  },
  {
    DISTRICT_ID: 7110,
    DISTRICT_TH_NAME: "อำเภอเลาขวัญ",
    DISTRICT_ENG_NAME: "Amphoe Lao Khwan",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71210
  },
  {
    DISTRICT_ID: 7111,
    DISTRICT_TH_NAME: "อำเภอด่านมะขามเตี้ย",
    DISTRICT_ENG_NAME: "Amphoe Dan Makham Tia",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71260
  },
  {
    DISTRICT_ID: 7112,
    DISTRICT_TH_NAME: "อำเภอหนองปรือ",
    DISTRICT_ENG_NAME: "Amphoe Nong Prue",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71220
  },
  {
    DISTRICT_ID: 7113,
    DISTRICT_TH_NAME: "อำเภอห้วยกระเจา",
    DISTRICT_ENG_NAME: "Amphoe Huai Krachao",
    PROVINCE_ID: 71,
    GEO_ID: 5,
    ZIPCODE: 71170
  },
  {
    DISTRICT_ID: 7201,
    DISTRICT_TH_NAME: "อำเภอเมืองสุพรรณบุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Suphan Buri",
    PROVINCE_ID: 72,
    GEO_ID: 1,
    ZIPCODE: 72230
  },
  {
    DISTRICT_ID: 7202,
    DISTRICT_TH_NAME: "อำเภอเดิมบางนางบวช",
    DISTRICT_ENG_NAME: "Amphoe Doem Bang Nang Buat",
    PROVINCE_ID: 72,
    GEO_ID: 1,
    ZIPCODE: 72120
  },
  {
    DISTRICT_ID: 7203,
    DISTRICT_TH_NAME: "อำเภอด่านช้าง",
    DISTRICT_ENG_NAME: "Amphoe Dan Chang",
    PROVINCE_ID: 72,
    GEO_ID: 1,
    ZIPCODE: 72180
  },
  {
    DISTRICT_ID: 7204,
    DISTRICT_TH_NAME: "อำเภอบางปลาม้า",
    DISTRICT_ENG_NAME: "Amphoe Bang Pla Ma",
    PROVINCE_ID: 72,
    GEO_ID: 1,
    ZIPCODE: 72150
  },
  {
    DISTRICT_ID: 7205,
    DISTRICT_TH_NAME: "อำเภอศรีประจันต์",
    DISTRICT_ENG_NAME: "Amphoe Si Prachan",
    PROVINCE_ID: 72,
    GEO_ID: 1,
    ZIPCODE: 72140
  },
  {
    DISTRICT_ID: 7206,
    DISTRICT_TH_NAME: "อำเภอดอนเจดีย์",
    DISTRICT_ENG_NAME: "Amphoe Don Chedi",
    PROVINCE_ID: 72,
    GEO_ID: 1,
    ZIPCODE: 72250
  },
  {
    DISTRICT_ID: 7207,
    DISTRICT_TH_NAME: "อำเภอสองพี่น้อง",
    DISTRICT_ENG_NAME: "Amphoe Song Phi Nong",
    PROVINCE_ID: 72,
    GEO_ID: 1,
    ZIPCODE: 72190
  },
  {
    DISTRICT_ID: 7208,
    DISTRICT_TH_NAME: "อำเภอสามชุก",
    DISTRICT_ENG_NAME: "Amphoe Sam Chuk",
    PROVINCE_ID: 72,
    GEO_ID: 1,
    ZIPCODE: 72130
  },
  {
    DISTRICT_ID: 7209,
    DISTRICT_TH_NAME: "อำเภออู่ทอง",
    DISTRICT_ENG_NAME: "Amphoe U Thong",
    PROVINCE_ID: 72,
    GEO_ID: 1,
    ZIPCODE: 72220
  },
  {
    DISTRICT_ID: 7210,
    DISTRICT_TH_NAME: "อำเภอหนองหญ้าไซ",
    DISTRICT_ENG_NAME: "Amphoe Nong Ya Sai",
    PROVINCE_ID: 72,
    GEO_ID: 1,
    ZIPCODE: 72240
  },
  {
    DISTRICT_ID: 7301,
    DISTRICT_TH_NAME: "อำเภอเมืองนครปฐม",
    DISTRICT_ENG_NAME: "Amphoe Mueang Nakhon Pathom",
    PROVINCE_ID: 73,
    GEO_ID: 1,
    ZIPCODE: 73000
  },
  {
    DISTRICT_ID: 7302,
    DISTRICT_TH_NAME: "อำเภอกำแพงแสน",
    DISTRICT_ENG_NAME: "Amphoe Kamphaeng Saen",
    PROVINCE_ID: 73,
    GEO_ID: 1,
    ZIPCODE: 73180
  },
  {
    DISTRICT_ID: 7303,
    DISTRICT_TH_NAME: "อำเภอนครชัยศรี",
    DISTRICT_ENG_NAME: "Amphoe Nakhon Chai Si",
    PROVINCE_ID: 73,
    GEO_ID: 1,
    ZIPCODE: 73120
  },
  {
    DISTRICT_ID: 7304,
    DISTRICT_TH_NAME: "อำเภอดอนตูม",
    DISTRICT_ENG_NAME: "Amphoe Don Tum",
    PROVINCE_ID: 73,
    GEO_ID: 1,
    ZIPCODE: 73150
  },
  {
    DISTRICT_ID: 7305,
    DISTRICT_TH_NAME: "อำเภอบางเลน",
    DISTRICT_ENG_NAME: "Amphoe Bang Len",
    PROVINCE_ID: 73,
    GEO_ID: 1,
    ZIPCODE: 73190
  },
  {
    DISTRICT_ID: 7306,
    DISTRICT_TH_NAME: "อำเภอสามพราน",
    DISTRICT_ENG_NAME: "Amphoe Sam Phran",
    PROVINCE_ID: 73,
    GEO_ID: 1,
    ZIPCODE: 73220
  },
  {
    DISTRICT_ID: 7307,
    DISTRICT_TH_NAME: "อำเภอพุทธมณฑล",
    DISTRICT_ENG_NAME: "Amphoe Phutthamonthon",
    PROVINCE_ID: 73,
    GEO_ID: 1,
    ZIPCODE: 73170
  },
  {
    DISTRICT_ID: 7401,
    DISTRICT_TH_NAME: "อำเภอเมืองสมุทรสาคร",
    DISTRICT_ENG_NAME: "Amphoe Mueang Samut Sakhon",
    PROVINCE_ID: 74,
    GEO_ID: 1,
    ZIPCODE: 74000
  },
  {
    DISTRICT_ID: 7402,
    DISTRICT_TH_NAME: "อำเภอกระทุ่มแบน",
    DISTRICT_ENG_NAME: "Amphoe Krathum Baen",
    PROVINCE_ID: 74,
    GEO_ID: 1,
    ZIPCODE: 74130
  },
  {
    DISTRICT_ID: 7403,
    DISTRICT_TH_NAME: "อำเภอบ้านแพ้ว",
    DISTRICT_ENG_NAME: "Amphoe Ban Phaeo",
    PROVINCE_ID: 74,
    GEO_ID: 1,
    ZIPCODE: 74120
  },
  {
    DISTRICT_ID: 7501,
    DISTRICT_TH_NAME: "อำเภอเมืองสมุทรสงคราม",
    DISTRICT_ENG_NAME: "Amphoe Mueang Samut Songkhram",
    PROVINCE_ID: 75,
    GEO_ID: 1,
    ZIPCODE: 75000
  },
  {
    DISTRICT_ID: 7502,
    DISTRICT_TH_NAME: "อำเภอบางคนที",
    DISTRICT_ENG_NAME: "Amphoe Bang Khonthi",
    PROVINCE_ID: 75,
    GEO_ID: 1,
    ZIPCODE: 75120
  },
  {
    DISTRICT_ID: 7503,
    DISTRICT_TH_NAME: "อำเภออัมพวา",
    DISTRICT_ENG_NAME: "Amphoe Amphawa",
    PROVINCE_ID: 75,
    GEO_ID: 1,
    ZIPCODE: 75110
  },
  {
    DISTRICT_ID: 7601,
    DISTRICT_TH_NAME: "อำเภอเมืองเพชรบุรี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Phetchaburi",
    PROVINCE_ID: 76,
    GEO_ID: 5,
    ZIPCODE: 76100
  },
  {
    DISTRICT_ID: 7602,
    DISTRICT_TH_NAME: "อำเภอเขาย้อย",
    DISTRICT_ENG_NAME: "Amphoe Khao Yoi",
    PROVINCE_ID: 76,
    GEO_ID: 5,
    ZIPCODE: 76140
  },
  {
    DISTRICT_ID: 7603,
    DISTRICT_TH_NAME: "อำเภอหนองหญ้าปล้อง",
    DISTRICT_ENG_NAME: "Amphoe Nong Ya Plong",
    PROVINCE_ID: 76,
    GEO_ID: 5,
    ZIPCODE: 76160
  },
  {
    DISTRICT_ID: 7604,
    DISTRICT_TH_NAME: "อำเภอชะอำ",
    DISTRICT_ENG_NAME: "Amphoe Cha-am",
    PROVINCE_ID: 76,
    GEO_ID: 5,
    ZIPCODE: 76120
  },
  {
    DISTRICT_ID: 7605,
    DISTRICT_TH_NAME: "อำเภอท่ายาง",
    DISTRICT_ENG_NAME: "Amphoe Tha Yang",
    PROVINCE_ID: 76,
    GEO_ID: 5,
    ZIPCODE: 76130
  },
  {
    DISTRICT_ID: 7606,
    DISTRICT_TH_NAME: "อำเภอบ้านลาด",
    DISTRICT_ENG_NAME: "Amphoe Ban Lat",
    PROVINCE_ID: 76,
    GEO_ID: 5,
    ZIPCODE: 76150
  },
  {
    DISTRICT_ID: 7607,
    DISTRICT_TH_NAME: "อำเภอบ้านแหลม",
    DISTRICT_ENG_NAME: "Amphoe Ban Laem",
    PROVINCE_ID: 76,
    GEO_ID: 5,
    ZIPCODE: 76110
  },
  {
    DISTRICT_ID: 7608,
    DISTRICT_TH_NAME: "อำเภอแก่งกระจาน",
    DISTRICT_ENG_NAME: "Amphoe Kaeng Krachan",
    PROVINCE_ID: 76,
    GEO_ID: 5,
    ZIPCODE: 76170
  },
  {
    DISTRICT_ID: 7701,
    DISTRICT_TH_NAME: "อำเภอเมืองประจวบคีรีขันธ์",
    DISTRICT_ENG_NAME: "Amphoe Mueang Prachuap Khiri Khan",
    PROVINCE_ID: 77,
    GEO_ID: 5,
    ZIPCODE: 77210
  },
  {
    DISTRICT_ID: 7702,
    DISTRICT_TH_NAME: "อำเภอกุยบุรี",
    DISTRICT_ENG_NAME: "Amphoe Kui Buri",
    PROVINCE_ID: 77,
    GEO_ID: 5,
    ZIPCODE: 77150
  },
  {
    DISTRICT_ID: 7703,
    DISTRICT_TH_NAME: "อำเภอทับสะแก",
    DISTRICT_ENG_NAME: "Amphoe Thap Sakae",
    PROVINCE_ID: 77,
    GEO_ID: 5,
    ZIPCODE: 77130
  },
  {
    DISTRICT_ID: 7704,
    DISTRICT_TH_NAME: "อำเภอบางสะพาน",
    DISTRICT_ENG_NAME: "Amphoe Bang Saphan",
    PROVINCE_ID: 77,
    GEO_ID: 5,
    ZIPCODE: 77230
  },
  {
    DISTRICT_ID: 7705,
    DISTRICT_TH_NAME: "อำเภอบางสะพานน้อย",
    DISTRICT_ENG_NAME: "Amphoe Bang Saphan Noi",
    PROVINCE_ID: 77,
    GEO_ID: 5,
    ZIPCODE: 77170
  },
  {
    DISTRICT_ID: 7706,
    DISTRICT_TH_NAME: "อำเภอปราณบุรี",
    DISTRICT_ENG_NAME: "Amphoe Pran Buri",
    PROVINCE_ID: 77,
    GEO_ID: 5,
    ZIPCODE: 77220
  },
  {
    DISTRICT_ID: 7707,
    DISTRICT_TH_NAME: "อำเภอหัวหิน",
    DISTRICT_ENG_NAME: "Amphoe Hua Hin",
    PROVINCE_ID: 77,
    GEO_ID: 5,
    ZIPCODE: 77110
  },
  {
    DISTRICT_ID: 7708,
    DISTRICT_TH_NAME: "อำเภอสามร้อยยอด",
    DISTRICT_ENG_NAME: "Amphoe Sam Roi Yot",
    PROVINCE_ID: 77,
    GEO_ID: 5,
    ZIPCODE: 77180
  },
  {
    DISTRICT_ID: 8001,
    DISTRICT_TH_NAME: "อำเภอเมืองนครศรีธรรมราช",
    DISTRICT_ENG_NAME: "Amphoe Mueang Nakhon Si Thammarat",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80330
  },
  {
    DISTRICT_ID: 8002,
    DISTRICT_TH_NAME: "อำเภอพรหมคีรี",
    DISTRICT_ENG_NAME: "Amphoe Phrom Khiri",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80320
  },
  {
    DISTRICT_ID: 8003,
    DISTRICT_TH_NAME: "อำเภอลานสกา",
    DISTRICT_ENG_NAME: "Amphoe Lan Saka",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80230
  },
  {
    DISTRICT_ID: 8004,
    DISTRICT_TH_NAME: "อำเภอฉวาง",
    DISTRICT_ENG_NAME: "Amphoe Chawang",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80260
  },
  {
    DISTRICT_ID: 8005,
    DISTRICT_TH_NAME: "อำเภอพิปูน",
    DISTRICT_ENG_NAME: "Amphoe Phipun",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80270
  },
  {
    DISTRICT_ID: 8006,
    DISTRICT_TH_NAME: "อำเภอเชียรใหญ่",
    DISTRICT_ENG_NAME: "Amphoe Chian Yai",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80190
  },
  {
    DISTRICT_ID: 8007,
    DISTRICT_TH_NAME: "อำเภอชะอวด",
    DISTRICT_ENG_NAME: "Amphoe Cha-uat",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80180
  },
  {
    DISTRICT_ID: 8008,
    DISTRICT_TH_NAME: "อำเภอท่าศาลา",
    DISTRICT_ENG_NAME: "Amphoe Tha Sala",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80160
  },
  {
    DISTRICT_ID: 8009,
    DISTRICT_TH_NAME: "อำเภอทุ่งสง",
    DISTRICT_ENG_NAME: "Amphoe Thung Song",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80310
  },
  {
    DISTRICT_ID: 8010,
    DISTRICT_TH_NAME: "อำเภอนาบอน",
    DISTRICT_ENG_NAME: "Amphoe Na Bon",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80220
  },
  {
    DISTRICT_ID: 8011,
    DISTRICT_TH_NAME: "อำเภอทุ่งใหญ่",
    DISTRICT_ENG_NAME: "Amphoe Thung Yai",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80240
  },
  {
    DISTRICT_ID: 8012,
    DISTRICT_TH_NAME: "อำเภอปากพนัง",
    DISTRICT_ENG_NAME: "Amphoe Pak Phanang",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80330
  },
  {
    DISTRICT_ID: 8013,
    DISTRICT_TH_NAME: "อำเภอร่อนพิบูลย์",
    DISTRICT_ENG_NAME: "Amphoe Ron Phibun",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80350
  },
  {
    DISTRICT_ID: 8014,
    DISTRICT_TH_NAME: "อำเภอสิชล",
    DISTRICT_ENG_NAME: "Amphoe Sichon",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80340
  },
  {
    DISTRICT_ID: 8015,
    DISTRICT_TH_NAME: "อำเภอขนอม",
    DISTRICT_ENG_NAME: "Amphoe Khanom",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80210
  },
  {
    DISTRICT_ID: 8016,
    DISTRICT_TH_NAME: "อำเภอหัวไทร",
    DISTRICT_ENG_NAME: "Amphoe Hua Sai",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80170
  },
  {
    DISTRICT_ID: 8017,
    DISTRICT_TH_NAME: "อำเภอบางขัน",
    DISTRICT_ENG_NAME: "Amphoe Bang Khan",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80360
  },
  {
    DISTRICT_ID: 8018,
    DISTRICT_TH_NAME: "อำเภอถ้ำพรรณรา",
    DISTRICT_ENG_NAME: "Amphoe Tham Phannara",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80260
  },
  {
    DISTRICT_ID: 8019,
    DISTRICT_TH_NAME: "อำเภอจุฬาภรณ์",
    DISTRICT_ENG_NAME: "Amphoe Chulabhorn",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80180
  },
  {
    DISTRICT_ID: 8020,
    DISTRICT_TH_NAME: "อำเภอพระพรหม",
    DISTRICT_ENG_NAME: "Amphoe Phra Phrom",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80000
  },
  {
    DISTRICT_ID: 8021,
    DISTRICT_TH_NAME: "อำเภอนบพิตำ",
    DISTRICT_ENG_NAME: "Amphoe Nopphitam",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80160
  },
  {
    DISTRICT_ID: 8022,
    DISTRICT_TH_NAME: "อำเภอช้างกลาง",
    DISTRICT_ENG_NAME: "Amphoe Chang Klang",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80250
  },
  {
    DISTRICT_ID: 8023,
    DISTRICT_TH_NAME: "อำเภอเฉลิมพระเกียรติ",
    DISTRICT_ENG_NAME: "Amphoe Chaloem Phra Kiat",
    PROVINCE_ID: 80,
    GEO_ID: 6,
    ZIPCODE: 80290
  },
  {
    DISTRICT_ID: 8101,
    DISTRICT_TH_NAME: "อำเภอเมืองกระบี่",
    DISTRICT_ENG_NAME: "Amphoe Mueang Krabi",
    PROVINCE_ID: 81,
    GEO_ID: 6,
    ZIPCODE: 81000
  },
  {
    DISTRICT_ID: 8102,
    DISTRICT_TH_NAME: "อำเภอเขาพนม",
    DISTRICT_ENG_NAME: "Amphoe Khao Phanom",
    PROVINCE_ID: 81,
    GEO_ID: 6,
    ZIPCODE: 81140
  },
  {
    DISTRICT_ID: 8103,
    DISTRICT_TH_NAME: "อำเภอเกาะลันตา",
    DISTRICT_ENG_NAME: "Amphoe Ko Lanta",
    PROVINCE_ID: 81,
    GEO_ID: 6,
    ZIPCODE: 81150
  },
  {
    DISTRICT_ID: 8104,
    DISTRICT_TH_NAME: "อำเภอคลองท่อม",
    DISTRICT_ENG_NAME: "Amphoe Khlong Thom",
    PROVINCE_ID: 81,
    GEO_ID: 6,
    ZIPCODE: 81170
  },
  {
    DISTRICT_ID: 8105,
    DISTRICT_TH_NAME: "อำเภออ่าวลึก",
    DISTRICT_ENG_NAME: "Amphoe Ao Luek",
    PROVINCE_ID: 81,
    GEO_ID: 6,
    ZIPCODE: 81110
  },
  {
    DISTRICT_ID: 8106,
    DISTRICT_TH_NAME: "อำเภอปลายพระยา",
    DISTRICT_ENG_NAME: "Amphoe Plai Phraya",
    PROVINCE_ID: 81,
    GEO_ID: 6,
    ZIPCODE: 81160
  },
  {
    DISTRICT_ID: 8107,
    DISTRICT_TH_NAME: "อำเภอลำทับ",
    DISTRICT_ENG_NAME: "Amphoe Lam Thap",
    PROVINCE_ID: 81,
    GEO_ID: 6,
    ZIPCODE: 81190
  },
  {
    DISTRICT_ID: 8108,
    DISTRICT_TH_NAME: "อำเภอเหนือคลอง",
    DISTRICT_ENG_NAME: "Amphoe Nuea Khlong",
    PROVINCE_ID: 81,
    GEO_ID: 6,
    ZIPCODE: 81130
  },
  {
    DISTRICT_ID: 8201,
    DISTRICT_TH_NAME: "อำเภอเมืองพังงา",
    DISTRICT_ENG_NAME: "Amphoe Mueang Phang-nga",
    PROVINCE_ID: 82,
    GEO_ID: 6,
    ZIPCODE: 82000
  },
  {
    DISTRICT_ID: 8202,
    DISTRICT_TH_NAME: "อำเภอเกาะยาว",
    DISTRICT_ENG_NAME: "Amphoe Ko Yao",
    PROVINCE_ID: 82,
    GEO_ID: 6,
    ZIPCODE: 83000
  },
  {
    DISTRICT_ID: 8203,
    DISTRICT_TH_NAME: "อำเภอกะปง",
    DISTRICT_ENG_NAME: "Amphoe Kapong",
    PROVINCE_ID: 82,
    GEO_ID: 6,
    ZIPCODE: 82170
  },
  {
    DISTRICT_ID: 8204,
    DISTRICT_TH_NAME: "อำเภอตะกั่วทุ่ง",
    DISTRICT_ENG_NAME: "Amphoe Takua Thung",
    PROVINCE_ID: 82,
    GEO_ID: 6,
    ZIPCODE: 82140
  },
  {
    DISTRICT_ID: 8205,
    DISTRICT_TH_NAME: "อำเภอตะกั่วป่า",
    DISTRICT_ENG_NAME: "Amphoe Takua Pa",
    PROVINCE_ID: 82,
    GEO_ID: 6,
    ZIPCODE: 82190
  },
  {
    DISTRICT_ID: 8206,
    DISTRICT_TH_NAME: "อำเภอคุระบุรี",
    DISTRICT_ENG_NAME: "Amphoe Khura Buri",
    PROVINCE_ID: 82,
    GEO_ID: 6,
    ZIPCODE: 82150
  },
  {
    DISTRICT_ID: 8207,
    DISTRICT_TH_NAME: "อำเภอทับปุด",
    DISTRICT_ENG_NAME: "Amphoe Thap Put",
    PROVINCE_ID: 82,
    GEO_ID: 6,
    ZIPCODE: 82180
  },
  {
    DISTRICT_ID: 8208,
    DISTRICT_TH_NAME: "อำเภอท้ายเหมือง",
    DISTRICT_ENG_NAME: "Amphoe Thai Mueang",
    PROVINCE_ID: 82,
    GEO_ID: 6,
    ZIPCODE: 82210
  },
  {
    DISTRICT_ID: 8301,
    DISTRICT_TH_NAME: "อำเภอเมืองภูเก็ต",
    DISTRICT_ENG_NAME: "Amphoe Mueang Phuket",
    PROVINCE_ID: 83,
    GEO_ID: 6,
    ZIPCODE: 83130
  },
  {
    DISTRICT_ID: 8302,
    DISTRICT_TH_NAME: "อำเภอกะทู้",
    DISTRICT_ENG_NAME: "Amphoe Kathu",
    PROVINCE_ID: 83,
    GEO_ID: 6,
    ZIPCODE: 83150
  },
  {
    DISTRICT_ID: 8303,
    DISTRICT_TH_NAME: "อำเภอถลาง",
    DISTRICT_ENG_NAME: "Amphoe Thalang",
    PROVINCE_ID: 83,
    GEO_ID: 6,
    ZIPCODE: 83110
  },
  {
    DISTRICT_ID: 8401,
    DISTRICT_TH_NAME: "อำเภอเมืองสุราษฎร์ธานี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Surat Thani",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84100
  },
  {
    DISTRICT_ID: 8402,
    DISTRICT_TH_NAME: "อำเภอกาญจนดิษฐ์",
    DISTRICT_ENG_NAME: "Amphoe Kanchanadit",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84290
  },
  {
    DISTRICT_ID: 8403,
    DISTRICT_TH_NAME: "อำเภอดอนสัก",
    DISTRICT_ENG_NAME: "Amphoe Don Sak",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84340
  },
  {
    DISTRICT_ID: 8404,
    DISTRICT_TH_NAME: "อำเภอเกาะสมุย",
    DISTRICT_ENG_NAME: "Amphoe Ko Samui",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84330
  },
  {
    DISTRICT_ID: 8405,
    DISTRICT_TH_NAME: "อำเภอเกาะพะงัน",
    DISTRICT_ENG_NAME: "Amphoe Ko Pha-ngan",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84360
  },
  {
    DISTRICT_ID: 8406,
    DISTRICT_TH_NAME: "อำเภอไชยา",
    DISTRICT_ENG_NAME: "Amphoe Chaiya",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84110
  },
  {
    DISTRICT_ID: 8407,
    DISTRICT_TH_NAME: "อำเภอท่าชนะ",
    DISTRICT_ENG_NAME: "Amphoe Tha Chana",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84170
  },
  {
    DISTRICT_ID: 8408,
    DISTRICT_TH_NAME: "อำเภอคีรีรัฐนิคม",
    DISTRICT_ENG_NAME: "Amphoe Khiri Rat Nikhom",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84180
  },
  {
    DISTRICT_ID: 8409,
    DISTRICT_TH_NAME: "อำเภอบ้านตาขุน",
    DISTRICT_ENG_NAME: "Amphoe Ban Ta Khun",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84230
  },
  {
    DISTRICT_ID: 8410,
    DISTRICT_TH_NAME: "อำเภอพนม",
    DISTRICT_ENG_NAME: "Amphoe Phanom",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84250
  },
  {
    DISTRICT_ID: 8411,
    DISTRICT_TH_NAME: "อำเภอท่าฉาง",
    DISTRICT_ENG_NAME: "Amphoe Tha Chang",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84150
  },
  {
    DISTRICT_ID: 8412,
    DISTRICT_TH_NAME: "อำเภอบ้านนาสาร",
    DISTRICT_ENG_NAME: "Amphoe Ban Na San",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84270
  },
  {
    DISTRICT_ID: 8413,
    DISTRICT_TH_NAME: "อำเภอบ้านนาเดิม",
    DISTRICT_ENG_NAME: "Amphoe Ban Na Doem",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84240
  },
  {
    DISTRICT_ID: 8414,
    DISTRICT_TH_NAME: "อำเภอเคียนซา",
    DISTRICT_ENG_NAME: "Amphoe Khian Sa",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84260
  },
  {
    DISTRICT_ID: 8415,
    DISTRICT_TH_NAME: "อำเภอเวียงสระ",
    DISTRICT_ENG_NAME: "Amphoe Wiang Sa",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84190
  },
  {
    DISTRICT_ID: 8416,
    DISTRICT_TH_NAME: "อำเภอพระแสง",
    DISTRICT_ENG_NAME: "Amphoe Phrasaeng",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84210
  },
  {
    DISTRICT_ID: 8417,
    DISTRICT_TH_NAME: "อำเภอพุนพิน",
    DISTRICT_ENG_NAME: "Amphoe Phunphin",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84130
  },
  {
    DISTRICT_ID: 8418,
    DISTRICT_TH_NAME: "อำเภอชัยบุรี",
    DISTRICT_ENG_NAME: "Amphoe Chai Buri",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84350
  },
  {
    DISTRICT_ID: 8419,
    DISTRICT_TH_NAME: "อำเภอวิภาวดี",
    DISTRICT_ENG_NAME: "Amphoe Vibhavadi",
    PROVINCE_ID: 84,
    GEO_ID: 6,
    ZIPCODE: 84370
  },
  {
    DISTRICT_ID: 8501,
    DISTRICT_TH_NAME: "อำเภอเมืองระนอง",
    DISTRICT_ENG_NAME: "Amphoe Mueang Ranong",
    PROVINCE_ID: 85,
    GEO_ID: 6,
    ZIPCODE: 85130
  },
  {
    DISTRICT_ID: 8502,
    DISTRICT_TH_NAME: "อำเภอละอุ่น",
    DISTRICT_ENG_NAME: "Amphoe La-un",
    PROVINCE_ID: 85,
    GEO_ID: 6,
    ZIPCODE: 85130
  },
  {
    DISTRICT_ID: 8503,
    DISTRICT_TH_NAME: "อำเภอกะเปอร์",
    DISTRICT_ENG_NAME: "Amphoe Kapoe",
    PROVINCE_ID: 85,
    GEO_ID: 6,
    ZIPCODE: 85120
  },
  {
    DISTRICT_ID: 8504,
    DISTRICT_TH_NAME: "อำเภอกระบุรี",
    DISTRICT_ENG_NAME: "Amphoe Kra Buri",
    PROVINCE_ID: 85,
    GEO_ID: 6,
    ZIPCODE: 85110
  },
  {
    DISTRICT_ID: 8505,
    DISTRICT_TH_NAME: "อำเภอสุขสำราญ",
    DISTRICT_ENG_NAME: "Amphoe Suk Samran",
    PROVINCE_ID: 85,
    GEO_ID: 6,
    ZIPCODE: 85120
  },
  {
    DISTRICT_ID: 8601,
    DISTRICT_TH_NAME: "อำเภอเมืองชุมพร",
    DISTRICT_ENG_NAME: "Amphoe Mueang Chumphon",
    PROVINCE_ID: 86,
    GEO_ID: 6,
    ZIPCODE: 86190
  },
  {
    DISTRICT_ID: 8602,
    DISTRICT_TH_NAME: "อำเภอท่าแซะ",
    DISTRICT_ENG_NAME: "Amphoe Tha Sae",
    PROVINCE_ID: 86,
    GEO_ID: 6,
    ZIPCODE: 86190
  },
  {
    DISTRICT_ID: 8603,
    DISTRICT_TH_NAME: "อำเภอปะทิว",
    DISTRICT_ENG_NAME: "Amphoe Pathio",
    PROVINCE_ID: 86,
    GEO_ID: 6,
    ZIPCODE: 86230
  },
  {
    DISTRICT_ID: 8604,
    DISTRICT_TH_NAME: "อำเภอหลังสวน",
    DISTRICT_ENG_NAME: "Amphoe Lang Suan",
    PROVINCE_ID: 86,
    GEO_ID: 6,
    ZIPCODE: 86150
  },
  {
    DISTRICT_ID: 8605,
    DISTRICT_TH_NAME: "อำเภอละแม",
    DISTRICT_ENG_NAME: "Amphoe Lamae",
    PROVINCE_ID: 86,
    GEO_ID: 6,
    ZIPCODE: 86170
  },
  {
    DISTRICT_ID: 8606,
    DISTRICT_TH_NAME: "อำเภอพะโต๊ะ",
    DISTRICT_ENG_NAME: "Amphoe Phato",
    PROVINCE_ID: 86,
    GEO_ID: 6,
    ZIPCODE: 86180
  },
  {
    DISTRICT_ID: 8607,
    DISTRICT_TH_NAME: "อำเภอสวี",
    DISTRICT_ENG_NAME: "Amphoe Sawi",
    PROVINCE_ID: 86,
    GEO_ID: 6,
    ZIPCODE: 86130
  },
  {
    DISTRICT_ID: 8608,
    DISTRICT_TH_NAME: "อำเภอทุ่งตะโก",
    DISTRICT_ENG_NAME: "Amphoe Thung Tako",
    PROVINCE_ID: 86,
    GEO_ID: 6,
    ZIPCODE: 86220
  },
  {
    DISTRICT_ID: 9001,
    DISTRICT_TH_NAME: "อำเภอเมืองสงขลา",
    DISTRICT_ENG_NAME: "Amphoe Mueang Songkhla",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90100
  },
  {
    DISTRICT_ID: 9002,
    DISTRICT_TH_NAME: "อำเภอสทิงพระ",
    DISTRICT_ENG_NAME: "Amphoe Sathing Phra",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90190
  },
  {
    DISTRICT_ID: 9003,
    DISTRICT_TH_NAME: "อำเภอจะนะ",
    DISTRICT_ENG_NAME: "Amphoe Chana",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90130
  },
  {
    DISTRICT_ID: 9004,
    DISTRICT_TH_NAME: "อำเภอนาทวี",
    DISTRICT_ENG_NAME: "Amphoe Na Thawi",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90160
  },
  {
    DISTRICT_ID: 9005,
    DISTRICT_TH_NAME: "อำเภอเทพา",
    DISTRICT_ENG_NAME: "Amphoe Thepha",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90260
  },
  {
    DISTRICT_ID: 9006,
    DISTRICT_TH_NAME: "อำเภอสะบ้าย้อย",
    DISTRICT_ENG_NAME: "Amphoe Saba Yoi",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90210
  },
  {
    DISTRICT_ID: 9007,
    DISTRICT_TH_NAME: "อำเภอระโนด",
    DISTRICT_ENG_NAME: "Amphoe Ranot",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90140
  },
  {
    DISTRICT_ID: 9008,
    DISTRICT_TH_NAME: "อำเภอกระแสสินธุ์",
    DISTRICT_ENG_NAME: "Amphoe Krasae Sin",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90270
  },
  {
    DISTRICT_ID: 9009,
    DISTRICT_TH_NAME: "อำเภอรัตภูมิ",
    DISTRICT_ENG_NAME: "Amphoe Rattaphum",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90180
  },
  {
    DISTRICT_ID: 9010,
    DISTRICT_TH_NAME: "อำเภอสะเดา",
    DISTRICT_ENG_NAME: "Amphoe Sadao",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90320
  },
  {
    DISTRICT_ID: 9011,
    DISTRICT_TH_NAME: "อำเภอหาดใหญ่",
    DISTRICT_ENG_NAME: "Amphoe Hat Yai",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90250
  },
  {
    DISTRICT_ID: 9012,
    DISTRICT_TH_NAME: "อำเภอนาหม่อม",
    DISTRICT_ENG_NAME: "Amphoe Na Mom",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90310
  },
  {
    DISTRICT_ID: 9013,
    DISTRICT_TH_NAME: "อำเภอควนเนียง",
    DISTRICT_ENG_NAME: "Amphoe Khuan Niang",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90220
  },
  {
    DISTRICT_ID: 9014,
    DISTRICT_TH_NAME: "อำเภอบางกล่ำ",
    DISTRICT_ENG_NAME: "Amphoe Bang Klam",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90110
  },
  {
    DISTRICT_ID: 9015,
    DISTRICT_TH_NAME: "อำเภอสิงหนคร",
    DISTRICT_ENG_NAME: "Amphoe Singhanakhon",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90330
  },
  {
    DISTRICT_ID: 9016,
    DISTRICT_TH_NAME: "อำเภอคลองหอยโข่ง",
    DISTRICT_ENG_NAME: "Amphoe Khlong Hoi Khong",
    PROVINCE_ID: 90,
    GEO_ID: 6,
    ZIPCODE: 90230
  },
  {
    DISTRICT_ID: 9101,
    DISTRICT_TH_NAME: "อำเภอเมืองสตูล",
    DISTRICT_ENG_NAME: "Amphoe Mueang Satun",
    PROVINCE_ID: 91,
    GEO_ID: 6,
    ZIPCODE: 91140
  },
  {
    DISTRICT_ID: 9102,
    DISTRICT_TH_NAME: "อำเภอควนโดน",
    DISTRICT_ENG_NAME: "Amphoe Khuan Don",
    PROVINCE_ID: 91,
    GEO_ID: 6,
    ZIPCODE: 91160
  },
  {
    DISTRICT_ID: 9103,
    DISTRICT_TH_NAME: "อำเภอควนกาหลง",
    DISTRICT_ENG_NAME: "Amphoe Khuan Kalong",
    PROVINCE_ID: 91,
    GEO_ID: 6,
    ZIPCODE: 91130
  },
  {
    DISTRICT_ID: 9104,
    DISTRICT_TH_NAME: "อำเภอท่าแพ",
    DISTRICT_ENG_NAME: "Amphoe Tha Phae",
    PROVINCE_ID: 91,
    GEO_ID: 6,
    ZIPCODE: 91150
  },
  {
    DISTRICT_ID: 9105,
    DISTRICT_TH_NAME: "อำเภอละงู",
    DISTRICT_ENG_NAME: "Amphoe La-ngu",
    PROVINCE_ID: 91,
    GEO_ID: 6,
    ZIPCODE: 91110
  },
  {
    DISTRICT_ID: 9106,
    DISTRICT_TH_NAME: "อำเภอทุ่งหว้า",
    DISTRICT_ENG_NAME: "Amphoe Thung Wa",
    PROVINCE_ID: 91,
    GEO_ID: 6,
    ZIPCODE: 91120
  },
  {
    DISTRICT_ID: 9107,
    DISTRICT_TH_NAME: "อำเภอมะนัง",
    DISTRICT_ENG_NAME: "Amphoe Manang",
    PROVINCE_ID: 91,
    GEO_ID: 6,
    ZIPCODE: 91130
  },
  {
    DISTRICT_ID: 9201,
    DISTRICT_TH_NAME: "อำเภอเมืองตรัง",
    DISTRICT_ENG_NAME: "Amphoe Mueang Trang",
    PROVINCE_ID: 92,
    GEO_ID: 6,
    ZIPCODE: 92190
  },
  {
    DISTRICT_ID: 9202,
    DISTRICT_TH_NAME: "อำเภอกันตัง",
    DISTRICT_ENG_NAME: "Amphoe Kantang",
    PROVINCE_ID: 92,
    GEO_ID: 6,
    ZIPCODE: 92110
  },
  {
    DISTRICT_ID: 9203,
    DISTRICT_TH_NAME: "อำเภอย่านตาขาว",
    DISTRICT_ENG_NAME: "Amphoe Yan Ta Khao",
    PROVINCE_ID: 92,
    GEO_ID: 6,
    ZIPCODE: 92140
  },
  {
    DISTRICT_ID: 9204,
    DISTRICT_TH_NAME: "อำเภอปะเหลียน",
    DISTRICT_ENG_NAME: "Amphoe Palian",
    PROVINCE_ID: 92,
    GEO_ID: 6,
    ZIPCODE: 92180
  },
  {
    DISTRICT_ID: 9205,
    DISTRICT_TH_NAME: "อำเภอสิเกา",
    DISTRICT_ENG_NAME: "Amphoe Sikao",
    PROVINCE_ID: 92,
    GEO_ID: 6,
    ZIPCODE: 92150
  },
  {
    DISTRICT_ID: 9206,
    DISTRICT_TH_NAME: "อำเภอห้วยยอด",
    DISTRICT_ENG_NAME: "Amphoe Huai Yot",
    PROVINCE_ID: 92,
    GEO_ID: 6,
    ZIPCODE: 92210
  },
  {
    DISTRICT_ID: 9207,
    DISTRICT_TH_NAME: "อำเภอวังวิเศษ",
    DISTRICT_ENG_NAME: "Amphoe Wang Wiset",
    PROVINCE_ID: 92,
    GEO_ID: 6,
    ZIPCODE: 92220
  },
  {
    DISTRICT_ID: 9208,
    DISTRICT_TH_NAME: "อำเภอนาโยง",
    DISTRICT_ENG_NAME: "Amphoe Na Yong",
    PROVINCE_ID: 92,
    GEO_ID: 6,
    ZIPCODE: 92170
  },
  {
    DISTRICT_ID: 9209,
    DISTRICT_TH_NAME: "อำเภอรัษฎา",
    DISTRICT_ENG_NAME: "Amphoe Ratsada",
    PROVINCE_ID: 92,
    GEO_ID: 6,
    ZIPCODE: 92160
  },
  {
    DISTRICT_ID: 9210,
    DISTRICT_TH_NAME: "อำเภอหาดสำราญ",
    DISTRICT_ENG_NAME: "Amphoe Hat Samran",
    PROVINCE_ID: 92,
    GEO_ID: 6,
    ZIPCODE: 92120
  },
  {
    DISTRICT_ID: 9301,
    DISTRICT_TH_NAME: "อำเภอเมืองพัทลุง",
    DISTRICT_ENG_NAME: "Amphoe Mueang Phatthalung",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93000
  },
  {
    DISTRICT_ID: 9302,
    DISTRICT_TH_NAME: "อำเภอกงหรา",
    DISTRICT_ENG_NAME: "Amphoe Kong Ra",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93180
  },
  {
    DISTRICT_ID: 9303,
    DISTRICT_TH_NAME: "อำเภอเขาชัยสน",
    DISTRICT_ENG_NAME: "Amphoe Khao Chaison",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93130
  },
  {
    DISTRICT_ID: 9304,
    DISTRICT_TH_NAME: "อำเภอตะโหมด",
    DISTRICT_ENG_NAME: "Amphoe Tamot",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93160
  },
  {
    DISTRICT_ID: 9305,
    DISTRICT_TH_NAME: "อำเภอควนขนุน",
    DISTRICT_ENG_NAME: "Amphoe Khuan Khanun",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93150
  },
  {
    DISTRICT_ID: 9306,
    DISTRICT_TH_NAME: "อำเภอปากพะยูน",
    DISTRICT_ENG_NAME: "Amphoe Pak Phayun",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93120
  },
  {
    DISTRICT_ID: 9307,
    DISTRICT_TH_NAME: "อำเภอศรีบรรพต",
    DISTRICT_ENG_NAME: "Amphoe Si Banphot",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93190
  },
  {
    DISTRICT_ID: 9308,
    DISTRICT_TH_NAME: "อำเภอป่าบอน",
    DISTRICT_ENG_NAME: "Amphoe Pa Bon",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93170
  },
  {
    DISTRICT_ID: 9309,
    DISTRICT_TH_NAME: "อำเภอบางแก้ว",
    DISTRICT_ENG_NAME: "Amphoe Bang Kaeo",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93140
  },
  {
    DISTRICT_ID: 9310,
    DISTRICT_TH_NAME: "อำเภอป่าพะยอม",
    DISTRICT_ENG_NAME: "Amphoe Pa Phayom",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93210
  },
  {
    DISTRICT_ID: 9311,
    DISTRICT_TH_NAME: "อำเภอศรีนครินทร์",
    DISTRICT_ENG_NAME: "Amphoe Srinagarindra",
    PROVINCE_ID: 93,
    GEO_ID: 6,
    ZIPCODE: 93000
  },
  {
    DISTRICT_ID: 9401,
    DISTRICT_TH_NAME: "อำเภอเมืองปัตตานี",
    DISTRICT_ENG_NAME: "Amphoe Mueang Pattani",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94000
  },
  {
    DISTRICT_ID: 9402,
    DISTRICT_TH_NAME: "อำเภอโคกโพธิ์",
    DISTRICT_ENG_NAME: "Amphoe Khok Pho",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94180
  },
  {
    DISTRICT_ID: 9403,
    DISTRICT_TH_NAME: "อำเภอหนองจิก",
    DISTRICT_ENG_NAME: "Amphoe Nong Chik",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94170
  },
  {
    DISTRICT_ID: 9404,
    DISTRICT_TH_NAME: "อำเภอปะนาเระ",
    DISTRICT_ENG_NAME: "Amphoe Panare",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94190
  },
  {
    DISTRICT_ID: 9405,
    DISTRICT_TH_NAME: "อำเภอมายอ",
    DISTRICT_ENG_NAME: "Amphoe Mayo",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94190
  },
  {
    DISTRICT_ID: 9406,
    DISTRICT_TH_NAME: "อำเภอทุ่งยางแดง",
    DISTRICT_ENG_NAME: "Amphoe Thung Yang Daeng",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94140
  },
  {
    DISTRICT_ID: 9407,
    DISTRICT_TH_NAME: "อำเภอสายบุรี",
    DISTRICT_ENG_NAME: "Amphoe Sai Buri",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94190
  },
  {
    DISTRICT_ID: 9408,
    DISTRICT_TH_NAME: "อำเภอไม้แก่น",
    DISTRICT_ENG_NAME: "Amphoe Mai Kaen",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94220
  },
  {
    DISTRICT_ID: 9409,
    DISTRICT_TH_NAME: "อำเภอยะหริ่ง",
    DISTRICT_ENG_NAME: "Amphoe Yaring",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94190
  },
  {
    DISTRICT_ID: 9410,
    DISTRICT_TH_NAME: "อำเภอยะรัง",
    DISTRICT_ENG_NAME: "Amphoe Yarang",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94160
  },
  {
    DISTRICT_ID: 9411,
    DISTRICT_TH_NAME: "อำเภอกะพ้อ",
    DISTRICT_ENG_NAME: "Amphoe Kapho",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94230
  },
  {
    DISTRICT_ID: 9412,
    DISTRICT_TH_NAME: "อำเภอแม่ลาน",
    DISTRICT_ENG_NAME: "Amphoe Mae Lan",
    PROVINCE_ID: 94,
    GEO_ID: 6,
    ZIPCODE: 94180
  },
  {
    DISTRICT_ID: 9501,
    DISTRICT_TH_NAME: "อำเภอเมืองยะลา",
    DISTRICT_ENG_NAME: "Amphoe Mueang Yala",
    PROVINCE_ID: 95,
    GEO_ID: 6,
    ZIPCODE: 95160
  },
  {
    DISTRICT_ID: 9502,
    DISTRICT_TH_NAME: "อำเภอเบตง",
    DISTRICT_ENG_NAME: "Amphoe Betong",
    PROVINCE_ID: 95,
    GEO_ID: 6,
    ZIPCODE: 95110
  },
  {
    DISTRICT_ID: 9503,
    DISTRICT_TH_NAME: "อำเภอบันนังสตา",
    DISTRICT_ENG_NAME: "Amphoe Bannang Sata",
    PROVINCE_ID: 95,
    GEO_ID: 6,
    ZIPCODE: 95130
  },
  {
    DISTRICT_ID: 9504,
    DISTRICT_TH_NAME: "อำเภอธารโต",
    DISTRICT_ENG_NAME: "Amphoe Than To",
    PROVINCE_ID: 95,
    GEO_ID: 6,
    ZIPCODE: 95170
  },
  {
    DISTRICT_ID: 9505,
    DISTRICT_TH_NAME: "อำเภอยะหา",
    DISTRICT_ENG_NAME: "Amphoe Yaha",
    PROVINCE_ID: 95,
    GEO_ID: 6,
    ZIPCODE: 95120
  },
  {
    DISTRICT_ID: 9506,
    DISTRICT_TH_NAME: "อำเภอรามัน",
    DISTRICT_ENG_NAME: "Amphoe Raman",
    PROVINCE_ID: 95,
    GEO_ID: 6,
    ZIPCODE: 95140
  },
  {
    DISTRICT_ID: 9507,
    DISTRICT_TH_NAME: "อำเภอกาบัง",
    DISTRICT_ENG_NAME: "Amphoe Kabang",
    PROVINCE_ID: 95,
    GEO_ID: 6,
    ZIPCODE: 95120
  },
  {
    DISTRICT_ID: 9508,
    DISTRICT_TH_NAME: "อำเภอกรงปินัง",
    DISTRICT_ENG_NAME: "Amphoe Krong Pinang",
    PROVINCE_ID: 95,
    GEO_ID: 6,
    ZIPCODE: 95000
  },
  {
    DISTRICT_ID: 9601,
    DISTRICT_TH_NAME: "อำเภอเมืองนราธิวาส",
    DISTRICT_ENG_NAME: "Amphoe Mueang Narathiwat",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96000
  },
  {
    DISTRICT_ID: 9602,
    DISTRICT_TH_NAME: "อำเภอตากใบ",
    DISTRICT_ENG_NAME: "Amphoe Tak Bai",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96110
  },
  {
    DISTRICT_ID: 9603,
    DISTRICT_TH_NAME: "อำเภอบาเจาะ",
    DISTRICT_ENG_NAME: "Amphoe Bacho",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96170
  },
  {
    DISTRICT_ID: 9604,
    DISTRICT_TH_NAME: "อำเภอยี่งอ",
    DISTRICT_ENG_NAME: "Amphoe Yi-ngo",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96180
  },
  {
    DISTRICT_ID: 9605,
    DISTRICT_TH_NAME: "อำเภอระแงะ",
    DISTRICT_ENG_NAME: "Amphoe Ra-ngae",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96220
  },
  {
    DISTRICT_ID: 9606,
    DISTRICT_TH_NAME: "อำเภอรือเสาะ",
    DISTRICT_ENG_NAME: "Amphoe Rueso",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96150
  },
  {
    DISTRICT_ID: 9607,
    DISTRICT_TH_NAME: "อำเภอศรีสาคร",
    DISTRICT_ENG_NAME: "Amphoe Si Sakhon",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96210
  },
  {
    DISTRICT_ID: 9608,
    DISTRICT_TH_NAME: "อำเภอแว้ง",
    DISTRICT_ENG_NAME: "Amphoe Waeng",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96160
  },
  {
    DISTRICT_ID: 9609,
    DISTRICT_TH_NAME: "อำเภอสุคิริน",
    DISTRICT_ENG_NAME: "Amphoe Sukhirin",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96190
  },
  {
    DISTRICT_ID: 9610,
    DISTRICT_TH_NAME: "อำเภอสุไหงโก-ลก",
    DISTRICT_ENG_NAME: "Amphoe Su-ngai Kolok",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96120
  },
  {
    DISTRICT_ID: 9611,
    DISTRICT_TH_NAME: "อำเภอสุไหงปาดี",
    DISTRICT_ENG_NAME: "Amphoe Su-ngai Padi",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96140
  },
  {
    DISTRICT_ID: 9612,
    DISTRICT_TH_NAME: "อำเภอจะแนะ",
    DISTRICT_ENG_NAME: "Amphoe Chanae",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96220
  },
  {
    DISTRICT_ID: 9613,
    DISTRICT_TH_NAME: "อำเภอเจาะไอร้อง",
    DISTRICT_ENG_NAME: "Amphoe Cho-airong",
    PROVINCE_ID: 96,
    GEO_ID: 6,
    ZIPCODE: 96130
  }
];

export default districts;
