import { useEffect } from "react";
import { HomeArea } from "./HomeArea";
import { useTitlePage } from "../../hooks/useTitlePage";
import { Header } from "../../components/ui/headers/Header";

export const Home = () => {
  const { setPageTitle } = useTitlePage();
  useEffect(() => {
    setPageTitle("Danone - Inicio");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="d-flex">
      <Header />
      <HomeArea />
    </div>
  );
};
