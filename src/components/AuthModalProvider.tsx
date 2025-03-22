'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type ModalType = 'login' | 'signup' | null;

interface AuthModalContextType {
  modalType: ModalType;
  openModal: (type: 'login' | 'signup') => void;
  closeModal: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(
  undefined
);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: 'login' | 'signup') => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <AuthModalContext.Provider value={{ modalType, openModal, closeModal }}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
}
