import { connect } from 'react-redux';
import Item from '../components/Item/Item'
import {bindActionCreators} from "redux";
import { buyItem, getBoughtItem } from '../actions'

const mapStateToProps = state => ({
    items: state.catalogReducer.catalog.filter(item => item.type === "item"),
    customerId: state.authReducer.userId
});

const mapDispatchToProps = dispatch => bindActionCreators({
    buyItem,
    getBoughtItem
}, dispatch);

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Item);