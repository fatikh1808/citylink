import { connect } from 'react-redux';
import { deleteItem } from "../actions";
import { bindActionCreators } from "redux";

import FourthCart from "../components/Cart/FourthCart";

const mapStateToProps = state => ({
    boughtItems: state.catalogReducer.catalog.filter(item => item.id === state.cartReducer.boughtItems)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteItem,
}, dispatch);

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(FourthCart);