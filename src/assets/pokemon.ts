import Pokemon from '@/models/Pokemon';
import types from './types';

const pokemon: Pokemon[] = [
  {
    name: 'Sprigatito',
    regionalDexNumber: 1,
    nationalDexNumber: 906,
    types: [types.grass],
    stats: {
      hp: 40,
      attack: 61,
      defense: 54,
      specialAttack: 45,
      specialDefense: 45,
      speed: 65
    }
  },
  {
    name: 'Floragato',
    regionalDexNumber: 2,
    nationalDexNumber: 907,
    types: [types.grass],
    stats: {
      hp: 61,
      attack: 80,
      defense: 63,
      specialAttack: 60,
      specialDefense: 63,
      speed: 83
    }
  },
  {
    name: 'Meowscarada',
    regionalDexNumber: 3,
    nationalDexNumber: 908,
    types: [types.grass, types.dark],
    stats: {
      hp: 76,
      attack: 110,
      defense: 70,
      specialAttack: 81,
      specialDefense: 70,
      speed: 123
    }
  },
  {
    name: 'Fuecoco',
    regionalDexNumber: 4,
    nationalDexNumber: 909,
    types: [types.fire],
    stats: {
      hp: 67,
      attack: 45,
      defense: 59,
      specialAttack: 63,
      specialDefense: 43,
      speed: 36
    }
  },
  {
    name: 'Crocalor',
    regionalDexNumber: 5,
    nationalDexNumber: 910,
    types: [types.fire],
    stats: {
      hp: 81,
      attack: 55,
      defense: 78,
      specialAttack: 90,
      specialDefense: 58,
      speed: 49
    }
  },
  {
    name: 'Skeledirge',
    regionalDexNumber: 6,
    nationalDexNumber: 911,
    types: [types.fire, types.ghost],
    stats: {
      hp: 104,
      attack: 75,
      defense: 100,
      specialAttack: 110,
      specialDefense: 76,
      speed: 66
    }
  },
  {
    name: 'Quaxly',
    regionalDexNumber: 7,
    nationalDexNumber: 912,
    types: [types.water],
    stats: {
      hp: 55,
      attack: 65,
      defense: 45,
      specialAttack: 50,
      specialDefense: 45,
      speed: 50
    }
  },
  {
    name: 'Quaxwell',
    regionalDexNumber: 8,
    nationalDexNumber: 913,
    types: [types.water],
    stats: {
      hp: 70,
      attack: 85,
      defense: 65,
      specialAttack: 65,
      specialDefense: 60,
      speed: 65
    }
  },
  {
    name: 'Quaquaval',
    regionalDexNumber: 9,
    nationalDexNumber: 914,
    types: [types.water, types.fighting],
    stats: {
      hp: 85,
      attack: 120,
      defense: 80,
      specialAttack: 85,
      specialDefense: 75,
      speed: 85
    }
  },
  {
    name: 'Lechonk',
    regionalDexNumber: 10,
    nationalDexNumber: 915,
    types: [types.normal],
    stats: {
      hp: 54,
      attack: 45,
      defense: 40,
      specialAttack: 35,
      specialDefense: 45,
      speed: 35
    }
  },
  {
    name: 'Oinkologne-M',
    regionalDexNumber: 11,
    nationalDexNumber: 916,
    types: [types.normal],
    stats: {
      hp: 110,
      attack: 100,
      defense: 75,
      specialAttack: 59,
      specialDefense: 80,
      speed: 65
    },
    alternateForms: [
      {
        id: '916-2',
        name: 'Oinkologne-F',
        stats: {
          hp: 115,
          attack: 90,
          defense: 70,
          specialAttack: 59,
          specialDefense: 90,
          speed: 65
        }
      }
    ]
  },
  {
    name: 'Dundunsparce',
    regionalDexNumber: 189,
    nationalDexNumber: 917,
    types: [types.normal],
    stats: {
      hp: 125,
      attack: 100,
      defense: 80,
      specialAttack: 85,
      specialDefense: 75,
      speed: 55
    }
  },
  {
    name: 'Tarountula',
    regionalDexNumber: 12,
    nationalDexNumber: 918,
    types: [types.bug],
    stats: {
      hp: 35,
      attack: 41,
      defense: 45,
      specialAttack: 29,
      specialDefense: 40,
      speed: 20
    }
  },
  {
    name: 'Spidops',
    regionalDexNumber: 13,
    nationalDexNumber: 919,
    types: [types.bug],
    stats: {
      hp: 60,
      attack: 79,
      defense: 92,
      specialAttack: 52,
      specialDefense: 86,
      speed: 35
    }
  },
  {
    name: 'Nymble',
    regionalDexNumber: 14,
    nationalDexNumber: 920,
    types: [types.bug],
    stats: {
      hp: 33,
      attack: 46,
      defense: 40,
      specialAttack: 21,
      specialDefense: 25,
      speed: 45
    }
  },
  {
    name: 'Lokix',
    regionalDexNumber: 15,
    nationalDexNumber: 921,
    types: [types.bug, types.dark],
    stats: {
      hp: 71,
      attack: 102,
      defense: 78,
      specialAttack: 52,
      specialDefense: 55,
      speed: 92
    }
  },
  {
    name: 'Rellor',
    regionalDexNumber: 254,
    nationalDexNumber: 922,
    types: [types.bug],
    stats: {
      hp: 41,
      attack: 50,
      defense: 60,
      specialAttack: 31,
      specialDefense: 58,
      speed: 30
    }
  },
  {
    name: 'Rabsca',
    regionalDexNumber: 255,
    nationalDexNumber: 923,
    types: [types.bug, types.psychic],
    stats: {
      hp: 75,
      attack: 50,
      defense: 85,
      specialAttack: 115,
      specialDefense: 100,
      speed: 45
    }
  },
  {
    name: 'Greavard',
    regionalDexNumber: 311,
    nationalDexNumber: 924,
    types: [types.ghost],
    stats: {
      hp: 50,
      attack: 61,
      defense: 60,
      specialAttack: 30,
      specialDefense: 55,
      speed: 34
    }
  },
  {
    name: 'Houndstone',
    regionalDexNumber: 312,
    nationalDexNumber: 925,
    types: [types.ghost],
    stats: {
      hp: 72,
      attack: 101,
      defense: 100,
      specialAttack: 50,
      specialDefense: 97,
      speed: 68
    }
  },
  {
    name: 'Flittle',
    regionalDexNumber: 263,
    nationalDexNumber: 926,
    types: [types.psychic],
    stats: {
      hp: 30,
      attack: 35,
      defense: 30,
      specialAttack: 55,
      specialDefense: 30,
      speed: 75
    }
  },
  {
    name: 'Espartha',
    regionalDexNumber: 264,
    nationalDexNumber: 927,
    types: [types.psychic],
    stats: {
      hp: 95,
      attack: 60,
      defense: 60,
      specialAttack: 101,
      specialDefense: 60,
      speed: 105
    }
  },
  {
    name: 'Farigiraf',
    regionalDexNumber: 193,
    nationalDexNumber: 928,
    types: [types.normal, types.psychic],
    stats: {
      hp: 120,
      attack: 90,
      defense: 70,
      specialAttack: 110,
      specialDefense: 70,
      speed: 60
    }
  },
  {
    name: 'Wiglett',
    regionalDexNumber: 288,
    nationalDexNumber: 929,
    types: [types.water],
    stats: {
      hp: 10,
      attack: 55,
      defense: 25,
      specialAttack: 35,
      specialDefense: 25,
      speed: 95
    }
  },
  {
    name: 'Wugtrio',
    regionalDexNumber: 289,
    nationalDexNumber: 930,
    types: [types.water],
    stats: {
      hp: 35,
      attack: 100,
      defense: 50,
      specialAttack: 50,
      specialDefense: 70,
      speed: 120
    }
  },
  {
    name: 'Dondozo',
    regionalDexNumber: 374,
    nationalDexNumber: 931,
    types: [types.water],
    stats: {
      hp: 150,
      attack: 100,
      defense: 115,
      specialAttack: 65,
      specialDefense: 65,
      speed: 35
    }
  },
  {
    name: 'Veluza',
    regionalDexNumber: 373,
    nationalDexNumber: 932,
    types: [types.water, types.psychic],
    stats: {
      hp: 90,
      attack: 102,
      defense: 73,
      specialAttack: 78,
      specialDefense: 65,
      speed: 70
    }
  },
  {
    name: 'Finizen',
    regionalDexNumber: 291,
    nationalDexNumber: 933,
    types: [types.water],
    stats: {
      hp: 70,
      attack: 45,
      defense: 40,
      specialAttack: 45,
      specialDefense: 40,
      speed: 75
    }
  },
  {
    name: 'Palafin',
    regionalDexNumber: 292,
    nationalDexNumber: 934,
    types: [types.water],
    stats: {
      hp: 100,
      attack: 70,
      defense: 72,
      specialAttack: 53,
      specialDefense: 62,
      speed: 100
    },
    alternateForms: [
      {
        id: '934-2',
        name: 'Palafin-Hero',
        stats: {
          hp: 100,
          attack: 160,
          defense: 97,
          specialAttack: 106,
          specialDefense: 87,
          speed: 100
        }
      }
    ]
  },
  {
    name: 'Smoliv',
    regionalDexNumber: 84,
    nationalDexNumber: 935,
    types: [types.grass, types.normal],
    stats: {
      hp: 41,
      attack: 35,
      defense: 45,
      specialAttack: 58,
      specialDefense: 51,
      speed: 30
    }
  },
  {
    name: 'Dolliv',
    regionalDexNumber: 85,
    nationalDexNumber: 936,
    types: [types.grass, types.normal],
    stats: {
      hp: 52,
      attack: 53,
      defense: 60,
      specialAttack: 78,
      specialDefense: 78,
      speed: 33
    }
  },
  {
    name: 'Arboliva',
    regionalDexNumber: 86,
    nationalDexNumber: 937,
    types: [types.grass, types.normal],
    stats: {
      hp: 78,
      attack: 69,
      defense: 90,
      specialAttack: 125,
      specialDefense: 109,
      speed: 39
    }
  },
  {
    name: 'Capsakid',
    regionalDexNumber: 250,
    nationalDexNumber: 938,
    types: [types.grass],
    stats: {
      hp: 50,
      attack: 62,
      defense: 40,
      specialAttack: 62,
      specialDefense: 40,
      speed: 50
    }
  },
  {
    name: 'Scovillain',
    regionalDexNumber: 251,
    nationalDexNumber: 939,
    types: [types.grass, types.fire],
    stats: {
      hp: 65,
      attack: 108,
      defense: 65,
      specialAttack: 108,
      specialDefense: 65,
      speed: 75
    }
  },
  {
    name: 'Tadbulb',
    regionalDexNumber: 170,
    nationalDexNumber: 940,
    types: [types.electric],
    stats: {
      hp: 61,
      attack: 31,
      defense: 41,
      specialAttack: 59,
      specialDefense: 35,
      speed: 45
    }
  },
  {
    name: 'Bellibolt',
    regionalDexNumber: 171,
    nationalDexNumber: 941,
    types: [types.electric],
    stats: {
      hp: 109,
      attack: 64,
      defense: 91,
      specialAttack: 103,
      specialDefense: 83,
      speed: 45
    }
  },
  {
    name: 'Varoom',
    regionalDexNumber: 293,
    nationalDexNumber: 942,
    types: [types.steel, types.poison],
    stats: {
      hp: 45,
      attack: 70,
      defense: 63,
      specialAttack: 30,
      specialDefense: 45,
      speed: 47
    }
  },
  {
    name: 'Revavroom',
    regionalDexNumber: 294,
    nationalDexNumber: 943,
    types: [types.steel, types.poison],
    stats: {
      hp: 80,
      attack: 119,
      defense: 90,
      specialAttack: 54,
      specialDefense: 67,
      speed: 90
    }
  },
  {
    name: 'Orthworm',
    regionalDexNumber: 296,
    nationalDexNumber: 944,
    types: [types.steel],
    stats: {
      hp: 70,
      attack: 85,
      defense: 145,
      specialAttack: 60,
      specialDefense: 55,
      speed: 65
    }
  },
  {
    name: 'Tandemous',
    regionalDexNumber: 71,
    nationalDexNumber: 945,
    types: [types.normal],
    stats: {
      hp: 50,
      attack: 50,
      defense: 45,
      specialAttack: 40,
      specialDefense: 45,
      speed: 75
    }
  },
  {
    name: 'Maushold',
    regionalDexNumber: 72,
    nationalDexNumber: 946,
    types: [types.normal],
    stats: {
      hp: 74,
      attack: 75,
      defense: 70,
      specialAttack: 65,
      specialDefense: 75,
      speed: 111
    },
    alternateForms: [
      {
        id: '946-2',
        name: 'Maushold-2'
      }
    ]
  },
  {
    name: 'Cetoddle',
    regionalDexNumber: 361,
    nationalDexNumber: 947,
    types: [types.ice],
    stats: {
      hp: 108,
      attack: 68,
      defense: 45,
      specialAttack: 30,
      specialDefense: 40,
      speed: 43
    }
  },
  {
    name: 'Cetitan',
    regionalDexNumber: 362,
    nationalDexNumber: 948,
    types: [types.ice],
    stats: {
      hp: 170,
      attack: 113,
      defense: 65,
      specialAttack: 45,
      specialDefense: 55,
      speed: 73
    }
  },
  {
    name: 'Frigibax',
    regionalDexNumber: 388,
    nationalDexNumber: 949,
    types: [types.dragon, types.ice],
    stats: {
      hp: 65,
      attack: 75,
      defense: 45,
      specialAttack: 35,
      specialDefense: 45,
      speed: 55
    }
  },
  {
    name: 'Arctibax',
    regionalDexNumber: 389,
    nationalDexNumber: 950,
    types: [types.dragon, types.ice],
    stats: {
      hp: 90,
      attack: 95,
      defense: 66,
      specialAttack: 45,
      specialDefense: 65,
      speed: 62
    }
  },
  {
    name: 'Baxcalibur',
    regionalDexNumber: 390,
    nationalDexNumber: 951,
    types: [types.dragon, types.ice],
    stats: {
      hp: 115,
      attack: 145,
      defense: 92,
      specialAttack: 75,
      specialDefense: 86,
      speed: 87
    }
  },
  {
    name: 'Tatsugiri',
    regionalDexNumber: 375,
    nationalDexNumber: 952,
    types: [types.dragon, types.water],
    stats: {
      hp: 68,
      attack: 50,
      defense: 60,
      specialAttack: 120,
      specialDefense: 95,
      speed: 82
    },
    alternateForms: [
      {
        id: '952-2',
        name: 'Tatsugiri-2'
      },
      {
        id: '952-3',
        name: 'Tatsugiri-3'
      }
    ]
  },
  {
    name: 'Cyclizar',
    regionalDexNumber: 295,
    nationalDexNumber: 953,
    types: [types.dragon, types.normal],
    stats: {
      hp: 70,
      attack: 95,
      defense: 65,
      specialAttack: 85,
      specialDefense: 65,
      speed: 121
    }
  },
  {
    name: 'Pawmi',
    regionalDexNumber: 22,
    nationalDexNumber: 954,
    types: [types.electric],
    stats: {
      hp: 45,
      attack: 50,
      defense: 20,
      specialAttack: 40,
      specialDefense: 25,
      speed: 60
    }
  },
  {
    name: 'Pawmo',
    regionalDexNumber: 23,
    nationalDexNumber: 955,
    types: [types.electric, types.fighting],
    stats: {
      hp: 60,
      attack: 75,
      defense: 40,
      specialAttack: 50,
      specialDefense: 40,
      speed: 85
    }
  },
  {
    name: 'Pawmot',
    regionalDexNumber: 24,
    nationalDexNumber: 956,
    types: [types.electric, types.fighting],
    stats: {
      hp: 70,
      attack: 115,
      defense: 70,
      specialAttack: 70,
      specialDefense: 60,
      speed: 105
    }
  },
  {
    name: 'Wattrel',
    regionalDexNumber: 177,
    nationalDexNumber: 957,
    types: [types.electric, types.flying],
    stats: {
      hp: 40,
      attack: 40,
      defense: 35,
      specialAttack: 55,
      specialDefense: 40,
      speed: 70
    }
  },
  {
    name: 'Kilowattrel',
    regionalDexNumber: 178,
    nationalDexNumber: 958,
    types: [types.electric, types.flying],
    stats: {
      hp: 70,
      attack: 70,
      defense: 60,
      specialAttack: 105,
      specialDefense: 60,
      speed: 125
    }
  },
  {
    name: 'Bombirdier',
    regionalDexNumber: 290,
    nationalDexNumber: 959,
    types: [types.flying, types.dark],
    stats: {
      hp: 70,
      attack: 103,
      defense: 85,
      specialAttack: 60,
      specialDefense: 85,
      speed: 82
    }
  },
  {
    name: 'Squawkability',
    regionalDexNumber: 113,
    nationalDexNumber: 960,
    types: [types.normal, types.flying],
    stats: {
      hp: 82,
      attack: 96,
      defense: 51,
      specialAttack: 45,
      specialDefense: 51,
      speed: 92
    },
    alternateForms: [
      {
        id: '960-2',
        name: 'Squawkability-2'
      },
      {
        id: '960-3',
        name: 'Squawkability-3'
      },
      {
        id: '960-4',
        name: 'Squawkability-4'
      }
    ]
  },
  {
    name: 'Flamigo',
    regionalDexNumber: 346,
    nationalDexNumber: 961,
    types: [types.flying, types.fighting],
    stats: {
      hp: 82,
      attack: 115,
      defense: 74,
      specialAttack: 75,
      specialDefense: 64,
      speed: 90
    }
  },
  {
    name: 'Klawf',
    regionalDexNumber: 249,
    nationalDexNumber: 962,
    types: [types.rock],
    stats: {
      hp: 70,
      attack: 100,
      defense: 115,
      specialAttack: 35,
      specialDefense: 55,
      speed: 75
    }
  },
  {
    name: 'Nacli',
    regionalDexNumber: 129,
    nationalDexNumber: 963,
    types: [types.rock],
    stats: {
      hp: 55,
      attack: 55,
      defense: 75,
      specialAttack: 35,
      specialDefense: 35,
      speed: 25
    }
  },
  {
    name: 'Naclstack',
    regionalDexNumber: 130,
    nationalDexNumber: 964,
    types: [types.rock],
    stats: {
      hp: 60,
      attack: 60,
      defense: 100,
      specialAttack: 35,
      specialDefense: 65,
      speed: 35
    }
  },
  {
    name: 'Garganacl',
    regionalDexNumber: 131,
    nationalDexNumber: 965,
    types: [types.rock],
    stats: {
      hp: 100,
      attack: 100,
      defense: 130,
      specialAttack: 45,
      specialDefense: 90,
      speed: 35
    }
  },
  {
    name: 'Glimmet',
    regionalDexNumber: 308,
    nationalDexNumber: 966,
    types: [types.rock, types.poison],
    stats: {
      hp: 48,
      attack: 35,
      defense: 42,
      specialAttack: 105,
      specialDefense: 60,
      speed: 60
    }
  },
  {
    name: 'Glimmora',
    regionalDexNumber: 309,
    nationalDexNumber: 967,
    types: [types.rock, types.poison],
    stats: {
      hp: 83,
      attack: 55,
      defense: 90,
      specialAttack: 130,
      specialDefense: 81,
      speed: 86
    }
  },
  {
    name: 'Shroodle',
    regionalDexNumber: 202,
    nationalDexNumber: 968,
    types: [types.poison, types.normal],
    stats: {
      hp: 40,
      attack: 65,
      defense: 35,
      specialAttack: 40,
      specialDefense: 35,
      speed: 75
    }
  },
  {
    name: 'Grafaiai',
    regionalDexNumber: 203,
    nationalDexNumber: 969,
    types: [types.poison, types.normal],
    stats: {
      hp: 63,
      attack: 95,
      defense: 65,
      specialAttack: 80,
      specialDefense: 72,
      speed: 110
    }
  },
  {
    name: 'Fidough',
    regionalDexNumber: 76,
    nationalDexNumber: 970,
    types: [types.fairy],
    stats: {
      hp: 37,
      attack: 55,
      defense: 70,
      specialAttack: 30,
      specialDefense: 55,
      speed: 65
    }
  },
  {
    name: 'Dachsbun',
    regionalDexNumber: 77,
    nationalDexNumber: 971,
    types: [types.fairy],
    stats: {
      hp: 57,
      attack: 80,
      defense: 115,
      specialAttack: 50,
      specialDefense: 80,
      speed: 95
    }
  },
  {
    name: 'Maschiff',
    regionalDexNumber: 196,
    nationalDexNumber: 972,
    types: [types.dark],
    stats: {
      hp: 60,
      attack: 78,
      defense: 60,
      specialAttack: 40,
      specialDefense: 51,
      speed: 51
    }
  },
  {
    name: 'Mabosstiff',
    regionalDexNumber: 197,
    nationalDexNumber: 973,
    types: [types.dark],
    stats: {
      hp: 80,
      attack: 120,
      defense: 90,
      specialAttack: 60,
      specialDefense: 70,
      speed: 85
    }
  },
  {
    name: 'Bramblin',
    regionalDexNumber: 242,
    nationalDexNumber: 974,
    types: [types.grass, types.ghost],
    stats: {
      hp: 40,
      attack: 65,
      defense: 30,
      specialAttack: 45,
      specialDefense: 35,
      speed: 60
    }
  },
  {
    name: 'Brambleghast',
    regionalDexNumber: 243,
    nationalDexNumber: 975,
    types: [types.grass, types.ghost],
    stats: {
      hp: 55,
      attack: 115,
      defense: 70,
      specialAttack: 80,
      specialDefense: 70,
      speed: 90
    }
  },
  {
    name: 'Gimmighoul-Chest',
    regionalDexNumber: 391,
    nationalDexNumber: 976,
    types: [types.ghost],
    stats: {
      hp: 45,
      attack: 30,
      defense: 70,
      specialAttack: 75,
      specialDefense: 70,
      speed: 10
    },
    alternateForms: [
      {
        id: '976-2',
        name: 'Gimmighoul-Roaming',
        stats: {
          hp: 45,
          attack: 30,
          defense: 25,
          specialAttack: 75,
          specialDefense: 45,
          speed: 80
        }
      }
    ]
  },
  {
    name: 'Gholdengo',
    regionalDexNumber: 392,
    nationalDexNumber: 977,
    types: [types.steel, types.ghost],
    stats: {
      hp: 87,
      attack: 60,
      defense: 95,
      specialAttack: 133,
      specialDefense: 91,
      speed: 84
    }
  },
  {
    name: 'Great Tusk',
    regionalDexNumber: 376,
    nationalDexNumber: 978,
    types: [types.ground, types.fighting],
    scarletExclusive: true,
    stats: {
      hp: 115,
      attack: 131,
      defense: 131,
      specialAttack: 53,
      specialDefense: 53,
      speed: 87
    }
  },
  {
    name: 'Brute Bonnet',
    regionalDexNumber: 378,
    nationalDexNumber: 979,
    types: [types.grass, types.dark],
    scarletExclusive: true,
    stats: {
      hp: 111,
      attack: 127,
      defense: 99,
      specialAttack: 79,
      specialDefense: 99,
      speed: 55
    }
  },
  {
    name: 'Sandy Shocks',
    regionalDexNumber: 381,
    nationalDexNumber: 981,
    types: [types.electric, types.ground],
    scarletExclusive: true,
    stats: {
      hp: 85,
      attack: 81,
      defense: 97,
      specialAttack: 121,
      specialDefense: 85,
      speed: 101
    }
  },
  {
    name: 'Scream Tail',
    regionalDexNumber: 377,
    nationalDexNumber: 982,
    types: [types.fairy, types.psychic],
    scarletExclusive: true,
    stats: {
      hp: 115,
      attack: 65,
      defense: 99,
      specialAttack: 65,
      specialDefense: 115,
      speed: 111
    }
  },
  {
    name: 'Flutter Mane',
    regionalDexNumber: 379,
    nationalDexNumber: 983,
    types: [types.ghost, types.fairy],
    scarletExclusive: true,
    stats: {
      hp: 55,
      attack: 55,
      defense: 55,
      specialAttack: 135,
      specialDefense: 135,
      speed: 135
    }
  },
  {
    name: 'Slither Wing',
    regionalDexNumber: 380,
    nationalDexNumber: 984,
    types: [types.bug, types.fighting],
    scarletExclusive: true,
    stats: {
      hp: 85,
      attack: 135,
      defense: 79,
      specialAttack: 85,
      specialDefense: 105,
      speed: 81
    }
  },
  {
    name: 'Roaring Moon',
    regionalDexNumber: 397,
    nationalDexNumber: 985,
    types: [types.dragon, types.dark],
    scarletExclusive: true,
    stats: {
      hp: 105,
      attack: 139,
      defense: 71,
      specialAttack: 55,
      specialDefense: 101,
      speed: 119
    }
  },
  {
    name: 'Iron Treads',
    regionalDexNumber: 382,
    nationalDexNumber: 986,
    types: [types.ground, types.steel],
    violetExclusive: true,
    stats: {
      hp: 90,
      attack: 112,
      defense: 120,
      specialAttack: 72,
      specialDefense: 70,
      speed: 106
    }
  },
  {
    name: 'Iron Moth',
    regionalDexNumber: 386,
    nationalDexNumber: 988,
    types: [types.fire, types.poison],
    violetExclusive: true,
    stats: {
      hp: 80,
      attack: 70,
      defense: 60,
      specialAttack: 140,
      specialDefense: 110,
      speed: 110
    }
  },
  {
    name: 'Iron Hands',
    regionalDexNumber: 384,
    nationalDexNumber: 989,
    types: [types.fighting, types.electric],
    violetExclusive: true,
    stats: {
      hp: 154,
      attack: 140,
      defense: 108,
      specialAttack: 50,
      specialDefense: 68,
      speed: 50
    }
  },
  {
    name: 'Iron Jugulis',
    regionalDexNumber: 385,
    nationalDexNumber: 990,
    types: [types.dark, types.flying],
    violetExclusive: true,
    stats: {
      hp: 94,
      attack: 80,
      defense: 86,
      specialAttack: 122,
      specialDefense: 80,
      speed: 108
    }
  },
  {
    name: 'Iron Thorns',
    regionalDexNumber: 387,
    nationalDexNumber: 991,
    types: [types.rock, types.electric],
    violetExclusive: true,
    stats: {
      hp: 100,
      attack: 134,
      defense: 110,
      specialAttack: 70,
      specialDefense: 84,
      speed: 72
    }
  },
  {
    name: 'Iron Bundle',
    regionalDexNumber: 383,
    nationalDexNumber: 992,
    types: [types.ice, types.water],
    violetExclusive: true,
    stats: {
      hp: 56,
      attack: 80,
      defense: 114,
      specialAttack: 124,
      specialDefense: 60,
      speed: 136
    }
  },
  {
    name: 'Iron Valiant',
    regionalDexNumber: 398,
    nationalDexNumber: 993,
    types: [types.fairy, types.fighting],
    violetExclusive: true,
    stats: {
      hp: 74,
      attack: 130,
      defense: 90,
      specialAttack: 120,
      specialDefense: 60,
      speed: 116
    }
  },
  {
    name: 'Ting-Lu',
    regionalDexNumber: 395,
    nationalDexNumber: 994,
    types: [types.dark, types.ground],
    stats: {
      hp: 155,
      attack: 110,
      defense: 125,
      specialAttack: 55,
      specialDefense: 80,
      speed: 45
    }
  },
  {
    name: 'Chien-Pao',
    regionalDexNumber: 394,
    nationalDexNumber: 995,
    types: [types.dark, types.ice],
    stats: {
      hp: 80,
      attack: 120,
      defense: 80,
      specialAttack: 90,
      specialDefense: 65,
      speed: 135
    }
  },
  {
    name: 'Wo-Chien',
    regionalDexNumber: 393,
    nationalDexNumber: 996,
    types: [types.dark, types.grass],
    stats: {
      hp: 85,
      attack: 85,
      defense: 100,
      specialAttack: 95,
      specialDefense: 135,
      speed: 70
    }
  },
  {
    name: 'Chi-Yu',
    regionalDexNumber: 396,
    nationalDexNumber: 997,
    types: [types.dark, types.fire],
    stats: {
      hp: 55,
      attack: 80,
      defense: 80,
      specialAttack: 135,
      specialDefense: 120,
      speed: 100
    }
  },
  {
    name: 'Koraidon',
    regionalDexNumber: 399,
    nationalDexNumber: 998,
    types: [types.fighting, types.dragon],
    scarletExclusive: true,
    stats: {
      hp: 100,
      attack: 135,
      defense: 115,
      specialAttack: 85,
      specialDefense: 100,
      speed: 135
    }
  },
  {
    name: 'Miraidon',
    regionalDexNumber: 400,
    nationalDexNumber: 999,
    types: [types.electric, types.dragon],
    violetExclusive: true,
    stats: {
      hp: 100,
      attack: 85,
      defense: 100,
      specialAttack: 135,
      specialDefense: 115,
      speed: 135
    }
  },
  {
    name: 'Tinkatink',
    regionalDexNumber: 279,
    nationalDexNumber: 1000,
    types: [types.fairy, types.steel],
    stats: {
      hp: 50,
      attack: 45,
      defense: 45,
      specialAttack: 35,
      specialDefense: 64,
      speed: 58
    }
  },
  {
    name: 'Tinkatuff',
    regionalDexNumber: 280,
    nationalDexNumber: 1001,
    types: [types.fairy, types.steel],
    stats: {
      hp: 65,
      attack: 55,
      defense: 55,
      specialAttack: 45,
      specialDefense: 82,
      speed: 78
    }
  },
  {
    name: 'Tinkaton',
    regionalDexNumber: 281,
    nationalDexNumber: 1002,
    types: [types.fairy, types.steel],
    stats: {
      hp: 85,
      attack: 75,
      defense: 77,
      specialAttack: 70,
      specialDefense: 105,
      speed: 94
    }
  },
  {
    name: 'Charcadet',
    regionalDexNumber: 165,
    nationalDexNumber: 1003,
    types: [types.fire],
    stats: {
      hp: 40,
      attack: 50,
      defense: 40,
      specialAttack: 50,
      specialDefense: 40,
      speed: 35
    }
  },
  {
    name: 'Armarouge',
    regionalDexNumber: 166,
    nationalDexNumber: 1004,
    types: [types.fire, types.psychic],
    scarletExclusive: true,
    stats: {
      hp: 85,
      attack: 60,
      defense: 100,
      specialAttack: 125,
      specialDefense: 80,
      speed: 75
    }
  },
  {
    name: 'Ceruledge',
    regionalDexNumber: 167,
    nationalDexNumber: 1005,
    types: [types.fire, types.ghost],
    violetExclusive: true,
    stats: {
      hp: 75,
      attack: 125,
      defense: 80,
      specialAttack: 60,
      specialDefense: 100,
      speed: 85
    }
  },
  {
    name: 'Toedscool',
    regionalDexNumber: 244,
    nationalDexNumber: 1006,
    types: [types.ground, types.grass],
    stats: {
      hp: 40,
      attack: 40,
      defense: 35,
      specialAttack: 50,
      specialDefense: 100,
      speed: 70
    }
  },
  {
    name: 'Toedscruel',
    regionalDexNumber: 245,
    nationalDexNumber: 1007,
    types: [types.ground, types.grass],
    stats: {
      hp: 80,
      attack: 70,
      defense: 65,
      specialAttack: 80,
      specialDefense: 120,
      speed: 100
    }
  },
  {
    name: 'Kingambit',
    regionalDexNumber: 369,
    nationalDexNumber: 1008,
    types: [types.dark, types.steel],
    stats: {
      hp: 100,
      attack: 135,
      defense: 120,
      specialAttack: 60,
      specialDefense: 85,
      speed: 50
    }
  },
  {
    name: 'Clodsire',
    regionalDexNumber: 54,
    nationalDexNumber: 1009,
    types: [types.poison, types.ground],
    stats: {
      hp: 130,
      attack: 75,
      defense: 60,
      specialAttack: 45,
      specialDefense: 100,
      speed: 20
    }
  },
  {
    name: 'Anihilape',
    regionalDexNumber: 160,
    nationalDexNumber: 1010,
    types: [types.fighting, types.ghost],
    stats: {
      hp: 110,
      attack: 115,
      defense: 80,
      specialAttack: 50,
      specialDefense: 90,
      speed: 90
    }
  },
  {
    name: 'Hoppip',
    regionalDexNumber: 16,
    nationalDexNumber: 187,
    types: [types.grass, types.flying]
  },
  {
    name: 'Skiploom',
    regionalDexNumber: 17,
    nationalDexNumber: 188,
    types: [types.grass, types.flying]
  },
  {
    name: 'Jumpluff',
    regionalDexNumber: 18,
    nationalDexNumber: 189,
    types: [types.grass, types.flying]
  },
  {
    name: 'Fletchling',
    regionalDexNumber: 19,
    nationalDexNumber: 661,
    types: [types.normal, types.flying]
  },
  {
    name: 'Fletchinder',
    regionalDexNumber: 20,
    nationalDexNumber: 662,
    types: [types.fire, types.flying]
  },
  {
    name: 'Talonflame',
    regionalDexNumber: 21,
    nationalDexNumber: 663,
    types: [types.fire, types.flying]
  },
  {
    name: 'Houndour',
    regionalDexNumber: 25,
    nationalDexNumber: 228,
    types: [types.dark, types.fire]
  },
  {
    name: 'Houndoom',
    regionalDexNumber: 26,
    nationalDexNumber: 229,
    types: [types.dark, types.fire]
  },
  {
    name: 'Yungoos',
    regionalDexNumber: 27,
    nationalDexNumber: 734,
    types: [types.normal]
  },
  {
    name: 'Gumshoos',
    regionalDexNumber: 28,
    nationalDexNumber: 735,
    types: [types.normal]
  },
  {
    name: 'Skwovet',
    regionalDexNumber: 29,
    nationalDexNumber: 819,
    types: [types.normal]
  },
  {
    name: 'Greedent',
    regionalDexNumber: 30,
    nationalDexNumber: 820,
    types: [types.normal]
  },
  {
    name: 'Sunkern',
    regionalDexNumber: 31,
    nationalDexNumber: 191,
    types: [types.grass]
  },
  {
    name: 'Sunflora',
    regionalDexNumber: 32,
    nationalDexNumber: 192,
    types: [types.grass]
  },
  {
    name: 'Kricketot',
    regionalDexNumber: 33,
    nationalDexNumber: 401,
    types: [types.bug]
  },
  {
    name: 'Kricketune',
    regionalDexNumber: 34,
    nationalDexNumber: 402,
    types: [types.bug]
  },
  {
    name: 'Scatterbug',
    regionalDexNumber: 35,
    nationalDexNumber: 664,
    types: [types.bug]
  },
  {
    name: 'Spewpa',
    regionalDexNumber: 36,
    nationalDexNumber: 665,
    types: [types.bug]
  },
  {
    name: 'Vivillon',
    regionalDexNumber: 37,
    nationalDexNumber: 666,
    types: [types.bug, types.flying]
  },
  {
    name: 'Combee',
    regionalDexNumber: 38,
    nationalDexNumber: 415,
    types: [types.bug, types.flying]
  },
  {
    name: 'Vespiquen',
    regionalDexNumber: 39,
    nationalDexNumber: 416,
    types: [types.bug, types.flying]
  },
  {
    name: 'Rookidee',
    regionalDexNumber: 40,
    nationalDexNumber: 821,
    types: [types.flying]
  },
  {
    name: 'Corvisquire',
    regionalDexNumber: 41,
    nationalDexNumber: 822,
    types: [types.flying]
  },
  {
    name: 'Corviknight',
    regionalDexNumber: 42,
    nationalDexNumber: 823,
    types: [types.flying, types.steel]
  },
  {
    name: 'Happiny',
    regionalDexNumber: 43,
    nationalDexNumber: 440,
    types: [types.normal]
  },
  {
    name: 'Chansey',
    regionalDexNumber: 44,
    nationalDexNumber: 113,
    types: [types.normal]
  },
  {
    name: 'Blissey',
    regionalDexNumber: 45,
    nationalDexNumber: 242,
    types: [types.normal]
  },
  {
    name: 'Azurill',
    regionalDexNumber: 46,
    nationalDexNumber: 298,
    types: [types.normal, types.fairy]
  },
  {
    name: 'Marill',
    regionalDexNumber: 47,
    nationalDexNumber: 183,
    types: [types.water, types.fairy]
  },
  {
    name: 'Azumarill',
    regionalDexNumber: 48,
    nationalDexNumber: 184,
    types: [types.water, types.fairy]
  },
  {
    name: 'Surskit',
    regionalDexNumber: 49,
    nationalDexNumber: 283,
    types: [types.bug, types.water]
  },
  {
    name: 'Masquerain',
    regionalDexNumber: 50,
    nationalDexNumber: 284,
    types: [types.bug, types.flying]
  },
  {
    name: 'Buizel',
    regionalDexNumber: 51,
    nationalDexNumber: 418,
    types: [types.water]
  },
  {
    name: 'Floatzel',
    regionalDexNumber: 52,
    nationalDexNumber: 419,
    types: [types.water]
  },
  {
    name: 'Wooper',
    regionalDexNumber: 53,
    nationalDexNumber: 194,
    types: [types.poison, types.ground],
    stats: {
      hp: 55,
      attack: 45,
      defense: 45,
      specialAttack: 25,
      specialDefense: 25,
      speed: 15
    }
  },
  {
    name: 'Psyduck',
    regionalDexNumber: 55,
    nationalDexNumber: 54,
    types: [types.water]
  },
  {
    name: 'Golduck',
    regionalDexNumber: 56,
    nationalDexNumber: 55,
    types: [types.water]
  },
  {
    name: 'Chewtle',
    regionalDexNumber: 57,
    nationalDexNumber: 833,
    types: [types.water]
  },
  {
    name: 'Drednaw',
    regionalDexNumber: 58,
    nationalDexNumber: 834,
    types: [types.water, types.rock]
  },
  {
    name: 'Igglybuff',
    regionalDexNumber: 59,
    nationalDexNumber: 174,
    types: [types.normal, types.fairy]
  },
  {
    name: 'Jigglypuff',
    regionalDexNumber: 60,
    nationalDexNumber: 39,
    types: [types.normal, types.fairy]
  },
  {
    name: 'Wigglytuff',
    regionalDexNumber: 61,
    nationalDexNumber: 40,
    types: [types.normal, types.fairy]
  },
  {
    name: 'Ralts',
    regionalDexNumber: 62,
    nationalDexNumber: 280,
    types: [types.psychic, types.fairy]
  },
  {
    name: 'Kirlia',
    regionalDexNumber: 63,
    nationalDexNumber: 281,
    types: [types.psychic, types.fairy]
  },
  {
    name: 'Gardevoir',
    regionalDexNumber: 64,
    nationalDexNumber: 282,
    types: [types.psychic, types.fairy]
  },
  {
    name: 'Gallade',
    regionalDexNumber: 65,
    nationalDexNumber: 475,
    types: [types.psychic, types.fighting]
  },
  {
    name: 'Drowzee',
    regionalDexNumber: 66,
    nationalDexNumber: 96,
    types: [types.psychic]
  },
  {
    name: 'Hypno',
    regionalDexNumber: 67,
    nationalDexNumber: 97,
    types: [types.psychic]
  },
  {
    name: 'Gastly',
    regionalDexNumber: 68,
    nationalDexNumber: 92,
    types: [types.ghost, types.poison]
  },
  {
    name: 'Haunter',
    regionalDexNumber: 69,
    nationalDexNumber: 93,
    types: [types.ghost, types.poison]
  },
  {
    name: 'Gengar',
    regionalDexNumber: 70,
    nationalDexNumber: 94,
    types: [types.ghost, types.poison]
  },
  {
    name: 'Pichu',
    regionalDexNumber: 73,
    nationalDexNumber: 172,
    types: [types.electric]
  },
  {
    name: 'Pikachu',
    regionalDexNumber: 74,
    nationalDexNumber: 25,
    types: [types.electric]
  },
  {
    name: 'Raichu',
    regionalDexNumber: 75,
    nationalDexNumber: 26,
    types: [types.electric]
  },
  {
    name: 'Slakoth',
    regionalDexNumber: 78,
    nationalDexNumber: 287,
    types: [types.normal]
  },
  {
    name: 'Vigoroth',
    regionalDexNumber: 79,
    nationalDexNumber: 288,
    types: [types.normal]
  },
  {
    name: 'Slaking',
    regionalDexNumber: 80,
    nationalDexNumber: 289,
    types: [types.normal]
  },
  {
    name: 'Bounsweet',
    regionalDexNumber: 81,
    nationalDexNumber: 761,
    types: [types.grass]
  },
  {
    name: 'Steenee',
    regionalDexNumber: 82,
    nationalDexNumber: 762,
    types: [types.grass]
  },
  {
    name: 'Tsareena',
    regionalDexNumber: 83,
    nationalDexNumber: 763,
    types: [types.grass]
  },
  {
    name: 'Bonsly',
    regionalDexNumber: 87,
    nationalDexNumber: 438,
    types: [types.rock]
  },
  {
    name: 'Sudowoodo',
    regionalDexNumber: 88,
    nationalDexNumber: 185,
    types: [types.rock]
  },
  {
    name: 'Rockruff',
    regionalDexNumber: 89,
    nationalDexNumber: 744,
    types: [types.rock]
  },
  {
    name: 'Lycanroc',
    regionalDexNumber: 90,
    nationalDexNumber: 745,
    types: [types.rock]
  },
  {
    name: 'Rolycoly',
    regionalDexNumber: 91,
    nationalDexNumber: 837,
    types: [types.rock]
  },
  {
    name: 'Carkol',
    regionalDexNumber: 92,
    nationalDexNumber: 838,
    types: [types.rock, types.fire]
  },
  {
    name: 'Coalossal',
    regionalDexNumber: 93,
    nationalDexNumber: 839,
    types: [types.rock, types.fire]
  },
  {
    name: 'Shinx',
    regionalDexNumber: 94,
    nationalDexNumber: 403,
    types: [types.electric]
  },
  {
    name: 'Luxio',
    regionalDexNumber: 95,
    nationalDexNumber: 404,
    types: [types.electric]
  },
  {
    name: 'Luxray',
    regionalDexNumber: 96,
    nationalDexNumber: 405,
    types: [types.electric]
  },
  {
    name: 'Starly',
    regionalDexNumber: 97,
    nationalDexNumber: 396,
    types: [types.normal, types.flying]
  },
  {
    name: 'Staravia',
    regionalDexNumber: 98,
    nationalDexNumber: 397,
    types: [types.normal, types.flying]
  },
  {
    name: 'Staraptor',
    regionalDexNumber: 99,
    nationalDexNumber: 398,
    types: [types.normal, types.flying]
  },
  {
    name: 'Oricorio',
    regionalDexNumber: 100,
    nationalDexNumber: 741,
    types: [types.fire, types.flying]
  },
  {
    name: 'Mareep',
    regionalDexNumber: 101,
    nationalDexNumber: 179,
    types: [types.electric]
  },
  {
    name: 'Flaaffy',
    regionalDexNumber: 102,
    nationalDexNumber: 180,
    types: [types.electric]
  },
  {
    name: 'Ampharos',
    regionalDexNumber: 103,
    nationalDexNumber: 181,
    types: [types.electric]
  },
  {
    name: 'Petilil',
    regionalDexNumber: 104,
    nationalDexNumber: 548,
    types: [types.grass]
  },
  {
    name: 'Lilligant',
    regionalDexNumber: 105,
    nationalDexNumber: 549,
    types: [types.grass]
  },
  {
    name: 'Shroomish',
    regionalDexNumber: 106,
    nationalDexNumber: 285,
    types: [types.grass]
  },
  {
    name: 'Breloom',
    regionalDexNumber: 107,
    nationalDexNumber: 286,
    types: [types.grass, types.fighting]
  },
  {
    name: 'Applin',
    regionalDexNumber: 108,
    nationalDexNumber: 840,
    types: [types.grass, types.dragon]
  },
  {
    name: 'Flapple',
    regionalDexNumber: 109,
    nationalDexNumber: 841,
    types: [types.grass, types.dragon]
  },
  {
    name: 'Appletun',
    regionalDexNumber: 110,
    nationalDexNumber: 842,
    types: [types.grass, types.dragon]
  },
  {
    name: 'Spoink',
    regionalDexNumber: 111,
    nationalDexNumber: 325,
    types: [types.psychic]
  },
  {
    name: 'Grumpig',
    regionalDexNumber: 112,
    nationalDexNumber: 326,
    types: [types.psychic]
  },
  {
    name: 'Misdreavus',
    regionalDexNumber: 114,
    nationalDexNumber: 200,
    types: [types.ghost],
    violetExclusive: true
  },
  {
    name: 'Mismagius',
    regionalDexNumber: 115,
    nationalDexNumber: 429,
    types: [types.ghost],
    violetExclusive: true
  },
  {
    name: 'Makuhita',
    regionalDexNumber: 115,
    nationalDexNumber: 296,
    types: [types.fighting]
  },
  {
    name: 'Hariyama',
    regionalDexNumber: 117,
    nationalDexNumber: 297,
    types: [types.fighting]
  },
  {
    name: 'Crabrawler',
    regionalDexNumber: 118,
    nationalDexNumber: 739,
    types: [types.fighting]
  },
  {
    name: 'Crabominable',
    regionalDexNumber: 119,
    nationalDexNumber: 740,
    types: [types.fighting, types.ice]
  },
  {
    name: 'Salandit',
    regionalDexNumber: 120,
    nationalDexNumber: 757,
    types: [types.poison, types.fire]
  },
  {
    name: 'Salazzle',
    regionalDexNumber: 121,
    nationalDexNumber: 758,
    types: [types.poison, types.fire]
  },
  {
    name: 'Phanpy',
    regionalDexNumber: 122,
    nationalDexNumber: 231,
    types: [types.ground]
  },
  {
    name: 'Donphan',
    regionalDexNumber: 123,
    nationalDexNumber: 232,
    types: [types.ground]
  },
  {
    name: 'Cufant',
    regionalDexNumber: 124,
    nationalDexNumber: 878,
    types: [types.steel]
  },
  {
    name: 'Copperajah',
    regionalDexNumber: 125,
    nationalDexNumber: 879,
    types: [types.steel]
  },
  {
    name: 'Gible',
    regionalDexNumber: 126,
    nationalDexNumber: 443,
    types: [types.dragon, types.ground]
  },
  {
    name: 'Gabite',
    regionalDexNumber: 127,
    nationalDexNumber: 444,
    types: [types.dragon, types.ground]
  },
  {
    name: 'Garchomp',
    regionalDexNumber: 128,
    nationalDexNumber: 445,
    types: [types.dragon, types.ground]
  },
  {
    name: 'Wingull',
    regionalDexNumber: 132,
    nationalDexNumber: 278,
    types: [types.water, types.flying]
  },
  {
    name: 'Pelipper',
    regionalDexNumber: 133,
    nationalDexNumber: 279,
    types: [types.water, types.flying]
  },
  {
    name: 'Magikarp',
    regionalDexNumber: 134,
    nationalDexNumber: 129,
    types: [types.water]
  },
  {
    name: 'Gyarados',
    regionalDexNumber: 135,
    nationalDexNumber: 130,
    types: [types.water, types.flying]
  },
  {
    name: 'Arrokuda',
    regionalDexNumber: 136,
    nationalDexNumber: 846,
    types: [types.water, types.flying]
  },
  {
    name: 'Basculin',
    regionalDexNumber: 138,
    nationalDexNumber: 550,
    types: [types.water]
  },
  {
    name: 'Gulpin',
    regionalDexNumber: 139,
    nationalDexNumber: 316,
    types: [types.poison],
    violetExclusive: true
  },
  {
    name: 'Swalot',
    regionalDexNumber: 140,
    nationalDexNumber: 317,
    types: [types.poison],
    violetExclusive: true
  },
  {
    name: 'Meowth',
    regionalDexNumber: 141,
    nationalDexNumber: 52,
    types: [types.normal]
  },
  {
    name: 'Persian',
    regionalDexNumber: 142,
    nationalDexNumber: 53,
    types: [types.normal]
  },
  {
    name: 'Drifloon',
    regionalDexNumber: 143,
    nationalDexNumber: 425,
    types: [types.ghost, types.flying],
    scarletExclusive: true
  },
  {
    name: 'Drifblim',
    regionalDexNumber: 144,
    nationalDexNumber: 426,
    types: [types.ghost, types.flying],
    scarletExclusive: true
  },
  {
    name: 'Flabebe',
    regionalDexNumber: 145,
    nationalDexNumber: 669,
    types: [types.fairy]
  },
  {
    name: 'Floette',
    regionalDexNumber: 146,
    nationalDexNumber: 670,
    types: [types.fairy]
  },
  {
    name: 'Florges',
    regionalDexNumber: 147,
    nationalDexNumber: 671,
    types: [types.fairy]
  },
  {
    name: 'Diglett',
    regionalDexNumber: 148,
    nationalDexNumber: 50,
    types: [types.ground]
  },
  {
    name: 'Dugtrio',
    regionalDexNumber: 149,
    nationalDexNumber: 51,
    types: [types.ground]
  },
  {
    name: 'Torkoal',
    regionalDexNumber: 150,
    nationalDexNumber: 324,
    types: [types.fire]
  },
  {
    name: 'Numel',
    regionalDexNumber: 151,
    nationalDexNumber: 322,
    types: [types.fire, types.ground]
  },
  {
    name: 'Camerupt',
    regionalDexNumber: 152,
    nationalDexNumber: 323,
    types: [types.fire, types.ground]
  },
  {
    name: 'Bronzor',
    regionalDexNumber: 153,
    nationalDexNumber: 436,
    types: [types.steel, types.psychic]
  },
  {
    name: 'Bronzong',
    regionalDexNumber: 154,
    nationalDexNumber: 437,
    types: [types.steel, types.psychic]
  },
  {
    name: 'Axew',
    regionalDexNumber: 155,
    nationalDexNumber: 610,
    types: [types.dragon]
  },
  {
    name: 'Fraxure',
    regionalDexNumber: 156,
    nationalDexNumber: 611,
    types: [types.dragon]
  },
  {
    name: 'Haxorus',
    regionalDexNumber: 157,
    nationalDexNumber: 612,
    types: [types.dragon]
  },
  {
    name: 'Mankey',
    regionalDexNumber: 158,
    nationalDexNumber: 56,
    types: [types.fighting]
  },
  {
    name: 'Primeape',
    regionalDexNumber: 159,
    nationalDexNumber: 57,
    types: [types.fighting]
  },
  {
    name: 'Meditite',
    regionalDexNumber: 161,
    nationalDexNumber: 307,
    types: [types.fighting, types.psychic]
  },
  {
    name: 'Medicham',
    regionalDexNumber: 162,
    nationalDexNumber: 308,
    types: [types.fighting, types.psychic]
  },
  {
    name: 'Riolu',
    regionalDexNumber: 163,
    nationalDexNumber: 447,
    types: [types.fighting]
  },
  {
    name: 'Lucario',
    regionalDexNumber: 164,
    nationalDexNumber: 448,
    types: [types.fighting, types.steel]
  },
  {
    name: 'Barboach',
    regionalDexNumber: 168,
    nationalDexNumber: 339,
    types: [types.water, types.ground]
  },
  {
    name: 'Whiscash',
    regionalDexNumber: 169,
    nationalDexNumber: 340,
    types: [types.water, types.ground]
  },
  {
    name: 'Goomy',
    regionalDexNumber: 172,
    nationalDexNumber: 704,
    types: [types.dragon]
  },
  {
    name: 'Sliggoo',
    regionalDexNumber: 173,
    nationalDexNumber: 705,
    types: [types.dragon]
  },
  {
    name: 'Goodra',
    regionalDexNumber: 174,
    nationalDexNumber: 706,
    types: [types.dragon]
  },
  {
    name: 'Croagunk',
    regionalDexNumber: 175,
    nationalDexNumber: 453,
    types: [types.poison, types.fighting]
  },
  {
    name: 'Toxicroak',
    regionalDexNumber: 176,
    nationalDexNumber: 454,
    types: [types.poison, types.fighting]
  },
  {
    name: 'Eevee',
    regionalDexNumber: 179,
    nationalDexNumber: 133,
    types: [types.normal]
  },
  {
    name: 'Vaporeon',
    regionalDexNumber: 180,
    nationalDexNumber: 134,
    types: [types.water]
  },
  {
    name: 'Jolteon',
    regionalDexNumber: 181,
    nationalDexNumber: 135,
    types: [types.electric]
  },
  {
    name: 'Flareon',
    regionalDexNumber: 182,
    nationalDexNumber: 136,
    types: [types.fire]
  },
  {
    name: 'Espeon',
    regionalDexNumber: 183,
    nationalDexNumber: 196,
    types: [types.psychic]
  },
  {
    name: 'Umbreon',
    regionalDexNumber: 184,
    nationalDexNumber: 197,
    types: [types.dark]
  },
  {
    name: 'Leafeon',
    regionalDexNumber: 185,
    nationalDexNumber: 470,
    types: [types.grass]
  },
  {
    name: 'Glaceon',
    regionalDexNumber: 186,
    nationalDexNumber: 471,
    types: [types.ice]
  },
  {
    name: 'Sylveon',
    regionalDexNumber: 187,
    nationalDexNumber: 700,
    types: [types.fairy]
  },
  {
    name: 'Dunsparce',
    regionalDexNumber: 188,
    nationalDexNumber: 206,
    types: [types.normal]
  },
  {
    name: 'Deerling',
    regionalDexNumber: 190,
    nationalDexNumber: 585,
    types: [types.normal, types.grass]
  },
  {
    name: 'Sawsbuck',
    regionalDexNumber: 191,
    nationalDexNumber: 586,
    types: [types.normal, types.grass]
  },
  {
    name: 'Girafarig',
    regionalDexNumber: 192,
    nationalDexNumber: 203,
    types: [types.normal, types.psychic]
  },
  {
    name: 'Grimer',
    regionalDexNumber: 194,
    nationalDexNumber: 88,
    types: [types.poison]
  },
  {
    name: 'Muk',
    regionalDexNumber: 195,
    nationalDexNumber: 89,
    types: [types.poison]
  },
  {
    name: 'Toxel',
    regionalDexNumber: 198,
    nationalDexNumber: 848,
    types: [types.electric, types.poison]
  },
  {
    name: 'Toxtricity',
    regionalDexNumber: 199,
    nationalDexNumber: 849,
    types: [types.electric, types.poison]
  },
  {
    name: 'Dedennne',
    regionalDexNumber: 200,
    nationalDexNumber: 702,
    types: [types.electric, types.fairy]
  }
];

export default pokemon;
