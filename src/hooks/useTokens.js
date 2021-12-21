import { ChainId } from 'hadeswap-beta-sdk';

import iconWPOLIS from 'assets/svgs/wpolis.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const Tokens = {
  [ChainId.MAINNET]: [
    {
      address: '0x6FC851B8D66116627Fb1137b9D5FE4E2e1BeA978',
      name: 'Wrapped Polis',
      symbol: 'WPOLIS',
      decimals: 18,
      icon: iconWPOLIS,
    },
    {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Polis',
      symbol: 'POLIS',
      decimals: 18,
      icon: iconWPOLIS,
    },
  ],
  [ChainId.SPARTA]: [
    {
      address: '0x6FC851B8D66116627Fb1137b9D5FE4E2e1BeA978',
      name: 'Wrapped Polis',
      symbol: 'WPOLIS',
      decimals: 18,
      icon: iconWPOLIS,
    },
  ],
};

export default function useTokens() {
  const chain = isMainnet ? ChainId.MAINNET : ChainId.SPARTA;

  const tokens = Tokens[chain];

  const getTokenByAddress = addr => {
    const address =
      !addr ||
      addr === '0x0000000000000000000000000000000000000000' ||
      addr === 'ftm'
        ? ''
        : addr;
    return (tokens || []).find(
      tk => tk.address.toLowerCase() === address.toLowerCase()
    );
  };

  return { getTokenByAddress, tokens };
}
