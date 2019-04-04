import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

export default class UserList extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<List {...this.props}>
				<Datagrid rowClick="edit">
					<TextField source="id" />
					<TextField source="name" />
					<TextField source="username" />
					<EmailField source="email" />
					<TextField source="address.street" />
					<TextField source="phone" />
					<TextField source="website" />
					<TextField source="company.name" />
				</Datagrid>
			</List>
		);
	}
}
