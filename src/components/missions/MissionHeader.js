import React from 'react';

import './missionHeader.css';

export default function MissionHeader() {
  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th style={{ paddingLeft: '30px' }}>Status</th>
          <th>  </th>
        </tr>
      </thead>
    </table>
  );
}
