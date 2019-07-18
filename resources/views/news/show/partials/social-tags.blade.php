		<link rel="profile" href="https://gmpg.org/xfn/11">
		{{-- Facebook --}}
		<meta property="fb:admins"              content="{{ env('FACEBOOK_ADMINS', '') }}">
		<meta property="fb:app_id"              content="{{ env('FACEBOOK_APP_ID', '') }}">
		<meta property="fb:pages"               content="{{ env('FACEBOOK_PAGE_ID', '') }}">
		<meta property="og:url"                 content="{{ $noticia['permalink'] }}" />
		<meta property="og:type"                content="article" />
		<meta property="og:locale"              content="{{ env( "APP_TIME_LOCALE", config('app.locale') ) }}">
		<meta property="og:site_name"           content="{{ env('APP_ALTER_NAME', '') }}"/>
		<meta property="og:title"               content="{{ $noticia['short_title'] }}" />
		<meta property="og:description"         content="{{ $noticia['headline'] }}" />
		<meta property="og:updated_time" 		content="{{ $noticia['date_update']->toIso8601String() }}" />
		<meta property="og:image"               content="{{ $noticia['main_image']['srcs']['big-wide'] }}" />
		<meta property="og:image:secure_url" 	content="{{ $noticia['main_image']['srcs']['big-wide'] }}" />
		<meta property="og:image:type"          content="image/jpeg" />
		<meta property="og:image:width"         content="1140" />
		<meta property="og:image:height"        content="641" />
		<meta property="article:section"        content="{{ $noticia['channel']['slug'] }}">
		<meta property="article:published_time" content="{{ $noticia['date_available']->toIso8601String() }}">
		<meta property="article:modified_time"  content="{{ $noticia['date_update']->toIso8601String() }}">
@foreach (explode(",",$noticia['tags']) as $tag)
		<meta property="article:tag" 			content="{{ $tag }}" />
@endforeach
		{{-- Twitter --}}
		<meta name="twitter:card"               content="summary_large_image">
		<meta name="twitter:site"               content="{{ env('TWITTER_PROFILE', '') }}">
		<meta name="twitter:creator"            content="{{ env('TWITTER_PROFILE', '') }}">
		<meta name="twitter:title"              content='{{ $noticia['short_title'] }}'>
		<meta name="twitter:description"        content="{{ $noticia['headline'] }}">
		<meta name="twitter:image"              content="{{ $noticia['main_image']['srcs']['big-wide'] }}">
		<meta name="twitter:image:alt"          content='{{ $noticia['main_image']['caption'] }}'>
		{{-- SCHEMA MICRODATA --}}
		<meta itemscope itemprop="mainEntityOfPage" itemType="https://schema.org/WebPage" itemid="{{ $noticia['permalink'] }}"/>
		<meta itemprop="datePublished" 			content="{{ $noticia['date_available']->toIso8601String() }}"/>
		<meta itemprop="dateModified" 			content="{{ $noticia['date_update']->toIso8601String() }}"/>
		<meta itemprop="keywords" 				content="{{ $noticia['tags'] }}">
		<meta itemprop="name" 					content="{{ $page_title }}">
		<meta itemprop="alternateName" 			content="{{ $noticia['short_title'] }}">
		<meta itemprop="headline" 				content="{{ str_limit($noticia['headline'],105) }}">
		<meta itemprop="url" 					content="{{ $noticia['permalink'] }}">
		<meta itemprop="articleSection" 		content="{{ $noticia['channel']['slug'] }}">
		<meta itemprop="inLanguage" 			content="{{ config('app.locale') }}">
		{{-- Generic --}}
		<meta name="editoria" 					content="{{ env('APP_ALTER_NAME', '') }}" />
		<meta name="dtnoticia" 					content="{{ $noticia['date_available']->toIso8601String() }}" />
		<meta name="title" 						content="{{ $page_title }}" />
		<meta name="keywords" 					content="{{ $noticia['tags'] }}" />
		<meta name="description" 				content="{{ $noticia['headline'] }}">
		<meta name="news_keywords" 				content="{{ $noticia['tags'] }}">