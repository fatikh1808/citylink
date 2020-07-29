import { connect } from 'react-redux';
import {deleteItem, getBoughtItem} from "../actions";
import { stepperGo } from "../actions";
import { bindActionCreators } from "redux";

import Cart from "../components/Cart/Cart";

const mapStateToProps = state => ({
    boughtItems: state.cartReducer.boughtItems.filter(item => item.customerId === state.authReducer.userId),
    firstCart: state.stepperReducer.firstCart,
    secondCart: state.stepperReducer.secondCart,
    thirdCart: state.stepperReducer.thirdCart,
    fourthCart: state.stepperReducer.fourthCart,
    fifthCart: state.stepperReducer.fifthCart
});

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteItem,
    stepperGo,
    getBoughtItem
}, dispatch);

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Cart);