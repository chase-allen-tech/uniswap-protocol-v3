import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useState } from 'react';
import { useEffect } from 'react';

const WalletConnect = () => {

  const [web3Modal, setWeb3Modal] = useState(null);

  useEffect(() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infraId: process.env.REACT_APP_INFRA_SECRET
        }
      }
    }
  }, []);

  return <div className="w-full flex justify-center mt-8">
    <button className="bg-red-400 px-8 py-2 rounded text-white text-xl">Connect</button>
  </div>;
};

export default WalletConnect;