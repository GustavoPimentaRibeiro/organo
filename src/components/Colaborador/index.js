import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {} from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = ({
  id,
  nome,
  imagem,
  cargo,
  favorito,
  corDeFundo,
  aoDeletar,
  aoFavoritar,
}) => {
  const propsFavorito = { size: 25, onClick: () => aoFavoritar(id) };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart size={25} {...propsFavorito} color="#aa0000" />
          ) : (
            <AiOutlineHeart size={25} {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
