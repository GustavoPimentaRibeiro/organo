import "./Campo.css";

const Campo = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  const placeholderModificada = `${placeholder}...`;
  const valorAdaptativo = type === "text" ? valor : "#ffffff";

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valorAdaptativo}
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default Campo;
