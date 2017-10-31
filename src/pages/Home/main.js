import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Columns from 'grommet/components/Columns';
import styled from 'styled-components'
import Paragraph from 'grommet/components/Paragraph'
import Label from 'grommet/components/Label'
import { Card, Container } from 'semantic-ui-react'
import redux from '../../../static/redux.png'
import InfiniteScroll from 'react-infinite-scroller'

const JWBlackLabel = styled(Label)
`
  color: #000000;
`

const MainBox = styled(Box)
`

`

const loadFunc = (props) => props.initState()

const addSize = url => url.replace('%%x', '400X')

export default class Home extends Component {

  // componentDidMount() {
  //   this.props.initState()
  // }

  render() {
    return (
      <InfiniteScroll
        threshold={10}
        pageStart={0}
        loadMore={() => loadFunc(this.props)}
        hasMore={this.props.hasMore}
        loader={<div className="loader">Loading...</div>}>
        <MainBox direction='column' align='center' alignSelf='center' justify='center' pad='large' >
          <Columns size='small' justify='between'>
            {this.props.results.map((result, index) =>
              <Card onClick={() => this.props.showModal(result.image_url.replace('%%X', '400X'))}
                key={index} color='black' image={result.image_url.replace('%%X', '400X')} />
            )}
          </Columns>
        </MainBox>
      </InfiniteScroll>
    )
  }
}

Home.PropTypes = {
  initState: PropTypes.func,
  showModal: PropTypes.func
}
