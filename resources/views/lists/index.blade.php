@switch ($noticia['bloque'] ?? '')
    @case('first')
        @include('lists.first', ['noticia' => $noticia])
        @break

    @case('middle')
        @include('lists.middle', ['noticia' => $noticia])
        @break

    @case('big')
        @include('lists.big', ['noticia' => $noticia])
        @break

    @default
        @include('lists.middle', ['noticia' => $noticia])

@endswitch