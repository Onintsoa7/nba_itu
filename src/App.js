import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './css/style.css';

function App() {
  const PlayerTable = () => {
    const staticData = [
      { 
        id: 1, 
        classement: 1, 
        joueur: 'Player 1', 
        equipe: 'Team A', 
        minutes: 120, 
        minute_jouee: 110, 
        point_par_match: 25, 
        repond_par_match: 8, 
        passe_decissive_par_match: 5, 
        minute_par_match: 32, 
        pourcentage: 60, 
        troispts: 10, 
        lancerfront: 80 
      },
      { 
        id: 2, 
        classement: 2, 
        joueur: 'Player 2', 
        equipe: 'Team B', 
        minutes: 110, 
        minute_jouee: 100, 
        point_par_match: 22, 
        repond_par_match: 6, 
        passe_decissive_par_match: 4, 
        minute_par_match: 28, 
        pourcentage: 55, 
        troispts: 8, 
        lancerfront: 85 
      },
      // Add more static data as needed
    ];
    // const [playerData, setPlayerData] = useState([]);
  
    // useEffect(() => {
    //   axios.get('your_web_service_url')
    //     .then(response => setPlayerData(response.data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []); 
  
  return (
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <h2 class="heading-section">Statistique NBA</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="table-wrap">
              <table class="table">
                <thead class="thead-primary">
                  <tr>
                    <th>CLASSEMENT</th>
                    <th>JOUEUR</th>
                    <th>EQUIPE</th>
                    <th>MINUTES</th>
                    <th>MINUTE_JOUEE</th>
                    <th>POINT_PAR_MATCH</th>
                    <th>REPOND_PAR_MATCH</th>
                    <th>PASSE_DECISSIVE_PAR_MATCH</th>
                    <th>MINUTE_PAR_MATCH</th>
                    <th>POURCENTAGE</th>
                    <th>3PTS</th>
                    <th>LANCERFRONT</th>
                  </tr>
                </thead>
                <tbody>
                {staticData.map(player => (
                <tr key={player.id}>
                  <td>{player.classement}</td>
                  <td>{player.joueur}</td>
                  <td>{player.equipe}</td>
                  <td>{player.minutes}</td>
                  <td>{player.minute_jouee}</td>
                  <td>{player.point_par_match}</td>
                  <td>{player.repond_par_match}</td>
                  <td>{player.passe_decissive_par_match}</td>
                  <td>{player.minute_par_match}</td>
                  <td>{player.pourcentage}</td>
                  <td>{player.troispts}</td>
                  <td>{player.lancerfront}</td>
                </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}}

export default App;
