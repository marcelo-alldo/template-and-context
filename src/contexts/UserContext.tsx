import { createContext, ReactNode, useEffect, useState } from 'react';

interface UserContextType {
  data: {
    user: string;
    password: string;
  };
  setData: (data: { user: string; password: string }) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [data, setData] = useState<{ user: string; password: string }>({ user: '', password: '' });

  useEffect(() => {
    if (data?.user) {
      localStorage.setItem('userLogged', JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const userLogged = localStorage.getItem('userLogged');
    if (userLogged) {
      setData(JSON.parse(userLogged));
    }
  }, []);

  function logout() {
    setData({ user: '', password: '' });
    localStorage.removeItem('userLogged');
  }

  return <UserContext.Provider value={{ data, setData, logout }}>{children}</UserContext.Provider>;
}
export { UserContext };
export default UserProvider;
