import React from 'react'
import styled from 'styled-components';

const OverlayWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`

const OverlayInfo = styled.div`
  text-align: center;
  /* padding: 2px; */
`;

const OverlayTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2px;
  /* background-color: grey; */
  border-radius: 5px;
  padding: 3px 0;
`;

const OverlayBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2px;
`;

const OverlayImg = styled.div`
  img {
    padding: 3px 3px;
    border-radius: 7px;
  }
`;

const OverlayDesc = styled.div`
  padding: 0 5px;
  font-size: 13px;
  line-height: 17px;
`;


const Overlay = ({ isOpen, setIsOpen }) => {
  return (
    <OverlayWrap className="wrap">
      <OverlayInfo className="info">
        <OverlayTitle className="title">
          <span>카카오 스페이스닷원</span>
          <div
            className="close"
            onClick={() => setIsOpen(!isOpen)}
            title="닫기"
          >
            X
          </div>
        </OverlayTitle>
        <OverlayBody>
          <OverlayImg>
            <img
              src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
              width="73"
              height="70"
              alt="카카오 스페이스닷원"
            />
          </OverlayImg>
          <OverlayDesc className="desc">
            <div className="ellipsis">제주특별자치도 제주시 첨단로 242</div>
            <div className="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
            <div>
              <a
                href="https://www.kakaocorp.com/main"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                홈페이지
              </a>
            </div>
          </OverlayDesc>
        </OverlayBody>
      </OverlayInfo>
    </OverlayWrap>
  );
};

export default Overlay