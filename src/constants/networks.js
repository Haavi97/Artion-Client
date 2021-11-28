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
    auction: '0xEC5189483c00E2193ee7b237639F70D40F8233e5', //FantomAuction proxy
    sales: '0xE3b1c73Ec81FCbff004A643abb2D67A69Fa911BE', //FantomMarketplace proxy
    bundleSales: '0xc5a6474fd89CCCa0ddD149CD2fD3AB0Ad0a0BDea', //FantomBundleMarketplace proxy
    factory: '0x76a26cC838Dae24eb85Ece143EB242f844984123', //FantomNFTFactory
    privateFactory: '0xd9ea8A0E5FeE8ADa1bae763F17D1c70DEAd8aa41', //FantomNFTFactoryPrivate
    artFactory: '0x1b3e603A9Ae5F1C782889eBC498a6D3AcF1BC145', //FantomArtFactory
    privateArtFactory: '0x4db29027d3630764d57F47C4e7c0AFDD12f0808A', //FantomArtFactoryPrivate
  },
};
