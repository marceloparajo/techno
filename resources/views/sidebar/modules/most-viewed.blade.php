@inject('sidebarHelper', "App\Http\Helpers\SidebarHelper")
@inject('imageHelper', "App\Http\Helpers\ImageHelper")

<div class="card most-viewed-alter {{ $class ?? '' }} mb-3">
    <div class="card-body">
       <div class="title">{!! $title !!}</div>
       
        <ul>
        @foreach ($sidebarHelper->getMostViewed(strtolower($site), 5) as $key => $article)
        <li>
            <a href="{{ $article['url'] }}" class="most-viewed-{{ $key + 1 }}">
                <div class="position"><span style="background-color: rgba(0,118,186,{{ 1 - ( ($key * 1) / 7 ) }})">{{ $key + 1 }}</span></div>                
                <figure>
                    {!! $imageHelper->getLazyImages( $article['image'], 540, $article['title'],'img-fluid','540x304') !!}
                </figure>
                <h5>{{ $article['title'] }}</h5>
            </a>

        </li>
        @endforeach
    </ul>
    </div>
</div>