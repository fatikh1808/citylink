import { connect } from 'react-redux';
import Bar from "../components/Bar/Bar";
import {bindActionCreators} from "redux";
import {getItem, handleLogout} from "../actions";

const mapStateToProps = state => ({
    items: state.catalogReducer.catalog.filter(item => item.type === "categories"),
    isAuthenticated: state.authReducer.isAuthenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getItem,
    handleLogout
}, dispatch);


export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Bar);