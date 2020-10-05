import React from 'react';
import { Form } from '@unform/web';

import { FiSearch } from 'react-icons/fi'
import logo from '../../assets/logo.svg';
import { Title, Container, User, Error } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Users: React.FunctionComponent = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore usuários e repositórios no GitHub.</Title>

      <Form onSubmit={handleSubmit}>
        <Container>
          <Input name="nickName" icon={FiSearch} placeholder="Digite o nome do usuário"/>
          <Button type="submit">Pesquisar</Button>
        </Container>
      </Form>

      {/* <User>
        {users.map((user) => (
          <Link key={user.login} to={`users/${user.login}`}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.login}</strong>
              <p>{user.name}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </User> */}
    </>
  );
};

export default Users;
