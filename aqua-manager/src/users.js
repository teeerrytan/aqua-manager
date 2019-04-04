import React from "react";
import {
	List,
	Datagrid,
	TextField,
	EmailField,
	Edit,
	SimpleForm,
	DisabledInput,
	ReferenceInput,
	SelectInput,
	LongTextInput,
	TextInput,
	Create
} from "react-admin";

export class UserList extends React.Component {
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

export const UserEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<DisabledInput source="id" />
			<ReferenceInput source="userid" reference="users">
				<SelectInput optionText="name" />
			</ReferenceInput>
			<TextInput source="title" />
			<LongTextInput source="body" />
		</SimpleForm>
	</Edit>
);

export const UserCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput source="userId" reference="users">
				<SelectInput optionText="name" />
			</ReferenceInput>
			<TextInput source="title" />
			<LongTextInput source="body" />
		</SimpleForm>
	</Create>
);
