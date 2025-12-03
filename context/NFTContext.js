/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useRef } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';
import { create as ipfsHttpClient } from 'ipfs-http-client';

import { MarketAddress, MarketAddressABI } from './constants';

// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');
export const NFTContext = React.createContext();
const fetchContract = (signerOrProvider) => new ethers.Contract(MarketAddress, MarketAddressABI, signerOrProvider);

// const projectId = process.env.IPFS_PROJECT_ID;
// const projectSecret = process.env.API_KEY_SECRET;
// const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString('base64')}`;

// const client = ipfsHttpClient({
//   host: 'ipfs.infura.io',
//   port: 5001,
//   protocol: 'https',
//   headers: {
//     authorization: auth,
//   },
// });

export const NFTProvider = ({ children }) => {
  const auth = useRef('');
  const client = useRef({});
  const [currentAccount, setCurrentAccount] = useState('');
  const [isLoadingNFT, setIsLoadingNFT] = useState(false);
  const nftCurrency = 'ETH';

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return console.log('Make sure you have MetaMask!');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No Accounts Found');
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask');

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    setCurrentAccount(accounts[0]);

    window.location.reload();
  };

  const uploadToIPFS = async (file) => {
    // Use self-hosted IPFS gateway
    const gatewayUrl = process.env.NEXT_PUBLIC_IPFS_GATEWAY_URL || 'http://93.127.185.55:8080';
    try {
      // Check if IPFS client is properly initialized
      if (!client.current) {
        throw new Error('IPFS client not initialized.');
      }
      
      const added = await client.current.add({ content: file });

      const url = `${gatewayUrl}/ipfs/${added.path}`;

      return url;
    } catch (error) {
      console.error('Error uploading to file to IPFS. Details: ', error);
      return null;
    }
  };

  const fetchAuth = async () => {
    // No auth needed for self-hosted IPFS
    return { data: '' };
  };

  const getClient = () => {
    // Use self-hosted IPFS - no auth needed
    const apiUrl = process.env.NEXT_PUBLIC_IPFS_API_URL || 'http://93.127.185.55:5001';
    const host = apiUrl.replace('http://', '').replace('https://', '').split(':')[0];
    const protocol = apiUrl.startsWith('https') ? 'https' : 'http';
    
    const responseClient = ipfsHttpClient({
      host: host,
      port: 5001,
      protocol: protocol,
      apiPath: '/api/v0',
    });
    return responseClient;
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const price = ethers.utils.parseUnits(formInputPrice, 'ether');
    const contract = fetchContract(signer);
    const listingPrice = await contract.getListingPrice();

    const transaction = !isReselling
      ? await contract.createToken(url, price, { value: listingPrice.toString() })
      : await contract.resellToken(id, price, { value: listingPrice.toString() });

    setIsLoadingNFT(true);
    await transaction.wait();
  };

  const fetchNFTs = async () => {
    setIsLoadingNFT(false);

    // Use environment variable for RPC URL, fallback to localhost for development
    const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || 'http://localhost:8545';
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const contract = fetchContract(provider);

    const data = await contract.fetchMarketItems();

    const items = await Promise.all(data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
      const tokenURI = await contract.tokenURI(tokenId);
      const { data: { image, name, description } } = await axios.get(tokenURI);
      const price = ethers.utils.formatUnits(unformattedPrice.toString(), 'ether');

      return {
        price,
        tokenId: tokenId.toNumber(),
        seller,
        owner,
        image,
        name,
        description,
        tokenURI,
      };
    }));

    return items;
  };

  const createNFT = async (formInput, fileUrl, router) => {
    const { name, description, price } = formInput;

    if (!name || !description || !price || !fileUrl) return;

    const data = JSON.stringify({ name, description, image: fileUrl });
    const gatewayUrl = process.env.NEXT_PUBLIC_IPFS_GATEWAY_URL || 'http://93.127.185.55:8080';
    try {
      // Check if IPFS client is properly initialized
      if (!client.current) {
        throw new Error('IPFS client not initialized.');
      }
      
      const added = await client.current.add({ content: data });
      const url = `${gatewayUrl}/ipfs/${added.path}`;
      await createSale(url, price, false, null);
      router.push('/');
    } catch (error) {
      console.error('Error uploading to file to IPFS. Details: ', error);
      alert('Failed to create NFT. Check console for details.');
    }
  };

  const buyNFT = async (nft) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');

    const transaction = await contract.createMarketSale(nft.tokenId, { value: price });

    setIsLoadingNFT(true);
    await transaction.wait();
    setIsLoadingNFT(false);
  };

  const fetchMyNFTsOrListedNFTs = async (type) => {
    setIsLoadingNFT(false);

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);

    const data = type === 'fetchItemsListed'
      ? await contract.fetchItemsListed()
      : await contract.fetchMyNFTs();

    const items = await Promise.all(data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
      const tokenURI = await contract.tokenURI(tokenId);
      const { data: { image, name, description } } = await axios.get(tokenURI);
      const price = ethers.utils.formatUnits(unformattedPrice.toString(), 'ether');

      return {
        price,
        tokenId: tokenId.toNumber(),
        seller,
        owner,
        image,
        name,
        description,
        tokenURI,
      };
    }));

    return items;
  };

  useEffect(() => {
    const init = async () => {
      checkIfWalletIsConnected();
      // No auth needed for self-hosted IPFS
      auth.current = '';
      client.current = getClient();
    };
    init();
  }, []);

  return (
    <NFTContext.Provider value={{ nftCurrency, connectWallet, currentAccount, uploadToIPFS, createNFT, fetchNFTs, fetchMyNFTsOrListedNFTs, buyNFT, createSale, isLoadingNFT }}>
      {children}
    </NFTContext.Provider>
  );
};
