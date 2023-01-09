@extends('layout.base')

@php 
    $canal = $channel;
@endphp

@if(view()->exists('channels.templates.' . $canal))
    @include('channels.templates.' . $canal)
@else
    @include('channels.templates.comun')
@endif