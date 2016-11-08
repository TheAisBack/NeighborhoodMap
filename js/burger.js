// Data
var locations = [
	{
		title: "5 Guys Burgers and Fries",
		lat: 49.88187230165007, 
		lng: -97.29801952931075,
	  	street: "3380 Portage Ave",
	  	city: "Winnipeg, MB R3K 0Z1",
	  	url: "http://www.fiveguys.ca/",
	 	show: true,
		selected: false,
	  	id: "burger1",
	  	fourSquareId: "5165cff6e4b0baf4de77bfad"
	},
	{
		title: "5 Guys Burgers and Fries",
		lat: 49.80316445921426, 
		lng: -97.15752840042114,
	  	street: "2425 Pembina Hwy",
	  	city: "Winnipeg, MB R3T 2H4",
	  	url: "http://www.fiveguys.ca/",
		show: true,
		selected: false,
	  	id: "burger2",
  	  	fourSquareId: "4fed20aaebca87c84ef85d34"
	},
	{
		title: "5 Guys Burgers and Fries",
		lat: 49.89853161642464, 
		lng: -97.06574613741448,
		street: "1575 Regent Ave W",
		city: "Winnipeg, MB R2C 3B3",
		url: "http://www.fiveguys.ca/",
		show: true,
		selected: false,
		id: "burger3",
  	  	fourSquareId: "504e2eb77e27b136b4b6efb9"
	},
	{
		title: "A&W", 
		lat: 49.85737567647989, 
		lng: -97.16536775337912,
		street: "Grant Park Shopping Centre, 1120 Grant Ave", 
		city: "Winnipeg, MB R3M 2A6", 
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger4",
  	  	fourSquareId: "4b79a15ff964a520c0062fe3"
	},
	{
		title: "A&W",
		lat: 49.94454533, 
		lng: -97.086211,
		street: "1403 Henderson Hwy",
		city: "Winnipeg, MB R2G 1N3", 
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger5",
  	  	fourSquareId: "4bc8ae788b7c9c7436ab38cf"
	},
	{
		title: "A&W",
		lat: 49.93794048844688,
		lng: -97.19451613443245,
		street: "817 Keewatin St",
		city: "Winnipeg, MB R2X 3B9",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger6",
  	  	fourSquareId: "4b6df96af964a52055a02ce3"	
	},
	{
		title: "A&W",
		lat: 49.8201404959988, 
		lng: -97.20222473144531,
		street: "1720 Kenaston Blvd",
		city: "Winnipeg, MB R3Y 1V5",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger7",
  	  	fourSquareId: "4bc4dc6f461576b040908032"
	},
	{
		title: "A&W",
		lat: 49.83981904010074, 
		lng: -97.20805437637448,
		street: "1 Lowson Cres.",
		city: "Winnipeg, MB R3P 0T3",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger8",
  	  	fourSquareId: "50c52064f2e724fc3231cb25"
	}, 
	{
		title: "A&W", 
		lat: 49.893698974263195, 
		lng: -97.13829675218722,
		street: "360 Main St",
		city: "Winnipeg, MB R3C 3Z8",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger9",
  	  	fourSquareId: "4b7b1e15f964a5206c522fe3"
	},
	{
		title: "A&W",
		lat: 49.927249932742384,
		lng: -97.1248013973342,
		street: "1458 Main St",
		city: "Winnipeg, MB R2W 3V7",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger10",
  	  	fourSquareId: "4cc31c2c42d1b60c2d0a1513"
	},
	{
		title: "A&W",
		lat: 49.95905582876414,
		lng: -97.08938868631446,
		street: "2585 Main St", 
		city: "Winnipeg, MB R2V 4W3",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger11",
  	  	fourSquareId: "4be23b3321d5a59320411611"
	},
	{
		title: "A&W",
		lat: 49.882188,
		lng: -97.110033,
		street: "373 Marion St",
		city: "Winnipeg, MB R2H 0V4",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger12",
  	  	fourSquareId: "5548e69d498e52538607734f"
	},
	{
		title: "A&W",
		lat: 49.95045265709764,
		lng: -97.14554370923727,
		street: "Garden City Shopping Centre, 2305 McPhillips St",
		city: "Winnipeg, MB R2V 3E1",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger13",
  	  	fourSquareId: "4c7c06c393ef236a8818b70f"
	},
	{
		title: "A&W",
		lat: 49.95300789141377,
		lng: -97.1484119569361,
		street: "2230 McPhillips St",
		city: "Winnipeg, MB R2V 3C8",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger14",
  	  	fourSquareId: "4f9a295ae4b03f9cffdf37cb"
	},
	{
		title: "A&W", 
		lat: 49.87971185061791, 
		lng: -97.1466451332953,
		street: "52 Osborne St", 
		city: "Winnipeg, MB R3L 1Y3", 
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger15",
  	  	fourSquareId: "4bf18a8e189f0f473161b762" 
	},
	{	
		title: "A&W", 
		lat: 49.82200424326072, 
		lng: -97.15330123901367,
		street: "1875 Pembina Hwy", 
		city: "Winnipeg, MB R3T 2G7", 
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger16",
  	  	fourSquareId: "4c1c2090b4e62d7f91a0da93"
	},
	{
		title: "A&W", 
		lat: 49.81748, 
		lng: -97.1511809,
		street: "2012 Pembina Hwy", 
		city: "Winnipeg, MB R3T 2G8",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger17",
  	  	fourSquareId: "56e1f395498ef010bf04a7b9" 
	},
	{
		title: "A&W",
		lat: 49.89250149645651,
		lng: -97.1467595162254,
		street: "393 Portage Ave",
		city: "Winnipeg, MB R3B 3H6",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger18",
  	  	fourSquareId: "4d3cad7a557d6dcb7e483d44"
	},
	{
		title: "A&W",
		lat: 49.8797901613108,
		lng: -97.27935298415457,
		street: "3011 Portage Ave",
		city: "Winnipeg, MB R3K 0W4",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger19",
  	  	fourSquareId: "55561dc5498e3fa10cfa8eaf"
	},
	{
		title: "A&W",
		lat: 49.88015961703119,
		lng: -97.19992876052856,
		street: "1520 Portage Ave",
		city: "Winnipeg, MB R3G 0W8",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger20",
  	  	fourSquareId: "4bf676184d5f20a17e4799fe" 
	},
	{
		title: "A&W",
		lat: 49.876228360589984,
		lng: -97.2655636322256,
		street: "2607 Portage Ave",
		city: "Winnipeg, MB R3J 0P6",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger21",
  	  	fourSquareId: "4fff1fcbe4b04497d93bb6ca"
	},
	{
		title: "A&W",
		lat: 49.89924,
		lng: -97.070761,
		street: "1639 Regent Ave W",
		city: "Winnipeg, MB R2C 4H9",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger22",
  	  	fourSquareId: "4bb75b942f70c9b64f8a8630"
	}, 
	{
		title: "A&W",
		lat: 49.89133078594047,
		lng: -97.1430037969485,
		street: "cityplace, 333 St Mary Ave",
		city: "Winnipeg, MB R3C 4A5",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger23",
  	  	fourSquareId: "4be0742198f2a5938d4dc25a"
	},
	{
		title: "A&W",
		lat: 49.837560733245546,
		lng: -97.1139569707202,
		street: "1078 St. Mary's Rd (by Dakota)",
		city: "Winnipeg, MB R2M 3T2",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger24",
  	  	fourSquareId: "4ba51521f964a52086da38e3"
	},
	{
		title: "A&W",
		lat: 49.828467,
		lng: -97.10863436666666,
		street: "1225 St Mary's Rd",
		city: "Winnipeg, MB R2M 5E5",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger25",
  	  	fourSquareId: "4d349dcac75a6ea84a1c21ae"
	},
	{
		title: "A&W",
		lat: 49.89883433960998,
		lng: -97.05989431090963,
		street: "Kildonan Place, 1555 170 Street Northwest",
		city: "Winnipeg, MB R2C 4J2",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger26",
  	  	fourSquareId: "50202208e4b058fc2c4a12fb"
	},
	{
		title: "A&W",
		lat: 49.85538351331265,
		lng: -97.07146296843858,
		street: "107 Vermillion Rd",
		city: "Winnipeg, MB R2J 4A9",
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger27",
  	  	fourSquareId: "4b9d7732f964a520a4ae36e3"
	},
	{
		title: "A&W",
		lat: 49.84580469898671,
		lng: -97.18017257634821,
		street: "867 Waverley St",
		city: "Winnipeg, MB R3T 5P4", 
		url: "http://www.aw.ca/",
		show: true,
		selected: false,
		id: "burger28",
  	  	fourSquareId: "4da1fd4d540ea1cd36a773de"
	},
	{
		title: "Boon Burger",
		lat: 49.89758863358776,
		lng: -97.13609891847196,
		street: "141 Bannatyne Ave #100",
		city: "Winnipeg, MB R3B 0R3",
		url: "http://boonburger.ca/",
		show: true,
		selected: false,
		id: "burger29",
  	  	fourSquareId: "500c8d65e4b0baf2d7ff7e22"
	},
	{
		title: "Boon Burger", 
		lat: 49.881181346052834,
		lng: -97.15946321909135,
		street: "79 Sherbrook St", 
		city: "Winnipeg, MB R3C 2B2",
		url: "http://boonburger.ca/",
		show: true,
		selected: false, 
		id: "burger30",
  	  	fourSquareId: "4c1d0222b4e62d7f0af7db93"
	},
	{
		title: "Burger King",
		lat: 49.88694823425848,
		lng: -97.16745257377625,
		street: "333 Home St",
		city: "Winnipeg, MB R3G 1X5",
		url: "http://burgerking.ca/",
		show: true,
		selected: false, 
		id: "burger31",
  	  	fourSquareId: "4b637eacf964a520477e2ae3"
	},
	{
		title: "Burger King",
		lat: 49.93287842900375,
		lng: -97.12178648710714,
		street: "1640 Main St",
		city: "Winnipeg, MB R2V 1Y4",
		url: "http://burgerking.ca/",
		show: true,
		selected: false,
		id: "burger32",
  	  	fourSquareId: "4b5e1635f964a520eb7c29e3"
	},
	{
		title: "Burger King",
		lat: 49.94288398196904,
		lng: -97.15762880493779,
		street: "1430 McPhillips St",
		city: "Winnipeg, MB R2V 3C5",
		url: "http://burgerking.ca/",
		show: true,
		selected: false,
		id: "burger33",
  	  	fourSquareId: "4b6a4baef964a5201ed12be3"
	},
	{
		title: "Burger King",
		lat: 49.906111,
		lng: -97.172947,
		street: "1033 Notre Dame Ave",
		city: "Winnipeg, MB R3E 0N4",
		url: "http://burgerking.ca/",
		show: true,
		selected: false,
		id: "burger34",
  	  	fourSquareId: "4bde4fc76198c9b6dab313ff"
	},
	{
		title: "Burger King",
		lat: 49.874918,
		lng: -97.141981,
		street: "244 Osborne St",
		city: "Winnipeg, MB R3L 2W2",
		url: "http://burgerking.ca/",
		show: true,
		selected: false,
		id: "burger35",
  	  	fourSquareId: "4bdcdccd462b2d7fbfb4113c"
	},
	{
		title: "Burger King",
		lat: 49.790045,
		lng: -97.158029,
		street: "2829 Pembina Hwy",
		city: "Winnipeg, MB R3T 4Z8",
		url: "http://burgerking.ca/",
		show: true,
		selected: false,
		id: "burger36",
  	  	fourSquareId: "4bafa2d2f964a5204f123ce3"
	},
	{
		title: "Burger King",
		lat: 49.88247871398926,
		lng: -97.31346,
		street: "3659 Portage Ave",
		city: "Winnipeg, MB R3K 2G9",
		url: "http://burgerking.ca/",
		show: true,
		selected: false,
		id: "burger37",
  	  	fourSquareId: "4b9c33bff964a520695436e3"
	},
	{
		title: "Burger King",
		lat: 49.8979,
		lng: -97.06544,
		street: "1571 Regent Ave West",
		city: "Winnipeg, MB R2C 3B3",
		url: "http://burgerking.ca/",
		show: true,
		selected: false,
		id: "burger38",
  	  	fourSquareId: "4b7cb0aaf964a5205ea12fe3"
	},
	{
		title: "Burger King",
		lat: 49.826987004828155,
		lng: -97.11499027653439,
		street: "1496 St Mary's Rd",
		city: "Winnipeg, MB R2M 3V6",
		url: "http://burgerking.ca/",
		show: true,
		selected: false,
		id: "burger39",
  	  	fourSquareId: "4b671729f964a520c4392be3"
	},
	{
		title: "Burger King",
		lat: 49.85353,
		lng: -97.165547,
		street: "1140 Taylor Ave",
		city: "Winnipeg, MB R3M 3Z4",
		url: "http://burgerking.ca/",
		show: true,
		selected: false,
		id: "burger40",
  	  	fourSquareId: "4c4f906e3a6f2d7f65950c76"
	},
	{
		title: "Burger King",
		lat: 49.85549964499847,
		lng: -97.07390785217285,
		street: "71 Vermillion Rd",
		city: "Winnipeg, MB R2J 3W7",
		url: "http://burgerking.ca/",
		show: true,
		selected: false,
		id: "burger41",
  	  	fourSquareId: "4b7c38f5f964a5207f852fe3"
	},
	{
		title: "Fatburger",
		lat: 49.8405152406585,
		lng: -97.21585862283828,
		street: "Seasons of Tuxedo, 640 Sterling Lyon Pkwy #1",
		city: "Winnipeg, MB R3P 1E9",
		url: "http://www.fatburgercanada.com/",
		show: true,
		selected: false,
		id: "burger42",
  	  	fourSquareId: "51fd7691498ea64130479dd5"
	},
	{
	  	title: "McDonald’s",
		lat: 49.89382,
		lng: -97.199583,
	  	street: "1440 Ellice Ave",
	  	city: "Winnipeg, MB R3G 0G4",
	  	url: "http://www.mcdonalds.ca/ca/en.html",
	  	show: true,
		selected: false,
	  	id: "burger43",
  	  	fourSquareId: "4b55a874f964a520b9ea27e3"
	},
	{
		title: "McDonald’s",
		lat: 49.89642137751224,
		lng: -97.19347622848382,
		street: "1001 Empress St",
		city: "Winnipeg, MB R3G 3P8",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger44",
  	  	fourSquareId: "4d14bfff6c8b54818e53d9cc"
	},
	{
		title: "McDonald’s",
		lat: 49.88212928535492,
		lng: -97.12540072429269,
		street: "77 Goulet St",
		city: "Winnipeg, MB R2H 0R5",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger45",
  	  	fourSquareId: "4b6ada91f964a52094e32be3"
	},
	{
		title: "McDonald’s",
		lat: 49.93489,
		lng: -97.095753,
		street: "979 Henderson Hwy",
		city: "Winnipeg, MB R2K 2M2",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger46",
  	  	fourSquareId: "4b6f3fa0f964a520fbe62ce3"
	},
	{
		title: "McDonald’s",
		lat: 49.94594545464039,
		lng: -97.08635330200195,
		street: "1460 Henderson Hwy",
		city: "Winnipeg, MB R2G 1N4",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger47",
		fourSquareId: "4beb6485415e20a11c5be6bb"
	},
	{
		title: "McDonald’s",
		lat: 49.819392900321134,
		lng: -97.1980619430542,
		street: "1725 Kenaston Blvd",
		city: "Winnipeg, MB R3Y 1V5",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger48",
  	  	fourSquareId: "4b9a5de4f964a52042af35e3"
	},
	{
		title: "McDonald’s",
		lat: 49.82360072687639,
		lng: -97.19968091826755,
		street: "Winnipeg Southwest SmartCentre, 1665 Kenaston Blvd",
		city: "Winnipeg, MB R3P 2M4",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger49",
  	  	fourSquareId: "4dd67a087d8b322663d7678b"
	},
	{
		title: "McDonald’s",
		lat: 49.953178,
		lng: -97.144589,
		street: "847 Leila Ave",
		city: "Winnipeg, MB R2J 3J7",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger50",
  	  	fourSquareId: ""
	},
	{
		title: "McDonald’s",
		lat: 49.95308856,
		lng: -97.14444791666666,
		street: "1887 Main St",
		city: "Winnipeg, MB R2V 2A7",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger51",
  	  	fourSquareId: "4b73573ff964a52095a92de3"
	},
	{
		title: "McDonald’s",
		lat: 49.91924,
		lng: -97.130145,
		street: "1186 Main St",
		city: "Winnipeg, MB R2W 3S7",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger52",
  	  	fourSquareId: "4ba373e7f964a520473e38e3"
	},
	{
		title: "McDonald’s",
		lat: 49.938308899701106,
		lng: -97.16039299964905,
		street: "1301 McPhillips St",
		city: "Winnipeg, MB R2X 2L9",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger53",
  	  	fourSquareId: "4b54e7eaf964a5207ed227e3"
	},
	{
		title: "McDonald’s",
		lat: 49.95702539275292,
		lng: -97.1492755906091,
		street: "2370 McPhillips St",
		city: "Winnipeg, MB R2V 3J6",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger54",
  	  	fourSquareId: "4c017ec5b45676b0994ee180"
	},
	{
		title: "McDonald’s",
		lat: 49.90218,
		lng: -97.09238,
		street: "680 Nairn Ave",
		city: "Winnipeg, MB R2L 0X7",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger55",
  	  	fourSquareId: "4b589904f964a520696028e3"
	},
	{
		title: "McDonald’s",
		lat: 49.906353,
		lng: -97.173699,
		street: "1049 Notre Dame Ave",
		city: "Winnipeg, MB R3E 0N4",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger56",
  	  	fourSquareId: "4b7c72cdf964a5200b942fe3"
	},
	{
		title: "McDonald’s",
		lat: 49.78120517278586,
		lng: -97.1574854850769,
		street: "3045 Pembina Hwy",
		city: "Winnipeg, MB R3T 5H5",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger57",
  	  	fourSquareId: "4b7948abf964a5202cf22ee3"
	},
	{
		title: "McDonald’s",
		lat: 49.816701,
		lng: -97.152383,
		street: "2027 Pembina Hwy",
		city: "Winnipeg, MB R3T 5W7",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger58",
  	  	fourSquareId: "4bccfe1f511f95216818b4c7"
	},
	{
		title: "McDonald’s",
		lat: 49.863380934159466,
		lng: -97.14791286917179,
		street: "630 Pembina Hwy",
		city: "Winnipeg, MB R3M 3J7",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger59",
  	  	fourSquareId: "4b67d47bf964a520c65e2be3"
	},
	{
		title: "McDonald’s",
		lat: 49.882279813397645,
		lng: -97.31079860768581,
		street: "3605 Portage Ave",
		city: "Winnipeg, MB R3K 0X3",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger60",
  	  	fourSquareId: "4b57c5cff964a520564028e3"
	},
	{
		title: "McDonald’s",
		lat: 49.883274,
		lng: -97.30003664038016,
		street: "3401 Portage Ave",
		city: "Winnipeg, MB R3K 0W9",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger61",
  	  	fourSquareId: "4b6a0c80f964a52037c42be3"
	},
	{
		title: "McDonald’s",
		lat: 49.87553, 
		lng: -97.25548,
		street: "2475 Portage Ave",
		city: "Winnipeg, MB R3J 0N6",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger62",
  	  	fourSquareId: "4b5a8f4af964a52052cb28e3"
	},
	{
		title: "McDonald’s",
		lat: 49.8834, 
		lng: -97.18599,
		street: "1251 Portage Ave", 
		city: "Winnipeg, MB R3G 0T7",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger63",
  	  	fourSquareId: "4b69a010f964a52026aa2be3"
	},
	{
		title: "McDonald’s",
		lat: 49.8881287308193, 
		lng: -97.15938319019196,
		street: "664 Portage Ave", 
		city: "Winnipeg, MB R3G 0M4",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger64",
  	  	fourSquareId: "4b59c3d8f964a520da9628e3"
	},
	{
		title: "McDonald’s",
		lat: 49.942624,
		lng: -97.19569,
		street: "994 Keewatin St",
		city: "Winnipeg, MB R2R 2V1",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger65",
  	  	fourSquareId: "4b8b1360f964a520ad9132e3"
	},
	{
		title: "McDonald’s", 
		lat: 49.913906622796596, 
		lng: -97.20595300197601,
		street: "1525 King Edward St", 
		city: "Winnipeg, MB R3H 0R8", 
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false, 
		id: "burger66",
  	  	fourSquareId: "4bb3917014cfd13a6e3a16ab"
	},
	{
		title: "McDonald’s", 
		lat: 49.88633301195446, 
		lng: -97.26263880729675,
		street: "2359 Ness Ave #2", 
		city: "Winnipeg, MB R3J 1A5", 
		url: "http://www.mcdonalds.ca/ca/en.html", 
		show: true,
		selected: false,
		id: "burger67",
  	  	fourSquareId: "4b931434f964a5207c3334e3"
	},
	{
		title: "McDonald’s",
		lat: 49.871011056197844, 
		lng: -97.139671,
		street: "375 Osborne St", 
		city: "Winnipeg, MB R3L 2A2", 
		url: "http://www.mcdonalds.ca/ca/en.html", 
		show: true,
		selected: false,
		id: "burger68",
  	  	fourSquareId: "4b941718f964a5206d6734e3"
	},
	{
		title: "McDonald’s", 
		lat: 49.85875199912168, 
		lng: -97.26519753097116,
		street: "3920 Grant Ave", 
		city: "Winnipeg, MB R3R 3C5", 
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger69",
  	  	fourSquareId: "4bd0bdb941b9ef3bebb5fae5"
	},
	{
		title: "McDonald’s", 
		lat: 49.928521363010084, 
		lng: -97.06783297940656,
		street: "833 McLeod Ave", 
		city: "Winnipeg, MB R2G 0Y4", 
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false, 
		id: "burger70",
  	  	fourSquareId: "4b8580e9f964a5201c6231e3"
	},
	{
		title: "McDonald’s", 
		lat: 49.8569, 
		lng: -97.168955,
		street: "425 Nathaniel St", 
		city: "Winnipeg, MB R3M 3X1", 
		url: "http://www.mcdonalds.ca/ca/en.html", 
		show: true,
		selected: false,
		id: "burger71",
  	  	fourSquareId: "4b4cd2a8f964a5204bc026e3"
	},
	{
		title: "McDonald’s",
		lat: 49.903110563439036,
		lng: -97.06685900688171,
		street: "15 Reenders Dr", 
		city: "Winnipeg, MB R2C 5K5", 
		url: "http://www.mcdonalds.ca/ca/en.html", 
		show: true,
		selected: false,
		id: "burger72",
  	  	fourSquareId: "4b6332aef964a520fa692ae3" 
	},
	{
		title: "McDonald’s", 
		lat: 49.85525062988315, 
		lng: -97.07528114318848,
		street: "65 Vermillion Rd.", 
		city: "Winnipeg, MB R2J 3W7", 
		url: "http://www.mcdonalds.ca/ca/en.html", 
		show: true,
		selected: false,
		id: "burger73",
  	  	fourSquareId: "4be6db53cf200f4773ec143c"
	},
	{
		title: "McDonald’s", 
		lat: 49.890916014129324, 
		lng: -97.14296080152505,
		street: "Cityplace, 333 St Mary Ave #102", 
		city: "Winnipeg, MB R3C 4A5", 
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger74",
  	  	fourSquareId: "4ba79ad5f964a5209ca139e3"
	},
	{
		title: "McDonald’s",
		lat: 49.826613, 
		lng: -97.113943,
		street: "St. Vital Centre, 1501 St Mary's Rd", 
		city: "Winnipeg, MB R2M 5L5", 
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger75",
  	  	fourSquareId: "4b74cae3f964a52053f22de3"
	},
	{
		title: "McDonald’s",
		lat: 49.89568492702984,
		lng: -97.04691410064697,
		street: "1475 Regent Ave W",
		city: "Winnipeg, MB R2C 3B2",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger76",
  	  	fourSquareId: "4c51eef57f6e20a19655e7ea"
	},
	{
		title: "McDonald’s",
		lat: 49.89568492702984,
		lng: -97.04691410064697,
		street: "1425 Regent Ave W",
		city: "Winnipeg, MB R2C 3B2", 
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger77",
  	  	fourSquareId: "4c51eef57f6e20a19655e7ea"
	},
	{
		title: "McDonald’s",
		lat: 49.85919015,
		lng: -97.10748531666667,
		street: "144 St Anne's Rd",
		city: "Winnipeg, MB R2M 2Z4",
		url: "http://www.mcdonalds.ca/ca/en.html",
		show: true,
		selected: false,
		id: "burger78",
  	  	fourSquareId: "4ce0995f69136dcbdfbfe4e6"
	},
	{
		title: "Nuburger",
		lat: 49.82196203009901,
		lng: -97.20343847035106,
		street: "1650 Kenaston Blvd",
		city: "Winnipeg, MB R3P 2M6",
		url: "http://www.ilovenuburger.com/",
		show: true,
		selected: false,
		id: "burger79",
  	  	fourSquareId: "5658d425498ef7fd882b04e0"
	},
	{
		title: "Nuburger",
		lat: 49.87751857319581,
		lng: -97.14540481567383,
		street: "472 Stradbrook Ave",
		city: "Winnipeg, MB R3L 0J9",
		url: "http://www.ilovenuburger.com/",
		show: true,
		selected: false,
		id: "burger80",
  	  	fourSquareId: "4e06788a45ddb2875c44e8c6"
	},
	{
		title: "Wendy’s",
		lat: 49.855289620048545,
		lng: -97.0659430652163,
		street: "1040 Beaverhill Blvd",
		city: "Winnipeg, MB R2J 4B1",
		url: "https://www.wendys.com/en-ca",
		show: true,
		selected: false,
		id: "burger81",
  	  	fourSquareId: "4b982cf8f964a520903135e3"
	},
	{
		title: "Wendy’s",
		lat: 49.825608668663776,
		lng: -97.20381259918213,
		street: "1609 Kenaston Blvd",
		city: "Winnipeg, MB R3P 2M4",
		url: "https://www.wendys.com/en-ca",
		show: true,
		selected: false,
		id: "burger82",
  	  	fourSquareId: "4b7df149f964a52063db2fe3"
	},
	{
		title: "Wendy’s",
		lat: 49.90895,
		lng: -97.205875,
		street: "1039 King Edward St",
		city: "Winnipeg, MB R3H 0R1",
		url: "https://www.wendys.com/en-ca",
		show: true,
		selected: false,
		id: "burger83",
  	  	fourSquareId: "4b434b42f964a52008de25e3"
	},
	{
		title: "Wendy’s",
		lat: 49.94219,
		lng: -97.158048,
		street: "1420 McPhillips St",
		city: "Winnipeg, MB R2V 3C5",
		url: "https://www.wendys.com/en-ca",
		show: true,
		selected: false,
		id: "burger84",
  	  	fourSquareId: "4b899e8af964a520c54632e3"
	},
	{
		title: "Wendy’s",
		lat: 49.880817,
		lng: -97.283652,
		street: "3095 Portage Ave",
		city: "Winnipeg, MB R3K 0W4",
		url: "https://www.wendys.com/en-ca",
		show: true,
		selected: false,
		id: "burger85",
  	  	fourSquareId: "575856ea498ed19546160772"
	},
	{
		title: "Wendy’s",
		lat: 49.88184649089088,
		lng: -97.20214158296585,
		street: "650 St James St",
		city: "Winnipeg, MB R3G 3J5",
		url: "https://www.wendys.com/en-ca",
		show: true,
		selected: false,
		id: "burger86",
  	  	fourSquareId: "4b8a8de5f964a5200a7232e3"
	},
	{
		title: "Wendy’s",
		lat: 49.82793526315404,
		lng: -97.11533423573199,
		street: "1230 St Mary's Rd",
		city: "Winnipeg, MB R2M 3V6",
		url: "https://www.wendys.com/en-ca",
		show: true,
		selected: false,
		id: "burger87",
  	  	fourSquareId: "50df7855e4b053b5f049b4ca"
	}
];

