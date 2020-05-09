import { connect } from 'react-redux';
import Bar from "../components/Bar/Bar";

const mapStateToProps = state => ({
    items: state.catalogReducer.items
});

export default connect (
    mapStateToProps,
)(Bar);