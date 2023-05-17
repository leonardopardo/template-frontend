import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import classNames from 'classnames';
import googleMapStyles from '../../helpers/googleMapStyles';
import AppContext from 'context/Context';

const GoogleMap = ({ mapStyle, darkStyle, className, children, ...rest }) => {
  const {
    config: { isDark }
  } = useContext(AppContext);

  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onInfoWindowClose = () => {
    setActiveMarker(null);
    setShowingInfoWindow(false);
  };

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && darkStyle) {
      if (isDark) {
        mapRef.current.map.setOptions({
          styles: googleMapStyles[darkStyle]
        });
      } else {
        mapRef.current.map.setOptions({
          styles: googleMapStyles[mapStyle]
        });
      }
    }
  }, [isDark]);

  return (
    <div className={classNames('position-relative', className)}>
      <Map styles={googleMapStyles[mapStyle]} ref={mapRef} {...rest}>
        <Marker onClick={onMarkerClick} />

        {children && (
          <InfoWindow
            marker={activeMarker}
            onClose={onInfoWindowClose}
            visible={showingInfoWindow}
          >
            <Fragment>{children}</Fragment>
          </InfoWindow>
        )}
      </Map>
    </div>
  );
};

GoogleMap.propTypes = {
  mapStyle: PropTypes.oneOf([
    'Default',
    'Gray',
    'Midnight',
    'Hopper',
    'Beard',
    'AssassianCreed',
    'SubtleGray',
    'Tripitty',
    'Cobalt'
  ]),
  darkStyle: PropTypes.oneOf([
    'Default',
    'Gray',
    'Midnight',
    'Hopper',
    'Beard',
    'AssassianCreed',
    'SubtleGray',
    'Tripitty',
    'Cobalt'
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  ...Map.propTypes
};

GoogleMap.defaultProps = { zoom: 17, mapStyle: 'Default' };

// TODO: Do you provide the apiKey in production, instruct user to use his own apiKey
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(GoogleMap);
