import { connect } from 'react-redux';
import Group from "../components/Group/Group";
import {bindActionCreators} from "redux";
import {buyItem, findId} from "../actions";

const mapStateToProps = state => ({
    catalog: state.catalogReducer.catalog.filter(item => item.type === "categories"),
    groups: state.catalogReducer.groups.filter(item => item.type === "group"),
    section: state.catalogReducer.section.filter(item => item.type === "section")
});

const mapDispatchToProps = dispatch => bindActionCreators({
    findId,
    buyItem
}, dispatch);


export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Group);