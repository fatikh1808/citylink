import { connect } from 'react-redux';
import Bar from "../components/Bar/Bar";
import {bindActionCreators} from "redux";

const mapStateToProps = state => ({
    items: state.catalogReducer.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);


export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Bar);