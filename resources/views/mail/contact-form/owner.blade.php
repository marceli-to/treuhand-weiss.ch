<x-mail::message>
<div class="text-base font-medium pb-large">
  Neue Nachricht
</div>
<div class="text-base pb-base">
  <strong>Vorname</strong><br>
  {{ $data->firstname }}
</div>
<div class="text-base pb-base">
  <strong>Name</strong><br>
  {{ $data->name }}
</div>
<div class="text-base pb-base">
  <strong>E-Mail</strong><br>
  {{ $data->email }}
</div>
<div class="text-base pb-base">
  <strong>Nachricht</strong><br>
  {!! $data->message !!}
</div>
</x-mail::message>
