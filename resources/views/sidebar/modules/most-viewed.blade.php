@inject('sidebarHelper', "App\Http\Helpers\SidebarHelper")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")

<div class="card most-viewed-alter {{ $class ?? '' }} mb-3">
    <div class="card-body">
       <div class="title">{!! $title !!}</div>
       
        <ul>
        @foreach ($sidebarHelper->getMostViewed(strtolower($site), 5) as $key => $article)
        <li>
            <a href="{{ $article['url'] }}" class="most-viewed-{{ $key }}">
                <div class="position"> {{ $key + 1 }}</div>                
                <figure>
                    {!! $imageHelper->getLazyImages( $article['image'], 540, $article['title'],'img-fluid','540x304') !!}
                </figure>
            </a>
            <a href="{{ $article['url'] }}">
                <h5>{{ $article['title'] }}</h5>
            </a>
        </li>
        @endforeach
    </ul>
    </div>
</div>