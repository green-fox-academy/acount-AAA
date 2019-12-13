import { connect } from 'react-redux';
import postNewAccountAction from '../actions/postNewAccountAction';
import CreateNewAccountScreen from '../screens/CreateNewAccountScreen';

const mapStateToProps = ({ userReducer, accountsReducer }) => ({
  token: userReducer.user.token,
  status: accountsReducer.status,
  accountsList: accountsReducer.accounts.map((account) => account.depositName),
});

const mapDispatchToProps = (dispatch) => ({
  postNewAccount: (accountName, token) => { dispatch(postNewAccountAction(accountName, token)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewAccountScreen);
