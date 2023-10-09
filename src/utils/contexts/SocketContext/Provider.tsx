'use client';

import useSocket from '@/utils/hooks/useSocket';
import { useEffect, useReducer } from 'react';
import {
  SocketContextProvider,
  SocketReducer,
  defaultScoketContextState,
} from './Context';

export default function SocketContextProviderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [SocketState, SocketDispatch] = useReducer(
    SocketReducer,
    defaultScoketContextState,
  );
  // if dev use localhost, if prod use server
  const url =
    process.env.NODE_ENV === 'development'
      ? 'ws://localhost:3001'
      : 'ws://movie-app-server.up.railway.app';

  const socket = useSocket(url, {
    reconnectionAttempts: 5,
    reconnectionDelay: 5000,
    autoConnect: false,
  });

  const StartListeners = () => {
    /** User connected event */
    socket.on('user_connected', (users: string[]) => {
      console.info('User connected event received!');
      SocketDispatch({ type: 'update:users', payload: users });
    });

    /** User disconnected event */
    socket.on('user_disconnected', (uid: string) => {
      console.info('User disconnected event received!');
      SocketDispatch({ type: 'remove:user', payload: uid });
    });

    /** Reconnect event */
    socket.io.on('reconnect', (attempt: number) => {
      console.info(`Reconnected after ${attempt} attempts`);
    });

    /** Reconnect attempt event */
    socket.io.on('reconnect_attempt', (attempt: number) => {
      console.info(`Trying and reconnect. ${attempt} attempts`);
    });

    /** Reconnect error event */
    socket.io.on('reconnect_error', (error: Error) => {
      console.info(`Error while trying to reconnect. ${error}`);
    });

    /** Reconnect failed event */
    socket.io.on('reconnect_failed', () => {
      console.info(`Failed to reconnect`);

      // eslint-disable-next-line no-alert
      alert('Failed to reconnect to socket');
    });
  };

  const SendHandshake = () => {
    console.info('Sending handshake to server...');

    socket.emit('handshake', (uid: string, users: string[]) => {
      console.info('User handshake callback message received!');
      SocketDispatch({ type: 'update:uid', payload: uid });
      SocketDispatch({ type: 'update:users', payload: users });
    });
  };

  useEffect(() => {
    /** Connect to the Web Socket */
    socket.connect();

    /** Save the socket in context */
    SocketDispatch({ type: 'update:socket', payload: socket });

    /** Start event listners */
    StartListeners();

    /** Send the handshake */
    SendHandshake();
  }, []);

  return (
    <SocketContextProvider value={{ SocketState, SocketDispatch }}>
      {children}
    </SocketContextProvider>
  );
}
