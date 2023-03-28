import { Users } from '@/components';
import { useGlobalContext } from '@/context';
import Link from 'next/link';
import { Container } from './styles';

export default function BackendTest() {
  const { handleAddNewUser, handleRemoveLastUser, handleUpdateLastUser } = useGlobalContext();

  return (
    <Container>
      <button onClick={handleAddNewUser}>Adicionar novo user</button>
      <button onClick={handleUpdateLastUser}>Atualiza último user</button>
      <button onClick={handleRemoveLastUser}>Remover último user</button>
      <Link href='/'>Ver users</Link>
    </Container>
  );
}
