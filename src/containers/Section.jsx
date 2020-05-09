import { connect } from 'react-redux';
import Section from "../components/Section/Section";
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
)(Section);