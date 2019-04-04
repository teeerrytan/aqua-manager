import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { changeLocale as changeLocaleAction } from "react-admin";

class LocaleSwitcher extends Component {
	switchToChinese = () => this.props.changeLocale("cn");
	switchToEnglish = () => this.props.changeLocale("en");

	render() {
		const { changeLocale } = this.props;
		return (
			<div>
				<div>Language</div>
				<Button onClick={this.switchToEnglish}>English</Button>
				<Button onClick={this.switchToChinese}>中文</Button>
			</div>
		);
	}
}

export default connect(
	undefined,
	{ changeLocale: changeLocaleAction }
)(LocaleSwitcher);
