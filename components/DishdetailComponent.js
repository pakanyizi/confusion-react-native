import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import {DISHES} from '../shared/dishes'

const RenderDish = props => {
  const dish = props.dish

  if (dish != null) {
    return (
      <Card
        featuredTitle={DishDetail.name}
        image={require('./images/uthappizza.png')}
      >
        <Text style={{ margin: 10 }}>{dish.description}</Text>
      </Card>
    )
  } else return <View />
}

class DishDetail extends Component {

  constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES
      };
  }

  static navigationOptions = {
      title: 'Dish Details'
  };

  render() {
      const dishId = this.props.navigation.getParam('dishId','');
      return(
          <RenderDish dish={this.state.dishes[+dishId]} />
      );
  }
}

export default DishDetail
