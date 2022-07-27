const Teste = () => {
  return (
    <form
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onSubmit={() => {
        alert('foi')
      }}>
      <label>Teste:</label>
      <br />
      <input
        type="text"
        id="fname"
        name="fname"
        data-testid="input-teste"
        style={{ width: '300px', marginBottom: '16px' }}
      />
      <button
        type="submit"
        value="Submit"
        data-testid="btn-teste"
        style={{ width: '300px', height: '50px' }}>
        submit
      </button>
    </form>
  )
}

export default Teste
