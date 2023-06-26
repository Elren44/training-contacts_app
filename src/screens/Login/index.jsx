import {View, Text} from 'react-native';
import Input from '../../components/common/Input';
import {useState} from 'react';
import Container from '../../components/common/Container';

const Login = () => {
  const [value, onChangeText] = useState('');
  return (
    <Container>
      <Input
        label="Имя пользователя"
        value={value}
        onChangeText={text => onChangeText(text)}
        // icon={<Text>HIDE</Text>}
        // iconPosition="right"
        placeholder="Ваше имя..."
        error="Это поле обязательное"
      />
      <Input
        label="Пароль"
        value={value}
        onChangeText={text => onChangeText(text)}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        placeholder="Введите пароль..."
        error="Это поле обязательное"
      />
    </Container>
  );
};

export default Login;
