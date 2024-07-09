import { createContext, ReactNode, useState } from 'react';

interface UserContextType {
  data: {
    user: string;
    password: string;
  };
  setData: (data: { user: string; password: string }) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [data, setData] = useState<{ user: string; password: string }>({ user: '', password: '' });

  return <UserContext.Provider value={{ data, setData }}>{children}</UserContext.Provider>;
}
export { UserContext };
export default UserProvider;
