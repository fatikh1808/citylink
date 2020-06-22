import { connect } from 'react-redux';
import Catalog from "../components/Catalog/Catalog";
import {bindActionCreators} from "redux";
import {findId, buyItem} from "../actions";

const mapStateToProps = state => ({
    catalog: state.catalogReducer.catalog.filter(item => item.type === "categories"),
    groups: state.catalogReducer.groups.filter(item => item.type === "group")
});

const mapDispatchToProps = dispatch => bindActionCreators({
    findId,
    buyItem
}, dispatch);


export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Catalog);