import axios from 'axios';
import React, { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './IPTracer.css';

function IPTracer() {
  const [apiData, setApiData] = useState([]);
  const [ipInput, setIpInput] = useState('');
  function IPInput() {
    console.log('hello', ipInput);
    axios
      .get(`http://ipinfo.io/${ipInput}/json?token=8e2c4a5c82becc`)
      .then((data) => {
        setApiData(data.data);
        console.log(data.data);
      });
  }
  return (
    <div>
      <BurgerMenu />
      <header className="IPTracer">
        <p>
          This is a simple input to find the location of a given IPv4 address
          using the{' '}
          <a target="_blank" rel="noreferrer" href="https://ipinfo.io">
            IPInfo
          </a>{' '}
          api
        </p>
        <input
          type="text"
          id="userIP"
          onChange={(e) => setIpInput(e.target.value)}
        />
        <button onClick={IPInput}>Locate IP!</button>
        <div className="info">
          {apiData.ip && <div className="city">IP: {apiData?.ip}</div>}
          {apiData.loc && (
            <div className="city">Longitude/Latitude: {apiData?.loc}</div>
          )}
          {apiData.country && (
            <div className="city">Country: {apiData?.country}</div>
          )}
          {apiData.region && (
            <div className="city">State: {apiData?.region}</div>
          )}
          {apiData.city && <div className="city">City: {apiData?.city}</div>}
        </div>
      </header>
    </div>
  );
}
export default IPTracer;
