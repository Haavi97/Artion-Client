import { ChainId } from 'hadeswap-beta-sdk';

import { WFTM_ABI } from './abi';
import { calculateGasMargin, getHigherGWEI } from 'utils';
import useContract from 'hooks/useContract';
import { ethers } from 'ethers';

const WFTM_ADDRESS = {
  [ChainId.MAINNET]: '0x6FC851B8D66116627Fb1137b9D5FE4E2e1BeA978',
  [ChainId.SPARTA]: '',
};

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';
const CHAIN = isMainnet ? ChainId.MAINNET : ChainId.SPARTA;
export const useWFTMContract = () => {
  const { getContract } = useContract();

  const wftmAddress = WFTM_ADDRESS[CHAIN];

  const getWFTMContract = async () => await getContract(wftmAddress, WFTM_ABI);

  const getWFTMBalance = async address => {
    const contract = await getWFTMContract();
    return await contract.balanceOf(address);
  };

  const wrapFTM = async (value, from) => {
    const contract = await getWFTMContract();

    const options = {
      value,
      from,
      gasPrice: getHigherGWEI(),
    };

    const gasEstimate = await contract.estimateGas.deposit(options);
    options.gasLimit = calculateGasMargin(gasEstimate);

    return await contract.deposit(options);
  };

  const unwrapFTM = async value => {
    const contract = await getWFTMContract();

    const options = {
      gasPrice: getHigherGWEI(),
    };

    return await contract.withdraw(value, options);
  };

  const getAllowance = async (owner, spender) => {
    const contract = await getWFTMContract();
    return await contract.allowance(owner, spender);
  };

  const approve = async (address, value) => {
    const contract = await getWFTMContract();
    const tx = await contract.approve(
      address,
      ethers.constants.MaxUint256 || value
    );
    await tx.wait();
  };

  return {
    wftmAddress,
    getWFTMBalance,
    wrapFTM,
    unwrapFTM,
    getAllowance,
    approve,
  };
};
