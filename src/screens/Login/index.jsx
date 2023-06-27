
import {useState} from 'react';
import {LoginComponent} from "../../components/LoginComponent";

const Login = () => {
  const [value, onChangeText] = useState('');
  return (
    <LoginComponent value={value} onChangeText={onChangeText} />
  );
};

export default Login;
