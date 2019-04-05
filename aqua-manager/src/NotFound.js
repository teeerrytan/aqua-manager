import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

export default () => (
	<Card>
		<Title title="页面未找到" />
		<CardContent>
			<h1>404: 页面未找到</h1>
		</CardContent>
	</Card>
);
