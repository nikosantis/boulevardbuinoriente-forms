import Head from 'next/head'
import fetch from 'node-fetch'
import { formatData } from '../lib/formatData'
import Table from '../components/table'

export default function Home ({ dataForm }) {
  return (
    <main>
      <Head>
        <title>Formularios Buin Oriente Stripcenter</title>
      </Head>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='mb-5'>Formularios de Contacto</h1>
          </div>

          <Table data={dataForm} />
        </div>
      </div>

      <style jsx>
        {`
          main {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </main>
  )
}

export async function getStaticProps () {
  const res = await fetch(process.env.API)
  const json = await res.json()
  const data = formatData(json.data)

  return {
    props: {
      dataForm: data
    }
  }
}
