
import {useContext, useEffect, useState} from 'react';
import {LoginComponent} from "../../components/LoginComponent";
import { useRoute} from "@react-navigation/native";
import {GlobalContext} from "../../context/Provider";
import loginUser from "../../context/actions/auth/loginUser";

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);

  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true)
      setForm({...form, userName: params.data.username})
    }
  }, [params])

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
    setJustSignedUp(false)
    setForm({...form, [name]: value});
  }

  return (
    <LoginComponent onSubmit={onSubmit} form={form} error={error} loading={loading}
                    onChange={onChange} justSignedUp={justSignedUp}/>
  );
};

export default Login;
