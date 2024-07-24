import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

      <AuthInputContainer>
        <AuthInput
          label={"帳號"}
          placeholder={"請輸入帳號"}
          value={username}
          onChange={(inputUsername) => setUsername(inputUsername)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label={"Email"}
          placeholder={"請輸入 email"}
          value={email}
          onChange={(inputEmail) => setEmail(inputEmail)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label={"密碼"}
          placeholder={"請輸入密碼"}
          value={password}
          onChange={(inputPassword) => setPassword(inputPassword)}
          type="password"
        />
      </AuthInputContainer>
      <AuthButton>註冊</AuthButton>
      <Link to="/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
