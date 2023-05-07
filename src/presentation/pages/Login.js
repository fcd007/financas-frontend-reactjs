import React from 'react';
import Card from '../components/Card';
import FormularioLogin from '../components/FormularioLogin';

class Login extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6' style={{position: 'relative', left: '300px'}}>
            <div className='bs-docs-section'>
              <Card title="Login">
                <FormularioLogin />
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;