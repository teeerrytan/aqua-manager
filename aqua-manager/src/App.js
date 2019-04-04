import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import { UserList, UserEdit, UserCreate } from "./users";
import { Dashboard } from "./Dashboard";
import authProvider from "./authProvider";
import jsonServerProvider from "ra-data-json-server";
import englishMessages from "ra-language-english";
import chineseMessages from "ra-language-chinese";

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
		dashboard={Dashboard}
		dataProvider={dataProvider}
		authProvider={authProvider}
		locale="cn"
		i18nProvider={i18nProvider}
	>
		<Resource
			name="users"
			list={UserList}
			edit={UserEdit}
			create={UserCreate}
		/>
		<Resource name="posts" list={ListGuesser} />
	</Admin>
);

export default App;
