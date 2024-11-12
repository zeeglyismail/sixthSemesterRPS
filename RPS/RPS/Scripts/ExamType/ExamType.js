DataLoad();

function DataLoad() {
    $.ajax
        ({
            url: '/ExamTypeApi/GetAll',
            type: 'Get',
            dataType: 'json',
            success: function (data, textStatus, xhr) {
                if (data != null) {
                    var tr;
                    for (var i = 0; i < data.length; i++) {
                        tr = $('<tr/>');
                        tr.append('<td><i onclick=DataBind(' + data[i].ExamTypeID + ')><i class="fa fa-edit"></i></i></td>');
                        tr.append('<td><i onclick=Delete(' + data[i].ExamTypeID + ')><i class="fa fa-remove"></i></i></td>');
                        tr.append("<td>" + data[i].ExamTypeID + "</td>");
                        tr.append("<td>" + data[i].ExamTypeName + "</td>");
                        tr.append("<td>" + data[i].TotalMarks + "</td>");
                        $('table').append(tr);
                    }
                }
                else {
                    alert("Error")
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown)
            }
        });
}



function Insert() {
    var ExamTypeDetails = {
        ExamTypeName: $('#ExamTypeNameID').val(),
        TotalMarks: $('#TotalMarksID').val(),
    }
    console.log(ExamTypeDetails)
    $.ajax
        ({
            url: '/ExamTypeApi/Insert',
            type: 'Post',
            datatype: 'json',
            data: ExamTypeDetails,
            success: function (data, textStatus, xhr) {
                if (data == 1) {
                    alert('Exam Type Inserted Sucessfully!!!')
                    location.reload();
                }
                else {
                    alert('Exam Type Insertion Failed!x!')
                }
            },
            error: function (xhr, textStatus, errorthrown) {
                console.log('Error in Operation')
            }
        });
}

function DataBind(row) {
    $.ajax({
        url: '/ExamTypeApi/GetByExamTypeID/' + '?ExamTypeID=' + row,
        type: 'Get',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            $('#ExamTypeID').val(data[0].ExamTypeID)
            $('#ExamTypeNameID').val(data[0].ExamTypeName)
            $('#TotalMarksID').val(data[0].TotalMarks)
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function Update() {

    var ExamTypeDetails = {
        ExamTypeID: $('#ExamTypeID').val(),
        ExamTypeName: $('#ExamTypeNameID').val(),
        TotalMarks: $('#TotalMarksID').val(),
    }
    $.ajax({
        url: '/ExamTypeApi/Update/',
        type: 'POST',
        dataType: 'json',
        data: ExamTypeDetails,
        success: function (data, textStatus, xhr) {
            if (data == 1) {
                alert("Updated Succesfully")
                location.reload();
            }
            else {
                alert("Please, Select a Exam Type!!")
            }

        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function Delete(row) {
    $.ajax({
        url: '/ExamTypeApi/Delete/' + '?ExamTypeID=' + row,
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