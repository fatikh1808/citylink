import { connect } from 'react-redux';
import Register from "../components/Register/Register";
import {bindActionCreators} from "redux";
import {
    handleRegisterSubmit,
} from "../actions";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
    handleRegisterSubmit
}, dispatch);


export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(Register);