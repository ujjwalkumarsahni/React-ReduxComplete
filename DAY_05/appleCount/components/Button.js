const Button = ({imageUrl,clickHandelar}) => {
  return (
    <button onClick={clickHandelar}>
        <img src={imageUrl} alt="image" />
    </button>
  )
}
export default Button
