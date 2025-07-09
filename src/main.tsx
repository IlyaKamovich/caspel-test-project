import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { TableDataProvider } from './context/TableDataContext.tsx';

import '@ant-design/v5-patch-for-react-19';

import './index.css';

const root = document.querySelector('#caspel-test-project') as Element;

ReactDOM.createRoot(root).render(
	<StrictMode>
		<TableDataProvider>
			<App />
		</TableDataProvider>
	</StrictMode>,
);
