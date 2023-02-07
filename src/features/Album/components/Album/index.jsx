import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    Album: PropTypes.object,
};

Album.defaultProps = {
    Album: {},
};

function Album(props) {
    const {album} = props;
    return (
        <div>
            <img src={album.thumbnailUrl} alt="" />
            <p>{album.name}</p>
        </div>
    );
}

export default Album;