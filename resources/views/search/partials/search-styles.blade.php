<style>
	.gsc-control-cse {
		padding: 0;
	}
	.gsc-input-box {
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		border: 1px solid #dfdfdf;
		font-family: "Roboto", sans-serif;
	}
	.gsc-search-button {
		margin: 0;
	}
	.gsc-search-button-v2 {
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		background-color: #dfdfdf;
		border-color: #dfdfdf;
		margin: 0;
		pading: 6px 20px;

	}
	.gsc-search-button-v2 svg {
		filter: invert(1);
		width: 16px;
		height: 16px;
	}
	table.gsc-search-box td.gsc-input {
		padding-right: 0;
	}
	.gsc-webResult.gsc-result {
		border-bottom: 1px solid #ddd;
	}
	.gsc-control-cse .gs-spelling, .gsc-control-cse .gs-result .gs-title, 
	.gsc-control-cse .gs-result .gs-title *  {
		font-weight: bold;
		margin-bottom: .5rem;
	}
	.gs-image-box.gs-web-image-box.gs-web-image-box-landscape {
		padding: 0;
		border-radius: 6px;
		overflow: hidden;
		float: left;
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		margin-bottom: 5px;
		margin-left: 0;
	}
	.gs-promotion-image-box img.gs-promotion-image, 
	.gs-web-image-box-portrait img.gs-image, 
	.gs-web-image-box-landscape img.gs-image {
		border-radius: 6px;
		overflow: hidden;
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		height: auto;
	}
	.gsc-webResult .gsc-url-top {
		display: none;
	}
	.gs-snippet {
    	line-height: 1.4em;
	}

	@media(min-width: 768px) {
		.gs-webResult.gs-result {
			position: relative;
			min-height: 111px;
		}
		.gsc-webResult .gsc-url-top {
			display: block;
			padding-bottom: 10px;
		}
		.gsc-table-cell-snippet-close, 
		.gs-promotion-text-cell,
		.gsc-thumbnail-inside, 
		.gsc-url-top,
		.gs-promotion .gs-visibleUrl {
			padding-left: 220px;
		}
		.gs-image-box.gs-web-image-box.gs-web-image-box-landscape {
			float: left;
			width: 200px;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
</style>