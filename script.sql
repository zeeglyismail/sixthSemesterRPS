USE [RPS]
GO
/****** Object:  Table [dbo].[Department]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[DeptID] [int] IDENTITY(1,1) NOT NULL,
	[DeptName] [varchar](50) NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[DeptID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExamType]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExamType](
	[ExamTypeID] [int] IDENTITY(1,1) NOT NULL,
	[ExamTypeName] [varchar](50) NOT NULL,
	[TotalMarks] [int] NOT NULL,
 CONSTRAINT [PK_ExamType] PRIMARY KEY CLUSTERED 
(
	[ExamTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Result]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Result](
	[ResultID] [int] IDENTITY(1,1) NOT NULL,
	[RegNo] [varchar](50) NULL,
	[StudentName] [varchar](50) NULL,
	[DepartmentName] [varchar](50) NULL,
	[SemID] [int] NULL,
	[SubName] [varchar](50) NULL,
	[ExamName] [varchar](50) NULL,
	[TotalMarks] [int] NULL,
	[ObtainedMarks] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Semester]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Semester](
	[SemID] [int] NOT NULL,
	[Sub1] [varchar](50) NULL,
	[Sub2] [varchar](50) NULL,
	[Sub3] [varchar](50) NULL,
	[Sub4] [varchar](50) NULL,
	[Sub5] [varchar](50) NULL,
 CONSTRAINT [PK_Semester] PRIMARY KEY CLUSTERED 
(
	[SemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentDetails]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentDetails](
	[RegNo] [int] IDENTITY(1950200489,1) NOT NULL,
	[StudentName] [varchar](50) NULL,
	[DeptName] [varchar](50) NULL,
	[SessionYear] [varchar](50) NULL,
 CONSTRAINT [PK_StudentDetails] PRIMARY KEY CLUSTERED 
(
	[RegNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Department] ON 

INSERT [dbo].[Department] ([DeptID], [DeptName]) VALUES (1011, N'EEE')
INSERT [dbo].[Department] ([DeptID], [DeptName]) VALUES (1013, N'BBA')
INSERT [dbo].[Department] ([DeptID], [DeptName]) VALUES (1015, N'CSE')
INSERT [dbo].[Department] ([DeptID], [DeptName]) VALUES (2012, N'MBA')
SET IDENTITY_INSERT [dbo].[Department] OFF
GO
SET IDENTITY_INSERT [dbo].[ExamType] ON 

INSERT [dbo].[ExamType] ([ExamTypeID], [ExamTypeName], [TotalMarks]) VALUES (3, N'Assignment', 25)
INSERT [dbo].[ExamType] ([ExamTypeID], [ExamTypeName], [TotalMarks]) VALUES (5, N'ClassTest', 15)
INSERT [dbo].[ExamType] ([ExamTypeID], [ExamTypeName], [TotalMarks]) VALUES (6, N'MidTerm', 30)
INSERT [dbo].[ExamType] ([ExamTypeID], [ExamTypeName], [TotalMarks]) VALUES (7, N'Final Exam', 50)
INSERT [dbo].[ExamType] ([ExamTypeID], [ExamTypeName], [TotalMarks]) VALUES (8, N'TEST', 100)
SET IDENTITY_INSERT [dbo].[ExamType] OFF
GO
SET IDENTITY_INSERT [dbo].[Result] ON 

INSERT [dbo].[Result] ([ResultID], [RegNo], [StudentName], [DepartmentName], [SemID], [SubName], [ExamName], [TotalMarks], [ObtainedMarks]) VALUES (23, N'1950201491', N'MD. ISMAIL HOSSAIN', N'CSE', 2, N'Discrete Mathematics', N'Final Exam', 50, 40)
INSERT [dbo].[Result] ([ResultID], [RegNo], [StudentName], [DepartmentName], [SemID], [SubName], [ExamName], [TotalMarks], [ObtainedMarks]) VALUES (15, N'1950201490', N'Naima', N'EEE', 7, N'Computer Graphics', N'MidTerm', 30, 401)
INSERT [dbo].[Result] ([ResultID], [RegNo], [StudentName], [DepartmentName], [SemID], [SubName], [ExamName], [TotalMarks], [ObtainedMarks]) VALUES (24, N'1950200493', N'Pranto', N'MBA', 1, N'Electrical and Electronic Circuit', N'ClassTest', 15, 10)
INSERT [dbo].[Result] ([ResultID], [RegNo], [StudentName], [DepartmentName], [SemID], [SubName], [ExamName], [TotalMarks], [ObtainedMarks]) VALUES (22, N'1950201491', N'MD. ISMAIL HOSSAIN', N'CSE', 3, N'Data Structure', N'TEST', 100, 95)
INSERT [dbo].[Result] ([ResultID], [RegNo], [StudentName], [DepartmentName], [SemID], [SubName], [ExamName], [TotalMarks], [ObtainedMarks]) VALUES (25, N'1950200494', N'Eva', N'MBA', 3, N'Object Oriented Programming', N'MidTerm', 30, 25)
SET IDENTITY_INSERT [dbo].[Result] OFF
GO
INSERT [dbo].[Semester] ([SemID], [Sub1], [Sub2], [Sub3], [Sub4], [Sub5]) VALUES (1, N'Structured Programming Language', N'Electrical and Electronic Circuit', N'Calculas', N'Physics', N'English')
INSERT [dbo].[Semester] ([SemID], [Sub1], [Sub2], [Sub3], [Sub4], [Sub5]) VALUES (2, N'Digital System Design', N'Discrete Mathematics', N'Linear Algebra', N'Statistics and Probability', N'History of the Emergence of Independent Bangladesh')
INSERT [dbo].[Semester] ([SemID], [Sub1], [Sub2], [Sub3], [Sub4], [Sub5]) VALUES (3, N'Data Structure', N'Object Oriented Programming', N'Computer Architecture', N'Ordinary Differential Equation', N'Fundamental of Business Studies')
INSERT [dbo].[Semester] ([SemID], [Sub1], [Sub2], [Sub3], [Sub4], [Sub5]) VALUES (4, N'Database Management System', N'Microprocessor and Assembly Language', N'Design and Analysis of Algorithms', N'Numerical Analysis', NULL)
INSERT [dbo].[Semester] ([SemID], [Sub1], [Sub2], [Sub3], [Sub4], [Sub5]) VALUES (5, N'Peripheral and Interfacing', N'Data and Telecommunications', N'Operating System', N'Economics', NULL)
INSERT [dbo].[Semester] ([SemID], [Sub1], [Sub2], [Sub3], [Sub4], [Sub5]) VALUES (6, N'Software Engineering', N'Computer Networking', N'Embedded System Programming', N'Theory of Computation', NULL)
INSERT [dbo].[Semester] ([SemID], [Sub1], [Sub2], [Sub3], [Sub4], [Sub5]) VALUES (7, N'Artificial Intelligence', N'Compiler Design and Construction', N'Computer Graphics', N'E-Commerce and Web Engineering', NULL)
INSERT [dbo].[Semester] ([SemID], [Sub1], [Sub2], [Sub3], [Sub4], [Sub5]) VALUES (8, N'Network and Information Security', N'Information System Management', N'Project/Industry Attachment', N'Cyber Law and Computer Forensic', NULL)
GO
SET IDENTITY_INSERT [dbo].[StudentDetails] ON 

INSERT [dbo].[StudentDetails] ([RegNo], [StudentName], [DeptName], [SessionYear]) VALUES (1950200492, N'Wasim', N'BBA', N'19-20')
INSERT [dbo].[StudentDetails] ([RegNo], [StudentName], [DeptName], [SessionYear]) VALUES (1950200493, N'Pranto', N'MBA', N'18-19')
INSERT [dbo].[StudentDetails] ([RegNo], [StudentName], [DeptName], [SessionYear]) VALUES (1950200494, N'Eva', N'MBA', N'19-20')
INSERT [dbo].[StudentDetails] ([RegNo], [StudentName], [DeptName], [SessionYear]) VALUES (1950201490, N'Naima', N'EEE', N'19-20')
INSERT [dbo].[StudentDetails] ([RegNo], [StudentName], [DeptName], [SessionYear]) VALUES (1950201491, N'MD. ISMAIL HOSSAIN', N'CSE', N'19-20')
SET IDENTITY_INSERT [dbo].[StudentDetails] OFF
GO
/****** Object:  StoredProcedure [dbo].[SP_Department]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_Department]
    @Action VARCHAR(10),       -- CRUD action: 'CREATE', 'READ', 'UPDATE', 'DELETE'
    @DeptID INT = NULL,        -- Department ID (for update and delete operations)
    @DeptName VARCHAR(50) = NULL  -- Department name (for create and update operations)
AS
BEGIN
    IF @Action = 'CREATE'
    BEGIN
        INSERT INTO Department (DeptName) VALUES (@DeptName);
        SELECT SCOPE_IDENTITY() AS NewDeptID; -- Return the ID of the newly created department
    END
    ELSE IF @Action = 'READ'
    BEGIN
        IF @DeptID IS NULL
        BEGIN
            -- Return all departments if no specific department ID is provided
            SELECT * FROM Department;
        END
        ELSE
        BEGIN
            -- Return the department with the provided department ID
            SELECT * FROM Department WHERE DeptID = @DeptID;
        END
    END

    ELSE IF @Action = 'UPDATE'
    BEGIN
        IF @DeptID IS NULL
        BEGIN
            -- Cannot perform update without a specific department ID
            PRINT 'Error: Please provide a department ID for update operation.';
        END
        ELSE
        BEGIN
            -- Update the department with the provided department ID
            UPDATE Department SET DeptName = @DeptName WHERE DeptID = @DeptID;
        END
    END
    ELSE IF @Action = 'DELETE'
    BEGIN
        IF @DeptID IS NULL
        BEGIN
            -- Cannot perform delete without a specific department ID
            PRINT 'Error: Please provide a department ID for delete operation.';
        END
        ELSE
        BEGIN
            -- Delete the department with the provided department ID
            DELETE FROM Department WHERE DeptID = @DeptID;
        END
    END
    ELSE
    BEGIN
        -- Invalid action
        PRINT 'Error: Invalid action specified.';
    END
END
GO
/****** Object:  StoredProcedure [dbo].[SP_ExamType]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_ExamType]
    @Action VARCHAR(10),         -- CRUD action: 'CREATE', 'READ', 'UPDATE', 'DELETE'
    @ExamTypeID INT = NULL,         
    @ExamTypeName VARCHAR(50) = NULL,  
    @TotalMarks INT = NULL    
AS
BEGIN
    IF @Action = 'CREATE'
    BEGIN
        INSERT INTO ExamType(ExamTypeName, TotalMarks)
        VALUES (@ExamTypeName, @TotalMarks);
        SELECT SCOPE_IDENTITY() AS ExamTypeID; 
    END
    ELSE IF @Action = 'READ'
    BEGIN
        IF @ExamTypeID IS NULL
        BEGIN
          
            SELECT * FROM ExamType;
        END
        ELSE
        BEGIN
           
            SELECT * FROM ExamType WHERE ExamTypeID = @ExamTypeID;
        END
    END
    ELSE IF @Action = 'UPDATE'
    BEGIN
        IF @ExamTypeID IS NULL
        BEGIN
          
            PRINT 'Error: Please provide a registration number for update operation.';
        END
        ELSE
        BEGIN
          
            UPDATE ExamType
            SET ExamTypeName = ISNULL(@ExamTypeName, ExamTypeName),
                TotalMarks = ISNULL(@TotalMarks, TotalMarks)
            WHERE ExamTypeID = @ExamTypeID;
        END
    END
    ELSE IF @Action = 'DELETE'
    BEGIN
        IF @ExamTypeID IS NULL
        BEGIN
         
            PRINT 'Error: Please provide a registration number for delete operation.';
        END
        ELSE
        BEGIN
          
            DELETE FROM ExamType WHERE ExamTypeID = @ExamTypeID;
        END
    END
    ELSE
    BEGIN
        -- Invalid action
        PRINT 'Error: Invalid action specified.';
    END
END

GO
/****** Object:  StoredProcedure [dbo].[SP_Result]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_Result]
    @Action VARCHAR(10),
	@ResultID INT = NULL,
	@RegNo INT = NULL,
	@StudentName VARCHAR(50) = NULL,
	@DepartmentName VARCHAR(50) = NULL,
	@SemID INT = NULL,
	@SubName VARCHAR(50) = NULL,
    @ExamName VARCHAR(50) = NULL,         
    @TotalMarks INT = NULL, 
    @ObtainedMarks INT = NULL    
AS
BEGIN
    IF @Action = 'CREATE'
    BEGIN
        INSERT INTO Result (RegNo, StudentName, DepartmentName, SemID,SubName,ExamName,TotalMarks,ObtainedMarks)
        VALUES (@RegNo, @StudentName, @DepartmentName, @SemID, @SubName, @ExamName, @TotalMarks, @ObtainedMarks);
        SELECT SCOPE_IDENTITY() AS NewResultID; 
    END
    ELSE IF @Action = 'READ'
    BEGIN
        IF @ResultID IS NULL
        BEGIN
          
            SELECT * FROM Result;
        END
        ELSE
        BEGIN
           
            SELECT * FROM Result WHERE ResultID = @ResultID;
        END
    END
    ELSE IF @Action = 'UPDATE'
    BEGIN
        IF @ResultID IS NULL
        BEGIN
          
            PRINT 'Error: Please provide a registration number for update operation.';
        END
        ELSE
        BEGIN
          
            UPDATE Result 
            SET 
				ObtainedMarks = ISNULL (@ObtainedMarks,ObtainedMarks)

            WHERE ResultID = @ResultID;
        END
    END
    ELSE IF @Action = 'DELETE'
    BEGIN
        IF @ResultID IS NULL
        BEGIN
         
            PRINT 'Error: Please provide a registration number for delete operation.';
        END
        ELSE
        BEGIN
          
            DELETE FROM Result WHERE ResultID = @ResultID;
        END
    END
    ELSE
    BEGIN
        -- Invalid action
        PRINT 'Error: Invalid action specified.';
    END
END

GO
/****** Object:  StoredProcedure [dbo].[SP_Semester]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_Semester]
    @Action VARCHAR(10),       -- CRUD action: 'create', 'read', 'update', 'delete'
    @SemID INT =NULL,                -- Semester ID (for update and delete operations)
    @Sub1 VARCHAR(50)=NULL,  -- Subject 1 (for create and update operations)
    @Sub2 VARCHAR(50)=NULL,  -- Subject 2 (for create and update operations)
    @Sub3 VARCHAR(50)=NULL,  -- Subject 3 (for create and update operations)
    @Sub4 VARCHAR(50)=NULL,  -- Subject 4 (for create and update operations)
    @Sub5 VARCHAR(50)=NULL  -- Subject 5 (for create and update operations)
AS
BEGIN
    IF @Action = 'CREATE'
    BEGIN
        INSERT INTO Semester (SemID, Sub1, Sub2, Sub3, Sub4, Sub5)
        VALUES (@SemID, @Sub1, @Sub2, @Sub3, @Sub4, @Sub5);
    END

    ELSE IF @Action = 'READ'
    BEGIN
        SELECT * FROM Semester WHERE SemID = @SemID;
    END

	ELSE IF @Action = 'GETALL'
    BEGIN
        SELECT * FROM Semester
    END

    ELSE IF @Action = 'UPDATE'
    BEGIN
        UPDATE Semester
        SET Sub1 = ISNULL(@Sub1, Sub1),
            Sub2 = ISNULL(@Sub2, Sub2),
            Sub3 = ISNULL(@Sub3, Sub3),
            Sub4 = ISNULL(@Sub4, Sub4),
            Sub5 = ISNULL(@Sub5, Sub5)
        WHERE SemID = @SemID;
    END
    ELSE IF @Action = 'DELETE'
    BEGIN
        DELETE FROM Semester WHERE SemID = @SemID;
    END
END
GO
/****** Object:  StoredProcedure [dbo].[SP_StudentDetails]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_StudentDetails]
    @Action VARCHAR(10),         -- CRUD action: 'CREATE', 'READ', 'UPDATE', 'DELETE'
    @RegNo INT = NULL,           -- Registration number (for update and delete operations)
    @StudentName VARCHAR(50) = NULL,  -- Student name (for create and update operations)
    @DeptName VARCHAR(50) = NULL,     -- Department name (for create and update operations)
    @SessionYear VARCHAR(50) = NULL   -- Session year (for create and update operations)
AS
BEGIN
    IF @Action = 'CREATE'
    BEGIN
        INSERT INTO StudentDetails (StudentName, DeptName, SessionYear)
        VALUES (@StudentName, @DeptName, @SessionYear);
        SELECT SCOPE_IDENTITY() AS NewRegNo; -- Return the ID of the newly created student
    END
    ELSE IF @Action = 'READ'
    BEGIN
        IF @RegNo IS NULL
        BEGIN
            -- Return all student details if no specific registration number is provided
            SELECT * FROM StudentDetails;
        END
        ELSE
        BEGIN
            -- Return the student details with the provided registration number
            SELECT * FROM StudentDetails WHERE RegNo = @RegNo;
        END
    END
    ELSE IF @Action = 'UPDATE'
    BEGIN
        IF @RegNo IS NULL
        BEGIN
            -- Cannot perform update without a specific registration number
            PRINT 'Error: Please provide a registration number for update operation.';
        END
        ELSE
        BEGIN
            -- Update the student details with the provided registration number
            UPDATE StudentDetails
            SET StudentName = ISNULL(@StudentName, StudentName),
                DeptName = ISNULL(@DeptName, DeptName),
                SessionYear = ISNULL(@SessionYear, SessionYear)
            WHERE RegNo = @RegNo;
        END
    END
    ELSE IF @Action = 'DELETE'
    BEGIN
        IF @RegNo IS NULL
        BEGIN
            -- Cannot perform delete without a specific registration number
            PRINT 'Error: Please provide a registration number for delete operation.';
        END
        ELSE
        BEGIN
            -- Delete the student details with the provided registration number
            DELETE FROM StudentDetails WHERE RegNo = @RegNo;
        END
    END
    ELSE
    BEGIN
        -- Invalid action
        PRINT 'Error: Invalid action specified.';
    END
END
GO
/****** Object:  StoredProcedure [dbo].[SP_StudentResultView]    Script Date: 04-Jul-24 8:56:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_StudentResultView]
    @Action VARCHAR(10),       
    @RegNo INT = NULL       
    
AS
BEGIN
 IF @Action = 'READ'
 SELECT * FROM Result WHERE RegNo = @RegNo;
END

GO
