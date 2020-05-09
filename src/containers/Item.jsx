import { connect } from 'react-redux';
import Item from '../components/Item/Item'
import {bindActionCreators} from "redux";
import { buyItem } from '../actions'

const mapStateToProps = state => ({
    items: state.catalogReducer.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
    buyItem
}, dispatch);

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Item);