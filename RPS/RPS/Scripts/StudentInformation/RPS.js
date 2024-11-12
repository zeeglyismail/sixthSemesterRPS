DataLoad();
DeptDropdown();
function DataLoad() {
    $.ajax
    ({
        url: '/StudentWebApi/GetAll',
        type: 'Get',
        dataType: 'json',
        success: function (data, textStatus, xhr)
        {
            if (data != null)
            {
                var tr;
                for (var i = 0; i < data.length; i++)
                {
                    tr = $('<tr/>');
                    tr.append('<td><i onclick=DataBind(' + data[i].RegNo + ')><i class="fa fa-edit"></i></i></td>');
                    tr.append('<td><i onclick=Delete(' + data[i].RegNo + ')><i class="fa fa-remove"></i></i></td>');
                    tr.append("<td>" + data[i].RegNo + "</td>");
                    tr.append("<td>" + data[i].StudentName + "</td>");
                    tr.append("<td>" + data[i].DeptName + "</td>");
                    tr.append("<td>" + data[i].SessionYear + "</td>");

                    $('table').append(tr);
                }
            }
            else
            {
                alert("Error")
            }
        },
        error: function (xhr, textStatus, errorThrown)
        {
            console.log(errorThrown)
        }
    });
}

function DeptDropdown(row)
{
    $.ajax({
        url: '/DeptApi/GetAll',
        type: 'GET',
        dataType: 'json',
        success: function (data)
        {
            var dropdown = $('#DeptName');
            dropdown.empty();
            $.each(data, function (key, entry)
            {
                dropdown.append($('<option></option>').attr('value', entry.DeptName).text(entry.DeptName));
            });
        },
        error: function (xhr, textStatus, errorThrown)
        {
            console.log('Error:', errorThrown);
        }
    });
};

function Insert() {
    var studentdetails = {
        StudentName: $('#idName').val(),
        DeptName: $('#DeptName').val(),
        SessionYear: $('#idSession').val(),
    }
    console.log(studentdetails)
    $.ajax
    ({
        url: '/StudentWebApi/Insert',
        type: 'Post',
        datatype: 'json',
        data: studentdetails,
        success: function (data, textStatus, xhr)
        {
            if (data == 1)
            {
                alert('Student Inserted Sucessfully!!!')
                location.reload();
            }
            else
            {
                alert('Student Insertion Failed!x!')
            }
        },
        error: function (xhr, textStatus, errorthrown)
        {
            console.log('Error in Operation')
        }
    });
}

function DataBind(row) {
    $.ajax({
        url: '/StudentWebApi/GetByRegNo/' + '?RegNo=' + row,
        type: 'Get',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            $('#idRegNo').val(data[0].RegNo)
            $('#idName').val(data[0].StudentName)
            $('#DeptName').val(data[0].DeptName)
            $('#idSession').val(data[0].SessionYear)
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function Update() {

    var studentdetails = {
        RegNo: $('#idRegNo').val(),
        StudentName: $('#idName').val(),
        DeptName: $('#DeptName').val(),
        SessionYear: $('#idSession').val()
    }
    $.ajax({
        url: 'StudentWebApi/Update/',
        type: 'POST',
        dataType: 'json',
        data: studentdetails,
        success: function (data, textStatus, xhr) {
            if (data == 1) {
                alert("Updated Succesfully")
                location.reload();
            }
            else {
                alert("Please, Select a Student!!")
            }

        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function Delete(row) {
    $.ajax({
        url: '/StudentWebApi/Delete/' + '?RegNo=' + row,
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