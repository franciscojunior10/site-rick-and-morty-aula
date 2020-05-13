import React from 'react';
import './styles/global.css';

import Button from './components/Button';
import Container from './components/Container';
import FormGroup from './components/FormGroup';
import Label from './components/Label';
import Select from './components/Select';
import CardContainer from './components/CardContainer';
import Loading from './components/Loading';

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from './components/Card';

import data from './data/data.json';

import { 
  isGender,
  filterByGender,
  isAlive,
  filterByStatus,
  getEpisodeFromURL,
  generateEpisodeList,
  mapCharacterToEpisodes,
  generateEpisodesCharacters
} from './utils';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      // name: 'ReactJS',
      characters: [],
      loading: false,
    }
    // console.log('Contructor');
  }

  componentDidMount() {
    // console.log('DidMount');

    // setTimeout(() => {
    //   this.setState({
    //     name: 'Vuejs',
    //     hide: true,
    //   })
    // }, 3000);

    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({
        characters: data.results,
        loading: false,
      })
    }, 2000)

  }

  componentDidUpdate() {
    // console.log('DidUpdate');
  }
  
  handleStatus(event, status) {
    event.preventDefault();

    let newCharacters = data.results;

    if (status !== '') {
      newCharacters = filterByStatus(data.results, status);
    }

    this.setState({
      characters: newCharacters,
    });
  }

  handleGender(event, gender) {
    event.preventDefault();

    let newCharacters = data.results;

    if (gender !== '') {
      newCharacters = filterByGender(data.results, gender);
    }

    this.setState({
      characters: newCharacters,
    });
  }

  handleChange(episode) {
    const episodes = generateEpisodesCharacters(data.results);
    this.setState({
      characters: episodes[episode],
    });
  }

  render() {
    // console.log('Render', this.state.name);

    // if (this.state.loading) {
    //   return <Loading />
    // }

    return (
      <Container>
        <FormGroup>
          <Label label="Status"/>
          <div>
            <Button 
              name="Todos" 
              onClick={event => this.handleStatus(event, '')}
            />
            <Button 
              name="Vivo"
              onClick={event => this.handleStatus(event, 'Alive')}  
            />
            <Button 
              name="Morto"
              onClick={event => this.handleStatus(event, 'Dead')}
            />
            <Button 
              name="Desconhecido"
              onClick={event => this.handleStatus(event, 'unknown')}
            />
          </div>
        </FormGroup>
  
        <FormGroup>
          <Label label="Sexo"/>
          <div>
            <Button
              name="Todos" 
              onClick={(event) => this.handleGender(event, '')}
            />
            <Button
              name="Homem" 
              onClick={(event) => this.handleGender(event, 'Male')}
            />
            <Button
              name="Mulher" 
              onClick={(event) => this.handleGender(event, 'Female')}
            />
            <Button
              name="Desconhecido"
              onClick={(event) => this.handleGender(event, 'unknown')}
            />
          </div>
        </FormGroup>
  
        <FormGroup>
          <Label label="Episódio" />
          {/* { this.state.hide ? true : <Select />}  */}
          <Select 
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            handleChange={(value) => this.handleChange(value)} 
          />
        </FormGroup>

        {this.state.loading ? <Loading /> : null}

        <CardContainer>
          {this.state.characters.map((character) => (
            <Card key={character.id}>
              <CardImg 
                image={character.image} 
                alt={character.name}
              />
              <CardBody>
                <CardTitle title={character.name} />
                <CardText text={`Situação: ${character.status}`} />
                <CardText text={`Sexo: ${character.gender}`} />
              </CardBody>
            </Card>
          ))}
        </CardContainer>
  
      </Container>
    );
  }
  
}

export default App;
