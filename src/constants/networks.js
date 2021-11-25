import { ChainId } from 'hadeswap-beta-sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Olympus',
  // [ChainId.RINKEBY]: 'Rinkeby',
  // [ChainId.ROPSTEN]: 'Ropsten',
  // [ChainId.GÖRLI]: 'Görli',
  // [ChainId.KOVAN]: 'Kovan',
  // [ChainId.MAINNET]: 'Fantom',
  // [ChainId.SPARTA]: 'Fantom Testnet',
  // [ChainId.MATIC]: 'Matic',
  // [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  // [ChainId.XDAI]: 'xDai',
  // [ChainId.BSC]: 'BSC',
  // [ChainId.BSC_TESTNET]: 'BSC Testnet',
  // [ChainId.MOONBASE]: 'Moonbase',
  // [ChainId.AVALANCHE]: 'Avalanche',
  // [ChainId.FUJI]: 'Fuji',
  // [ChainId.HECO]: 'HECO',
  // [ChainId.HECO_TESTNET]: 'HECO Testnet',
  // [ChainId.HARMONY]: 'Harmony',
  // [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
  [ChainId.SPARTA]: 'Sparta',
  // [ChainId.OLYMPUS]: 'Olympus',
};

export const Contracts = {
  [ChainId.MAINNET]: {
    auction: '0x951Cc69504d39b3eDb155CA99f555E47E044c2F1',
    sales: '0xa06aecbb8CD9328667f8E05f288e5b3ac1CFf852',
    bundleSales: '0x56aD389A02Ea9d63f13106cB0c161342f537a92e',
    factory: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //FantomNFTFactory
    privateFactory: '0xa4fDb09e1796730bfBA8a352074F0dd65D400Dd4', //FantomNFTFactoryPrivate
    artFactory: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
    privateArtFactory: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  },
  [ChainId.SPARTA]: {
    auction: '0xDC8e329b0bA326f7Fcdbb5d42B437FfC7EA7C7a8',
    sales: '0x35123486C0a742da0aA320d037e5226bA4F9bf21',
    bundleSales: '0x52352D4a5fB2a79722a875bBdF2a6D00A152a3C5',
    factory: '0x7C8a9F8D04d9f7601E04B4bd3f594F6aB42b1231', //FantomNFTFactory
    privateFactory: '0x7d3bb8dD1f3b123C6DFEf882709Fadc007ee4532', //FantomNFTFactoryPrivate
    artFactory: '0x980A2fAC219CD4e26033E82A44D6798F7488aDb2', //FantomArtFactory
    privateArtFactory: '0x0106fe87F41BAa91D6fe52c508723e8cf5082c49', //FantomArtFactoryPrivate
  },
  [ChainId.SPARTA]: {
    auction: '0xcb259B98880a05E024eAE50872b1d98E3Aa13e49', //FantomAuction
    sales: '0x2CcFe7429e45EB0cB7E40Cf594aACDFdF4e61e92', //FantomMarketplace
    bundleSales: '0x2F6839741877782FE48f611F2E2fb07E1B817D07',
    factory: '0xc389b01A6b56e9Ba23e8F201a257168a51f14762', //FantomNFTFactory
    privateFactory: '0xdb97189CB4be936919594Ba5b6e8DA0c6649313c', //FantomNFTFactoryPrivate
    artFactory: '0x3Af71938c2e503D5893bCCD0245862b02D890858', //FantomArtFactory
    privateArtFactory: '0x588B60D50aa65aEB7064c46e1c0395423b050DB9', //FantomArtFactoryPrivate
  },
  [ChainId.MAINNET]: {
    auction: '', //FantomAuction
    sales: '', //FantomMarketplace
    bundleSales: '',
    factory: '', //FantomNFTFactory
    privateFactory: '', //FantomNFTFactoryPrivate
    artFactory: '', //FantomArtFactory
    privateArtFactory: '', //FantomArtFactoryPrivate
  },
};
