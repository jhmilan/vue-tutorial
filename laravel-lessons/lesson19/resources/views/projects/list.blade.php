@if(count($projects) > 0)
    <h1>My projects</h1>
    @foreach($projects as $project)
        <p>{{ $project->name }}</p>
    @endforeach
@endif