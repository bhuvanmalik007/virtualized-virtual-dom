import React from 'react'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import { connect } from 'react-redux'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
import styled from 'styled-components'
import { FoldingCube } from 'better-react-spinkit'
import { WMGColor } from '../constants'

const FBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 600px;
  width: 1000px;
`

const LoaderBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 600px;
  width: 1000px;
  justify-content: center;
  align-items: center;
`

const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  width: 100%;
  justify-content: space-between;
`

const DetailCard = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 8px 8px 0 rgba(46,61,73,.16);
  width: 100%;
  padding: 7px;
`

const PhotoTitle = styled.div`
  font-size: 20px;
`

const PhotoTextDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

const PhotoSubTitle = styled.div`
  padding-top: 10px;
  font-size: 16px;
  color: #fa296f;
`
const Tags = styled.div`
  display: flex;
  color: #fa296f;
`

const ReduxModal = ({ visibility, closeModal, data }) =>
    <Modal
      isDarkOverlay
      isOpen={visibility}
      isBlocking={false}
      onDismiss={closeModal}
    >
      {data && data.isLoaded && <FBox>
        {data &&  data.image_url &&
          <Image
            src={data.image_url.replace('%%X', '800X')}
            fit="contain"
            style={{ width: '60%', backgroundColor:'black' }}
          />}
        <DetailsDiv>
          <DetailCard contentPad="small">
            <Image
              src={data.profile_image.replace('%%X', '800X')}
              fit="cover"
              style={{ width: '70px', height: '70px' }}
            />
            <PhotoTextDetailContainer>
              <PhotoTitle>{data.title}</PhotoTitle>
              <PhotoSubTitle>{data.image_title}</PhotoSubTitle>
            </PhotoTextDetailContainer>
          </DetailCard>
          {data.tags.other_tags && <Tags>{data.tags.other_tags.split(',').map(x => ' #'+x)}</Tags>}
        </DetailsDiv>
      </FBox>}
      {data && !data.isLoaded && <LoaderBox>
        <FoldingCube size={100} color={WMGColor} />
      </LoaderBox>}
    </Modal>

ReduxModal.propTypes = {
  visibility: PropTypes.bool,
  closeModal: PropTypes.func,
  data: PropTypes.object
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch({ type: 'CLOSE_MODAL' })
})

const mapStateToProps = state => ({
  ...pick(['visibility'], state.core),
  data: state.home.results[state.core.currentIndex]
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxModal)
