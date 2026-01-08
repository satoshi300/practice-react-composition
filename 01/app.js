import React from 'react';
import { createRoot } from 'react-dom/client';

import  Table  from './Table';
import data from './data.json';

function App() {
    return <Table data={data} /> // props data przekazuje dane do Table

}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
