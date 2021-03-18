const districts = [
  {
    DISTRICT_ID: 1,
    DISTRICT_CODE: "1001",
    DISTRICT_NAME: "เขตพระนคร",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 2,
    DISTRICT_CODE: "1002",
    DISTRICT_NAME: "เขตดุสิต",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 3,
    DISTRICT_CODE: "1003",
    DISTRICT_NAME: "เขตหนองจอก",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 4,
    DISTRICT_CODE: "1004",
    DISTRICT_NAME: "เขตบางรัก",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 5,
    DISTRICT_CODE: "1005",
    DISTRICT_NAME: "เขตบางเขน",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 6,
    DISTRICT_CODE: "1006",
    DISTRICT_NAME: "เขตบางกะปิ",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 7,
    DISTRICT_CODE: "1007",
    DISTRICT_NAME: "เขตปทุมวัน",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 8,
    DISTRICT_CODE: "1008",
    DISTRICT_NAME: "เขตป้อมปราบศัตรูพ่าย",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 9,
    DISTRICT_CODE: "1009",
    DISTRICT_NAME: "เขตพระโขนง",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 10,
    DISTRICT_CODE: "1010",
    DISTRICT_NAME: "เขตมีนบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 11,
    DISTRICT_CODE: "1011",
    DISTRICT_NAME: "เขตลาดกระบัง",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 12,
    DISTRICT_CODE: "1012",
    DISTRICT_NAME: "เขตยานนาวา",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 13,
    DISTRICT_CODE: "1013",
    DISTRICT_NAME: "เขตสัมพันธวงศ์",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 14,
    DISTRICT_CODE: "1014",
    DISTRICT_NAME: "เขตพญาไท",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 15,
    DISTRICT_CODE: "1015",
    DISTRICT_NAME: "เขตธนบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 16,
    DISTRICT_CODE: "1016",
    DISTRICT_NAME: "เขตบางกอกใหญ่",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 17,
    DISTRICT_CODE: "1017",
    DISTRICT_NAME: "เขตห้วยขวาง",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 18,
    DISTRICT_CODE: "1018",
    DISTRICT_NAME: "เขตคลองสาน",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 19,
    DISTRICT_CODE: "1019",
    DISTRICT_NAME: "เขตตลิ่งชัน",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 20,
    DISTRICT_CODE: "1020",
    DISTRICT_NAME: "เขตบางกอกน้อย",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 21,
    DISTRICT_CODE: "1021",
    DISTRICT_NAME: "เขตบางขุนเทียน",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 22,
    DISTRICT_CODE: "1022",
    DISTRICT_NAME: "เขตภาษีเจริญ",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 23,
    DISTRICT_CODE: "1023",
    DISTRICT_NAME: "เขตหนองแขม",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 24,
    DISTRICT_CODE: "1024",
    DISTRICT_NAME: "เขตราษฎร์บูรณะ",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 25,
    DISTRICT_CODE: "1025",
    DISTRICT_NAME: "เขตบางพลัด",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 26,
    DISTRICT_CODE: "1026",
    DISTRICT_NAME: "เขตดินแดง",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 27,
    DISTRICT_CODE: "1027",
    DISTRICT_NAME: "เขตบึงกุ่ม",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 28,
    DISTRICT_CODE: "1028",
    DISTRICT_NAME: "เขตสาทร",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 29,
    DISTRICT_CODE: "1029",
    DISTRICT_NAME: "เขตบางซื่อ",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 30,
    DISTRICT_CODE: "1030",
    DISTRICT_NAME: "เขตจตุจักร",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 31,
    DISTRICT_CODE: "1031",
    DISTRICT_NAME: "เขตบางคอแหลม",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 32,
    DISTRICT_CODE: "1032",
    DISTRICT_NAME: "เขตประเวศ",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 33,
    DISTRICT_CODE: "1033",
    DISTRICT_NAME: "เขตคลองเตย",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 34,
    DISTRICT_CODE: "1034",
    DISTRICT_NAME: "เขตสวนหลวง",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 35,
    DISTRICT_CODE: "1035",
    DISTRICT_NAME: "เขตจอมทอง",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 36,
    DISTRICT_CODE: "1036",
    DISTRICT_NAME: "เขตดอนเมือง",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 37,
    DISTRICT_CODE: "1037",
    DISTRICT_NAME: "เขตราชเทวี",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 38,
    DISTRICT_CODE: "1038",
    DISTRICT_NAME: "เขตลาดพร้าว",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 39,
    DISTRICT_CODE: "1039",
    DISTRICT_NAME: "เขตวัฒนา",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 40,
    DISTRICT_CODE: "1040",
    DISTRICT_NAME: "เขตบางแค",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 41,
    DISTRICT_CODE: "1041",
    DISTRICT_NAME: "เขตหลักสี่",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 42,
    DISTRICT_CODE: "1042",
    DISTRICT_NAME: "เขตสายไหม",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 43,
    DISTRICT_CODE: "1043",
    DISTRICT_NAME: "เขตคันนายาว",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 44,
    DISTRICT_CODE: "1044",
    DISTRICT_NAME: "เขตสะพานสูง",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 45,
    DISTRICT_CODE: "1045",
    DISTRICT_NAME: "เขตวังทองหลาง",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 46,
    DISTRICT_CODE: "1046",
    DISTRICT_NAME: "เขตคลองสามวา",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 47,
    DISTRICT_CODE: "1047",
    DISTRICT_NAME: "เขตบางนา",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 48,
    DISTRICT_CODE: "1048",
    DISTRICT_NAME: "เขตทวีวัฒนา",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 49,
    DISTRICT_CODE: "1049",
    DISTRICT_NAME: "เขตทุ่งครุ",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 50,
    DISTRICT_CODE: "1050",
    DISTRICT_NAME: "เขตบางบอน",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 51,
    DISTRICT_CODE: "1081",
    DISTRICT_NAME: "*บ้านทะวาย",
    GEO_ID: 2,
    PROVINCE_ID: 1
  },
  {
    DISTRICT_ID: 52,
    DISTRICT_CODE: "1101",
    DISTRICT_NAME: "เมืองสมุทรปราการ",
    GEO_ID: 2,
    PROVINCE_ID: 2
  },
  {
    DISTRICT_ID: 53,
    DISTRICT_CODE: "1102",
    DISTRICT_NAME: "บางบ่อ",
    GEO_ID: 2,
    PROVINCE_ID: 2
  },
  {
    DISTRICT_ID: 54,
    DISTRICT_CODE: "1103",
    DISTRICT_NAME: "บางพลี",
    GEO_ID: 2,
    PROVINCE_ID: 2
  },
  {
    DISTRICT_ID: 55,
    DISTRICT_CODE: "1104",
    DISTRICT_NAME: "พระประแดง",
    GEO_ID: 2,
    PROVINCE_ID: 2
  },
  {
    DISTRICT_ID: 56,
    DISTRICT_CODE: "1105",
    DISTRICT_NAME: "พระสมุทรเจดีย์",
    GEO_ID: 2,
    PROVINCE_ID: 2
  },
  {
    DISTRICT_ID: 57,
    DISTRICT_CODE: "1106",
    DISTRICT_NAME: "บางเสาธง",
    GEO_ID: 2,
    PROVINCE_ID: 2
  },
  {
    DISTRICT_ID: 58,
    DISTRICT_CODE: "1201",
    DISTRICT_NAME: "เมืองนนทบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 3
  },
  {
    DISTRICT_ID: 59,
    DISTRICT_CODE: "1202",
    DISTRICT_NAME: "บางกรวย",
    GEO_ID: 2,
    PROVINCE_ID: 3
  },
  {
    DISTRICT_ID: 60,
    DISTRICT_CODE: "1203",
    DISTRICT_NAME: "บางใหญ่",
    GEO_ID: 2,
    PROVINCE_ID: 3
  },
  {
    DISTRICT_ID: 61,
    DISTRICT_CODE: "1204",
    DISTRICT_NAME: "บางบัวทอง",
    GEO_ID: 2,
    PROVINCE_ID: 3
  },
  {
    DISTRICT_ID: 62,
    DISTRICT_CODE: "1205",
    DISTRICT_NAME: "ไทรน้อย",
    GEO_ID: 2,
    PROVINCE_ID: 3
  },
  {
    DISTRICT_ID: 63,
    DISTRICT_CODE: "1206",
    DISTRICT_NAME: "ปากเกร็ด",
    GEO_ID: 2,
    PROVINCE_ID: 3
  },
  {
    DISTRICT_ID: 64,
    DISTRICT_CODE: "1251",
    DISTRICT_NAME: "เทศบาลนครนนทบุรี (สาขาแขวงท่าทราย)*",
    GEO_ID: 2,
    PROVINCE_ID: 3
  },
  {
    DISTRICT_ID: 65,
    DISTRICT_CODE: "1297",
    DISTRICT_NAME: "เทศบาลเมืองปากเกร็ด*",
    GEO_ID: 2,
    PROVINCE_ID: 3
  },
  {
    DISTRICT_ID: 66,
    DISTRICT_CODE: "1301",
    DISTRICT_NAME: "เมืองปทุมธานี",
    GEO_ID: 2,
    PROVINCE_ID: 4
  },
  {
    DISTRICT_ID: 67,
    DISTRICT_CODE: "1302",
    DISTRICT_NAME: "คลองหลวง",
    GEO_ID: 2,
    PROVINCE_ID: 4
  },
  {
    DISTRICT_ID: 68,
    DISTRICT_CODE: "1303",
    DISTRICT_NAME: "ธัญบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 4
  },
  {
    DISTRICT_ID: 69,
    DISTRICT_CODE: "1304",
    DISTRICT_NAME: "หนองเสือ",
    GEO_ID: 2,
    PROVINCE_ID: 4
  },
  {
    DISTRICT_ID: 70,
    DISTRICT_CODE: "1305",
    DISTRICT_NAME: "ลาดหลุมแก้ว",
    GEO_ID: 2,
    PROVINCE_ID: 4
  },
  {
    DISTRICT_ID: 71,
    DISTRICT_CODE: "1306",
    DISTRICT_NAME: "ลำลูกกา",
    GEO_ID: 2,
    PROVINCE_ID: 4
  },
  {
    DISTRICT_ID: 72,
    DISTRICT_CODE: "1307",
    DISTRICT_NAME: "สามโคก",
    GEO_ID: 2,
    PROVINCE_ID: 4
  },
  {
    DISTRICT_ID: 73,
    DISTRICT_CODE: "1351",
    DISTRICT_NAME: "ลำลูกกา (สาขาตำบลคูคต)*",
    GEO_ID: 2,
    PROVINCE_ID: 4
  },
  {
    DISTRICT_ID: 74,
    DISTRICT_CODE: "1401",
    DISTRICT_NAME: "พระนครศรีอยุธยา",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 75,
    DISTRICT_CODE: "1402",
    DISTRICT_NAME: "ท่าเรือ",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 76,
    DISTRICT_CODE: "1403",
    DISTRICT_NAME: "นครหลวง",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 77,
    DISTRICT_CODE: "1404",
    DISTRICT_NAME: "บางไทร",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 78,
    DISTRICT_CODE: "1405",
    DISTRICT_NAME: "บางบาล",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 79,
    DISTRICT_CODE: "1406",
    DISTRICT_NAME: "บางปะอิน",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 80,
    DISTRICT_CODE: "1407",
    DISTRICT_NAME: "บางปะหัน",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 81,
    DISTRICT_CODE: "1408",
    DISTRICT_NAME: "ผักไห่",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 82,
    DISTRICT_CODE: "1409",
    DISTRICT_NAME: "ภาชี",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 83,
    DISTRICT_CODE: "1410",
    DISTRICT_NAME: "ลาดบัวหลวง",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 84,
    DISTRICT_CODE: "1411",
    DISTRICT_NAME: "วังน้อย",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 85,
    DISTRICT_CODE: "1412",
    DISTRICT_NAME: "เสนา",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 86,
    DISTRICT_CODE: "1413",
    DISTRICT_NAME: "บางซ้าย",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 87,
    DISTRICT_CODE: "1414",
    DISTRICT_NAME: "อุทัย",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 88,
    DISTRICT_CODE: "1415",
    DISTRICT_NAME: "มหาราช",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 89,
    DISTRICT_CODE: "1416",
    DISTRICT_NAME: "บ้านแพรก",
    GEO_ID: 2,
    PROVINCE_ID: 5
  },
  {
    DISTRICT_ID: 90,
    DISTRICT_CODE: "1501",
    DISTRICT_NAME: "เมืองอ่างทอง",
    GEO_ID: 2,
    PROVINCE_ID: 6
  },
  {
    DISTRICT_ID: 91,
    DISTRICT_CODE: "1502",
    DISTRICT_NAME: "ไชโย",
    GEO_ID: 2,
    PROVINCE_ID: 6
  },
  {
    DISTRICT_ID: 92,
    DISTRICT_CODE: "1503",
    DISTRICT_NAME: "ป่าโมก",
    GEO_ID: 2,
    PROVINCE_ID: 6
  },
  {
    DISTRICT_ID: 93,
    DISTRICT_CODE: "1504",
    DISTRICT_NAME: "โพธิ์ทอง",
    GEO_ID: 2,
    PROVINCE_ID: 6
  },
  {
    DISTRICT_ID: 94,
    DISTRICT_CODE: "1505",
    DISTRICT_NAME: "แสวงหา",
    GEO_ID: 2,
    PROVINCE_ID: 6
  },
  {
    DISTRICT_ID: 95,
    DISTRICT_CODE: "1506",
    DISTRICT_NAME: "วิเศษชัยชาญ",
    GEO_ID: 2,
    PROVINCE_ID: 6
  },
  {
    DISTRICT_ID: 96,
    DISTRICT_CODE: "1507",
    DISTRICT_NAME: "สามโก้",
    GEO_ID: 2,
    PROVINCE_ID: 6
  },
  {
    DISTRICT_ID: 97,
    DISTRICT_CODE: "1601",
    DISTRICT_NAME: "เมืองลพบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 98,
    DISTRICT_CODE: "1602",
    DISTRICT_NAME: "พัฒนานิคม",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 99,
    DISTRICT_CODE: "1603",
    DISTRICT_NAME: "โคกสำโรง",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 100,
    DISTRICT_CODE: "1604",
    DISTRICT_NAME: "ชัยบาดาล",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 101,
    DISTRICT_CODE: "1605",
    DISTRICT_NAME: "ท่าวุ้ง",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 102,
    DISTRICT_CODE: "1606",
    DISTRICT_NAME: "บ้านหมี่",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 103,
    DISTRICT_CODE: "1607",
    DISTRICT_NAME: "ท่าหลวง",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 104,
    DISTRICT_CODE: "1608",
    DISTRICT_NAME: "สระโบสถ์",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 105,
    DISTRICT_CODE: "1609",
    DISTRICT_NAME: "โคกเจริญ",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 106,
    DISTRICT_CODE: "1610",
    DISTRICT_NAME: "ลำสนธิ",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 107,
    DISTRICT_CODE: "1611",
    DISTRICT_NAME: "หนองม่วง",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 108,
    DISTRICT_CODE: "1681",
    DISTRICT_NAME: "*อ.บ้านเช่า  จ.ลพบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 7
  },
  {
    DISTRICT_ID: 109,
    DISTRICT_CODE: "1701",
    DISTRICT_NAME: "เมืองสิงห์บุรี",
    GEO_ID: 2,
    PROVINCE_ID: 8
  },
  {
    DISTRICT_ID: 110,
    DISTRICT_CODE: "1702",
    DISTRICT_NAME: "บางระจัน",
    GEO_ID: 2,
    PROVINCE_ID: 8
  },
  {
    DISTRICT_ID: 111,
    DISTRICT_CODE: "1703",
    DISTRICT_NAME: "ค่ายบางระจัน",
    GEO_ID: 2,
    PROVINCE_ID: 8
  },
  {
    DISTRICT_ID: 112,
    DISTRICT_CODE: "1704",
    DISTRICT_NAME: "พรหมบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 8
  },
  {
    DISTRICT_ID: 113,
    DISTRICT_CODE: "1705",
    DISTRICT_NAME: "ท่าช้าง",
    GEO_ID: 2,
    PROVINCE_ID: 8
  },
  {
    DISTRICT_ID: 114,
    DISTRICT_CODE: "1706",
    DISTRICT_NAME: "อินทร์บุรี",
    GEO_ID: 2,
    PROVINCE_ID: 8
  },
  {
    DISTRICT_ID: 115,
    DISTRICT_CODE: "1801",
    DISTRICT_NAME: "เมืองชัยนาท",
    GEO_ID: 2,
    PROVINCE_ID: 9
  },
  {
    DISTRICT_ID: 116,
    DISTRICT_CODE: "1802",
    DISTRICT_NAME: "มโนรมย์",
    GEO_ID: 2,
    PROVINCE_ID: 9
  },
  {
    DISTRICT_ID: 117,
    DISTRICT_CODE: "1803",
    DISTRICT_NAME: "วัดสิงห์",
    GEO_ID: 2,
    PROVINCE_ID: 9
  },
  {
    DISTRICT_ID: 118,
    DISTRICT_CODE: "1804",
    DISTRICT_NAME: "สรรพยา",
    GEO_ID: 2,
    PROVINCE_ID: 9
  },
  {
    DISTRICT_ID: 119,
    DISTRICT_CODE: "1805",
    DISTRICT_NAME: "สรรคบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 9
  },
  {
    DISTRICT_ID: 120,
    DISTRICT_CODE: "1806",
    DISTRICT_NAME: "หันคา",
    GEO_ID: 2,
    PROVINCE_ID: 9
  },
  {
    DISTRICT_ID: 121,
    DISTRICT_CODE: "1807",
    DISTRICT_NAME: "หนองมะโมง",
    GEO_ID: 2,
    PROVINCE_ID: 9
  },
  {
    DISTRICT_ID: 122,
    DISTRICT_CODE: "1808",
    DISTRICT_NAME: "เนินขาม",
    GEO_ID: 2,
    PROVINCE_ID: 9
  },
  {
    DISTRICT_ID: 123,
    DISTRICT_CODE: "1901",
    DISTRICT_NAME: "เมืองสระบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 124,
    DISTRICT_CODE: "1902",
    DISTRICT_NAME: "แก่งคอย",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 125,
    DISTRICT_CODE: "1903",
    DISTRICT_NAME: "หนองแค",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 126,
    DISTRICT_CODE: "1904",
    DISTRICT_NAME: "วิหารแดง",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 127,
    DISTRICT_CODE: "1905",
    DISTRICT_NAME: "หนองแซง",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 128,
    DISTRICT_CODE: "1906",
    DISTRICT_NAME: "บ้านหมอ",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 129,
    DISTRICT_CODE: "1907",
    DISTRICT_NAME: "ดอนพุด",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 130,
    DISTRICT_CODE: "1908",
    DISTRICT_NAME: "หนองโดน",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 131,
    DISTRICT_CODE: "1909",
    DISTRICT_NAME: "พระพุทธบาท",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 132,
    DISTRICT_CODE: "1910",
    DISTRICT_NAME: "เสาไห้",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 133,
    DISTRICT_CODE: "1911",
    DISTRICT_NAME: "มวกเหล็ก",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 134,
    DISTRICT_CODE: "1912",
    DISTRICT_NAME: "วังม่วง",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 135,
    DISTRICT_CODE: "1913",
    DISTRICT_NAME: "เฉลิมพระเกียรติ",
    GEO_ID: 2,
    PROVINCE_ID: 10
  },
  {
    DISTRICT_ID: 136,
    DISTRICT_CODE: "2001",
    DISTRICT_NAME: "เมืองชลบุรี",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 137,
    DISTRICT_CODE: "2002",
    DISTRICT_NAME: "บ้านบึง",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 138,
    DISTRICT_CODE: "2003",
    DISTRICT_NAME: "หนองใหญ่",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 139,
    DISTRICT_CODE: "2004",
    DISTRICT_NAME: "บางละมุง",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 140,
    DISTRICT_CODE: "2005",
    DISTRICT_NAME: "พานทอง",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 141,
    DISTRICT_CODE: "2006",
    DISTRICT_NAME: "พนัสนิคม",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 142,
    DISTRICT_CODE: "2007",
    DISTRICT_NAME: "ศรีราชา",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 143,
    DISTRICT_CODE: "2008",
    DISTRICT_NAME: "เกาะสีชัง",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 144,
    DISTRICT_CODE: "2009",
    DISTRICT_NAME: "สัตหีบ",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 145,
    DISTRICT_CODE: "2010",
    DISTRICT_NAME: "บ่อทอง",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 146,
    DISTRICT_CODE: "2011",
    DISTRICT_NAME: "เกาะจันทร์",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 147,
    DISTRICT_CODE: "2051",
    DISTRICT_NAME: "สัตหีบ (สาขาตำบลบางเสร่)*",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 148,
    DISTRICT_CODE: "2072",
    DISTRICT_NAME: "ท้องถิ่นเทศบาลเมืองหนองปรือ*",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 149,
    DISTRICT_CODE: "2093",
    DISTRICT_NAME: "เทศบาลตำบลแหลมฉบัง*",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 150,
    DISTRICT_CODE: "2099",
    DISTRICT_NAME: "เทศบาลเมืองชลบุรี*",
    GEO_ID: 5,
    PROVINCE_ID: 11
  },
  {
    DISTRICT_ID: 151,
    DISTRICT_CODE: "2101",
    DISTRICT_NAME: "เมืองระยอง",
    GEO_ID: 5,
    PROVINCE_ID: 12
  },
  {
    DISTRICT_ID: 152,
    DISTRICT_CODE: "2102",
    DISTRICT_NAME: "บ้านฉาง",
    GEO_ID: 5,
    PROVINCE_ID: 12
  },
  {
    DISTRICT_ID: 153,
    DISTRICT_CODE: "2103",
    DISTRICT_NAME: "แกลง",
    GEO_ID: 5,
    PROVINCE_ID: 12
  },
  {
    DISTRICT_ID: 154,
    DISTRICT_CODE: "2104",
    DISTRICT_NAME: "วังจันทร์",
    GEO_ID: 5,
    PROVINCE_ID: 12
  },
  {
    DISTRICT_ID: 155,
    DISTRICT_CODE: "2105",
    DISTRICT_NAME: "บ้านค่าย",
    GEO_ID: 5,
    PROVINCE_ID: 12
  },
  {
    DISTRICT_ID: 156,
    DISTRICT_CODE: "2106",
    DISTRICT_NAME: "ปลวกแดง",
    GEO_ID: 5,
    PROVINCE_ID: 12
  },
  {
    DISTRICT_ID: 157,
    DISTRICT_CODE: "2107",
    DISTRICT_NAME: "เขาชะเมา",
    GEO_ID: 5,
    PROVINCE_ID: 12
  },
  {
    DISTRICT_ID: 158,
    DISTRICT_CODE: "2108",
    DISTRICT_NAME: "นิคมพัฒนา",
    GEO_ID: 5,
    PROVINCE_ID: 12
  },
  {
    DISTRICT_ID: 159,
    DISTRICT_CODE: "2151",
    DISTRICT_NAME: "สาขาตำบลมาบข่า*",
    GEO_ID: 5,
    PROVINCE_ID: 12
  },
  {
    DISTRICT_ID: 160,
    DISTRICT_CODE: "2201",
    DISTRICT_NAME: "เมืองจันทบุรี",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 161,
    DISTRICT_CODE: "2202",
    DISTRICT_NAME: "ขลุง",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 162,
    DISTRICT_CODE: "2203",
    DISTRICT_NAME: "ท่าใหม่",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 163,
    DISTRICT_CODE: "2204",
    DISTRICT_NAME: "โป่งน้ำร้อน",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 164,
    DISTRICT_CODE: "2205",
    DISTRICT_NAME: "มะขาม",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 165,
    DISTRICT_CODE: "2206",
    DISTRICT_NAME: "แหลมสิงห์",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 166,
    DISTRICT_CODE: "2207",
    DISTRICT_NAME: "สอยดาว",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 167,
    DISTRICT_CODE: "2208",
    DISTRICT_NAME: "แก่งหางแมว",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 168,
    DISTRICT_CODE: "2209",
    DISTRICT_NAME: "นายายอาม",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 169,
    DISTRICT_CODE: "2210",
    DISTRICT_NAME: "เขาคิชฌกูฏ",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 170,
    DISTRICT_CODE: "2281",
    DISTRICT_NAME: "*กิ่ง อ.กำพุธ  จ.จันทบุรี",
    GEO_ID: 5,
    PROVINCE_ID: 13
  },
  {
    DISTRICT_ID: 171,
    DISTRICT_CODE: "2301",
    DISTRICT_NAME: "เมืองตราด",
    GEO_ID: 5,
    PROVINCE_ID: 14
  },
  {
    DISTRICT_ID: 172,
    DISTRICT_CODE: "2302",
    DISTRICT_NAME: "คลองใหญ่",
    GEO_ID: 5,
    PROVINCE_ID: 14
  },
  {
    DISTRICT_ID: 173,
    DISTRICT_CODE: "2303",
    DISTRICT_NAME: "เขาสมิง",
    GEO_ID: 5,
    PROVINCE_ID: 14
  },
  {
    DISTRICT_ID: 174,
    DISTRICT_CODE: "2304",
    DISTRICT_NAME: "บ่อไร่",
    GEO_ID: 5,
    PROVINCE_ID: 14
  },
  {
    DISTRICT_ID: 175,
    DISTRICT_CODE: "2305",
    DISTRICT_NAME: "แหลมงอบ",
    GEO_ID: 5,
    PROVINCE_ID: 14
  },
  {
    DISTRICT_ID: 176,
    DISTRICT_CODE: "2306",
    DISTRICT_NAME: "เกาะกูด",
    GEO_ID: 5,
    PROVINCE_ID: 14
  },
  {
    DISTRICT_ID: 177,
    DISTRICT_CODE: "2307",
    DISTRICT_NAME: "เกาะช้าง",
    GEO_ID: 5,
    PROVINCE_ID: 14
  },
  {
    DISTRICT_ID: 178,
    DISTRICT_CODE: "2401",
    DISTRICT_NAME: "เมืองฉะเชิงเทรา",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 179,
    DISTRICT_CODE: "2402",
    DISTRICT_NAME: "บางคล้า",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 180,
    DISTRICT_CODE: "2403",
    DISTRICT_NAME: "บางน้ำเปรี้ยว",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 181,
    DISTRICT_CODE: "2404",
    DISTRICT_NAME: "บางปะกง",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 182,
    DISTRICT_CODE: "2405",
    DISTRICT_NAME: "บ้านโพธิ์",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 183,
    DISTRICT_CODE: "2406",
    DISTRICT_NAME: "พนมสารคาม",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 184,
    DISTRICT_CODE: "2407",
    DISTRICT_NAME: "ราชสาส์น",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 185,
    DISTRICT_CODE: "2408",
    DISTRICT_NAME: "สนามชัยเขต",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 186,
    DISTRICT_CODE: "2409",
    DISTRICT_NAME: "แปลงยาว",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 187,
    DISTRICT_CODE: "2410",
    DISTRICT_NAME: "ท่าตะเกียบ",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 188,
    DISTRICT_CODE: "2411",
    DISTRICT_NAME: "คลองเขื่อน",
    GEO_ID: 5,
    PROVINCE_ID: 15
  },
  {
    DISTRICT_ID: 189,
    DISTRICT_CODE: "2501",
    DISTRICT_NAME: "เมืองปราจีนบุรี",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 190,
    DISTRICT_CODE: "2502",
    DISTRICT_NAME: "กบินทร์บุรี",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 191,
    DISTRICT_CODE: "2503",
    DISTRICT_NAME: "นาดี",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 192,
    DISTRICT_CODE: "2504",
    DISTRICT_NAME: "*สระแก้ว",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 193,
    DISTRICT_CODE: "2505",
    DISTRICT_NAME: "*วังน้ำเย็น",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 194,
    DISTRICT_CODE: "2506",
    DISTRICT_NAME: "บ้านสร้าง",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 195,
    DISTRICT_CODE: "2507",
    DISTRICT_NAME: "ประจันตคาม",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 196,
    DISTRICT_CODE: "2508",
    DISTRICT_NAME: "ศรีมหาโพธิ",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 197,
    DISTRICT_CODE: "2509",
    DISTRICT_NAME: "ศรีมโหสถ",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 198,
    DISTRICT_CODE: "2510",
    DISTRICT_NAME: "*อรัญประเทศ",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 199,
    DISTRICT_CODE: "2511",
    DISTRICT_NAME: "*ตาพระยา",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 200,
    DISTRICT_CODE: "2512",
    DISTRICT_NAME: "*วัฒนานคร",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 201,
    DISTRICT_CODE: "2513",
    DISTRICT_NAME: "*คลองหาด",
    GEO_ID: 5,
    PROVINCE_ID: 16
  },
  {
    DISTRICT_ID: 202,
    DISTRICT_CODE: "2601",
    DISTRICT_NAME: "เมืองนครนายก",
    GEO_ID: 2,
    PROVINCE_ID: 17
  },
  {
    DISTRICT_ID: 203,
    DISTRICT_CODE: "2602",
    DISTRICT_NAME: "ปากพลี",
    GEO_ID: 2,
    PROVINCE_ID: 17
  },
  {
    DISTRICT_ID: 204,
    DISTRICT_CODE: "2603",
    DISTRICT_NAME: "บ้านนา",
    GEO_ID: 2,
    PROVINCE_ID: 17
  },
  {
    DISTRICT_ID: 205,
    DISTRICT_CODE: "2604",
    DISTRICT_NAME: "องครักษ์",
    GEO_ID: 2,
    PROVINCE_ID: 17
  },
  {
    DISTRICT_ID: 206,
    DISTRICT_CODE: "2701",
    DISTRICT_NAME: "เมืองสระแก้ว",
    GEO_ID: 5,
    PROVINCE_ID: 18
  },
  {
    DISTRICT_ID: 207,
    DISTRICT_CODE: "2702",
    DISTRICT_NAME: "คลองหาด",
    GEO_ID: 5,
    PROVINCE_ID: 18
  },
  {
    DISTRICT_ID: 208,
    DISTRICT_CODE: "2703",
    DISTRICT_NAME: "ตาพระยา",
    GEO_ID: 5,
    PROVINCE_ID: 18
  },
  {
    DISTRICT_ID: 209,
    DISTRICT_CODE: "2704",
    DISTRICT_NAME: "วังน้ำเย็น",
    GEO_ID: 5,
    PROVINCE_ID: 18
  },
  {
    DISTRICT_ID: 210,
    DISTRICT_CODE: "2705",
    DISTRICT_NAME: "วัฒนานคร",
    GEO_ID: 5,
    PROVINCE_ID: 18
  },
  {
    DISTRICT_ID: 211,
    DISTRICT_CODE: "2706",
    DISTRICT_NAME: "อรัญประเทศ",
    GEO_ID: 5,
    PROVINCE_ID: 18
  },
  {
    DISTRICT_ID: 212,
    DISTRICT_CODE: "2707",
    DISTRICT_NAME: "เขาฉกรรจ์",
    GEO_ID: 5,
    PROVINCE_ID: 18
  },
  {
    DISTRICT_ID: 213,
    DISTRICT_CODE: "2708",
    DISTRICT_NAME: "โคกสูง",
    GEO_ID: 5,
    PROVINCE_ID: 18
  },
  {
    DISTRICT_ID: 214,
    DISTRICT_CODE: "2709",
    DISTRICT_NAME: "วังสมบูรณ์",
    GEO_ID: 5,
    PROVINCE_ID: 18
  },
  {
    DISTRICT_ID: 215,
    DISTRICT_CODE: "3001",
    DISTRICT_NAME: "เมืองนครราชสีมา",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 216,
    DISTRICT_CODE: "3002",
    DISTRICT_NAME: "ครบุรี",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 217,
    DISTRICT_CODE: "3003",
    DISTRICT_NAME: "เสิงสาง",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 218,
    DISTRICT_CODE: "3004",
    DISTRICT_NAME: "คง",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 219,
    DISTRICT_CODE: "3005",
    DISTRICT_NAME: "บ้านเหลื่อม",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 220,
    DISTRICT_CODE: "3006",
    DISTRICT_NAME: "จักราช",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 221,
    DISTRICT_CODE: "3007",
    DISTRICT_NAME: "โชคชัย",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 222,
    DISTRICT_CODE: "3008",
    DISTRICT_NAME: "ด่านขุนทด",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 223,
    DISTRICT_CODE: "3009",
    DISTRICT_NAME: "โนนไทย",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 224,
    DISTRICT_CODE: "3010",
    DISTRICT_NAME: "โนนสูง",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 225,
    DISTRICT_CODE: "3011",
    DISTRICT_NAME: "ขามสะแกแสง",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 226,
    DISTRICT_CODE: "3012",
    DISTRICT_NAME: "บัวใหญ่",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 227,
    DISTRICT_CODE: "3013",
    DISTRICT_NAME: "ประทาย",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 228,
    DISTRICT_CODE: "3014",
    DISTRICT_NAME: "ปักธงชัย",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 229,
    DISTRICT_CODE: "3015",
    DISTRICT_NAME: "พิมาย",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 230,
    DISTRICT_CODE: "3016",
    DISTRICT_NAME: "ห้วยแถลง",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 231,
    DISTRICT_CODE: "3017",
    DISTRICT_NAME: "ชุมพวง",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 232,
    DISTRICT_CODE: "3018",
    DISTRICT_NAME: "สูงเนิน",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 233,
    DISTRICT_CODE: "3019",
    DISTRICT_NAME: "ขามทะเลสอ",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 234,
    DISTRICT_CODE: "3020",
    DISTRICT_NAME: "สีคิ้ว",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 235,
    DISTRICT_CODE: "3021",
    DISTRICT_NAME: "ปากช่อง",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 236,
    DISTRICT_CODE: "3022",
    DISTRICT_NAME: "หนองบุญมาก",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 237,
    DISTRICT_CODE: "3023",
    DISTRICT_NAME: "แก้งสนามนาง",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 238,
    DISTRICT_CODE: "3024",
    DISTRICT_NAME: "โนนแดง",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 239,
    DISTRICT_CODE: "3025",
    DISTRICT_NAME: "วังน้ำเขียว",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 240,
    DISTRICT_CODE: "3026",
    DISTRICT_NAME: "เทพารักษ์",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 241,
    DISTRICT_CODE: "3027",
    DISTRICT_NAME: "เมืองยาง",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 242,
    DISTRICT_CODE: "3028",
    DISTRICT_NAME: "พระทองคำ",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 243,
    DISTRICT_CODE: "3029",
    DISTRICT_NAME: "ลำทะเมนชัย",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 244,
    DISTRICT_CODE: "3030",
    DISTRICT_NAME: "บัวลาย",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 245,
    DISTRICT_CODE: "3031",
    DISTRICT_NAME: "สีดา",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 246,
    DISTRICT_CODE: "3032",
    DISTRICT_NAME: "เฉลิมพระเกียรติ",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 247,
    DISTRICT_CODE: "3049",
    DISTRICT_NAME: "ท้องถิ่นเทศบาลตำบลโพธิ์กลาง*",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 248,
    DISTRICT_CODE: "3051",
    DISTRICT_NAME: "สาขาตำบลมะค่า-พลสงคราม*",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 249,
    DISTRICT_CODE: "3081",
    DISTRICT_NAME: "*โนนลาว",
    GEO_ID: 3,
    PROVINCE_ID: 19
  },
  {
    DISTRICT_ID: 250,
    DISTRICT_CODE: "3101",
    DISTRICT_NAME: "เมืองบุรีรัมย์",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 251,
    DISTRICT_CODE: "3102",
    DISTRICT_NAME: "คูเมือง",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 252,
    DISTRICT_CODE: "3103",
    DISTRICT_NAME: "กระสัง",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 253,
    DISTRICT_CODE: "3104",
    DISTRICT_NAME: "นางรอง",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 254,
    DISTRICT_CODE: "3105",
    DISTRICT_NAME: "หนองกี่",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 255,
    DISTRICT_CODE: "3106",
    DISTRICT_NAME: "ละหานทราย",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 256,
    DISTRICT_CODE: "3107",
    DISTRICT_NAME: "ประโคนชัย",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 257,
    DISTRICT_CODE: "3108",
    DISTRICT_NAME: "บ้านกรวด",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 258,
    DISTRICT_CODE: "3109",
    DISTRICT_NAME: "พุทไธสง",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 259,
    DISTRICT_CODE: "3110",
    DISTRICT_NAME: "ลำปลายมาศ",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 260,
    DISTRICT_CODE: "3111",
    DISTRICT_NAME: "สตึก",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 261,
    DISTRICT_CODE: "3112",
    DISTRICT_NAME: "ปะคำ",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 262,
    DISTRICT_CODE: "3113",
    DISTRICT_NAME: "นาโพธิ์",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 263,
    DISTRICT_CODE: "3114",
    DISTRICT_NAME: "หนองหงส์",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 264,
    DISTRICT_CODE: "3115",
    DISTRICT_NAME: "พลับพลาชัย",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 265,
    DISTRICT_CODE: "3116",
    DISTRICT_NAME: "ห้วยราช",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 266,
    DISTRICT_CODE: "3117",
    DISTRICT_NAME: "โนนสุวรรณ",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 267,
    DISTRICT_CODE: "3118",
    DISTRICT_NAME: "ชำนิ",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 268,
    DISTRICT_CODE: "3119",
    DISTRICT_NAME: "บ้านใหม่ไชยพจน์",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 269,
    DISTRICT_CODE: "3120",
    DISTRICT_NAME: "โนนดินแดง",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 270,
    DISTRICT_CODE: "3121",
    DISTRICT_NAME: "บ้านด่าน",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 271,
    DISTRICT_CODE: "3122",
    DISTRICT_NAME: "แคนดง",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 272,
    DISTRICT_CODE: "3123",
    DISTRICT_NAME: "เฉลิมพระเกียรติ",
    GEO_ID: 3,
    PROVINCE_ID: 20
  },
  {
    DISTRICT_ID: 273,
    DISTRICT_CODE: "3201",
    DISTRICT_NAME: "เมืองสุรินทร์",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 274,
    DISTRICT_CODE: "3202",
    DISTRICT_NAME: "ชุมพลบุรี",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 275,
    DISTRICT_CODE: "3203",
    DISTRICT_NAME: "ท่าตูม",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 276,
    DISTRICT_CODE: "3204",
    DISTRICT_NAME: "จอมพระ",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 277,
    DISTRICT_CODE: "3205",
    DISTRICT_NAME: "ปราสาท",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 278,
    DISTRICT_CODE: "3206",
    DISTRICT_NAME: "กาบเชิง",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 279,
    DISTRICT_CODE: "3207",
    DISTRICT_NAME: "รัตนบุรี",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 280,
    DISTRICT_CODE: "3208",
    DISTRICT_NAME: "สนม",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 281,
    DISTRICT_CODE: "3209",
    DISTRICT_NAME: "ศีขรภูมิ",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 282,
    DISTRICT_CODE: "3210",
    DISTRICT_NAME: "สังขะ",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 283,
    DISTRICT_CODE: "3211",
    DISTRICT_NAME: "ลำดวน",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 284,
    DISTRICT_CODE: "3212",
    DISTRICT_NAME: "สำโรงทาบ",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 285,
    DISTRICT_CODE: "3213",
    DISTRICT_NAME: "บัวเชด",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 286,
    DISTRICT_CODE: "3214",
    DISTRICT_NAME: "พนมดงรัก",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 287,
    DISTRICT_CODE: "3215",
    DISTRICT_NAME: "ศรีณรงค์",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 288,
    DISTRICT_CODE: "3216",
    DISTRICT_NAME: "เขวาสินรินทร์",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 289,
    DISTRICT_CODE: "3217",
    DISTRICT_NAME: "โนนนารายณ์",
    GEO_ID: 3,
    PROVINCE_ID: 21
  },
  {
    DISTRICT_ID: 290,
    DISTRICT_CODE: "3301",
    DISTRICT_NAME: "เมืองศรีสะเกษ",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 291,
    DISTRICT_CODE: "3302",
    DISTRICT_NAME: "ยางชุมน้อย",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 292,
    DISTRICT_CODE: "3303",
    DISTRICT_NAME: "กันทรารมย์",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 293,
    DISTRICT_CODE: "3304",
    DISTRICT_NAME: "กันทรลักษ์",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 294,
    DISTRICT_CODE: "3305",
    DISTRICT_NAME: "ขุขันธ์",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 295,
    DISTRICT_CODE: "3306",
    DISTRICT_NAME: "ไพรบึง",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 296,
    DISTRICT_CODE: "3307",
    DISTRICT_NAME: "ปรางค์กู่",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 297,
    DISTRICT_CODE: "3308",
    DISTRICT_NAME: "ขุนหาญ",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 298,
    DISTRICT_CODE: "3309",
    DISTRICT_NAME: "ราษีไศล",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 299,
    DISTRICT_CODE: "3310",
    DISTRICT_NAME: "อุทุมพรพิสัย",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 300,
    DISTRICT_CODE: "3311",
    DISTRICT_NAME: "บึงบูรพ์",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 301,
    DISTRICT_CODE: "3312",
    DISTRICT_NAME: "ห้วยทับทัน",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 302,
    DISTRICT_CODE: "3313",
    DISTRICT_NAME: "โนนคูณ",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 303,
    DISTRICT_CODE: "3314",
    DISTRICT_NAME: "ศรีรัตนะ",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 304,
    DISTRICT_CODE: "3315",
    DISTRICT_NAME: "น้ำเกลี้ยง",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 305,
    DISTRICT_CODE: "3316",
    DISTRICT_NAME: "วังหิน",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 306,
    DISTRICT_CODE: "3317",
    DISTRICT_NAME: "ภูสิงห์",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 307,
    DISTRICT_CODE: "3318",
    DISTRICT_NAME: "เมืองจันทร์",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 308,
    DISTRICT_CODE: "3319",
    DISTRICT_NAME: "เบญจลักษ์",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 309,
    DISTRICT_CODE: "3320",
    DISTRICT_NAME: "พยุห์",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 310,
    DISTRICT_CODE: "3321",
    DISTRICT_NAME: "โพธิ์ศรีสุวรรณ",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 311,
    DISTRICT_CODE: "3322",
    DISTRICT_NAME: "ศิลาลาด",
    GEO_ID: 3,
    PROVINCE_ID: 22
  },
  {
    DISTRICT_ID: 312,
    DISTRICT_CODE: "3401",
    DISTRICT_NAME: "เมืองอุบลราชธานี",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 313,
    DISTRICT_CODE: "3402",
    DISTRICT_NAME: "ศรีเมืองใหม่",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 314,
    DISTRICT_CODE: "3403",
    DISTRICT_NAME: "โขงเจียม",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 315,
    DISTRICT_CODE: "3404",
    DISTRICT_NAME: "เขื่องใน",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 316,
    DISTRICT_CODE: "3405",
    DISTRICT_NAME: "เขมราฐ",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 317,
    DISTRICT_CODE: "3406",
    DISTRICT_NAME: "*ชานุมาน",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 318,
    DISTRICT_CODE: "3407",
    DISTRICT_NAME: "เดชอุดม",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 319,
    DISTRICT_CODE: "3408",
    DISTRICT_NAME: "นาจะหลวย",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 320,
    DISTRICT_CODE: "3409",
    DISTRICT_NAME: "น้ำยืน",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 321,
    DISTRICT_CODE: "3410",
    DISTRICT_NAME: "บุณฑริก",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 322,
    DISTRICT_CODE: "3411",
    DISTRICT_NAME: "ตระการพืชผล",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 323,
    DISTRICT_CODE: "3412",
    DISTRICT_NAME: "กุดข้าวปุ้น",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 324,
    DISTRICT_CODE: "3413",
    DISTRICT_NAME: "*พนา",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 325,
    DISTRICT_CODE: "3414",
    DISTRICT_NAME: "ม่วงสามสิบ",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 326,
    DISTRICT_CODE: "3415",
    DISTRICT_NAME: "วารินชำราบ",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 327,
    DISTRICT_CODE: "3416",
    DISTRICT_NAME: "*อำนาจเจริญ",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 328,
    DISTRICT_CODE: "3417",
    DISTRICT_NAME: "*เสนางคนิคม",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 329,
    DISTRICT_CODE: "3418",
    DISTRICT_NAME: "*หัวตะพาน",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 330,
    DISTRICT_CODE: "3419",
    DISTRICT_NAME: "พิบูลมังสาหาร",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 331,
    DISTRICT_CODE: "3420",
    DISTRICT_NAME: "ตาลสุม",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 332,
    DISTRICT_CODE: "3421",
    DISTRICT_NAME: "โพธิ์ไทร",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 333,
    DISTRICT_CODE: "3422",
    DISTRICT_NAME: "สำโรง",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 334,
    DISTRICT_CODE: "3423",
    DISTRICT_NAME: "*กิ่งอำเภอลืออำนาจ",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 335,
    DISTRICT_CODE: "3424",
    DISTRICT_NAME: "ดอนมดแดง",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 336,
    DISTRICT_CODE: "3425",
    DISTRICT_NAME: "สิรินธร",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 337,
    DISTRICT_CODE: "3426",
    DISTRICT_NAME: "ทุ่งศรีอุดม",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 338,
    DISTRICT_CODE: "3427",
    DISTRICT_NAME: "*ปทุมราชวงศา",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 339,
    DISTRICT_CODE: "3428",
    DISTRICT_NAME: "*กิ่งอำเภอศรีหลักชัย",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 340,
    DISTRICT_CODE: "3429",
    DISTRICT_NAME: "นาเยีย",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 341,
    DISTRICT_CODE: "3430",
    DISTRICT_NAME: "นาตาล",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 342,
    DISTRICT_CODE: "3431",
    DISTRICT_NAME: "เหล่าเสือโก้ก",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 343,
    DISTRICT_CODE: "3432",
    DISTRICT_NAME: "สว่างวีระวงศ์",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 344,
    DISTRICT_CODE: "3433",
    DISTRICT_NAME: "น้ำขุ่น",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 345,
    DISTRICT_CODE: "3481",
    DISTRICT_NAME: "*อ.สุวรรณวารี  จ.อุบลราชธานี",
    GEO_ID: 3,
    PROVINCE_ID: 23
  },
  {
    DISTRICT_ID: 346,
    DISTRICT_CODE: "3501",
    DISTRICT_NAME: "เมืองยโสธร",
    GEO_ID: 3,
    PROVINCE_ID: 24
  },
  {
    DISTRICT_ID: 347,
    DISTRICT_CODE: "3502",
    DISTRICT_NAME: "ทรายมูล",
    GEO_ID: 3,
    PROVINCE_ID: 24
  },
  {
    DISTRICT_ID: 348,
    DISTRICT_CODE: "3503",
    DISTRICT_NAME: "กุดชุม",
    GEO_ID: 3,
    PROVINCE_ID: 24
  },
  {
    DISTRICT_ID: 349,
    DISTRICT_CODE: "3504",
    DISTRICT_NAME: "คำเขื่อนแก้ว",
    GEO_ID: 3,
    PROVINCE_ID: 24
  },
  {
    DISTRICT_ID: 350,
    DISTRICT_CODE: "3505",
    DISTRICT_NAME: "ป่าติ้ว",
    GEO_ID: 3,
    PROVINCE_ID: 24
  },
  {
    DISTRICT_ID: 351,
    DISTRICT_CODE: "3506",
    DISTRICT_NAME: "มหาชนะชัย",
    GEO_ID: 3,
    PROVINCE_ID: 24
  },
  {
    DISTRICT_ID: 352,
    DISTRICT_CODE: "3507",
    DISTRICT_NAME: "ค้อวัง",
    GEO_ID: 3,
    PROVINCE_ID: 24
  },
  {
    DISTRICT_ID: 353,
    DISTRICT_CODE: "3508",
    DISTRICT_NAME: "เลิงนกทา",
    GEO_ID: 3,
    PROVINCE_ID: 24
  },
  {
    DISTRICT_ID: 354,
    DISTRICT_CODE: "3509",
    DISTRICT_NAME: "ไทยเจริญ",
    GEO_ID: 3,
    PROVINCE_ID: 24
  },
  {
    DISTRICT_ID: 355,
    DISTRICT_CODE: "3601",
    DISTRICT_NAME: "เมืองชัยภูมิ",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 356,
    DISTRICT_CODE: "3602",
    DISTRICT_NAME: "บ้านเขว้า",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 357,
    DISTRICT_CODE: "3603",
    DISTRICT_NAME: "คอนสวรรค์",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 358,
    DISTRICT_CODE: "3604",
    DISTRICT_NAME: "เกษตรสมบูรณ์",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 359,
    DISTRICT_CODE: "3605",
    DISTRICT_NAME: "หนองบัวแดง",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 360,
    DISTRICT_CODE: "3606",
    DISTRICT_NAME: "จัตุรัส",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 361,
    DISTRICT_CODE: "3607",
    DISTRICT_NAME: "บำเหน็จณรงค์",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 362,
    DISTRICT_CODE: "3608",
    DISTRICT_NAME: "หนองบัวระเหว",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 363,
    DISTRICT_CODE: "3609",
    DISTRICT_NAME: "เทพสถิต",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 364,
    DISTRICT_CODE: "3610",
    DISTRICT_NAME: "ภูเขียว",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 365,
    DISTRICT_CODE: "3611",
    DISTRICT_NAME: "บ้านแท่น",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 366,
    DISTRICT_CODE: "3612",
    DISTRICT_NAME: "แก้งคร้อ",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 367,
    DISTRICT_CODE: "3613",
    DISTRICT_NAME: "คอนสาร",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 368,
    DISTRICT_CODE: "3614",
    DISTRICT_NAME: "ภักดีชุมพล",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 369,
    DISTRICT_CODE: "3615",
    DISTRICT_NAME: "เนินสง่า",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 370,
    DISTRICT_CODE: "3616",
    DISTRICT_NAME: "ซับใหญ่",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 371,
    DISTRICT_CODE: "3651",
    DISTRICT_NAME: "เมืองชัยภูมิ (สาขาตำบลโนนสำราญ)*",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 372,
    DISTRICT_CODE: "3652",
    DISTRICT_NAME: "สาขาตำบลบ้านหว่าเฒ่า*",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 373,
    DISTRICT_CODE: "3653",
    DISTRICT_NAME: "หนองบัวแดง (สาขาตำบลวังชมภู)*",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 374,
    DISTRICT_CODE: "3654",
    DISTRICT_NAME: "กิ่งอำเภอซับใหญ่ (สาขาตำบลซับใหญ่)*",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 375,
    DISTRICT_CODE: "3655",
    DISTRICT_NAME: "สาขาตำบลโคกเพชร*",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 376,
    DISTRICT_CODE: "3656",
    DISTRICT_NAME: "เทพสถิต (สาขาตำบลนายางกลัก)*",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 377,
    DISTRICT_CODE: "3657",
    DISTRICT_NAME: "บ้านแท่น (สาขาตำบลบ้านเต่า)*",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 378,
    DISTRICT_CODE: "3658",
    DISTRICT_NAME: "แก้งคร้อ (สาขาตำบลท่ามะไฟหวาน)*",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 379,
    DISTRICT_CODE: "3659",
    DISTRICT_NAME: "คอนสาร (สาขาตำบลโนนคูณ)*",
    GEO_ID: 3,
    PROVINCE_ID: 25
  },
  {
    DISTRICT_ID: 380,
    DISTRICT_CODE: "3701",
    DISTRICT_NAME: "เมืองอำนาจเจริญ",
    GEO_ID: 3,
    PROVINCE_ID: 26
  },
  {
    DISTRICT_ID: 381,
    DISTRICT_CODE: "3702",
    DISTRICT_NAME: "ชานุมาน",
    GEO_ID: 3,
    PROVINCE_ID: 26
  },
  {
    DISTRICT_ID: 382,
    DISTRICT_CODE: "3703",
    DISTRICT_NAME: "ปทุมราชวงศา",
    GEO_ID: 3,
    PROVINCE_ID: 26
  },
  {
    DISTRICT_ID: 383,
    DISTRICT_CODE: "3704",
    DISTRICT_NAME: "พนา",
    GEO_ID: 3,
    PROVINCE_ID: 26
  },
  {
    DISTRICT_ID: 384,
    DISTRICT_CODE: "3705",
    DISTRICT_NAME: "เสนางคนิคม",
    GEO_ID: 3,
    PROVINCE_ID: 26
  },
  {
    DISTRICT_ID: 385,
    DISTRICT_CODE: "3706",
    DISTRICT_NAME: "หัวตะพาน",
    GEO_ID: 3,
    PROVINCE_ID: 26
  },
  {
    DISTRICT_ID: 386,
    DISTRICT_CODE: "3707",
    DISTRICT_NAME: "ลืออำนาจ",
    GEO_ID: 3,
    PROVINCE_ID: 26
  },
  {
    DISTRICT_ID: 387,
    DISTRICT_CODE: "3901",
    DISTRICT_NAME: "เมืองหนองบัวลำภู",
    GEO_ID: 3,
    PROVINCE_ID: 27
  },
  {
    DISTRICT_ID: 388,
    DISTRICT_CODE: "3902",
    DISTRICT_NAME: "นากลาง",
    GEO_ID: 3,
    PROVINCE_ID: 27
  },
  {
    DISTRICT_ID: 389,
    DISTRICT_CODE: "3903",
    DISTRICT_NAME: "โนนสัง",
    GEO_ID: 3,
    PROVINCE_ID: 27
  },
  {
    DISTRICT_ID: 390,
    DISTRICT_CODE: "3904",
    DISTRICT_NAME: "ศรีบุญเรือง",
    GEO_ID: 3,
    PROVINCE_ID: 27
  },
  {
    DISTRICT_ID: 391,
    DISTRICT_CODE: "3905",
    DISTRICT_NAME: "สุวรรณคูหา",
    GEO_ID: 3,
    PROVINCE_ID: 27
  },
  {
    DISTRICT_ID: 392,
    DISTRICT_CODE: "3906",
    DISTRICT_NAME: "นาวัง",
    GEO_ID: 3,
    PROVINCE_ID: 27
  },
  {
    DISTRICT_ID: 393,
    DISTRICT_CODE: "4001",
    DISTRICT_NAME: "เมืองขอนแก่น",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 394,
    DISTRICT_CODE: "4002",
    DISTRICT_NAME: "บ้านฝาง",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 395,
    DISTRICT_CODE: "4003",
    DISTRICT_NAME: "พระยืน",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 396,
    DISTRICT_CODE: "4004",
    DISTRICT_NAME: "หนองเรือ",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 397,
    DISTRICT_CODE: "4005",
    DISTRICT_NAME: "ชุมแพ",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 398,
    DISTRICT_CODE: "4006",
    DISTRICT_NAME: "สีชมพู",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 399,
    DISTRICT_CODE: "4007",
    DISTRICT_NAME: "น้ำพอง",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 400,
    DISTRICT_CODE: "4008",
    DISTRICT_NAME: "อุบลรัตน์",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 401,
    DISTRICT_CODE: "4009",
    DISTRICT_NAME: "กระนวน",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 402,
    DISTRICT_CODE: "4010",
    DISTRICT_NAME: "บ้านไผ่",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 403,
    DISTRICT_CODE: "4011",
    DISTRICT_NAME: "เปือยน้อย",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 404,
    DISTRICT_CODE: "4012",
    DISTRICT_NAME: "พล",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 405,
    DISTRICT_CODE: "4013",
    DISTRICT_NAME: "แวงใหญ่",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 406,
    DISTRICT_CODE: "4014",
    DISTRICT_NAME: "แวงน้อย",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 407,
    DISTRICT_CODE: "4015",
    DISTRICT_NAME: "หนองสองห้อง",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 408,
    DISTRICT_CODE: "4016",
    DISTRICT_NAME: "ภูเวียง",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 409,
    DISTRICT_CODE: "4017",
    DISTRICT_NAME: "มัญจาคีรี",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 410,
    DISTRICT_CODE: "4018",
    DISTRICT_NAME: "ชนบท",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 411,
    DISTRICT_CODE: "4019",
    DISTRICT_NAME: "เขาสวนกวาง",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 412,
    DISTRICT_CODE: "4020",
    DISTRICT_NAME: "ภูผาม่าน",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 413,
    DISTRICT_CODE: "4021",
    DISTRICT_NAME: "ซำสูง",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 414,
    DISTRICT_CODE: "4022",
    DISTRICT_NAME: "โคกโพธิ์ไชย",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 415,
    DISTRICT_CODE: "4023",
    DISTRICT_NAME: "หนองนาคำ",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 416,
    DISTRICT_CODE: "4024",
    DISTRICT_NAME: "บ้านแฮด",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 417,
    DISTRICT_CODE: "4025",
    DISTRICT_NAME: "โนนศิลา",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 418,
    DISTRICT_CODE: "4029",
    DISTRICT_NAME: "เวียงเก่า",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 419,
    DISTRICT_CODE: "4068",
    DISTRICT_NAME: "ท้องถิ่นเทศบาลตำบลบ้านเป็ด*",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 420,
    DISTRICT_CODE: "4098",
    DISTRICT_NAME: "เทศบาลตำบลเมืองพล*",
    GEO_ID: 3,
    PROVINCE_ID: 28
  },
  {
    DISTRICT_ID: 421,
    DISTRICT_CODE: "4101",
    DISTRICT_NAME: "เมืองอุดรธานี",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 422,
    DISTRICT_CODE: "4102",
    DISTRICT_NAME: "กุดจับ",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 423,
    DISTRICT_CODE: "4103",
    DISTRICT_NAME: "หนองวัวซอ",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 424,
    DISTRICT_CODE: "4104",
    DISTRICT_NAME: "กุมภวาปี",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 425,
    DISTRICT_CODE: "4105",
    DISTRICT_NAME: "โนนสะอาด",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 426,
    DISTRICT_CODE: "4106",
    DISTRICT_NAME: "หนองหาน",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 427,
    DISTRICT_CODE: "4107",
    DISTRICT_NAME: "ทุ่งฝน",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 428,
    DISTRICT_CODE: "4108",
    DISTRICT_NAME: "ไชยวาน",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 429,
    DISTRICT_CODE: "4109",
    DISTRICT_NAME: "ศรีธาตุ",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 430,
    DISTRICT_CODE: "4110",
    DISTRICT_NAME: "วังสามหมอ",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 431,
    DISTRICT_CODE: "4111",
    DISTRICT_NAME: "บ้านดุง",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 432,
    DISTRICT_CODE: "4112",
    DISTRICT_NAME: "*หนองบัวลำภู",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 433,
    DISTRICT_CODE: "4113",
    DISTRICT_NAME: "*ศรีบุญเรือง",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 434,
    DISTRICT_CODE: "4114",
    DISTRICT_NAME: "*นากลาง",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 435,
    DISTRICT_CODE: "4115",
    DISTRICT_NAME: "*สุวรรณคูหา",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 436,
    DISTRICT_CODE: "4116",
    DISTRICT_NAME: "*โนนสัง",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 437,
    DISTRICT_CODE: "4117",
    DISTRICT_NAME: "บ้านผือ",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 438,
    DISTRICT_CODE: "4118",
    DISTRICT_NAME: "น้ำโสม",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 439,
    DISTRICT_CODE: "4119",
    DISTRICT_NAME: "เพ็ญ",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 440,
    DISTRICT_CODE: "4120",
    DISTRICT_NAME: "สร้างคอม",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 441,
    DISTRICT_CODE: "4121",
    DISTRICT_NAME: "หนองแสง",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 442,
    DISTRICT_CODE: "4122",
    DISTRICT_NAME: "นายูง",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 443,
    DISTRICT_CODE: "4123",
    DISTRICT_NAME: "พิบูลย์รักษ์",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 444,
    DISTRICT_CODE: "4124",
    DISTRICT_NAME: "กู่แก้ว",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 445,
    DISTRICT_CODE: "4125",
    DISTRICT_NAME: "ประจักษ์ศิลปาคม",
    GEO_ID: 3,
    PROVINCE_ID: 29
  },
  {
    DISTRICT_ID: 446,
    DISTRICT_CODE: "4201",
    DISTRICT_NAME: "เมืองเลย",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 447,
    DISTRICT_CODE: "4202",
    DISTRICT_NAME: "นาด้วง",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 448,
    DISTRICT_CODE: "4203",
    DISTRICT_NAME: "เชียงคาน",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 449,
    DISTRICT_CODE: "4204",
    DISTRICT_NAME: "ปากชม",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 450,
    DISTRICT_CODE: "4205",
    DISTRICT_NAME: "ด่านซ้าย",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 451,
    DISTRICT_CODE: "4206",
    DISTRICT_NAME: "นาแห้ว",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 452,
    DISTRICT_CODE: "4207",
    DISTRICT_NAME: "ภูเรือ",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 453,
    DISTRICT_CODE: "4208",
    DISTRICT_NAME: "ท่าลี่",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 454,
    DISTRICT_CODE: "4209",
    DISTRICT_NAME: "วังสะพุง",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 455,
    DISTRICT_CODE: "4210",
    DISTRICT_NAME: "ภูกระดึง",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 456,
    DISTRICT_CODE: "4211",
    DISTRICT_NAME: "ภูหลวง",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 457,
    DISTRICT_CODE: "4212",
    DISTRICT_NAME: "ผาขาว",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 458,
    DISTRICT_CODE: "4213",
    DISTRICT_NAME: "เอราวัณ",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 459,
    DISTRICT_CODE: "4214",
    DISTRICT_NAME: "หนองหิน",
    GEO_ID: 3,
    PROVINCE_ID: 30
  },
  {
    DISTRICT_ID: 460,
    DISTRICT_CODE: "4301",
    DISTRICT_NAME: "เมืองหนองคาย",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 461,
    DISTRICT_CODE: "4302",
    DISTRICT_NAME: "ท่าบ่อ",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 462,
    DISTRICT_CODE: "4303",
    DISTRICT_NAME: "บึงกาฬ",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 463,
    DISTRICT_CODE: "4304",
    DISTRICT_NAME: "พรเจริญ",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 464,
    DISTRICT_CODE: "4305",
    DISTRICT_NAME: "โพนพิสัย",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 465,
    DISTRICT_CODE: "4306",
    DISTRICT_NAME: "โซ่พิสัย",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 466,
    DISTRICT_CODE: "4307",
    DISTRICT_NAME: "ศรีเชียงใหม่",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 467,
    DISTRICT_CODE: "4308",
    DISTRICT_NAME: "สังคม",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 473,
    DISTRICT_CODE: "4314",
    DISTRICT_NAME: "สระใคร",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 474,
    DISTRICT_CODE: "4315",
    DISTRICT_NAME: "เฝ้าไร่",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 475,
    DISTRICT_CODE: "4316",
    DISTRICT_NAME: "รัตนวาปี",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 476,
    DISTRICT_CODE: "4317",
    DISTRICT_NAME: "โพธิ์ตาก",
    GEO_ID: 3,
    PROVINCE_ID: 31
  },
  {
    DISTRICT_ID: 477,
    DISTRICT_CODE: "4401",
    DISTRICT_NAME: "เมืองมหาสารคาม",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 478,
    DISTRICT_CODE: "4402",
    DISTRICT_NAME: "แกดำ",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 479,
    DISTRICT_CODE: "4403",
    DISTRICT_NAME: "โกสุมพิสัย",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 480,
    DISTRICT_CODE: "4404",
    DISTRICT_NAME: "กันทรวิชัย",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 481,
    DISTRICT_CODE: "4405",
    DISTRICT_NAME: "เชียงยืน",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 482,
    DISTRICT_CODE: "4406",
    DISTRICT_NAME: "บรบือ",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 483,
    DISTRICT_CODE: "4407",
    DISTRICT_NAME: "นาเชือก",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 484,
    DISTRICT_CODE: "4408",
    DISTRICT_NAME: "พยัคฆภูมิพิสัย",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 485,
    DISTRICT_CODE: "4409",
    DISTRICT_NAME: "วาปีปทุม",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 486,
    DISTRICT_CODE: "4410",
    DISTRICT_NAME: "นาดูน",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 487,
    DISTRICT_CODE: "4411",
    DISTRICT_NAME: "ยางสีสุราช",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 488,
    DISTRICT_CODE: "4412",
    DISTRICT_NAME: "กุดรัง",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 489,
    DISTRICT_CODE: "4413",
    DISTRICT_NAME: "ชื่นชม",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 490,
    DISTRICT_CODE: "4481",
    DISTRICT_NAME: "*หลุบ",
    GEO_ID: 3,
    PROVINCE_ID: 32
  },
  {
    DISTRICT_ID: 491,
    DISTRICT_CODE: "4501",
    DISTRICT_NAME: "เมืองร้อยเอ็ด",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 492,
    DISTRICT_CODE: "4502",
    DISTRICT_NAME: "เกษตรวิสัย",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 493,
    DISTRICT_CODE: "4503",
    DISTRICT_NAME: "ปทุมรัตต์",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 494,
    DISTRICT_CODE: "4504",
    DISTRICT_NAME: "จตุรพักตรพิมาน",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 495,
    DISTRICT_CODE: "4505",
    DISTRICT_NAME: "ธวัชบุรี",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 496,
    DISTRICT_CODE: "4506",
    DISTRICT_NAME: "พนมไพร",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 497,
    DISTRICT_CODE: "4507",
    DISTRICT_NAME: "โพนทอง",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 498,
    DISTRICT_CODE: "4508",
    DISTRICT_NAME: "โพธิ์ชัย",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 499,
    DISTRICT_CODE: "4509",
    DISTRICT_NAME: "หนองพอก",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 500,
    DISTRICT_CODE: "4510",
    DISTRICT_NAME: "เสลภูมิ",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 501,
    DISTRICT_CODE: "4511",
    DISTRICT_NAME: "สุวรรณภูมิ",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 502,
    DISTRICT_CODE: "4512",
    DISTRICT_NAME: "เมืองสรวง",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 503,
    DISTRICT_CODE: "4513",
    DISTRICT_NAME: "โพนทราย",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 504,
    DISTRICT_CODE: "4514",
    DISTRICT_NAME: "อาจสามารถ",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 505,
    DISTRICT_CODE: "4515",
    DISTRICT_NAME: "เมยวดี",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 506,
    DISTRICT_CODE: "4516",
    DISTRICT_NAME: "ศรีสมเด็จ",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 507,
    DISTRICT_CODE: "4517",
    DISTRICT_NAME: "จังหาร",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 508,
    DISTRICT_CODE: "4518",
    DISTRICT_NAME: "เชียงขวัญ",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 509,
    DISTRICT_CODE: "4519",
    DISTRICT_NAME: "หนองฮี",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 510,
    DISTRICT_CODE: "4520",
    DISTRICT_NAME: "ทุ่งเขาหลวง",
    GEO_ID: 3,
    PROVINCE_ID: 33
  },
  {
    DISTRICT_ID: 511,
    DISTRICT_CODE: "4601",
    DISTRICT_NAME: "เมืองกาฬสินธุ์",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 512,
    DISTRICT_CODE: "4602",
    DISTRICT_NAME: "นามน",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 513,
    DISTRICT_CODE: "4603",
    DISTRICT_NAME: "กมลาไสย",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 514,
    DISTRICT_CODE: "4604",
    DISTRICT_NAME: "ร่องคำ",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 515,
    DISTRICT_CODE: "4605",
    DISTRICT_NAME: "กุฉินารายณ์",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 516,
    DISTRICT_CODE: "4606",
    DISTRICT_NAME: "เขาวง",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 517,
    DISTRICT_CODE: "4607",
    DISTRICT_NAME: "ยางตลาด",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 518,
    DISTRICT_CODE: "4608",
    DISTRICT_NAME: "ห้วยเม็ก",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 519,
    DISTRICT_CODE: "4609",
    DISTRICT_NAME: "สหัสขันธ์",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 520,
    DISTRICT_CODE: "4610",
    DISTRICT_NAME: "คำม่วง",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 521,
    DISTRICT_CODE: "4611",
    DISTRICT_NAME: "ท่าคันโท",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 522,
    DISTRICT_CODE: "4612",
    DISTRICT_NAME: "หนองกุงศรี",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 523,
    DISTRICT_CODE: "4613",
    DISTRICT_NAME: "สมเด็จ",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 524,
    DISTRICT_CODE: "4614",
    DISTRICT_NAME: "ห้วยผึ้ง",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 525,
    DISTRICT_CODE: "4615",
    DISTRICT_NAME: "สามชัย",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 526,
    DISTRICT_CODE: "4616",
    DISTRICT_NAME: "นาคู",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 527,
    DISTRICT_CODE: "4617",
    DISTRICT_NAME: "ดอนจาน",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 528,
    DISTRICT_CODE: "4618",
    DISTRICT_NAME: "ฆ้องชัย",
    GEO_ID: 3,
    PROVINCE_ID: 34
  },
  {
    DISTRICT_ID: 529,
    DISTRICT_CODE: "4701",
    DISTRICT_NAME: "เมืองสกลนคร",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 530,
    DISTRICT_CODE: "4702",
    DISTRICT_NAME: "กุสุมาลย์",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 531,
    DISTRICT_CODE: "4703",
    DISTRICT_NAME: "กุดบาก",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 532,
    DISTRICT_CODE: "4704",
    DISTRICT_NAME: "พรรณานิคม",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 533,
    DISTRICT_CODE: "4705",
    DISTRICT_NAME: "พังโคน",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 534,
    DISTRICT_CODE: "4706",
    DISTRICT_NAME: "วาริชภูมิ",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 535,
    DISTRICT_CODE: "4707",
    DISTRICT_NAME: "นิคมน้ำอูน",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 536,
    DISTRICT_CODE: "4708",
    DISTRICT_NAME: "วานรนิวาส",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 537,
    DISTRICT_CODE: "4709",
    DISTRICT_NAME: "คำตากล้า",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 538,
    DISTRICT_CODE: "4710",
    DISTRICT_NAME: "บ้านม่วง",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 539,
    DISTRICT_CODE: "4711",
    DISTRICT_NAME: "อากาศอำนวย",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 540,
    DISTRICT_CODE: "4712",
    DISTRICT_NAME: "สว่างแดนดิน",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 541,
    DISTRICT_CODE: "4713",
    DISTRICT_NAME: "ส่องดาว",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 542,
    DISTRICT_CODE: "4714",
    DISTRICT_NAME: "เต่างอย",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 543,
    DISTRICT_CODE: "4715",
    DISTRICT_NAME: "โคกศรีสุพรรณ",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 544,
    DISTRICT_CODE: "4716",
    DISTRICT_NAME: "เจริญศิลป์",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 545,
    DISTRICT_CODE: "4717",
    DISTRICT_NAME: "โพนนาแก้ว",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 546,
    DISTRICT_CODE: "4718",
    DISTRICT_NAME: "ภูพาน",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 547,
    DISTRICT_CODE: "4751",
    DISTRICT_NAME: "วานรนิวาส (สาขาตำบลกุดเรือคำ)*",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 548,
    DISTRICT_CODE: "4781",
    DISTRICT_NAME: "*อ.บ้านหัน  จ.สกลนคร",
    GEO_ID: 3,
    PROVINCE_ID: 35
  },
  {
    DISTRICT_ID: 549,
    DISTRICT_CODE: "4801",
    DISTRICT_NAME: "เมืองนครพนม",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 550,
    DISTRICT_CODE: "4802",
    DISTRICT_NAME: "ปลาปาก",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 551,
    DISTRICT_CODE: "4803",
    DISTRICT_NAME: "ท่าอุเทน",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 552,
    DISTRICT_CODE: "4804",
    DISTRICT_NAME: "บ้านแพง",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 553,
    DISTRICT_CODE: "4805",
    DISTRICT_NAME: "ธาตุพนม",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 554,
    DISTRICT_CODE: "4806",
    DISTRICT_NAME: "เรณูนคร",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 555,
    DISTRICT_CODE: "4807",
    DISTRICT_NAME: "นาแก",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 556,
    DISTRICT_CODE: "4808",
    DISTRICT_NAME: "ศรีสงคราม",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 557,
    DISTRICT_CODE: "4809",
    DISTRICT_NAME: "นาหว้า",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 558,
    DISTRICT_CODE: "4810",
    DISTRICT_NAME: "โพนสวรรค์",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 559,
    DISTRICT_CODE: "4811",
    DISTRICT_NAME: "นาทม",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 560,
    DISTRICT_CODE: "4812",
    DISTRICT_NAME: "วังยาง",
    GEO_ID: 3,
    PROVINCE_ID: 36
  },
  {
    DISTRICT_ID: 561,
    DISTRICT_CODE: "4901",
    DISTRICT_NAME: "เมืองมุกดาหาร",
    GEO_ID: 3,
    PROVINCE_ID: 37
  },
  {
    DISTRICT_ID: 562,
    DISTRICT_CODE: "4902",
    DISTRICT_NAME: "นิคมคำสร้อย",
    GEO_ID: 3,
    PROVINCE_ID: 37
  },
  {
    DISTRICT_ID: 563,
    DISTRICT_CODE: "4903",
    DISTRICT_NAME: "ดอนตาล",
    GEO_ID: 3,
    PROVINCE_ID: 37
  },
  {
    DISTRICT_ID: 564,
    DISTRICT_CODE: "4904",
    DISTRICT_NAME: "ดงหลวง",
    GEO_ID: 3,
    PROVINCE_ID: 37
  },
  {
    DISTRICT_ID: 565,
    DISTRICT_CODE: "4905",
    DISTRICT_NAME: "คำชะอี",
    GEO_ID: 3,
    PROVINCE_ID: 37
  },
  {
    DISTRICT_ID: 566,
    DISTRICT_CODE: "4906",
    DISTRICT_NAME: "หว้านใหญ่",
    GEO_ID: 3,
    PROVINCE_ID: 37
  },
  {
    DISTRICT_ID: 567,
    DISTRICT_CODE: "4907",
    DISTRICT_NAME: "หนองสูง",
    GEO_ID: 3,
    PROVINCE_ID: 37
  },
  {
    DISTRICT_ID: 568,
    DISTRICT_CODE: "5001",
    DISTRICT_NAME: "เมืองเชียงใหม่",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 569,
    DISTRICT_CODE: "5002",
    DISTRICT_NAME: "จอมทอง",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 570,
    DISTRICT_CODE: "5003",
    DISTRICT_NAME: "แม่แจ่ม",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 571,
    DISTRICT_CODE: "5004",
    DISTRICT_NAME: "เชียงดาว",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 572,
    DISTRICT_CODE: "5005",
    DISTRICT_NAME: "ดอยสะเก็ด",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 573,
    DISTRICT_CODE: "5006",
    DISTRICT_NAME: "แม่แตง",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 574,
    DISTRICT_CODE: "5007",
    DISTRICT_NAME: "แม่ริม",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 575,
    DISTRICT_CODE: "5008",
    DISTRICT_NAME: "สะเมิง",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 576,
    DISTRICT_CODE: "5009",
    DISTRICT_NAME: "ฝาง",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 577,
    DISTRICT_CODE: "5010",
    DISTRICT_NAME: "แม่อาย",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 578,
    DISTRICT_CODE: "5011",
    DISTRICT_NAME: "พร้าว",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 579,
    DISTRICT_CODE: "5012",
    DISTRICT_NAME: "สันป่าตอง",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 580,
    DISTRICT_CODE: "5013",
    DISTRICT_NAME: "สันกำแพง",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 581,
    DISTRICT_CODE: "5014",
    DISTRICT_NAME: "สันทราย",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 582,
    DISTRICT_CODE: "5015",
    DISTRICT_NAME: "หางดง",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 583,
    DISTRICT_CODE: "5016",
    DISTRICT_NAME: "ฮอด",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 584,
    DISTRICT_CODE: "5017",
    DISTRICT_NAME: "ดอยเต่า",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 585,
    DISTRICT_CODE: "5018",
    DISTRICT_NAME: "อมก๋อย",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 586,
    DISTRICT_CODE: "5019",
    DISTRICT_NAME: "สารภี",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 587,
    DISTRICT_CODE: "5020",
    DISTRICT_NAME: "เวียงแหง",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 588,
    DISTRICT_CODE: "5021",
    DISTRICT_NAME: "ไชยปราการ",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 589,
    DISTRICT_CODE: "5022",
    DISTRICT_NAME: "แม่วาง",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 590,
    DISTRICT_CODE: "5023",
    DISTRICT_NAME: "แม่ออน",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 591,
    DISTRICT_CODE: "5024",
    DISTRICT_NAME: "ดอยหล่อ",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 592,
    DISTRICT_CODE: "5051",
    DISTRICT_NAME: "เทศบาลนครเชียงใหม่ (สาขาแขวงกาลวิละ*",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 593,
    DISTRICT_CODE: "5052",
    DISTRICT_NAME: "เทศบาลนครเชียงใหม่ (สาขาแขวงศรีวิชั*",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 594,
    DISTRICT_CODE: "5053",
    DISTRICT_NAME: "เทศบาลนครเชียงใหม่ (สาขาเม็งราย*",
    GEO_ID: 1,
    PROVINCE_ID: 38
  },
  {
    DISTRICT_ID: 595,
    DISTRICT_CODE: "5101",
    DISTRICT_NAME: "เมืองลำพูน",
    GEO_ID: 1,
    PROVINCE_ID: 39
  },
  {
    DISTRICT_ID: 596,
    DISTRICT_CODE: "5102",
    DISTRICT_NAME: "แม่ทา",
    GEO_ID: 1,
    PROVINCE_ID: 39
  },
  {
    DISTRICT_ID: 597,
    DISTRICT_CODE: "5103",
    DISTRICT_NAME: "บ้านโฮ่ง",
    GEO_ID: 1,
    PROVINCE_ID: 39
  },
  {
    DISTRICT_ID: 598,
    DISTRICT_CODE: "5104",
    DISTRICT_NAME: "ลี้",
    GEO_ID: 1,
    PROVINCE_ID: 39
  },
  {
    DISTRICT_ID: 599,
    DISTRICT_CODE: "5105",
    DISTRICT_NAME: "ทุ่งหัวช้าง",
    GEO_ID: 1,
    PROVINCE_ID: 39
  },
  {
    DISTRICT_ID: 600,
    DISTRICT_CODE: "5106",
    DISTRICT_NAME: "ป่าซาง",
    GEO_ID: 1,
    PROVINCE_ID: 39
  },
  {
    DISTRICT_ID: 601,
    DISTRICT_CODE: "5107",
    DISTRICT_NAME: "บ้านธิ",
    GEO_ID: 1,
    PROVINCE_ID: 39
  },
  {
    DISTRICT_ID: 602,
    DISTRICT_CODE: "5108",
    DISTRICT_NAME: "เวียงหนองล่อง",
    GEO_ID: 1,
    PROVINCE_ID: 39
  },
  {
    DISTRICT_ID: 603,
    DISTRICT_CODE: "5201",
    DISTRICT_NAME: "เมืองลำปาง",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 604,
    DISTRICT_CODE: "5202",
    DISTRICT_NAME: "แม่เมาะ",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 605,
    DISTRICT_CODE: "5203",
    DISTRICT_NAME: "เกาะคา",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 606,
    DISTRICT_CODE: "5204",
    DISTRICT_NAME: "เสริมงาม",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 607,
    DISTRICT_CODE: "5205",
    DISTRICT_NAME: "งาว",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 608,
    DISTRICT_CODE: "5206",
    DISTRICT_NAME: "แจ้ห่ม",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 609,
    DISTRICT_CODE: "5207",
    DISTRICT_NAME: "วังเหนือ",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 610,
    DISTRICT_CODE: "5208",
    DISTRICT_NAME: "เถิน",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 611,
    DISTRICT_CODE: "5209",
    DISTRICT_NAME: "แม่พริก",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 612,
    DISTRICT_CODE: "5210",
    DISTRICT_NAME: "แม่ทะ",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 613,
    DISTRICT_CODE: "5211",
    DISTRICT_NAME: "สบปราบ",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 614,
    DISTRICT_CODE: "5212",
    DISTRICT_NAME: "ห้างฉัตร",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 615,
    DISTRICT_CODE: "5213",
    DISTRICT_NAME: "เมืองปาน",
    GEO_ID: 1,
    PROVINCE_ID: 40
  },
  {
    DISTRICT_ID: 616,
    DISTRICT_CODE: "5301",
    DISTRICT_NAME: "เมืองอุตรดิตถ์",
    GEO_ID: 1,
    PROVINCE_ID: 41
  },
  {
    DISTRICT_ID: 617,
    DISTRICT_CODE: "5302",
    DISTRICT_NAME: "ตรอน",
    GEO_ID: 1,
    PROVINCE_ID: 41
  },
  {
    DISTRICT_ID: 618,
    DISTRICT_CODE: "5303",
    DISTRICT_NAME: "ท่าปลา",
    GEO_ID: 1,
    PROVINCE_ID: 41
  },
  {
    DISTRICT_ID: 619,
    DISTRICT_CODE: "5304",
    DISTRICT_NAME: "น้ำปาด",
    GEO_ID: 1,
    PROVINCE_ID: 41
  },
  {
    DISTRICT_ID: 620,
    DISTRICT_CODE: "5305",
    DISTRICT_NAME: "ฟากท่า",
    GEO_ID: 1,
    PROVINCE_ID: 41
  },
  {
    DISTRICT_ID: 621,
    DISTRICT_CODE: "5306",
    DISTRICT_NAME: "บ้านโคก",
    GEO_ID: 1,
    PROVINCE_ID: 41
  },
  {
    DISTRICT_ID: 622,
    DISTRICT_CODE: "5307",
    DISTRICT_NAME: "พิชัย",
    GEO_ID: 1,
    PROVINCE_ID: 41
  },
  {
    DISTRICT_ID: 623,
    DISTRICT_CODE: "5308",
    DISTRICT_NAME: "ลับแล",
    GEO_ID: 1,
    PROVINCE_ID: 41
  },
  {
    DISTRICT_ID: 624,
    DISTRICT_CODE: "5309",
    DISTRICT_NAME: "ทองแสนขัน",
    GEO_ID: 1,
    PROVINCE_ID: 41
  },
  {
    DISTRICT_ID: 625,
    DISTRICT_CODE: "5401",
    DISTRICT_NAME: "เมืองแพร่",
    GEO_ID: 1,
    PROVINCE_ID: 42
  },
  {
    DISTRICT_ID: 626,
    DISTRICT_CODE: "5402",
    DISTRICT_NAME: "ร้องกวาง",
    GEO_ID: 1,
    PROVINCE_ID: 42
  },
  {
    DISTRICT_ID: 627,
    DISTRICT_CODE: "5403",
    DISTRICT_NAME: "ลอง",
    GEO_ID: 1,
    PROVINCE_ID: 42
  },
  {
    DISTRICT_ID: 628,
    DISTRICT_CODE: "5404",
    DISTRICT_NAME: "สูงเม่น",
    GEO_ID: 1,
    PROVINCE_ID: 42
  },
  {
    DISTRICT_ID: 629,
    DISTRICT_CODE: "5405",
    DISTRICT_NAME: "เด่นชัย",
    GEO_ID: 1,
    PROVINCE_ID: 42
  },
  {
    DISTRICT_ID: 630,
    DISTRICT_CODE: "5406",
    DISTRICT_NAME: "สอง",
    GEO_ID: 1,
    PROVINCE_ID: 42
  },
  {
    DISTRICT_ID: 631,
    DISTRICT_CODE: "5407",
    DISTRICT_NAME: "วังชิ้น",
    GEO_ID: 1,
    PROVINCE_ID: 42
  },
  {
    DISTRICT_ID: 632,
    DISTRICT_CODE: "5408",
    DISTRICT_NAME: "หนองม่วงไข่",
    GEO_ID: 1,
    PROVINCE_ID: 42
  },
  {
    DISTRICT_ID: 633,
    DISTRICT_CODE: "5501",
    DISTRICT_NAME: "เมืองน่าน",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 634,
    DISTRICT_CODE: "5502",
    DISTRICT_NAME: "แม่จริม",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 635,
    DISTRICT_CODE: "5503",
    DISTRICT_NAME: "บ้านหลวง",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 636,
    DISTRICT_CODE: "5504",
    DISTRICT_NAME: "นาน้อย",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 637,
    DISTRICT_CODE: "5505",
    DISTRICT_NAME: "ปัว",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 638,
    DISTRICT_CODE: "5506",
    DISTRICT_NAME: "ท่าวังผา",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 639,
    DISTRICT_CODE: "5507",
    DISTRICT_NAME: "เวียงสา",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 640,
    DISTRICT_CODE: "5508",
    DISTRICT_NAME: "ทุ่งช้าง",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 641,
    DISTRICT_CODE: "5509",
    DISTRICT_NAME: "เชียงกลาง",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 642,
    DISTRICT_CODE: "5510",
    DISTRICT_NAME: "นาหมื่น",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 643,
    DISTRICT_CODE: "5511",
    DISTRICT_NAME: "สันติสุข",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 644,
    DISTRICT_CODE: "5512",
    DISTRICT_NAME: "บ่อเกลือ",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 645,
    DISTRICT_CODE: "5513",
    DISTRICT_NAME: "สองแคว",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 646,
    DISTRICT_CODE: "5514",
    DISTRICT_NAME: "ภูเพียง",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 647,
    DISTRICT_CODE: "5515",
    DISTRICT_NAME: "เฉลิมพระเกียรติ",
    GEO_ID: 1,
    PROVINCE_ID: 43
  },
  {
    DISTRICT_ID: 648,
    DISTRICT_CODE: "5601",
    DISTRICT_NAME: "เมืองพะเยา",
    GEO_ID: 1,
    PROVINCE_ID: 44
  },
  {
    DISTRICT_ID: 649,
    DISTRICT_CODE: "5602",
    DISTRICT_NAME: "จุน",
    GEO_ID: 1,
    PROVINCE_ID: 44
  },
  {
    DISTRICT_ID: 650,
    DISTRICT_CODE: "5603",
    DISTRICT_NAME: "เชียงคำ",
    GEO_ID: 1,
    PROVINCE_ID: 44
  },
  {
    DISTRICT_ID: 651,
    DISTRICT_CODE: "5604",
    DISTRICT_NAME: "เชียงม่วน",
    GEO_ID: 1,
    PROVINCE_ID: 44
  },
  {
    DISTRICT_ID: 652,
    DISTRICT_CODE: "5605",
    DISTRICT_NAME: "ดอกคำใต้",
    GEO_ID: 1,
    PROVINCE_ID: 44
  },
  {
    DISTRICT_ID: 653,
    DISTRICT_CODE: "5606",
    DISTRICT_NAME: "ปง",
    GEO_ID: 1,
    PROVINCE_ID: 44
  },
  {
    DISTRICT_ID: 654,
    DISTRICT_CODE: "5607",
    DISTRICT_NAME: "แม่ใจ",
    GEO_ID: 1,
    PROVINCE_ID: 44
  },
  {
    DISTRICT_ID: 655,
    DISTRICT_CODE: "5608",
    DISTRICT_NAME: "ภูซาง",
    GEO_ID: 1,
    PROVINCE_ID: 44
  },
  {
    DISTRICT_ID: 656,
    DISTRICT_CODE: "5609",
    DISTRICT_NAME: "ภูกามยาว",
    GEO_ID: 1,
    PROVINCE_ID: 44
  },
  {
    DISTRICT_ID: 657,
    DISTRICT_CODE: "5701",
    DISTRICT_NAME: "เมืองเชียงราย",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 658,
    DISTRICT_CODE: "5702",
    DISTRICT_NAME: "เวียงชัย",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 659,
    DISTRICT_CODE: "5703",
    DISTRICT_NAME: "เชียงของ",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 660,
    DISTRICT_CODE: "5704",
    DISTRICT_NAME: "เทิง",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 661,
    DISTRICT_CODE: "5705",
    DISTRICT_NAME: "พาน",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 662,
    DISTRICT_CODE: "5706",
    DISTRICT_NAME: "ป่าแดด",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 663,
    DISTRICT_CODE: "5707",
    DISTRICT_NAME: "แม่จัน",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 664,
    DISTRICT_CODE: "5708",
    DISTRICT_NAME: "เชียงแสน",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 665,
    DISTRICT_CODE: "5709",
    DISTRICT_NAME: "แม่สาย",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 666,
    DISTRICT_CODE: "5710",
    DISTRICT_NAME: "แม่สรวย",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 667,
    DISTRICT_CODE: "5711",
    DISTRICT_NAME: "เวียงป่าเป้า",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 668,
    DISTRICT_CODE: "5712",
    DISTRICT_NAME: "พญาเม็งราย",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 669,
    DISTRICT_CODE: "5713",
    DISTRICT_NAME: "เวียงแก่น",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 670,
    DISTRICT_CODE: "5714",
    DISTRICT_NAME: "ขุนตาล",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 671,
    DISTRICT_CODE: "5715",
    DISTRICT_NAME: "แม่ฟ้าหลวง",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 672,
    DISTRICT_CODE: "5716",
    DISTRICT_NAME: "แม่ลาว",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 673,
    DISTRICT_CODE: "5717",
    DISTRICT_NAME: "เวียงเชียงรุ้ง",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 674,
    DISTRICT_CODE: "5718",
    DISTRICT_NAME: "ดอยหลวง",
    GEO_ID: 1,
    PROVINCE_ID: 45
  },
  {
    DISTRICT_ID: 675,
    DISTRICT_CODE: "5801",
    DISTRICT_NAME: "เมืองแม่ฮ่องสอน",
    GEO_ID: 1,
    PROVINCE_ID: 46
  },
  {
    DISTRICT_ID: 676,
    DISTRICT_CODE: "5802",
    DISTRICT_NAME: "ขุนยวม",
    GEO_ID: 1,
    PROVINCE_ID: 46
  },
  {
    DISTRICT_ID: 677,
    DISTRICT_CODE: "5803",
    DISTRICT_NAME: "ปาย",
    GEO_ID: 1,
    PROVINCE_ID: 46
  },
  {
    DISTRICT_ID: 678,
    DISTRICT_CODE: "5804",
    DISTRICT_NAME: "แม่สะเรียง",
    GEO_ID: 1,
    PROVINCE_ID: 46
  },
  {
    DISTRICT_ID: 679,
    DISTRICT_CODE: "5805",
    DISTRICT_NAME: "แม่ลาน้อย",
    GEO_ID: 1,
    PROVINCE_ID: 46
  },
  {
    DISTRICT_ID: 680,
    DISTRICT_CODE: "5806",
    DISTRICT_NAME: "สบเมย",
    GEO_ID: 1,
    PROVINCE_ID: 46
  },
  {
    DISTRICT_ID: 681,
    DISTRICT_CODE: "5807",
    DISTRICT_NAME: "ปางมะผ้า",
    GEO_ID: 1,
    PROVINCE_ID: 46
  },
  {
    DISTRICT_ID: 682,
    DISTRICT_CODE: "5881",
    DISTRICT_NAME: "*อ.ม่วยต่อ  จ.แม่ฮ่องสอน",
    GEO_ID: 1,
    PROVINCE_ID: 46
  },
  {
    DISTRICT_ID: 683,
    DISTRICT_CODE: "6001",
    DISTRICT_NAME: "เมืองนครสวรรค์",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 684,
    DISTRICT_CODE: "6002",
    DISTRICT_NAME: "โกรกพระ",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 685,
    DISTRICT_CODE: "6003",
    DISTRICT_NAME: "ชุมแสง",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 686,
    DISTRICT_CODE: "6004",
    DISTRICT_NAME: "หนองบัว",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 687,
    DISTRICT_CODE: "6005",
    DISTRICT_NAME: "บรรพตพิสัย",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 688,
    DISTRICT_CODE: "6006",
    DISTRICT_NAME: "เก้าเลี้ยว",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 689,
    DISTRICT_CODE: "6007",
    DISTRICT_NAME: "ตาคลี",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 690,
    DISTRICT_CODE: "6008",
    DISTRICT_NAME: "ท่าตะโก",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 691,
    DISTRICT_CODE: "6009",
    DISTRICT_NAME: "ไพศาลี",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 692,
    DISTRICT_CODE: "6010",
    DISTRICT_NAME: "พยุหะคีรี",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 693,
    DISTRICT_CODE: "6011",
    DISTRICT_NAME: "ลาดยาว",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 694,
    DISTRICT_CODE: "6012",
    DISTRICT_NAME: "ตากฟ้า",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 695,
    DISTRICT_CODE: "6013",
    DISTRICT_NAME: "แม่วงก์",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 696,
    DISTRICT_CODE: "6014",
    DISTRICT_NAME: "แม่เปิน",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 697,
    DISTRICT_CODE: "6015",
    DISTRICT_NAME: "ชุมตาบง",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 698,
    DISTRICT_CODE: "6051",
    DISTRICT_NAME: "สาขาตำบลห้วยน้ำหอม*",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 699,
    DISTRICT_CODE: "6052",
    DISTRICT_NAME: "กิ่งอำเภอชุมตาบง (สาขาตำบลชุมตาบง)*",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 700,
    DISTRICT_CODE: "6053",
    DISTRICT_NAME: "แม่วงก์ (สาขาตำบลแม่เล่ย์)*",
    GEO_ID: 2,
    PROVINCE_ID: 47
  },
  {
    DISTRICT_ID: 701,
    DISTRICT_CODE: "6101",
    DISTRICT_NAME: "เมืองอุทัยธานี",
    GEO_ID: 2,
    PROVINCE_ID: 48
  },
  {
    DISTRICT_ID: 702,
    DISTRICT_CODE: "6102",
    DISTRICT_NAME: "ทัพทัน",
    GEO_ID: 2,
    PROVINCE_ID: 48
  },
  {
    DISTRICT_ID: 703,
    DISTRICT_CODE: "6103",
    DISTRICT_NAME: "สว่างอารมณ์",
    GEO_ID: 2,
    PROVINCE_ID: 48
  },
  {
    DISTRICT_ID: 704,
    DISTRICT_CODE: "6104",
    DISTRICT_NAME: "หนองฉาง",
    GEO_ID: 2,
    PROVINCE_ID: 48
  },
  {
    DISTRICT_ID: 705,
    DISTRICT_CODE: "6105",
    DISTRICT_NAME: "หนองขาหย่าง",
    GEO_ID: 2,
    PROVINCE_ID: 48
  },
  {
    DISTRICT_ID: 706,
    DISTRICT_CODE: "6106",
    DISTRICT_NAME: "บ้านไร่",
    GEO_ID: 2,
    PROVINCE_ID: 48
  },
  {
    DISTRICT_ID: 707,
    DISTRICT_CODE: "6107",
    DISTRICT_NAME: "ลานสัก",
    GEO_ID: 2,
    PROVINCE_ID: 48
  },
  {
    DISTRICT_ID: 708,
    DISTRICT_CODE: "6108",
    DISTRICT_NAME: "ห้วยคต",
    GEO_ID: 2,
    PROVINCE_ID: 48
  },
  {
    DISTRICT_ID: 709,
    DISTRICT_CODE: "6201",
    DISTRICT_NAME: "เมืองกำแพงเพชร",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 710,
    DISTRICT_CODE: "6202",
    DISTRICT_NAME: "ไทรงาม",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 711,
    DISTRICT_CODE: "6203",
    DISTRICT_NAME: "คลองลาน",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 712,
    DISTRICT_CODE: "6204",
    DISTRICT_NAME: "ขาณุวรลักษบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 713,
    DISTRICT_CODE: "6205",
    DISTRICT_NAME: "คลองขลุง",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 714,
    DISTRICT_CODE: "6206",
    DISTRICT_NAME: "พรานกระต่าย",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 715,
    DISTRICT_CODE: "6207",
    DISTRICT_NAME: "ลานกระบือ",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 716,
    DISTRICT_CODE: "6208",
    DISTRICT_NAME: "ทรายทองวัฒนา",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 717,
    DISTRICT_CODE: "6209",
    DISTRICT_NAME: "ปางศิลาทอง",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 718,
    DISTRICT_CODE: "6210",
    DISTRICT_NAME: "บึงสามัคคี",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 719,
    DISTRICT_CODE: "6211",
    DISTRICT_NAME: "โกสัมพีนคร",
    GEO_ID: 2,
    PROVINCE_ID: 49
  },
  {
    DISTRICT_ID: 720,
    DISTRICT_CODE: "6301",
    DISTRICT_NAME: "เมืองตาก",
    GEO_ID: 4,
    PROVINCE_ID: 50
  },
  {
    DISTRICT_ID: 721,
    DISTRICT_CODE: "6302",
    DISTRICT_NAME: "บ้านตาก",
    GEO_ID: 4,
    PROVINCE_ID: 50
  },
  {
    DISTRICT_ID: 722,
    DISTRICT_CODE: "6303",
    DISTRICT_NAME: "สามเงา",
    GEO_ID: 4,
    PROVINCE_ID: 50
  },
  {
    DISTRICT_ID: 723,
    DISTRICT_CODE: "6304",
    DISTRICT_NAME: "แม่ระมาด",
    GEO_ID: 4,
    PROVINCE_ID: 50
  },
  {
    DISTRICT_ID: 724,
    DISTRICT_CODE: "6305",
    DISTRICT_NAME: "ท่าสองยาง",
    GEO_ID: 4,
    PROVINCE_ID: 50
  },
  {
    DISTRICT_ID: 725,
    DISTRICT_CODE: "6306",
    DISTRICT_NAME: "แม่สอด",
    GEO_ID: 4,
    PROVINCE_ID: 50
  },
  {
    DISTRICT_ID: 726,
    DISTRICT_CODE: "6307",
    DISTRICT_NAME: "พบพระ",
    GEO_ID: 4,
    PROVINCE_ID: 50
  },
  {
    DISTRICT_ID: 727,
    DISTRICT_CODE: "6308",
    DISTRICT_NAME: "อุ้มผาง",
    GEO_ID: 4,
    PROVINCE_ID: 50
  },
  {
    DISTRICT_ID: 728,
    DISTRICT_CODE: "6309",
    DISTRICT_NAME: "วังเจ้า",
    GEO_ID: 4,
    PROVINCE_ID: 50
  },
  {
    DISTRICT_ID: 729,
    DISTRICT_CODE: "6381",
    DISTRICT_NAME: "*กิ่ง อ.ท่าปุย  จ.ตาก",
    GEO_ID: 4,
    PROVINCE_ID: 50
  },
  {
    DISTRICT_ID: 730,
    DISTRICT_CODE: "6401",
    DISTRICT_NAME: "เมืองสุโขทัย",
    GEO_ID: 2,
    PROVINCE_ID: 51
  },
  {
    DISTRICT_ID: 731,
    DISTRICT_CODE: "6402",
    DISTRICT_NAME: "บ้านด่านลานหอย",
    GEO_ID: 2,
    PROVINCE_ID: 51
  },
  {
    DISTRICT_ID: 732,
    DISTRICT_CODE: "6403",
    DISTRICT_NAME: "คีรีมาศ",
    GEO_ID: 2,
    PROVINCE_ID: 51
  },
  {
    DISTRICT_ID: 733,
    DISTRICT_CODE: "6404",
    DISTRICT_NAME: "กงไกรลาศ",
    GEO_ID: 2,
    PROVINCE_ID: 51
  },
  {
    DISTRICT_ID: 734,
    DISTRICT_CODE: "6405",
    DISTRICT_NAME: "ศรีสัชนาลัย",
    GEO_ID: 2,
    PROVINCE_ID: 51
  },
  {
    DISTRICT_ID: 735,
    DISTRICT_CODE: "6406",
    DISTRICT_NAME: "ศรีสำโรง",
    GEO_ID: 2,
    PROVINCE_ID: 51
  },
  {
    DISTRICT_ID: 736,
    DISTRICT_CODE: "6407",
    DISTRICT_NAME: "สวรรคโลก",
    GEO_ID: 2,
    PROVINCE_ID: 51
  },
  {
    DISTRICT_ID: 737,
    DISTRICT_CODE: "6408",
    DISTRICT_NAME: "ศรีนคร",
    GEO_ID: 2,
    PROVINCE_ID: 51
  },
  {
    DISTRICT_ID: 738,
    DISTRICT_CODE: "6409",
    DISTRICT_NAME: "ทุ่งเสลี่ยม",
    GEO_ID: 2,
    PROVINCE_ID: 51
  },
  {
    DISTRICT_ID: 739,
    DISTRICT_CODE: "6501",
    DISTRICT_NAME: "เมืองพิษณุโลก",
    GEO_ID: 2,
    PROVINCE_ID: 52
  },
  {
    DISTRICT_ID: 740,
    DISTRICT_CODE: "6502",
    DISTRICT_NAME: "นครไทย",
    GEO_ID: 2,
    PROVINCE_ID: 52
  },
  {
    DISTRICT_ID: 741,
    DISTRICT_CODE: "6503",
    DISTRICT_NAME: "ชาติตระการ",
    GEO_ID: 2,
    PROVINCE_ID: 52
  },
  {
    DISTRICT_ID: 742,
    DISTRICT_CODE: "6504",
    DISTRICT_NAME: "บางระกำ",
    GEO_ID: 2,
    PROVINCE_ID: 52
  },
  {
    DISTRICT_ID: 743,
    DISTRICT_CODE: "6505",
    DISTRICT_NAME: "บางกระทุ่ม",
    GEO_ID: 2,
    PROVINCE_ID: 52
  },
  {
    DISTRICT_ID: 744,
    DISTRICT_CODE: "6506",
    DISTRICT_NAME: "พรหมพิราม",
    GEO_ID: 2,
    PROVINCE_ID: 52
  },
  {
    DISTRICT_ID: 745,
    DISTRICT_CODE: "6507",
    DISTRICT_NAME: "วัดโบสถ์",
    GEO_ID: 2,
    PROVINCE_ID: 52
  },
  {
    DISTRICT_ID: 746,
    DISTRICT_CODE: "6508",
    DISTRICT_NAME: "วังทอง",
    GEO_ID: 2,
    PROVINCE_ID: 52
  },
  {
    DISTRICT_ID: 747,
    DISTRICT_CODE: "6509",
    DISTRICT_NAME: "เนินมะปราง",
    GEO_ID: 2,
    PROVINCE_ID: 52
  },
  {
    DISTRICT_ID: 748,
    DISTRICT_CODE: "6601",
    DISTRICT_NAME: "เมืองพิจิตร",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 749,
    DISTRICT_CODE: "6602",
    DISTRICT_NAME: "วังทรายพูน",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 750,
    DISTRICT_CODE: "6603",
    DISTRICT_NAME: "โพธิ์ประทับช้าง",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 751,
    DISTRICT_CODE: "6604",
    DISTRICT_NAME: "ตะพานหิน",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 752,
    DISTRICT_CODE: "6605",
    DISTRICT_NAME: "บางมูลนาก",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 753,
    DISTRICT_CODE: "6606",
    DISTRICT_NAME: "โพทะเล",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 754,
    DISTRICT_CODE: "6607",
    DISTRICT_NAME: "สามง่าม",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 755,
    DISTRICT_CODE: "6608",
    DISTRICT_NAME: "ทับคล้อ",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 756,
    DISTRICT_CODE: "6609",
    DISTRICT_NAME: "สากเหล็ก",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 757,
    DISTRICT_CODE: "6610",
    DISTRICT_NAME: "บึงนาราง",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 758,
    DISTRICT_CODE: "6611",
    DISTRICT_NAME: "ดงเจริญ",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 759,
    DISTRICT_CODE: "6612",
    DISTRICT_NAME: "วชิรบารมี",
    GEO_ID: 2,
    PROVINCE_ID: 53
  },
  {
    DISTRICT_ID: 760,
    DISTRICT_CODE: "6701",
    DISTRICT_NAME: "เมืองเพชรบูรณ์",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 761,
    DISTRICT_CODE: "6702",
    DISTRICT_NAME: "ชนแดน",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 762,
    DISTRICT_CODE: "6703",
    DISTRICT_NAME: "หล่มสัก",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 763,
    DISTRICT_CODE: "6704",
    DISTRICT_NAME: "หล่มเก่า",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 764,
    DISTRICT_CODE: "6705",
    DISTRICT_NAME: "วิเชียรบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 765,
    DISTRICT_CODE: "6706",
    DISTRICT_NAME: "ศรีเทพ",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 766,
    DISTRICT_CODE: "6707",
    DISTRICT_NAME: "หนองไผ่",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 767,
    DISTRICT_CODE: "6708",
    DISTRICT_NAME: "บึงสามพัน",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 768,
    DISTRICT_CODE: "6709",
    DISTRICT_NAME: "น้ำหนาว",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 769,
    DISTRICT_CODE: "6710",
    DISTRICT_NAME: "วังโป่ง",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 770,
    DISTRICT_CODE: "6711",
    DISTRICT_NAME: "เขาค้อ",
    GEO_ID: 2,
    PROVINCE_ID: 54
  },
  {
    DISTRICT_ID: 771,
    DISTRICT_CODE: "7001",
    DISTRICT_NAME: "เมืองราชบุรี",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 772,
    DISTRICT_CODE: "7002",
    DISTRICT_NAME: "จอมบึง",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 773,
    DISTRICT_CODE: "7003",
    DISTRICT_NAME: "สวนผึ้ง",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 774,
    DISTRICT_CODE: "7004",
    DISTRICT_NAME: "ดำเนินสะดวก",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 775,
    DISTRICT_CODE: "7005",
    DISTRICT_NAME: "บ้านโป่ง",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 776,
    DISTRICT_CODE: "7006",
    DISTRICT_NAME: "บางแพ",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 777,
    DISTRICT_CODE: "7007",
    DISTRICT_NAME: "โพธาราม",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 778,
    DISTRICT_CODE: "7008",
    DISTRICT_NAME: "ปากท่อ",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 779,
    DISTRICT_CODE: "7009",
    DISTRICT_NAME: "วัดเพลง",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 780,
    DISTRICT_CODE: "7010",
    DISTRICT_NAME: "บ้านคา",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 781,
    DISTRICT_CODE: "7074",
    DISTRICT_NAME: "ท้องถิ่นเทศบาลตำบลบ้านฆ้อง",
    GEO_ID: 4,
    PROVINCE_ID: 55
  },
  {
    DISTRICT_ID: 782,
    DISTRICT_CODE: "7101",
    DISTRICT_NAME: "เมืองกาญจนบุรี",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 783,
    DISTRICT_CODE: "7102",
    DISTRICT_NAME: "ไทรโยค",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 784,
    DISTRICT_CODE: "7103",
    DISTRICT_NAME: "บ่อพลอย",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 785,
    DISTRICT_CODE: "7104",
    DISTRICT_NAME: "ศรีสวัสดิ์",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 786,
    DISTRICT_CODE: "7105",
    DISTRICT_NAME: "ท่ามะกา",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 787,
    DISTRICT_CODE: "7106",
    DISTRICT_NAME: "ท่าม่วง",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 788,
    DISTRICT_CODE: "7107",
    DISTRICT_NAME: "ทองผาภูมิ",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 789,
    DISTRICT_CODE: "7108",
    DISTRICT_NAME: "สังขละบุรี",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 790,
    DISTRICT_CODE: "7109",
    DISTRICT_NAME: "พนมทวน",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 791,
    DISTRICT_CODE: "7110",
    DISTRICT_NAME: "เลาขวัญ",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 792,
    DISTRICT_CODE: "7111",
    DISTRICT_NAME: "ด่านมะขามเตี้ย",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 793,
    DISTRICT_CODE: "7112",
    DISTRICT_NAME: "หนองปรือ",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 794,
    DISTRICT_CODE: "7113",
    DISTRICT_NAME: "ห้วยกระเจา",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 795,
    DISTRICT_CODE: "7151",
    DISTRICT_NAME: "สาขาตำบลท่ากระดาน*",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 796,
    DISTRICT_CODE: "7181",
    DISTRICT_NAME: "*บ้านทวน  จ.กาญจนบุรี",
    GEO_ID: 4,
    PROVINCE_ID: 56
  },
  {
    DISTRICT_ID: 797,
    DISTRICT_CODE: "7201",
    DISTRICT_NAME: "เมืองสุพรรณบุรี",
    GEO_ID: 2,
    PROVINCE_ID: 57
  },
  {
    DISTRICT_ID: 798,
    DISTRICT_CODE: "7202",
    DISTRICT_NAME: "เดิมบางนางบวช",
    GEO_ID: 2,
    PROVINCE_ID: 57
  },
  {
    DISTRICT_ID: 799,
    DISTRICT_CODE: "7203",
    DISTRICT_NAME: "ด่านช้าง",
    GEO_ID: 2,
    PROVINCE_ID: 57
  },
  {
    DISTRICT_ID: 800,
    DISTRICT_CODE: "7204",
    DISTRICT_NAME: "บางปลาม้า",
    GEO_ID: 2,
    PROVINCE_ID: 57
  },
  {
    DISTRICT_ID: 801,
    DISTRICT_CODE: "7205",
    DISTRICT_NAME: "ศรีประจันต์",
    GEO_ID: 2,
    PROVINCE_ID: 57
  },
  {
    DISTRICT_ID: 802,
    DISTRICT_CODE: "7206",
    DISTRICT_NAME: "ดอนเจดีย์",
    GEO_ID: 2,
    PROVINCE_ID: 57
  },
  {
    DISTRICT_ID: 803,
    DISTRICT_CODE: "7207",
    DISTRICT_NAME: "สองพี่น้อง",
    GEO_ID: 2,
    PROVINCE_ID: 57
  },
  {
    DISTRICT_ID: 804,
    DISTRICT_CODE: "7208",
    DISTRICT_NAME: "สามชุก",
    GEO_ID: 2,
    PROVINCE_ID: 57
  },
  {
    DISTRICT_ID: 805,
    DISTRICT_CODE: "7209",
    DISTRICT_NAME: "อู่ทอง",
    GEO_ID: 2,
    PROVINCE_ID: 57
  },
  {
    DISTRICT_ID: 806,
    DISTRICT_CODE: "7210",
    DISTRICT_NAME: "หนองหญ้าไซ",
    GEO_ID: 2,
    PROVINCE_ID: 57
  },
  {
    DISTRICT_ID: 807,
    DISTRICT_CODE: "7301",
    DISTRICT_NAME: "เมืองนครปฐม",
    GEO_ID: 2,
    PROVINCE_ID: 58
  },
  {
    DISTRICT_ID: 808,
    DISTRICT_CODE: "7302",
    DISTRICT_NAME: "กำแพงแสน",
    GEO_ID: 2,
    PROVINCE_ID: 58
  },
  {
    DISTRICT_ID: 809,
    DISTRICT_CODE: "7303",
    DISTRICT_NAME: "นครชัยศรี",
    GEO_ID: 2,
    PROVINCE_ID: 58
  },
  {
    DISTRICT_ID: 810,
    DISTRICT_CODE: "7304",
    DISTRICT_NAME: "ดอนตูม",
    GEO_ID: 2,
    PROVINCE_ID: 58
  },
  {
    DISTRICT_ID: 811,
    DISTRICT_CODE: "7305",
    DISTRICT_NAME: "บางเลน",
    GEO_ID: 2,
    PROVINCE_ID: 58
  },
  {
    DISTRICT_ID: 812,
    DISTRICT_CODE: "7306",
    DISTRICT_NAME: "สามพราน",
    GEO_ID: 2,
    PROVINCE_ID: 58
  },
  {
    DISTRICT_ID: 813,
    DISTRICT_CODE: "7307",
    DISTRICT_NAME: "พุทธมณฑล",
    GEO_ID: 2,
    PROVINCE_ID: 58
  },
  {
    DISTRICT_ID: 814,
    DISTRICT_CODE: "7401",
    DISTRICT_NAME: "เมืองสมุทรสาคร",
    GEO_ID: 2,
    PROVINCE_ID: 59
  },
  {
    DISTRICT_ID: 815,
    DISTRICT_CODE: "7402",
    DISTRICT_NAME: "กระทุ่มแบน",
    GEO_ID: 2,
    PROVINCE_ID: 59
  },
  {
    DISTRICT_ID: 816,
    DISTRICT_CODE: "7403",
    DISTRICT_NAME: "บ้านแพ้ว",
    GEO_ID: 2,
    PROVINCE_ID: 59
  },
  {
    DISTRICT_ID: 817,
    DISTRICT_CODE: "7501",
    DISTRICT_NAME: "เมืองสมุทรสงคราม",
    GEO_ID: 2,
    PROVINCE_ID: 60
  },
  {
    DISTRICT_ID: 818,
    DISTRICT_CODE: "7502",
    DISTRICT_NAME: "บางคนที",
    GEO_ID: 2,
    PROVINCE_ID: 60
  },
  {
    DISTRICT_ID: 819,
    DISTRICT_CODE: "7503",
    DISTRICT_NAME: "อัมพวา",
    GEO_ID: 2,
    PROVINCE_ID: 60
  },
  {
    DISTRICT_ID: 820,
    DISTRICT_CODE: "7601",
    DISTRICT_NAME: "เมืองเพชรบุรี",
    GEO_ID: 4,
    PROVINCE_ID: 61
  },
  {
    DISTRICT_ID: 821,
    DISTRICT_CODE: "7602",
    DISTRICT_NAME: "เขาย้อย",
    GEO_ID: 4,
    PROVINCE_ID: 61
  },
  {
    DISTRICT_ID: 822,
    DISTRICT_CODE: "7603",
    DISTRICT_NAME: "หนองหญ้าปล้อง",
    GEO_ID: 4,
    PROVINCE_ID: 61
  },
  {
    DISTRICT_ID: 823,
    DISTRICT_CODE: "7604",
    DISTRICT_NAME: "ชะอำ",
    GEO_ID: 4,
    PROVINCE_ID: 61
  },
  {
    DISTRICT_ID: 824,
    DISTRICT_CODE: "7605",
    DISTRICT_NAME: "ท่ายาง",
    GEO_ID: 4,
    PROVINCE_ID: 61
  },
  {
    DISTRICT_ID: 825,
    DISTRICT_CODE: "7606",
    DISTRICT_NAME: "บ้านลาด",
    GEO_ID: 4,
    PROVINCE_ID: 61
  },
  {
    DISTRICT_ID: 826,
    DISTRICT_CODE: "7607",
    DISTRICT_NAME: "บ้านแหลม",
    GEO_ID: 4,
    PROVINCE_ID: 61
  },
  {
    DISTRICT_ID: 827,
    DISTRICT_CODE: "7608",
    DISTRICT_NAME: "แก่งกระจาน",
    GEO_ID: 4,
    PROVINCE_ID: 61
  },
  {
    DISTRICT_ID: 828,
    DISTRICT_CODE: "7701",
    DISTRICT_NAME: "เมืองประจวบคีรีขันธ์",
    GEO_ID: 4,
    PROVINCE_ID: 62
  },
  {
    DISTRICT_ID: 829,
    DISTRICT_CODE: "7702",
    DISTRICT_NAME: "กุยบุรี",
    GEO_ID: 4,
    PROVINCE_ID: 62
  },
  {
    DISTRICT_ID: 830,
    DISTRICT_CODE: "7703",
    DISTRICT_NAME: "ทับสะแก",
    GEO_ID: 4,
    PROVINCE_ID: 62
  },
  {
    DISTRICT_ID: 831,
    DISTRICT_CODE: "7704",
    DISTRICT_NAME: "บางสะพาน",
    GEO_ID: 4,
    PROVINCE_ID: 62
  },
  {
    DISTRICT_ID: 832,
    DISTRICT_CODE: "7705",
    DISTRICT_NAME: "บางสะพานน้อย",
    GEO_ID: 4,
    PROVINCE_ID: 62
  },
  {
    DISTRICT_ID: 833,
    DISTRICT_CODE: "7706",
    DISTRICT_NAME: "ปราณบุรี",
    GEO_ID: 4,
    PROVINCE_ID: 62
  },
  {
    DISTRICT_ID: 834,
    DISTRICT_CODE: "7707",
    DISTRICT_NAME: "หัวหิน",
    GEO_ID: 4,
    PROVINCE_ID: 62
  },
  {
    DISTRICT_ID: 835,
    DISTRICT_CODE: "7708",
    DISTRICT_NAME: "สามร้อยยอด",
    GEO_ID: 4,
    PROVINCE_ID: 62
  },
  {
    DISTRICT_ID: 836,
    DISTRICT_CODE: "8001",
    DISTRICT_NAME: "เมืองนครศรีธรรมราช",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 837,
    DISTRICT_CODE: "8002",
    DISTRICT_NAME: "พรหมคีรี",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 838,
    DISTRICT_CODE: "8003",
    DISTRICT_NAME: "ลานสกา",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 839,
    DISTRICT_CODE: "8004",
    DISTRICT_NAME: "ฉวาง",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 840,
    DISTRICT_CODE: "8005",
    DISTRICT_NAME: "พิปูน",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 841,
    DISTRICT_CODE: "8006",
    DISTRICT_NAME: "เชียรใหญ่",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 842,
    DISTRICT_CODE: "8007",
    DISTRICT_NAME: "ชะอวด",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 843,
    DISTRICT_CODE: "8008",
    DISTRICT_NAME: "ท่าศาลา",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 844,
    DISTRICT_CODE: "8009",
    DISTRICT_NAME: "ทุ่งสง",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 845,
    DISTRICT_CODE: "8010",
    DISTRICT_NAME: "นาบอน",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 846,
    DISTRICT_CODE: "8011",
    DISTRICT_NAME: "ทุ่งใหญ่",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 847,
    DISTRICT_CODE: "8012",
    DISTRICT_NAME: "ปากพนัง",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 848,
    DISTRICT_CODE: "8013",
    DISTRICT_NAME: "ร่อนพิบูลย์",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 849,
    DISTRICT_CODE: "8014",
    DISTRICT_NAME: "สิชล",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 850,
    DISTRICT_CODE: "8015",
    DISTRICT_NAME: "ขนอม",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 851,
    DISTRICT_CODE: "8016",
    DISTRICT_NAME: "หัวไทร",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 852,
    DISTRICT_CODE: "8017",
    DISTRICT_NAME: "บางขัน",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 853,
    DISTRICT_CODE: "8018",
    DISTRICT_NAME: "ถ้ำพรรณรา",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 854,
    DISTRICT_CODE: "8019",
    DISTRICT_NAME: "จุฬาภรณ์",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 855,
    DISTRICT_CODE: "8020",
    DISTRICT_NAME: "พระพรหม",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 856,
    DISTRICT_CODE: "8021",
    DISTRICT_NAME: "นบพิตำ",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 857,
    DISTRICT_CODE: "8022",
    DISTRICT_NAME: "ช้างกลาง",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 858,
    DISTRICT_CODE: "8023",
    DISTRICT_NAME: "เฉลิมพระเกียรติ",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 859,
    DISTRICT_CODE: "8051",
    DISTRICT_NAME: "เชียรใหญ่ (สาขาตำบลเสือหึง)*",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 860,
    DISTRICT_CODE: "8052",
    DISTRICT_NAME: "สาขาตำบลสวนหลวง**",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 861,
    DISTRICT_CODE: "8053",
    DISTRICT_NAME: "ร่อนพิบูลย์ (สาขาตำบลหินตก)*",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 862,
    DISTRICT_CODE: "8054",
    DISTRICT_NAME: "หัวไทร (สาขาตำบลควนชะลิก)*",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 863,
    DISTRICT_CODE: "8055",
    DISTRICT_NAME: "ทุ่งสง (สาขาตำบลกะปาง)*",
    GEO_ID: 6,
    PROVINCE_ID: 63
  },
  {
    DISTRICT_ID: 864,
    DISTRICT_CODE: "8101",
    DISTRICT_NAME: "เมืองกระบี่",
    GEO_ID: 6,
    PROVINCE_ID: 64
  },
  {
    DISTRICT_ID: 865,
    DISTRICT_CODE: "8102",
    DISTRICT_NAME: "เขาพนม",
    GEO_ID: 6,
    PROVINCE_ID: 64
  },
  {
    DISTRICT_ID: 866,
    DISTRICT_CODE: "8103",
    DISTRICT_NAME: "เกาะลันตา",
    GEO_ID: 6,
    PROVINCE_ID: 64
  },
  {
    DISTRICT_ID: 867,
    DISTRICT_CODE: "8104",
    DISTRICT_NAME: "คลองท่อม",
    GEO_ID: 6,
    PROVINCE_ID: 64
  },
  {
    DISTRICT_ID: 868,
    DISTRICT_CODE: "8105",
    DISTRICT_NAME: "อ่าวลึก",
    GEO_ID: 6,
    PROVINCE_ID: 64
  },
  {
    DISTRICT_ID: 869,
    DISTRICT_CODE: "8106",
    DISTRICT_NAME: "ปลายพระยา",
    GEO_ID: 6,
    PROVINCE_ID: 64
  },
  {
    DISTRICT_ID: 870,
    DISTRICT_CODE: "8107",
    DISTRICT_NAME: "ลำทับ",
    GEO_ID: 6,
    PROVINCE_ID: 64
  },
  {
    DISTRICT_ID: 871,
    DISTRICT_CODE: "8108",
    DISTRICT_NAME: "เหนือคลอง",
    GEO_ID: 6,
    PROVINCE_ID: 64
  },
  {
    DISTRICT_ID: 872,
    DISTRICT_CODE: "8201",
    DISTRICT_NAME: "เมืองพังงา",
    GEO_ID: 6,
    PROVINCE_ID: 65
  },
  {
    DISTRICT_ID: 873,
    DISTRICT_CODE: "8202",
    DISTRICT_NAME: "เกาะยาว",
    GEO_ID: 6,
    PROVINCE_ID: 65
  },
  {
    DISTRICT_ID: 874,
    DISTRICT_CODE: "8203",
    DISTRICT_NAME: "กะปง",
    GEO_ID: 6,
    PROVINCE_ID: 65
  },
  {
    DISTRICT_ID: 875,
    DISTRICT_CODE: "8204",
    DISTRICT_NAME: "ตะกั่วทุ่ง",
    GEO_ID: 6,
    PROVINCE_ID: 65
  },
  {
    DISTRICT_ID: 876,
    DISTRICT_CODE: "8205",
    DISTRICT_NAME: "ตะกั่วป่า",
    GEO_ID: 6,
    PROVINCE_ID: 65
  },
  {
    DISTRICT_ID: 877,
    DISTRICT_CODE: "8206",
    DISTRICT_NAME: "คุระบุรี",
    GEO_ID: 6,
    PROVINCE_ID: 65
  },
  {
    DISTRICT_ID: 878,
    DISTRICT_CODE: "8207",
    DISTRICT_NAME: "ทับปุด",
    GEO_ID: 6,
    PROVINCE_ID: 65
  },
  {
    DISTRICT_ID: 879,
    DISTRICT_CODE: "8208",
    DISTRICT_NAME: "ท้ายเหมือง",
    GEO_ID: 6,
    PROVINCE_ID: 65
  },
  {
    DISTRICT_ID: 880,
    DISTRICT_CODE: "8301",
    DISTRICT_NAME: "เมืองภูเก็ต",
    GEO_ID: 6,
    PROVINCE_ID: 66
  },
  {
    DISTRICT_ID: 881,
    DISTRICT_CODE: "8302",
    DISTRICT_NAME: "กะทู้",
    GEO_ID: 6,
    PROVINCE_ID: 66
  },
  {
    DISTRICT_ID: 882,
    DISTRICT_CODE: "8303",
    DISTRICT_NAME: "ถลาง",
    GEO_ID: 6,
    PROVINCE_ID: 66
  },
  {
    DISTRICT_ID: 883,
    DISTRICT_CODE: "8381",
    DISTRICT_NAME: "*ทุ่งคา",
    GEO_ID: 6,
    PROVINCE_ID: 66
  },
  {
    DISTRICT_ID: 884,
    DISTRICT_CODE: "8401",
    DISTRICT_NAME: "เมืองสุราษฎร์ธานี",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 885,
    DISTRICT_CODE: "8402",
    DISTRICT_NAME: "กาญจนดิษฐ์",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 886,
    DISTRICT_CODE: "8403",
    DISTRICT_NAME: "ดอนสัก",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 887,
    DISTRICT_CODE: "8404",
    DISTRICT_NAME: "เกาะสมุย",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 888,
    DISTRICT_CODE: "8405",
    DISTRICT_NAME: "เกาะพะงัน",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 889,
    DISTRICT_CODE: "8406",
    DISTRICT_NAME: "ไชยา",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 890,
    DISTRICT_CODE: "8407",
    DISTRICT_NAME: "ท่าชนะ",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 891,
    DISTRICT_CODE: "8408",
    DISTRICT_NAME: "คีรีรัฐนิคม",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 892,
    DISTRICT_CODE: "8409",
    DISTRICT_NAME: "บ้านตาขุน",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 893,
    DISTRICT_CODE: "8410",
    DISTRICT_NAME: "พนม",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 894,
    DISTRICT_CODE: "8411",
    DISTRICT_NAME: "ท่าฉาง",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 895,
    DISTRICT_CODE: "8412",
    DISTRICT_NAME: "บ้านนาสาร",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 896,
    DISTRICT_CODE: "8413",
    DISTRICT_NAME: "บ้านนาเดิม",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 897,
    DISTRICT_CODE: "8414",
    DISTRICT_NAME: "เคียนซา",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 898,
    DISTRICT_CODE: "8415",
    DISTRICT_NAME: "เวียงสระ",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 899,
    DISTRICT_CODE: "8416",
    DISTRICT_NAME: "พระแสง",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 900,
    DISTRICT_CODE: "8417",
    DISTRICT_NAME: "พุนพิน",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 901,
    DISTRICT_CODE: "8418",
    DISTRICT_NAME: "ชัยบุรี",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 902,
    DISTRICT_CODE: "8419",
    DISTRICT_NAME: "วิภาวดี",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 903,
    DISTRICT_CODE: "8451",
    DISTRICT_NAME: "เกาะพงัน (สาขาตำบลเกาะเต่า)*",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 904,
    DISTRICT_CODE: "8481",
    DISTRICT_NAME: "*อ.บ้านดอน  จ.สุราษฎร์ธานี",
    GEO_ID: 6,
    PROVINCE_ID: 67
  },
  {
    DISTRICT_ID: 905,
    DISTRICT_CODE: "8501",
    DISTRICT_NAME: "เมืองระนอง",
    GEO_ID: 6,
    PROVINCE_ID: 68
  },
  {
    DISTRICT_ID: 906,
    DISTRICT_CODE: "8502",
    DISTRICT_NAME: "ละอุ่น",
    GEO_ID: 6,
    PROVINCE_ID: 68
  },
  {
    DISTRICT_ID: 907,
    DISTRICT_CODE: "8503",
    DISTRICT_NAME: "กะเปอร์",
    GEO_ID: 6,
    PROVINCE_ID: 68
  },
  {
    DISTRICT_ID: 908,
    DISTRICT_CODE: "8504",
    DISTRICT_NAME: "กระบุรี",
    GEO_ID: 6,
    PROVINCE_ID: 68
  },
  {
    DISTRICT_ID: 909,
    DISTRICT_CODE: "8505",
    DISTRICT_NAME: "สุขสำราญ",
    GEO_ID: 6,
    PROVINCE_ID: 68
  },
  {
    DISTRICT_ID: 910,
    DISTRICT_CODE: "8601",
    DISTRICT_NAME: "เมืองชุมพร",
    GEO_ID: 6,
    PROVINCE_ID: 69
  },
  {
    DISTRICT_ID: 911,
    DISTRICT_CODE: "8602",
    DISTRICT_NAME: "ท่าแซะ",
    GEO_ID: 6,
    PROVINCE_ID: 69
  },
  {
    DISTRICT_ID: 912,
    DISTRICT_CODE: "8603",
    DISTRICT_NAME: "ปะทิว",
    GEO_ID: 6,
    PROVINCE_ID: 69
  },
  {
    DISTRICT_ID: 913,
    DISTRICT_CODE: "8604",
    DISTRICT_NAME: "หลังสวน",
    GEO_ID: 6,
    PROVINCE_ID: 69
  },
  {
    DISTRICT_ID: 914,
    DISTRICT_CODE: "8605",
    DISTRICT_NAME: "ละแม",
    GEO_ID: 6,
    PROVINCE_ID: 69
  },
  {
    DISTRICT_ID: 915,
    DISTRICT_CODE: "8606",
    DISTRICT_NAME: "พะโต๊ะ",
    GEO_ID: 6,
    PROVINCE_ID: 69
  },
  {
    DISTRICT_ID: 916,
    DISTRICT_CODE: "8607",
    DISTRICT_NAME: "สวี",
    GEO_ID: 6,
    PROVINCE_ID: 69
  },
  {
    DISTRICT_ID: 917,
    DISTRICT_CODE: "8608",
    DISTRICT_NAME: "ทุ่งตะโก",
    GEO_ID: 6,
    PROVINCE_ID: 69
  },
  {
    DISTRICT_ID: 918,
    DISTRICT_CODE: "9001",
    DISTRICT_NAME: "เมืองสงขลา",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 919,
    DISTRICT_CODE: "9002",
    DISTRICT_NAME: "สทิงพระ",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 920,
    DISTRICT_CODE: "9003",
    DISTRICT_NAME: "จะนะ",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 921,
    DISTRICT_CODE: "9004",
    DISTRICT_NAME: "นาทวี",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 922,
    DISTRICT_CODE: "9005",
    DISTRICT_NAME: "เทพา",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 923,
    DISTRICT_CODE: "9006",
    DISTRICT_NAME: "สะบ้าย้อย",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 924,
    DISTRICT_CODE: "9007",
    DISTRICT_NAME: "ระโนด",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 925,
    DISTRICT_CODE: "9008",
    DISTRICT_NAME: "กระแสสินธุ์",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 926,
    DISTRICT_CODE: "9009",
    DISTRICT_NAME: "รัตภูมิ",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 927,
    DISTRICT_CODE: "9010",
    DISTRICT_NAME: "สะเดา",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 928,
    DISTRICT_CODE: "9011",
    DISTRICT_NAME: "หาดใหญ่",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 929,
    DISTRICT_CODE: "9012",
    DISTRICT_NAME: "นาหม่อม",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 930,
    DISTRICT_CODE: "9013",
    DISTRICT_NAME: "ควนเนียง",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 931,
    DISTRICT_CODE: "9014",
    DISTRICT_NAME: "บางกล่ำ",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 932,
    DISTRICT_CODE: "9015",
    DISTRICT_NAME: "สิงหนคร",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 933,
    DISTRICT_CODE: "9016",
    DISTRICT_NAME: "คลองหอยโข่ง",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 934,
    DISTRICT_CODE: "9077",
    DISTRICT_NAME: "ท้องถิ่นเทศบาลตำบลสำนักขาม",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 935,
    DISTRICT_CODE: "9096",
    DISTRICT_NAME: "เทศบาลตำบลบ้านพรุ*",
    GEO_ID: 6,
    PROVINCE_ID: 70
  },
  {
    DISTRICT_ID: 936,
    DISTRICT_CODE: "9101",
    DISTRICT_NAME: "เมืองสตูล",
    GEO_ID: 6,
    PROVINCE_ID: 71
  },
  {
    DISTRICT_ID: 937,
    DISTRICT_CODE: "9102",
    DISTRICT_NAME: "ควนโดน",
    GEO_ID: 6,
    PROVINCE_ID: 71
  },
  {
    DISTRICT_ID: 938,
    DISTRICT_CODE: "9103",
    DISTRICT_NAME: "ควนกาหลง",
    GEO_ID: 6,
    PROVINCE_ID: 71
  },
  {
    DISTRICT_ID: 939,
    DISTRICT_CODE: "9104",
    DISTRICT_NAME: "ท่าแพ",
    GEO_ID: 6,
    PROVINCE_ID: 71
  },
  {
    DISTRICT_ID: 940,
    DISTRICT_CODE: "9105",
    DISTRICT_NAME: "ละงู",
    GEO_ID: 6,
    PROVINCE_ID: 71
  },
  {
    DISTRICT_ID: 941,
    DISTRICT_CODE: "9106",
    DISTRICT_NAME: "ทุ่งหว้า",
    GEO_ID: 6,
    PROVINCE_ID: 71
  },
  {
    DISTRICT_ID: 942,
    DISTRICT_CODE: "9107",
    DISTRICT_NAME: "มะนัง",
    GEO_ID: 6,
    PROVINCE_ID: 71
  },
  {
    DISTRICT_ID: 943,
    DISTRICT_CODE: "9201",
    DISTRICT_NAME: "เมืองตรัง",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 944,
    DISTRICT_CODE: "9202",
    DISTRICT_NAME: "กันตัง",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 945,
    DISTRICT_CODE: "9203",
    DISTRICT_NAME: "ย่านตาขาว",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 946,
    DISTRICT_CODE: "9204",
    DISTRICT_NAME: "ปะเหลียน",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 947,
    DISTRICT_CODE: "9205",
    DISTRICT_NAME: "สิเกา",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 948,
    DISTRICT_CODE: "9206",
    DISTRICT_NAME: "ห้วยยอด",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 949,
    DISTRICT_CODE: "9207",
    DISTRICT_NAME: "วังวิเศษ",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 950,
    DISTRICT_CODE: "9208",
    DISTRICT_NAME: "นาโยง",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 951,
    DISTRICT_CODE: "9209",
    DISTRICT_NAME: "รัษฎา",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 952,
    DISTRICT_CODE: "9210",
    DISTRICT_NAME: "หาดสำราญ",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 953,
    DISTRICT_CODE: "9251",
    DISTRICT_NAME: "อำเภอเมืองตรัง(สาขาคลองเต็ง)**",
    GEO_ID: 6,
    PROVINCE_ID: 72
  },
  {
    DISTRICT_ID: 954,
    DISTRICT_CODE: "9301",
    DISTRICT_NAME: "เมืองพัทลุง",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 955,
    DISTRICT_CODE: "9302",
    DISTRICT_NAME: "กงหรา",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 956,
    DISTRICT_CODE: "9303",
    DISTRICT_NAME: "เขาชัยสน",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 957,
    DISTRICT_CODE: "9304",
    DISTRICT_NAME: "ตะโหมด",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 958,
    DISTRICT_CODE: "9305",
    DISTRICT_NAME: "ควนขนุน",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 959,
    DISTRICT_CODE: "9306",
    DISTRICT_NAME: "ปากพะยูน",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 960,
    DISTRICT_CODE: "9307",
    DISTRICT_NAME: "ศรีบรรพต",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 961,
    DISTRICT_CODE: "9308",
    DISTRICT_NAME: "ป่าบอน",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 962,
    DISTRICT_CODE: "9309",
    DISTRICT_NAME: "บางแก้ว",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 963,
    DISTRICT_CODE: "9310",
    DISTRICT_NAME: "ป่าพะยอม",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 964,
    DISTRICT_CODE: "9311",
    DISTRICT_NAME: "ศรีนครินทร์",
    GEO_ID: 6,
    PROVINCE_ID: 73
  },
  {
    DISTRICT_ID: 965,
    DISTRICT_CODE: "9401",
    DISTRICT_NAME: "เมืองปัตตานี",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 966,
    DISTRICT_CODE: "9402",
    DISTRICT_NAME: "โคกโพธิ์",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 967,
    DISTRICT_CODE: "9403",
    DISTRICT_NAME: "หนองจิก",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 968,
    DISTRICT_CODE: "9404",
    DISTRICT_NAME: "ปะนาเระ",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 969,
    DISTRICT_CODE: "9405",
    DISTRICT_NAME: "มายอ",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 970,
    DISTRICT_CODE: "9406",
    DISTRICT_NAME: "ทุ่งยางแดง",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 971,
    DISTRICT_CODE: "9407",
    DISTRICT_NAME: "สายบุรี",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 972,
    DISTRICT_CODE: "9408",
    DISTRICT_NAME: "ไม้แก่น",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 973,
    DISTRICT_CODE: "9409",
    DISTRICT_NAME: "ยะหริ่ง",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 974,
    DISTRICT_CODE: "9410",
    DISTRICT_NAME: "ยะรัง",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 975,
    DISTRICT_CODE: "9411",
    DISTRICT_NAME: "กะพ้อ",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 976,
    DISTRICT_CODE: "9412",
    DISTRICT_NAME: "แม่ลาน",
    GEO_ID: 6,
    PROVINCE_ID: 74
  },
  {
    DISTRICT_ID: 977,
    DISTRICT_CODE: "9501",
    DISTRICT_NAME: "เมืองยะลา",
    GEO_ID: 6,
    PROVINCE_ID: 75
  },
  {
    DISTRICT_ID: 978,
    DISTRICT_CODE: "9502",
    DISTRICT_NAME: "เบตง",
    GEO_ID: 6,
    PROVINCE_ID: 75
  },
  {
    DISTRICT_ID: 979,
    DISTRICT_CODE: "9503",
    DISTRICT_NAME: "บันนังสตา",
    GEO_ID: 6,
    PROVINCE_ID: 75
  },
  {
    DISTRICT_ID: 980,
    DISTRICT_CODE: "9504",
    DISTRICT_NAME: "ธารโต",
    GEO_ID: 6,
    PROVINCE_ID: 75
  },
  {
    DISTRICT_ID: 981,
    DISTRICT_CODE: "9505",
    DISTRICT_NAME: "ยะหา",
    GEO_ID: 6,
    PROVINCE_ID: 75
  },
  {
    DISTRICT_ID: 982,
    DISTRICT_CODE: "9506",
    DISTRICT_NAME: "รามัน",
    GEO_ID: 6,
    PROVINCE_ID: 75
  },
  {
    DISTRICT_ID: 983,
    DISTRICT_CODE: "9507",
    DISTRICT_NAME: "กาบัง",
    GEO_ID: 6,
    PROVINCE_ID: 75
  },
  {
    DISTRICT_ID: 984,
    DISTRICT_CODE: "9508",
    DISTRICT_NAME: "กรงปินัง",
    GEO_ID: 6,
    PROVINCE_ID: 75
  },
  {
    DISTRICT_ID: 985,
    DISTRICT_CODE: "9601",
    DISTRICT_NAME: "เมืองนราธิวาส",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 986,
    DISTRICT_CODE: "9602",
    DISTRICT_NAME: "ตากใบ",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 987,
    DISTRICT_CODE: "9603",
    DISTRICT_NAME: "บาเจาะ",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 988,
    DISTRICT_CODE: "9604",
    DISTRICT_NAME: "ยี่งอ",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 989,
    DISTRICT_CODE: "9605",
    DISTRICT_NAME: "ระแงะ",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 990,
    DISTRICT_CODE: "9606",
    DISTRICT_NAME: "รือเสาะ",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 991,
    DISTRICT_CODE: "9607",
    DISTRICT_NAME: "ศรีสาคร",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 992,
    DISTRICT_CODE: "9608",
    DISTRICT_NAME: "แว้ง",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 993,
    DISTRICT_CODE: "9609",
    DISTRICT_NAME: "สุคิริน",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 994,
    DISTRICT_CODE: "9610",
    DISTRICT_NAME: "สุไหงโก-ลก",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 995,
    DISTRICT_CODE: "9611",
    DISTRICT_NAME: "สุไหงปาดี",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 996,
    DISTRICT_CODE: "9612",
    DISTRICT_NAME: "จะแนะ",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 997,
    DISTRICT_CODE: "9613",
    DISTRICT_NAME: "เจาะไอร้อง",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 998,
    DISTRICT_CODE: "9681",
    DISTRICT_NAME: "*อ.บางนรา  จ.นราธิวาส",
    GEO_ID: 6,
    PROVINCE_ID: 76
  },
  {
    DISTRICT_ID: 999,
    DISTRICT_CODE: "3801",
    DISTRICT_NAME: "เมืองบึงกาฬ",
    GEO_ID: 3,
    PROVINCE_ID: 77
  },
  {
    DISTRICT_ID: 1000,
    DISTRICT_CODE: "3802",
    DISTRICT_NAME: "เซกา",
    GEO_ID: 3,
    PROVINCE_ID: 77
  },
  {
    DISTRICT_ID: 1001,
    DISTRICT_CODE: "3803",
    DISTRICT_NAME: "โซ่พิสัย",
    GEO_ID: 3,
    PROVINCE_ID: 77
  },
  {
    DISTRICT_ID: 1002,
    DISTRICT_CODE: "3804",
    DISTRICT_NAME: "พรเจริญ",
    GEO_ID: 3,
    PROVINCE_ID: 77
  },
  {
    DISTRICT_ID: 1005,
    DISTRICT_CODE: "3807",
    DISTRICT_NAME: "ปากคาด",
    GEO_ID: 3,
    PROVINCE_ID: 77
  },
  {
    DISTRICT_ID: 1003,
    DISTRICT_CODE: "3805",
    DISTRICT_NAME: "ศรีวิไล",
    GEO_ID: 3,
    PROVINCE_ID: 77
  },
  {
    DISTRICT_ID: 1004,
    DISTRICT_CODE: "3806",
    DISTRICT_NAME: "บึงโขงหลง",
    GEO_ID: 3,
    PROVINCE_ID: 77
  },
  {
    DISTRICT_ID: 1006,
    DISTRICT_CODE: "3808",
    DISTRICT_NAME: "บุ่งคล้า",
    GEO_ID: 3,
    PROVINCE_ID: 77
  }
];

export default districts;
