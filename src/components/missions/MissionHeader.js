import React from 'react';

export default function MissionHeader() {
  return (
    <div>
      <ul style={{
        listStyle: 'none', display: 'flex', justifyContent: 'space-between', fontWeight: '900', fontSize: '20px', border: '1px solid grey',
      }}
      >
        <li style={{ width: '10%' }}>Missions</li>
        <li style={{ width: '50%' }}>Description</li>
        <li style={{ width: '10%' }}>Status</li>
        <li style={{ width: '10%' }} />
      </ul>
    </div>
  );
}
