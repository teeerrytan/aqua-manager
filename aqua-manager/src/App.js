import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import { UserList, UserEdit, UserCreate } from "./users";
import { Dashboard } from "./Dashboard";
import authProvider from "./authProvider";
import jsonServerProvider from "ra-data-json-server";
import englishMessages from "ra-language-english";
import chineseMessages from "ra-language-chinese";
import NotFound from "./NotFound";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	// palette: {
	// 	type: "dark" // Switching the dark mode on is a single property value change.
	// },
	palette: {
		primary: {
			light: "#5c6d7e",
			main: "#34495e",
			dark: "#243341",
			contrastText: "#fff"
		},
		secondary: {
			light: "#5cace2",
			main: "#3498db",
			dark: "#246a99",
			contrastText: "#fff"
		}
	}
});

const messages = {
	cn: chineseMessages,
	en: englishMessages
};
const i18nProvider = locale => messages[locale];

const dataProvider = jsonServerProvider(
	"https://my-json-server.typicode.com/teeerrytan/aqua-manager"
);

//http://jsonplaceholder.typicode.com
const App = () => (
	<Admin
		theme={theme}
		dashboard={Dashboard}
		dataProvider={dataProvider}
		authProvider={authProvider}
		locale="cn"
		i18nProvider={i18nProvider}
		title="客户库存管理平台"
		catchAll={NotFound}
	>
		<Resource
			name="客户"
			list={UserList}
			edit={UserEdit}
			create={UserCreate}
		/>
		<Resource name="posts" list={ListGuesser} />
	</Admin>
);

export default App;
