import './NewPost.css'

const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Inserir novo post:</h2>

      <form>
        <div className="form-control">
          <label htmlFor="title">Títutlo</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" placeholder="Digite o conteúdo"></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn"/>
      </form>
    </div>
  );
};

export default NewPost;
