import logo from './logo.svg';
import './App.css';
import '<../css/style.css'

function App() {
  return (
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <h2 class="heading-section">Table #01</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="table-wrap">
              <table class="table">
                <thead class="thead-primary">
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>markotto@email.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>jacobthornton@email.com</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>larrybird@email.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>johndoe@email.com</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Gary</td>
                    <td>Bird</td>
                    <td>garybird@email.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
