import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { CreateStudentDto } from '../dto/create-student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post()
    async createStudent(@Res() response, @Body() createStudentDto: CreateStudentDto){
        try{
            const newStudent = await this.studentService.createStudent(createStudentDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Student has benn created successfully', newStudent,
            });
        }catch(err){
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Student not created',
                error: 'Bad Request'
            });
        }
    }

    @Get()
    async getStudents(@Res() response){
        try{
            const studentData = await this.studentService.getAllStudents();
            return response.status(HttpStatus.OK).json({
                message: 'All students data found successfully', studentData,
            });
        }catch(err){
            return response.status(err.status).json(err.response);
        }
    }

}
