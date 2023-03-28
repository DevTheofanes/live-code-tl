import React, { createContext, ReactNode, useCallback, useState } from 'react';

/**
 * Utilizar tipagens corretas nas props da interface
 */
export interface GlobalContextProps {
  isLoading: any;
  setIsLoading: any;
  handleGetUsers: any;
  handleAddNewUser: any;
  handleUpdateLastUser: any;
  handleRemoveLastUser: any;
}

interface GlobalProviderProps {
  children: ReactNode;
}

const defaultValue = {};

const GlobalContext = createContext<GlobalContextProps>({ ...defaultValue } as GlobalContextProps);

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }: GlobalProviderProps) => {
  const [isLoading, setIsLoading] = useState();

  const handleGetUsers = useCallback(() => {
    /**
     * Criar tratativa para exibir loading e fazer chamada da função que chama ao backend
     * Salvar resposta do endpoint em um state e utiliza-lo no projeto
     */
  }, []);

  //Handlers para endpoints adicionais, pode passar dados mocados para os endpoints
  const handleAddNewUser = () => {
    // Funcionalidade que aciona endpoint de criar novo usuário
  };

  const handleUpdateLastUser = () => {
    // Funcionalidade que aciona endpoint de atualizar o ultimo registro de usuário
  };

  const handleRemoveLastUser = () => {
    // Funcionalidade que aciona endpoint de atualizar o ultimo registro de usuário
  };

  return (
    <GlobalContext.Provider
      value={{
        handleGetUsers,
        isLoading,
        setIsLoading,
        handleAddNewUser,
        handleUpdateLastUser,
        handleRemoveLastUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = (): GlobalContextProps => {
  return React.useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider, useGlobalContext };
