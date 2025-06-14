import { StrictMode } from 'react';

//====================================================================

import { createRoot } from 'react-dom/client'

//====================================================================

import { App } from "./App.jsx";

//====================================================================

import "./styles/resets.css";

//====================================================================

const root =
	document.querySelector
		("#root");

//====================================================================

createRoot(root).render(
	<StrictMode>
		<App></App>
	</StrictMode>
);
