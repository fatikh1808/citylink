import { connect } from 'react-redux';
import Section from "../components/Section/Section";
import {bindActionCreators} from "redux";
import { buyItem } from '../actions'

const mapStateToProps = state => ({
    section: state.catalogReducer.section.filter(item => item.type === "section"),
    groups: state.catalogReducer.groups.filter(item => item.type === "group"),
    items: state.catalogReducer.items.filter(item => item.type === "item")
});

const mapDispatchToProps = dispatch => bindActionCreators({
    buyItem
}, dispatch);

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Section);