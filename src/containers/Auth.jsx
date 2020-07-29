import { connect } from 'react-redux';
import Auth from "../components/Auth/Auth";
import {bindActionCreators} from "redux";
import {
    handleAuthSubmit
} from "../actions";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
    handleAuthSubmit
}, dispatch);


export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Auth);