import React from 'react';

class GetGiftsList extends React.Component {
  constructor(){
    super ()
    this.state = {
      GiftList : []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/children')
    .then(response => response.json())
    .then(data => this.setState({GiftList : data}))
  }


  render(

  )
  {
    return (
  <div>{this.state.GiftList.map(gift => <p>{gift.name}</p>)}</div>  //ASI => Recherche GOOGLE
    )}
}

export default GetGiftsList