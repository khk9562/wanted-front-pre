import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import { Dispatch } from "redux";
import Link from "../components/Link";

interface RootState {
  visibilityFilter: string; // visibilityFilter의 타입을 적절하게 정의해주세요.
  // 다른 상태 속성들도 필요에 따라 추가해주세요.
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
