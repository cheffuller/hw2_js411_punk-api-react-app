import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Component } from 'react';
import Beer from './Beer';
import { Container, Row } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get('https://api.punkapi.com/v2/beers');
    this.setState({
      beers: response.data,
    });
    await console.log(this.state.beers)
  }

  render() {
    return (
      <Container fluid>
        <h1>Craft Beer - For the People</h1>
        <Row xs={1} md={2} className="g-4">
          {this.state.beers.map((beer) => (
            <Beer beer={{ ...beer }} key={beer.id} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default App;
