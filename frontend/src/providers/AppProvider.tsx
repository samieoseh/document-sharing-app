import AppContext from "@/contexts/AppContext";
import { useState } from "react";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [action, setAction] = useState<string | null>(null);
  return (
    <AppContext.Provider value={{ action, setAction }}>
      {children}
    </AppContext.Provider>
  );
}
