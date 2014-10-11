{{ HTML::style('assets/css/bootstrap.min.css'); }}

{{ HTML::style('assets/css/style.css'); }}

<html>
<head>
    <title>BLOG</title>
</head>
<body>


<div class="container">
    <div class="row">
        <div class="col-md-2">
        </div>

        <div class="col-md-10">
            <h2>Category</h2>
            <span class="right"> {{ link_to_route('categories.create', 'Create') }} </span>
            <div class="table-responsive">
              <table class="table">
                <tr class="active">
                    <th>Category Id</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Food</td>
                    <td>September 10, 2014</td>
                    <td>Edit<br>Delete</td>
                </tr>

                @foreach ($categories as $category)
                <tr>
                    <td> {{ $category['id'] }} </td>
                    <td> {{ $category['categoryTitle'] }} </td>
                    <td> {{ $category['created_at'] }} </td>
                    <td> {{ link_to_route('categories.edit', 'Edit', ['id' => $category['id'] ]) }}  <br>
                        {{ @Form::open(['route' => ['categories.destroy', $category['id'] ], 'method' => 'delete' ]) }}
                        {{ @Form::submit('Delete') }}
                        {{ @Form::close() }}
                    </td>
                </tr>
                @endforeach

              </table>
            </div>
        </div>
    </div>  
</div>




</body>
</html>

{{ HTML::script('assets/js/bootstrap.min.js'); }}