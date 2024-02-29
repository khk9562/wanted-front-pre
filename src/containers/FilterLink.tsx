import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import { Dispatch } from "redux";
import Link from "../components/Link";

interface RootState {
  visibilityFilter: string;
}

interface OwnProps {
  filter: string;
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
