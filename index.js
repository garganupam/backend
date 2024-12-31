require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001  //anyone u can take

app.get('/', (req, res) => {   // '/' para agr koi req aati hai toh Response main "Hello world send kar denge"
  res.send('Hello World!')
})
const apidata={
  "date": "2024-12-30",
  "usd": {
    "1inch": 2.48550888,
    "aave": 0.0029288292,
    "ada": 1.18959599,
    "aed": 3.6725,
    "afn": 70.38933221,
    "agix": 1.72316215,
    "akt": 0.34022701,
    "algo": 2.97005384,
    "all": 93.54851831,
    "amd": 396.47250606,
    "amp": 128.39573853,
    "ang": 1.79875659,
    "aoa": 922.02925383,
    "ape": 0.80154447,
    "apt": 0.10939339,
    "ar": 0.060052274,
    "arb": 1.30930221,
    "ars": 1029.96447909,
    "atom": 0.15380288,
    "ats": 13.19311977,
    "aud": 1.60476318,
    "avax": 0.027151312,
    "awg": 1.79,
    "axs": 0.15459823,
    "azm": 8499.923022,
    "azn": 1.6999846,
    "bake": 3.7841377,
    "bam": 1.87521344,
    "bat": 4.10739318,
    "bbd": 2,
    "bch": 0.0022382561,
    "bdt": 119.46396413,
    "bef": 38.67714602,
    "bgn": 1.87521344,
    "bhd": 0.376,
    "bif": 2955.82957616,
    "bmd": 1,
    "bnb": 0.0014279697,
    "bnd": 1.35806207,
    "bob": 6.9044311,
    "brl": 6.19807759,
    "bsd": 1,
    "bsv": 0.018962619,
    "bsw": 12.37261192,
    "btc": 0.0000106648,
    "btcb": 1.77740716,
    "btg": 0.10223935,
    "btn": 85.38583672,
    "btt": 919143.46722759,
    "busd": 0.99703658,
    "bwp": 13.82258703,
    "byn": 3.27002987,
    "byr": 32700.29870858,
    "bzd": 2.01233178,
    "cad": 1.43993978,
    "cake": 0.38757358,
    "cdf": 2844.99170051,
    "celo": 1.48466837,
    "cfx": 6.16532167,
    "chf": 0.90150043,
    "chz": 11.54265738,
    "clp": 993.34704796,
    "cnh": 7.30201035,
    "cny": 7.29807919,
    "comp": 0.012591889,
    "cop": 4406.96097229,
    "crc": 505.70306869,
    "cro": 6.8641029,
    "crv": 1.01162176,
    "cspr": 62.6140222,
    "cuc": 1,
    "cup": 23.97970179,
    "cve": 105.72482558,
    "cvx": 0.19015741,
    "cyp": 0.56114983,
    "czk": 24.15554977,
    "dai": 0.99991792,
    "dash": 0.024277186,
    "dcr": 0.059739716,
    "dem": 1.87521344,
    "dfi": 48.89340397,
    "djf": 177.90508904,
    "dkk": 7.15137673,
    "doge": 3.11820133,
    "dop": 60.78472006,
    "dot": 0.14170841,
    "dydx": 0.64495848,
    "dzd": 135.56462437,
    "eek": 15.00170749,
    "egld": 0.028475278,
    "egp": 50.8495412,
    "enj": 4.46858585,
    "eos": 1.25141678,
    "ern": 15,
    "esp": 159.52780293,
    "etb": 126.8623691,
    "etc": 0.038204359,
    "eth": 0.0002931055,
    "eur": 0.95878141,
    "fei": 1.02665817,
    "fil": 0.19441003,
    "fim": 5.70065537,
    "fjd": 2.3330117,
    "fkp": 0.79471668,
    "flow": 1.36559631,
    "flr": 39.26933111,
    "frax": 1.00495159,
    "frf": 6.28919374,
    "ftm": 1.23715183,
    "ftt": 0.27616362,
    "fxs": 0.25586592,
    "gala": 27.8906259,
    "gbp": 0.79471668,
    "gel": 2.8044029,
    "ggp": 0.79471668,
    "ghc": 146929.57107064,
    "ghs": 14.69295711,
    "gip": 0.79471668,
    "gmd": 72.25144121,
    "gmx": 0.034972971,
    "gnf": 8644.72278493,
    "gno": 0.0035829416,
    "grd": 326.70476391,
    "grt": 4.67321993,
    "gt": 0.061620158,
    "gtq": 7.70016504,
    "gusd": 1.00013281,
    "gyd": 208.58102746,
    "hbar": 3.52215598,
    "hkd": 7.76386488,
    "hnl": 25.39333576,
    "hnt": 0.14936476,
    "hot": 408.02045287,
    "hrk": 7.2239385,
    "ht": 0.83944987,
    "htg": 130.67272805,
    "huf": 393.79969205,
    "icp": 0.095495387,
    "idr": 16232.09550593,
    "iep": 0.75510172,
    "ils": 3.6817304,
    "imp": 0.79471668,
    "imx": 0.71239823,
    "inj": 0.048012682,
    "inr": 85.38583672,
    "iqd": 1309.36019458,
    "irr": 42087.62219537,
    "isk": 138.54741518,
    "itl": 1856.45967196,
    "jep": 0.79471668,
    "jmd": 155.82457061,
    "jod": 0.709,
    "jpy": 157.77786871,
    "kas": 8.44201453,
    "kava": 2.09414355,
    "kcs": 0.08841527,
    "kda": 1.00387156,
    "kes": 129.32883709,
    "kgs": 86.80043935,
    "khr": 4013.39946366,
    "klay": 4.91515342,
    "kmf": 471.68953079,
    "knc": 1.79185531,
    "kpw": 900.01149614,
    "krw": 1470.24097817,
    "ksm": 0.028004273,
    "kwd": 0.30815904,
    "kyd": 0.82662888,
    "kzt": 523.64722551,
    "lak": 21821.74258042,
    "lbp": 89752.14911858,
    "ldo": 0.53964585,
    "leo": 0.11088304,
    "link": 0.046283294,
    "lkr": 292.92210718,
    "lrc": 4.90646852,
    "lrd": 181.76895606,
    "lsl": 18.66563291,
    "ltc": 0.0099416181,
    "ltl": 3.31048044,
    "luf": 38.67714602,
    "luna": 2.39821911,
    "lunc": 8851.50947785,
    "lvl": 0.67383157,
    "lyd": 4.90061641,
    "mad": 10.07997488,
    "mana": 2.0091451,
    "matic": 2.10597082,
    "mbx": 2.86075902,
    "mdl": 18.41524371,
    "mga": 4704.51708147,
    "mgf": 23522.58540736,
    "mina": 1.64657609,
    "mkd": 59.01878927,
    "mkr": 0.00064918419,
    "mmk": 2099.03191413,
    "mnt": 3435.77799618,
    "mop": 7.99678083,
    "mro": 397.26461722,
    "mru": 39.72646172,
    "mtl": 0.41160486,
    "mur": 46.94694744,
    "mvr": 15.43461687,
    "mwk": 1732.59680737,
    "mxn": 20.35412121,
    "mxv": 2.4414108,
    "myr": 4.47221484,
    "mzm": 63908.24336897,
    "mzn": 63.90824337,
    "nad": 18.66563291,
    "near": 0.19051648,
    "neo": 0.069980363,
    "nexo": 0.74116672,
    "nft": 1864911.26519692,
    "ngn": 1548.58130272,
    "nio": 36.78380097,
    "nlg": 2.11287617,
    "nok": 11.34878456,
    "npr": 136.68137813,
    "nzd": 1.77135858,
    "okb": 0.019597748,
    "omr": 0.38501191,
    "one": 34.29977926,
    "op": 0.53342262,
    "ordi": 0.036894367,
    "pab": 1,
    "paxg": 0.00037717995,
    "pen": 3.74225357,
    "pepe": 55022.57241114,
    "pgk": 4.04810095,
    "php": 57.9122652,
    "pkr": 278.2634146,
    "pln": 4.09430304,
    "pte": 192.21841373,
    "pyg": 7782.99350502,
    "qar": 3.64,
    "qnt": 0.0085700686,
    "qtum": 0.31383188,
    "rol": 47714.74410522,
    "ron": 4.77147441,
    "rpl": 0.082421227,
    "rsd": 112.20876704,
    "rub": 105.4644455,
    "rune": 0.21391748,
    "rvn": 47.360853,
    "rwf": 1390.15036033,
    "sand": 1.77920109,
    "sar": 3.75,
    "sbd": 8.39567483,
    "scr": 13.98393918,
    "sdd": 60146.20078223,
    "sdg": 601.46200782,
    "sek": 10.99686769,
    "sgd": 1.35806207,
    "shib": 46031.77535593,
    "shp": 0.79471668,
    "sit": 229.76237601,
    "skk": 28.88424862,
    "sle": 22.74957714,
    "sll": 22749.57713672,
    "snx": 0.47781344,
    "sol": 0.0051737942,
    "sos": 569.95168986,
    "spl": 0.16666667,
    "srd": 35.51247727,
    "srg": 35512.47727363,
    "std": 23495.03643956,
    "stn": 23.49503644,
    "stx": 0.6317244,
    "sui": 0.23955012,
    "svc": 8.75,
    "syp": 13002.06532135,
    "szl": 18.66563291,
    "thb": 33.99011996,
    "theta": 0.42274487,
    "tjs": 10.92574725,
    "tmm": 17550.07548273,
    "tmt": 3.5100151,
    "tnd": 3.17919945,
    "ton": 0.17566204,
    "top": 2.40376105,
    "trl": 35272182.8544096,
    "trx": 3.86133262,
    "try": 35.27218285,
    "ttd": 6.79133451,
    "tusd": 1.00077259,
    "tvd": 1.60476318,
    "twd": 32.77814841,
    "twt": 0.84702102,
    "tzs": 2420.23756458,
    "uah": 41.67548538,
    "ugx": 3665.22998485,
    "uni": 0.073942703,
    "usd": 1,
    "usdc": 0.99970453,
    "usdd": 1.00332209,
    "usdp": 1.00037705,
    "usdt": 1.00184124,
    "uyu": 43.86644426,
    "uzs": 12880.08673027,
    "val": 1856.45967196,
    "veb": 5186697145.35688,
    "ved": 51.86774275,
    "vef": 5186774.27496435,
    "ves": 51.86774275,
    "vet": 21.57541587,
    "vnd": 25489.91063947,
    "vuv": 121.06944167,
    "waves": 0.60898999,
    "wemix": 1.24901507,
    "woo": 4.5992346,
    "wst": 2.80535383,
    "xaf": 628.91937439,
    "xag": 0.033971153,
    "xau": 0.0003808611,
    "xaut": 0.00038063198,
    "xbt": 0.0000106648,
    "xcd": 2.70587211,
    "xch": 0.045980724,
    "xdc": 13.84136233,
    "xdr": 0.76667755,
    "xec": 28496.75319639,
    "xem": 39.63548579,
    "xlm": 2.90147304,
    "xmr": 0.0051002637,
    "xof": 628.91937439,
    "xpd": 0.0010890684,
    "xpf": 114.41305554,
    "xpt": 0.0010847464,
    "xrp": 0.46935172,
    "xtz": 0.72712881,
    "yer": 249.97522616,
    "zar": 18.66563291,
    "zec": 0.016079101,
    "zil": 46.67537233,
    "zmk": 27737.00997034,
    "zmw": 27.73700997,
    "zwd": 361.9,
    "zwg": 25.47487481,
    "zwl": 63654.68616807
  }
}

app.get('/twitter',(req,res)=>{
    res.send('Anupam garg')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please Login to this website</h1>')// whenever you save a file,the concept called hot reloading comes,which restarts the server again
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Anupam garg</h2>')
})
app.get('/data',(req,res)=>{
  res.json(apidata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})