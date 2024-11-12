DataLoad();

function DataLoad() {
    $.ajax({
        url: '/DeptApi/GetAll',
        type: 'Get',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            if (data != null) {
                var tr;
                for (var i = 0; i < data.length; i++) {
                    tr = $('<tr/>');
                    tr.append('<td><i onclick=DataBind(' + data[i].DeptID + ')><i class="fa fa-edit"></i></i></td>');
                    tr.append('<td><i onclick=DataVoid(' + data[i].DeptID + ')><i class="fa fa-remove"></i></i></td>');
                    tr.append("<td>" + data[i].DeptID + "</td>");
                    tr.append("<td>" + data[i].DeptName + "</td>");
                    $('table').append(tr);
                }
            }
            else {
                alert("Error")
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function Insert() {

    var entity = {
        DeptName: $('#DeptName').val(),
    }
    console.log(entity)
    $.ajax({

        url: '/DeptApi/Insert',
        type: 'POST',
        datatype: 'json',
        data: entity,
        success: function (data, textStatus, xhr) {
            if (data != null) {
                alert('New Department Created!')
                location.reload();
            }
            else {
                alert('Error')
            }
        },
        error: function (xhr, textStatus, errorthrown) {
            console.log('Error in operation')
        }

    });
}

function DataBind(row) {
    $.ajax({
        url: '/DeptApi/GetByDeptId/' + '?DeptID=' + row,
        type: 'Get',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            $('#DeptID').val(data[0].DeptID)
            $('#DeptName').val(data[0].DeptName)
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function Update() {

    var entity = {
        DeptID: $('#DeptID').val(),
        DeptName: $('#DeptName').val(),
    }
    $.ajax({
        url: '/DeptApi/Update/',
        type: 'POST',
        dataType: 'json',
        data: entity,
        success: function (data, textStatus, xhr) {
            if (data == 1) {
                alert("Updated Succesfully")
                location.reload();
            }
            else {
                alert("Please, Select data")
            }

        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function DataVoid(row) {
    $.ajax({
        url: '/DeptApi/Delete/' + '?DeptID=' + row,
        type: 'POST',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            if (data != null) {
                alert("Deleted Succesfully")
                location.reload();
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}