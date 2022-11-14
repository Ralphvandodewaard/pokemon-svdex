import Pokemon from '@/models/Pokemon';
import types from './types';

const pokemon: Pokemon[] = [
  {
    name: 'Sprigatito',
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
    name: 'Oinkologne',
    nationalDexNumber: 916,
    types: [types.normal],
    alternateForms: ['916-2'],
    stats: {
      hp: 110,
      attack: 100,
      defense: 75,
      specialAttack: 59,
      specialDefense: 80,
      speed: 65
    }
  },
  {
    name: 'Dundunsparce',
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
    name: 'Firagiraf',
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
    nationalDexNumber: 934,
    types: [types.water],
    alternateForms: ['934-2'],
    stats: {
      hp: 100,
      attack: 70,
      defense: 72,
      specialAttack: 53,
      specialDefense: 62,
      speed: 100
    }
  },
  {
    name: 'Smoliv',
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
    nationalDexNumber: 946,
    types: [types.normal],
    alternateForms: ['946-2'],
    stats: {
      hp: 74,
      attack: 75,
      defense: 70,
      specialAttack: 65,
      specialDefense: 75,
      speed: 111
    }
  },
  {
    name: 'Cetoddle',
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
    nationalDexNumber: 952,
    types: [types.dragon, types.water],
    alternateForms: ['952-2', '952-3'],
    stats: {
      hp: 68,
      attack: 50,
      defense: 60,
      specialAttack: 120,
      specialDefense: 95,
      speed: 82
    }
  },
  {
    name: 'Cyclizar',
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
    nationalDexNumber: 960,
    types: [types.normal, types.flying],
    alternateForms: ['960-2', '960-3', '960-4'],
    stats: {
      hp: 82,
      attack: 96,
      defense: 51,
      specialAttack: 45,
      specialDefense: 51,
      speed: 92
    }
  },
  {
    name: 'Flamigo',
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
    name: 'Gimmighoul',
    nationalDexNumber: 976,
    types: [types.ghost],
    alternateForms: ['976-2'],
    stats: {
      hp: 45,
      attack: 30,
      defense: 25,
      specialAttack: 75,
      specialDefense: 45,
      speed: 80
    }
  },
  {
    name: 'Gholdengo',
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
    nationalDexNumber: 998,
    types: [types.fighting, types.dragon],
    scarletExclusive: true,
    alternateForms: ['998-2'],
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
    nationalDexNumber: 999,
    types: [types.electric, types.dragon],
    violetExclusive: true,
    alternateForms: ['999-2'],
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
  }
];

export default pokemon;
