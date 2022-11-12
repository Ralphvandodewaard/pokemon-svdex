import Pokemon from '@/models/Pokemon';
import types from './types';

const pokemon: Pokemon[] = [
  {
    name: 'Sprigatito',
    types: [types.grass]
  },
  {
    name: 'Floragato',
    types: [types.grass]
  },
  {
    name: 'Meowscarada',
    types: [types.grass, types.dark]
  },
  {
    name: 'Fuecoco',
    types: [types.fire]
  },
  {
    name: 'Crocalor',
    types: [types.fire]
  },
  {
    name: 'Skeledirge',
    types: [types.fire, types.ghost]
  },
  {
    name: 'Quaxly',
    types: [types.water]
  },
  {
    name: 'Quaxwell',
    types: [types.water]
  },
  {
    name: 'Quaquaval',
    types: [types.water, types.fighting]
  },
  {
    name: 'Lechonk',
    types: [types.normal]
  },
  {
    name: 'Oinkologne',
    types: [types.normal]
  },
  {
    name: 'Dundunsparce',
    types: [types.normal]
  },
  {
    name: 'Tarountula',
    types: [types.bug]
  },
  {
    name: 'Spidops',
    types: [types.bug]
  },
  {
    name: 'Nymble',
    types: [types.bug]
  },
  {
    name: 'Lokix',
    types: [types.bug, types.dark]
  },
  {
    name: 'Rellor',
    types: [types.bug]
  },
  {
    name: 'Rabsca',
    types: [types.bug, types.psychic]
  },
  {
    name: 'Greavard',
    types: [types.ghost]
  },
  {
    name: 'Houndstone',
    types: [types.ghost]
  },
  {
    name: 'Flittle',
    types: [types.psychic]
  },
  {
    name: 'Espartha',
    types: [types.psychic]
  },
  {
    name: 'Firagiraf',
    types: [types.normal, types.psychic]
  },
  {
    name: 'Wiglett',
    types: [types.water]
  },
  {
    name: 'Wugtrio',
    types: [types.water]
  },
  {
    name: 'Dondozo',
    types: [types.water]
  },
  {
    name: 'Veluza',
    types: [types.water, types.psychic]
  },
  {
    name: 'Finizen',
    types: [types.water]
  },
  {
    name: 'Palafin',
    types: [types.water]
  },
  {
    name: 'Smoliv',
    types: [types.grass, types.normal]
  },
  {
    name: 'Dolliv',
    types: [types.grass, types.normal]
  },
  {
    name: 'Arboliva',
    types: [types.grass, types.normal]
  },
  {
    name: 'Capsakid',
    types: [types.grass]
  },
  {
    name: 'Scovillain',
    types: [types.grass, types.fire]
  },
  {
    name: 'Tadbulb',
    types: [types.electric]
  },
  {
    name: 'Bellibolt',
    types: [types.electric]
  },
  {
    name: 'Varoom',
    types: [types.steel, types.poison]
  },
  {
    name: 'Revavroom',
    types: [types.steel, types.poison]
  },
  {
    name: 'Orthworm',
    types: [types.steel]
  },
  {
    name: 'Tandemous',
    types: [types.normal]
  },
  {
    name: 'Maushold',
    types: [types.normal]
  },
  {
    name: 'Cetoddle',
    types: [types.ice]
  },
  {
    name: 'Cetitan',
    types: [types.ice]
  },
  {
    name: 'Arbolovia',
    types: [types.dragon, types.ice]
  },
  {
    name: 'Arctibax',
    types: [types.dragon, types.ice]
  },
  {
    name: 'Baxcalibur',
    types: [types.dragon, types.ice]
  },
  {
    name: 'Tatsugiri',
    types: [types.dragon, types.water]
  },
  {
    name: 'Cyclizar',
    types: [types.dragon, types.normal]
  },
  {
    name: 'Pawmi',
    types: [types.electric]
  },
  {
    name: 'Pawmo',
    types: [types.electric, types.fighting]
  },
  {
    name: 'Pawmot',
    types: [types.electric, types.fighting]
  },
  {
    name: 'Wattrel',
    types: [types.electric, types.flying]
  },
  {
    name: 'Kilowattrel',
    types: [types.electric, types.flying]
  },
  {
    name: 'Bombirdier',
    types: [types.flying, types.dark]
  },
  {
    name: 'Squawkability',
    types: [types.normal, types.flying]
  },
  {
    name: 'Flamigo',
    types: [types.flying, types.fighting]
  },
  {
    name: 'Klawf',
    types: [types.rock]
  },
  {
    name: 'Nacli',
    types: [types.rock]
  },
  {
    name: 'Naclistack',
    types: [types.rock]
  },
  {
    name: 'Garganacl',
    types: [types.rock]
  },
  {
    name: 'Glimmet',
    types: [types.rock, types.poison]
  },
  {
    name: 'Glimmora',
    types: [types.rock, types.poison]
  },
  {
    name: 'Shroodle',
    types: [types.poison, types.normal]
  },
  {
    name: 'Grafaiai',
    types: [types.poison, types.normal]
  },
  {
    name: 'Fidough',
    types: [types.fairy]
  },
  {
    name: 'Dachsbun',
    types: [types.fairy]
  },
  {
    name: 'Maschiff',
    types: [types.dark]
  },
  {
    name: 'Mabosstiff',
    types: [types.dark]
  },
  {
    name: 'Bramblin',
    types: [types.grass, types.ghost]
  },
  {
    name: 'Brambleghast',
    types: [types.grass, types.ghost]
  },
  {
    name: 'Gimmighoul',
    types: [types.ghost]
  },
  {
    name: 'Gholdengo',
    types: [types.steel, types.ghost]
  },
  {
    name: 'Great Tusk',
    types: [types.ground, types.fighting]
  },
  {
    name: 'Brute Bonnet',
    types: [types.grass, types.dark]
  },
  {
    name: 'Sandy Shocks',
    types: [types.electric, types.ground]
  },
  {
    name: 'Scream Tail',
    types: [types.fairy, types.psychic]
  },
  {
    name: 'Flutter Mane',
    types: [types.ghost, types.fairy]
  },
  {
    name: 'Slither Wing',
    types: [types.bug, types.fighting]
  },
  {
    name: 'Roaring Moon',
    types: [types.dragon, types.dark]
  },
  {
    name: 'Iron Treads',
    types: [types.ground, types.steel]
  },
  {
    name: 'Iron Moth',
    types: [types.fire, types.poison]
  },
  {
    name: 'Iron Hands',
    types: [types.fighting, types.electric]
  },
  {
    name: 'Iron Jugulis',
    types: [types.dark, types.flying]
  },
  {
    name: 'Iron Thorns',
    types: [types.rock, types.electric]
  },
  {
    name: 'Iron Bundle',
    types: [types.ice, types.water]
  },
  {
    name: 'Iron Valiant',
    types: [types.fairy, types.fighting]
  },
  {
    name: 'Ting-Lu',
    types: [types.dark, types.ground]
  },
  {
    name: 'Chien-Pao',
    types: [types.dark, types.ice]
  },
  {
    name: 'Wo-Chien',
    types: [types.dark, types.grass]
  },
  {
    name: 'Chi-Yu',
    types: [types.dark, types.fire]
  },
  {
    name: 'Koraidon',
    types: [types.fighting, types.dragon]
  },
  {
    name: 'Miraidon',
    types: [types.electric, types.dragon]
  },
  {
    name: 'Tinkatink',
    types: [types.fairy, types.steel]
  },
  {
    name: 'Tinkatuff',
    types: [types.fairy, types.steel]
  },
  {
    name: 'Tinkaton',
    types: [types.fairy, types.steel]
  },
  {
    name: 'Charcadet',
    types: [types.fire]
  },
  {
    name: 'Armarouge',
    types: [types.fire, types.psychic]
  },
  {
    name: 'Ceruledge',
    types: [types.fire, types.ghost]
  },
  {
    name: 'Toedscool',
    types: [types.ground, types.grass]
  },
  {
    name: 'Toedscruel',
    types: [types.ground, types.grass]
  },
  {
    name: 'Kingambit',
    types: [types.dark, types.steel]
  },
  {
    name: 'Clodsire',
    types: [types.poison, types.ground]
  },
  {
    name: 'Anihilape',
    types: [types.fighting, types.ghost]
  }
];

export default pokemon;
