import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Columns from 'grommet/components/Columns'
import styled from 'styled-components'
import Paragraph from 'grommet/components/Paragraph'
import Label from 'grommet/components/Label'
import { Card, Container } from 'semantic-ui-react'
import redux from '../../../static/redux.png'
import InfiniteScroll from 'react-infinite-scroller'
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  WindowScroller,
  AutoSizer
} from 'react-virtualized'
import 'react-virtualized/styles.css';

const JWBlackLabel = styled(Label)
`
  color: #000000;
`

const MainBox = styled(Box)
`

`

const loadFunc = (props) => props.initState()

const addSize = url => url.replace('%%x', '400X')

const cache = new CellMeasurerCache({
  defaultHeight: 250,
  defaultWidth: 400,
  fixedWidth: true
})

const cellPositioner = createMasonryCellPositioner({
  cellMeasurerCache: cache,
  columnCount: 3,
  columnWidth: 400,
  spacer: 20
})

const cellRenderer = ({ index, key, parent, style }, results) => {
  const datum = results[index]
  return <CellMeasurer
    cache={cache}
    index={index}
    key={key}
    parent={parent}
         >
    <div className='cell' style={style}>
      <img
        src={datum.image_url.replace('%%X', '400x')}
        style={{
          height: (datum.image_height / datum.image_width) * 400,
          width: 400
        }}
      />
    </div>
  </CellMeasurer>
}

const renderAutoSizer = ({height, scrollTop}, results) => {
  return (<div>
    <AutoSizer
      disableHeight
      height={height}
      // onResize={this._onResize}
      overscanByPixels={0}
      scrollTop={scrollTop}>
      {(args) => renderMasonry(args, height, scrollTop, results)}
    </AutoSizer>
  </div>
  );
}

const renderMasonry = ({width}, height, scrollTop, results) => {
  return (
        <Masonry style={{'padding-left':'100px', 'padding-top':'60px' }}
          autoHeight={true}
          cellCount={results.length}
          cellMeasurerCache={cache}
          cellPositioner={cellPositioner}
          cellRenderer={(args) => cellRenderer(args, results)}
          height={height}
          overscanByPixels={0}
          // ref={this._setMasonryRef}
          scrollTop={scrollTop}
          width={width}
        />
  )
}

export default class Home extends Component {

  // componentDidMount() {
  //   this.props.initState()
  // }
  render() {

    // return
    // <MainBox direction='column' align='center' alignSelf='center' justify='center' pad='medium' >
    return <div>
      <InfiniteScroll
        threshold={10}
        pageStart={0}
        loadMore={_ => this.props.initState()}
        hasMore={this.props.hasMore}
        useWindow={true}
      >
        <WindowScroller overscanByPixels={0}>
          {(args) => renderAutoSizer(args, this.props.results)}
        </WindowScroller>
      </InfiniteScroll>
    </div>
    // </MainBox>

  }
}

Home.PropTypes = {
  initState: PropTypes.func,
  showModal: PropTypes.func
}
