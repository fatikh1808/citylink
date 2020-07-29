import { connect } from 'react-redux';
import Group from "../components/Group/Group";
import {bindActionCreators} from "redux";
import {buyItem} from "../actions";

const mapStateToProps = state => ({
    catalog: state.catalogReducer.catalog.filter(item => item.type === "categories"),
    groups: state.catalogReducer.catalog.filter(item => item.type === "group"),
    section: state.catalogReducer.catalog.filter(item => item.type === "section")
});

const mapDispatchToProps = dispatch => bindActionCreators({
    buyItem
}, dispatch);


export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Group);