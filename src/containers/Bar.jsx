import { connect } from 'react-redux';
import Bar from "../components/Bar/Bar";
import {bindActionCreators} from "redux";
import {findId} from "../actions";

const mapStateToProps = state => ({
    items: state.catalogReducer.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
    findId
}, dispatch);


export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Bar);