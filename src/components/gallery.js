import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Lightbox from 'react-images'

const gutter = {
	small: '2px',
	large: '4px'
};

const Base = styled.div`
  margin-right: ${gutter.small};
  overflow: hidden;
  color: palevioletred;

	@media (max-width: 500px) {
		margin-right: -${gutter.large};
	}
`;

const Thumbnail = styled.a`
	box-sizing: border-box;
	display: block;
	float: left;
	line-height: 0;
	padding-right: ${gutter.small};
	padding-bottom: ${gutter.small};
	overflow: hidden;

	${props => props.landscape && css`
		width: 30%;
  `}

	${props => props.square && css`
		padding-bottom: 0;
		width: 40%;
		@media (max-width: 500px) {
			padding-bottom: 0;
		}
	`}

	@media (max-width: 500px) {
		padding-right: ${gutter.large};
		padding-bottom: ${gutter.large};
	}
`;

const Source = styled.img`
	border: 0;
	display: block;
	height: auto;
	max-width: 100%;
	width: auto;
`;

class Gallery extends Component {
	constructor () {
		super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}
	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
	}
	renderGallery () {
		const { images } = this.props;

		if (!images) return;

		const gallery = images.map((obj, i) => {
			return (
				<Thumbnail
					href={obj.src}
					key={i}
					onClick={(e) => this.openLightbox(i, e)}
					{...obj.orientation}
				>
					<Source src={obj.thumbnail}/>
				</Thumbnail>
			);
		});

		return (
			<Base>
				{gallery}
			</Base>
		);
	}
	render () {
		return (
			<div>
				{this.props.heading && <h2>{this.props.heading}</h2>}
				{this.props.subheading && <p>{this.props.subheading}</p>}
				{this.renderGallery()}
				<Lightbox
					currentImage={this.state.currentImage}
					images={this.props.images}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
					showThumbnails={this.props.showThumbnails}
					spinner={this.props.spinner}
					spinnerColor={this.props.spinnerColor}
					spinnerSize={this.props.spinnerSize}
					theme={this.props.theme}
				/>
			</div>
		);
	}
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
	heading: PropTypes.string,
	images: PropTypes.array,
	showThumbnails: PropTypes.bool,
	subheading: PropTypes.string,
};

export default Gallery;
