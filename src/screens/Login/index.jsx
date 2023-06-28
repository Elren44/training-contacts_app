
import {useContext, useState} from 'react';
import {LoginComponent} from "../../components/LoginComponent";
import {useNavigation} from "@react-navigation/native";
import {GlobalContext} from "../../context/Provider";
import loginUser from "../../context/actions/auth/loginUser";

const Login = () => {
  const [form, setForm] = useState({});
  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      console.log(form)
      loginUser(form)(authDispatch)
    }
  }

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  }

  return (
    <LoginComponent onSubmit={onSubmit} form={form} error={error} loading={loading}
                    onChange={onChange} />
  );
};

export default Login;
