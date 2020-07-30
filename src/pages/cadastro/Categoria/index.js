import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria(){
    return (
      <PageDefault>
       <h1> Cadastrar Categorias </h1>

        <form>
          <label>
            Nome da Categoria
            <input type="text" />
          </label>
          <label>
            <button>
              Cadastrar
            </button>
          </label>
        </form>


        <Link to="/">
          Ir para o inicio.
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;