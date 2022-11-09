import React from 'react'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {
  MapMarker,
  Map,
  CustomOverlayMap,
  ZoomControl,
  // MapTypeControl,
} from "react-kakao-maps-sdk";
import Overlay from './Overlay';

const { kakao } = window;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MapContainerBox = styled.div`
  width: 800px;
  height: 600px;
  border: 2px solid grey;
  border-radius: 5px;
`;

const MapMarkerStyle = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  text-align: center;

`

const CustomOverlayStyle = styled.div`
  padding: 20px;
  background-color: white;
  color: grey;
  border: 2px solid red;
  border-radius: 10px;
  font-size: 15px;
`

const ButtonContainer = styled.div`
  display: "flex";
  justify-content: center;
  gap: 10px;
`
const Movebutton = styled.button`
  width: 200px;
  height: 30px;
`

const MapContainer = () => {

  // useEffect(() => {
  //   const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  //   const options = {
  //     //지도를 생성할 때 필요한 기본 옵션
  //     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  //     level: 3, //지도의 레벨(확대, 축소 정도)
  //   };

  //   const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  //   // console.log("map: ", map);
  // }, [])

  const [location, setLocation] = useState({
    // 지도의 초기 위치
    center: { lat: 33.452613, lng: 126.570888 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
    // style: { width: "100%", height: "100%" },
    // level: 3,
  });

  const [position, setPosition] = useState();

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {

  }, [])

  const handleMove = () => {
    setLocation({
      center: { lat: 33.45058, lng: 126.574942 },
      isPanto: true,
    });
  }

  return (
    <Container>
      <MapContainerBox>
        {/* <MarkerWithCustomOverlayStyle /> */}
        <Map // 지도를 표시할 기본 컴포넌트
          center={location.center} // 지도 센터위치
          // style={location.style} // 지도의 크기
          // level={location.level} // 지도 확대 레벨
          style={{
            // 지도의 크기
            width: "100%",
            height: "100%",
          }}
          level={3} // 지도의 확대 레벨
          // 해당위치 좌표 클릭 이벤트
          onClick={(_t, mouseEvent) =>
            setPosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })
          }
        >
          {/* 지도 위 마커(표시) */}
          <MapMarker
            onClick={() => setIsOpen(!isOpen)}
            position={{ lat: 33.452613, lng: 126.570888 }}
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
              // 마커이미지의 크기입니다
              size: {
                width: 50,
                height: 55,
              },
              // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              options: {
                offset: {
                  x: 27,
                  y: 69,
                },
              },
            }}
          >
            <MapMarkerStyle>이 자리가 명당이네</MapMarkerStyle>
          </MapMarker>

          {/* 지도 위 커스텀 오버레이 */}
          {isOpen && (
            <CustomOverlayMap
              position={{
                lat: 33.450701,
                lng: 126.570667,
              }}
            >
              <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
            </CustomOverlayMap>
          )}

          {/* 줌레벨 컨트롤러 */}
          <ZoomControl position={kakao.maps.ControlPosition.BOTTOMRIGHT} />
          {/* <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} /> */}
        </Map>
      </MapContainerBox>
      {/* 좌표이동 버튼 */}
      <ButtonContainer>
        <Movebutton onClick={handleMove}>
          지도 중심좌표 이동(부드럽게)
        </Movebutton>
      </ButtonContainer>
      {position && (
        <p>
          {"클릭한 위치의 위도는 " +
            position.lat +
            " 이고, 경도는 " +
            position.lng +
            " 입니다"}
        </p>
      )}
    </Container>
  );
}

export default MapContainer