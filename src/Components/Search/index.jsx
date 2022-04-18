import { Card } from "../Card";
import { useState } from "react";
import { FormStyle } from "./style";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Search = () => {
  const [repos, setRepos] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  const dataApi = (inputSearch) => {
    axios.get(`https://api.github.com/repos/${inputSearch}`).then((res) => {
      const repoExists = repos.find((repo) => repo.id === res.data.id);
      if (repoExists === undefined) {
        setRepos([...repos, res.data]);
        toast.success("Repositório encontrado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.warn("Repositório já encontrado.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch(() => {
      toast.error('Repositório não encontrado. Tente novamente.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    })
  };

  const handleClick = () => {
    dataApi(inputSearch);
  };

  return (
    <>
      <FormStyle onSubmit={(event) => event.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Digite o repositório"
            onChange={(event) => setInputSearch(event.target.value)}
          />
          <button onClick={handleClick}>Buscar</button>
        </div>
        <span>Ex.: facebook/react-native</span>
      </FormStyle>
      {repos.length > 0 && <Card repos={repos} />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};
