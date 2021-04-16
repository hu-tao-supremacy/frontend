const provinces = [
  {
    PROVINCE_ID: 10,
    PROVINCE_TH_NAME: "กรุงเทพมหานคร",
    PROVINCE_ENG_NAME: "Bangkok",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 11,
    PROVINCE_TH_NAME: "สมุทรปราการ",
    PROVINCE_ENG_NAME: "Samut Prakarn",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 12,
    PROVINCE_TH_NAME: "นนทบุรี",
    PROVINCE_ENG_NAME: "Nonthaburi",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 13,
    PROVINCE_TH_NAME: "ปทุมธานี",
    PROVINCE_ENG_NAME: "Pathum Thani",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 14,
    PROVINCE_TH_NAME: "พระนครศรีอยุธยา",
    PROVINCE_ENG_NAME: "Phra Nakhon Si Ayutthaya",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 15,
    PROVINCE_TH_NAME: "อ่างทอง",
    PROVINCE_ENG_NAME: "Ang Thong",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 16,
    PROVINCE_TH_NAME: "ลพบุรี",
    PROVINCE_ENG_NAME: "Lop Buri",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 17,
    PROVINCE_TH_NAME: "สิงห์บุรี",
    PROVINCE_ENG_NAME: "Sing Buri",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 18,
    PROVINCE_TH_NAME: "ชัยนาท",
    PROVINCE_ENG_NAME: "Chai Nat",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 19,
    PROVINCE_TH_NAME: "สระบุรี",
    PROVINCE_ENG_NAME: "Saraburi",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 20,
    PROVINCE_TH_NAME: "ชลบุรี",
    PROVINCE_ENG_NAME: "Chon Buri",
    GEO_ID: 2
  },
  {
    PROVINCE_ID: 21,
    PROVINCE_TH_NAME: "ระยอง",
    PROVINCE_ENG_NAME: "Rayong",
    GEO_ID: 2
  },
  {
    PROVINCE_ID: 22,
    PROVINCE_TH_NAME: "จันทบุรี",
    PROVINCE_ENG_NAME: "Chanthaburi",
    GEO_ID: 2
  },
  {
    PROVINCE_ID: 23,
    PROVINCE_TH_NAME: "ตราด",
    PROVINCE_ENG_NAME: "Trat",
    GEO_ID: 2
  },
  {
    PROVINCE_ID: 24,
    PROVINCE_TH_NAME: "ฉะเชิงเทรา",
    PROVINCE_ENG_NAME: "Chachoengsao",
    GEO_ID: 2
  },
  {
    PROVINCE_ID: 25,
    PROVINCE_TH_NAME: "ปราจีนบุรี",
    PROVINCE_ENG_NAME: "Prachin Buri",
    GEO_ID: 2
  },
  {
    PROVINCE_ID: 26,
    PROVINCE_TH_NAME: "นครนายก",
    PROVINCE_ENG_NAME: "Nakhon Nayok",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 27,
    PROVINCE_TH_NAME: "สระแก้ว",
    PROVINCE_ENG_NAME: "Sa kaeo",
    GEO_ID: 2
  },
  {
    PROVINCE_ID: 30,
    PROVINCE_TH_NAME: "นครราชสีมา",
    PROVINCE_ENG_NAME: "Nakhon Ratchasima",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 31,
    PROVINCE_TH_NAME: "บุรีรัมย์",
    PROVINCE_ENG_NAME: "Buri Ram",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 32,
    PROVINCE_TH_NAME: "สุรินทร์",
    PROVINCE_ENG_NAME: "Surin",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 33,
    PROVINCE_TH_NAME: "ศรีสะเกษ",
    PROVINCE_ENG_NAME: "Si Sa Ket",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 34,
    PROVINCE_TH_NAME: "อุบลราชธานี",
    PROVINCE_ENG_NAME: "Ubon Ratchathani",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 35,
    PROVINCE_TH_NAME: "ยโสธร",
    PROVINCE_ENG_NAME: "Yasothon",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 36,
    PROVINCE_TH_NAME: "ชัยภูมิ",
    PROVINCE_ENG_NAME: "Chaiyaphum",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 37,
    PROVINCE_TH_NAME: "อำนาจเจริญ",
    PROVINCE_ENG_NAME: "Amnat Charoen",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 38,
    PROVINCE_TH_NAME: "บึงกาฬ",
    PROVINCE_ENG_NAME: "Bueng Kan",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 39,
    PROVINCE_TH_NAME: "หนองบัวลำภู",
    PROVINCE_ENG_NAME: "Nong Bua Lam Phu",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 40,
    PROVINCE_TH_NAME: "ขอนแก่น",
    PROVINCE_ENG_NAME: "Khon Kaen",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 41,
    PROVINCE_TH_NAME: "อุดรธานี",
    PROVINCE_ENG_NAME: "Udon Thani",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 42,
    PROVINCE_TH_NAME: "เลย",
    PROVINCE_ENG_NAME: "Loei",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 43,
    PROVINCE_TH_NAME: "หนองคาย",
    PROVINCE_ENG_NAME: "Nong Khai",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 44,
    PROVINCE_TH_NAME: "มหาสารคาม",
    PROVINCE_ENG_NAME: "Maha Sarakham",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 45,
    PROVINCE_TH_NAME: "ร้อยเอ็ด",
    PROVINCE_ENG_NAME: "Roi Et",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 46,
    PROVINCE_TH_NAME: "กาฬสินธุ์",
    PROVINCE_ENG_NAME: "Kalasin",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 47,
    PROVINCE_TH_NAME: "สกลนคร",
    PROVINCE_ENG_NAME: "Sakon Nakhon",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 48,
    PROVINCE_TH_NAME: "นครพนม",
    PROVINCE_ENG_NAME: "Nakhon Phanom",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 49,
    PROVINCE_TH_NAME: "มุกดาหาร",
    PROVINCE_ENG_NAME: "Mukdahan",
    GEO_ID: 3
  },
  {
    PROVINCE_ID: 50,
    PROVINCE_TH_NAME: "เชียงใหม่",
    PROVINCE_ENG_NAME: "Chiang Mai",
    GEO_ID: 4
  },
  {
    PROVINCE_ID: 51,
    PROVINCE_TH_NAME: "ลำพูน",
    PROVINCE_ENG_NAME: "Lamphun",
    GEO_ID: 4
  },
  {
    PROVINCE_ID: 52,
    PROVINCE_TH_NAME: "ลำปาง",
    PROVINCE_ENG_NAME: "Lampang",
    GEO_ID: 4
  },
  {
    PROVINCE_ID: 53,
    PROVINCE_TH_NAME: "อุตรดิตถ์",
    PROVINCE_ENG_NAME: "Uttaradit",
    GEO_ID: 4
  },
  {
    PROVINCE_ID: 54,
    PROVINCE_TH_NAME: "แพร่",
    PROVINCE_ENG_NAME: "Phrae",
    GEO_ID: 4
  },
  {
    PROVINCE_ID: 55,
    PROVINCE_TH_NAME: "น่าน",
    PROVINCE_ENG_NAME: "Nan",
    GEO_ID: 4
  },
  {
    PROVINCE_ID: 56,
    PROVINCE_TH_NAME: "พะเยา",
    PROVINCE_ENG_NAME: "Phayao",
    GEO_ID: 4
  },
  {
    PROVINCE_ID: 57,
    PROVINCE_TH_NAME: "เชียงราย",
    PROVINCE_ENG_NAME: "Chiang Rai",
    GEO_ID: 4
  },
  {
    PROVINCE_ID: 58,
    PROVINCE_TH_NAME: "แม่ฮ่องสอน",
    PROVINCE_ENG_NAME: "Mae Hong Son",
    GEO_ID: 4
  },
  {
    PROVINCE_ID: 60,
    PROVINCE_TH_NAME: "นครสวรรค์",
    PROVINCE_ENG_NAME: "Nakhon Sawan",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 61,
    PROVINCE_TH_NAME: "อุทัยธานี",
    PROVINCE_ENG_NAME: "Uthai Thani",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 62,
    PROVINCE_TH_NAME: "กำแพงเพชร",
    PROVINCE_ENG_NAME: "Kamphaeng Phet",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 63,
    PROVINCE_TH_NAME: "ตาก",
    PROVINCE_ENG_NAME: "Tak",
    GEO_ID: 5
  },
  {
    PROVINCE_ID: 64,
    PROVINCE_TH_NAME: "สุโขทัย",
    PROVINCE_ENG_NAME: "Sukhothai",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 65,
    PROVINCE_TH_NAME: "พิษณุโลก",
    PROVINCE_ENG_NAME: "Phitsanulok",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 66,
    PROVINCE_TH_NAME: "พิจิตร",
    PROVINCE_ENG_NAME: "Phichit",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 67,
    PROVINCE_TH_NAME: "เพชรบูรณ์",
    PROVINCE_ENG_NAME: "Phetchabun",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 70,
    PROVINCE_TH_NAME: "ราชบุรี",
    PROVINCE_ENG_NAME: "Ratchaburi",
    GEO_ID: 5
  },
  {
    PROVINCE_ID: 71,
    PROVINCE_TH_NAME: "กาญจนบุรี",
    PROVINCE_ENG_NAME: "Kanchanaburi",
    GEO_ID: 5
  },
  {
    PROVINCE_ID: 72,
    PROVINCE_TH_NAME: "สุพรรณบุรี",
    PROVINCE_ENG_NAME: "Suphan Buri",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 73,
    PROVINCE_TH_NAME: "นครปฐม",
    PROVINCE_ENG_NAME: "Nakhon Pathom",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 74,
    PROVINCE_TH_NAME: "สมุทรสาคร",
    PROVINCE_ENG_NAME: "Samut Sakhon",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 75,
    PROVINCE_TH_NAME: "สมุทรสงคราม",
    PROVINCE_ENG_NAME: "Samut Songkhram",
    GEO_ID: 1
  },
  {
    PROVINCE_ID: 76,
    PROVINCE_TH_NAME: "เพชรบุรี",
    PROVINCE_ENG_NAME: "Phetchaburi",
    GEO_ID: 5
  },
  {
    PROVINCE_ID: 77,
    PROVINCE_TH_NAME: "ประจวบคีรีขันธ์",
    PROVINCE_ENG_NAME: "Prachuap Khiri Khan",
    GEO_ID: 5
  },
  {
    PROVINCE_ID: 80,
    PROVINCE_TH_NAME: "นครศรีธรรมราช",
    PROVINCE_ENG_NAME: "Nakhon Si Thammarat",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 81,
    PROVINCE_TH_NAME: "กระบี่",
    PROVINCE_ENG_NAME: "Krabi",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 82,
    PROVINCE_TH_NAME: "พังงา",
    PROVINCE_ENG_NAME: "Phang-nga",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 83,
    PROVINCE_TH_NAME: "ภูเก็ต",
    PROVINCE_ENG_NAME: "Phuket",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 84,
    PROVINCE_TH_NAME: "สุราษฎร์ธานี",
    PROVINCE_ENG_NAME: "Surat Thani",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 85,
    PROVINCE_TH_NAME: "ระนอง",
    PROVINCE_ENG_NAME: "Ranong",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 86,
    PROVINCE_TH_NAME: "ชุมพร",
    PROVINCE_ENG_NAME: "Chumphon",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 90,
    PROVINCE_TH_NAME: "สงขลา",
    PROVINCE_ENG_NAME: "Songkhla",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 91,
    PROVINCE_TH_NAME: "สตูล",
    PROVINCE_ENG_NAME: "Satun",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 92,
    PROVINCE_TH_NAME: "ตรัง",
    PROVINCE_ENG_NAME: "Trang",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 93,
    PROVINCE_TH_NAME: "พัทลุง",
    PROVINCE_ENG_NAME: "Phatthalung",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 94,
    PROVINCE_TH_NAME: "ปัตตานี",
    PROVINCE_ENG_NAME: "Pattani",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 95,
    PROVINCE_TH_NAME: "ยะลา",
    PROVINCE_ENG_NAME: "Yala",
    GEO_ID: 6
  },
  {
    PROVINCE_ID: 96,
    PROVINCE_TH_NAME: "นราธิวาส",
    PROVINCE_ENG_NAME: "Narathiwat",
    GEO_ID: 6
  }
];

export default provinces;
