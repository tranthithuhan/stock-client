import React from 'react'
import { Layout } from 'antd'
import Stock from './components/Stock'
import StockTable from './components/StockTable'

const { Header, Content } = Layout

function App () {
  return (
    <div className="App" data-testid="App">
      <Layout>
        <Header className="header" data-testid="header">Cours du CAC40 et du NASDAQ</Header>

        <Content>
          <Stock/>

          <StockTable/>
        </Content>
      </Layout>
    </div>
  )
}

export default App
