import { connect } from 'react-redux';
import { deleteItem } from "../actions";
import { bindActionCreators } from "redux";

import Cart from "../components/Cart/Cart";

const mapStateToProps = state => ({
    boughtItems: state.cartReducer.boughtItems
});

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteItem,
}, dispatch);

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Cart);