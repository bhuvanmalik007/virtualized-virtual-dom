import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  WindowScroller,
  AutoSizer
} from 'react-virtualized'
import 'react-virtualized/styles.css'
import { FoldingCube } from 'better-react-spinkit'

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 8px 0 rgba(46,61,73,.16);
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

const cellRenderer = ({ index, key, parent, style }, results, showModal) => {
  const datum = results[index]
  return <CellMeasurer
    cache={cache}
    index={index}
    key={key}
    parent={parent}>
    <ImageCard className='cell' style={{...style, height: (datum.image_height / datum.image_width) * 400, width: 400}} onClick={() => showModal(index)}>
      <img
        src={datum.image_url.replace('%%X', '400x')}
        style={{
          height: (datum.image_height / datum.image_width) * 400,
          width: 400
        }}
      />
    </ImageCard>
  </CellMeasurer>
}

const renderAutoSizer = ({height, scrollTop}, results, showModal) => {
  return (<div>
    <AutoSizer
      disableHeight
      height={height}
      overscanByPixels={0}
      scrollTop={scrollTop}>
      {(args) => renderMasonry(args, height, scrollTop, results, showModal)}
    </AutoSizer>
  </div>
  );
}

const renderMasonry = ({width}, height, scrollTop, results, showModal) => {
  return (
        <Masonry style={{ paddingLeft:'6%', paddingRight:'6%', paddingTop:'40px', width:'1200px' }}
          autoHeight={true}
          cellCount={results.length}
          cellMeasurerCache={cache}
          cellPositioner={cellPositioner}
          cellRenderer={(args) => cellRenderer(args, results, showModal)}
          height={height}
          overscanByPixels={0}
          scrollTop={scrollTop}
          width={width}
        />
  )
}

const Home = props => {
    return <InfiniteScroll
      threshold={10}
      pageStart={0}
      loadMore={_ => props.loadMore()}
      hasMore={props.hasMore}
      useWindow={true}
      loader={<FoldingCube size={100} color='#e82f77' />}>
      <WindowScroller overscanByPixels={0}>
        {(args) => renderAutoSizer(args, props.results, props.showModal)}
      </WindowScroller>
    </InfiniteScroll>
}

Home.PropTypes = {
  loadMore: PropTypes.func,
  showModal: PropTypes.func,
  results: PropTypes.array,
  hasMore: PropTypes.bool
}

export default Home
