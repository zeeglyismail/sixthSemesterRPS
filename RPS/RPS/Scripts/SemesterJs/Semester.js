DataLoad();
function DataLoad() {
    $.ajax
        ({
            url: '/SemApi/GetAll',
            type: 'Get',
            dataType: 'json',
            success: function (data, textStatus, xhr) {
                if (data != null) {
                    var tr;
                    for (var i = 0; i < data.length; i++) {
                        tr = $('<tr/>');
                        tr.append('<td><i onclick=DataBind(' + data[i].SemID + ')><i class="fa fa-edit"></i></i></td>');
                        tr.append('<td><i onclick=Delete(' + data[i].SemID + ')><i class="fa fa-remove"></i></i></td>');
                        tr.append("<td>" + data[i].SemID + "</td>");
                        tr.append("<td>" + data[i].Sub1 + "</td>");
                        tr.append("<td>" + data[i].Sub2 + "</td>");
                        tr.append("<td>" + data[i].Sub3 + "</td>");
                        tr.append("<td>" + data[i].Sub4 + "</td>");
                        tr.append("<td>" + data[i].Sub5 + "</td>");

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
    var SemesterDetails = {
        SemID: $('#SemID').val(),
        Sub1: $('#SubID1').val(),
        Sub2: $('#SubID2').val(),
        Sub3: $('#SubID3').val(),
        Sub4: $('#SubID4').val(),
        Sub5: $('#SubID5').val(),
    }
    console.log(SemesterDetails)
    $.ajax
        ({
            url: '/SemApi/Insert',
            type: 'Post',
            datatype: 'json',
            data: SemesterDetails,
            success: function (data, textStatus, xhr) {
                if (data == 1) {
                    alert('Semester Inserted Sucessfully!!!')
                    location.reload();
                }
                else {
                    alert('Semester Insertion Failed!x!')
                }
            },
            error: function (xhr, textStatus, errorthrown) {
                console.log('Error in Operation')
            }
        });
}

function DataBind(row) {
    $.ajax({
        url: '/SemApi/GetBySemID/' + '?SemID=' + row,
        type: 'Get',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            $('#SemID').val(data[0].SemID)
            $('#SubID1').val(data[0].Sub1)
            $('#SubID2').val(data[0].Sub2)
            $('#SubID3').val(data[0].Sub3)
            $('#SubID4').val(data[0].Sub4)
            $('#SubID5').val(data[0].Sub5)    
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function Update() {

    var SemesterDetails = {
        SemID: $('#SemID').val(),
        Sub1: $('#SubID1').val(),
        Sub2: $('#SubID2').val(),
        Sub3: $('#SubID3').val(),
        Sub4: $('#SubID4').val(),
        Sub5: $('#SubID5').val(),
    }
    $.ajax({
        url: '/SemApi/Update/',
        type: 'POST',
        dataType: 'json',
        data: SemesterDetails,
        success: function (data, textStatus, xhr) {
            if (data == 1) {
                alert("Updated Succesfully")
                location.reload();
            }
            else {
                alert("Please, Select a Semester!!")
            }

        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function Delete(row) {
    $.ajax({
        url: '/SemApi/Delete/' + '?SemID=' + row,
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