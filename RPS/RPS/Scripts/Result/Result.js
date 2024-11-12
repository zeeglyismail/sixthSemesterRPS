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

function StudentDataBind(regNo) {
    $.ajax({
        url: '/StudentWebApi/GetByRegNo/' + '?RegNo=' + regNo,
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

SemesterDropdown();

function SemesterDropdown() {
    $.ajax({
        url: '/SemApi/GetAll',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var dropdown = $('#SemID');
            dropdown.empty();
            dropdown.append('<option value="">--Select a Semester--</option>');
            $.each(data, function (key, entry) {
                dropdown.append($('<option></option>').attr('value', entry.SemID).text(entry.SemID));
            });
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error:', errorThrown);
        }
    });
}

function loadSubjects() {
    var selectedSemID = $('#SemID').val();
    if (selectedSemID) {
        $.ajax({
            url: '/SemApi/GetBySemID/' + '?SemID=' + selectedSemID,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                var dropdown = $('#SubName');
                dropdown.empty();
                dropdown.append('<option value="">--Select a Subject--</option>');
                $.each(data, function (key, entry) {
                    dropdown.append($('<option></option>').attr('value', entry.Sub1).text(entry.Sub1));
                    dropdown.append($('<option></option>').attr('value', entry.Sub2).text(entry.Sub2));
                    dropdown.append($('<option></option>').attr('value', entry.Sub3).text(entry.Sub3));
                    dropdown.append($('<option></option>').attr('value', entry.Sub4).text(entry.Sub4));
                    dropdown.append($('<option></option>').attr('value', entry.Sub5).text(entry.Sub5));
                });
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error:', errorThrown);
            }
        });
    } else {
        $('#SubName').empty();
        $('#SubName').append('<option value="">--Select a Subject--</option>');
    }
}


ExamTypeDropdown();
function ExamTypeDropdown() {
    $.ajax({
        url: '/ExamTypeApi/GetAll',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var dropdown = $('#ExamTypeID');
            dropdown.empty();
            dropdown.append('<option value="">--Select an Exam Type--</option>');
            $.each(data, function (key, entry) {
                dropdown.append($('<option></option>').attr('value', entry.ExamTypeID).text(entry.ExamTypeName));
            });
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error:', errorThrown);
        }
    });
}

function ETBind() {
    var selectedExamType = $('#ExamTypeID').val();
    console.log(selectedExamType)
    if (selectedExamType) {
        ExamTypeDataBind(selectedExamType);
    } else {
        $('#TotalMarks').val('');
    }
}

function ExamTypeDataBind(selectedExamType) {
    $.ajax({
        url: '/ExamTypeApi/GetByExamTypeID/' + '?ExamTypeID=' + selectedExamType,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.length > 0) {
                $('#ExamTypeName').val(data[0].ExamTypeName);
                $('#TotalMarks').val(data[0].TotalMarks);
            } else {
                $('#ExamTypeName').val(data[0].ExamTypeName);
                $('#TotalMarks').val('');
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation:', errorThrown);
        }
    });
}

DataLoad();
function DataLoad() {
    $.ajax
        ({
            url: '/ResultApi/GetAll',
            type: 'Get',
            dataType: 'json',
            success: function (data, textStatus, xhr) {
                if (data != null) {
                    var tr;
                    for (var i = 0; i < data.length; i++) {
                        tr = $('<tr/>');
                        tr.append('<td><i onclick=ResultDataBind(' + data[i].ResultID + ')><i class="fa fa-edit"></i></i></td>');
                        tr.append('<td><i onclick=Delete(' + data[i].ResultID + ')><i class="fa fa-remove"></i></i></td>');
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
    var ResultDetails = {
        RegNo: $('#RegNo').val(),
        StudentName: $('#StudentName').val(),
        DepartmentName: $('#DepartmentName').val(),
        SemID: $('#SemID').val(),
        SubName: $('#SubName').val(),
        ExamName: $('#ExamTypeName').val(),
        TotalMarks: $('#TotalMarks').val(),
        ObtainedMarks: $('#ObtainedMarks').val(),

    }
    console.log(ResultDetails)
    $.ajax
        ({
            url: '/ResultApi/Insert',
            type: 'Post',
            datatype: 'json',
            data: ResultDetails,
            success: function (data, textStatus, xhr) {
                if (data == 1) {
                    alert('Result Inserted Sucessfully!!!')
                    location.reload();
                }
                else {
                    alert('Result Insertion Failed!x!')
                }
            },
            error: function (xhr, textStatus, errorthrown) {
                console.log('Error in Operation')
            }
        });
}

function ResultDataBind(row) {
    $.ajax({
        url: '/ResultApi/GetByResultID/' + '?ResultID=' + row,
        type: 'Get',
        dataType: 'json',
        success: function (data, textStatus, xhr) {

            var dropdown = $('#SubName');
            dropdown.empty();
            $.each(data, function (key, entry) {
                dropdown.append($('<option></option>').attr('value', entry.SubName).text(entry.SubName));
            });

            var dropdown = $('#ExamTypeID');
            dropdown.empty();
            $.each(data, function (key, entry) {
                dropdown.append($('<option></option>').attr('value', entry.ExamTypeName).text(entry.ExamName));
            });

            var dropdown = $('#SemID');
            dropdown.empty();
            $.each(data, function (key, entry) {
                dropdown.append($('<option></option>').attr('value', entry.SemID).text(entry.SemID));
            });

            var dropdown = $('#RegNo');
            dropdown.empty();
            $.each(data, function (key, entry) {
                dropdown.append($('<option></option>').attr('value', entry.RegNo).text(entry.RegNo));
            });


            $('#ResultID').val(data[0].ResultID)
            $('#StudentName').val(data[0].StudentName)
            $('#DepartmentName').val(data[0].DepartmentName)
            $('#ExamTypeName').val(data[0].ExamName)
            $('#TotalMarks').val(data[0].TotalMarks)
            $('#ObtainedMarks').val(data[0].ObtainedMarks)
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function Update() {

    var ResultDetails = {
        ResultID: $('#ResultID').val(),
        ObtainedMarks: $('#ObtainedMarks').val(),
    }
    $.ajax({
        url: '/ResultApi/Update/',
        type: 'POST',
        dataType: 'json',
        data: ResultDetails,
        success: function (data, textStatus, xhr) {
            if (data == 1) {
                alert("Updated Succesfully")
                location.reload();
            }
            else {
                alert("Please, Select a Result!!")
            }

        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation')
        }
    });
}

function Delete(row) {
    $.ajax({
        url: '/ResultApi/Delete/' + '?ResultID=' + row,
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