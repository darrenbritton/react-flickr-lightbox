import React, {Component} from 'react'
import buildUrl from 'build-url'
import Gallery from './components/gallery'

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { images: []};
  }

  componentDidMount() {
    fetch(this.generateApiUrl())
      .then(response => response.json())
      .then(data => this.setState({
        images: data.photos.photo.map((p) =>
          {
            return {
              src: p.url_o,
              thumbnail: p.url_q,
              caption: `${p.title}: Photo by ${p.ownername}`
            }
          })
      }))
  }

  generateApiUrl = () => {
    const extras = ["url_o", "url_q", "license", "date_upload", "date_taken", "icon_server", "original_format", "last_update", "geo", "tags", "machine_tags", "o_dims", "views", "media", "path_alias", "owner_name"];
    return buildUrl('https://api.flickr.com', {
      path: 'services/rest/',
      queryParams: {
        method: 'flickr.photos.search',
        format: 'json',
        api_key: this.props.api_key || '',
        user_id: this.props.user_id || '',
        album_id: this.props.album_id || '',
        per_page: this.props.limit || Number.MAX_SAFE_INTEGER,
        nojsoncallback: '?',
        extras: extras.join(',')
      }
    })
  }

  render() {
    console.log(this.state.images);
    return (
      <Gallery
        images={this.state.images}
      />
    )
  }
}
