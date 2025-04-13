import React from 'react';
import Uperbar from '../../../layouts/merchant/Uperbar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="main">
      <Uperbar />
      <div className="toolbar-spacer"/> {/* Spacer for fixed AppBar */}
      <div className="content">
        <h2>This is some content below the AppBar</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore ex rem cupiditate hic
          repellat! Adipisci, quisquam? Earum officiis repellat eius non repudiandae dolor, magnam,
          distinctio debitis quas sapiente iure hic nulla incidunt vel magni optio consequuntur
          illum deleniti...
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
