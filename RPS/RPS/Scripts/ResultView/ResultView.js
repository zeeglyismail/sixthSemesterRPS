StudentDropdown();
function StudentDropdown() {
    $.ajax({
        url: '/StudentWebApi/GetAll',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var dropdown = $('#RegNo');
            dropdown.empty();
            dropdown.append('<option value="">--Select a Student--</option>');
            $.each(data, function (key, entry) {
                dropdown.append($('<option></option>').attr('value', entry.RegNo).text(entry.RegNo));
            });
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error:', errorThrown);
        }
    });
}

function StDataBind() {
    var selectedRegNo = $('#RegNo').val();
    if (selectedRegNo) {
        StudentDataBind(selectedRegNo);
    } else {
        $('#StudentName').val('');
        $('#DepartmentName').val('');
    }
}

function StudentDataBind(RegNo) {
    $.ajax({
        url: '/StudentWebApi/GetByRegNo/' + '?RegNo=' + RegNo,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.length > 0) {
                $('#StudentName').val(data[0].StudentName);
                $('#DepartmentName').val(data[0].DeptName);
            } else {
                $('#StudentName').val('');
                $('#DepartmentName').val('');
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation:', errorThrown);
        }
    });
}

function Submit() {
    var selectedRegNo = $('#RegNo').val();
    $.ajax({
        url: '/ResultStudentViewApi/GetByRegNo' + '?RegNo=' + selectedRegNo,
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            if (data != null) {
                // Clear the table body before appending new rows
                $('table tbody').empty();

                var tr;
                for (var i = 0; i < data.length; i++) {
                    tr = $('<tr/>');
                    tr.append("<td>" + data[i].ResultID + "</td>");
                    tr.append("<td>" + data[i].RegNo + "</td>");
                    tr.append("<td>" + data[i].StudentName + "</td>");
                    tr.append("<td>" + data[i].DepartmentName + "</td>");
                    tr.append("<td>" + data[i].SemID + "</td>");
                    tr.append("<td>" + data[i].SubName + "</td>");
                    tr.append("<td>" + data[i].ExamName + "</td>");
                    tr.append("<td>" + data[i].TotalMarks + "</td>");
                    tr.append("<td>" + data[i].ObtainedMarks + "</td>");

                    $('table').append(tr);
                }
            } else {
                alert("Error");
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

