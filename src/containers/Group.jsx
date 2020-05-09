import { connect } from 'react-redux';
import Group from "../components/Group/Group";

const mapStateToProps = state => ({
    items: state.catalogReducer.items
});

export default connect (
    mapStateToProps,
)(Group);