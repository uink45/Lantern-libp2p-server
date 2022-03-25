import React, { useState, useEffect } from 'react';
import axios from 'axios';



const ServerData = () => {
    const [peerCount, setStatus] = useState(0);
    const [slot, setSlot] = useState(0);
    const [blockRoot, setBlockRoot] = useState("");
    const [stateRoot, setStateRoot] = useState("");
    const [syncCommitteeBits, setSyncCommitteeBits] = useState("");
    const [syncCommitteeSignature, setSyncCommitteeSig] = useState("");
    useEffect(() => {
        fetchStatus();
    }, []);
    const fetchStatus = () => {
        axios
          .get('/status')
          .then((res) => {
            console.log(res);
            setStatus(res.data.peerCount);
            setSlot(res.data.latestBlock.slot)
            setBlockRoot(res.data.latestBlock.blockRoot)
            setStateRoot(res.data.latestBlock.stateRoot)
            setSyncCommitteeBits(res.data.latestBlock.syncAggregate.syncCommitteeBits)
            setSyncCommitteeSig(res.data.latestBlock.syncAggregate.syncCommitteeSignature)
          })
          .catch((err) => {
            console.log(err);
         });
    };
    
  return (
      <div>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '40vh', backgroundColor: 'black'}}>
       
            <h1 style={{color: "white", height: '25vh', fontSize: '60px'}}>Libp2p server</h1>            
        </div>
        <p style={{color: "black", fontSize: '20px'}}>Peer count: {peerCount} </p>
        <p style={{color: "black", fontSize: '20px'}}>Slot: {slot}</p>
        <p style={{color: "black", fontSize: '20px'}}>Block root: {blockRoot}</p>
        <p style={{color: "black", fontSize: '20px'}}>State root: {stateRoot}</p>
        <p style={{color: "black", fontSize: '20px'}}>Sync committee bits: {syncCommitteeBits}</p>
        <p style={{color: "black", fontSize: '20px'}}>Sync committee signtaure: {syncCommitteeSignature}</p>

      </div>
    

  );
};
export default ServerData;