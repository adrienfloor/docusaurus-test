import React from 'react'
import Layout from '@theme/Layout'

function TestComponent() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          <div>Test Component Linxo</div>
          Edit <code>pages/TestComponent.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  )
}
export default TestComponent