//Main function of the website.

var ViewModel = function() {
	
	var client_id = "543FJUN43UC44OHCLW2RCGQZOIRBZCHF3JET5UJZSIM5CYH0";
	var client_secret = "MZXDLWK1PA4H2UIVJLAP4YGIX1I5VLWKJNWBYMKOY0J04IGL";
	var self = this; // useful for knockout for subfunctions or closures.
	var defaultIcon = 'img/Hamburger.png';
	self.mapList = [];

	//setting the mapList
	locations.forEach(function(marker) {
		self.mapList.push(new google.maps.Marker({
				position: {lat: marker.lat, lng: marker.lng},
				street: marker.street,
				city: marker.city,
				url: marker.url,
				fourSquareId: marker.fourSquareId,
				map: map,
				name: marker.title,
				icon: defaultIcon,
				show: ko.observable(marker.show),
				selected: ko.observable(marker.selected),
				animation: google.maps.Animation.DROP
			})
		)}
	);
	self.mapListLength = self.mapList.length;
	self.burgermap = self.mapList[0];
	//Makes the icon jump and down
	self.toggleBounce = function(marker) {
		marker.setAnimation(google.maps.Animation.BOUNCE);
    	setTimeout(function() { 
    		marker.setAnimation(null); 
    	}, 750);
	}
	//Letting all the product to be shown
	self.show = function(showburger) {
		for (var i = 0; i < self.mapListLength; i++) {
			self.mapList[i].show(showburger);
			self.mapList[i].setVisible(showburger);
		}
	};
	//set all mapList items to unselected
	self.unselect = function() {
		for (var i = 0; i < self.mapListLength; i++) {
			self.mapList[i].selected(false);
		}
	}
	//getting the application to run.
	self.foursquare = function(burgerMarker){
			$.ajax({
	            url: "https://api.foursquare.com/v2/venues/" + burgerMarker.fourSquareId + '?client_id=' + client_id + '&client_secret=' + client_secret + '&v=20151110',
	            dataType: "json",
	            success: function (data) {
	                var result = data.response.venue;
	                burgerMarker.rating = result.hasOwnProperty('rating') ? result.rating : "";
	            },
	            error: function (e) {
	            	self.errorDisplay("No Data Available");
	            }
        });
	};
	var rating = function() {
        	if (self.burgermap.rating === "" || self.burgermap.rating === undefined) {
        		return "No rating";
        	} else {
        		return self.burgermap.rating;
        	}
    }
	for (var i = 0; i < self.mapListLength; i++) {
		(function(burgerMarker){
			self.foursquare(burgerMarker);
			burgerMarker.addListener('click', function(){
				self.setSelected(burgerMarker);
			});
		})(self.mapList[i])
	}
	self.filterText = ko.observable("");
	//Checking the marker that is selected, when you click on the marker.
	self.info = function() {
		if ((self.burgermap.show() === false) && (self.burgermap.selected() === true)) {
			infowindow.close();
		} else {
			infowindow.open(map, self.burgermap);
		}
	}	
	//filtering out all the ones you don't want.
	self.filter = function() {
		var currentFilter = self.filterText();
		if (currentFilter.length === 0) {
			self.show(true);
		} else {
			for (var i = 0; i < self.mapListLength; i++) {
				if (currentFilter.slice(0, currentFilter.length).toLowerCase() === self.mapList[i].name.slice(0, currentFilter.length).toLowerCase()) {
					self.mapList[i].show(true);
					self.mapList[i].setVisible(true);
				} else {
					self.mapList[i].show(false);
					self.mapList[i].setVisible(false);
				}
			}
		}
		self.info();
	};
	//shows the user of infowindow
	self.setSelected = function(location) {
        self.unselect();
        location.selected(true);
		self.burgermap = location;
        var burgerwindow = 
        "<h4 id='infowind'>" + self.burgermap.name + "</h4>" 
        + "<div id='infowind'> FourSquare Rating " + rating() + '</div>'
        + "<div id='infowind'>" + self.burgermap.street + '</div>' 
        + "<div id='infowind'>" + self.burgermap.city + '</div>' 
        + "<div id='infowind'><a href='" + self.burgermap.url + "'>" 
        + self.burgermap.url + '</div>'
		infowindow.setContent(burgerwindow);
        infowindow.open(map, location);
        self.toggleBounce(location);
	};
}