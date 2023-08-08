import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

export default function Content() {
  return (
    <section className="content-block">
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className="main-block">
        <Main/>
      </div>
    </section>
  );
}
