// eslint-disable-next-line react/prop-types
const Square = ({ value, onClick }) => {

  const squareStyle = {
    width: '60px',
    height: '60px',
    backgroundColor: '#ddd',
    margin: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    color: 'black',
    fontWeight: 'bold',
  }

  return (
    <div
      className="square"
      onClick={onClick}
      style={squareStyle}
    >
      {value}
    </div>
  )
}
export default Square