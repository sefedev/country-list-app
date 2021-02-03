import { BrowserRouter as Router, Switch } from "react-router-dom";

export default function AppProvider({ children }) {
	return (
		<Router>
			<Switch>{children}</Switch>
		</Router>
	);
}
