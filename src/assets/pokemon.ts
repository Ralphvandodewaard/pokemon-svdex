import Pokemon from '@/models/Pokemon';
import types from './types';

const pokemon: Pokemon[] = [
  {
    name: 'Sprigatito',
    types: [types.grass],
    nationalDexNumber: 906
  },
  {
    name: 'Floragato',
    types: [types.grass],
    nationalDexNumber: 907
  },
  {
    name: 'Meowscarada',
    types: [types.grass, types.dark],
    nationalDexNumber: 908
  },
  {
    name: 'Fuecoco',
    types: [types.fire],
    nationalDexNumber: 909
  },
  {
    name: 'Crocalor',
    types: [types.fire],
    nationalDexNumber: 910
  },
  {
    name: 'Skeledirge',
    types: [types.fire, types.ghost],
    nationalDexNumber: 911
  },
  {
    name: 'Quaxly',
    types: [types.water],
    nationalDexNumber: 912
  },
  {
    name: 'Quaxwell',
    types: [types.water],
    nationalDexNumber: 913
  },
  {
    name: 'Quaquaval',
    types: [types.water, types.fighting],
    nationalDexNumber: 914
  },
  {
    name: 'Lechonk',
    types: [types.normal],
    nationalDexNumber: 915
  },
  {
    name: 'Oinkologne',
    types: [types.normal],
    nationalDexNumber: 916
  },
  {
    name: 'Dundunsparce',
    types: [types.normal],
    nationalDexNumber: 917
  },
  {
    name: 'Tarountula',
    types: [types.bug],
    nationalDexNumber: 918
  },
  {
    name: 'Spidops',
    types: [types.bug],
    nationalDexNumber: 919
  },
  {
    name: 'Nymble',
    types: [types.bug],
    nationalDexNumber: 920
  },
  {
    name: 'Lokix',
    types: [types.bug, types.dark],
    nationalDexNumber: 921
  },
  {
    name: 'Rellor',
    types: [types.bug],
    nationalDexNumber: 922
  },
  {
    name: 'Rabsca',
    types: [types.bug, types.psychic],
    nationalDexNumber: 923
  },
  {
    name: 'Greavard',
    types: [types.ghost],
    nationalDexNumber: 924
  },
  {
    name: 'Houndstone',
    types: [types.ghost],
    nationalDexNumber: 925
  },
  {
    name: 'Flittle',
    types: [types.psychic],
    nationalDexNumber: 926
  },
  {
    name: 'Espartha',
    types: [types.psychic],
    nationalDexNumber: 927
  },
  {
    name: 'Firagiraf',
    types: [types.normal, types.psychic],
    nationalDexNumber: 928
  },
  {
    name: 'Wiglett',
    types: [types.water],
    nationalDexNumber: 929
  },
  {
    name: 'Wugtrio',
    types: [types.water],
    nationalDexNumber: 930
  },
  {
    name: 'Dondozo',
    types: [types.water],
    nationalDexNumber: 931
  },
  {
    name: 'Veluza',
    types: [types.water, types.psychic],
    nationalDexNumber: 932
  },
  {
    name: 'Finizen',
    types: [types.water],
    nationalDexNumber: 933
  },
  {
    name: 'Palafin',
    types: [types.water],
    nationalDexNumber: 934
  },
  {
    name: 'Smoliv',
    types: [types.grass, types.normal],
    nationalDexNumber: 935
  },
  {
    name: 'Dolliv',
    types: [types.grass, types.normal],
    nationalDexNumber: 936
  },
  {
    name: 'Arboliva',
    types: [types.grass, types.normal],
    nationalDexNumber: 937
  },
  {
    name: 'Capsakid',
    types: [types.grass],
    nationalDexNumber: 938
  },
  {
    name: 'Scovillain',
    types: [types.grass, types.fire],
    nationalDexNumber: 939
  },
  {
    name: 'Tadbulb',
    types: [types.electric],
    nationalDexNumber: 940
  },
  {
    name: 'Bellibolt',
    types: [types.electric],
    nationalDexNumber: 941
  },
  {
    name: 'Varoom',
    types: [types.steel, types.poison],
    nationalDexNumber: 942
  },
  {
    name: 'Revavroom',
    types: [types.steel, types.poison],
    nationalDexNumber: 943
  },
  {
    name: 'Orthworm',
    types: [types.steel],
    nationalDexNumber: 944
  },
  {
    name: 'Tandemous',
    types: [types.normal],
    nationalDexNumber: 945
  },
  {
    name: 'Maushold',
    types: [types.normal],
    nationalDexNumber: 946
  },
  {
    name: 'Cetoddle',
    types: [types.ice],
    nationalDexNumber: 947
  },
  {
    name: 'Cetitan',
    types: [types.ice],
    nationalDexNumber: 948
  },
  {
    name: 'Frigibax',
    types: [types.dragon, types.ice],
    nationalDexNumber: 949
  },
  {
    name: 'Arctibax',
    types: [types.dragon, types.ice],
    nationalDexNumber: 950
  },
  {
    name: 'Baxcalibur',
    types: [types.dragon, types.ice],
    nationalDexNumber: 951
  },
  {
    name: 'Tatsugiri',
    types: [types.dragon, types.water],
    nationalDexNumber: 952
  },
  {
    name: 'Cyclizar',
    types: [types.dragon, types.normal],
    nationalDexNumber: 953
  },
  {
    name: 'Pawmi',
    types: [types.electric],
    nationalDexNumber: 954
  },
  {
    name: 'Pawmo',
    types: [types.electric, types.fighting],
    nationalDexNumber: 955
  },
  {
    name: 'Pawmot',
    types: [types.electric, types.fighting],
    nationalDexNumber: 956
  },
  {
    name: 'Wattrel',
    types: [types.electric, types.flying],
    nationalDexNumber: 957
  },
  {
    name: 'Kilowattrel',
    types: [types.electric, types.flying],
    nationalDexNumber: 958
  },
  {
    name: 'Bombirdier',
    types: [types.flying, types.dark],
    nationalDexNumber: 959
  },
  {
    name: 'Squawkability',
    types: [types.normal, types.flying],
    nationalDexNumber: 960
  },
  {
    name: 'Flamigo',
    types: [types.flying, types.fighting],
    nationalDexNumber: 961
  },
  {
    name: 'Klawf',
    types: [types.rock],
    nationalDexNumber: 962
  },
  {
    name: 'Nacli',
    types: [types.rock],
    nationalDexNumber: 963
  },
  {
    name: 'Naclstack',
    types: [types.rock],
    nationalDexNumber: 964
  },
  {
    name: 'Garganacl',
    types: [types.rock],
    nationalDexNumber: 965
  },
  {
    name: 'Glimmet',
    types: [types.rock, types.poison],
    nationalDexNumber: 966
  },
  {
    name: 'Glimmora',
    types: [types.rock, types.poison],
    nationalDexNumber: 967
  },
  {
    name: 'Shroodle',
    types: [types.poison, types.normal],
    nationalDexNumber: 968
  },
  {
    name: 'Grafaiai',
    types: [types.poison, types.normal],
    nationalDexNumber: 969
  },
  {
    name: 'Fidough',
    types: [types.fairy],
    nationalDexNumber: 970
  },
  {
    name: 'Dachsbun',
    types: [types.fairy],
    nationalDexNumber: 971
  },
  {
    name: 'Maschiff',
    types: [types.dark],
    nationalDexNumber: 972
  },
  {
    name: 'Mabosstiff',
    types: [types.dark],
    nationalDexNumber: 973
  },
  {
    name: 'Bramblin',
    types: [types.grass, types.ghost],
    nationalDexNumber: 974
  },
  {
    name: 'Brambleghast',
    types: [types.grass, types.ghost],
    nationalDexNumber: 975
  },
  {
    name: 'Gimmighoul',
    types: [types.ghost],
    nationalDexNumber: 976
  },
  {
    name: 'Gholdengo',
    types: [types.steel, types.ghost],
    nationalDexNumber: 977
  },
  {
    name: 'Great Tusk',
    types: [types.ground, types.fighting],
    nationalDexNumber: 978
  },
  {
    name: 'Brute Bonnet',
    types: [types.grass, types.dark],
    nationalDexNumber: 979
  },
  {
    name: 'Sandy Shocks',
    types: [types.electric, types.ground],
    nationalDexNumber: 981
  },
  {
    name: 'Scream Tail',
    types: [types.fairy, types.psychic],
    nationalDexNumber: 982
  },
  {
    name: 'Flutter Mane',
    types: [types.ghost, types.fairy],
    nationalDexNumber: 983
  },
  {
    name: 'Slither Wing',
    types: [types.bug, types.fighting],
    nationalDexNumber: 984
  },
  {
    name: 'Roaring Moon',
    types: [types.dragon, types.dark],
    nationalDexNumber: 985
  },
  {
    name: 'Iron Treads',
    types: [types.ground, types.steel],
    nationalDexNumber: 986
  },
  {
    name: 'Iron Moth',
    types: [types.fire, types.poison],
    nationalDexNumber: 988
  },
  {
    name: 'Iron Hands',
    types: [types.fighting, types.electric],
    nationalDexNumber: 989
  },
  {
    name: 'Iron Jugulis',
    types: [types.dark, types.flying],
    nationalDexNumber: 990
  },
  {
    name: 'Iron Thorns',
    types: [types.rock, types.electric],
    nationalDexNumber: 991
  },
  {
    name: 'Iron Bundle',
    types: [types.ice, types.water],
    nationalDexNumber: 992
  },
  {
    name: 'Iron Valiant',
    types: [types.fairy, types.fighting],
    nationalDexNumber: 993
  },
  {
    name: 'Ting-Lu',
    types: [types.dark, types.ground],
    nationalDexNumber: 994
  },
  {
    name: 'Chien-Pao',
    types: [types.dark, types.ice],
    nationalDexNumber: 995
  },
  {
    name: 'Wo-Chien',
    types: [types.dark, types.grass],
    nationalDexNumber: 996
  },
  {
    name: 'Chi-Yu',
    types: [types.dark, types.fire],
    nationalDexNumber: 997
  },
  {
    name: 'Koraidon',
    types: [types.fighting, types.dragon],
    nationalDexNumber: 998
  },
  {
    name: 'Miraidon',
    types: [types.electric, types.dragon],
    nationalDexNumber: 999
  },
  {
    name: 'Tinkatink',
    types: [types.fairy, types.steel],
    nationalDexNumber: 1000
  },
  {
    name: 'Tinkatuff',
    types: [types.fairy, types.steel],
    nationalDexNumber: 1001
  },
  {
    name: 'Tinkaton',
    types: [types.fairy, types.steel],
    nationalDexNumber: 1002
  },
  {
    name: 'Charcadet',
    types: [types.fire],
    nationalDexNumber: 1003
  },
  {
    name: 'Armarouge',
    types: [types.fire, types.psychic],
    nationalDexNumber: 1004
  },
  {
    name: 'Ceruledge',
    types: [types.fire, types.ghost],
    nationalDexNumber: 1005
  },
  {
    name: 'Toedscool',
    types: [types.ground, types.grass],
    nationalDexNumber: 1006
  },
  {
    name: 'Toedscruel',
    types: [types.ground, types.grass],
    nationalDexNumber: 1007
  },
  {
    name: 'Kingambit',
    types: [types.dark, types.steel],
    nationalDexNumber: 1008
  },
  {
    name: 'Clodsire',
    types: [types.poison, types.ground],
    nationalDexNumber: 1009
  },
  {
    name: 'Anihilape',
    types: [types.fighting, types.ghost],
    nationalDexNumber: 1010
  }
];

export default pokemon;
