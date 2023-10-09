'use client';

import SocketContext from '@/utils/contexts/SocketContext/Context';
import { useContext } from 'react';

export default function Home() {
  const { users } = useContext(SocketContext).SocketState;
  return (
    <main className="flex flex-col">
      <h1 className="text-3xl font-bold">Users</h1>
      {users.map((user) => {
        return <div key={user}>{user}</div>;
      })}
    </main>
  );
}
