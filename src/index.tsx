import React from 'react';
import ReactDOM from 'react-dom/client';
import Jumbotron from 'components/shared/Jumbotron';
import 'antd/dist/reset.css';
import 'assets/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Jumbotron
      title="Welcome to the Platform"
      subtitle="Your gateway to success"
      image="https://via.placeholder.com/400"
      description="Start your journey with us. Explore the possibilities and make the most of the platform."
      className="custom-jumbotron"
      style={{ backgroundColor: '#e0f7fa', color: '#006064' }}
    >
      <button style={{ padding: '10px 20px', backgroundColor: '#00796b', color: '#fff', border: 'none', borderRadius: '4px' }}>
        Get Started
      </button>
    </Jumbotron>
  </React.StrictMode>
);
