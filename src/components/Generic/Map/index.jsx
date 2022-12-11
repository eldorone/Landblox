import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Container, Description, Subtitle, Title, Wrapper } from './style';
import { useParams } from 'react-router-dom';


export const Map = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  console.log(data);

  const containerStyle = {
    width: '100%',
    height: '450px',
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4',
  });

  return (
    <Container>
      <Title>Location</Title>
      <Wrapper>
        <Wrapper>
          <Subtitle>Address:</Subtitle>
          <Description>
            {data?.address || 'No address'}
          </Description>
        </Wrapper>
        <Wrapper>
          <Subtitle>City:</Subtitle>
          <Description>{data?.city || 'No zipCode'}</Description>
        </Wrapper>
        <Wrapper>
          <Subtitle>Area:</Subtitle>
          <Description>
            {data?.houseDetails?.area || 0}kv
          </Description>
        </Wrapper>
      </Wrapper>
      <Wrapper mt={24} mb={24}>
        <Wrapper>
          <Subtitle>State/County: </Subtitle>
          <Description>
            {data?.country || 'No zipCode'}
          </Description>
        </Wrapper>
        <Wrapper>
          <Subtitle>Zip:</Subtitle>
          <Description>
            {data?.zipCode || 'No zipCode'}
          </Description>
        </Wrapper>
        <Wrapper>
          <Subtitle>Country:</Subtitle>
          <Description>
            {data?.country || 'No zipCode'}
          </Description>
        </Wrapper>
      </Wrapper>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: 37.5665,
            lng: 126.9780,

          }}
          zoom={15}
        >
          {data?.location?.latitude && data?.location?.longitude ? (
            <>
              <Marker position={{
                lat: 37.5665,
                lng: 126.9780,

              }} />
              <Marker
                position={{
                  lat: 37.5665,
                  lng: 126.9780,

                }}
              />
            </>
          ) : (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{
                lat: 37.5665,
                lng: 126.9780,

              }}
              zoom={15}
            />
          )}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Map;