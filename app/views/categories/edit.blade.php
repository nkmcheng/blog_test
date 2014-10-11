{{ HTML::style('assets/css/bootstrap.min.css'); }}

{{ HTML::style('assets/css/style.css'); }}


<html>
<head>
    <title>Add Category</title>
</head>
<body>

<div class="container">
    <h2>Add Category</h2>

    @if ($errors->has())
    @foreach ($errors->all() as $error)
        <div>{{ $error }}</div>
    @endforeach
    @endif


    {{ @Form::model( $category, ['route' => ['categories.update', $category->id], 'method' => 'put']) }}
        <div class="form-group">
            {{ Form::label('categoryTitle', 'Title', ['class' => 'col-sm-1 control-label']) }}
            <div class="col-sm-10">
                {{ Form::text('categoryTitle', null, ['class' => 'form-control', 'required']) }}
            </div>
        </div>
        {{ Form::submit('Submit', ['class' => 'btn btn-default']) }}

    {{ @Form::close() }}

</div>

</body>
</html>


{{ HTML::script('assets/js/bootstrap.min.js'); }}