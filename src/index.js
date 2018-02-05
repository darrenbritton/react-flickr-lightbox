import React, {Component} from 'react'
import PropTypes from 'prop-types'
import buildUrl from 'build-url'
import Gallery from './components/gallery'
import fetch from 'isomorphic-fetch'

/**
 * generates a gallery and lightbox using the given flickr api key and details
 */
class FlickrLightbox extends Component {
  constructor(props) {
    super(props);

    this.state = { images: []};
  }

  componentWillMount() {
    this.queryFlickrApi(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.queryFlickrApi(nextProps)
  }

  generateApiUrl = (props) => {
    const extras = ["url_o", "url_m", "url_sq", "license", "date_upload", "date_taken", "icon_server", "original_format", "last_update", "geo", "tags", "machine_tags", "o_dims", "views", "media", "path_alias", "owner_name"];
    return buildUrl('https://api.flickr.com', {
      path: 'services/rest/',
      queryParams: {
        method: props.user_id || props.album_id || props.searchTerm ? 'flickr.photos.search' : 'flickr.photos.getRecent',
        format: 'json',
        api_key: props.api_key || '',
        user_id: props.user_id || '',
        album_id: props.album_id || '',
        text: props.searchTerm || '',
        per_page: props.limit || Number.MAX_SAFE_INTEGER,
        nojsoncallback: '?',
        extras: extras.join(',')
      }
    })
  }

  queryFlickrApi = (props) => {
    fetch(this.generateApiUrl(props))
      .then(response => response.json())
      .then(data => {
        if (!data.photos) {
          throw(data);
        }
        this.setState({
          images: data.photos.photo.map((p) =>
            {
              return {
                src: p.url_o || p.url_m || 'https://s.yimg.com/pw/images/en-us/photo_unavailable.png',
                thumbnail: p.url_sq,
                caption: `${p.title || 'Untitled'}: Photo by ${p.ownername}`
              }
            })
        })
      })
      .catch(e => console.error(e))
  }

  render() {
    return (
      <Gallery
        images={this.state.images}
        className={this.props.className}
      />
    )
  }
}

FlickrLightbox.propTypes = {
  /**
 * api key for accessing flickr (see [here](https://www.flickr.com/services/api/misc.api_keys.html) for more details)
 */
	api_key: PropTypes.string.isRequired,
  /**
 * flickr user id of user to fetch photos from
 */
	user_id: PropTypes.string,
  /**
 * flickr album id to fetch photos from
 */
  album_id: PropTypes.string,
  /**
 * integer limit of photos to be displayed
 */
	limit: PropTypes.number,
  /**
 * search term used to filter photos (searches using title, description and tags)
 */
  searchTerm: PropTypes.string,
  /**
 * class name to be applied to root div
 */
  className: PropTypes.string
}

export default FlickrLightbox
