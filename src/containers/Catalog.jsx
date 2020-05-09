import { connect } from 'react-redux';
import Catalog from "../components/Catalog/Catalog";

const mapStateToProps = state => ({
    items: state.catalogReducer.items
});

export default connect (
    mapStateToProps,
)(Catalog);